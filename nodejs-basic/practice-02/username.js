// ユーザー名のバリデーション関数
// true：バリデーションOK
// false：バリデーションNG
function isValidUsername(username) {
    // 文字列データでない場合はバリデーションNG
    if (typeof username !== 'string') {
      return false;
    }

    // 文字数が3～20文字であればバリデーションOK
    return username.length >= 3 && username.length <= 20;
  }

  // テスト対象をエクスポート
  module.exports = isValidUsername;

