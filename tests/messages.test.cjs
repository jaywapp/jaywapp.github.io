const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');

const messages = Object.fromEntries(['ko', 'en'].map(locale => [locale, JSON.parse(readFileSync(join(__dirname, '../messages', locale + '.json'), 'utf8'))]));
function leaves(value, prefix = '') {
  return Object.entries(value).flatMap(([key, item]) => {
    const name = prefix ? prefix + '.' + key : key;
    return item && typeof item === 'object' ? leaves(item, name) : [[name, item]];
  });
}
test('both locales expose matching translation keys', () => {
  assert.deepEqual(leaves(messages.ko).map(([key]) => key).sort(), leaves(messages.en).map(([key]) => key).sort());
});
for (const locale of ['ko', 'en']) {
  test(locale + ' translations contain no null, empty or non-string leaves', () => {
    for (const [key, value] of leaves(messages[locale])) {
      assert.equal(typeof value, 'string', key);
      assert.notEqual(value.trim(), '', key);
    }
  });
}
test('translated interpolation arguments agree across locales', () => {
  const english = new Map(leaves(messages.en));
  const argumentsOf = text => [...text.matchAll(/\{(\w+)(?:[,}])/g)].map(match => match[1]).sort();
  for (const [key, value] of leaves(messages.ko)) {
    assert.deepEqual(argumentsOf(value), argumentsOf(english.get(key)), key);
  }
});
