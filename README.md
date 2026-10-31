# ELEYAMA HP

猫と暮らすプログラマーのHP。Astroで静的生成し、Cloudflare Workers Static Assetsで https://eleyama.com に配信します。

## ローカル確認

開発・CIではNode.js 24を使用します。package.jsonの要件は>=22.12.0です。

```powershell
npm.cmd ci
npm.cmd run dev
```

表示されるURLをブラウザで開きます。公開用の編集元はsrc/pages/index.astro、スタイルはsrc/styles/global.css、画像はpublic/imagesです。

## 検証

```powershell
npm.cmd run build
npm.cmd test
npm.cmd run preview
```

テストはビルド済みのdistを対象に、アンカー、アセット、メタ情報、SVGメール表示、サンプル準備中、404を確認します。ブラウザE2Eや全端末の表示検証は含みません。

## 公開設定

GitHub：https://github.com/eleyama/eleyama-hp

Worker eleyama-hpにカスタムドメインeleyama.comを接続しています。Cloudflare Buildsの設定：

- プロジェクトルート：リポジトリのルート
- 本番ブランチ：main
- ビルドコマンド：npm run build && npm test
- デプロイコマンド：npx wrangler deploy
- 配信対象：dist（wrangler.jsoncで指定）

GitHub Actionsは検証用です。Cloudflare Buildsが自身のビルド・テスト成功後に公開します。メール用MX・TXTレコードを維持してください。認証情報はリポジトリに保存しません。

トップにnoindexはなく、404には設定済みです。技術サンプルは準備中で、一覧・詳細ページとMarkdown管理は未実装です。連絡先はSVGのアットマークを使って表示し、mailtoリンクは設けていません。
