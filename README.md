# Nodejs_6th
Node.jsを使用してサーバーサイドとデータベースのアクセス連携を試す。
<br>
- Postmanにてリクエストを送信
- Node.jsにてサーバーサイドを構築<br>
  APIの構築: Postmanから受け取ったリクエストからPostgreSQLへデータ要求しPostmanへデータを返す<br>
- SQLの基礎学習
<br>

## 使用環境について
Postman<br>
クライアント側からリクエスト送信に使用するアプリ<br>
<br>
Node.js v22.1.0<br>
サーバーに使用する<br>
<br>
PostgreSQL<br>
DBに使用<br>

## 環境構築
package.jsonファイルの生成<br>

```
npm init -y
```

<br>

express, nodemon, pgのインストール<br>
nodemon 保存する度にサーバーをリロードしてくれるモジュール<br>
pg PostgreSQLとNode.jsで作成したサーバーを連携するモジュール<br>

```
npm i express nodemon pg
```

<br>

dotenvのインストール<br>
を環境変数を使用し保守性を高める<br>

```
npm i dotenv
```

<br>

package.jsonのscriptsに以下の内容を追加

```
"scripts": {
    "start": "nodemon server.js"
}
```

<br>

.envの作成<br>

```
touch .env
```
.envに以下を記載<br>

```
# PostgreSQLのパスワード
PG_PWD=[PostgreSQLのパスワード]
```

<br>

## PostgreSQLの基礎操作

SQL Shell(psql)からターミナルを起動
<br>
各問にreturnキーで進める<br>

PostgreSQLにてDB作成

```
postgres=# CREATE DATABASE users;
```

<br>

作成したDBに接続

```
postgres=# \c users
```

<br>

usersテーブルの作成

```
users=# CREATE TABLE users (
ID serial primary key,
name varchar(255),
email varchar(255),
age int);
```

<br>

作成したテーブルの確認

```
users=# \dt
```
```
         List of relations
 Schema | Name  | Type  |  Owner   
--------+-------+-------+----------
 public | users | table | postgres
(1 row)
```
<br>

レコードの登録

```
users=# INSERT INTO users (name, email, age)
values ('hogehoge', 'hogehoge@gmail.com', 25),
('testUser', 'test@gmail.com', 34);
```
```
INSERT 0 2
```

<br>

レコードの取得<br>

```
users=# SELECT * FROM users;
```
```
 id |   name   |       email        | age 
----+----------+--------------------+-----
  1 | hogehoge | hogehoge@gmail.com |  25
  2 | testUser | test@gmail.com     |  34
(2 rows)
```

<br>

## PostmanにてGETとPOSTを試す

### GET

![GET](https://github.com/user-attachments/assets/20b33e9d-7646-4b0f-8745-57170c1fdca4)

### POST_SUCCESS

![POST_SUCCESS](https://github.com/user-attachments/assets/be7c3218-b6ca-46cc-98c3-8e830f2d0287)

### POST_ERROR

![POST_ERROR](https://github.com/user-attachments/assets/7666917d-4fb4-46d7-a4ed-95d6fa0cd02a)
