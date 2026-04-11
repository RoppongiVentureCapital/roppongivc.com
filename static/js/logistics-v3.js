(function(){
var el,sc={s1:0,s2:0,s3:0,s4:0},W=700,H=500,cities=[],userRoute=[],aiRoute;
document.getElementById('startBtn').addEventListener('click',function(){
  document.getElementById('intro').style.display='none';
  el=document.getElementById('step');el.style.display='';step1();
});

function step1(){
  var h='<div class="two-col"><div class="two-col-left"><p class="eyebrow">STEP 1 / 5</p>';
  h+='<h2 class="col-heading" style="font-size:1.2rem">機会の発見</h2>';
  h+='<p style="font-family:var(--sans);font-size:16px;color:var(--black)">Opportunity</p></div>';
  h+='<div class="two-col-right"><div class="st-wrap">';
  h+='<div class="st-q">あなたは物流業界でスタートアップを検討中です。以下はある中堅配送会社の年間コスト構造です。</div>';
  h+='<div class="st-data"><strong>年間コスト構造（売上12億円）</strong><br>';
  h+='人件費：4.2億円（35%）<br>燃料費：2.4億円（20%）<br>車両維持費：1.2億円（10%）<br>';
  h+='<strong style="color:#dc2626">非効率なルーティングによる余剰走行コスト：2.9億円（24%）</strong><br>';
  h+='倉庫費：0.7億円（6%）<br>その他：0.6億円（5%）</div>';
  h+='<div class="st-q">最もインパクトが大きく、テクノロジーで解決可能な課題はどれですか？</div>';
  h+='<button class="st-opt" data-v="0">人件費の削減（自動運転の導入）</button>';
  h+='<button class="st-opt" data-v="1">非効率なルーティングの最適化</button>';
  h+='<button class="st-opt" data-v="2">燃料費の削減（EV化）</button>';
  h+='</div></div></div>';
  el.innerHTML=h;
  el.querySelectorAll('.st-opt').forEach(function(b){b.addEventListener('click',function(){
    var v=parseInt(this.getAttribute('data-v')),ok=v===1;
    if(ok)sc.s1=100;
    el.querySelectorAll('.st-opt').forEach(function(o){
      if(parseInt(o.getAttribute('data-v'))===1)o.classList.add('correct');
      else o.classList.add('wrong');
    });
    var fb='<div class="st-fb '+(ok?'ok':'ng')+'"><strong>'+(ok?'正解':'不正解')+'</strong><br>';
    fb+=ok?'ルーティング非効率は売上の24%を占め、ソフトウェアだけで改善可能。自動運転やEV化は巨額の設備投資が必要で、スタートアップには不向き。'
      :'正解は「ルーティングの最適化」。売上の24%を占め、ソフトウェアだけで改善可能。人件費削減（自動運転）やEV化は巨額の設備投資が必要。</div>';
    fb+='<div class="st-insight"><strong>起業の鉄則：</strong>スタートアップ失敗の42%は「市場需要の不在」（George Panagiotakopoulos, SkyDeck）。技術ではなく、課題の大きさから始める。</div>';
    fb+='<button class="apply-btn" id="toS2">次へ：課題の深掘り →</button>';
    this.parentNode.insertAdjacentHTML('beforeend',fb);
    document.getElementById('toS2').addEventListener('click',step2);
  });});
}

function step2(){
  var h='<div class="two-col"><div class="two-col-left"><p class="eyebrow">STEP 2 / 5</p>';
  h+='<h2 class="col-heading" style="font-size:1.2rem">課題の深掘り</h2>';
  h+='<p style="font-family:var(--sans);font-size:16px;color:var(--black)">Problem — 誰が最も困っているか</p></div>';
  h+='<div class="two-col-right"><div class="st-wrap">';
  h+='<div class="st-q">ルーティング非効率の課題を解決するサービスを作るとして、最初に狙うべき顧客（MVCS）は誰ですか？</div>';
  h+='<div class="st-data"><strong>顧客プロファイル</strong><br><br>';
  h+='<strong>A. 大手物流（ヤマト、佐川級）</strong><br>配送先：1日10万件以上。既に自社最適化システムあり。導入決裁に1年以上。<br><br>';
  h+='<strong>B. 中小配送会社（従業員20〜100名）</strong><br>配送先：1日200〜1000件。Excel or 紙で管理。ドライバーの経験と勘に依存。IT担当者なし。コスト削減に切実。<br><br>';
  h+='<strong>C. 個人EC事業者</strong><br>配送先：1日5〜20件。自分で配達。課題は感じているが支払い余力が小さい。</div>';
  h+='<div class="st-q">Pete Giordano（元Google）の教え：「TAMの大きさを語る前に、最小のセグメントでProduct-Problem Fitを証明しろ。」</div>';
  h+='<button class="st-opt" data-v="0">A. 大手物流 — 市場が大きいから</button>';
  h+='<button class="st-opt" data-v="1">B. 中小配送会社 — 課題が切実で、既存ソリューションがない</button>';
  h+='<button class="st-opt" data-v="2">C. 個人EC事業者 — 参入しやすいから</button>';
  h+='</div></div></div>';
  el.innerHTML=h;
  el.querySelectorAll('.st-opt').forEach(function(b){b.addEventListener('click',function(){
    var v=parseInt(this.getAttribute('data-v')),ok=v===1;
    if(ok)sc.s2=100;
    el.querySelectorAll('.st-opt').forEach(function(o){
      if(parseInt(o.getAttribute('data-v'))===1)o.classList.add('correct');else o.classList.add('wrong');
    });
    var fb='<div class="st-fb '+(ok?'ok':'ng')+'"><strong>'+(ok?'正解':'不正解')+'</strong><br>';
    fb+='中小配送会社は①課題が切実（コスト削減が死活問題）②既存ソリューションがない（Excel/紙管理）③導入決裁が速い。大手は既に自社システムがあり参入困難。個人ECは支払い余力が小さい。</div>';
    fb+='<div class="st-insight"><strong>MVCS（Minimum Viable Customer Segment）：</strong>最初に狙うべきは「課題が切実」「代替手段がない」「支払い意欲がある」セグメント。ここでProduct-Problem Fitを証明してから市場を広げる。</div>';
    fb+='<button class="apply-btn" id="toS3">次へ：ソリューション体験 →</button>';
    this.parentNode.insertAdjacentHTML('beforeend',fb);
    document.getElementById('toS3').addEventListener('click',step3);
  });});
}

function step3(){
  cities=[{x:W/2,y:H-40,label:'倉庫',isDepot:true}];
  for(var i=0;i<10;i++){var ok=false,x,y;
    while(!ok){x=40+Math.random()*(W-80);y=40+Math.random()*(H-120);ok=true;
      for(var j=0;j<cities.length;j++)if(Math.sqrt((x-cities[j].x)**2+(y-cities[j].y)**2)<40){ok=false;break;}}
    cities.push({x:x,y:y,label:String.fromCharCode(65+i),isDepot:false});}
  userRoute=[];aiRoute=null;
  var h='<div class="two-col"><div class="two-col-left"><p class="eyebrow">STEP 3 / 5</p>';
  h+='<h2 class="col-heading" style="font-size:1.2rem">ソリューション体験</h2>';
  h+='<p style="font-family:var(--sans);font-size:16px;color:var(--black)">Solution — 最短ルートを見つけろ</p>';
  h+='<p style="font-family:var(--sans);font-size:16px;color:var(--black);margin-top:1rem">配送先をクリックしてルートを繋げてください。全箇所を回ると倉庫に戻ります。</p>';
  h+='<p id="dist" style="font-family:var(--sans);font-size:20px;font-weight:600;margin-top:1rem">— km</p>';
  h+='</div><div class="two-col-right"><div class="st-wrap">';
  h+='<div style="text-align:center"><canvas id="map" width="700" height="500" style="border:1px solid var(--gray-200);max-width:100%;cursor:crosshair"></canvas></div>';
  h+='<div style="display:flex;gap:1rem;margin-top:1rem" id="s3btns">';
  h+='<button class="apply-btn" id="s3reset">リセット</button>';
  h+='<button class="apply-btn" id="s3done" style="display:none">完了する</button></div>';
  h+='<div id="s3result"></div>';
  h+='</div></div></div>';
  el.innerHTML=h;
  var cv=document.getElementById('map'),ctx=cv.getContext('2d');
  function d(a,b){return Math.sqrt((a.x-b.x)**2+(a.y-b.y)**2);}
  function rd(r){var t=0;for(var i=0;i<r.length-1;i++)t+=d(cities[r[i]],cities[r[i+1]]);return t;}
  function draw(){
    ctx.clearRect(0,0,W,H);
    ctx.strokeStyle='#f0f0f0';ctx.lineWidth=1;
    for(var x=0;x<W;x+=50){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
    for(var y=0;y<H;y+=50){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
    if(aiRoute){ctx.strokeStyle='#2563eb';ctx.lineWidth=2;ctx.setLineDash([6,4]);ctx.beginPath();
      for(var i=0;i<aiRoute.length;i++){var c=cities[aiRoute[i]];if(i===0)ctx.moveTo(c.x,c.y);else ctx.lineTo(c.x,c.y);}ctx.stroke();ctx.setLineDash([]);}
    if(userRoute.length>1){ctx.strokeStyle='#000';ctx.lineWidth=2.5;ctx.beginPath();
      for(var i=0;i<userRoute.length;i++){var c=cities[userRoute[i]];if(i===0)ctx.moveTo(c.x,c.y);else ctx.lineTo(c.x,c.y);}ctx.stroke();}
    for(var i=0;i<cities.length;i++){var c=cities[i],inR=userRoute.indexOf(i)>=0;
      ctx.beginPath();ctx.arc(c.x,c.y,12,0,Math.PI*2);
      ctx.fillStyle=c.isDepot?'#059669':inR?'#000':'#fff';ctx.fill();
      ctx.strokeStyle=c.isDepot?'#059669':'#000';ctx.lineWidth=2;ctx.stroke();
      ctx.fillStyle=c.isDepot||inR?'#fff':'#000';ctx.font='bold 11px Inter,sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText(c.isDepot?'★':c.label,c.x,c.y);}
  }
  draw();
  cv.addEventListener('click',function(e){
    var rect=cv.getBoundingClientRect(),sx=W/rect.width,sy=H/rect.height;
    var mx=(e.clientX-rect.left)*sx,my=(e.clientY-rect.top)*sy;
    var best=-1,bd=999;
    for(var i=0;i<cities.length;i++){var dd=d({x:mx,y:my},cities[i]);if(dd<30&&dd<bd){bd=dd;best=i;}}
    if(best<0)return;
    if(!userRoute.length){userRoute.push(0);if(best!==0)userRoute.push(best);}
    else if(best===0){if(userRoute.length>1&&userRoute[userRoute.length-1]!==0)userRoute.push(0);}
    else if(userRoute.indexOf(best)<0){if(userRoute[userRoute.length-1]===0&&userRoute.length>1)userRoute.splice(userRoute.length-1,0,best);else userRoute.push(best);}
    var allV=true;for(var i=1;i<cities.length;i++)if(userRoute.indexOf(i)<0){allV=false;break;}
    if(allV&&userRoute[userRoute.length-1]!==0)userRoute.push(0);
    if(allV)document.getElementById('s3done').style.display='';
    document.getElementById('dist').textContent=userRoute.length>1?Math.round(rd(userRoute))+' km':'— km';
    draw();
  });
  document.getElementById('s3reset').addEventListener('click',function(){userRoute=[];aiRoute=null;document.getElementById('s3done').style.display='none';document.getElementById('dist').textContent='— km';document.getElementById('s3result').innerHTML='';draw();});
  document.getElementById('s3done').addEventListener('click',function(){
    // AI solve
    var vis={0:true},route=[0],cur=0;
    for(var s=0;s<cities.length-1;s++){var b=-1,bd=Infinity;for(var i=1;i<cities.length;i++){if(vis[i])continue;var dd=d(cities[cur],cities[i]);if(dd<bd){bd=dd;b=i;}}if(b<0)break;vis[b]=true;route.push(b);cur=b;}route.push(0);
    var imp=true;while(imp){imp=false;for(var i=1;i<route.length-2;i++)for(var j=i+1;j<route.length-1;j++){
      var d1=d(cities[route[i-1]],cities[route[i]])+d(cities[route[j]],cities[route[j+1]]);
      var d2=d(cities[route[i-1]],cities[route[j]])+d(cities[route[i]],cities[route[j+1]]);
      if(d2<d1-0.01){var seg=route.slice(i,j+1);seg.reverse();for(var k=0;k<seg.length;k++)route[i+k]=seg[k];imp=true;}}}
    aiRoute=route;draw();
    var ud=Math.round(rd(userRoute)),ad=Math.round(rd(aiRoute)),pct=Math.round((ud/ad-1)*100);
    sc.s3=Math.max(0,100-pct*3);
    var r=document.getElementById('s3result');
    r.innerHTML='<div class="st-fb ok"><strong>あなた：'+ud+' km ｜ AI：'+ad+' km（差：'+pct+'%）</strong></div>'
      +'<div class="st-insight"><strong>ソリューションは手段であって目的ではない。</strong>ルート最適化は「技術」。これだけでは事業にならない。次のステップで「誰に」「いくらで」「どう届けるか」を考えます。</div>'
      +'<button class="apply-btn" id="toS4">次へ：事業化 →</button>';
    document.getElementById('toS4').addEventListener('click',step4);
  });
}

function step4(){
  var h='<div class="two-col"><div class="two-col-left"><p class="eyebrow">STEP 4 / 5</p>';
  h+='<h2 class="col-heading" style="font-size:1.2rem">事業化</h2>';
  h+='<p style="font-family:var(--sans);font-size:16px;color:var(--black)">Business — 事業として成立するか</p></div>';
  h+='<div class="two-col-right"><div class="st-wrap">';
  h+='<div class="st-q">このルート最適化サービスを中小配送会社に月額サブスクリプションで提供します。</div>';
  h+='<div class="st-data"><strong>市場データ</strong><br>日本の中小配送会社：約3,000社<br>平均車両数：15台/社<br>ルーティング非効率による余剰コスト：1台あたり月20万円<br>最適化で削減可能な割合：約30%（月6万円/台の価値）</div>';
  h+='<div class="st-q"><strong>Q1. 月額料金をいくらに設定しますか？</strong>（1台あたり）<br><span style="font-size:16px;color:var(--black)">顧客が得る価値（月6万円/台の削減）の何割を料金にするか</span></div>';
  h+='<div class="st-slider-wrap"><input type="range" id="price" min="1000" max="30000" step="1000" value="10000"><div class="st-slider-val" id="priceVal">¥10,000 / 台 / 月</div></div>';
  h+='<div class="st-q"><strong>Q2. このサービスは「ビタミン」か「鎮痛剤」か？</strong></div>';
  h+='<button class="st-opt" data-v="0">ビタミン（あると便利だが、なくても困らない）</button>';
  h+='<button class="st-opt" data-v="1">鎮痛剤（ないと困る。切実な課題を解決する）</button>';
  h+='</div></div></div>';
  el.innerHTML=h;
  var slider=document.getElementById('price');
  slider.addEventListener('input',function(){document.getElementById('priceVal').textContent='¥'+parseInt(this.value).toLocaleString()+' / 台 / 月';});
  el.querySelectorAll('.st-opt').forEach(function(b){b.addEventListener('click',function(){
    var v=parseInt(this.getAttribute('data-v')),price=parseInt(slider.value);
    var ok=v===1;
    el.querySelectorAll('.st-opt').forEach(function(o){if(parseInt(o.getAttribute('data-v'))===1)o.classList.add('correct');else o.classList.add('wrong');});
    // Score pricing: sweet spot is 5000-15000 (8-25% of value)
    var pScore=(price>=5000&&price<=15000)?100:(price>=3000&&price<=20000)?70:40;
    sc.s4=Math.round((pScore+(ok?100:30))/2);
    var arr=Math.round(price*15*3000*0.05/100000000*10)/10;// 5% penetration ARR
    var fb='<div class="st-fb '+(ok?'ok':'ng')+'"><strong>'+(ok?'正解：鎮痛剤':'鎮痛剤が正解')+'</strong><br>';
    fb+='月6万円のコスト削減は配送会社にとって死活問題。「あると便利」ではなく「ないと競合に負ける」レベル。</div>';
    fb+='<div class="st-data"><strong>あなたの事業計画</strong><br>';
    fb+='月額料金：¥'+price.toLocaleString()+'/台<br>';
    fb+='顧客が得る価値に対する料金比率：'+Math.round(price/60000*100)+'%<br>';
    fb+='市場浸透率5%での年間売上（ARR）：約'+arr+'億円<br>';
    fb+='（3,000社 × 15台 × ¥'+price.toLocaleString()+' × 12ヶ月 × 5%）</div>';
    if(price<5000)fb+='<div class="st-insight">料金が安すぎます。顧客が得る価値の10%未満。安すぎると「価値がない」と思われるリスクがあります。</div>';
    else if(price>20000)fb+='<div class="st-insight">料金が高めです。顧客が得る価値の33%以上。導入ハードルが上がります。SaaS の一般的な目安は顧客価値の10〜25%。</div>';
    else fb+='<div class="st-insight">良い価格設定です。顧客が得る価値の10〜25%が SaaS の一般的な目安。</div>';
    fb+='<button class="apply-btn" id="toS5">次へ：ピッチ →</button>';
    this.parentNode.insertAdjacentHTML('beforeend',fb);
    document.getElementById('toS5').addEventListener('click',step5);
  });});
}

function step5(){
  var h='<div class="two-col"><div class="two-col-left"><p class="eyebrow">STEP 5 / 5</p>';
  h+='<h2 class="col-heading" style="font-size:1.2rem">ピッチ</h2>';
  h+='<p style="font-family:var(--sans);font-size:16px;color:var(--black)">Pitch — 30秒で説明する</p></div>';
  h+='<div class="two-col-right"><div class="st-wrap">';
  h+='<div class="st-q">ここまでの分析を30秒のピッチにまとめてください。空欄を埋めてください。</div>';
  h+='<div class="st-data" style="line-height:2.5">';
  h+='<textarea class="pitch-field" rows="1" id="p1" placeholder="例：中小配送会社">　</textarea>は<br>';
  h+='<textarea class="pitch-field" rows="1" id="p2" placeholder="例：非効率なルーティングによる余剰コスト">　</textarea>に困っています。<br><br>';
  h+='現在は<textarea class="pitch-field" rows="1" id="p3" placeholder="例：Excelとドライバーの経験">　</textarea>で対処していますが、<br>';
  h+='<textarea class="pitch-field" rows="1" id="p4" placeholder="例：最適化の余地が大きく年間数千万円の損失">　</textarea>。<br><br>';
  h+='私たちの<textarea class="pitch-field" rows="1" id="p5" placeholder="例：AIルート最適化SaaS">　</textarea>は、<br>';
  h+='<textarea class="pitch-field" rows="1" id="p6" placeholder="例：配送コストを30%削減">　</textarea>します。<br><br>';
  h+='市場規模は<textarea class="pitch-field" rows="1" id="p7" placeholder="例：日本の中小配送会社3,000社、年間数十億円">　</textarea>です。</div>';
  h+='<button class="apply-btn" id="pitchDone">ピッチを完成させる →</button>';
  h+='</div></div></div>';
  el.innerHTML=h;
  document.getElementById('pitchDone').addEventListener('click',function(){
    var fields=['p1','p2','p3','p4','p5','p6','p7'];
    var filled=0;fields.forEach(function(f){if(document.getElementById(f).value.trim().length>2)filled++;});
    sc.s5=Math.round(filled/7*100);
    showResult();
  });
}

function showResult(){
  var avg=Math.round((sc.s1+sc.s2+sc.s3+sc.s4+(sc.s5||0))/5);
  var rank=avg>=90?'S':avg>=70?'A':avg>=50?'B':avg>=30?'C':'D';
  var labels=['課題発見力','顧客理解力','ソリューション力','事業構想力','ピッチ力'];
  var vals=[sc.s1,sc.s2,sc.s3,sc.s4,sc.s5||0];

  var h='<div class="two-col" style="border-bottom:1px solid var(--gray-200)"><div class="two-col-left"><p class="eyebrow">RESULT</p>';
  h+='<h2 class="col-heading" style="font-size:1.2rem">起業家シミュレーション</h2>';
  h+='<p style="font-family:var(--sans);font-size:16px;color:var(--black);margin-top:0.5rem">Roppongi Venture Capital</p></div>';
  h+='<div class="two-col-right">';
  h+='<div class="rs-card"><div class="rs-card-head">ENTREPRENEUR SCORE</div>';
  h+='<div class="rs-card-type">Rank '+rank+' — '+avg+' / 100</div>';
  h+='<div style="margin:1.5rem 0">';
  for(var i=0;i<5;i++){
    h+='<div class="sc-row"><span class="sc-label">'+labels[i]+'</span>';
    h+='<div class="sc-track"><div class="sc-fill" style="width:'+vals[i]+'%"></div></div>';
    h+='<span class="sc-val">'+vals[i]+'</span></div>';
  }
  h+='</div>';
  h+='</div>';

  h+='<p style="font-family:var(--sans);font-size:16px;color:var(--black);padding:0.75rem;background:#fffbeb;border:1px solid #fde68a;margin-bottom:1.5rem"><strong>注意：</strong>本シミュレーションは起業家の思考プロセスを体験するための教育コンテンツです。スコアは起業家としての適性を測定するものではありません。</p>';

  h+='<p style="font-family:var(--sans);font-size:16px;color:var(--black);margin-bottom:0.5rem">結果をSNSでシェアしたり、後で見返したい場合はこのカードをスクリーンショットで保存できます。</p>';
  h+='<p style="font-family:var(--sans);font-size:16px;color:var(--black);margin-bottom:1.5rem">テキスト形式で保存したい場合は「テキストでコピー」からクリップボードにコピーして、メモアプリ等に貼り付けてください。</p>';

  h+='<div style="display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:2rem">';
  h+='<button class="rs-copy" id="copyBtn">テキストでコピー</button>';
  h+='<button class="apply-btn" id="retryBtn">もう一度挑戦する</button></div>';
  h+='</div></div>';

  // ===== 方法論 =====
  h+='<div class="two-col" style="border-bottom:1px solid var(--gray-200)"><div class="two-col-left">';
  h+='<h2 class="col-heading" style="font-size:1.2rem">設計根拠</h2>';
  h+='<p style="font-family:var(--sans);font-size:16px;color:var(--black);margin-top:0.5rem">理論的背景と5ステップの設計思想</p></div>';
  h+='<div class="two-col-right"><div class="lg-body">';

  h+='<h4>1. 理論的基盤：リーンスタートアップ + デザイン思考</h4>';
  h+='<p>本シミュレーションは、Eric Ries の <strong>リーンスタートアップ</strong>（2011）と Stanford d.school の <strong>デザイン思考</strong>プロセスを組み合わせた5ステップで構成されています。</p>';
  h+='<p>CB Insights の調査（2021）によると、スタートアップ失敗の最大原因は「市場需要の不在」（42%）です。本シミュレーションでは、技術やプロダクトではなく<strong>課題の発見と検証</strong>から始める思考プロセスを体験します。</p>';

  h+='<h4>2. 5ステップの設計</h4>';
  h+='<table><tr><th>ステップ</th><th>対応する起業プロセス</th><th>測定する能力</th></tr>';
  h+='<tr><td>1. 機会の発見</td><td>市場分析・課題特定</td><td>データから本質的な課題を見抜く力</td></tr>';
  h+='<tr><td>2. 課題の深掘り</td><td>顧客セグメンテーション</td><td>MVCS（最小顧客セグメント）を特定する力</td></tr>';
  h+='<tr><td>3. ソリューション体験</td><td>プロトタイピング</td><td>制約下での最適化・問題解決力</td></tr>';
  h+='<tr><td>4. 事業化</td><td>ビジネスモデル設計</td><td>価格設定・市場規模の推定力</td></tr>';
  h+='<tr><td>5. ピッチ</td><td>投資家・顧客への説明</td><td>構造化された説明力</td></tr></table>';

  h+='<h4>3. 物流業界を題材にした理由</h4>';
  h+='<p>物流は①課題が定量化しやすい（コスト構造が明確）②テクノロジーによる改善余地が大きい③日常生活との接点があり直感的に理解しやすい、という特徴があり、起業プロセスの教材として適しています。</p>';

  h+='<h4>4. スコアリング</h4>';
  h+='<table><tr><th>ステップ</th><th>配点基準</th></tr>';
  h+='<tr><td>課題発見力</td><td>最もインパクトが大きくテクノロジーで解決可能な課題を選択できたか</td></tr>';
  h+='<tr><td>顧客理解力</td><td>課題が切実で代替手段がないセグメントを選択できたか</td></tr>';
  h+='<tr><td>ソリューション力</td><td>AI最適解との距離（ルート効率）</td></tr>';
  h+='<tr><td>事業構想力</td><td>価格設定の妥当性（顧客価値の10〜25%）+ ビタミン/鎮痛剤の判断</td></tr>';
  h+='<tr><td>ピッチ力</td><td>7つの構成要素の記入率</td></tr></table>';

  h+='<h4>5. 参考文献</h4>';
  h+='<p style="font-size:16px;color:var(--black)">';
  h+='Ries, E. (2011). <em>The Lean Startup</em>. Crown Business.<br>';
  h+='CB Insights (2021). The Top 12 Reasons Startups Fail.<br>';
  h+='Blank, S. (2013). <em>The Four Steps to the Epiphany</em>. K&S Ranch.<br>';
  h+='Osterwalder, A., & Pigneur, Y. (2010). <em>Business Model Generation</em>. John Wiley & Sons.</p>';

  h+='</div></div></div>';

  // ===== 次のステップ =====
  h+='<div class="two-col" style="border-bottom:none"><div class="two-col-left"><h2 class="col-heading" style="font-size:1.2rem">次のステップ</h2></div>';
  h+='<div class="two-col-right"><div class="col-body">';
  h+='<p>このシミュレーションで体験した5ステップを、実際のチームで、実際の課題で、実際のプロダクトを作りながら体験するのがEdgeプログラムです。</p>';
  h+='<a href="/program/" style="display:inline-block;margin-top:0.75rem;font-family:var(--sans);font-size:16px;font-weight:500;color:var(--black);text-decoration:underline;text-underline-offset:3px">Edgeプログラムを見る →</a>';
  h+='<p style="margin-top:2rem"><strong>他のチャレンジ</strong></p>';
  h+='<p><a href="/diagnosis/" style="font-family:var(--sans);font-weight:500;color:var(--black);text-decoration:underline;text-underline-offset:3px">思考スタイル診断 →</a>　<a href="/challenge/" style="font-family:var(--sans);font-weight:500;color:var(--black);text-decoration:underline;text-underline-offset:3px">認知能力チャレンジ →</a></p>';
  h+='</div></div></div>';

  el.innerHTML=h;

  document.getElementById('retryBtn').addEventListener('click',function(){location.reload();});
  document.getElementById('copyBtn').addEventListener('click',function(){
    var txt='起業家シミュレーション 結果\n================================\nRank '+rank+' — '+avg+'/100\n\nスコア分布：\n';
    for(var i=0;i<5;i++){var b='';for(var j=0;j<Math.round(vals[i]/5);j++)b+='#';txt+='  '+labels[i]+' '+vals[i]+' '+b+'\n';}
    txt+='\nroppongivc.com/logistics\n';
    navigator.clipboard.writeText(txt).then(function(){var b=document.getElementById('copyBtn');b.textContent='コピーしました';setTimeout(function(){b.textContent='テキストでコピー';},2000);});
  });
}
})();
