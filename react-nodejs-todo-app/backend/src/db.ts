import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// 型をインポートする
import type { RowDataPacket, ResultSetHeader } from 'mysql2/promise';

// .envファイルを読み込む
dotenv.config();

// DB接続設定
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 8889,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

// DB接続プールを作成する
const pool = mysql.createPool(dbConfig);

// DB接続プールを破棄する関数
export async function closePool() {
  try {
    await pool.end();
    console.log('データベース接続プールを破棄しました。');
  } catch (err) {
    console.error('データベース接続プールの破棄中にエラーが発生しました：', err);
  }
}

// SQL文を実行する関数（SELECT）
// 配列で結果を返す - Tは返り値の型を指定するためのジェネリック型
export async function query<T = any>(sql: string, params: any[] = []) {
  try {
    const [rows] = await pool.execute<RowDataPacket[]>(sql, params);
    return rows as T[];
  } catch (err) {
    console.error('SQLの実行中にエラーが発生しました：', err);
    throw err;
  }
}

// SQL文を実行する関数（INSERT、UPDATE、DELETE）
// ResultSetHeader型は、行数や自動採番されたIDなどのメタ情報を含む
export async function exec(sql: string, params: any[] = []) {
  try {
    const [result] = await pool.execute<ResultSetHeader>(sql, params);
    return result;
  } catch (err) {
    console.error('SQLの実行中にエラーが発生しました：', err);
    throw err;
  }
}