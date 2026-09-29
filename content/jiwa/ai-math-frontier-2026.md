---
title: "AIは数学の未解決問題をどこまで解いたのか：120件の記録で見る、この2年に起きたこと"
date: 2026-09-29
draft: false
description: "AIは、天才数学者のように新しい考え方を生み出したのか。高度な数学を学んでいない23歳が、60年近く解けなかった難問をAIで解きました。では、その価値に気づいたのは誰か。「AIが解いた」「証明した」とされる120件を多角的に分析しました。"
pillars: ["Deep Tech Decoded"]
tags: ["AI", "数学", "データ"]
hero_style: "background:linear-gradient(135deg,#0a1628 0%,#1a2744 40%,#0d3655 100%)"
thumbnail: "/img/jiwa/ai-math-frontier.png"
hero_label: "Deep Tech Decoded"
---

---

## ミレニアム懸賞問題に「解決した」という発表が出た

2026年9月8日、OpenAIは、社内で開発中のAIが「ナビエ・ストークス（Navier–Stokes）方程式」の問題を解決する証明を作ったと発表しました。ミレニアム懸賞問題の一つです。ミレニアム懸賞問題は、アメリカのClay数学研究所が2000年に選んだ7つの難問で、1問に100万ドルの賞金がかかっています。これまでに解決と認められたのは、2002〜2003年に人間の数学者ペレルマンが解いたポアンカレ予想だけです。

ナビエ・ストークス方程式は、水や空気の流れを計算する式で、天気予報や飛行機の設計で毎日使われています。それなのに、この式がいつでも意味のある答えを出すのか、つまり流れの速さがある一点で無限大になってしまうことはないのかを、誰も証明できていませんでした。

OpenAIが示したのは、流れに外から力を加え続けるという条件のもとで、速さが無限大になる例です。約1万のAIを88時間動かし、166ページの証明を書きました。Clay数学研究所は「解決されたようだ」としつつ、審査は急がないと表明しています。

数学者たちは、機械による確認が通ったことから、証明は正しいとみています。一方で「人間に向けて書かれていない」「この証明から理解を引き出すのは非常に難しい」という声が出ました。前日に同じ問題の成果を公表していた研究者との間では、誰の成果かをめぐる議論も続いています。

<details style="margin:2em 0">
<summary><strong>もっと詳しく：ナビエ・ストークス問題とは何か、何が議論になっているのか（クリックで開く）</strong></summary>

**ミレニアム懸賞問題とは**：アメリカのClay数学研究所が2000年に、数学で最も重要な未解決問題として選んだ7つの問題です。1問を解くと100万ドルの賞金が出ます。これまでに正式に解決と認められたのは、ロシアの数学者ペレルマンが2002〜2003年に解いたポアンカレ予想の1問だけで、これはAIとは関係のない、人間による証明でした。

**ナビエ・ストークス方程式とは**：水や空気の流れを計算する式です。流れの中の小さな一かたまりに、高校物理で習う運動の法則（力＝質量×加速度）を当てはめたもので、流れの速さを変える原因を「周りから押される力（圧力）」「流れのねばりけ」「外から加わる力」の3つに分けて書いています。200年近く前に作られ、天気予報、飛行機や車の設計、血液の流れのシミュレーションなどで、今も毎日使われています。

**何が問題なのか**：これほど使われているのに、この式が本当にいつでも意味のある答えを出すのかは、数学的に証明されていません。問われているのは、なめらかな流れから計算を始めたとき、ある時刻に、ある一点で流れの速さが無限大になってしまうこと（数学者は「爆発」と呼びます）があるかどうかです。現実の水の速さが無限大になることはありません。もし式の中でそれが起きるなら、その場面では式が現実を表せていないことになります。起きないと証明できれば、式はいつでも意味を持つと保証されます。どちらの答えでも、乱流（うずを巻く複雑な流れ）のように、今もよく分かっていない現象を理解する手がかりになると期待されてきました。ニューヨーク大学の数学者Tristan Buckmaster氏は、米NPRに対し、この式は物理や工学で毎日使われているのに、なぜうまくいくのかを根本のところでは誰も分かっていない、と話しています。

**OpenAIが示したこと**：流れに外から、なめらかな力を加え続けるという条件をつけた場合に、有限の時間で速さが無限大になる例を作った、というものです。約1万のAIを88時間動かし、166ページの証明を書き、Leanという言語で機械による確認も付けました。Clay数学研究所は「解決されたようだ」と述べつつ、審査は意図的に急がないと表明しています。外から力を加えない場合に同じことが起きるかについては、この結果は答えていません。Scientific Americanは「OpenAIは違うナビエ・ストークス問題を解いたのか」という見出しで、この点を取り上げました。

**数学者の受け止め**：NPRの取材に応じた数学者たちは、証明は技術的には正しいとみています。機械による確認のコードが実際に動いたことが大きな理由です。一方で、「この証明から人間の理解を引き出すのは非常に難しい」（オックスフォード大学のJames Maynard氏）、「人間に向けて書かれていない。どこが大事で、どこが決まりきった計算で、その考え方が他のどこに使えるのかを説明していない」（ブラウン大学のJavier Gómez-Serrano氏）という声が出ました。正しいことと、読んで分かることは別なのです。

**誰の成果か**：Buckmaster氏は共同研究者と同じ問題に取り組んでいて、OpenAIの発表の前日に自分たちの成果を公表しました。Buckmaster氏は、OpenAIが自分たちの研究の進め方を知っていたのではないかと話していますが、OpenAIは否定しています。

</details>

この一件には、この2年のAIと数学の論点がほぼ全部入っています。大きな発表、確かめる途中の結果、機械による確認、そして功績をめぐる議論です。

この記事では、2023年から2026年9月までに「AIが数学の未解決問題に関わった」とされる発表を集め、1件ずつ論文や公式の記録で確かめた120件をもとに、何が起きたのかを整理します。

---

## 大きく報じられた件は、いまどうなっているか

- **2025年10月　「GPT-5がエルデシュ問題を10問解いた」（OpenAI）**<span style="display:inline-block;font-size:0.8em;line-height:1.5;padding:0 0.6em;margin-left:0.6em;border:1px solid #f39c12;color:#9c640c;border-radius:2px;font-weight:600;vertical-align:0.1em">既に答えがあった</span><br>
  内容：10問の答えは既に論文にあった。AIが見つけたのは、その論文だった。<br>
  いまの状態：発表の投稿は削除された。

- **2026年5月　単位距離予想の反証（OpenAI）**<span style="display:inline-block;font-size:0.8em;line-height:1.5;padding:0 0.6em;margin-left:0.6em;border:1px solid #1abc9c;color:#0e6655;border-radius:2px;font-weight:600;vertical-align:0.1em">確認済み</span><br>
  内容：1946年にエルデシュが立てた、平面上の点の距離に関する予想が誤りだと示した。<br>
  いまの状態：外部の数学者9人が検証論文を書いた。

- **2026年7月　ヤコビアン予想の反例（Anthropicの研究者）**<span style="display:inline-block;font-size:0.8em;line-height:1.5;padding:0 0.6em;margin-left:0.6em;border:1px solid #1abc9c;color:#0e6655;border-radius:2px;font-weight:600;vertical-align:0.1em">確認済み</span><br>
  内容：1939年から未解決だった多項式の予想が、3変数以上では誤りだと示した。<br>
  いまの状態：解説論文が出ており、機械による確認もある。

- **2026年8月　ゼータ関数の零点（Anthropic）**<span style="display:inline-block;font-size:0.8em;line-height:1.5;padding:0 0.6em;margin-left:0.6em;border:1px solid #1abc9c;color:#0e6655;border-radius:2px;font-weight:600;vertical-align:0.1em">確認済み</span><br>
  内容：素数の分布に関わるゼータ関数の零点の3分の2以上が、予想どおりの直線上にあると示した。リーマン予想そのものではない。<br>
  いまの状態：機械による確認があり、人間の研究者も別の証明を発表した。

- **2026年9月　フェルマーの最終定理のLean化（Anthropic）**<span style="display:inline-block;font-size:0.8em;line-height:1.5;padding:0 0.6em;margin-left:0.6em;border:1px solid #1abc9c;color:#0e6655;border-radius:2px;font-weight:600;vertical-align:0.1em">確認済み</span><br>
  内容：1995年に証明済みの定理を、11日で機械が確かめられる形に書き直した（1,300万行）。新しい数学ではない。<br>
  いまの状態：形式化の第一人者Kevin Buzzard氏が確認した。

- **2026年9月　ナビエ・ストークス方程式（OpenAI）**<span style="display:inline-block;font-size:0.8em;line-height:1.5;padding:0 0.6em;margin-left:0.6em;border:1px solid #95a5a6;color:#515a5a;border-radius:2px;font-weight:600;vertical-align:0.1em">検証待ち</span><br>
  内容：冒頭のとおり。<br>
  いまの状態：Clay数学研究所が審査している。

- **2026年9月　「100件を超える未解決問題を解いた」（OpenAI）**<span style="display:inline-block;font-size:0.8em;line-height:1.5;padding:0 0.6em;margin-left:0.6em;border:1px solid #95a5a6;color:#515a5a;border-radius:2px;font-weight:600;vertical-align:0.1em">検証待ち</span><br>
  内容：新しい社内モデルの成果として発表された。<br>
  いまの状態：9月27日時点で、問題の一覧も証明も公開されていない。

<picture><source media="(max-width: 600px)" srcset="/img/jiwa/ai-math/c6_famous_m.png"><img src="/img/jiwa/ai-math/c6_famous.png" alt="100年近く前の予想まで動いた" loading="lazy"></picture>

報道で名前が出るのは、何十年も前から知られてきた予想です。図のように、1930年代の予想まで動きました。ただし、確かめ終わったもの（緑）と、まだ確かめている途中のもの（灰色）が混ざっています。図の「誤りだと判明」は、AIが予想の誤りを示す例を見つけたという意味です。予想が誤りだと示すことも、問題の解決です。

---

## この2年で、発表の数はどう変わったか

<picture><source media="(max-width: 600px)" srcset="/img/jiwa/ai-math/c1_quarterly_m.png"><img src="/img/jiwa/ai-math/c1_quarterly.png" alt="AIが数学の未解決問題に関わった発表の数（四半期ごと）" loading="lazy"></picture>

**2025年の夏から、発表の数が急に増えました。** 2025年4〜6月の発表は3件でしたが、10〜12月は20件、2026年7〜9月は35件です。この直近3か月の35件は、それまでの2年半の合計（85件）の4割にあたります。

変わったのは数だけではありません。使われたAIの種類も変わりました。2025年6月までの13件では、GPTやGeminiのような大規模言語モデルに直接取り組ませた例は3件で、多くは数学の探索のために作った専用のプログラムでした。2025年7月以降の107件では、約4分の3にあたる81件が、GPT、Gemini、Claudeといった大規模言語モデルを使っています（使われたAIの名前から集計したおおよその数）。

同じ時期に、高校生の国際数学オリンピックでは、AIが人間の金メダリストの水準に届きました。2024年は銀メダル相当、2025年は金メダル相当で、2026年には満点の報告も出ています。AIを評価する研究機関は、2026年から本物の未解決問題そのものを評価に使い始めました。

<picture><source media="(max-width: 600px)" srcset="/img/jiwa/ai-math/c2_breakdown_m.png"><img src="/img/jiwa/ai-math/c2_breakdown.png" alt="「AIが解いた」120件のいま" loading="lazy"></picture>

**ただし、「解いた」と発表された120件のうち、第三者の確認が済んでいるのは64件、約半分です。** 残りは、まだ誰も確かめていないもの40件、既に論文に答えがあったもの11件、証明が誤りだったもの4件、先行研究の引用が足りないと指摘されたもの1件です。

この記事では、次の3つのうちどれかを満たすものを「確認済み」と呼びます。

- 専門家の査読を通り、学術誌などに載った
- Leanなど、証明を機械で確かめる言語で検証され、その記録が公開されている
- 発表した本人たち以外の専門家2人以上が、正しいと公に述べた

---

## 誰が主導しているのか

<picture><source media="(max-width: 600px)" srcset="/img/jiwa/ai-math/c7_lead_m.png"><img src="/img/jiwa/ai-math/c7_lead.png" alt="誰が主導したのか" loading="lazy"></picture>

120件を、誰が中心になって進めたかで4つに分けました（分け方は付録1）。

- **大手AI企業の社内チーム（55件）**：OpenAI、Google DeepMind、Anthropic、Meta。報道で大きく取り上げられる件は、ほとんどがここから出ています。
- **AI数学の新興企業（5件）**：Harmonic、Axiom Math、Math Incなど。件数は少ないものの、既に知られた証明を機械用に書き直す仕事や、証明を機械で確かめる道具を担っています。
- **大学・研究機関の研究者（31件）**：研究者が自分の研究にAIを使った例です。量子計算の理論家Scott Aaronson氏は、行き詰まった証明の鍵となる一手をGPT-5が出したと書きました。
- **個人・オンラインの有志（29件）**：エルデシュ問題のサイトに投稿する人たちが中心です。誤りだった4件や、既に答えがあった例の多くも、ここに入ります。

見出しになるのは大手企業ですが、件数で見ると半分以上は研究者と有志が出しています。そして大手企業の大きな成果にも、その分野のプロの数学者が深く関わっています。これは後の節で見ます。

---

## 「解いた」の中身は一つではない

<picture><source media="(max-width: 600px)" srcset="/img/jiwa/ai-math/c4_claims_m.png"><img src="/img/jiwa/ai-math/c4_claims.png" alt="AIは何をしたのか" loading="lazy"></picture>

120件のうち、問題を完全に解いたという発表は43件、3分の1強です。残りは、ある量の上限や下限の記録を更新したもの（22件）、特別な場合を解いたもの（21件）、予想が誤りだと示す例を見つけたもの（14件）などです。「AIが解いた」という見出しは、このどれでもありえます。

<picture><source media="(max-width: 600px)" srcset="/img/jiwa/ai-math/c3_erdos_m.png"><img src="/img/jiwa/ai-math/c3_erdos.png" alt="つまずきは「エルデシュ問題」に集中している" loading="lazy"></picture>

120件のうち43件は「エルデシュ問題」です。20世紀の数学者ポール・エルデシュが、生涯に論文や講演の中で残した1,100問を超える問題で、いまは数学者のThomas Bloom氏がサイトに集めています。**証明が誤りだった4件はすべてエルデシュ問題で、既に答えがあった11件のうち9件もエルデシュ問題でした。**

これには2つの理由があります。

1つは、問題の性質です。サイトの「未解決」は、管理者が答えを知らないという意味です。そのため、一流の数学者が何十年挑んでも解けなかった問題と、出されたきり誰も手をつけていなかった問題や、実はどこかの論文で解かれていた問題が混ざっています。2006年にフィールズ賞を受けた数学者のテレンス・タオ（Terence Tao）氏らの記録も、「何年も未解決」は「難しい」ではなく「誰も真剣に見ていなかった」を意味する場合があると注意書きしています。2025年10月の「10問解いた」騒動は、まさにこれでした。ただ、このときAIは、人間が見落としていた古い論文や他の言語の論文を数多く見つけ出しています。問題は「解いた」と言ったことでした。

もう1つは、記録の偏りです。エルデシュ問題だけは、タオ氏らが、成功だけでなく誤りや「既に答えがあった」例まで一件ずつ公開で記録しています。他の分野には、こうした台帳がありません。つまり、この図は「エルデシュ問題でつまずきが多い」ことと同時に、「つまずきが記録されているのがエルデシュ問題だけ」であることも表しています。他の分野の失敗は、表に出にくいと考えるべきです。

---

## 誰が、どうやって正しさを確かめているのか

<picture><source media="(max-width: 600px)" srcset="/img/jiwa/ai-math/c5_basis_m.png"><img src="/img/jiwa/ai-math/c5_basis.png" alt="「正しい」を判定しているのは、ほぼ機械" loading="lazy"></picture>

AIはもっともらしい誤りを出すので、確認は欠かせません。その確認の担い手が、この2年で変わりました。**確認済み64件のうち57件は、機械が証明を確かめたものです。**

使われているのはLean（リーン）などの言語です。証明を一歩ずつ機械が読める形に書くと、論理の飛躍や誤りがないかを機械が判定します。先に挙げたフェルマーの最終定理の書き直しも、この仕組みです。

専門家の査読を根拠にした5件は、すべて2023〜2024年の発表です。数学の査読には1〜2年かかるのが普通なので、2025年以降の発表はまだ査読の結果が出ていないと考えられます。

機械の確認にも限界があります。Leanが保証するのは「書かれた命題が正しい」ことまでです。元の問題を機械の言葉に訳すときに間違えていれば、正しく証明しても別の問題を解いたことになります。Google DeepMindの論文は、AIが難しい所を「あとで証明する」という印のまま残した例や、存在しない定理を持ち出した例を報告しています。訳が正しいかを確かめるのは、今も人間の仕事です。

人間の確認も完全ではありません。OpenAIが発表した10件の成果を研究者が人の手で監査した論文では、「誤り」とされた指摘の一つが、実はPDFから文字を取り出したときに記号の上の線が消えただけだったと分かりました。

---

## なぜ大量の計算資源が使われるのか

ナビエ・ストークスでは約1万のAIを88時間動かしました。なぜそれほどの計算が要るのでしょうか。

数学の答えは短くても、見つけるまでが長いからです。ヤコビアン予想の反例は、3つの多項式を並べた式です。確かめるのは一瞬ですが、その式を見つけるには無数の候補を試す必要がありました。暗証番号と同じで、正解を確かめるのは一瞬でも、見つけるには何通りも試すしかありません。

数学者も、見込みのありそうな道を次々に試し、行き止まりに当たっては引き返すことを、何年もかけて繰り返してきました。AIはその試行錯誤を、並列に大量に回します。単純な数字の総当たりではなく、証明の方針の総当たりに近いものです。

コンピュータの計算に支えられた証明は、AI以前からあります。1976年に証明された四色定理（地図は4色で塗り分けられる）は、場合分けの確認にコンピュータを使いました。

---

## AIは、天才数学者のように新しい考え方を生み出したのか

数学の歴史には、一つの問題に取り組む中で、問題の見方そのものを変えた人たちがいます。

1736年、数学者のオイラーは「ケーニヒスベルクの7つの橋」の問題に答えました。町の中州と両岸を7本の橋が結んでいて、7本すべてをちょうど1回ずつ渡って歩けるか、という問題です。町の人は何通りも試しましたが、誰もできませんでした。

<picture><source media="(max-width: 600px)" srcset="/img/jiwa/ai-math/c8_bridges_m.png"><img src="/img/jiwa/ai-math/c8_bridges.png" alt="7つの橋を、点と線にする" loading="lazy"></picture>

オイラーは、道順を試すことをやめました。陸地の形も橋の長さも捨て、それぞれの陸地に橋が何本つながっているかだけを見ました。途中で通り過ぎる陸地では、入る橋と出る橋が必ず1組になるので、つながる橋は偶数本のはずです。奇数本でよいのは、出発する陸地と到着する陸地の2か所だけです。ところがこの町では、4つの陸地すべてで橋が奇数本（5本、3本、3本、3本）でした。だから、どんな順番で歩いても不可能です。この「点と線だけで考える」見方は、後に「グラフ理論」という分野になり、今のカーナビの経路探索などにつながっています。

19世紀のガロアは、5次方程式に解の公式があるかという問題で、答えを直接探すのをやめ、答えどうしの入れ替え方を調べました。そこから生まれた「群」という考え方は、今の数学と物理の土台になっています。

では、AIはどうでしょうか。120件を読むと、AIの仕事は、おおよそ次の3つの段階に分けて考えられます（この分け方は当団体の整理です）。

1. **探す**：候補を大量に試して、記録を更新したり、予想を崩す例を見つけたりする。記録の更新（22件）と反例（14件）の多くはこの形です。ヤコビアン予想の反例もここに入ります。
2. **つなぐ**：ある分野ではよく知られていた道具を、誰も使おうとしなかった問題に持ち込む。エルデシュ問題1196番がこの例です。
3. **作る**：オイラーのグラフ理論やガロアの群のように、新しい考え方そのものを作り、それが新しい分野になる。AIの成果がこれに当たるかどうかは、何十年もたたないと判断できません。

エルデシュ問題1196番では、AIは確率の考え方を、この整数の問題に持ち込みました。この使い方は、1935年のエルデシュの論文以来、専門家に見落とされていたとされます。オイラーが問題の見方を変えたのと、似た面があります。この証明について、タオ氏は「大きな数の性質を調べる新しい方法が見つかった」と評価しました。一方でタオ氏は、この方法が将来どれほど重要になるかは「まだ分からない」とも述べています（Scientific American）。

冒頭のナビエ・ストークス方程式は、取り組んだ問題の大きさでは、AIが関わった成果の中で最大です。ただし、解いたのは外から力を加え続ける場合です。数学者からは「この証明から学べることが少ない」という声が出ています。

AIの成果から、グラフ理論や群のような新しい分野が生まれるかどうかは、まだ分かりません。ガロアの考え方も、数学者に理解されるまでに十数年かかりました。

一方で、AIの仕事を「力技にすぎない」と片づけるのも正確ではありません。どの方向を探せば見込みがあるか、何と何をつなぐかを選ぶところに、人間の数学者の判断とAIの提案の両方が関わっています。AIが自分で方向を選んだ例（エルデシュ問題の一部や、Köthe予想の反例）もあれば、数学者が方向を決めてAIに任せた例（ゼータ関数の零点）もあります。

## 誰が、結果の価値に気づくのか

2026年4月、23歳のLiam Price氏は、エルデシュ問題1196番をGPT-5.4 Proに入力し、証明を得ました。以下は、Scientific American（2026年4月24日）の記事によります。

Price氏は高度な数学の訓練を受けておらず、どんな問題かも知らなかったと話しています。ときどき一緒にエルデシュ問題に取り組んでいる、ケンブリッジ大学で数学を学ぶ学部生のKevin Barreto氏にそれを送り、Barreto氏が重要さに気づいて専門家に知らせました。

この問題は約60年間解けていませんでした。スタンフォード大学の数学者Jared Duker Lichtman氏は、同じ種類の問題を博士論文で解いた人ですが、この1196番では行き詰まっていました。タオ氏は、それまで挑んだ人たちは最初の一手で、そろって少しだけ道を間違えていたと説明しています。AIは、近くの分野ではよく知られていたのに、誰もこの問題に使おうとしなかった道具を使っていました。

ただし、Lichtman氏によると、AIが出した証明の原文は「かなり出来が悪かった」といいます。何を言おうとしているのかを専門家がふるい分ける必要がありました。Lichtman氏とタオ氏は証明を短く書き直し、同じ方法が他の問題にも使えることを見つけて、Price氏らと共著の論文にしました。

大手AI企業の大きな成果でも、同じ構造が見えます。Anthropicの大きな発表のうち4件（ヤコビアン予想の反例、ゼータ関数の零点、特別な行列の構成、楕円曲線の記録更新）には、すべて同じ数学者、Levent Alpöge氏が関わっています。どの問題に取り組むか、出てきた結果に価値があるかを決めているのは、その分野のプロです。

**AIが大きく安くしたのは「解く」の部分です。何を解くかを選ぶ、出てきたものの価値に気づく、次の研究に広げる、という仕事は、今のところ数学の力を持つ人間の側にあります。**

この変化は、お金の動きにも表れています。AIに問題を解かせる計算の費用は、問題によって大きく違います。Google DeepMindは、AlphaProof Nexusでエルデシュ問題などを解いたとき、計算の費用が1問あたり数百ドルだったと報告しています。一方、ナビエ・ストークス方程式では約1万のAIを88時間動かしました。それでも、専門家が何年もかける作業と比べれば、「解く」費用は大きく下がっています。その一方で、証明の正しさを機械で保証する技術を掲げる新興企業には、Harmonicの14.5億ドル（2025年11月）のように、10億ドルを超える企業価値がついています。大手AI企業は数学者を研究者として雇い、問題の選定や結果の確認を任せ始めました。

では、何を解くかを選び、結果の価値に気づく力を持つ人は、どこから来るのでしょうか。手がかりの一つが、高校生の国際数学オリンピックです。経済学者のAgarwal氏とGaule氏は、オリンピックに出た人のその後を追いました。10代のときの点数が高かった人ほど、大人になってから書いた論文の数や、フィールズ賞の受賞が多いという結果です。

一方で、数学の主要な賞を受けた人の多くは、オリンピックに出ていません。その中には、大会が始まる前の世代の人や、自分の国が大会に参加していなかった人が多く含まれます。力があっても、それを測って見つけてもらう場がなかった人たちです。Agarwal氏とGaule氏の研究は、オリンピックで同じ点数を取った人でも、所得の低い国の出身者は、所得の高い国の出身者より、その後に書いた論文が34%少なく、引用が56%少ないことも示しました。論文の題名は「見えない天才」です。才能は、見つけて育てる場があって初めて、成果につながるということです。

---

## なぜ第一線の数学者が声を上げているのか

2026年に入って、数学者たちの声が目立つようになりました。6月には、AIの数学の力についての誇大な宣伝を信じないよう呼びかける「ライデン宣言」が出され、国際数学連合が支持しました。9月8日にはタオ氏が警告を出し、9月11日にはフィールズ賞の受賞者25人が声明を出しています。

声を上げている人の中には、AIを最も積極的に使ってきた数学者がいます。タオ氏は、エルデシュ問題でAIと協働し、AIがどこに貢献したかを公開で記録してきました。自分の論文でも、AIの助けで解けた不等式があると報告しています。この声は「AIを使うな」という主張ではありません。

声明や発言から読み取れる懸念は、4つに整理できます。

1. **速さ**：タオ氏は、AI企業が「数学界が消化できる速さを超えて」問題を解いていると述べました。新しい結果が次々に届き、理解し、教科書に書き、学生に教える時間が追いつかない、という懸念です。
2. **功績の書き方**：誰が何をしたのか、先行研究を正しく引用したのか。OpenAIの成果のうち2件には、先行研究の引用が足りないという指摘が数学者から出ました。
3. **確かめる前の発表**：記者発表やSNSが、証明の公開や確認より先に出る例が続いています。
4. **研究の目的**：フィールズ賞の受賞者たちは、数学の目的は問題を解くことだけでなく人間の理解を深めることだとし、問題をAIの性能比べの材料として扱う流れとの「深刻なずれ」を指摘しました。

評価された出し方もあります。英国の数学者James Maynard氏は、Anthropicのゼータ関数の発表について、AIが本当に興味深い貢献をしたと認め、発表が控えめで先行研究に功績を認めていた点を評価しました。

前向きな提案も出ています。トロント大学のDaniel Litt氏は、数学の目的は人間の理解であり、博士課程の審査では口頭で説明できるかをもっと重視すべきだと書きました。OpenAIも9月、Tim Gowers氏ら外部の数学者9人による諮問グループを作っています。

数学者たちの発言は、AIが証明を安く出せるようになったときに、研究者の仕事をどう定義し、どう評価し、若い研究者をどう育てるのかを、数学界自身が問い直している過程だと読めます。

---

## AIと組むとき、人間は何をするのか

ここからは、この記録を読んだうえでの当団体の考えです。

フィールズ賞の受賞者25人は声明で、問題を解くことは数学の研究の目的の一部にすぎず、この懸念は数学以外の知的な仕事にも及ぶと述べました。一方で、どうすればよいかの具体的な決まりは示していません。

120件と、オイラーやガロアの例を並べると、AIと組むときに人間がしている仕事は、次の5つに分けられるように見えます。

1. **取り組む問題を選ぶ**：Anthropicの大きな成果の4件では、どの問題に取り組むかを、数学者のAlpöge氏が決めていました。
2. **先人がどこで行き詰まったかを知る**：1196番について、タオ氏は、それまで挑んだ数学者たちが、最初の一手でそろって同じ道を選び、その先で行き詰まっていたと説明しています。どこで行き詰まったかが分かれば、別の道を試す手がかりになります。
3. **攻め方を決める**：オイラーは、道順を1つずつ試すのをやめ、陸地ごとの橋の本数だけを数えると決めました。1196番では、この部分をAIが担いました。
4. **本物かを確かめる**：確かめることは2つあります。1つ目は、既に答えが知られていないかです。2025年10月に「GPT-5が10問解いた」と発表された問題は、答えが既に論文にありました。2つ目は、証明が正しいかです。1196番の証明は、機械で確かめられる言語Leanに書き直され、機械による確認が通っています。ただしLeanが確かめるのは、書き直した問題を証明が正しく解いていることまでです。書き直した問題が元の問題と同じかどうかは、人が確かめる必要があります。
5. **読み解いて広げる**：Lichtman氏によると、AIが出した証明の原文は「かなり出来が悪かった」といいます。Lichtman氏とタオ氏らは、何を言おうとしているかを読み解いて証明を短く書き直し、同じ方法で別の予想も解けることを示しました。「60年の難問の新しい解き方」という価値になったのは、この段階です。

この5つは、数学以外でも同じだと考えます。新しい事業や特許のアイデアを考えるときも、AIにそのまま頼むと、ありきたりな案が返ってきがちです。先行する事例を調べ、別の業界のやり方を持ち込む候補をAIに出させ、どれで攻めるかを人間が決めます。数学と違うのは4の確かめ方です。数学では機械が証明の正しさを確かめられますが、事業のアイデアが良いかどうかは、使う人と市場が決めます。

---

## まとめ

- 「AIが数学の未解決問題を解いた」という発表は、2025年夏から急に増え、この3か月だけで35件ありました。
- ただし、第三者の確認が済んでいるのは約半分です。見出しを見たら、「本体の問題か、それに近い別の問題か」「誰が確かめたか」「既に答えがなかったか」の3つを確かめると、中身が分かります。
- 正しさの確認は、機械が担うようになってきました。ただし、問題を機械の言葉に正しく訳せているかは、今も人間が見ています。
- AIの仕事の多くは、候補を大量に試す「探す」と、別の分野の道具を持ち込む「つなぐ」です。そこから新しい分野が生まれるかどうかは、まだ分かりません。
- AIが安くしたのは「解く」の部分です。何を解くか選び、結果の価値に気づき、広げる力を持つ数学者の役割は、むしろはっきりしてきています。

AI企業の発表の多くは、結果だけを公開しています。人間がどこで方向を決め、AIが何を出し、どこで間違えたのかという過程は、ほとんど表に出ていません。数学者たちが求めているのも、まさにその部分です。

六本木ベンチャーキャピタルでは、若い才能がAIや他分野の人と議論し、まだ世にないものを作り、その思考の過程をそのまま公開する「Agora」を運営しています（[第1回の記録](https://www.roppongivc.com/agora/ai-olympiad-record/)）。

---

<details>
<summary><strong>付録1　調査の方法と、数え方の限界（クリックで開く）</strong></summary>

**対象**：2023年1月〜2026年9月27日に公表された、AIが数学の未解決問題（またはそれに準じる研究上の問い）に関わった発表。完全な解決、部分的な前進、反例、上限・下限の記録の更新、既に知られた証明の機械用の書き直し、否定・撤回、既に答えがあったもの、引用不備の指摘を含みます。

**確かめ方**：全121件について、論文、公式の発表、Lean・Isabelleのリポジトリ、エルデシュ問題のサイトを開き、主張の中身とAIの関わり方を確かめました。一次情報にAIの関与が書かれていなかった1件（マシュー群M23の逆ガロア問題）は、集計から外しています。

**「確認済み」の基準**：次のどれかを満たすもの。①専門家の査読を通って学術誌や国際会議に掲載された、②LeanやIsabelleなど証明を機械で確かめる言語で検証され、その記録が公開されている、③発表した本人たち以外の専門家2人以上が、解説論文や独立した別の証明などの形で公に正しさを確認した。どれも満たさないものは、正しい可能性が十分にあっても「検証待ち」としています。

**機械による確認の限界**：私たちが確かめたのは、証明のリポジトリが公開され、命題と証明があることまでです。私たち自身がコードを動かして確かめてはいません。また、機械が確かめるのは「書かれた命題」の正しさで、それが元の問題と同じかは別に確かめる必要があります。

**数える単位**：論文や公式の発表1本を1件と数えています。1本の発表に多くの問題が含まれる場合（エルデシュ問題の約180問をまとめてLeanに書き直した発表など）も1件です。問題の数で数えると、延べ約670問になります。

**まだ見つかっていない発表**：3回の調査の重なり具合から全体の数を推定しました（捕獲再捕獲法、Chapmanの式）。結果は、実際の発表は少なくとも140〜150件（95%の区間で約115〜180件）で、まだ20〜30件ほど見つかっていないというものです。調査どうしが同じ情報源を参照しているため独立ではなく、有名な発表ほど見つかりやすいため、この推定は実際より少なめに出ます。

**誰が主導したかの分け方**：論文の著者や発表の主体から、①大手AI企業の社内チーム（OpenAI、Google DeepMind、Anthropic、Metaの社員が中心の発表）、②AI数学の新興企業、③大学・研究機関の研究者（評価機関のEpoch AIを含む）、④個人・オンラインの有志（エルデシュ問題のサイトへの投稿者など）の4つに、1件ずつ手で分けました。複数にまたがる件は、中心になった側に入れています。

**エルデシュ問題の偏り**：エルデシュ問題については、タオ氏らが誤りや「既に答えがあった」例まで公開で記録しています。他の分野にはこうした記録がないため、誤りや既存文献の件数は、エルデシュ問題以外では実際より少なく見えている可能性が高いと考えます。

**時点**：数字はすべて2026年9月27日時点です。2026年の事例の多くは公表から数週間しか経っておらず、取り下げや訂正、査読の結果で評価が変わる可能性があります。誤りや抜けのご指摘を歓迎します。

</details>

<details>
<summary><strong>付録2　競技の数学でのAIの成績（クリックで開く）</strong></summary>

<div style="overflow-x:auto">

| 年 | 出来事 | 確かめ方 |
|---|---|---|
| 2024年7月 | Google DeepMindのAlphaProofとAlphaGeometry 2が、国際数学オリンピックで42点中28点（銀メダル相当）。問題によっては数日かけた | 著名な数学者が採点 |
| 2025年7月 | Google DeepMindのGemini Deep ThinkとOpenAIの実験モデルが35点（金メダル相当）。自然な文章で解答 | Google DeepMindは主催者の公式採点、OpenAIは元メダリストによる独自の採点 |
| 2026年7月 | 満点（42点）のAIが複数現れたと報道 | 報道による。主催者の一次発表は未確認 |

</div>

研究者向けの難問集FrontierMathでも、2024年11月の公開時に最良のAIが2%未満だった正答率が、2026年9月には最難関の部分で98%（OpenAIの発表）に達しました。

</details>

<details>
<summary><strong>付録3　全120件の一覧（クリックで開く）</strong></summary>

番号は私たちの事例一覧の番号です。「問題」は要約で、数学的に厳密な表現ではありません。評価の基準は付録1のとおりです。

<div style="overflow-x:auto">

| No. | 公表日 | 問題（要約） | AI（組織） | 何をしたか | 評価 |
|---|---|---|---|---|---|
| C001 | 2023-10-11 | 楕円曲線のマーマレーション(Frobeniusトレース平均の振動現象)の存在証明 | 機械学習(パターン発見)/人手による証明（大学・個人（その他のAI）） | 部分的前進 | 確認済み |
| C002 | 2023-11-06 | Erdős(1975)の周長5(C3・C4なし)極値グラフ問題の下界改善 | AlphaZero + Tabu 探索(カリキュラム学習)（Google DeepMind） | 評価の改善 | 確認済み |
| C003 | 2023-11-13 | 多項式Freiman-Ruzsa(Marton)予想の Lean 形式化 | Lean 4(証明支援系)。AIの寄与は限定的（大学・個人（その他のAI）） | 形式化 | 確認済み |
| C004 | 2023-12-14 | キャップ集合問題(n=8 の下界改善と漸近的下界の改善) | FunSearch(LLM + 進化的探索)（Google DeepMind） | 部分的前進 | 確認済み |
| C005 | 2023-12-14 | オンライン・ビンパッキングのヒューリスティクス改善 | FunSearch(LLM + 進化的探索)（Google DeepMind） | 評価の改善 | 確認済み |
| C006 | 2024-03-29 | 小Ramsey数の下界改善(R(W5,W7)等、ブック・ホイールグラフ) | 強化学習(クロスエントロピー法、Wagner手法の拡張)（大学・個人（その他のAI）） | 評価の改善 | 検証待ち |
| C007 | 2024-09-27 | スペクトルグラフ理論予想群の反例構成(Graffiti・AutoGraphiX由来) | 探索アルゴリズム(モンテカルロ探索/NMCS・NRPA)（大学・個人（その他のAI）） | 反例 | 検証待ち |
| C008 | 2024-10-10 | 非多項式系のリアプノフ関数の発見(大域安定性) | 記号トランスフォーマ(seq2seq)（Meta（FAIR）と大学） | 部分的前進 | 確認済み |
| C009 | 2024-11-01 | d次元超立方体の直径を保つ全域部分グラフの最小辺数(Graham 予想) | PatternBoost(transformer + 局所探索)（Meta（FAIR）と大学） | 反例 | 検証待ち |
| C010 | 2024-11-01 | 飽和 k-Sperner 系の最小サイズ(下界指数εの改善) | PatternBoost（Meta（FAIR）と大学） | 評価の改善 | 検証待ち |
| C011 | 2025-05-14 | 4x4 複素行列積のスカラー乗算回数(Strassen 以来の改善) | AlphaEvolve(Gemini + 進化的コーディング)（Google DeepMind） | 評価の改善 | 検証待ち |
| C012 | 2025-05-14 | 接吻数問題(11次元の下界改善) | AlphaEvolve（Google DeepMind） | 評価の改善 | 検証待ち |
| C013 | 2025-05-14 | 研究数学の約50の未解決問題での構成・下界(横断的検証) | AlphaEvolve（Google DeepMind） | 部分的前進 | 検証待ち |
| C014 | 2025-08-20 | 凸最適化における勾配降下法のステップサイズ条件（目的関数値の曲線が凸となる十分条件を1/Lから1.5/Lへ改善） | GPT-5 Pro（OpenAI） | 評価の改善 | 検証待ち |
| C015 | 2025-09-03 | マリアバン–スタイン法における2つのウィーナー–伊藤積分の和の第4モーメント定理を定量版へ拡張（全変動距離の収束レート） | GPT-5（OpenAI） | 部分的前進 | 検証待ち |
| C016 | 2025-09-11 | Gaussによる強素数定理(strong PNT)のLean形式化（Tao-Kontorovich 2024課題） | Gauss（Math Inc） | 形式化 | 確認済み |
| C017 | 2025-09-17 | DeepMindによる流体方程式の不安定特異点の系統的発見（IPM・境界付き3D Euler等の新しい不安定自己相似解） | 物理情報ニューラルネット(PINN) + Gauss-Newton最適化（Google DeepMind） | 部分的前進 | 検証待ち |
| C018 | 2025-09-26 | QMAにおけるブラックボックス増幅の限界（完全性の2重指数・健全性の指数を超える増幅は不可能） | GPT-5 Thinking（OpenAI） | 部分的前進 | 検証待ち |
| C019 | 2025-09-30 | エルデシュ問題（文献探索・完全解発見型・計約30件） | GPT-5, ChatGPT Deep research, Gemini Deep Research, Aletheia ほか（複数社のAIを併用） | 既存文献 | 既に答えがあった |
| C020 | 2025-10-11 | エルデシュ問題 #339（数論、文献探索で完全解が判明） | GPT-5（OpenAI） | 既存文献 | 既に答えがあった |
| C021 | 2025-10-18 | エルデシュ問題群（GPT-5が『10問を解決・11問で前進』と発表） | GPT-5（OpenAI） | 既存文献 | 既に答えがあった |
| C022 | 2025-10-22 | 消去付きNICD(非対話的相関蒸留)における多数決関数の最適性 | GPT-5 Pro(反例探索)（OpenAI） | 反例 | 検証待ち |
| C023 | 2025-10-27 | Nesterov加速勾配法(NAG)の点収束(反復列そのものの収束) | ChatGPT/GPT-5(証明発見を大幅に支援)（OpenAI） | 完全解決 | 確認済み |
| C024 | 2025-11-03 | エルデシュ問題 #36/#507/#951/#1097 ほか（AlphaEvolveによる構成の改善） | AlphaEvolve（Google DeepMind） | 評価の改善 | 検証待ち |
| C025 | 2025-11-05 | AlphaEvolveによる67の数学問題の探索（解析・組合せ論・幾何・数論。多くで既知最良解を再発見、複数で改善） | AlphaEvolve（Google DeepMind） | 評価の改善 | 検証待ち |
| C026 | 2025-11-11 | 有限体上のNikodym集合の新構成（次元dで従来のランダム構成より小さい濃度、q非平方の領域で新規） | AlphaEvolve + Deep Think（Google DeepMind） | 評価の改善 | 検証待ち |
| C027 | 2025-11-17 | エルデシュ問題（形式化・既存証明のLean化・計約130件） | Aristotle（大半）, GPT, Codex, Seed Prover, AxiomProver ほか（複数社のAIを併用） | 形式化 | 確認済み |
| C028 | 2025-11-17 | 接吻数問題(kissing number)の下界・一般化における15個の既知境界改善 | PackingStar(協調ゲーム型強化学習)（大学・個人（その他のAI）） | 評価の改善 | 検証待ち |
| C029 | 2025-11-20 | オンラインアルゴリズムのconvex body chasingにおける競合比の下界改善（√dから(π/2)√⌊d/2⌋≈1.11√dへ） | GPT-5（OpenAI） | 評価の改善 | 検証待ち |
| C030 | 2025-11-20 | 木における5頂点部分グラフ数の不等式（Bubeck-Linial 2013の第2予想 29Y-42P-144S≤K を証明） | GPT-5（OpenAI） | 完全解決 | 検証待ち |
| C031 | 2025-11-20 | 動的ネットワーク（優先的選択木）の単一時刻観測からのパラメータw復元（2012 COLT未解決問題） | GPT-5（OpenAI） | 部分的前進 | 検証待ち |
| C032 | 2025-11-20 | clique-avoiding符号の最小次元 r(n)=⌊n/2⌋（下界⌊n/2⌋の証明） | GPT-5（OpenAI） | 既存文献 | 既に答えがあった |
| C033 | 2025-11-20 | エルデシュ問題 #367（部分的結果、Tao・Alexeev・van DoornとAIの協働） | Aristotle, Gemini Deep Think（複数社のAIを併用） | 部分的前進 | 確認済み |
| C034 | 2025-11-23 | エルデシュ問題 #707（形式化、GPTでHall(1947)をLean化） | GPT（OpenAI） | 形式化 | 確認済み |
| C035 | 2025-11-29 | エルデシュ問題 #124（部分的結果をLeanで、Aristotle） | Aristotle（Harmonic） | 部分的前進 | 確認済み |
| C036 | 2025-12-01 | エルデシュ問題 #481（GPTが完全解を発見、Barreto(2025)を形式化） | Aristotle, Claude / GPT（複数社のAIを併用） | 形式化 | 確認済み |
| C037 | 2025-12-03 | エルデシュ問題 #481（文献探索で完全解を発見） | ChatGPT Deep research, Gemini Deep Research / GPT（複数社のAIを併用） | 既存文献 | 既に答えがあった |
| C038 | 2025-12-08 | エルデシュ問題 #1026（完全解＋結論の強化、AIの多様な支援を示す協働例） | AlphaEvolve, Aristotle, Gemini, GPT（複数社のAIを併用） | 完全解決 | 既に答えがあった |
| C039 | 2025-12-25 | エルデシュ問題 #333（完全解をLeanで、後にErdős-Newman(1977)判明） | Claude Opus 4.5, GPT-5.2 Pro（複数社のAIを併用） | 完全解決 | 既に答えがあった |
| C040 | 2026-01 | エルデシュ問題（人間＋AI協働による完全解・部分結果・計100件超） | GPT-5.4/5.5 Pro, Aristotle, Claude, Gemini ほか（複数社のAIを併用） | 部分的前進 | 確認済み |
| C041 | 2026-01-06 | エルデシュ問題 #728（数論、AIによる初の自律的かつ非自明な解と評価） | Aristotle, GPT-5.2 Pro（複数社のAIを併用） | 完全解決 | 確認済み |
| C042 | 2026-01-10 | エルデシュ問題 #205（完全解をLeanで） | Aristotle, GPT-5.2 Thinking（複数社のAIを併用） | 完全解決 | 確認済み |
| C043 | 2026-01-10 | エルデシュ問題 #397（完全解をLeanで、後に2012年China TST問題と一致判明） | Aristotle, GPT-5.2 Pro（複数社のAIを併用） | 完全解決 | 既に答えがあった |
| C044 | 2026-01-11 | エルデシュ問題 #401（完全解をLeanで、人間とAIの協働） | Aristotle, GPT-5.2 Pro（複数社のAIを併用） | 完全解決 | 確認済み |
| C045 | 2026-01-11 | エルデシュ問題 #51（ChatGPT無料版が誤った証明） | ChatGPT free version（OpenAI） | 撤回・否定 | 誤りだった |
| C046 | 2026-01-18 | エルデシュ問題 #616/#888（複数AIが誤った証明、後に別途解決） | Claude Sonnet 4.5, Gemini 3 Pro, GPT-5.2 Pro / Claude Opus 4.5, Gemini 3 Pro, GPT-5.2 Thinking（複数社のAIを併用） | 撤回・否定 | 誤りだった |
| C047 | 2026-01-19 | エルデシュ問題 #42（部分的結果をLeanで、Codex/GPT-5.2） | Codex, GPT-5.2, GPT-5.2 Pro（OpenAI） | 部分的前進 | 確認済み |
| C048 | 2026-01-22 | エルデシュ問題 #728（Pomerance(2026)証明のLean形式化） | Aristotle（Harmonic） | 形式化 | 確認済み |
| C049 | 2026-01-24 | エルデシュ問題 #11（Aristotle/GPTが誤った主張） | Aristotle, GPT（複数社のAIを併用） | 撤回・否定 | 誤りだった |
| C050 | 2026-01-28 | エルデシュ問題 #647（複数AIが誤った証明） | ChatGPT Deep research, DeepSeek DeepThink, Gemini（複数社のAIを併用） | 撤回・否定 | 誤りだった |
| C051 | 2026-01-29 | エルデシュ問題 #1051（Aletheiaが完全解をLeanで） | Aletheia（Google DeepMind） | 完全解決 | 確認済み |
| C052 | 2026-02 | Geminiによるエルデシュ問題約700件の評価（13件を解決、うち5件が新しい自律解、8件は既存文献の特定） | Gemini Deep Think（Aletheia agent）（Google DeepMind） | 完全解決 | 検証待ち |
| C053 | 2026-02-03 | AxiomProverによるFel予想（数値半群のシジジー不変量の明示公式）の証明 | AxiomProver（Axiom Math） | 完全解決 | 確認済み |
| C054 | 2026-02-03 | AxiomProverによる種数0・1のk-微分のスピンパリティ決定（Chen-Gendron予想の数論的仮説を証明） | AxiomProver（Axiom Math） | 完全解決 | 確認済み |
| C055 | 2026-02-10 | アイゲンウェイト(eigenweight)の一般形の閉形式決定(算術的Hirzebruch比例性に現れる構造定数) | Aletheia(Gemini Deep Think ベースの研究エージェント)（Google DeepMind） | 完全解決 | 検証待ち |
| C056 | 2026-02-10 | 多変数独立多項式およびその一般化の下界(相互作用粒子系/独立集合の数) | Aletheia / Gemini 2.5 Deep Think(複数モデル)（Google DeepMind） | 部分的前進 | 検証待ち |
| C057 | 2026-02-10 | ロバストMDPに対する L∞ 方策反復の強多項式時間限界(数論的補題:有界結合が多項的個数のダイアディック区間に入る) | Aletheia(Gemini Deep Think ベース)（Google DeepMind） | 評価の改善 | 検証待ち |
| C058 | 2026-02-14 | エルデシュ問題 #1082（DeepMind prover agentが一部に反例、後にFishburn(2002)判明） | DeepMind prover agent（Google DeepMind） | 反例 | 既に答えがあった |
| C059 | 2026-02-21 | エルデシュ問題 #846（DeepMindとOpenAIが独立に完全解、後にReiher-Rödl-Sales(2024)判明） | DeepMind prover agent；OpenAI internal model（複数社のAIを併用） | 完全解決 | 既に答えがあった |
| C060 | 2026-02（2026-03発表） | Gaussによる8次元球充填（E8格子の最密性）のLean形式化 | Gauss（Math Inc） | 形式化 | 確認済み |
| C061 | 2026-03-02 | エルデシュ問題 #457（完全解をLeanで、Aristotle/GPT-5.2 Pro） | Aristotle, GPT-5.2 Pro（複数社のAIを併用） | 完全解決 | 確認済み |
| C062 | 2026-03-10 | 9個の古典的Ramsey数の下界 | AlphaEvolve（Google DeepMind） | 評価の改善 | 検証待ち |
| C063 | 2026-03-30 | エルデシュ問題 #125（DeepMindのProver agentが変種→完全解をLeanで） | DeepMind prover agent（Google DeepMind） | 完全解決 | 確認済み |
| C064 | 2026-03-31 | エルデシュ問題 #263/#741 ほか（部分的結果、DeepMind/OpenAI/複数社） | DeepMind prover agent, OpenAI internal model, Aristotle, GPT-5.5 Pro ほか（複数社のAIを併用） | 部分的前進 | 確認済み |
| C065 | 2026-03頃 | AlphaEvolve由来の最適化定数の下界改善（第1自己相関不等式C6.2、Erdős最小重複定数C6.5）を双対エージェントで更に改善 | 双対エージェント（LLMベース）（大学・個人（その他のAI）） | 評価の改善 | 検証待ち |
| C066 | 2026-04-04 | Andersonの予想（準完備ネーター局所環に関する可換環論の未解決問題）の解決 | Rethlas（非形式推論エージェント）+ Archon（形式検証エージェント）（中国の研究機関（北京大学）） | 完全解決 | 確認済み |
| C067 | 2026-04-07 | エルデシュ問題 #12（DeepMind prover agentが部分的結果をLeanで） | DeepMind prover agent（Google DeepMind） | 部分的前進 | 確認済み |
| C068 | 2026-04-09 | エルデシュ問題 #960/#987/#990/#1014/#1091/#1141（OpenAI内部モデルによる完全解群） | OpenAI internal model（OpenAI） | 完全解決 | 検証待ち |
| C069 | 2026-04-13 | エルデシュ問題 #1196（完全解、専門家が多大な労力を費やした問題） | GPT-5.4 Pro, GPT-5.4 Thinking（OpenAI） | 完全解決 | 確認済み |
| C070 | 2026-04-25 | エルデシュ問題 #38（GPT-5.5 Proが完全解） | GPT-5.5 Pro（OpenAI） | 完全解決 | 確認済み |
| C071 | 2026-05-08 | エルデシュ問題 #690（Multiscalar Fields Systemが完全解、人間協働） | Multiscalar Fields System（大学・個人（その他のAI）） | 完全解決 | 検証待ち |
| C072 | 2026-05-20 | エルデシュ問題 #90（単位距離問題、1946年提起。OpenAI内部モデルが反例） | OpenAI internal model（OpenAI） | 反例 | 確認済み |
| C073 | 2026-05-21 | エルデシュ問題 #90（明示的評価の改善、人間多数＋GPT-5.5 Pro） | GPT-5.5 Pro（OpenAI） | 評価の改善 | 検証待ち |
| C074 | 2026-05-21 | エルデシュ問題9件（AlphaProof Nexus、グループ行：#12, #26, #125, #138, #152, #741, #846 など） | AlphaProof Nexus（Google DeepMind）（Google DeepMind） | 完全解決 | 確認済み |
| C075 | 2026-05-21 | 代数幾何における Hilbert 関数の対数凹性(純O列/共次元3・型2のケース) | AlphaProof Nexus(フル機能エージェント:Gemini 3.1 Pro + AlphaProof + 進化的探索, Lean形式検証)（Google DeepMind） | 完全解決 | 確認済み |
| C076 | 2026-05-21 | 凸最適化における Anchored GDA(min-max 凸凹)の厳密 O(1/t) 収束率 | AlphaProof Nexus(EVOLVE-VALUE でスケジュールも同時探索, Lean形式検証)（Google DeepMind） | 評価の改善 | 確認済み |
| C077 | 2026-05-21 | OEIS の未解決予想 492 件中 44 件の証明(例:A051293 の漸近展開, A228143 の整数係数8乗根) | AlphaProof Nexus(Lean形式検証, 誤形式化ガードにテスト補題)（Google DeepMind） | 完全解決 | 確認済み |
| C078 | 2026-05-21 | グラフ再構成予想の二部グラフ変種の一つ(型判別可能性の仮定下) | AlphaProof Nexus + AlphaEvolve(予想の定式化を補助)（Google DeepMind） | 部分的前進 | 確認済み |
| C079 | 2026-05-21 | Graffiti(自動予想生成系)が1996年に提起したグラフ理論予想(全域木の最大葉数の下界) | AlphaProof Nexus(Lean形式検証)（Google DeepMind） | 完全解決 | 確認済み |
| C080 | 2026-05-21 | Ben Green の未解決問題リスト #57(2つの二次構造化関数空間の一致)の変種 | AlphaProof Nexus(浮動小数点ヒューリスティクス + Lean形式検証)（Google DeepMind） | 部分的前進 | 確認済み |
| C081 | 2026-05-21 | 高次元光子GHZ状態の存在(単色量子グラフ, N=d∈{4,6,10})に関する複数予想 | AlphaProof Nexus(Lean形式検証)（Google DeepMind） | 部分的前進 | 確認済み |
| C082 | 2026-05-24 | 可換環論および関連分野の複数の未解決問題（Cahen-Fontana-Frisch-Glazのリスト、Erman-SamのBoij-Soderberg理論サーベイ等から抽出） | Rethlas（自然言語自動推論システム）（中国の研究機関（北京大学）） | 完全解決 | 検証待ち |
| C083 | 2026-05-26 | エルデシュ問題 #90（Claude Mythosが独立に完全解） | Claude Mythos（Anthropic） | 完全解決 | 検証待ち |
| C084 | 2026-06-09 | エルデシュ問題 #619（Claude Fable 5/Codex/GPT-5.5が完全解をLeanで） | Claude Fable 5, Codex, GPT-5.5（複数社のAIを併用） | 完全解決 | 確認済み |
| C085 | 2026-07-10 | サイクル二重被覆予想 | GPT-5.6 Sol Ultra（64サブエージェント）（OpenAI） | 完全解決 | 確認済み |
| C086 | 2026-07-20 | ヤコビアン予想（多項式写像の逆写像存在に関するKeller予想） | Claude Fable 5（Anthropic）（Anthropic） | 反例 | 確認済み |
| C087 | 2026-07-22 | Dinitz-Garg-Goemans予想 | GPT-5.6 Pro（OpenAI） | 反例 | 確認済み |
| C088 | 2026-07-27 | Crouzeixの予想 | GPT-5.6 Sol（OpenAI） | 完全解決 | 検証待ち |
| C089 | 2026-08 | Hadamard行列（未解決の12次数、668含む） | Claude（Anthropic） | 部分的前進 | 検証待ち |
| C090 | 2026-08 | 有理数体上の階数>=30・>=31の楕円曲線 | Claude（Anthropic） | 評価の改善 | 検証待ち |
| C091 | 2026-08 | Borsukの予想（反例の最小次元） | GPT-5.6 Sol（arXiv版）（OpenAI） | 反例 | 検証待ち |
| C092 | 2026-08 | ホップ問題：6次元球面S^6は（可積分な）複素構造を持つか（持つと主張） | Claude（未公開版）（Anthropic） | 完全解決 | 確認済み |
| C093 | 2026-08 | エルデシュ問題#4（大きな素数間隔、Rankin型の下界）の改善 | GPT-5.6 Pro（OpenAI） | 部分的前進 | 確認済み |
| C094 | 2026-08-01 | 高次元球充填密度の一般上界の改善（1978年以来初）／Cohn–Elkies漸近定数 α*=1/2·log2(2π/e)≈0.6044 | Astra（内部版、次期主力モデル）（OpenAI） | 評価の改善 | 確認済み |
| C095 | 2026-08-01 | 非ソフィック群の初の明示的構成（Gromovが1999年に提起したソフィック性の問題を解決） | Astra（OpenAI） | 完全解決 | 確認済み |
| C096 | 2026-08-01 | コンヌの剛性予想の反証（同型な群フォンノイマン環をもつ、非同型な性質(T)群の無限族を構成） | Astra（OpenAI） | 反例 | 確認済み |
| C097 | 2026-08-01 | 行列パーマネントの回路計算量の新しい下界 | Astra（OpenAI） | 完全解決 | 確認済み |
| C098 | 2026-08-01 | 2プレイヤー量子ゲームの並列反復定理 | Astra（OpenAI） | 完全解決 | 確認済み |
| C099 | 2026-08-01 | 格子問題（最近ベクトル問題CVP／最近符号語問題）の近似不可能性ハードネス | Astra（OpenAI） | 完全解決 | 確認済み |
| C100 | 2026-08-01 | エルハートの体積予想：重心が唯一の内部格子点である凸体の最大体積（各次元で鋭い値） | Astra（OpenAI） | 部分的前進 | 確認済み |
| C101 | 2026-08-01 | マルチカラーRamsey数に関するErdős問題183（再帰的彩色構成） | Astra（OpenAI） | 完全解決 | 確認済み |
| C102 | 2026-08-01 | 極値グラフ理論のコンパクト性予想と退化予想への反例（エルデシュ問題#146・#180を解決） | Astra（OpenAI） | 完全解決 | 確認済み |
| C103 | 2026-08-05 | Sendovの予想（全次数） | GPT-5.6 Pro（証明）、Claude Opus 5（Lean形式化）（OpenAI） | 完全解決 | 確認済み |
| C104 | 2026-08-06 | OpenAI Astraのten advances論文における引用不備・研究不正の指摘（sphere packing と group soficity の2章） | OpenAI Astra（LLM）（OpenAI） | 引用の指摘 | 引用不備の指摘 |
| C105 | 2026-08-10 | リーマンゼータ関数の非自明零点のうち2/3超が単純かつ臨界線上にある（無条件。Montgomery–Taylorの窓を使うと0.6725） | Claude（未公開の研究版、下位に約60エージェント）（Anthropic） | 評価の改善 | 確認済み |
| C107 | 2026-08-17 | 行列乗算の指数ωの上界改善 | AlphaEvolve（Google DeepMind）（Google DeepMind） | 評価の改善 | 検証待ち |
| C108 | 2026-08-30 | GPT Proによる15件超の反例収集（組合せ論・数論・凸性・解析等） | GPT Pro（OpenAI）（OpenAI） | 反例 | 検証待ち |
| C109 | 2026-09-01 | FrontierMath Erdős（Bloomが選んだ未解決エルデシュ問題68問）でGPT-6 Astraが2問を解決（グループ行） | GPT-6 Astra（唯一2問解決）ほか（OpenAI） | 完全解決 | 確認済み |
| C110 | 2026-09 | 死滅浸透予想の証明 | ChatGPT Sol 5.6 Ultra、Claude Fable 5.1（複数社のAIを併用） | 完全解決 | 確認済み |
| C111 | 2026-09 | ケーテ予想の反証 | Epoch AI、GPT-6 Astra（OpenAI） | 反例 | 確認済み |
| C112 | 2026-09 | φ混合列に対するイブラギモフ・イオシフェスク予想の反証 | Epoch AI、GPT-6 Astra（OpenAI） | 反例 | 確認済み |
| C113 | 2026-09 | 永久支配予想への反例 | Epoch AI、GPT-6 Astra（OpenAI） | 反例 | 検証待ち |
| C114 | 2026-09 | ディッタート予想の証明 | Epoch AI、GPT-6 Astra（OpenAI） | 既存文献 | 既に答えがあった |
| C115 | 2026-09 | 強いN予想のn=4のケースへの反例 | Epoch AI、GPT-6 Astra（OpenAI） | 反例 | 確認済み |
| C116 | 2026-09-04 | フェルマー最終定理(Wilesの証明)のエンドツーエンドLean形式化 | Claude（内部研究モデル、数十エージェント、Prove2Me基盤）（Anthropic） | 形式化 | 確認済み |
| C117 | 2026-09-08 | Navier–Stokes方程式の存在と滑らかさ（ミレニアム懸賞問題）：滑らかな外力つきの3次元非圧縮流で有限時間の爆発を構成 | OpenAI内部推論モデル（報道ではAstra系）＋Lean形式化（OpenAI） | 完全解決 | 検証待ち |
| C118 | 2026-09-14 | Kakeya集合・Erdős最小重なり・符号不確定性・Book Ramsey数・11次元キッシング配置ほか | GPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro（混成）（複数社のAIを併用） | 評価の改善 | 確認済み |
| C119 | 2026-09-20 | 承認型委員会選挙におけるコア（Core+）の存在証明。2017年に反例（コア空）探索問題として提示されたが、反例は存在しないことを証明 | GPT-6 Astra（OpenAI）（OpenAI） | 完全解決 | 検証待ち |
| C120 | 2026-09-21 | OpenAI内部モデルが「100件を超える長年の未解決問題を解決」したという主張（数学・AI諮問グループの設置と同時発表） | OpenAI 内部モデル(GPT-6 Astra より高性能とされる, 2026-08-28 訓練開始)（OpenAI） | 完全解決 | 検証待ち |
| C121 | 2026-03-16 | Vlasov-Maxwell-Landau平衡の半自律的形式化 | Gemini DeepThink＋Claude Code＋Aristotle（Harmonic）（複数社のAIを併用） | 形式化 | 確認済み |

</div>


</details>

<details>
<summary><strong>付録4　用語集（クリックで開く）</strong></summary>

<div style="overflow-x:auto">

| 用語 | 意味 |
|---|---|
| 未解決問題・予想 | 正しいと考えられているが、まだ誰も証明していない主張。誤りだと示すことも「解決」に含まれる |
| 反例 | 予想が誤りであることを示す具体的な例。一つ見つかれば予想は否定される |
| 上限・下限 | ある量が「これ以下」「これ以上」であることを示す値。両方を近づけていくことで答えに迫る |
| 査読 | 論文を同じ分野の専門家が審査すること。数学では1〜2年かかることもある |
| プレプリント／arXiv | 査読の前に公開される論文と、その公開サイト |
| Lean（リーン） | 証明をコンピュータで一歩ずつ確かめるための言語 |
| エルデシュ問題 | 数学者ポール・エルデシュが残した1,100問を超える問題。erdosproblems.com（Thomas Bloom氏が運営）に集められている |
| 国際数学オリンピック（IMO） | 高校生の数学の国際大会。6問・42点満点 |
| ミレニアム懸賞問題 | Clay数学研究所が2000年に選んだ7つの問題。1問100万ドル |
| リーマン予想 | 素数の分布に関わるゼータ関数の零点が、すべて一本の直線上にあるという予想。ミレニアム懸賞問題の一つ |

</div>

</details>

<details>
<summary><strong>付録5　出典（クリックで開く）</strong></summary>

**本文で使った主な出典**

- Liam Price氏とエルデシュ問題#1196：Scientific American（2026年4月24日） https://www.scientificamerican.com/article/amateur-armed-with-chatgpt-vibe-maths-a-60-year-old-problem/ ／論文 https://arxiv.org/abs/2605.00301
- エルデシュ問題へのAIの貢献の記録（タオ氏らのWiki、2026年6月30日で更新停止）：https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- GPT-5「10問」の騒動（The Decoder、2025年10月18日）：https://the-decoder.com/leading-openai-researcher-announced-a-gpt-5-math-breakthrough-that-never-happened/
- フェルマーの最終定理のLeanへの書き直し（Anthropic、2026年9月4日）：https://www.anthropic.com/research/formalizing-fermats-last-theorem
- AlphaProof Nexus（Google DeepMind、2026年5月）：https://arxiv.org/abs/2605.22763 ／費用の報道 https://the-decoder.com/google-deepminds-alphaproof-nexus-solves-decades-old-math-problems-for-a-few-hundred-dollars/
- OpenAIの10件の成果（2026年8月1日）：https://openai.com/index/ten-advances-in-mathematics/ ／人の手による監査 https://arxiv.org/abs/2608.14673
- ヤコビアン予想の反例：解説論文 https://arxiv.org/abs/2608.00222 ／TheNextWeb https://thenextweb.com/news/jacobian-conjecture-disproved-ai-fable-5
- ゼータ関数の零点（Anthropic、2026年8月）：https://arxiv.org/abs/2608.13637 ／Scientific American https://www.scientificamerican.com/article/no-ai-didnt-just-solve-the-thorniest-problem-in-math/
- ナビエ・ストークス方程式：Clay数学研究所の声明 https://www.claymath.org/news/navier-stokes-announcement
- ナビエ・ストークス方程式：Scientific American https://www.scientificamerican.com/article/did-openai-solve-the-wrong-navier-stokes-problem/ ／NPR（2026年9月22日） https://www.npr.org/2026/09/22/nx-s1-5968588/openai-navier-stokes-problem-mathematicians-learn-little
- 単位距離予想の反証：OpenAI（2026年5月20日） https://openai.com/index/model-disproves-discrete-geometry-conjecture/ ／検証論文 https://arxiv.org/abs/2605.20695
- Epoch AIによる評価（FrontierMath: Open Problemsの概要）：https://epoch.ai/frontiermath/open-problems/about/overview
- Aaronson氏らの量子計算の定理：https://arxiv.org/abs/2509.21131
- 「100件超」と諮問グループ（OpenAI、2026年9月21日）：https://openai.com/index/advisory-group-on-mathematics-and-ai/
- ライデン宣言（2026年6月2日）：https://leidendeclaration.ai/
- タオ氏の警告（New Scientist、2026年9月）：https://www.newscientist.com/article/2588329-terence-tao-ai-companies-are-harming-mathematics/
- フィールズ賞受賞者25人の声明の内容（implicator.ai、2026年9月13日）：https://www.implicator.ai/25-fields-medalists-say-ai-labs-race-to-solve-math-problems-is-harming-mathematics/
- フィールズ賞受賞者25人の声明（Le Monde、2026年9月11日）：https://www.lemonde.fr/en/opinion/article/2026/09/11/25-fields-medalists-warn-the-goals-of-the-ai-companies-and-the-goals-of-the-mathematical-community-are-severely-misaligned_6757433_23.html
- Litt氏「A beginning for mathematics」（2026年9月13日）：https://www.daniellitt.com/blog/2026/9/13/a-beginning-for-mathematics/
- 国際数学オリンピックと将来の成果：Agarwal & Gaule "Invisible Geniuses"（AER: Insights） https://www.aeaweb.org/doi/10.1257/aeri.20190457 ／ワーキングペーパー版 https://www.imf.org/en/Publications/WP/Issues/2018/12/07/Invisible-Geniuses-Could-the-Knowledge-Frontier-Advance-Faster-46383 ／全米経済研究所の会議論文 https://conference.nber.org/conf_papers/f210802.pdf
- Harmonicの資金調達（2025年11月25日）：https://www.businesswire.com/news/home/20251125727962/en/
- Axiom Mathの資金調達（SiliconANGLE、2026年3月12日）：https://siliconangle.com/2026/03/12/verifiable-ai-startup-axiom-raises-200m-prove-ai-generated-code-safe-use/ ／売上の分析（Sacra）https://sacra.com/c/axiom-math/
- Ken Ono氏のAxiom Math参加（VnExpress）：https://e.vnexpress.net/news/news/education/legendary-us-mathematician-ken-ono-from-influential-mentor-to-working-for-former-student-carina-hong-s-ai-startup-5003840.html
- AI企業の研究職の報酬（levels.fyi、自己申告の集計）：https://www.levels.fyi/companies/openai/salaries/software-engineer/title/research-scientist
- 日本学術振興会 特別研究員の支給額：https://www.jsps.go.jp/j-pd/pd_oubo.html
- 国際数学オリンピック2025（Google DeepMind）：https://deepmind.google/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/
- FrontierMath（Epoch AI）：https://epoch.ai/frontiermath/tiers-1-4/the-benchmark

**事例ごとの出典**（番号は付録3と対応。日付は事例の公表日。確認した日はすべて2026年9月27日）

- C001（2023-10-11）：https://arxiv.org/abs/2310.07681 ／ https://arxiv.org/html/2609.00777v1
- C002（2023-11-06）：https://arxiv.org/abs/2311.03583 ／ https://www.ijcai.org/proceedings/2024/772
- C003（2023-11-13）：https://github.com/teorth/pfr ／ https://arxiv.org/abs/2311.05762
- C004（2023-12-14）：https://www.nature.com/articles/s41586-023-06924-6 ／ https://www.scientificamerican.com/article/ai-beats-humans-on-unsolved-math-problem/
- C005（2023-12-14）：https://www.nature.com/articles/s41586-023-06924-6 ／ https://deepmind.google/blog/funsearch-making-new-discoveries-in-mathematical-sciences-using-large-language-models/
- C006（2024-03-29）：https://arxiv.org/abs/2403.20055 ／ https://arxiv.org/html/2403.20055v1
- C007（2024-09-27）：https://arxiv.org/abs/2409.18626 ／ https://arxiv.org/html/2207.03343v3
- C008（2024-10-10）：https://arxiv.org/abs/2410.08304 ／ https://www.livescience.com/physics-mathematics/mathematics/ai-is-solving-impossible-math-problems-can-it-best-the-worlds-top-mathematicians
- C009（2024-11-01）：https://arxiv.org/abs/2411.00566 ／ https://arxiv.org/html/2411.00566
- C010（2024-11-01）：https://arxiv.org/abs/2411.00566 ／ https://arxiv.org/html/2411.00566
- C011（2025-05-14）：https://arxiv.org/abs/2506.13131 ／ https://spectrum.ieee.org/deepmind-alphaevolve
- C012（2025-05-14）：https://arxiv.org/abs/2506.13131 ／ https://www.popsci.com/science/human-outsmarts-ai-kissing-problem-math/
- C013（2025-05-14）：https://arxiv.org/abs/2506.13131 ／ https://spectrum.ieee.org/deepmind-alphaevolve
- C014（2025-08-20）：https://arxiv.org/abs/2511.16072 ／ https://arxiv.org/html/2509.03065 ／ https://arxiv.org/html/2511.16072
- C015（2025-09-03）：https://arxiv.org/abs/2509.03065 ／ https://arxiv.org/html/2509.03065
- C016（2025-09-11）：https://github.com/math-inc/strongpnt
- C017（2025-09-17）：https://arxiv.org/abs/2509.14185 ／ https://goo.gle/46loOuZ
- C018（2025-09-26）：https://arxiv.org/abs/2509.21131 ／ https://thequantuminsider.com/2025/09/29/gpt-5-serves-as-research-assistant-in-proving-one-of-quantum-computing-theorys-trickiest-theorems/
- C019（2025-09-30）：https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C020（2025-10-11）：https://www.erdosproblems.com/339 ／ https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C021（2025-10-18）：https://x.com/thomasfbloom/status/1979254235075059732
- C022（2025-10-22）：https://arxiv.org/abs/2510.20013 ／ https://arxiv.org/html/2510.20013v1
- C023（2025-10-27）：https://arxiv.org/abs/2510.23513 ／ https://openai.com/index/gpt-5-mathematical-discovery/
- C024（2025-11-03）：https://www.erdosproblems.com/36 ／ https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C025（2025-11-05）：https://arxiv.org/abs/2511.02864 ／ https://arxiv.org/html/2511.02864v3
- C026（2025-11-11）：https://arxiv.org/abs/2511.07721 ／ https://arxiv.org/pdf/2511.07721v1
- C027（2025-11-17）：https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems ／ https://xenaproject.wordpress.com/2025/12/05/formalization-of-erdos-problems/
- C028（2025-11-17）：https://arxiv.org/abs/2511.13391 ／ https://arxiv.org/html/2511.13391v1
- C029（2025-11-20）：https://arxiv.org/abs/2511.16072 ／ https://arxiv.org/html/2511.16072
- C030（2025-11-20）：https://arxiv.org/abs/2511.16072 ／ https://arxiv.org/html/2511.16072
- C031（2025-11-20）：https://arxiv.org/abs/2511.16072 ／ https://arxiv.org/html/2511.16072v1 ／ https://arxiv.org/html/2511.16072
- C032（2025-11-20）：https://arxiv.org/abs/2511.16072 ／ https://arxiv.org/html/2511.16072v1 ／ https://arxiv.org/html/2511.16072
- C033（2025-11-20）：https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C034（2025-11-23）：https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C035（2025-11-29）：https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C036（2025-12-01）：https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C037（2025-12-03）：https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C038（2025-12-08）：https://www.erdosproblems.com/1026 ／ https://terrytao.wordpress.com/2025/12/08/the-story-of-erdos-problem-126/
- C039（2025-12-25）：https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C040（2026-01）：https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C041（2026-01-06）：https://arxiv.org/abs/2601.07421
- C042（2026-01-10）：https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C043（2026-01-10）：https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C044（2026-01-11）：https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C045（2026-01-11）：https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C046（2026-01-18）：https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C047（2026-01-19）：https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C048（2026-01-22）：https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C049（2026-01-24）：https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C050（2026-01-28）：https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C051（2026-01-29）：https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C052（2026-02）：https://arxiv.org/abs/2601.22401 ／ https://arxiv.org/pdf/2602.10177
- C053（2026-02-03）：https://arxiv.org/abs/2602.03716 ／ https://axiommath.ai/research/proof-of-concept/
- C054（2026-02-03）：https://arxiv.org/abs/2602.03722 ／ https://www.wired.com/story/a-new-ai-math-ai-startup-just-cracked-4-previously-unsolved-problems/
- C055（2026-02-10）：https://arxiv.org/abs/2602.10177 ／ https://arxiv.org/html/2602.10177v1
- C056（2026-02-10）：https://arxiv.org/abs/2602.10177 ／ https://arxiv.org/html/2602.10177v1
- C057（2026-02-10）：https://arxiv.org/abs/2602.10177 ／ https://arxiv.org/html/2602.10177v1
- C058（2026-02-14）：https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C059（2026-02-21）：https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C060（2026-02（2026-03発表））：https://arxiv.org/abs/2604.23468 ／ https://gwern.net/doc/math/2026-03-mathinc-completingtheformalproofofhigherdimensionalspherepacking.html
- C061（2026-03-02）：https://www.erdosproblems.com/457 ／ https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C062（2026-03-10）：https://arxiv.org/abs/2603.09172 ／ https://arxiv.org/html/2603.09172
- C063（2026-03-30）：https://www.erdosproblems.com/125 ／ https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C064（2026-03-31）：https://www.erdosproblems.com/741 ／ https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C065（2026-03頃）：https://arxiv.org/abs/2606.31182
- C066（2026-04-04）：https://arxiv.org/abs/2604.03789
- C067（2026-04-07）：https://www.erdosproblems.com/12 ／ https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C068（2026-04-09）：https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C069（2026-04-13）：https://arxiv.org/abs/2605.00301 ／ https://terrytao.wordpress.com/2026/05/03/primitive-sets-and-von-mangoldt-chains-erdos-problem-1196-and-beyond/
- C070（2026-04-25）：https://www.erdosproblems.com/38 ／ https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C071（2026-05-08）：https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C072（2026-05-20）：https://arxiv.org/abs/2605.20695
- C073（2026-05-21）：https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems ／ https://mathoverflow.net/questions/511514/what-is-the-unit-distance-exponent
- C074（2026-05-21）：https://arxiv.org/abs/2605.22763 ／ https://the-decoder.com/google-deepminds-alphaproof-nexus-solves-decades-old-math-problems-for-a-few-hundred-dollars/
- C075（2026-05-21）：https://arxiv.org/abs/2605.22763 ／ https://arxiv.org/html/2605.22763v2 ／ https://arxiv.org/html/2605.22763v1
- C076（2026-05-21）：https://arxiv.org/abs/2605.22763 ／ https://arxiv.org/html/2605.22763v2 ／ https://arxiv.org/html/2605.22763v1
- C077（2026-05-21）：https://arxiv.org/abs/2605.22763 ／ https://arxiv.org/html/2605.22763v2 ／ https://arxiv.org/html/2605.22763v1
- C078（2026-05-21）：https://arxiv.org/abs/2605.22763 ／ https://arxiv.org/html/2605.22763v2 ／ https://arxiv.org/html/2605.22763v1
- C079（2026-05-21）：https://arxiv.org/abs/2605.22763 ／ https://arxiv.org/html/2605.22763v2 ／ https://arxiv.org/html/2605.22763v1
- C080（2026-05-21）：https://arxiv.org/abs/2605.22763 ／ https://arxiv.org/html/2605.22763v2 ／ https://arxiv.org/html/2605.22763v1
- C081（2026-05-21）：https://arxiv.org/abs/2605.22763 ／ https://arxiv.org/html/2605.22763v2 ／ https://arxiv.org/html/2605.22763v1
- C082（2026-05-24）：https://arxiv.org/abs/2605.25259
- C083（2026-05-26）：https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C084（2026-06-09）：https://www.erdosproblems.com/619 ／ https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C085（2026-07-10）：https://arxiv.org/abs/2607.16356
- C086（2026-07-20）：https://arxiv.org/abs/2608.00222 ／ https://officechai.com/ai/how-the-math-community-has-reacted-to-fable-helping-disprove-the-jacobian-conjecture/
- C087（2026-07-22）：https://www.isa-afp.org/entries/Dinitz_Garg_Goemans_Counterexample.html ／ https://isa-afp.org/browser_info/current/AFP/Dinitz_Garg_Goemans_Counterexample/outline.pdf
- C088（2026-07-27）：https://github.com/jinshanmu/CrouzeixConjecture ／ https://arxiv.org/abs/2608.03841
- C089（2026-08）：https://epoch.ai/frontiermath/open-problems/hadamard ／ https://mathoverflow.net/questions/85201/status-of-hadamard-matrix-conjecture
- C090（2026-08）：https://epoch.ai/frontiermath/open-problems/elliptic-curve-rank ／ https://mathworld.wolfram.com/EllipticCurveRank.html
- C091（2026-08）：https://arxiv.org/abs/2608.12561 ／ https://mathworld.wolfram.com/BorsuksConjecture.html
- C092（2026-08）：https://philip-engel.github.io/S6.pdf ／ https://www.scientificamerican.com/article/ai-solves-79-year-old-math-mystery-of-six-dimensional-spheres/
- C093（2026-08）：https://www.erdosproblems.com/forum/thread/4/proof-claims
- C094（2026-08-01）：https://arxiv.org/abs/2608.14673
- C095（2026-08-01）：https://arxiv.org/abs/2608.14673
- C096（2026-08-01）：https://arxiv.org/abs/2608.14673
- C097（2026-08-01）：https://arxiv.org/abs/2608.14673
- C098（2026-08-01）：https://arxiv.org/abs/2608.14673
- C099（2026-08-01）：https://arxiv.org/abs/2608.14673
- C100（2026-08-01）：https://arxiv.org/abs/2608.14673
- C101（2026-08-01）：https://arxiv.org/abs/2608.14673
- C102（2026-08-01）：https://arxiv.org/abs/2608.14673
- C103（2026-08-05）：https://github.com/teorth/sendov
- C104（2026-08-06）：https://www.scientificamerican.com/article/openais-latest-math-breakthroughs-commit-research-misconduct-experts-say/ ／ https://mathoverflow.net/questions/513866/what-are-the-key-new-ideas-in-the-proof-of-nonsoficity-of-groups-in-openai-s-con
- C105（2026-08-10）：https://arxiv.org/abs/2608.13637 ／ https://www.scientificamerican.com/article/no-ai-didnt-just-solve-the-thorniest-problem-in-math/
- C107（2026-08-17）：https://arxiv.org/abs/2608.16884
- C108（2026-08-30）：https://arxiv.org/abs/2608.29595
- C109（2026-09-01）：https://epoch.ai/latest/announcing-frontiermath-erdos
- C110（2026-09）：https://nitromannitol.github.io/kn1-verification-b80e9/ ／ https://github.com/anthropics/formal-math/blob/795efb86f191735c5481675763537cfb4ff37e55/percolation/README.md
- C111（2026-09）：https://arxiv.org/abs/2609.07996 ／ https://github.com/tadamcz/koethe
- C112（2026-09）：https://github.com/tadamcz/phi-mixing-clt
- C113（2026-09）：https://arxiv.org/abs/2609.11500 ／ https://arxiv.org/abs/2609.11500v1
- C114（2026-09）：https://github.com/tadamcz/dittert
- C115（2026-09）：https://github.com/tadamcz/n-conjecture-strong
- C116（2026-09-04）：https://www.anthropic.com/research/formalizing-fermats-last-theorem ／ https://thenextweb.com/news/anthropic-claude-fermat-last-theorem-lean-buzzard
- C117（2026-09-08）：https://www.claymath.org/news/navier-stokes-announcement
- C118（2026-09-14）：https://arxiv.org/abs/2608.23691 ／ https://www.together.ai/blog/einsteinarena
- C119（2026-09-20）：https://arxiv.org/abs/2609.11912 ／ https://eu.36kr.com/en/p/3991214012775170
- C120（2026-09-21）：https://openai.com/index/advisory-group-on-mathematics-and-ai/ ／ https://techcrunch.com/2026/09/21/openai-forms-math-advisory-group-as-its-ai-resolves-more-than-100-open-problems/
- C121（2026-03-16）：https://arxiv.org/abs/2603.15929 ／ https://arxiv.org/html/2603.15929v1


</details>

