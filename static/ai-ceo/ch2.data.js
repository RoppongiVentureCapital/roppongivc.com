
const E0=99/34;   // 【算術】99B（＝良い側の重み33% × 300B）÷ 34B ＝ 2.9118…

const D={

ch:2, year:2,

set:{
  rate      :1,      // 設定1  1 PF-day ＝ 1億円
  budget    :5000,   // 設定2  予算（★追加調達は無い）
  rescue    :1000,   // 設定2  破産時の救済（1回だけ）
  turns     :4,      // 設定37 1年 ＝ 4ターン
  staffCap  :40,
  staffPay  :1,      // 設定10 1名あたり年1億円（雇った年から5年目まで毎年）

  good      :34,     // 【実測】良いデータの総量 34B（＝WebText2 19＋Books1 12＋Wikipedia 3）
  pool      :563.9,  // 設定17 プール総量【算術】34×2.91 ＋ CC等465×1周
  e0        :E0,
  eMax      :3.4,    // 軸1の上限。値は【実測】（Table 2.2 の最大値）／上限として使う判断は【設定】
  low0      :67,     // 軸2のゼロ点【算術】＝ 100 − 良い側の重み33%
  P1        :0.5,    // 設定18 ★第35版で凍結（★上端が実質存在せず中央が定義できないので P2 と同値）
  P2        :0.5,    // 設定19 ★第35版で凍結（通過域 (0, 約1.05] の線形中央）★崖の手前である
  codeCap   :34,     // 設定20 コードとして調達できる上限（★資料にコードのトークン数は無い＝設定）
  codeCost  :100,    // 設定20 コードの収集費 100億円

  /* バーの基礎値（設定29〜32）。★第2章では第1章から引き継いだ値に加算するだけ */
  obeyBase  :10,     // 設定30
  safeBase  :50,     // 設定31
  widthBase :50,     // 設定32
  ece0      :0.7,    // 設定12 事前学習後のずれ（pt）★好み訓練は第3章
  depthK    :0.05,   // 設定6  使う深さ ＝ 1 − ずれ×0.05（第2章では売上が無いので効かない）
  depthMin  :0.2,    // 設定6  下限（★到達不能。安全弁）
  width9    :w=>1+(w-50)/10*0.1,

  /* 上部バーの表示にだけ使う（→02 設定33・34。★第2章は魅力を計算しない） */
  wPrice    :1.75,   // 設定4  ★第35版で凍結（通過域 [1.5, 2.0] の線形中央）
  full      :475,    // 設定33 満点 ＝ 300 ＋ 100×W_price
  rival0    :237.5,  // 設定34 他社の初期値 ＝ 満点の半分
  rivalUp   :0.2,    // 設定8  他社は毎年2割増

  /* 門（設定7・33-1）。★第2章は出荷しないが、バーの読み方は第1章と同じにする */
  gate      :sh=>30+sh/2,
  cap       :(safe,risk)=>Math.max(0,2*(safe-(risk?20:30))),
},

cards:[
 /* ★コードを混ぜる：★収集費100億・上限34B（＝340億語）は【設定】（資料にコードの語数は無い）。
    ★考える力＋10 は向きだけ実測。★枠を食うのは算術（5ソースの実量が34B 減る） */
 {id:'code', name:'コードを混ぜる', grp:'配合', kind:'mix',
  cost:100, tokens:34, think:10, staff:0, turn:null,
  tag:'【設定】収集費100億円・上限340億語（資料にコードの語数は無い）／'+
      '【実測】考える力が上がる向き ／【設定】上がる大きさ ＋10 ／'+
      '【算術】混ぜた分だけ、他の文章に使える枠が減る',
  cite:'Shao et al. 2024「DeepSeekMath」arXiv:2402.03300 §5.1.1'+
       '（コードの訓練が数学推論を改善する）'},

 {id:'mix', name:'ふるい分け', grp:'配合', kind:'choice',
  cost:0, staff:0, turn:null,
  opts:[
   {id:'volume', name:'量で埋める', e:E0,
    tag:'【算術】厳選側を平均2.91周に保つ（先にこれをやった研究チームと同じ配合）。'+
        '周回数の代償を払わない'},
   {id:'quality', name:'質に寄せる', e:3.4,
    tag:'【実測】3.4周は、その研究チームが実際に回した最大の回数 ／'+
        '【設定】それを上限として使う判断'}
  ],
  tag:'【設定】0円。配合は倉庫の中身を配り直すだけなので、お金では回避できない',
  cite:'Brown et al. 2020, arXiv:2005.14165 §2.2 Table 2.2'+
       '（各データ源の語数・配合の重み・周回数。厳選側340億語は総量の6.8%だが、重みは33%）'},
],

card(id){return this.cards.find(c=>c.id===id)},
opt(id,oid){const c=this.card(id);return c&&c.opts?c.opts.find(o=>o.id===oid):null},

chk(){
 const s=this.set, out=[];
 const t=(k,got,want)=>{if(got!==want)out.push({file:'ch2',key:k,got,want})};
 /* Table 2.2 の量（B）：厳選した web 19 ／ 本（1）12 ／ 百科事典 3 */
 t('good ＝ 19＋12＋3',                s.good, 19+12+3);            // 設定17 の材料
 /* Table 2.2 の重み（%）：同じ3種が 22 ／ 8 ／ 3 ＝ 良い側 33% */
 t('low0 ＝ 100−(22＋8＋3)',           s.low0, 100-(22+8+3));       // 軸2のゼロ点
 t('e0   ＝ 99 ÷ 34',                  s.e0,   99/34);              // 軸1のゼロ点（★丸めない）
 t('full  ＝ 300＋100×wPrice',         s.full, 300+100*s.wPrice);   // 設定33
 t('rival0 ＝ full ÷ 2',               s.rival0, s.full/2);         // 設定34
 return out;
},

/* ── 表示の整形（ch1.data.js と同じ形） ───────────────────────────── */
words(w){return w>=10000
  ?`${Math.floor(w/10000)}兆${w%10000?(w%10000).toLocaleString()+'億':''}語`
  :`${w.toLocaleString()}億語`},
oku(n){return n.toLocaleString()},
b(n){return `${n.toFixed(1)}B`},

mix(tokensB,code,e){
 const s=this.set;
 const den   = tokensB-(code?s.codeCap:0);        // 5ソース実量（軸2の分母）
 const goodB = s.good*e;                          // 良い側 ＝ 34B × e周
 const low   = (den-goodB)/den*100;               // 低品質側の比率（%）
 const d1    = -s.P1*Math.max(0,e-s.e0);          // 軸1 ★超過側だけ（設定18）
 const d2    = -s.P2*(low-s.low0);                // 軸2 ★対称（設定19）
 return {den,goodB,low,d1,d2,delta:d1+d2};
},

settle(st){
 const s=this.set, e=this.opt('mix',st.mix||'volume').e;
 const mul  = (st.mul==null?1:st.mul);              // ★設定9。第1章→第2章は必ず 1.0
 const m    = this.mix(st.tokensB,!!st.code,e);
 const add  = (st.code?this.card('code').think:0)*mul;   // ★倍率は加算ポイントに掛かる
 const think= Math.max(0,Math.min(100,st.think+add+m.delta));
 const obey = st.obey;                                    // ★第2章に指示に従うのカードは無い
 const width= st.width;                                   // ★第2章に答えの幅のカードは無い
 const safe = Math.max(0,Math.min(100,
              s.safeBase-(obey-s.obeyBase)-10*(st.rlvr?1:0)));   // 設定31
 const cal  = Math.round(100-s.ece0);                     // K：100−ずれpt（第2章は 99）
 const dev  = (st.code?this.card('code').cost:0);          // 開発費（その年に一括。M-4 の4）
 const fixed= st.staff*s.staffPay;                         // 固定費（人件費のみ）
 const rival= s.rival0*Math.pow(1+s.rivalUp,this.year-1);  // 設定8・34（上部バーの表示用）
 return{
  bars:[['考える力',think],['指示に従う',obey],['自信の正しさ',cal],
        ['安全',safe],['答えの幅',width]],
  think,obey,safe,cal,width,
  e, den:m.den, goodB:m.goodB, low:m.low,             // ★決算に出す配合の実数
  d1:m.d1, d2:m.d2, mixDelta:m.delta, codeAdd:add,
  over1:Math.max(0,e-s.e0),                            // 軸1の超過（周）
  over2:m.low-s.low0,                                  // 軸2の超過（ポイント）
  share:0, gate:s.gate(0), cap:s.cap(safe,false),      // ★第2章は出荷しない（製品が無い）
  ship :false,
  dev, fixed,
  profit:-(dev+fixed),
  left  :s.budget-(st.spent||0)-dev-fixed,
  rival,
  depth :Math.max(s.depthMin,1-s.ece0*s.depthK),       // 設定6（売上は第3章から）
  nextMul:s.width9(width)      // ★設定9：この幅が【次章】の考える力の加算に掛かる（第3〜5章と同じ形）
 };
}
};
