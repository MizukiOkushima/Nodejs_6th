# Nodejs_6th
Node.jsを使用してサーバーサイドとデータベースのアクセス連携を試す。
<br>
- Postmanにてリクエストを送信
- Node.jsにてサーバーサイドを構築<br>
  APIの構築: Postmanから受け取ったリクエストからPostgreSQLへデータ要求しPostmanへデータを返す<br>
- SQLの基礎学習
<br>
### 使用環境について
Postman<br>
クライアント側からリクエスト送信に使用するアプリ<br>
<br>
Node.js v22.1.0<br>
サーバーに使用する<br>
<br>
PostgreSQL<br>
DBに使用<br>

### 環境構築
package.jsonファイルの生成<br>
`npm init -y`<br>
<br>
express, nodemon, pgのインストール<br>
nodemon 保存する度にサーバーをリロードしてくれるモジュール<br>
pg PostgreSQLとNode.jsで作成したサーバーを連携するモジュール<br>
`npm i express nodemon pg`<br>
package.jsonのscriptsに以下の内容を追加<br>
`"scripts": {
    "start": "nodemon server.js"
}`<br>