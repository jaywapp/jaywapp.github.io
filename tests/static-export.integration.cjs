const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync, existsSync } = require('node:fs');
const { join } = require('node:path');

const output = join(__dirname, '..', 'out');
const readPage = (path) => readFileSync(join(output, path), 'utf8');

const assertBundledAssets = (html) => {
  const assets = new Set([...html.matchAll(/(?:src|href)="(\/_next\/[^"?]+)(?:\?[^"]*)?"/g)].map((match) => match[1]));
  assert.ok(assets.size > 0, 'no bundled assets exported');
  for (const asset of assets) {
    assert.ok(existsSync(join(output, decodeURIComponent(asset.slice(1)))), `missing asset ${asset}`);
  }
};

// Every in-site link must lead to a page that was exported.
const assertInternalLinks = (html) => {
  for (const match of html.matchAll(/\bhref="(\/(?:ko|en)\/[^"#]*)"/g)) {
    assert.ok(existsSync(join(output, match[1], 'index.html')), `broken page link ${match[1]}`);
  }
};

for (const locale of ['ko', 'en']) {
  test(`${locale} home export preserves navigation targets and serves every bundled asset`, () => {
    const html = readPage(`${locale}/index.html`);
    assert.match(html, new RegExp(`<html[^>]+lang="${locale}"`));
    assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
    assert.match(html, new RegExp(`rel="canonical" href="https://jaywapp.com/${locale}/"`));
    const targets = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
    for (const section of ['work', 'made', 'posts', 'career']) {
      assert.ok(targets.has(section), `missing section ${section}`);
    }
    for (const match of html.matchAll(/\bhref="#([^"]+)"/g)) {
      assert.ok(targets.has(match[1]), `broken section link ${match[1]}`);
    }
    assert.match(html, new RegExp(`href="/${locale}/resume/"`));
    assertInternalLinks(html);
    assertBundledAssets(html);
    assert.ok(existsSync(join(output, 'smilegate-logo-black.svg')) && existsSync(join(output, 'smilegate-logo-white.svg')));
    assert.doesNotMatch(html, /Application error:|MISSING_MESSAGE|NEXT_NOT_FOUND/);
    assert.doesNotMatch(html, /[\u2014\u2013]/, 'dash characters are not used in copy');
  });

  test(`${locale} resume export has its own canonical and lists every employer`, () => {
    const html = readPage(`${locale}/resume/index.html`);
    assert.match(html, new RegExp(`<html[^>]+lang="${locale}"`));
    assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
    assert.match(html, new RegExp(`rel="canonical" href="https://jaywapp.com/${locale}/resume/"`));
    assert.equal([...html.matchAll(/<details class="co"/g)].length, 6);
    assert.match(html, /\bid="rows"/);
    assert.match(html, new RegExp(`href="/${locale}/"`));
    assertInternalLinks(html);
    assertBundledAssets(html);
    assert.doesNotMatch(html, /Application error:|MISSING_MESSAGE|NEXT_NOT_FOUND/);
    assert.doesNotMatch(html, /[\u2014\u2013]/, 'dash characters are not used in copy');
  });
}

test('root export provides a Korean redirect and a usable fallback link', () => {
  const html = readPage('index.html');
  assert.match(html, /http-equiv="refresh" content="0; url=\/ko\/"/);
  assert.match(html, /href="\/ko\/"/);
  assert.ok(existsSync(join(output, 'ko', 'index.html')));
});

test('static hosting includes a real 404 document and metadata assets', () => {
  assert.match(readPage('404.html'), /<h1\b[^>]*>404<\/h1>/);
  for (const asset of ['favicon.svg', 'og-image.png', 'robots.txt', 'sitemap.xml']) {
    assert.ok(existsSync(join(output, asset)), `missing metadata asset ${asset}`);
  }
});

test('export keeps the custom domain and the pages published outside the portfolio', () => {
  // The deploy replaces the whole gh-pages branch, so anything missing here goes offline.
  assert.equal(readPage('CNAME').trim(), 'jaywapp.com');
  for (const page of ['app-ads.txt', 'iam-headcoach/index.html', 'iam-headcoach/privacy/index.html']) {
    assert.ok(existsSync(join(output, page)), `missing published page ${page}`);
  }
  assert.match(
    readPage('iam-headcoach/privacy/index.html'),
    /rel="canonical" href="https:\/\/jaywapp\.com\/iam-headcoach\/privacy\/"/,
  );
});
