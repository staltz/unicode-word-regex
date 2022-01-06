//@ts-check
const test = require('tape');
const getUnicode = require('.');

test('positives', (t) => {
  t.true(getUnicode().test('foobar'), 'foobar');
  t.true(getUnicode().test('ö'), 'ö');
  t.true(getUnicode().test('çã'), 'çã');
  t.true(getUnicode().test('fú'), 'fú');
  t.end();
});

test('negatives', (t) => {
  t.false(getUnicode().test('1'), '1');
  t.false(getUnicode().test('.'), '.');
  t.false(getUnicode().test('#'), '#');
  t.end();
});
