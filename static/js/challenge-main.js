// STEM Cognitive Challenge - Pattern Reasoning Only
(function(){
var TOTAL=10;
var st={qi:0,score:0,total:0,times:[],ts:0,tid:null,answered:false};

document.getElementById('startBtn').addEventListener('click',function(){
  document.getElementById('intro').style.display='none';
  document.getElementById('game').style.display='';
  st.qi=0;next();
});

function curLevel(){
  return st.qi+1;
}

function next(){
  st.answered=false;
  document.getElementById('pbar').style.width=((st.qi/TOTAL)*100)+'%';
  document.getElementById('partLabel').textContent='PATTERN REASONING';
  document.getElementById('qnum').textContent='Q'+(st.qi+1)+' / '+TOTAL;
  document.getElementById('levelInfo').textContent='';
  document.getElementById('feedback').style.display='none';
  document.getElementById('feedback').innerHTML='';
  renderPattern();
  startTimer();
}

function startTimer(){
  var lv=curLevel();
  var lim=(lv<=2)?30:(lv<=5)?45:60;
  st.ts=Date.now();st.tl=lim;updTimer();
  if(st.tid)clearInterval(st.tid);st.tid=setInterval(updTimer,200);
}
function updTimer(){
  var r=Math.max(0,st.tl-(Date.now()-st.ts)/1000);
  document.getElementById('timer').textContent=Math.ceil(r)+'s';
  if(r<=0){clearInterval(st.tid);answer(-1);}
}

var curP=null;
function renderPattern(){
  var qa=document.getElementById('questionArea'),ch=document.getElementById('choices');
  var p=PatternEngine.generate(curLevel());curP=p;
  var hint='';
  if(st.qi===0)hint='<p style="font-family:var(--sans);font-size:13px;color:#059669;margin-bottom:1rem;padding:0.75rem;background:#f0fdf4;border:1px solid #bbf7d0">ヒント：各行（横）と各列（縦）のパターンに注目してください。形・色・サイズがどう変化しているかを見つけましょう。</p>';
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

function answer(correct){
  if(correct===-1)correct=0;st.answered=true;
  var elapsed=(Date.now()-st.ts)/1000;
  st.total++;if(correct)st.score++;st.times.push(elapsed);
  var fb=document.getElementById('feedback');
  var h='<div style="padding:1rem;border:1px solid '+(correct?'#059669':'#dc2626')+';background:'+(correct?'#f0fdf4':'#fef2f2')+';margin-bottom:1rem">';
  h+='<strong style="color:'+(correct?'#059669':'#dc2626')+'">'+(correct?'正解':'不正解')+'</strong>';
  if(curP)h+='<p style="margin-top:0.5rem;font-size:16px;color:var(--black)"><strong>ルール：</strong>'+curP.explanation+'</p>';
  h+='</div><button class="apply-btn" id="nextQBtn">次の問題へ →</button>';
  fb.innerHTML=h;fb.style.display='';
  document.getElementById('nextQBtn').addEventListener('click',function(){
    st.qi++;
    if(st.qi>=TOTAL)showResult();
    else next();
  });
}

function showResult(){
  document.getElementById('game').style.display='none';
  var el=document.getElementById('result');el.style.display='';
  var at=0;for(var i=0;i<st.times.length;i++)at+=st.times[i];at=st.times.length?at/st.times.length:0;
  var s=Math.round((st.score/TOTAL)*100);
  var rank=s>=90?'S':s>=70?'A':s>=50?'B':s>=30?'C':'D';

  var h='<div class="two-col" style="border-bottom:1px solid var(--gray-200)"><div class="two-col-left"><p class="eyebrow">RESULT</p>';
  h+='<h2 class="col-heading" style="font-size:1.2rem">認知能力チャレンジ</h2>';
  h+='<p style="font-family:var(--sans);font-size:16px;color:var(--black);margin-top:0.5rem">Roppongi Venture Capital</p></div>';
  h+='<div class="two-col-right">';
  h+='<div class="rs-card"><div class="rs-card-head">COGNITIVE SCORE</div>';
  h+='<div class="rs-card-type">Rank '+rank+' — '+s+' / 100</div>';
  h+='<div style="margin:1.5rem 0">';
  h+='<div class="sc-row"><span class="sc-label">パターン推理</span><div class="sc-track"><div class="sc-fill" style="width:'+s+'%"></div></div><span class="sc-val">'+st.score+'/'+TOTAL+'</span></div>';
  h+='</div>';
  h+='<div style="font-family:var(--sans);font-size:16px;color:var(--black);line-height:1.8">';
  h+='<p>正答数：'+st.score+'/'+TOTAL+'問、平均回答時間 '+at.toFixed(1)+'秒</p></div>';
  h+='</div>';

  h+='<p style="font-family:var(--sans);font-size:16px;color:var(--black);padding:0.75rem;background:#fffbeb;border:1px solid #fde68a;margin-bottom:1.5rem"><strong>注意：</strong>本チャレンジは学術的に確立されたタスク形式を使用していますが、この具体的な実装は心理測定学的な検証（信頼性・妥当性の統計的確認）を経ていないプロトタイプです。スコアは参考値としてお楽しみください。</p>';

  h+='<p style="font-family:var(--sans);font-size:16px;color:var(--black);margin-bottom:0.5rem">結果をSNSでシェアしたり、後で見返したい場合はこのカードをスクリーンショットで保存できます。</p>';
  h+='<p style="font-family:var(--sans);font-size:16px;color:var(--black);margin-bottom:1.5rem">テキスト形式で保存したい場合は「テキストでコピー」からクリップボードにコピーして、メモアプリ等に貼り付けてください。</p>';

  h+='<div style="display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:2rem">';
  h+='<button class="rs-copy" id="copyBtn">テキストでコピー</button>';
  h+='<button class="apply-btn" id="retryBtn">もう一度挑戦する</button></div>';
  h+='</div></div>';

  // ===== METHODOLOGY =====
  h+='<div class="two-col" style="border-bottom:1px solid var(--gray-200)"><div class="two-col-left">';
  h+='<h2 class="col-heading" style="font-size:1.2rem">測定手法</h2>';
  h+='<p style="font-family:var(--sans);font-size:16px;color:var(--black);margin-top:0.5rem">理論的背景と限界</p></div>';
  h+='<div class="two-col-right"><div class="lg-body">';

  h+='<h4>理論的基盤</h4>';
  h+='<p>本チャレンジは <strong>Raven\'s Progressive Matrices</strong>（Raven, 1938）の形式に基づいています。3×3マトリクスの欠けたピースを推理するタスクは、流動性推理（Gf）を測定する世界標準的な手法として、CHC理論（Carroll, 1993; McGrew, 2009）の枠組みで広く使用されています。</p>';
  h+='<p>流動性推理は、新奇な問題を解く力であり、学業成績の最強の認知的予測因子とされています（Deary et al., 2007）。</p>';

  h+='<h4>問題設計</h4>';
  h+='<p>全10問の固定問題で構成されています。図形の属性（形・色・サイズ・個数）に対して異なる種類のルールを適用し、後半ほど同時に追跡すべきルールの数が増える設計です。</p>';
  h+='<table><tr><th>難易度</th><th>ルール構成</th></tr>';
  h+='<tr><td>序盤（Q1-3）</td><td>1〜2属性の分配、サイズの進行</td></tr>';
  h+='<tr><td>中盤（Q4-6）</td><td>図形の増減パターン、列方向の規則性</td></tr>';
  h+='<tr><td>終盤（Q7-10）</td><td>色パターンの複合、3属性同時分配、集合の共通部分</td></tr></table>';

  h+='<h4>限界</h4>';
  h+='<p>使用しているタスク形式（Raven\'s型マトリクス）は数十年の学術的検証を経ていますが、この具体的な実装は心理測定学的な検証を経ていません。スコアは自己理解のきっかけとしてご活用ください。</p>';

  h+='<h4>参考文献</h4>';
  h+='<p style="font-size:16px;color:var(--black)">';
  h+='Raven, J. C. (1938). <em>Progressive Matrices</em>. H.K. Lewis.<br>';
  h+='Carroll, J. B. (1993). <em>Human Cognitive Abilities</em>. Cambridge University Press.<br>';
  h+='McGrew, K. S. (2009). CHC theory and the human cognitive abilities project. <em>Intelligence</em>, 37(1), 1-10.<br>';
  h+='Deary, I. J., et al. (2007). Intelligence and educational achievement. <em>Intelligence</em>, 35(1), 13-21.</p>';

  h+='</div></div></div>';

  // ===== 次のステップ =====
  h+='<div class="two-col" style="border-bottom:none"><div class="two-col-left"><h2 class="col-heading" style="font-size:1.2rem">次のステップ</h2></div>';
  h+='<div class="two-col-right"><div class="col-body">';
  h+='<p>あなたの認知能力を活かせる場があります。Edgeは、突出した能力を持つ高校生・大学生が、個人またはチームで課題を見つけ、形にするところまでを体験する実践プログラムです。</p>';
  h+='<a href="/program/" style="display:inline-block;margin-top:0.75rem;font-family:var(--sans);font-size:16px;font-weight:500;color:var(--black);text-decoration:underline;text-underline-offset:3px">Edgeプログラムを見る →</a>';
  h+='<p style="margin-top:2rem"><strong>他のチャレンジ</strong></p>';
  h+='<p><a href="/diagnosis/" style="font-family:var(--sans);font-weight:500;color:var(--black);text-decoration:underline;text-underline-offset:3px">思考スタイル診断 →</a></p>';
  h+='</div></div></div>';

  el.innerHTML=h;

  document.getElementById('retryBtn').addEventListener('click',function(){location.reload();});
  document.getElementById('copyBtn').addEventListener('click',function(){
    var txt='認知能力チャレンジ 結果\n========================\nRank '+rank+' — '+s+'/100\nパターン推理: '+st.score+'/'+TOTAL+'問正解\n平均回答時間: '+at.toFixed(1)+'秒\nroppongivc.com/challenge\n';
    navigator.clipboard.writeText(txt).then(function(){var b=document.getElementById('copyBtn');b.textContent='コピーしました';setTimeout(function(){b.textContent='テキストでコピー';},2000);});
  });
}
})();
