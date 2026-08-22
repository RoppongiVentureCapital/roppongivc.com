
const D={

ch:1, year:1,
                // ★2026-08-19 に足した。★呼ぶ側が {ch:1,year:1} を添えなくて済むようにする

set:{
  rate      :1,      // 設定1  1 PF-day ＝ 1億円
  budget    :5000,   // 設定2  予算。★追加調達は無い（5年間でこの1回だけ）
  rescue    :1000,   // 設定2  破産時の救済（1回だけ）
  turns     :4,      // 設定37 1年 ＝ 4ターン（＝四半期）★第29版で番号が付いた（M-6）
  share0    :0,      // 設定13 1年目の初期シェア（%）
  follow    :0.4,    // 設定13 追従速度（目標との差の4割）
  rival0    :237.5,  // 設定34 他社の魅力の初期値 ＝ ★自社の満点の半分（→02 の 34-1）
  rivalUp   :0.2,    // 設定8  他社は毎年2割増
  full      :475,    // 設定33 自社の魅力の満点 ＝ 300 ＋ 100×W_price
  wPrice    :1.75,   // 設定4  ★売値の安さの重み（★02 第35版で凍結＝通過域[1.5,2.0]の中央）
  /* ★02 第35版（35-1）で W_price ＝ 1.75 に凍結された。★満点 ＝ 300＋100×1.75 ＝ 475、
     ★他社の初期値 ＝ 475÷2 ＝ 237.5（★第34版までは 400／200 と書いていた＝W_price＝1 の値）。
     ★他社 ÷ 満点 は定義上つねに 1/2 なので、★上部バーの表示（50%）は変わらない。
     ★第1章は魅力を計算しないので、この2つを使うのは上部バーだけである（→paintTop） */
  obeyBase  :10,     // 設定30 指示に従うの基礎値
  safeBase  :50,     // 設定31 安全の基礎値
  widthBase :50,     // 設定32 答えの幅の基礎値
  ece0      :0.7,    // 設定12 事前学習後のずれ（pt）→ 自信の正しさ ＝ 100−0.7
  depthK    :0.05,   // 設定6  使う深さ ＝ 1 − ずれ×0.05（第1章では売上が無いので効かない）
  staffCap  :40,     // 設定24 雇用の上限（原典16番§5.3の錨）
  staffPay  :1,      // 設定10 1名あたり年1億円
  gate      :sh=>30+sh/2,  // 設定7  出荷の門（リスク管理を買った年は 20＋シェア/2）
  /* ★第33版（33-1）：門は「その年を失う」ではなく【シェアの上限】である。
     上限 ＝ max(0, 2×(安全 − 切片))。切片 30（リスク管理なし）／20（買った年） */
  gateBase  :30,
  cap       :(safe,risk)=>Math.max(0,2*(safe-(risk?20:30))),
},

cards:[
 {id:'big', name:'大きく作る', grp:'作る', kind:'train',
  p:1750, w:3000, ratio:1.71, pfd:3640, cost:3640, turn:3, think:40,
  tag:'【換算】実測 3,640 PF-days ×【設定】換算率',
  cite:'Brown et al. 2020, arXiv:2005.14165 §2.1 Table 2.1（1,750億／3,000億語／3,640 PF-days）'},

 {id:'data', name:'たくさん読ませる', grp:'作る', kind:'train',
  p:512, w:10247, ratio:20.0, pfd:3643, cost:3640, turn:3, think:50,
  tag:'【換算】同じ計算量になるように配り直した構成（6ND で 3,643 PF-days）',
  cite:'Hoffmann et al. 2022「Training Compute-Optimal Large Language Models」'+
       'arXiv:2203.15556（このゲームが確かめた論文32本の外です）'+
       '／Kaplan et al. 2020, arXiv:2001.08361 §2.1（計算量 ＝ 6ND）'},

 {id:'lite', name:'安く済ませる', grp:'作る', kind:'train',
  p:130, w:3000, ratio:23.1, pfd:271, cost:270, turn:1, think:20,
  tag:'【換算】6ND で 271 PF-days ×【設定】換算率',
  cite:'Kaplan et al. 2020, arXiv:2001.08361 Eq.1.1 / §2.1'},

 {id:'hire', name:'人を雇う', grp:'仕上げ', kind:'staff',
  cost:0, turn:0, per:1, cap:40,
  tag:'【実測】上限40名（5年間の合計）／【設定】1名 年1億円',
  cite:'Ouyang et al. 2022, arXiv:2203.02155 §5.3（約40名を雇い、チームを小さく保った）'},

 {id:'sft', name:'見本を読ませる', grp:'仕上げ', kind:'sft',
  cost:5, turn:1, pfd:4.9, obey:10, staff:10,
  tag:'【換算】実測 4.9 PF-days ×【設定】換算率 ／ 人員は【設定】1工程10名',
  cite:'Ouyang et al. 2022, arXiv:2203.02155 §3.1・§5.1・Table 6（見本 約1万3千件）'}
],

card(id){return this.cards.find(c=>c.id===id)},

chk(){
 const s=this.set, out=[];
 const t=(k,got,want)=>{if(got!==want)out.push({file:'ch1',key:k,got,want})};
 t('full  ＝ 300＋100×wPrice',   s.full,   300+100*s.wPrice);   // 設定33
 t('rival0 ＝ full ÷ 2',         s.rival0, s.full/2);           // 設定34
 return out;
},

/* ── 表示の整形 ───────────────────────────────────────────────────── */
words(w){return w>=10000
  ?`${Math.floor(w/10000)}兆${w%10000?(w%10000).toLocaleString()+'億':''}語`
  :`${w.toLocaleString()}億語`},
oku(n){return n.toLocaleString()},

settle(st){
 const s=this.set, c=st.pick?this.card(st.pick):null;
 const think = c?c.think:0;                                  // 設定29 基礎値
 const obey  = s.obeyBase + (st.sft?this.card('sft').obey:0); // 設定30
 const safe  = Math.max(0,Math.min(100,
               s.safeBase-(obey-s.obeyBase)-0));              // 設定31（RLVRは第4章）
 const cal   = Math.round(100-s.ece0);                        // K：100−ずれpt
 const width = s.widthBase;                                   // 設定32
 const share = s.share0;                                      // 設定13
 const gate  = s.gate(share);                                 // 設定7
 const cap   = s.cap(safe,false);                             // ★33-1 出せるシェアの上限（第1章はリスク管理なし）
 const fixed = st.staff*s.staffPay;                           // 設定10（1年目分）
 return{
  bars:[['考える力',think],['指示に従う',obey],['自信の正しさ',cal],
        ['安全',safe],['答えの幅',width]],
  think,obey,safe,cal,width,share,gate,cap,
  ship  :cap>0,                         // ★上限が0なら売れない（負け条件②）
  dev   :st.dev,                        // 開発費（実行したカードの合計）
  fixed,                                // 固定費（人員 × 年1億円）
  profit:-(st.dev+fixed),               // ★第1章は売上が立たない
  left  :s.budget-st.dev-fixed,
  staffFree:st.staff-st.assigned,       // 未配属の人員（通期枠の残り）
  rival :s.rival0,                      // 設定34
  depth :1-s.ece0*s.depthK              // 設定6（第2章以降で売上に効く）
 };
}
};
