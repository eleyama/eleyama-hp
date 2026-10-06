# ELEYAMA HP

猫と暮らすプログラマーのHP。Astroで静的生成し、Cloudflare Workers Static Assetsで配信します。

## ローカル確認

Node.js 24 LTSを推奨。

```powershell
npm.cmd ci
npm.cmd run dev
```

表示されるlocalhostのURLをブラウザで開きます。モックはmock/index.htmlに保存しています。公開版はsrc/pages/index.astroです。

## 検証

```powershell
npm.cmd run build
npm.cmd test
npm.cmd run preview
```

紹介文はsrc/pages/index.astro、スタイルはsrc/styles/global.css、画像はpublic/imagesを編集します。サンプルは準備中です。

## Cloudflareへの接続

GitHubリポジトリ：https://github.com/eleyama/eleyama-hp

Workers & PagesでGitHubからWorkerを作成し、このリポジトリを選択します。

- プロジェクトルート：リポジトリのルート
- 本番ブランチ：main
- ビルドコマンド：npm run build && npm test
- デプロイコマンド：npx wrangler deploy
- 静的配信対象：dist（wrangler.jsoncで指定済み）

提供URLで確認した後、Workerのカスタムドメインにeleyama.comを追加します。メール転送のMX・TXTレコードは削除しません。wwwの接続は別途設定します。

GitHub Actionsは検証用です。Cloudflare Buildsが公開を担当し、ビルドコマンド内のテストに成功した場合のみデプロイします。APIキーやパスワードはリポジトリに保存しません。

公開HTMLにrobotsのnoindexはありません。現時点ではコード準備のみで、外部公開は未実施です。
