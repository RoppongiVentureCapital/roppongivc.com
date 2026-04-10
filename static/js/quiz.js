var T=[
{id:"I",name:"探究型",sub:"Investigative",
 tag:"原理を解明し、知の境界を広げる",
 desc:"<p>あなたは物事の「なぜ？」を突き詰めることに最も強い情熱を持つタイプです。表面的な理解では満足せず、根本原理まで掘り下げようとします。</p><p>ホランド理論における Investigative 型に対応し、分析的・知的探究を志向します。ディープテック領域（AI基礎研究、量子コンピューティング、数理科学等）で革新を起こす可能性を秘めています。</p>",
 ex:"Terence Tao（数学者）、Demis Hassabis（DeepMind創業者）、望月新一（ABC予想証明）"},
{id:"R",name:"実装型",sub:"Realistic",
 tag:"アイデアを動くものに変える",
 desc:"<p>あなたは「動くものを作る」ことに最も強い喜びを感じるタイプです。理論だけで終わらせず、手を動かしてプロダクトを生み出します。</p><p>ホランド理論における Realistic 型に対応し、実践的・技術的な実装を志向します。完璧を待たずにプロトタイプを作り、改善を重ねるアプローチが自然にできます。</p>",
 ex:"Linus Torvalds（Linux開発者）、Palmer Luckey（Oculus VR創業者）、まつもとゆきひろ（Ruby開発者）"},
{id:"A",name:"創造型",sub:"Artistic",
 tag:"既存の枠を超え、新しい道を拓く",
 desc:"<p>あなたは既存の枠組みにとらわれず、独自の発想で問題を解決するタイプです。分野の境界を越えた思考や、解法の「美しさ」に価値を見出します。</p><p>ホランド理論における Artistic 型に対応し、創造性・独創性を志向します。STEM領域では、クリエイティブ・テクノロジー、数学的可視化、分野横断的な研究で力を発揮します。</p>",
 ex:"Bret Victor（創造的コンピューティング）、Neri Oxman（MIT Media Lab・素材生態学）、Vi Hart（数学とアートの融合）"},
{id:"S",name:"伝達型",sub:"Social",
 tag:"知識を届け、人の可能性を引き出す",
 desc:"<p>あなたは自分が理解したことを他者にわかりやすく伝える能力に優れたタイプです。複雑な概念を直感的に説明し、人の理解を助けることに喜びを感じます。</p><p>ホランド理論における Social 型に対応し、教育・協力・知識共有を志向します。教育とテクノロジーの領域で革新を起こし、次世代の才能を開花させる可能性を秘めています。</p>",
 ex:"Grant Sanderson（3Blue1Brown）、Sal Khan（Khan Academy創設者）、落合陽一（メディアアーティスト・教育者）"},
{id:"E",name:"事業型",sub:"Enterprising",
 tag:"事業を創り、社会を動かす",
 desc:"<p>あなたは技術そのものよりも、技術が生み出す市場機会に目が向くタイプです。リスクを恐れず、チームを率いて大きなビジョンを実現しようとします。</p><p>ホランド理論における Enterprising 型に対応し、リーダーシップ・事業創造を志向します。STEM的な思考力をビジネスに応用し、社会にインパクトを与える事業を作る可能性を秘めています。</p>",
 ex:"Patrick Collison（Stripe共同創業者・元数学オリンピック出場）、Jensen Huang（NVIDIA創業者）、孫正義"},
{id:"C",name:"設計型",sub:"Conventional",
 tag:"構造を見抜き、最適な仕組みを作る",
 desc:"<p>あなたは個別の問題を解くよりも、問題が発生しない構造を作ることを好むタイプです。全体を俯瞰し、要素間の関係性を見抜く力に優れています。</p><p>ホランド理論における Conventional 型に対応し、体系化・構造設計を志向します。複雑なシステムのアーキテクチャを設計し、世界のインフラを支える可能性を秘めています。</p>",
 ex:"Jeff Dean（Google基盤設計）、John Carmack（ゲームエンジン設計者）、クロード・シャノン（情報理論の父）"}
];

var QS=[
{q:"難しい課題に取り組むとき、あなたが最も重視するアプローチは？",c:[
 {t:"原理に立ち返る。根本がわからないまま進めたくない",s:[2,0,0,0,0,1]},
 {t:"手を動かして試す。考えるより先にプロトタイプを作る",s:[0,2,1,0,0,0]},
 {t:"前例を調べて、応用できる解決策がないか探す",s:[0,0,0,0,2,1]},
 {t:"常識的なアプローチを疑い、別の角度から見てみる",s:[1,0,2,0,0,0]}]},
{q:"グループワークで、自分が最も力を発揮できるのは？",c:[
 {t:"手を動かして成果物を形にする役割",s:[1,2,0,0,0,0]},
 {t:"メンバーの理解を揃え、全員が納得する方向に導く役割",s:[0,0,0,2,1,0]},
 {t:"全体の計画を立て、進捗と品質を管理する役割",s:[0,0,0,0,1,2]},
 {t:"方向性を決めて、チームを前に進める役割",s:[0,0,0,1,2,0]}]},
{q:"新しい分野を学ぶとき、最も自然なやり方は？",c:[
 {t:"基礎理論から体系的に積み上げる",s:[2,0,0,0,0,1]},
 {t:"異分野との共通点を探しながら学ぶ",s:[1,0,2,0,0,0]},
 {t:"誰かに教えるつもりでまとめながら学ぶ",s:[0,0,0,2,0,1]},
 {t:"「これを学ぶと何ができるようになるか」を先に確認する",s:[0,1,0,0,2,0]}]},
{q:"自分の成果物で最もこだわるポイントは？",c:[
 {t:"全体の構造が論理的に整合していること",s:[1,0,0,0,0,2]},
 {t:"実際に触って使える状態まで仕上げること",s:[0,2,0,1,0,0]},
 {t:"独自性があること。ありきたりでないこと",s:[0,0,2,0,1,0]},
 {t:"多くの人に届くこと。インパクトの大きさ",s:[0,0,0,1,2,0]}]},
{q:"「すごい」と感じる人の共通点は？",c:[
 {t:"一つのことを極限まで深く理解している",s:[2,0,0,0,0,1]},
 {t:"常識を覆す発想で新しい道を切り拓いた",s:[0,0,2,0,1,0]},
 {t:"複雑なことを驚くほどわかりやすく説明できる",s:[0,0,0,2,0,1]},
 {t:"周囲を巻き込んで大きなことを成し遂げた",s:[0,1,0,0,2,0]}]},
{q:"休日に気づいたら没頭しているのは？",c:[
 {t:"物事の仕組みを分解して理解すること",s:[1,0,0,0,0,2]},
 {t:"個人プロジェクトの開発やものづくり",s:[0,2,1,0,0,0]},
 {t:"ビジネスや社会の動向を追うこと",s:[0,0,0,1,2,0]},
 {t:"気になるテーマを延々と深掘りすること",s:[2,0,1,0,0,0]}]},
{q:"チームで成果を出したとき、最も誇りに感じるのは？",c:[
 {t:"誰も思いつかなかったアプローチで解決できたこと",s:[1,0,2,0,0,0]},
 {t:"実際に動くプロダクトを完成させたこと",s:[0,2,0,0,0,1]},
 {t:"当初の目標を超える成果を出せたこと",s:[0,1,0,0,2,0]},
 {t:"メンバー全員が成長を実感できたこと",s:[0,0,0,2,1,0]}]},
{q:"失敗から学ぶとき、最も重視するのは？",c:[
 {t:"なぜ失敗したかの原因を徹底的に分析する",s:[2,0,0,0,0,1]},
 {t:"全く違うアプローチを試してみる",s:[0,1,2,0,0,0]},
 {t:"早く次の行動に移して検証する",s:[0,1,0,0,2,0]},
 {t:"失敗のパターンを構造化して再発防止の仕組みを作る",s:[0,0,0,1,0,2]}]},
{q:"10年後、どんな形で社会に貢献していたい？",c:[
 {t:"まだ誰も解いていない問題を解決している",s:[2,0,1,0,0,0]},
 {t:"世界中の人が日常的に使うものを作っている",s:[0,2,0,0,1,0]},
 {t:"次の世代の才能を見出し、育てている",s:[0,0,1,2,0,0]},
 {t:"大きな事業を作り、雇用と経済を動かしている",s:[0,0,0,0,2,1]}]},
{q:"最も共感する考え方は？",c:[
 {t:"「重要なのは疑問を持ち続けることだ」",s:[2,0,1,0,0,0]},
 {t:"「完璧より完了。まず動くものを作れ」",s:[0,2,0,0,1,0]},
 {t:"「一人の天才より、百人の協力が世界を変える」",s:[0,0,0,2,1,0]},
 {t:"「シンプルさの追求は、複雑さの克服より難しい」",s:[0,1,1,0,0,2]}]}
];

var cur=0,scores=[0,0,0,0,0,0],history=[];

function startQuiz(){
 document.getElementById('intro').classList.add('qz-hidden');
 document.getElementById('quiz').classList.remove('qz-hidden');
 showQ();
}
function showQ(){
 document.getElementById('pbar').style.width=((cur/QS.length)*100)+'%';
 document.getElementById('qnum').textContent='QUESTION '+(cur+1)+' / '+QS.length;
 document.getElementById('qtext').textContent=QS[cur].q;
 var bb=document.getElementById('backBtn');
 if(cur>0)bb.classList.remove('qz-hidden');else bb.classList.add('qz-hidden');
 var el=document.getElementById('choices');el.innerHTML='';
 var idx=[];for(var i=0;i<QS[cur].c.length;i++)idx.push(i);
 for(var i=idx.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var tmp=idx[i];idx[i]=idx[j];idx[j]=tmp;}
 idx.forEach(function(ci){
  var b=document.createElement('button');b.className='qz-choice';
  b.textContent=QS[cur].c[ci].t;
  (function(index){b.onclick=function(){pick(index);};})(ci);
  el.appendChild(b);
 });
}
function pick(ci){
 history.push({q:cur,ci:ci,prev:scores.slice()});
 QS[cur].c[ci].s.forEach(function(v,i){scores[i]+=v;});
 cur++;
 if(cur<QS.length)showQ();else showResult();
}
function goBack(){
 if(!history.length)return;
 var h=history.pop();cur=h.q;scores=h.prev.slice();showQ();
}

function showResult(){
 document.getElementById('quiz').classList.add('qz-hidden');
 var el=document.getElementById('result');el.classList.remove('qz-hidden');
 var mx=Math.max.apply(null,scores);var wi=scores.indexOf(mx);var t=T[wi];
 var s2=scores.slice();s2[wi]=-1;var si=s2.indexOf(Math.max.apply(null,s2));
 var total=0;scores.forEach(function(v){total+=v;});if(!total)total=1;

 var h='';
 // Screenshot-friendly result card
 h+='<div class="two-col" style="border-bottom:1px solid var(--gray-200)">';
 h+='<div class="two-col-left">';
 h+='<p class="eyebrow">YOUR RESULT</p>';
 h+='<h2 class="col-heading" style="font-size:1.2rem">思考スタイル診断</h2>';
 h+='<p style="font-family:var(--sans);font-size:12px;color:var(--gray-500);margin-top:0.5rem">Roppongi Venture Capital</p>';
 h+='</div>';
 h+='<div class="two-col-right">';

 // Card for screenshot
 h+='<div class="rs-card" id="resultCard">';
 h+='<div class="rs-card-head">STEM THINKING STYLE</div>';
 h+='<div class="rs-card-type">'+t.name+' — '+t.sub+'</div>';
 h+='<div class="rs-card-tag">'+t.tag+'</div>';
 h+='<div class="rs-card-scores">';
 T.forEach(function(tp,i){
  var pct=Math.round((scores[i]/total)*100);
  var barW=mx>0?Math.round((scores[i]/mx)*100):0;
  h+='<div class="sc-row"><span class="sc-label">'+tp.name+'</span>';
  h+='<div class="sc-track"><div class="sc-fill" style="width:'+barW+'%"></div></div>';
  h+='<span class="sc-pct">'+pct+'%</span></div>';
 });
 h+='</div>';
 h+='<div class="rs-card-footer">サブタイプ：'+T[si].name+'（'+T[si].sub+'） ｜ roppongivc.com/quiz</div>';
 h+='</div>';

 h+='<p style="font-family:var(--sans);font-size:13px;color:var(--gray-500);margin-bottom:1.5rem">結果を保存するにはこのカードをスクリーンショットしてください。テキストで保存したい場合は下のボタンからコピーできます。</p>';
 h+='<div style="display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:2rem">';
 h+='<button class="rs-copy" id="copyBtn" onclick="copyResult()">テキストでコピー</button>';
 h+='<button class="apply-btn" onclick="location.reload()">もう一度診断する</button>';
 h+='</div>';

 // Full description
 h+='<div class="rs-desc" style="border-top:1px solid var(--gray-200);padding-top:2rem">'+t.desc+'</div>';
 h+='<p style="font-family:var(--sans);font-size:13px;color:var(--gray-500);margin-bottom:2rem"><strong>同じタイプの著名人：</strong>'+t.ex+'</p>';

 h+='</div></div>';

 // Logic section - shown by default
 h+='<div class="two-col" style="border-bottom:1px solid var(--gray-200)">';
 h+='<div class="two-col-left">';
 h+='<h2 class="col-heading" style="font-size:1.2rem">診断ロジック</h2>';
 h+='<p style="font-family:var(--sans);font-size:13px;color:var(--gray-500);margin-top:0.5rem">理論的背景と測定手法</p>';
 h+='</div>';
 h+='<div class="two-col-right"><div class="lg-body">';

 h+='<h4>理論的基盤：ホランドのRIASECモデル</h4>';
 h+='<p>この診断は、職業心理学者 John Holland が1959年に提唱し、60年以上にわたり実証研究が蓄積されている RIASEC理論（Holland, 1997）に基づいています。</p>';
 h+='<p>RIASECは米国労働省のO*NET（職業情報ネットワーク）の分類基盤として現在も使用されており、Strong Interest Inventory（2012年改訂）やACT Interest Inventoryなど、世界で最も広く使われている職業適性検査の理論的基盤です。2014年のメタ分析（Rounds & Su）および2012年のメタ分析（Nye et al.）でも、6タイプ構造の妥当性が再確認されています。</p>';

 h+='<h4>6つのタイプとRIASECの対応</h4>';
 h+='<table><tr><th>RIASEC</th><th>本診断</th><th>特徴</th></tr>';
 h+='<tr><td>I — Investigative</td><td>探究型</td><td>分析的・知的探究。「なぜ？」を突き詰める</td></tr>';
 h+='<tr><td>R — Realistic</td><td>実装型</td><td>実践的・技術的。手を動かしてものを作る</td></tr>';
 h+='<tr><td>A — Artistic</td><td>創造型</td><td>独創的・分野横断的。既存の枠を超える発想</td></tr>';
 h+='<tr><td>S — Social</td><td>伝達型</td><td>教育的・協力的。知識を伝え人を育てる</td></tr>';
 h+='<tr><td>E — Enterprising</td><td>事業型</td><td>リーダーシップ・事業創造。ビジョンを実現する</td></tr>';
 h+='<tr><td>C — Conventional</td><td>設計型</td><td>体系的・構造的。仕組みを設計し最適化する</td></tr></table>';

 h+='<h4>STEM文脈への適応</h4>';
 h+='<p>オリジナルのRIASECは全職業領域を対象としていますが、本診断ではSTEM人材の文脈に特化した質問設計を行っています。特にArtistic型は、芸術的表現だけでなく「解法の美しさへのこだわり」「分野横断的な思考」「クリエイティブ・テクノロジー」といったSTEM領域での創造性として再解釈しています。</p>';

 h+='<h4>測定手法：多次元強制選択法（MFC）</h4>';
 h+='<p>各質問の4つの選択肢は、それぞれ複数のタイプに異なる重みで加点されます（主要タイプに+2、副次タイプに+1）。これは多次元強制選択法（Multidimensional Forced Choice）と呼ばれる手法で、単純な1対1対応ではありません。MFC形式は社会的望ましさバイアスを低減できることが知られています（Brown & Maydeu-Olivares, 2011）。</p>';

 h+='<h4>問題数の妥当性</h4>';
 h+='<p>本診断は10問で構成されています。短縮版性格検査の先行研究（Gosling et al., 2003 "TIPI"）により、適切に設計された少数の項目でも次元の本質的な構造を捉えられることが示されています。MFC形式では各回答が複数の次元に情報を提供するため、10問 x 4選択肢 = 40のデータポイントから6次元を測定することは統計的に妥当です。ただし、これは臨床的な診断ツールではなく、自己理解のきっかけとなることを目的とした簡易診断です。</p>';

 h+='<h4>参考文献</h4>';
 h+='<p style="font-size:12px;color:var(--gray-500)">';
 h+='Holland, J. L. (1997). <em>Making Vocational Choices</em> (3rd ed.). Psychological Assessment Resources.<br>';
 h+='Rounds, J., & Su, R. (2014). The nature and power of interests. <em>Current Directions in Psychological Science</em>, 23(2), 98-103.<br>';
 h+='Nye, C. D., Su, R., Rounds, J., & Drasgow, F. (2012). Vocational interests and performance. <em>Perspectives on Psychological Science</em>, 7(4), 384-403.<br>';
 h+='Brown, A., & Maydeu-Olivares, A. (2011). Item response modeling of forced-choice questionnaires. <em>Educational and Psychological Measurement</em>, 71(3), 460-502.<br>';
 h+='Gosling, S. D., Rentfrow, P. J., & Swann, W. B. (2003). A very brief measure of the Big-Five personality domains. <em>Journal of Research in Personality</em>, 37(6), 504-528.</p>';

 h+='</div></div></div>';
 el.innerHTML=h;
}

function copyResult(){
 var mx=Math.max.apply(null,scores);var wi=scores.indexOf(mx);var t=T[wi];
 var s2=scores.slice();s2[wi]=-1;var si=s2.indexOf(Math.max.apply(null,s2));
 var total=0;scores.forEach(function(v){total+=v;});if(!total)total=1;
 var txt='STEM思考スタイル診断 結果\n';
 txt+='================================\n\n';
 txt+='メインタイプ：'+t.name+'（'+t.sub+'）\n';
 txt+=t.tag+'\n\n';
 txt+='サブタイプ：'+T[si].name+'（'+T[si].sub+'）\n\n';
 txt+='スコア分布：\n';
 T.forEach(function(tp,i){
  var pct=Math.round((scores[i]/total)*100);
  var bar='';for(var j=0;j<Math.round(pct/5);j++)bar+='#';
  txt+='  '+tp.name+' '+pct+'% '+bar+'\n';
 });
 txt+='\n同じタイプの著名人：'+t.ex+'\n';
 txt+='\n診断：roppongivc.com/quiz\n';
 txt+='理論基盤：Holland RIASEC Model (1997)\n';
 navigator.clipboard.writeText(txt).then(function(){
  var btn=document.getElementById('copyBtn');
  btn.textContent='コピーしました';
  setTimeout(function(){btn.textContent='テキストでコピー';},2000);
 });
}
