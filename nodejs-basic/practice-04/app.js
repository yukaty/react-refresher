const express = require('express');
const app = express(); // Webサーバーの土台を作成
const PORT = 3000; // ポート番号

// DB共通モジュールをインポート
const { executeQuery, closePool } = require('./db');

// ミドルウェアでJSON形式のリクエストボディを自動的にパース
app.use(express.json());

// サーバーエラーを処理する共通関数
function handleServerError(res, error, message = 'サーバーエラー') {
  console.error(error);
  res.status(500).json({ error: message });
}

// ToDoの作成(Create)
app.post('/todos', async (req, res) => {
  const { title, priority } = req.body;
  try { // INSERT文を実行し、ToDoを作成
    const result = await executeQuery(
      'INSERT INTO todos (title, priority) VALUES (?, ?);',
      [title, priority]
    );
    res.status(201).json({ id: result.insertId, title, priority, status: '未着手' });
  } catch (err) {
    handleServerError(res, err, 'ToDo追加に失敗しました');
  }
});

// ToDoリストの読み取り(Read)
app.get('/todos', async (req, res) => {
  try { // SELECT文を実行し、全ToDoを取得
    const rows = await executeQuery('SELECT * FROM todos;');
    res.status(200).json(rows);
  } catch (err) { // エラー処理
    handleServerError(res, err);
  }
});

// ToDoの更新(Update)
app.put('/todos/:id', async (req, res) => {
  const { title, priority, status } = req.body;
  try { // UPDATE文を実行し、結果をJSON形式で返却
    const result = await executeQuery(
      'UPDATE todos SET title = ?, priority = ?, status = ? WHERE id = ?;',
      [title, priority, status, req.params.id]
    );
    result.affectedRows === 0
      ? res.status(404).json({ error: '更新対象のToDoが見つかりません' })
      : res.status(200).json({ id: req.params.id, title, priority, status });
  } catch (err) { // エラー処理
    handleServerError(res, err, 'ToDo更新に失敗しました');
  }
});

// ToDoの削除(Delete)
app.delete('/todos/:id', async (req, res) => {
  try { // DELETE文を実行し、結果をJSON形式で返却
    const result = await executeQuery(
      'DELETE FROM todos WHERE id = ?;',
      [req.params.id]
    );
    result.affectedRows === 0
      ? res.status(404).json({ error: '削除対象のToDoが見つかりません' })
      : res.status(200).json({ message: 'ToDoを削除しました' });
  } catch (err) { // エラー処理
    handleServerError(res, err, 'ToDo削除に失敗しました');
  }
});

// アプリ終了時にDB接続プールを安全に閉じる
['SIGINT', 'SIGTERM', 'SIGHUP'].forEach(signal => {
  process.on(signal, async () => {
    console.log(`\n${signal}を受信。アプリケーションの終了処理中...`);
    await closePool();
    process.exit();
  });
});

// Webサーバーを起動
app.listen(PORT, () => {
  console.log(`${PORT}番ポートでWebサーバーが起動しました。`);
});

