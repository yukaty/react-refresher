// expressモジュールを取り込む
const express = require('express');

// Webサーバーの土台を作成
const app = express();

// 商品リスト
const items = [
  { "id": 1, "name": "ノート", "price": 200 },
  { "id": 2, "name": "ボールペン", "price": 150 },
  { "id": 3, "name": "消しゴム", "price": 100 }
]

// 全商品のデータを取得
app.get('/items', (req, res) => {
  // 商品リストをJSON形式に変換して出力
  res.json(items);
});

// IDで指定した商品のデータを取得
app.get('/items/:id', (req, res) => {
  // 商品リストから、リクエストのIDと一致するデータを検索
  const item = items.find(i => i.id === parseInt(req.params.id));

  if (item) { // 商品が見つかった場合
    // 商品リストをJSON形式に変換して出力
    res.json(item);
  } else { // 商品が見つからなかった場合
    res.status(404).json({ message: '商品が見つかりませんでした。' });
  }
});

// Webサーバーを起動し、3000番ポートへのリクエストを待機
app.listen(3000, () => {
  console.log('http://localhost:3000 でWebサーバーが起動しました。');
});

