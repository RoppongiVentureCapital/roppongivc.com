# セッション引き継ぎメモ（2026-03-22）

**次のセッションで最初に言うこと：「docs/session_handoff_20260322.md を読んで」**

---

## 現在の状態

### Webサイト
- URL: https://www.roppongivc.com/
- ホスティング: GitHub Pages（Hugo静的サイト）
- リポジトリ: https://github.com/RoppongiVentureCapital/roppongivc.com （public）
- ブランチ運用: devで作業 → mainにマージで公開
- デザイン: Monocle風エディトリアル（セリフ見出し + サンセリフ本文、白背景、黒ボーダー）

### サイト構成（3ページ）
1. **ホーム** — 「Roppongi Venture Capital」ロゴ＋団体名、ミッション、About文、JIWA最新記事
2. **Members** — 山田航司（Founding Partner）プロフィール、写真、経歴、LinkedIn/X/note/Zennリンク
3. **JIWA（/jiwa/）** — Webメディア。記事1本公開中

### 公開中の記事
- 「世界のお金は全部でいくら？ — 約9京円の全体像を1記事で理解する【2026年版】」
- 日付: 2026-03-22
- 全額を兆円表記に統一済み
- matplotlibで生成したグラフ5枚 + A〜F一覧グラフ1枚
- 整合性チェック: 会計等式（資産=負債+純資産）から切り口A〜F全項目を分類して9京円を導出

### 設定済み
- Google Search Console: 所有権確認済み、サイトマップ送信済み
- Google Analytics: G-BRMZ5TV9BJ 埋め込み済み
- OGPタグ: SNSシェア対応
- SSL/HTTPS: 対応済み
- フッター: 「当団体はファンド運用・投資勧誘を行っておりません。」記載

### ドメイン問題（未解決）
- `roppongivc.com`（wwwなし）でアクセスできない
- 原因: Cloudflare Registrarが自動生成したCNAMEレコード（→ default-page.cloudflareregistrar.com）がロックされていて編集・削除不可
- Parking Pageは無効化済みだがレコードが残るCloudflareの既知バグ
- 対応: Cloudflareサポートにチケットを出す（https://support.cloudflare.com/）
- 現在は `www.roppongivc.com` のCNAME → `roppongiventurecapital.github.io` で運用中

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
    ├── content/jiwa/         ← メディア記事
    ├── content/members/
    ├── layouts/
    ├── static/css/style.css
    ├── static/img/           ← ロゴ、写真、グラフ画像
    └── .github/workflows/hugo.yml
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
  - NPO港区ウェルネス推進研究所 代表
  - AWS ソリューションアーキテクト
  - LinkedIn: https://www.linkedin.com/in/koji-yamada-386578202/
  - X: https://x.com/koji_yamada_aws
  - note: https://note.com/koji_yamada_note
  - Zenn: https://zenn.dev/trump

---

## 次にやるべきこと

### 優先度高
1. Cloudflareサポートにチケット → roppongivc.com（wwwなし）でのアクセス実現
2. SNSアカウント作成（X: @roppongivc）→ API申請 → 記事拡散
3. デザイン改善（まだ素人感が残る）

### 優先度中
4. 英語版サイト作成
5. 新しい記事の執筆・公開
6. LinkedInの企業ページ作成

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
- 金額は兆円表記。ドル表記は使わない
