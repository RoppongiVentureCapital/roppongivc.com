
const D={

ch:4, year:4,

set:{
  rate      :1,        // 設定1
  budget    :5000,     // 設定2
  rescue    :1000,     // 設定2
  turns     :4,        // 設定37
  staffCap  :40,       // 設定24 ★通期の枠（年ごとに戻らない。K-4）
  staffPay  :1,        // 設定10 1名 年1億円
  staffPt   :1,        // 設定23 ★1名 ＝ 1ポイント分の「工程を実行できる枠」（3本共通）

  market5   :3e13,     // 設定3a ★30兆円相当（第37版で凍結）
  mktUp     :0.2,      // 設定3b
  yen1000   :{high:2000,std:1000,low:500},  // 設定3c（★売値は第3章で決めた分を引き継ぐ）
  cheap     :{high:0,  std:50,  low:100},   // 設定3c

  wPrice    :1.75,     // 設定4
  wObey     :30,       // 設定33（A-3'）
  full      :475,      // 設定33
  rival0    :237.5,    // 設定34
  rivalUp   :0.2,      // 設定8
  follow    :0.4,      // 設定13
  thinkMin  :20,       // 設定5
  wThinkParts:{base20:50,rlvr:30,maj:4,cot:10,code:10,clip:100,floor:20},  // →§5-C の O
  wThink0   :80,

  obeyBase  :10,       // 設定30
  safeBase  :50,       // 設定31 ★安全 ＝ 50 −（指示に従う−10）− 10×[RLVR]
  rlvrSafe  :10,       // 設定31 ★RLVR の減算（★向きだけ実測。大きさは設定）
  widthBase :50,       // 設定32
  majMin    :60,       // 設定32
  depthK    :0.05,     // 設定6
  depthMin  :0.2,      // 設定6
  width9    :w=>1+(w-50)/10*0.1,   // 設定9 ★次章の考える力の加算に掛かる倍率

  gateBase  :30,       // 設定7  リスク管理なしの切片
  gateRisk  :20,       // 設定22 買った年の切片（★門を10ポイント下げる）
  riskCost  :20,       // 設定22 ★毎年20億円（一度買って終わりではない）
  cap       :(safe,risk)=>Math.max(0,2*(safe-(risk?20:30))),

  unit      :2,        // 設定35 パラメータ100億あたり 1,000回で2円
  equipX    :170,      // 設定21 1,000回を捌く容量あたり170円
  mulRlvr   :2,        // 設定28 ★RLVR ×2（思考連鎖が長くなる）★原価と設備費の両方に掛かる
},

cards:[
 {id:'hire', name:'人を雇う', grp:'仕上げ', kind:'staff',
  cost:0, turn:0, per:1, cap:40,
  tag:'【実測】上限40名（5年間の合計。見本や好み訓練で使った分は戻りません）／'+
      '【設定】1名 年1億円',
  cite:'Ouyang et al. 2022, arXiv:2203.02155 §5.3（約40名を雇い、チームを小さく保った）'},

 /* ★正誤で鍛える（RLVR）── ★効果は「検証器に回した人数」が上限（1名＝1ポイント）
    ★大きさ（＋30・安全−10・原価×2）は【設定】。★向きだけが実測である。
    ★検証器の質の天井（PRM800K でさえ約20%が誤った注釈）は【天井のみ】で、大きさは置かない。
    ★「報酬モデルを使う」はカードにしない（第24版。★同じ効果を副作用なしで買える二重の経路だった） */
 {id:'rlvr', name:'正誤で鍛える', grp:'鍛える', kind:'staffScale',
  cost:0, staffMax:30, thinkPer:1, thinkMax:30, safe:-10, mult:2, turn:null,
  tag:'【実測】考える力が上がる／安全が下がる／答えが長くなる（どれも向きだけ）／'+
      '【設定】その大きさ（考える力＋30・安全−10・運用費2倍）／'+
      '代償は人員30名です（お金ではありません）／'+
      '効くのは正誤が判定できる範囲だけで、検証する側の質が天井を決めます',
  cite:'DeepSeek-R1, arXiv:2501.12948 §2.3 Figure 1(a)（AIME 15.6 → 77.9）'+
       '／§2.2（正誤のルールだけで報酬を出す。学習した報酬モデルは推論の課題には使わない）'+
       '／§2.3 Figure 1(b)（考える時間が伸び続ける＝答えが長くなる）'+
       '／§5（賢くなるほど、危険な計画も実行しやすい形で出せてしまう）'+
       '／Shao et al. 2024「DeepSeekMath」arXiv:2402.03300 §5.2.3'+
       '（訓練された人が慎重に付けた検証用データでさえ、約20%に誤った注釈がある）'},

 {id:'gold', name:'人の模範解答を先に入れる', grp:'鍛える', kind:'toggle',
  cost:0, staff:10, obey:10, think:-10, turn:null,
  tag:'【実測】指示に従うは上がり、考える力は下がる（AIME 77.9 → 59.0）／'+
      '【設定】バーの大きさ（＋10／−10）／'+
      '人員10名（人が模範解答を書く工程。見本と同じ人手を使います）',
  cite:'DeepSeek-R1, arXiv:2501.12948 §4 Table 3'+
       '（各段階の結果。R1-Zero 77.9 → R1-Dev1 59.0。AIME 2024 Pass@1）'},

 /* ★リスク管理システム ── ★毎年かかる固定費。門の切片を 30 → 20 にする（設定22） */
 {id:'risk', name:'リスク管理システムを作る', grp:'安全', kind:'yearly',
  cost:20, staff:0, gateDown:10, turn:null,
  tag:'【実測】安全はモデル単体では足りず、周りの仕組みと組み合わせて初めて水準が上がる／'+
      '【設定】年20億円で、出荷に必要な安全が10ポイント下がる。毎年かかります',
  cite:'DeepSeek-R1, arXiv:2501.12948 §5'+
       '（安全の水準は「中程度」で、リスク管理の仕組みと組み合わせて初めて優れた水準になる）'},

 /* ★設備を増やす ── ★毎年のカード（M-4 の1）
    ★倍率（設定28）は原価だけでなく設備費にも掛かる（33-3。電力と資本は別の費用＝二重計上ではない） */
 {id:'equip', name:'設備を増やす', grp:'設備', kind:'capacity',
  cost:0, staff:0, turn:null, x:170,
  tag:'【設定】1,000回を捌く容量あたり170円。モデルの大きさによらない。'+
      '計算量が増える選び方をすると、設備の費用も同じ倍率で増えます',
  cite:'Brown et al. 2020, arXiv:2005.14165 §6.3'+
       '（使うときの費用は、作るときと桁が違う）／単価そのものは【設定】'}
],

card(id){return this.cards.find(c=>c.id===id)},

chk(){
 const s=this.set, p=s.wThinkParts, out=[];
 const t=(k,got,want)=>{if(got!==want)out.push({file:'ch4',key:k,got,want})};
 t('wThink0 ＝ min(clip, 材料の和) − floor',
   s.wThink0, Math.min(p.clip,p.base20+p.rlvr+p.maj+p.cot+p.code)-p.floor);
 t('full  ＝ 300＋100×wPrice',   s.full,   300+100*s.wPrice);
 t('rival0 ＝ full ÷ 2',         s.rival0, s.full/2);
 return out;
},

/* ── 表示の整形 ───────────────────────────────────────────────────── */
oku(n){return n.toLocaleString()},
yen(n){return `${Math.round(n).toLocaleString()}円`},
pct(n){return `${n.toFixed(1)}%`},

market(year){return this.set.market5/Math.pow(1+this.set.mktUp,5-year)},
rival (year){return this.set.rival0*Math.pow(1+this.set.rivalUp,year-1)},
cost1000(params){return this.set.unit*params/100},
depth (ece){return Math.max(this.set.depthMin,1-ece*this.set.depthK)},
appeal(obey,think,cheap,wThink){
 const s=this.set;
 if(think<s.thinkMin) return 0;                       // 設定5 のゲート
 return Math.max(0,200*(obey-s.obeyBase)/s.wObey)
      + Math.max(0,100*(think-s.thinkMin)/wThink)
      + 100*s.wPrice*cheap/100;
},

settle(st){
 const s=this.set, V=this.card('rlvr'), G=this.card('gold');
 const mul  =(st.mul==null?1:st.mul);                        // 設定9
 const wT   =(st.wThink>0?st.wThink:s.wThink0);
 const n    =Math.max(0,Math.min(V.staffMax,st.verifier||0)); // 検証器に回した人数
 const rlvr =n>0;

 /* バー（設定29〜32。★加算・クリップ・順序依存なし） */
 const add  =(n*V.thinkPer)+(st.gold?G.think:0);             // ★この章の考える力の加算ポイント
 const think=Math.max(0,Math.min(100,st.think+add*mul));
 const obey =Math.max(0,Math.min(100,st.obey+(st.gold?G.obey:0)));
 const width=Math.max(0,Math.min(100,st.width));             // ★第4章に答えの幅のカードは無い
 const safe =Math.max(0,Math.min(100,
             s.safeBase-(obey-s.obeyBase)-(rlvr?s.rlvrSafe:0)));
 const ece  =st.ece;                                          // ★較正は第3章で決まっている
 const cal  =Math.round(100-ece);

 /* シェア（設定13・33-1） */
 const rival =this.rival(this.year);
 const R     ={yen1000:s.yen1000[st.price||'std'],cheap:s.cheap[st.price||'std']};
 const appeal=this.appeal(obey,think,R.cheap,wT);
 const target=Math.max(0,Math.min(100,appeal/(appeal+rival)*100));
 const share =Math.max(0,Math.min(100,
              (st.prevShare||0)+(target-(st.prevShare||0))*s.follow));
 const cap   =s.cap(safe,!!st.risk);
 const sold  =Math.min(share,cap);

 /* 売上・運用費（設定28 の倍率は★原価と設備費の両方に掛かる＝33-3） */
 const mult  =(rlvr?s.mulRlvr:1);
 const depth =this.depth(ece);
 const users =this.market(this.year)*sold/100;
 const use   =users*depth;
 const served=Math.min(use,st.capacity||0);
 const revY  =served*R.yen1000/1000;
 const opY   =served*this.cost1000(st.params)/1000*mult;
 const eqY   =(st.capacity||0)*s.equipX/1000*mult;

 const rev=revY/1e8, op=opY/1e8, equip=eqY/1e8;
 const dev  =0;                                    // ★第4章のカードは全部0円（代償は人員と年費）
 const fixed=st.staff*s.staffPay+(st.risk?s.riskCost:0)+equip;   // M-4 の6
 const profit=rev-op-dev-fixed;

 return{
  bars:[['考える力',think],['指示に従う',obey],['自信の正しさ',cal],
        ['安全',safe],['答えの幅',width]],
  think,obey,safe,cal,width,ece,depth,
  verifier:n, rlvr, thinkAdd:add*mul, mult,
  appeal,rival,target,share,cap,sold,
  ship:cap>0,
  capBound:use>(st.capacity||0),
  users,use,served,
  gross:(R.yen1000-this.cost1000(st.params)*mult),   // 1,000回あたりの粗利（円）
  rev,op,equip,dev,fixed,profit,
  left:s.budget-(st.spent||0)-dev-fixed+rev-op,
  staffFree:s.staffCap-st.staff,                     // ★通期枠の残り
  nextMul:s.width9(width)                            // ★設定9：次章の加算に掛かる倍率
 };
}
};
