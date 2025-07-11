## React で SPA を作る

フィヨルドブートキャンプの以下のプラクティスの提出物をまとめるリポジトリです。
「React で SPA を作る」
「Context を使ってグローバルな state を管理する」

# メモアプリ

このメモアプリは、Vite と React を使用して作成された SPA（シングルページアプリケーション）です。
ローカル環境で実行することができ、メモの一覧表示、詳細表示、追加、編集、削除ができます。

## インストール手順

### 1. リポジトリのクローン

GitHubからこのリポジトリをクローンしてください。

### 2. ディレクトリに移動

クローンしたリポジトリのディレクトリに移動します。

### 3. 必要な npm パッケージのインストール

以下のコマンドを実行します。

```
npm install
```

### 4. アプリケーションの起動

以下のコマンドを実行します。

```
npm run dev
```

### 5. アプリケーションへのアクセス

ブラウザを開いて、以下のURLにアクセスしてください。

```
http://localhost:5173/
```

### 7. アプリケーションの停止

`CTRL` + `c`で停止してください。

## アプリケーションの使用方法

### 1. メモの一覧表示

アプリケーションにアクセスすると、登録されたメモの一覧が表示されます。
ログインしていない状態でも閲覧できます。

### 2. メモの追加

ログイン状態のときのみ、メモの一覧の下部に「＋」が表示されます。
「＋」を押下すると、「新規メモ」が作成されます。
内容を編集し、「更新」ボタンを押下することで、内容を保存できます。

### 3. メモの編集

ログイン状態で、メモの編集ページで内容を編集し、「更新」ボタンを押下することで、そのメモを更新できます。
ログインしていない場合、編集はできません。

### 4. メモの削除

ログイン状態で、メモの編集ページで「削除」ボタンを押下することで、そのメモを削除できます。
削除後は、メモの一覧ページに遷移します。
ログインしていない場合、削除ボタンは表示されません。

### 5. ログイン／ログアウト

画面右上の「ログイン」ボタンを押下するとログイン状態になります。
ログイン中は、メモの追加・更新・削除が可能になります。
ログアウトすると、それらの操作はできなくなりますが、メモの閲覧は引き続き可能です。

## 注意事項

- メモの内容は、ブラウザの LocalStorage に保存されるため、アプリケーションを再起動してもデータは保持されます。
- ログイン機能は簡易的な状態管理によるものであり、実際の認証処理は行っていません。
