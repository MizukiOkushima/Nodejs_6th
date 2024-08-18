// .envファイルの読み込み
const dotenv = require("dotenv").config();

// コネクションプールの作成
// PostgreSQLへいつでもアクセスできる状況にする
const Pool = require("pg").Pool;

// インスタンス化
// passwordは.envにて設定してください
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "users",
    password: process.env.PG_PWD,
    port: 5432,
});

// モジュールのエクスポート
module.exports = pool;