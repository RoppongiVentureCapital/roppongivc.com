const C={

ver:'ch_common.js 第8版（2026-08-21）',


/* ── ①：RLVR で符号が反転する／盤面から消える／倍率が乗り続ける ───────────── */
/* ★card は data のカード定義。★st.rlvr は第4章の選択 */
thinkOf(card,st){
 if(!card)return 0;
 return (st&&st.rlvr&&card.thinkRlvr!=null)?card.thinkRlvr:(card.think||0);
},
hiddenBy(card,st){return !!(card&&card.hideIfRlvr&&st&&st.rlvr)},
opMul(D,st){const s=D.set;return (st&&st.rlvr&&s.mulRlvr)?s.mulRlvr:1},


/* ── ③：人員は通期の枠 ───────────────────────────────────────────────── */
hireMax(D,run){return D.set.staffCap-run.staff},
staffFree(run){return run.staff-run.assigned},
payroll(D,run){return run.staff*D.set.staffPay},

/* ── ④：安全と門（門は【シェアの上限】である。★年を失う形ではない）──────── */
safeOf(D,obey,rlvr){const s=D.set;
 return Math.max(0,Math.min(100,s.safeBase-(obey-s.obeyBase)-10*(rlvr?1:0)))},
capOf(D,safe,risk){return D.set.cap(safe,!!risk)},

/* ── ⑤：多数決の下限 ─────────────────────────────────────────────────── */
voteOk(D,width){const m=D.set.majMin;return m==null?null:width>=m},

/* ── ⑦：W_think（可動域）──────────────────────────────────────────────
   ★parts が無い章（第2章）では 0 を返す。★data 側は st.wThink>0 のときだけ使う作りである */
wThink(D){
 const p=D.set.wThinkParts;
 if(!p)return 0;
 const top=Math.min(p.clip,p.base20+p.rlvr+p.maj+p.cot+p.code);
 return Math.max(1,top-p.floor);            // ★50+30+4+10+10=104 → 100 − 20 ＝ 80
},

/* ── ⑧：残金と、破産・救済 ───────────────────────────────────────────── */
/* ★data の settle が返す left は「予算 − 累計支出 − その年の支出」である。
   ★救済（1回だけ）は土台が持つので、ここで足す */
leftOf(run,R){return R.left+(run.bonus||0)},

loan(D,run){return run.rescued?D.set.rescue:0},
score(D,run){
 const cum=run.cum||0, loan=this.loan(D,run);
 return {cum, loan, total:cum-loan, rescued:!!run.rescued};
},

/* ══════════════════════════════════════════════════════════════════════════
   §B. ★章をまたぐ状態（⑥）── 持ち回りの実体
   ──────────────────────────────────────────────────────────────────────────
   ★ch1.html は【他の役の持ち物】なので触っていない。★だから第1章からの引き渡しは
     まだ繋がっていない。★繋ぐときは ch1.html の「第2章へ」で次の2行を呼ぶ：
        C.closeYear(D,R,run);  C.save(run);  location.href='ch2.html';
   ★それまでは ch2.html が C.carry() の【仮定値】で開く（→ ch2.html の FALLBACK）
   ══════════════════════════════════════════════════════════════════════════ */
RUN_KEY:'genron.run',

RUN0:{
 year:1, from:1,
 pick:null,                 // 第1章で選んだ作り方（'big'／'data'／'lite'）
 tokensB:0, paramsOku:0,    // 第1章で決まった量（→第2章の配合の分母）
 think:0, obey:0, cal:0, safe:0, width:0,   // ★5本のバー
 staff:0, assigned:0,       // ★人員（通期の枠。③）
 spent:0, cum:0, bonus:0, rescued:false,    // ★残金・累計利益・救済（⑧）
 share:0, price:null, ece:null,             // ★シェア・売値・ずれ（第3章で1回だけ決まる）
 code:false, mix:null,      // 第2章の配合
 pref:null, basis:null,     // ★第3章の好み訓練と渡す基準（★2026-08-20 に足した）
 capacity:0,                // ★その年に買った容量（★設備は繰り越さない。→⑥）
 rlvr:false, risk:false, verifier:0,        // 第4章
 gold:false,                // ★第4章の「人の模範解答を先に入れる」（★2026-08-21 に足した）
 mul:1,                     // ★設定9 の倍率（②。章の境界で確定）
 log:[]
},

/* ★saved を渡すと、それを実績として使う（★渡さなければ localStorage から読む）。
   ★呼ぶ側が「この保存は自分の章の入口として使えない」と判断したときに null を渡せる形である */
carry(fallback,saved){
 const r=Object.assign({},this.RUN0,fallback||{});
 const j=(saved===undefined)?this.load():saved;
 if(j)Object.assign(r,j);
 /* ★URL で上書きできるようにしてある（★第1章からの引き渡しが繋がるまでの確認用）。
    ★file:// でも location.search は読める。★fetch は使っていない */
 try{
  const q=new URLSearchParams(location.search);
  q.forEach((v,k)=>{
   if(!(k in r))return;
   r[k]= v==='true'?true : v==='false'?false : (v!==''&&!isNaN(+v)?+v:v);
  });
 }catch(e){}
 return r;
},
/* ★保存は localStorage である（★タブを閉じても残る。★sessionStorage から替えた 2026-08-19）
   ★ログイン不要・サーバ不要・追加費用0。★保存するのは既存の run（5本のバー・残金・人員・
     選んだカード・章）だけで、★項目を増やしていない
   ★キーは章をまたいで1本（RUN_KEY）である
   ★★ブラウザが localStorage を拒む場合（file:// の扱いはブラウザで違う）は例外を飲んで
     ★保存しない形に落ちる。★そのときは「続きから」が効かず、各章が仮定値で開く
   ★★ch1.html にはもう1つ sessionStorage がある（キー `ch1`。★資料へ行って戻る間の一時退避）。
     ★あれは【画面遷移中だけ】必要なもので、章をまたぐ保存ではない。
     ★ch1.html は他の役の持ち物なので触っていない（→ 申し送り） */
save(run){try{localStorage.setItem(this.RUN_KEY,JSON.stringify(run))}catch(e){}},
load(){try{const j=localStorage.getItem(this.RUN_KEY);return j?JSON.parse(j):null}catch(e){return null}},
drop(){try{localStorage.removeItem(this.RUN_KEY)}catch(e){}},

HIST_KEY:'genron.hist',
/* ★積む口。★total（C.score(D,run).total）を受け取り、日時を添えて末尾に積む。
   ★戻り値は【いま積んだ回の番号】（★呼ぶ側が「← 今回」の印を付けるのに使う）。
   ★localStorage が使えない環境では積まず -1 を返す（★save と同じく例外を飲む）。 */
pushScore(total){
 try{
  const a=this.history();
  a.push({total:total, at:new Date().toISOString()});
  localStorage.setItem(this.HIST_KEY,JSON.stringify(a));
  return a.length-1;   // ★積んだ要素の番号（0始まり）
 }catch(e){return -1;}
},
/* ★並べて返す口。★積んだ順の配列をそのまま返す（★並べ替えは呼ぶ側が high 順にする）。
   ★各要素は {total, at}。★壊れた保存や未保存のときは空配列を返す。 */
history(){
 try{
  const j=localStorage.getItem(this.HIST_KEY);
  const a=j?JSON.parse(j):[];
  return Array.isArray(a)?a:[];
 }catch(e){return [];}
},

/* その章の settle に渡す st を、run から組む（⑥）
   ★★`prevShare` と `capacity` は ch3〜5.data.js が読む名前である（★2026-08-20 に足した）。
     ★`share` は「いまのシェア」、★`prevShare` は「前年のシェア」で、★決算の入口では同じ値である
     （★closeYear がその年の share を焼くので、★次の年の入口では前年の値になっている） */
stFor(D,run,extra){
 return Object.assign({
  tokensB:run.tokensB, params:run.paramsOku,
  think:run.think, obey:run.obey, width:run.width, cal:run.cal,
  staff:run.staff, assigned:run.assigned,
  spent:run.spent, share:run.share, prevShare:run.share,
  price:run.price, ece:run.ece, capacity:run.capacity,
  code:run.code, mix:run.mix, pref:run.pref, basis:run.basis,
  rlvr:run.rlvr, risk:run.risk, gold:run.gold, verifier:run.verifier,
  mul:run.mul, wThink:this.wThink(D)
 },extra||{});
},

/* ★年を閉じる（⑧と②を1箇所で）。★data の settle が返した R を受け取る */
closeYear(D,R,run){
 run.spent += (R.dev||0)+(R.fixed||0);
 run.cum   += (R.profit||0);
 run.think=R.think; run.obey=R.obey; run.cal=R.cal; run.safe=R.safe; run.width=R.width;
 if(R.share!=null)run.share=R.share;
 /* ★② 設定9：次章の加算に掛かる倍率。★各章の data が nextMul で返す。
    ★返さないのは 第1章（幅が基礎50だけなので 1.0）と 第5章（最終年で次章が無い）だけである */
 run.mul = (R.nextMul!=null)?R.nextMul:1;
 /* ★⑧ 破産と救済（1回だけ） */
 if(this.leftOf(run,R)<0 && !run.rescued){
  run.rescued=true; run.bonus=(run.bonus||0)+D.set.rescue;
 }
 run.log.push({year:D.year,ch:D.ch,dev:R.dev,fixed:R.fixed,profit:R.profit,
               bars:R.bars,left:this.leftOf(run,R)});
 run.from=D.ch; run.year=D.year+1;
 return run;
},

/* ══════════════════════════════════════════════════════════════════════════
   §C. ★カードUIの部品（選ぶ／くわしく知る／上がるもの・下がるもの）
   ══════════════════════════════════════════════════════════════════════════ */
esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')},
n1(x){return (Math.round(x*10)/10).toLocaleString(undefined,{maximumFractionDigits:1})},
sign(x){return (x>0?'＋':x<0?'−':'±')+this.n1(Math.abs(x))},

/* パネルの見出し（.pt）。★tags は [ラベル, 値, 単位, 色クラス] の配列 */
head(title,tags){
 const t=(tags||[]).map(([k,v,u,cl])=>`<span><span class="k ol">${k}</span>
   <span class="v ${cl||'c'} n ol">${v}</span><span class="k ol">${u||''}</span></span>`).join('');
 return `<div class="pt"><h2 class="ol">${title}</h2><div class="tag">${t}</div></div>`;
},

/* ★「上がるもの／下がるもの」── ★両方を必ず書く（T18）。
   ★0件のカードを作らないための部品なので、★片方が空なら【描かずに例外を投げる】。
   ★これで「0件のカードが画面に出る」ことが機械的に起きなくなる */
t18(up,down){
 const U=(up||[]).filter(x=>x&&String(x).trim()),
       Dn=(down||[]).filter(x=>x&&String(x).trim());
 if(!U.length||!Dn.length)
  throw new Error('T18: 上がるもの／下がるものの片方が0件（'+U.length+'／'+Dn.length+'）');
 const box=(c,bg,lab,rows)=>`<div class="def" style="border-left-color:${c};border-color:${bg};
   background:rgba(${c==='#5ed093'?'94,208,147':'224,87,74'},.08)">
   <b style="color:${c}">${lab}</b>
   <ul style="margin:4px 0 0 1.1em;padding:0">${rows.map(r=>`<li>${r}</li>`).join('')}</ul></div>`;
 return box('#5ed093','rgba(94,208,147,.3)','上がるもの',U)
      + box('#e0574a','rgba(224,87,74,.3)','下がるもの',Dn);
},

ends(cardId,ends,cur,why){
 const head=(cur==null)?`<div class="note" style="border-left-color:#f5c14e;color:#ffdf9c">
   まだ選んでいません。下の ${ends.length}つ から1つを押してください。</div>`:'';
 return head+ends.map(e=>{
  const on=cur===e.id, ng=why?why(e):null;
  return `<div style="margin:12px 0;padding:0 0 2px;border-top:1px solid rgba(255,255,255,.09)">
   <div style="display:flex;align-items:baseline;gap:9px;margin:10px 0 2px">
    <b style="font-family:var(--dp);font-size:15px;color:${on?'#ffdf9c':'#f4f8fc'}">${e.name}</b>
    ${on?'<span style="font-size:11px;color:#ffdf9c">← いまこちらを選んでいます</span>':''}
   </div>
   ${e.sub?`<div class="note">${e.sub}</div>`:''}
   ${this.t18(e.up,e.down)}
   <div class="row"><button class="btn ${on||ng?'':'go'}" ${on||ng?'disabled':''}
    onclick="pick('${cardId}','${e.id}')">${on?'選んでいます':(ng||'これを選ぶ')}</button></div>
  </div>`}).join('');
},

stepper(D,run,n,fn){
 const mx=this.hireMax(D,run), pay=D.set.staffPay;
 const b=(d,l)=>`<button class="btn" style="min-width:54px;padding:8px 4px"
  ${(n+d<1||n+d>mx)?'disabled':''} onclick="${fn}(${n+d})">${l}</button>`;
 return `<div class="def" style="border-color:#f5c14e;background:rgba(245,193,78,.08)">
  <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
   ${b(-10,'−10')}${b(-1,'−1')}
   <b style="font-family:Oswald;font-size:26px;color:#ffdf9c;min-width:54px;text-align:center">${n}</b>
   <span style="color:#bcccdd">名</span>${b(1,'＋1')}${b(10,'＋10')}</div>
  <div class="note" style="margin-top:8px">
   人件費 <b>${n*pay} 億円／年</b>（5年目まで毎年。5年で <b>${n*pay*5} 億円</b>）<br>
   いま雇っている <b>${run.staff} 名</b>（うち未配属 ${this.staffFree(run)} 名）／
   あと <b>${mx} 名</b>まで
  </div></div>`;
},

/* ★実行の確認（★ch1.html の ask() と同じ形）。★run には呼ぶ側の関数の呼び出しを文字列で渡す */
ask(o){
 this.dlg(`<div class="dh"><h3>${o.title||'実行しますか'}</h3>
   <div class="x" onclick="C.shut()">×</div></div>
  <div class="db"><p class="lead" style="font-size:16px">${o.lead||''}</p>
   ${o.body||''}
   <div class="row"><button class="btn" onclick="C.shut()">やめる</button>
    <button class="btn go" onclick="C.shut();${o.run}">${o.ok||'実行する'}</button></div>
  </div>`);
},

src(tag,cite){return `<details class="cite"><summary>この値札の出どころ</summary>
 ${tag}${cite?'<br>'+cite:''}</details>`},

cmpHead(t){return `<h4 style="font-family:var(--dp);font-weight:900;font-size:14px;color:var(--amber);
 margin:18px 0 6px;letter-spacing:.05em">${t}</h4>`},

cmp(o){
 const keys=o.keys||[], rows=o.rows||[], sel=(o.sel==null?null:o.sel),
       lab=o.lab||'← これを選びました';
 /* ★列の名前と、行のセルの数が合わないと表がずれる。★合わないなら描かずに止める
    （★T18 と同じ考え方：★形が壊れたものを画面に出さない） */
 if(!keys.length||!rows.length)throw new Error('C.cmp: 列か行が0件である');
 rows.forEach(r=>{if((r.cells||[]).length!==keys.length)
  throw new Error('C.cmp: 列の数が合わない（'+r.name+'：'+(r.cells||[]).length+'／'+keys.length+'）')});
 return `<table class="cmp3"><thead>
  <tr><th></th>${keys.map(k=>`<th>${k}</th>`).join('')}</tr>
 </thead><tbody>
  ${rows.map(r=>`<tr${sel===r.id?' class="me"':''}><th>${r.name}<span class="pick">${lab}</span></th>`+
   r.cells.map((c,i)=>`<td data-k="${keys[i]}">${c}</td>`).join('')+'</tr>').join('')}
 </tbody></table>`;
},

pop(d){
 if(!d)return;
 if(!d.use)throw new Error('くわしく知る：③「今日から使えること」が無い（'+d.t+'）');
 const use=`<div class="use"><div class="uh"><b>★ あなたが今日から使えること</b>
   <span class="utag${d.utag==='導出'?' d':''}">${d.utag||''}</span></div>
   <div class="ub">${d.use}</div></div>`;
 const H4='先にこれをやった研究チームが書いていること';   // ★正本は ch1.html（→上の注記）
 const cites=(d.cites||(d.cite?[[H4,d.cite]]:[]))
   .map(([s,b])=>`<details class="cite"><summary>${s}</summary>${b}</details>`).join('');
 const ref=d.doc?`<div class="dref" onclick="C.openDoc('${d.doc}')"
   >もっと詳しく → 資料 ${d.dt}</div>`:'';
 this.dlg(`<div class="dh"><h3>${d.t}</h3><div class="x" onclick="C.shut()">×</div></div>
   <div class="db">${d.b}${use}${cites}${ref}</div>`);
},

SEC:['あなたの数字','なぜそうなったか','原典が報告していること','出典'],

settleFrame(o){
 const h=(i,t)=>`<h4${i===1?' style="margin-top:4px"':''}>${i}. ${t||this.SEC[i-1]}</h4>`;
 if(!o.s1||!o.s2||!o.s3||!o.s4)throw new Error('決算：4段のどれかが空である');
 return `<div class="dh"><h3>${o.title}</h3><div class="x" onclick="C.shut()">×</div></div>
 <div class="db">
  <p class="lead" style="font-size:17px;margin-bottom:16px">${o.head}</p>
  ${h(1)}${o.s1}
  ${h(2)}${o.s2}
  ${h(3,o.s3label)}${o.s3}
  ${h(4)}<div class="note">${o.s4}</div>
  ${o.tail||''}
 </div>`;
},

/* 5本のバー。★moved に入れた名前だけ印を付ける（→02 T19：どの選択で動いたか辿れる） */
bars(list,moved){
 return list.map(g=>`<div class="gg"><span>${g[0]}${
   (moved||[]).includes(g[0])?' <span style="color:#67d3e8;font-size:11px">↕</span>':''}</span>
  <span class="rl"><span class="fl" style="width:${Math.max(0,Math.min(100,g[1]))}%"></span></span>
  <b>${this.n1(g[1])}</b></div>`).join('');
},
mline(k,v,col){return `<div class="mline"><span>${k}</span><b${col?` style="color:${col}"`:''}>${v}</b></div>`},
msub(h){return `<div style="margin:-4px 0 7px 1.1em;font-size:11.5px;color:#8a9db3;
 line-height:1.6">└ ${h}</div>`},
note(h){return `<div class="note">${h}</div>`},

/* 麻衣の枠（ch1.html の mai() と同じ） */
mai(t,col){col=col||'#67d3e8';
 return `<div class="qt" style="border-color:${col};background:rgba(103,211,232,.06)">
  <span class="lbl" style="color:${col};font-family:Oswald;letter-spacing:.2em;font-size:10.5px"
   >AI秘書・鳥居 麻衣</span><br>${t}</div>`},

fact(f){
 return `<details class="cite" style="border-top-color:rgba(245,193,78,.25)">
  <summary style="color:#ffdf9c">${f.t}</summary>
  <div style="margin-top:8px">${f.b}</div>
  <div class="use" style="margin:11px 0 4px"><div class="uh">
   <b>★ あなたが今日から使えること</b>
   <span class="utag${f.utag==='導出'?' d':''}">${f.utag||''}</span></div>
   <div class="ub">${f.use}</div></div>
  <div style="margin-top:9px">出典　${f.cite}</div></details>`;
},

/* ══════════════════════════════════════════════════════════════════════════
   §E. モーダル・資料への出口
   ══════════════════════════════════════════════════════════════════════════ */
dlg(html){document.getElementById('dlg').innerHTML=html;
 document.getElementById('veil').classList.add('on');
 document.getElementById('veil').scrollTop=0},
shut(){document.getElementById('veil').classList.remove('on')},

openDoc(anchor){
 const me=(location.pathname.match(/(ch\d+)\.html/)||[])[1];
 const url='doc.html'+(me?'?from='+me+'.html':'')+(anchor||'');
 let w=null; try{w=window.open(url,'_blank')}catch(e){}
 if(!w){ if(this.run)this.save(this.run); location.href=url; }
},

/* ★★序章（`intro.html`）を開く ── ★★決定10 の後半（★第2章以降のどの章からでも序章を開ける）
   ★★2026-08-21 に足した。★★それまで `ch2.html`〜`ch5.html` から序章への参照は0件だった
   ★形は `C.openDoc` を写した：★★章の名前を自分の URL から取る（★章ごとに書かない）。
     ★`intro.html` 側が `?from=chN.html` を読んで、★その章に戻る口を出す（★現物の `BACK`）
   ★★`C.openDoc` と違って【同じタブ】で開く。★理由2つ
     1 ★★`intro.html` は自分で「元の章に戻る」口を持っている。★別タブにすると戻る口が2つになる
     2 ★★序章は読み物1本で、★カードの画面と見比べる必要が無い（★資料はそれがあるので別タブ）
   ★★★保存しない（★`C.openDoc` の落としどころと違う）。★理由：
     ★★章の途中の `run` を保存すると、★戻ったときに【その章で配属した人員が二重に効く】。
       ★実測の型：★`RUN.assigned` は章の入口の値に足す形なので（★ch3・ch4 の `ASSIGNED0`）、
       ★★途中の `assigned` を保存すると、★戻った回にそれが入口の値として読まれる
     ★★保存しなくても【前の章の保存は残っている】ので、★戻った章は入口から始まる。
       ★★章の途中の選択は消えるが、★決算を締めるまで支払いは確定していない（★型⑥を塞ぐ側） */
openIntro(){
 const me=(location.pathname.match(/(ch\d+)\.html/)||[])[1];
 location.href='intro.html'+(me?'?from='+me+'.html':'');
},

/* ══════════════════════════════════════════════════════════════════════════
   §F. 額縁とレイアウト（★ch1.html の fit()／padStage() を写したもの。閾値も同じ）
        縮小率が 0.8 を下回ると文字が読めないので、その手前で額縁をやめる。
        閾値は 820x615 の1か所だけで管理する
   ══════════════════════════════════════════════════════════════════════════ */
fit(){
 const fluid=innerWidth<820||innerHeight<615;
 const r=document.documentElement;
 r.classList.toggle('fluid',fluid);
 r.classList.toggle('narrow',fluid&&innerWidth<400);
 r.classList.toggle('side',fluid&&innerWidth>=620&&innerWidth>innerHeight);
 r.style.setProperty('--s',fluid?1:Math.min(innerWidth/1024,innerHeight/768));
 if(this.onFit)this.onFit();
 this.padStage();
},
padStage(){
 const st=document.querySelector('.stage'),inf=document.querySelector('.info');
 if(!st||!inf)return;
 const fluid=document.documentElement.classList.contains('fluid');
 st.style.paddingBottom=fluid?(inf.offsetHeight+12)+'px':'';
 document.documentElement.style.setProperty('--infoH',inf.offsetHeight+'px');
},
/* メニューの位置はレイアウトで変わる。縦積みのときだけ「上」になる */
menuSide(){const c=document.documentElement.classList;
 return c.contains('fluid')&&!c.contains('side')?'上':'左'},

/* 秘書の欄 */
say(html){
 const el=document.getElementById('said');if(!el)return;
 el.innerHTML='<span class="lbl">AI秘書・鳥居 麻衣</span><br>'+html;
 this.padStage();
},

/* 上部バー。★他社は【1年に2割】伸びる（設定8）。年の途中では動かない
   ★★割合の字も書く（★2026-08-20。★決定6＝「他社の力」の文字が出ないのを直す、の第2章以降の分）
     ★第1章は自前で `rvp` に書いていた。★★第2〜5章はここが書く（★同じ処理を4つ作らない）
     ★★欄が無い章では何もしない（★`if(g('rvp'))` で見る） */
top(D,cash,rival,when){
 const g=id=>document.getElementById(id);
 if(g('cash'))g('cash').textContent=cash.toLocaleString();
 const pc=Math.round(rival/D.set.full*100);
 if(g('rv')){
  g('rv').style.width=pc+'%';
  const box=g('rv').parentNode;
  if(box&&box.classList)box.classList.toggle('over',pc>100);
 }
 if(g('rvp'))g('rvp').textContent=pc+'%';
 if(when){
  if(g('tYear'))g('tYear').textContent=when.year;
  if(g('tMonth'))g('tMonth').textContent=when.month;
  if(g('tEn'))g('tEn').textContent='/'+when.en;
  if(g('tQ'))g('tQ').textContent=when.q;
 }
},

/* 起動（各章の html が呼ぶ） */
boot(onFit){
 this.onFit=onFit;
 document.getElementById('office').innerHTML=G.office();
 addEventListener('resize',()=>this.fit());
 addEventListener('orientationchange',()=>this.fit());
 addEventListener('keydown',e=>{if(e.key==='Escape')this.shut()});
 document.getElementById('veil').onclick=e=>{if(e.target.id==='veil')this.shut()};
 this.fit();
}

};
