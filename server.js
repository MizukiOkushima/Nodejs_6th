// expressの読み込み
const express = require("express");
const app = express();

// poolの読み込み
const pool = require("./db");

// ポートの指定
const PORT = 8000;

// json形式で返すためミドルウェアの設定
app.use(express.json());

// API作成
// 第一引数 エンドポイント / ルートの指定
app.get("/", (req, res) => {
    res.send("Hello Express");
});

// GET ユーザー情報を全て取得するAPI
app.get("/users", (req, res) => {

    // query SQL文
    pool.query("SELECT * FROM users", (error, results) => {

        // エラー処理
        if (error) throw error;

        // ステータス200番の場合、json形式で返す
        return res.status(200).json(results.rows);

    });
});

// GET 特定のユーザーを取得するAPI
// :文字列 任意の文字列を設定 動的にエンドポイントを設定可能
app.get("/users/:id", (req, res) => {

    // URLからIDを取得 /user/:idの部分を取得
    const id = req.params.id;

    // query SQL文
    // 代二引数 配列にて:idをを設定 PostgreSQLではプレースホルダとして配列二指定した値または変数を$1, $2...と使用可能となる
    pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {

        // エラー処理
        if (error) throw error;

        // ステータス200番の場合、json形式で返す
        return res.status(200).json(results.rows);

    });
});

// POST ユーザーを登録するAPI
// ブラウザからGETメソッドしかつかえないためPostmanにて送信する
app.post("/users", (req, res) => {

    // 分割代入で取得
    const { name, email, age } = req.body;

    // ユーザーがすでに登録されているか確認する
    // req.bodyの中のemailが存在するかを確認する
    pool.query("SELECT s FROM users s WHERE s.email = $1", [email], (error, result) => {

        if (result.rows.length) {
            return res.send("ユーザーがすでに存在しています。");
        }

        // ユーザーの登録処理
        pool.query("INSERT INTO users(name, email, age) values($1, $2, $3)", [name, email, age], (error, results) => {
            if(error) throw error;
            res.status(201).send("ユーザー登録に成功しました。")
        });

    });

});

// listen サーバーの起動
// 第一引数 ポート番号指定
app.listen(PORT, () => {
    console.log("server is running on PORT " + PORT);
});