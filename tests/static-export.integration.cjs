const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync, existsSync } = require('node:fs');
const { join } = require('node:path');

const output = join(__dirname, '..', 'out');
const readPage = (path) => readFileSync(join(output, path), 'utf8');

for (const locale of ['ko', 'en']) {
  test(`${locale} export preserves navigation targets and serves every bundled asset`, () => {
    const html = readPage(`${locale}/index.html`);
    assert.match(html, new RegExp(`<html[^>]+lang="${locale}"`));
    assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
    assert.match(html, new RegExp(`rel="canonical" href="https://jaywapp.github.io/${locale}/"`));
    const targets = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
    for (const section of ['about', 'experience', 'projects', 'github', 'contact']) {
      assert.ok(targets.has(section), `missing section ${section}`);
    }
    for (const match of html.matchAll(/\bhref="#([^"]+)"/g)) {
      assert.ok(targets.has(match[1]), `broken section link ${match[1]}`);
    }
    const assets = new Set([...html.matchAll(/(?:src|href)="(\/_next\/[^"?]+)(?:\?[^"]*)?"/g)].map((match) => match[1]));
    assert.ok(assets.size > 0, 'no bundled assets exported');
    for (const asset of assets) {
      assert.ok(existsSync(join(output, decodeURIComponent(asset.slice(1)))), `missing asset ${asset}`);
    }
    assert.doesNotMatch(html, /Application error:|MISSING_MESSAGE|NEXT_NOT_FOUND/);
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
