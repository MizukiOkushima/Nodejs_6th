// expressの読み込み
const express = require("express");
const app = express();

// ポートの指定
const PORT = 8000;

// API作成
// 第一引数 エンドポイント / ルートの指定
app.get("/", (req, res) => {
    res.send("Hello Express");
});

// listen サーバーの起動
// 第一引数 ポート番号指定
app.listen(PORT, () => {
    console.log("server is running on PORT " + PORT);
});