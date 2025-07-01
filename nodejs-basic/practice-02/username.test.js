const isValidUsername = require('./username');

describe('【単体テスト】isValidUsername()関数', () => {
  // テストケース1
  test('有効：最小文字数（3文字）', () => {
    expect(isValidUsername('abc')).toBe(true);
  });

  // テストケース2
  test('有効：最大文字数（20文字）', () => {
    expect(isValidUsername('abcdefghijklmnopqrst')).toBe(true);
  });

  // テストケース3
  test('無効：境界値1（2文字）', () => {
    expect(isValidUsername('ab')).toBe(false);
  });

  // テストケース4
  test('無効：境界値2（21文字）', () => {
    expect(isValidUsername('abcdefghijklmnopqrstu')).toBe(false);
  });

  // テストケース5
  test('無効：データ型不正1（null）', () => {
    expect(isValidUsername(null)).toBe(false);
  });

  // テストケース6
  test('無効：データ型不正2（数値）', () => {
    expect(isValidUsername(12345)).toBe(false);
  });
});

