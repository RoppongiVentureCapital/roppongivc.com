
const D={

ch:5, year:5,

set:{
  rate      :1,        // 設定1
  budget    :5000,     // 設定2
  rescue    :1000,     // 設定2
  turns     :4,        // 設定37
  staffCap  :40,       // 設定24（★第5章に人員を使う工程は無い）
  staffPay  :1,        // 設定10 ★雇った人員の人件費は5年目まで毎年かかる

  market5   :3e13,     // 設定3a ★30兆円相当（第37版で凍結）
  mktUp     :0.2,      // 設定3b（★5年目は 3a そのもの）
  yen1000   :{high:2000,std:1000,low:500},  // 設定3c（★第3章で決めた分を引き継ぐ）
  cheap     :{high:0,  std:50,  low:100},   // 設定3c

  wPrice    :1.75,     // 設定4
  wObey     :30,       // 設定33（A-3'）
  full      :475,      // 設定33
  rival0    :237.5,    // 設定34
  rivalUp   :0.2,      // 設定8（★5年目は 237.5×1.2⁴ ＝ 492.5）
  follow    :0.4,      // 設定13
  thinkMin  :20,       // 設定5
  wThinkParts:{base20:50,rlvr:30,maj:4,cot:10,code:10,clip:100,floor:20},  // →§5-C の O
  wThink0   :80,

  obeyBase  :10,       // 設定30
  safeBase  :50,       // 設定31
  rlvrSafe  :10,       // 設定31
  widthBase :50,       // 設定32
  majMin    :60,       // 設定32 ★多数決は答えの幅60以上でないと効かない
  depthK    :0.05,     // 設定6
  depthMin  :0.2,      // 設定6
  width9    :w=>1+(w-50)/10*0.1,   // 設定9（★第5章は最終年なので次章が無い）

  gateBase  :30,       // 設定7
  gateRisk  :20,       // 設定22
  riskCost  :20,       // 設定22 ★毎年20億円
  cap       :(safe,risk)=>Math.max(0,2*(safe-(risk?20:30))),

  unit      :2,        // 設定35 パラメータ100億あたり 1,000回で2円
  equipX    :170,      // 設定21 1,000回を捌く容量あたり170円
  /* 設定28 の倍率。★原価【全体】に掛け、重ねるときは掛け合わせる（順序依存なし）。
     ★★掛かる先は原価と【設備費】の両方である（第33版の 33-3） */
  mulRlvr   :2,        // ★RLVR ×2（第4章の選択。この章に引き継がれる）
  mulCot    :3,        // CoT ×3
  mulFew    :2,        // few-shot ×2
  mulTool   :1.5,      // 道具 ×1.5
  majShare  :0.1,      // 設定36 ★多数決を使う利用の割合（1割）
  majK      :16,       // 設定16 ★k＝16 は錨（原典の設定）
  mulMaj    :2.5,      // 設定36 ★平均原価 ＝ 0.9×1 ＋ 0.1×16 ＝ 2.5
},

cards:[
 /* ★CoT：★バーの＋10 は【設定】（GSM8K は別ベンチマーク・別モデルなので比が取れない）。
    ★倍率×3 も【設定】（出力が伸びる向きは自明だが、倍率は資料に無い） */
 {id:'cot', name:'途中を書かせる', grp:'使い方', kind:'toggle',
  cost:0, think:10, mult:3, turn:null,
  tag:'【実測】小学校レベルの文章題で 18 → 57（別のモデルでの測定）／'+
      '【設定】バーの＋10 と、運用費が3倍になること'+
      '（出力が伸びる向きは自明ですが、倍率は論文に書かれていません）',
  cite:'Wei et al. 2022, arXiv:2201.11903 Fig.2（GSM8K 18 → 57。PaLM 540B）'},

 /* ★例を見せる ── ★第4章で RLVR を取ると符号が反転する（測定された章のまたぎ） */
 {id:'few', name:'例を見せる', grp:'使い方', kind:'toggle',
  cost:0, think:10, thinkRlvr:-10, mult:2, turn:null,
  tag:'【実測】ふつうのモデルでは、例を並べると良くなる／'+
      '【実測】正誤で鍛えた道では「一貫して性能が悪化する。例を入れないほうを推奨」'+
      '＝効果が ＋10 から −10 に反転します／'+
      '【設定】運用費2倍（入力と出力が同じくらいの長さだと仮定しています）',
  cite:'Dong et al. 2023「A Survey on In-context Learning」arXiv:2301.00234'+
       '（例を並べるだけで解ける。ただし例を増やせば良いとは限らない）'+
       '／DeepSeek-R1, arXiv:2501.12948 §6（例を入れると一貫して悪化する。入れないほうを推奨）'},

 {id:'tool', name:'道具を呼ぶ', grp:'使い方', kind:'toggle',
  cost:0, think:10, mult:1.5, turn:null, hideIfRlvr:true,
  tag:'【設定】考える力＋10 と 運用費1.5倍'+
      '（道具の仕組みそのものは、このゲームが確かめた論文32本の中では測られていません）／'+
      '【実測】正誤で鍛えた道では使えないこと、これだけが測られています',
  cite:'DeepSeek-R1, arXiv:2501.12948 §6'+
       '（検索エンジンや電卓を使って出力を良くすることができない）'},

 /* ★温度を上げる ＋ 多数決 ── ★組で設計する（片方だけでは両方が成立しない）
    ★資料の「低温は安全」は出力の当たりやすさの意味で、5本のバーの「安全」ではない */
 {id:'temp', name:'温度を上げる', grp:'使い方', kind:'toggle',
  cost:0, think:-10, width:10, mult:1, turn:null,
  tag:'【設定】答えの幅＋10／考える力−10。'+
      '温度が答えのばらつきを変えるのは計算式の定義で、論文の比率は入っていません／'+
      '「低い温度は安全」という言い方は答えの当たりやすさの意味で、'+
      '安全のバーとは別の話です',
  cite:'【設定】（確率の計算式の定義。大きさの測定は論文にありません）'},

 /* ★多数決：★考える力＋4 は【この設計でバーに残った唯一の錨】＝同一ベンチマーク・同一モデル内の比
    （AIME 上で 多数決＋8.8 対 RLVR＋62.3 ≒ 1:7 → 30÷7 ≒ 4）。
    ★原価は利用の1割だけ ×16（＝平均×2.5。設定36）。★適用範囲は【設定】である。
    ★閾値60 は一次側に無い【設定】。★86.7% は R1-Zero の cons@16（別の 86.7% と混ぜない） */
 {id:'maj', name:'何度も引いて多数決する', grp:'使い方', kind:'toggle',
  cost:0, think:4, mult:2.5, k:16, share:0.1, needWidth:60, turn:null,
  tag:'【実測】16回引いて多数を採る設定は、研究チームのものです（77.9 → 86.7）／'+
      '考える力＋4 は、同じ試験・同じモデルの中での比から置いています'+
      '（多数決＋8.8 対 正誤で鍛える＋62.3 ≒ 1対7）／'+
      '【設定】費用は、答えを確かめたい一部の利用だけ16倍（全体の1割＝平均2.5倍）／'+
      '【設定】答えの幅が60未満だと効きません（同じ答えばかり出るため）',
  cite:'DeepSeek-R1, arXiv:2501.12948 §2.3'+
       '（AIME 77.9 → 86.7。16回引いて多数を採る。R1-Zero での測定）'},

 /* ★設備を増やす ── ★毎年のカード（M-4 の1）。★倍率は設備費にも掛かる（33-3） */
 {id:'equip', name:'設備を増やす', grp:'設備', kind:'capacity',
  cost:0, staff:0, turn:null, x:170,
  tag:'【設定】1,000回を捌く容量あたり170円。モデルの大きさによらない。'+
      '計算量が増える選び方をすると、設備の費用も同じ倍率で増えます',
  cite:'Brown et al. 2020, arXiv:2005.14165 §6.3（使うときの費用は、作るときと桁が違う）'+
       '／単価そのものは【設定】'}
],

card(id){return this.cards.find(c=>c.id===id)},

chk(){
 const s=this.set, p=s.wThinkParts, out=[];
 const t=(k,got,want)=>{if(got!==want)out.push({file:'ch5',key:k,got,want})};
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
 const s=this.set;
 const mul=(st.mul==null?1:st.mul);                          // 設定9
 const wT =(st.wThink>0?st.wThink:s.wThink0);
 const C=this.card('cot'),F=this.card('few'),T=this.card('tool'),
       P=this.card('temp'),M=this.card('maj');
 const tool=!!st.tool&&!st.rlvr;                             // ★RLVR の道では盤面に出さない

 /* 答えの幅を先に決める（★多数決の条件がこれで決まる。設定32） */
 const width=Math.max(0,Math.min(100,st.width+(st.temp?P.width:0)));
 const majOK=!!st.maj&&width>=s.majMin;                      // ★60未満だと効かない

 /* 考える力（設定29。★この章の加算ポイントに設定9 の倍率が掛かる） */
 const add=(st.cot?C.think:0)
          +(st.few?(st.rlvr?F.thinkRlvr:F.think):0)          // ★符号が反転する
          +(tool?T.think:0)
          +(st.temp?P.think:0)
          +(majOK?M.think:0);
 const think=Math.max(0,Math.min(100,st.think+add*mul));
 const obey =Math.max(0,Math.min(100,st.obey));              // ★第5章に指示に従うのカードは無い
 const safe =Math.max(0,Math.min(100,
             s.safeBase-(obey-s.obeyBase)-(st.rlvr?s.rlvrSafe:0)));
 const ece  =st.ece, cal=Math.round(100-ece);

 /* シェア（設定13・33-1） */
 const rival =this.rival(this.year);
 const R     ={yen1000:s.yen1000[st.price||'std'],cheap:s.cheap[st.price||'std']};
 const appeal=this.appeal(obey,think,R.cheap,wT);
 const target=Math.max(0,Math.min(100,appeal/(appeal+rival)*100));
 const share =Math.max(0,Math.min(100,
              (st.prevShare||0)+(target-(st.prevShare||0))*s.follow));
 const cap   =s.cap(safe,!!st.risk);
 const sold  =Math.min(share,cap);

 /* 倍率（設定28。★掛け合わせる。★原価と設備費の両方に掛かる） */
 const mult=(st.rlvr?s.mulRlvr:1)
           *(st.cot?s.mulCot:1)
           *(st.few?s.mulFew:1)
           *(tool?s.mulTool:1)
           *(majOK?s.mulMaj:1);

 const depth =this.depth(ece);
 const users =this.market(this.year)*sold/100;
 const use   =users*depth;
 const served=Math.min(use,st.capacity||0);
 const revY  =served*R.yen1000/1000;
 const opY   =served*this.cost1000(st.params)/1000*mult;
 const eqY   =(st.capacity||0)*s.equipX/1000*mult;

 const rev=revY/1e8, op=opY/1e8, equip=eqY/1e8;
 const dev  =0;                                        // ★第5章は訓練費0円の章
 const fixed=st.staff*s.staffPay+(st.risk?s.riskCost:0)+equip;
 const profit=rev-op-dev-fixed;

 return{
  bars:[['考える力',think],['指示に従う',obey],['自信の正しさ',cal],
        ['安全',safe],['答えの幅',width]],
  think,obey,safe,cal,width,ece,depth,
  thinkAdd:add*mul, majOK, toolUsable:!st.rlvr, fewSign:(st.rlvr?-1:1), mult,
  appeal,rival,target,share,cap,sold,
  ship:cap>0,
  capBound:use>(st.capacity||0),
  users,use,served,
  gross:(R.yen1000-this.cost1000(st.params)*mult),   // 1,000回あたりの粗利（円）
  rev,op,equip,dev,fixed,profit,
  left:s.budget-(st.spent||0)-dev-fixed+rev-op,
  final:true
 };
}
};
