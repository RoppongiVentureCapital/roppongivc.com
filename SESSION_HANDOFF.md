# セッション引き継ぎメモ（2026-03-23）

**次のセッションで最初に言うこと：「SESSION_HANDOFF.md を読んで」**

---

## 現在の状態

### Webサイト
- URL: https://www.roppongivc.com/
- 英語版: https://www.roppongivc.com/en/
- ホスティング: GitHub Pages（Hugo静的サイト）
- リポジトリ: https://github.com/RoppongiVentureCapital/roppongivc.com （public）
- ブランチ運用: devで作業 → mainにマージで公開
- デザイン: Monocle風エディトリアル（セリフ見出し + サンセリフ本文、白背景、黒ボーダー）

### サイト構成（3ページ × 日英）
1. **ホーム** — 「Roppongi Venture Capital」団体名、ミッション、About文、JIWA最新記事
2. **Members** — 山田航司（Founding Partner）プロフィール、写真、経歴、LinkedIn/X/note/Zennリンク
3. **JIWA（/jiwa/）** — Webメディア。記事1本公開中（日英両方）

### 公開中の記事
- 日本語: 「世界のお金は全部でいくら？ — 約9京円の全体像を1記事で理解する【2026年版】」（全額兆円表記）
- 英語: "How Much Money Is There in the World? — The $600 Trillion Big Picture [2026 Edition]"（全額ドル表記）
- 日付: 2026-03-22
- matplotlibで生成したグラフ: 日本語版5枚+A〜F一覧1枚、英語版5枚+A〜F一覧1枚
- 整合性チェック: 会計等式（資産=負債+純資産）から切り口A〜F全項目を分類して9京円/$600Tを導出

### 多言語対応
- hugo.tomlに日英設定済み
- ナビに「English」「Japanese」切替ボタンあり
- 各ページの英語版テンプレート作成済み（index.en.html, list.en.html等）
- 英語版コンテンツファイル: _index.en.md, members/_index.en.md, jiwa/_index.en.md, jiwa/global-money-map-2026.en.md
- フッター免責事項も日英対応

### 設定済み
- Google Search Console: 所有権確認済み、サイトマップ送信済み
- Google Analytics: G-BRMZ5TV9BJ 埋め込み済み
- OGPタグ: SNSシェア対応（og:title, og:description, twitter:card等）
- SSL/HTTPS: 対応済み
- フッター: 日本語「当団体はファンド運用・投資勧誘を行っておりません。」/ 英語「We do not operate funds or solicit investments.」
- hugo.yml: --buildFuture フラグ追加済み（未来日付の記事も公開される）

### ドメイン問題（未解決）
- `roppongivc.com`（wwwなし）でアクセスできない
- 原因: Cloudflare Registrarが自動生成したCNAMEレコード（→ default-page.cloudflareregistrar.com）がロックされていて編集・削除不可
- Parking Pageは無効化済みだがレコードが残るCloudflareの既知バグ
- 対応: Cloudflareサポートにチケットを出す（https://support.cloudflare.com/）
- 現在は `www.roppongivc.com` のCNAME → `roppongiventurecapital.github.io` で運用中
- Cloudflareのログインメールアドレス/APIキーにアクセスできない問題もあり

### SNS
- X（Twitter）: @Roppongi_VC アカウント作成済み
- 表示名: Roppongi VC
- X API: Developer App作成済み（App ID: 2035715294337880064）
- APIキー: ~/.roppongivc_x_keys に保存済み（OAuth 1.0a: API Key, API Secret, Access Token, Access Token Secret）
- **自動投稿は不可**: X API無料プランでは投稿できない（402 Payment Required）。Basic月$200が必要
- 投稿は手動 or Buffer（無料: 月10投稿）で対応

---

## GitHubアカウント・リポジトリ

| リポジトリ | 用途 | 公開設定 |
|---|---|---|
| RoppongiVentureCapital/roppongivc.com | Webサイト（Hugo） | public |
| RoppongiVentureCapital/run-plan | 事業計画・戦略ドキュメント | private |

- GitHub MCP認証: ~/.kiro/settings/mcp.json にFine-grained PAT設定済み（RoppongiVentureCapitalアカウント）
- ただしMCPツールは別アカウント（king-trump-america）のキャッシュが残る場合あり → curl API直接呼び出しで対応
- git global config: user.name=RoppongiVentureCapital, user.email=yamadakj@roppongivc.com

---

## ローカルファイル構成

```
/Users/yamadakj/Desktop/AWS/20260307_Run-Plan/
├── docs/                    ← 事業戦略ドキュメント（run-planリポジトリ）
├── agents/                  ← AIエージェントペルソナ
├── meetings/                ← 創業会議議事録
├── material/                ← リーンキャンバス等
├── site/                    ← 旧サイト（Autonoma時代、使っていない）
└── roppongivc.com/          ← 現行Webサイト（roppongivc.comリポジトリ）
    ├── hugo.toml
    ├── content/jiwa/         ← メディア記事（.md=日本語, .en.md=英語）
    ├── content/members/
    ├── layouts/              ← テンプレート（.html=日本語, .en.html=英語）
    ├── static/css/style.css
    ├── static/img/           ← ロゴ、写真、グラフ画像（日英別）
    ├── .github/workflows/hugo.yml
    └── SESSION_HANDOFF.md    ← この引き継ぎファイル
```

---

## 六本木ベンチャーキャピタルとは

### ミッション
「日本最高峰のSTEM頭脳に、世界最高峰の起業家体験を。」

### 事業
- 数学オリンピック・科学オリンピックメダリスト級の中高大学生を対象としたインキュベーションプログラムの運営を計画中
- Webメディア「JIWA」を運営
- 法的形態: 個人事業主（屋号：六本木ベンチャーキャピタル）
- ファンド運用・投資勧誘は行っていない

### メンバー
- 山田 航司（Founding Partner）
  - 東工大院修了、Harvard Medical School Executive Education修了
  - 始動Next Innovator、UC Berkeley SkyDeck、Venture Café Tokyo
  - NPO港区ウェルネス推進研究所 代表（英語版URL: https://sites.google.com/view/minatokuwellness-en）
  - AWS ソリューションアーキテクト
  - LinkedIn: https://www.linkedin.com/in/koji-yamada-386578202/
  - X: https://x.com/koji_yamada_aws
  - note: https://note.com/koji_yamada_note
  - Zenn: https://zenn.dev/trump

---

## 次にやるべきこと

### 優先度高
1. Xで最初の投稿（手動）— 「世界のお金」記事の拡散用スレッド作成
2. Cloudflareサポートにチケット → roppongivc.com（wwwなし）でのアクセス実現
3. デザイン改善（まだ素人感が残る）
4. 記事を増やす（検索キーワード狙い撃ち: 「信用創造 わかりやすく」「M2 マネーサプライ とは」等）

### 優先度中
5. はてなブックマーク砲を狙う
6. LinkedInの企業ページ作成 → 英語版記事の拡散
7. Zenn/noteに要約版を投稿してサイトに誘導
8. AdSense申請（記事10本程度揃ったら）
9. プライバシーポリシーページ作成（AdSense申請に必要）

### 参考ドキュメント
- docs/21_a16z_research.md — a16z調査レポート
- docs/22_vc_legal_review.md — VC名称使用に関する法務レビュー
- docs/23_roppongi_vc_concept.md — 事業コンセプト
- docs/24_business_setup_guide.md — 事業立ち上げ手続きガイド
- docs/25_media_and_business_strategy.md — メディア＆事業戦略

---

## オーナーからの注意事項
- 敬語で話すこと
- 適当なことを言わないこと。根拠を示すこと
- 勝手に判断して進めないこと。確認を取ること
- まず作って見せること。オーナーは実物を見てから指摘するスタイル
- デザインのセンスが問われている。「AI感」を出さないこと
- 日本語サイトの金額は兆円表記。ドル表記は使わない
- 英語サイトの金額はドル表記
- 取り消し線バグ: Hugoが ~ をstrikethroughと解釈するので、英語記事では ≈ を使う
