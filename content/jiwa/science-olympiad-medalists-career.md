---
title: "科学オリンピックメダリストはどこへ向かうのか — 天才高校生たちの進路をデータで追う"
date: 2026-04-06
draft: false
description: "2025年、AIがIMOで金メダルレベルに到達した。では人間のメダリストはどこへ向かうのか。700人超の追跡データから、進学先・就職先・起業率の実態を分野別に整理した。"
pillars: ["Deep Tech Decoded"]
tags: ["データ", "AI", "スタートアップ"]
hero_style: "background:linear-gradient(135deg,#0a1628 0%,#1a2744 40%,#0d3655 100%)"
thumbnail: "/img/jiwa/science-olympiad-careers.png"
hero_label: "Deep Tech Decoded"
---

&nbsp;

2025年7月、AIが国際数学オリンピック（IMO）で金メダルレベルのスコアを叩き出した。OpenAIとGoogle DeepMindの両方が、42点満点中35点 — 人間の金メダリストと同等の成績を収めた。2024年は銀メダルだったのが、わずか1年で金に到達した。

同じ年、AIは国際物理オリンピック（IPhO）の理論問題でも金メダリストの中央値を上回るスコアを記録している（ただし実験問題は対象外）。

では、人間のメダリストたちはどこへ向かうのか。AIが「解く力」で人間に追いついた今、彼らの頭脳はどこで、何に使われているのか。

この記事では、国際科学オリンピックの主要分野のメダリストたちのキャリアを、公開されている調査・論文・報道をもとに整理する。

なお、本記事は筆者が独自にメダリスト全員を追跡調査したものではない。主要なデータソースは以下の通りで、それぞれカバー範囲と限界がある。

<table>
<tr><th>ソース</th><th>種別</th><th>対象</th><th>サンプル数</th><th>限界</th></tr>
<tr><td><a href="https://xquant.substack.com/p/where-have-the-international-math">xquant Substack</a>（Neeloy Banerjee, 2024）</td><td>個人ブログ（データ分析）</td><td>IMO金メダリスト</td><td>700人超</td><td>金メダリストのみ。銀・銅は含まない。LinkedIn等の公開情報ベースのため、情報が見つからない人物は漏れている可能性がある</td></tr>
<tr><td><a href="https://link.springer.com/article/10.1007/s11192-024-05042-y">Yuret et al.</a>（Scientometrics, 2024）</td><td>学術論文（査読付き）</td><td>IMOメダリスト（金銀銅）</td><td>非公開（広範）</td><td>Googleが最多雇用主との結果だが、金メダリストに限るとxquantと異なる傾向も</td></tr>
<tr><td><a href="https://chierhu.medium.com/career-trajectories-of-ioi-medalists-6c975edb4b1a">Medium記事</a>（chierhu, 2025）</td><td>個人ブログ（事例紹介）</td><td>IOIメダリスト</td><td>個別事例</td><td>体系的な統計ではなく、著名人の事例紹介が中心</td></tr>
<tr><td><a href="https://cen.acs.org/articles/85/i36/Chemistry-Olympians.html">ACS</a>（American Chemical Society）</td><td>業界団体メディア</td><td>IChO参加者</td><td>個別事例</td><td>米国参加者の追跡記事。統計的な分析ではない</td></tr>
</table>

**IMO以外のオリンピックについては、体系的なキャリア追跡データがほぼ存在しない。** IPhO、IChO、IBOに関する記述は、個別事例や一般的な傾向に基づく推測を含む。この点を踏まえて読んでほしい。

---

## 国際科学オリンピックの全体像

### 12分野の一覧

「国際科学オリンピック」は単一の組織が運営しているわけではない。各分野が独立した運営団体を持ち、それぞれ別の大会として開催されている。「国際科学オリンピック（ISOs）」はこれらの総称にすぎない。Wikipediaでは現在12の大会が一覧されている。

国際科学オリンピックは基本的に中等教育課程の生徒（中学生・高校生）が対象だ。ただし年齢制限は分野によって異なり、中学生でも出場できる大会がある。実際に13〜14歳で金メダルを取る天才もいる。

| # | 略称 | 分野 | 開始年 |
|---|---|---|---|
| 1 | IMO | 数学 | 1959年 |
| 2 | IPhO | 物理 | 1967年 |
| 3 | IChO | 化学 | 1968年 |
| 4 | IOI | 情報科学 | 1989年 |
| 5 | IBO | 生物 | 1990年 |
| 6 | IPO | 哲学 | 1993年 |
| 7 | IAO | 天文 | 1996年 |
| 8 | iGeo | 地理 | 1996年 |
| 9 | IOL | 言語学 | 2003年 |
| 10 | IJSO | ジュニア科学 | 2004年 |
| 11 | IESO | 地学 | 2007年 |
| 12 | IOAA | 天文・天体物理 | 2007年 |

これに加え、2024年にIOAI（人工知能）が新設されるなど、分野は今も増え続けている。

<small style="color:#999;font-size:12px">出典: [Wikipedia - International Science Olympiad](https://en.wikipedia.org/wiki/International_Science_Olympiad)（2026年2月更新）</small>

### 本記事が扱う範囲：主要5分野

12分野すべてのメダリストのキャリアを追跡するのは現実的ではない（そもそもデータが存在しない分野が大半だ）。本記事では、参加国数が多く歴史も長い主要5分野に絞って扱う。

| オリンピック | 分野 | 開始年 | 参加国数 | 代表枠 | メダル基準 |
|---|---|---|---|---|---|
| IMO（数学） | 数学 | 1959年 | 約110カ国 | 各国最大6名 | 上位約50%にメダル（金:銀:銅 ≈ 1:2:3） |
| IPhO（物理） | 物理学 | 1967年 | 約90カ国 | 各国最大5名 | 上位約50%にメダル |
| IChO（化学） | 化学 | 1968年 | 約85カ国 | 各国最大4名 | 上位約66%にメダル（金12%/銀22%/銅32%） |
| IOI（情報） | 情報科学 | 1989年 | 約90カ国 | 各国最大4名 | 上位約50%にメダル |
| IBO（生物） | 生物学 | 1990年 | 約80カ国 | 各国最大4名 | 上位約50%にメダル |

---

## IMO（数学）メダリストの進路 — 最も追跡データが豊富

IMO金メダリストのキャリアについては、Neeloy Banerjeeによる700人超の追跡調査（xquant Substack、2024年）が最も包括的なデータソースだ。また、学術論文としてはYuretらの「Career paths of the International Mathematics Olympiad (IMO) medalists」（ResearchGate、2024年）がある。以下のデータは主にこの2つに基づく。

### 大学：MITが圧倒的

IMO金メダリストの進学先は、MITが他を大きく引き離して1位。ハーバード、北京大学、ケンブリッジが続く。

![IMO金メダリストの進学先大学](/img/imo_university_ranking.png)

国ごとのパターンも興味深い。中国のメダリストの多くは北京大学に入学するが、その後MITに編入するケースが一定数見られる。ロシアのメダリストはモスクワ大学やMIPTなど国内に留まる傾向が強い。日本やロシアは、メダリストが国内の大学に進学する割合が特に高い国として挙げられている。

<small style="color:#999;font-size:12px">出典: Neeloy Banerjee, "Where have the International Math Olympiad Gold Medallists Ended Up?" Part 2, xquant Substack, 2024</small>

### PhD率：73%、ただし低下傾向

xquantの調査によると、IMO金メダリストの73%がPhDを取得している。しかしこの比率は過去20年で低下傾向にある。

背景として、テック企業（特にGoogle）とクオンツ金融（Citadel、Jane Street等）の報酬上昇がある。xquantのデータでは、2010年以降に金メダルを取った世代で、PhDを経ずに直接クオンツ金融に就職するケースが増えている。アカデミアの割合が減り、クオンツ金融の割合が増えるという構造的な変化が見える。

![IMO金メダリストのPhD取得率 — 世代別推移](/img/imo_phd_rate_trend.png)

### キャリアの内訳 — 世代で変わる

2010年以前にメダルを取った世代（全員がPhDを終えている世代）のデータ：

| 進路 | 割合 | 主な就職先 |
|---|---|---|
| アカデミア | 約60% | MIT、プリンストン、スタンフォード等の数学・CS・経済学の教授 |
| テック | 約15〜20% | Google（圧倒的1位）、Meta、Microsoft |
| クオンツ金融 | 約15〜20% | Citadel、Jane Street、Two Sigma、Jump Trading、HRT |
| その他 | 数% | — |

しかし世代が新しくなるほど、アカデミアの割合は下がり、クオンツ金融の割合が上がっている。

![IMO金メダリストのキャリア内訳 — 世代別の変化](/img/imo_career_by_era.png)

<small style="color:#999;font-size:12px">出典: xquant Substack (Neeloy Banerjee, 2024) — 700人超の追跡データ</small>

**Googleは「テック企業のMIT」**と表現されるほど、IMO金メダリストの就職先として突出している。金メダリストに限ると、Citadelが Microsoftを上回り、Google に次ぐ2位に入る。

![IMO金メダリストの就職先 — テック・金融企業](/img/imo_company_ranking.png)

注目すべきは、**スタートアップを創業した人物がほとんど見えない**ことだ。xquantの分析ではキャリアの分類が「アカデミア」「テック」「クオンツ金融」「その他」の4つで、起業家は独立したカテゴリとして存在しない。

ただし、xquantの2025年の更新記事では、OpenAI等のAI企業がIMOメダリストを採用し始めている動きが報告されている。

<small style="color:#999;font-size:12px">出典: Neeloy Banerjee, xquant Substack Part 2, 2024; 同 2025年更新記事; Yuret et al., "Career paths of the IMO medalists", ResearchGate, 2024</small>

---

## IOI（情報）メダリストの進路 — 起業家が目立つ

IOIメダリストのキャリアは、IMOとは異なるパターンを示す。**起業家が目立つ。**

ただし注意が必要だ。IOIメダリストについてはIMOほど大規模な体系的追跡調査が存在しない。以下は個別事例の集積と、Medium等の分析記事に基づく。

### IOIから起業家が生まれやすい構造的な背景

考えられる理由はいくつかある（ただし、これらは仮説であり、体系的に検証されたものではない）。

1. **プログラミングスキルが直接プロダクトになりうる。** 数学の定理や物理の法則は、それだけでは売れない。しかしコードは書いた瞬間にプロダクトになりうる
2. **ソフトウェアは資本集約度が相対的に低い。** 物理のディープテック（量子コンピュータ、核融合等）は装置に数十億円かかる。ソフトウェアはノートPC1台で始められる
3. **AI時代にアルゴリズム力の市場価値が上がった。** 2020年代のAIブームで、アルゴリズムを深く理解している人材の需要が急増した
4. **PhDを取らずに業界に出る人が比較的多い。** CSはPhDなしでも高報酬の職に就けるため、起業の機会に早く触れやすい

### Cognition AI — IOI金メダリストが作った$10Bの会社

最も象徴的な事例がCognition AIだ。

- 創業者3人（Scott Wu、Steven Hao、Walden Yan）全員がIOI金メダリスト
- Scott Wuは2014年のIOIで満点1位
- 2024年3月時点で10人のチームにIOI金メダル合計10個
- 史上最強の競技プログラマーと称されるGennady Korotkevich（IOI金6回）も所属
- AIコーディングエージェント「Devin」を開発
- 2025年9月、Founders Fund主導で$400M調達、評価額$10.2B

<small style="color:#999;font-size:12px">出典: [Wikipedia - Cognition AI](https://en.wikipedia.org/wiki/Cognition_AI)、[TechCrunch, 2025/9/8](https://techcrunch.com/2025/09/08/cognition-ai-defies-turbulence-with-a-400m-raise-at-10-2b-valuation/)、[Cognition AI公式ブログ](https://cognition.ai/blog/funding-growth-and-the-next-frontier-of-ai-coding-agents)</small>

---

## IPhO（物理）メダリストの進路 — 体系的データは乏しい

IPhOメダリストについては、IMOのような大規模な追跡調査は確認できていない。個別事例やQuora等の情報から、アカデミア（物理学の教授・研究者）に進む割合が高いと推測されるが、正確な比率は不明だ。

物理学の知識はディープテック起業と理論上は相性が良い。量子コンピュータ、核融合、新素材、宇宙技術 — いずれも物理学の知見が不可欠だ。しかし、これらの分野は研究開発期間が長く必要な資本も大きいため、起業のハードルが高い可能性がある。IPhOメダリストの起業家として広く知られている人物は、現時点では確認できていない。

2025年にはAIがIPhOの理論問題で人間のトップ層に追いついた。具体的には：

- **Physics Supernova**（Princeton大学チーム開発のAIエージェント）がIPhO 2025の理論問題で**23.5/30点**を記録。406人中14位で、人間の金メダリスト中央値（22.8点）を上回った。Gemini 2.5 Proをベースに、画像解析ツール（ImageAnalyzer）と回答検証ツール（AnswerReviewer）を組み合わせたエージェント構成。LLM単体では21.4点だったのが、ツール統合で23.5点に向上した
- **Gemini 3.1 Pro**ベースのエージェント（個人研究者Yichen Huang開発）は同じ理論問題で5回の試行すべてで**満点（30/30点）**を達成。4つの並列解答を生成し合成する手法と、Python画像計測を組み合わせた。ただしGemini 3.1 ProはIPhO 2025後にリリースされたため、データ汚染の可能性がある

なお、同論文のTable 1によると、2025年時点でAIが金メダルレベルに到達したオリンピックはIMO、IPhO、IChO、IOI、IOAAの5分野に及ぶ。いずれも理論問題のみで、実験問題はAIの対象外。

<small style="color:#999;font-size:12px">出典: [Physics Supernova - arXiv:2509.01659](https://arxiv.org/abs/2509.01659)（Princeton大学、2025年9月）; [Gemini Perfect Score - arXiv:2603.03352](https://arxiv.org/html/2603.03352v1)（Yichen Huang、2026年2月）</small>

---

## IChO（化学）・IBO（生物）メダリストの進路 — データは限定的

大規模な追跡調査は確認できていない。唯一の参考資料はACS（American Chemical Society）が2007年に掲載した米国IChO参加者9名へのインタビュー記事だ。サンプルは小さいが、具体的な進路が見える。

- **Jeff Snyder**（1987年、銅）→ Caltech教員、材料科学（熱電材料）
- **Binghai Ling**（2001年、金）→ UCLA MD/PhDプログラム（医学+研究の両立）
- **Jason Chen**（1996年銅、1997年金）→ Scripps研究所で有機化学PhD
- **Thomas Snyder**（1998年、金）→ Harvard PhD → Stanford ポスドク
- **Wei Ho**（1998年銅、1999年金）→ 化学から数学に転向、Princeton数学PhD
- **Nick Loehr**（1994年、銀）→ 化学から数学に転向、Virginia Tech数学教授

興味深いのは、**化学オリンピック出身者が数学や物理に転向するケースが複数ある**ことだ。Wei HoもNick Loehrも「化学の数学的な側面が好きだった」と述べている。

IBOメダリストについては、同様のインタビュー記事すら確認できていない。医学部・バイオテック・ゲノミクスに進む傾向があると推測されるが、データに基づく記述はできない。

<small style="color:#999;font-size:12px">出典: [ACS, "Where are they now? Chemistry Olympians"](https://cen.acs.org/articles/85/i36/Chemistry-Olympians.html), Chemical & Engineering News, 2007</small>



---

## AIが金メダルを取る時代に

2025年は一つの転換点だった。

- **IMO：** OpenAIとGoogle DeepMindが金メダルレベル（35/42点）を達成
- **IPhO：** AIが理論問題で金メダリストの中央値を上回るスコア

AIが「与えられた問題を解く力」で人間のトップ層に追いついた。では、人間のメダリストの価値はどこにあるのか。

![AIのIMOスコア推移](/img/ai_imo_timeline.png)

<small style="color:#999;font-size:12px">出典: Google DeepMind公式発表、OpenAI公式発表（2025年7月）</small>

一つの見方は、Cognition AIのScott Wuが体現している。彼はIOIで「問題を解く」天才だったが、起業家としては「AIに問題を解かせる仕組みを作る」側に回った。

| AIが得意なこと | 人間に残る（かもしれない）こと |
|---|---|
| 与えられた問題を解く | 解くべき問題を見つける |
| 既知のパターンを高速に適用する | 未知の問題を構造化する |
| 大量のデータから最適解を探索する | 「何が重要か」を判断する |
| 24時間休まず計算する | 人間を説得し、チームを動かす |

ただし、この整理自体が2026年時点の暫定的な見方であり、AIの能力が今後どこまで拡張するかによって変わりうる。

**地頭が良い人間ほどAIを使いこなせる。** 問題を構造化し、分解し、AIに的確な指示を出す力は、オリンピックで鍛えた思考力の延長線上にある。

---

*本記事のデータは、Neeloy Banerjee "Where have the International Math Olympiad Gold Medallists Ended Up?" (xquant Substack, 2024)、Yuret et al. "Career paths of the IMO medalists" (Scientometrics, 2024)、各オリンピック公式サイト、Wikipedia、および各企業の公開情報に基づいています。IPhO、IChO、IBOについては体系的な追跡調査が確認できなかったため、個別事例と一般的な傾向に基づく記述が含まれます。*
