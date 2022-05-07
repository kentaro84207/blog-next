---
title: 'Web Speed Hackathon 2021 mini 振り返り'
excerpt: '2021/22 の年末年始の休みの合間でWeb Speed Hackathon 2021 miniに参加しました。メモ程度に振り返ります。'
coverImage: '/assets/blog/hello-world/cover.jpg'
date: '2022-01-29T00:00:00.000Z'
author:
  name: Tim Neutkens
  picture: '/assets/blog/authors/tim.jpeg'
ogImage:
  url: '/assets/blog/hello-world/cover.jpg'
---

2021/22 の年末年始の休みの合間で[Web Speed Hackathon 2021 mini](https://developers.cyberagent.co.jp/blog/archives/32747/)に参加しました。メモ程度に振り返ります。

最終的な結果は 503 点（720 点満点）でした。

## やったこと

[web-speed-hackathon-2020](https://github.com/CyberAgentHack/web-speed-hackathon-2020/wiki/Web-Speed-Hackathon-Online-%E5%87%BA%E9%A1%8C%E3%81%AE%E3%81%AD%E3%82%89%E3%81%84%E3%81%A8%E8%A7%A3%E8%AA%AC) の解説記事を参考にしながら取り組みました

リポジトリは[こちら](https://github.com/kentaro84207/web-speed-hackathon-2021)

### ビルド

#### package.json

- `build` コマンドの `NODE_ENV=development` を `NODE_ENV=production` に修正
- `browserslist` を追加
  - `["last 1 chrome version"]`
- `babel-node` を `production` から除去

#### webpack

- `production` では `inline-source-map` を埋め込まないように設定
- `mode` を `production` に切り替え
- `css-minimizer-webpack-plugin` で css を minify
- `terser-webpack-plugin` で js を minify
- `preload-webpack-plugin` で css を preload

#### tailwind

- `tailwind.config.js` に `purge` を設定
  - `purge: ['./src/**/*.html','./src/**/*.jsx']`

### フロントエンド

#### スクロール改善

- スクロールに関する処理を修正

#### CSS 周り

- `normalize.css` の削除

#### font 周り

- 不要な `webfont` を削除

#### 依存パッケージの最適化

- `jQuery` を削除、 `fetch` に置き換え
- `blob` を使わないように修正
- `lodash` を削除し、自前の実装で置き換え
- `moment` を削除し、自前の実装で置き換え
- `pako` を削除
- `react-helmet` を削除し、自前の実装で置き換え

#### 画像・動画・音源周りの最適化

- 画像の遅延ロードのために、 `loading="lazy"` を付与
- `jpeg` を `avif` に置き換え
- `gif` を `webm` に置き換え
- `mp3` を `aac` に置き換え
- 画像のアスペクト比の計算を改善
- 画像サイズの改善
- 不要な `svg` を削除

#### コード分割

- `React.lazy` を用いて[コード分割](https://ja.reactjs.org/docs/code-splitting.html#reactlazy)

## 感想

今回初めてこのようなチューニングコンテストの様な形式に取り組みましたが、非常に楽しかったです。できていないこともたくさんあるので他の方の解説記事を読んで吸収しておきたいです。運営の方、ありがとうございました！
