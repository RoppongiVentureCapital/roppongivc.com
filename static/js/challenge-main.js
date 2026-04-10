// STEM Cognitive Challenge - Main Controller v3
// Fixed difficulty (not adaptive), detailed methodology
(function(){
var P1=10,P2=8,TOTAL=18;
var st={part:0,qi:0,s1:0,s2:0,t1:0,t2:0,tm1:[],tm2:[],ts:0,tid:null,answered:false};

document.getElementById('startBtn').addEventListener('click',function(){
  document.getElementById('intro').style.display='none';
  document.getElementById('game').style.display='';
  st.part=1;st.qi=0;next();
});

function curLevel(){
  // Fixed: Q1=Lv1, Q2=Lv2, ...
  return st.qi+1;
}

function next(){
  st.answered=false;
  var gi=(st.part===1)?st.qi:P1+st.qi;
  document.getElementById('pbar').style.width=((gi/TOTAL)*100)+'%';
  document.getElementById('partLabel').textContent=(st.part===1)?'PART 1 — PATTERN REASONING':'PART 2 — MATHEMATICAL REASONING';
  var pc=(st.part===1)?P1:P2;
  document.getElementById('qnum').textContent='Q'+(st.qi+1)+' / '+pc;
  document.getElementById('levelInfo').textContent='難易度 '+curLevel()+'/'+pc;
  document.getElementById('feedback').style.display='none';
  document.getElementById('feedback').innerHTML='';
  if(st.part===1)renderP1();else renderP2();
  startTimer();
}

function startTimer(){
  var lv=curLevel();
  var lim=(lv<=2)?30:(lv<=5)?45:60;
  if(st.part===2)lim=(lv<=2)?45:(lv<=5)?60:90;
  st.ts=Date.now();st.tl=lim;updTimer();
  if(st.tid)clearInterval(st.tid);st.tid=setInterval(updTimer,200);
}
function updTimer(){
  var r=Math.max(0,st.tl-(Date.now()-st.ts)/1000);
  document.getElementById('timer').textContent=Math.ceil(r)+'s';
  if(r<=0){clearInterval(st.tid);answer(-1);}
}

var curP=null;
function renderP1(){
  var qa=document.getElementById('questionArea'),ch=document.getElementById('choices');
  var p=PatternEngine.generate(curLevel());curP=p;
  var hint='';
  if(st.qi<2)hint='<p style="font-family:var(--sans);font-size:13px;color:#059669;margin-bottom:1rem;padding:0.75rem;background:#f0fdf4;border:1px solid #bbf7d0">ヒント：各行（横）と各列（縦）のパターンに注目してください。形・色・サイズがどう変化しているかを見つけましょう。</p>';
  var h=hint+'<div class="ch-canvas-wrap"><div class="ch-grid">';
  for(var r=0;r<3;r++)for(var c=0;c<3;c++){
    if(r===2&&c===2)h+='<div class="ch-cell ch-missing">?</div>';
    else h+='<div class="ch-cell"><canvas id="gc'+r+c+'" width="110" height="110"></canvas></div>';
  }
  h+='</div></div>';
  qa.innerHTML=h;
  for(var r=0;r<3;r++)for(var c=0;c<3;c++){if(r===2&&c===2)continue;PatternEngine.drawCell(document.getElementById('gc'+r+c),PatternEngine.cellToItems(p.grid[r][c]));}
  var oh='<div class="ch-opts">';
  for(var i=0;i<p.options.length;i++)oh+='<div class="ch-opt" data-idx="'+i+'"><canvas id="opt'+i+'" width="80" height="80"></canvas></div>';
  oh+='</div>';ch.innerHTML=oh;
  for(var i=0;i<p.options.length;i++)PatternEngine.drawCell(document.getElementById('opt'+i),PatternEngine.cellToItems(p.options[i]));
  var opts=ch.querySelectorAll('.ch-opt');
  for(var i=0;i<opts.length;i++)opts[i].addEventListener('click',function(){
    if(st.answered)return;var idx=parseInt(this.getAttribute('data-idx'));
    clearInterval(st.tid);answer(idx===curP.answerIndex?1:0);
    var all=document.querySelectorAll('.ch-opt');
    for(var j=0;j<all.length;j++){if(parseInt(all[j].getAttribute('data-idx'))===curP.answerIndex)all[j].style.borderColor='#059669';else all[j].style.opacity='0.3';}
  });
}

var curM=null;
function renderP2(){
  var qa=document.getElementById('questionArea'),ch=document.getElementById('choices');
  var p=MathEngine.generate(curLevel());curM=p;
  var hint='';
  if(st.qi<2)hint='<p style="font-family:var(--sans);font-size:13px;color:#059669;margin-bottom:1rem;padding:0.75rem;background:#f0fdf4;border:1px solid #bbf7d0">公式の暗記は不要です。小さい数で試したり、発想を転換して考えてみてください。</p>';
  qa.innerHTML=hint+'<div class="ch-math-q">'+p.question.replace(/\n/g,'<br>')+'</div>';
  var oh='';for(var i=0;i<p.options.length;i++)oh+='<button class="ch-math-opt" data-idx="'+i+'">'+p.options[i]+'</button>';
  ch.innerHTML=oh;
  var opts=ch.querySelectorAll('.ch-math-opt');
  for(var i=0;i<opts.length;i++)opts[i].addEventListener('click',function(){
    if(st.answered)return;var idx=parseInt(this.getAttribute('data-idx'));
    clearInterval(st.tid);answer(idx===curM.answerIndex?1:0);
    var all=document.querySelectorAll('.ch-math-opt');
    for(var j=0;j<all.length;j++){if(parseInt(all[j].getAttribute('data-idx'))===curM.answerIndex)all[j].style.background='#f0fdf4',all[j].style.borderColor='#059669';else all[j].style.opacity='0.3';}
  });
}

function answer(correct){
  if(correct===-1)correct=0;st.answered=true;
  var elapsed=(Date.now()-st.ts)/1000;
  if(st.part===1){st.t1++;if(correct)st.s1++;st.tm1.push(elapsed);}
  else{st.t2++;if(correct)st.s2++;st.tm2.push(elapsed);}
  var fb=document.getElementById('feedback');
  var h='<div style="padding:1rem;border:1px solid '+(correct?'#059669':'#dc2626')+';background:'+(correct?'#f0fdf4':'#fef2f2')+';margin-bottom:1rem">';
  h+='<strong style="color:'+(correct?'#059669':'#dc2626')+'">'+(correct?'正解':'不正解')+'</strong>';
  if(st.part===1&&curP)h+='<p style="margin-top:0.5rem;font-size:13px;color:var(--gray-600)"><strong>ルール：</strong>'+curP.explanation+'</p>';
  h+='</div><button class="apply-btn" id="nextQBtn">次の問題へ →</button>';
  fb.innerHTML=h;fb.style.display='';
  document.getElementById('nextQBtn').addEventListener('click',function(){
    st.qi++;var pc=(st.part===1)?P1:P2;
    if(st.qi>=pc){if(st.part===1){st.part=2;st.qi=0;MathEngine.reset();next();}else showResult();}
    else next();
  });
}

function showResult(){
  document.getElementById('game').style.display='none';
  var el=document.getElementById('result');el.style.display='';
  var a1=st.t1?st.s1/st.t1:0,a2=st.t2?st.s2/st.t2:0;
  var at1=0,at2=0;
  for(var i=0;i<st.tm1.length;i++)at1+=st.tm1[i];at1=st.tm1.length?at1/st.tm1.length:0;
  for(var i=0;i<st.tm2.length;i++)at2+=st.tm2[i];at2=st.tm2.length?at2/st.tm2.length:0;
  // Score: correct answers out of total, scaled to 100
  var s1=Math.round((st.s1/P1)*100),s2=Math.round((st.s2/P2)*100);
  var tot=Math.round(s1*0.6+s2*0.4);
  var rank=tot>=90?'S':tot>=70?'A':tot>=50?'B':tot>=30?'C':'D';

  var h='<div class="two-col" style="border-bottom:1px solid var(--gray-200)"><div class="two-col-left"><p class="eyebrow">RESULT</p>';
  h+='<h2 class="col-heading" style="font-size:1.2rem">STEM Cognitive Challenge</h2></div>';
  h+='<div class="two-col-right">';
  h+='<div class="rs-card"><div class="rs-card-head">COGNITIVE SCORE</div>';
  h+='<div class="rs-card-type">Rank '+rank+' — '+tot+' / 100</div>';
  h+='<div style="margin:1.5rem 0">';
  h+='<div class="sc-row"><span class="sc-label">パターン推理</span><div class="sc-track"><div class="sc-fill" style="width:'+s1+'%"></div></div><span class="sc-val">'+st.s1+'/'+P1+'</span></div>';
  h+='<div class="sc-row"><span class="sc-label">数理推論</span><div class="sc-track"><div class="sc-fill" style="width:'+s2+'%"></div></div><span class="sc-val">'+st.s2+'/'+P2+'</span></div></div>';
  h+='<div style="font-family:var(--sans);font-size:13px;color:var(--gray-600);line-height:1.8">';
  h+='<p>パターン推理：'+st.s1+'/'+P1+'問正解、平均回答時間 '+at1.toFixed(1)+'秒</p>';
  h+='<p>数理推論：'+st.s2+'/'+P2+'問正解、平均回答時間 '+at2.toFixed(1)+'秒</p></div>';
  h+='<div class="rs-card-footer">全員が同じ問題・同じ条件で挑戦しています ｜ roppongivc.com/challenge</div></div>';

  h+='<p style="font-family:var(--sans);font-size:13px;color:var(--gray-500);padding:0.75rem;background:#fffbeb;border:1px solid #fde68a;margin-bottom:1.5rem"><strong>注意：</strong>本チャレンジは学術的に確立されたタスク形式を使用していますが、この具体的な実装は心理測定学的な検証（信頼性・妥当性の統計的確認）を経ていないプロトタイプです。スコアは参考値としてお楽しみください。</p>';

  h+='<div style="display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:2rem">';
  h+='<button class="rs-copy" id="copyBtn">テキストでコピー</button>';
  h+='<button class="apply-btn" id="retryBtn">もう一度挑戦する</button></div>';
  h+='</div></div>';

  // ===== DETAILED METHODOLOGY =====
  h+='<div class="two-col" style="border-bottom:1px solid var(--gray-200)"><div class="two-col-left">';
  h+='<h2 class="col-heading" style="font-size:1.2rem">測定手法</h2>';
  h+='<p style="font-family:var(--sans);font-size:13px;color:var(--gray-500);margin-top:0.5rem">理論的背景・問題設計・スコアリング・限界</p></div>';
  h+='<div class="two-col-right"><div class="lg-body">';

  h+='<h4>1. 理論的基盤：CHC理論（Cattell-Horn-Carroll）</h4>';
  h+='<p>本チャレンジは、認知能力研究で最も広く検証されている <strong>CHC理論</strong>（Carroll, 1993; McGrew, 2009）に基づいています。CHC理論は約16の広域認知能力を階層的に定義するモデルで、教育心理学・臨床心理学・職業心理学の標準的な枠組みとして世界中で使用されています。</p>';
  h+='<p>本チャレンジでは、CHC理論の広域能力のうちSTEM分野に最も関連の深い2つを測定対象としています：</p>';
  h+='<table><tr><th>CHCコード</th><th>能力名</th><th>本チャレンジでの測定</th><th>STEM との関連</th></tr>';
  h+='<tr><td>Gf</td><td>流動性推理</td><td>Part 1: パターン推理</td><td>新奇な問題を解く力。学業成績の最強の認知的予測因子（Deary et al., 2007）</td></tr>';
  h+='<tr><td>Gf + Gq</td><td>流動性推理 + 量的知識</td><td>Part 2: 数理推論</td><td>数学的問題解決力。SMPY研究で35年以上にわたりSTEM達成を予測（Lubinski & Benbow, 2006）</td></tr></table>';

  h+='<h4>2. Part 1 — パターン推理の設計根拠</h4>';
  h+='<p><strong>タスク形式：</strong>3×3マトリクス補完課題。8つのセルに図形パターンが配置され、9番目（右下）に入るべきパターンを6つの選択肢から選びます。</p>';
  h+='<p><strong>学術的根拠：</strong>この形式は <strong>Raven\'s Progressive Matrices</strong>（Raven, 1938）として知られ、流動性推理（Gf）を測定する世界標準的な手法です。Carpenter, Just & Shell (1990) は、Raven\'sが測定しているのは「抽象的なルールの発見と適用」であることを詳細に分析しています。</p>';
  h+='<p><strong>問題生成：</strong>各問題はアルゴリズムで自動生成されています。図形の属性（形・色・サイズ）に対して以下のルールを組み合わせることで、難易度を制御しています：</p>';
  h+='<table><tr><th>難易度</th><th>ルール構成</th><th>例</th></tr>';
  h+='<tr><td>1-2</td><td>1属性に1ルール</td><td>形が行ごとに丸→三角→四角と変化</td></tr>';
  h+='<tr><td>3-4</td><td>2属性に2ルール</td><td>形が行で変化 + 色が列で変化</td></tr>';
  h+='<tr><td>5-6</td><td>分散ルール（ラテン方陣）</td><td>各形が各行・各列に1回ずつ出現</td></tr>';
  h+='<tr><td>7-8</td><td>分散 + 定数ルールの複合</td><td>形がラテン方陣 + 色が列で統一</td></tr>';
  h+='<tr><td>9-10</td><td>論理演算（XOR）の複合</td><td>各行で「1番目と2番目の組み合わせ→3番目」+ 別属性がラテン方陣</td></tr></table>';
  h+='<p>この自動生成アプローチは Matzen et al. (2010) "Recreating Raven\'s"（Sandia National Laboratories）の手法を参考にしています。</p>';

  h+='<h4>3. Part 2 — 数理推論の設計根拠</h4>';
  h+='<p><strong>設計原則：</strong>公式の暗記ではなく<strong>発想力</strong>を問う問題で構成しています。これは国際数学オリンピック（IMO）の問題設計思想と同じです。IMOの問題は高校数学までの知識で解けますが、独創的な発想が必要です。</p>';
  h+='<p><strong>問題カテゴリ：</strong></p>';
  h+='<table><tr><th>カテゴリ</th><th>測定する能力</th><th>例</th></tr>';
  h+='<tr><td>論理パズル</td><td>演繹的推論</td><td>嘘つき問題、条件推理</td></tr>';
  h+='<tr><td>数的感覚</td><td>数量的直感</td><td>概算、桁数の推定</td></tr>';
  h+='<tr><td>組合せ</td><td>場合分け・構造把握</td><td>握手問題、タイル敷き詰め</td></tr>';
  h+='<tr><td>ゲーム理論</td><td>戦略的思考</td><td>石取りゲームの必勝法</td></tr>';
  h+='<tr><td>認知バイアス</td><td>直感の罠を見抜く力</td><td>バットとボール問題（Cognitive Reflection Test, Frederick 2005）</td></tr></table>';
  h+='<p><strong>学術的根拠：</strong>SMPY研究（Study of Mathematically Precocious Youth）は、13歳時の数学的推理力が35年後のSTEM分野での達成を予測することを実証しました（Lubinski & Benbow, 2006）。さらに Makel et al. (2016) は、上位0.01%内でも能力差がSTEM達成を予測することを示しています。</p>';

  h+='<h4>4. スコアリング</h4>';
  h+='<p>全員が同じ問題を同じ順序（易→難）で解きます。スコアは単純明快です：</p>';
  h+='<table><tr><th>指標</th><th>計算方法</th></tr>';
  h+='<tr><td>パターン推理スコア</td><td>正答数 / '+P1+'問 × 100</td></tr>';
  h+='<tr><td>数理推論スコア</td><td>正答数 / '+P2+'問 × 100</td></tr>';
  h+='<tr><td>総合スコア</td><td>パターン推理 × 60% + 数理推論 × 40%</td></tr></table>';
  h+='<p>パターン推理の比重を60%としているのは、Gf（流動性推理）が訓練に依存しにくい「素の認知能力」をより反映するためです。数理推論は発想力を重視していますが、数学的経験の影響を完全には排除できません。</p>';

  h+='<h4>5. このチャレンジの限界</h4>';
  h+='<p><strong>測定できるもの：</strong>流動性推理（パターン認識・ルール発見）と数学的推理力（発想力・論理的思考）の一部。</p>';
  h+='<p><strong>測定できないもの：</strong>科学オリンピックの成績を直接予測するものではありません。オリンピック級の達成には、ここで測定できない以下の要素が不可欠です（Sriraman, 2005; Leikin, 2009）：</p>';
  h+='<ul><li>数学的創造性（新しい証明を構成する力）</li><li>領域固有の深い知識（数論、幾何学等の専門的理解）</li><li>数千時間の意図的な訓練</li><li>粘り強さと動機づけ</li></ul>';
  h+='<p><strong>検証状況：</strong>使用しているタスク形式（Raven\'s型マトリクス、数学的推理課題）は数十年の学術的検証を経ていますが、この具体的な実装（問題の選定、難易度設定、スコアリング）は心理測定学的な検証（構成概念妥当性、基準関連妥当性、テスト-再テスト信頼性の統計的確認）を経ていません。スコアは自己理解のきっかけとしてご活用ください。</p>';

  h+='<h4>6. 参考文献</h4>';
  h+='<p style="font-size:12px;color:var(--gray-500)">';
  h+='Carroll, J. B. (1993). <em>Human Cognitive Abilities: A Survey of Factor-Analytic Studies</em>. Cambridge University Press.<br>';
  h+='McGrew, K. S. (2009). CHC theory and the human cognitive abilities project. <em>Intelligence</em>, 37(1), 1-10.<br>';
  h+='Raven, J. C. (1938). <em>Progressive Matrices: A Perceptual Test of Intelligence</em>. H.K. Lewis.<br>';
  h+='Carpenter, P. A., Just, M. A., & Shell, P. (1990). What one intelligence test measures: A theoretical account of the processing in the Raven Progressive Matrices Test. <em>Psychological Review</em>, 97(3), 404-431.<br>';
  h+='Matzen, L. E., Benz, Z. O., Dixon, K. R., Posey, J., Kroger, J. K., & Speed, A. E. (2010). Recreating Raven\'s: Software for systematically generating large numbers of Raven-like matrix problems with normed properties. <em>Behavior Research Methods</em>, 42(2), 525-541.<br>';
  h+='Deary, I. J., Strand, S., Smith, P., & Fernandes, C. (2007). Intelligence and educational achievement. <em>Intelligence</em>, 35(1), 13-21.<br>';
  h+='Lubinski, D., & Benbow, C. P. (2006). Study of mathematically precocious youth after 35 years. <em>Perspectives on Psychological Science</em>, 1(4), 316-345.<br>';
  h+='Makel, M. C., Kell, H. J., Lubinski, D., Putallaz, M., & Benbow, C. P. (2016). When lightning strikes twice: Profoundly gifted, profoundly accomplished. <em>Psychological Science</em>, 27(7), 1004-1018.<br>';
  h+='Frederick, S. (2005). Cognitive reflection and decision making. <em>Journal of Economic Perspectives</em>, 19(4), 25-42.<br>';
  h+='Sriraman, B. (2005). Are giftedness and creativity synonymous in mathematics? <em>Journal of Secondary Gifted Education</em>, 17(1), 20-36.<br>';
  h+='Leikin, R. (2009). Exploring mathematical creativity using multiple solution tasks. In R. Leikin, A. Berman, & B. Koichu (Eds.), <em>Creativity in Mathematics and the Education of Gifted Students</em>. Sense Publishers.</p>';

  h+='</div></div></div>';
  el.innerHTML=h;

  document.getElementById('retryBtn').addEventListener('click',function(){location.reload();});
  document.getElementById('copyBtn').addEventListener('click',function(){
    var txt='STEM Cognitive Challenge\n========================\nRank '+rank+' — '+tot+'/100\nパターン推理: '+st.s1+'/'+P1+'問正解 ('+s1+'点)\n数理推論: '+st.s2+'/'+P2+'問正解 ('+s2+'点)\n全員同じ問題・同じ条件\nroppongivc.com/challenge\n';
    navigator.clipboard.writeText(txt).then(function(){var b=document.getElementById('copyBtn');b.textContent='コピーしました';setTimeout(function(){b.textContent='テキストでコピー';},2000);});
  });
}
})();
