# JavaScript ポートフォリオ

JavaScriptの基礎練習として作成したポートフォリオです。

## 作成した機能
- FAQの開閉（クリックで表示・非表示）

## 使用技術
- HTML
- CSS
- JavaScript

## 意識したこと
- HTMLの構造を意識して実装しました
- JavaScriptでDOM操作とイベント処理を行いました
- classの付け替えによる表示制御を実装しました







# FAQページ（JavaScript）

## 概要
JavaScriptの学習として、よくあるFAQ（質問と回答）ページを作成しました。  
質問をクリックすると、回答が表示・非表示に切り替わるシンプルなアコーディオンUIです。

---

## 使用技術
- HTML
- CSS
- JavaScript（Vanilla JS）

---

## 機能
- 質問をクリックすると回答が表示される
- 再度クリックすると回答が閉じる
- 複数のFAQに対応

---

## 工夫した点
- `closest()` を使って、クリックした質問に対応する回答だけを操作するようにした
- `classList.toggle()` を使い、CSSとJavaScriptの役割を分けた
- シンプルで見やすいデザインを意識した

---

## 学んだこと
- DOMの取得方法（`querySelector`, `querySelectorAll`）
- イベントリスナーの使い方
- HTML構造とJavaScriptの関係性の重要さ

---

## 今後の改善点
- デザインのブラッシュアップ
- スマートフォン表示への最適化
