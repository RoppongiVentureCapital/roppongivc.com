/* ══════════════════════════════════════════════════════════════════════════
   ch3.data.js ── 第3章「人の好みで整える」の数値と式（★設計役の持ち物）
   ──────────────────────────────────────────────────────────────────────────
   正本   02_数値設計.md ★第37版（1b2171d／ID記入 2f0fd4b）＝【完全凍結版】
          ／01_骨格.md（§2 章の一覧・§4 決算とスロット・§8 典拠・§9 実装の前提）
   ★中身は 02 第37版の凍結値を【写した】ものである。★新しい値は1つも作っていない
   役目   カード定義・値札・必要人員・バーの加算ポイント・第3章の決算式・出典
   ★置かないもの  解説の本文・画面の文言（ch3.html＝実装役の持ち物）／
                  ★章をまたぐ条件（→04 §11 の一覧。★土台が持つ）
   ★fetch を使わない（→01 §9・§10・04 §0）
   ──────────────────────────────────────────────────────────────────────────
   ★第3章の性質
     ・★ここで売値が登場する。★売上・運用費・魅力・シェアを計算する最初の章（→02 §1）
     ・★渡す基準は【好み訓練をやった場合にだけ盤面に出る】（→02 §4-G-1 の 30-2）
     ・★好み訓練の強さと売値は、この章で1回だけ決めて以後5年変更しない（→02 §7 の M-4 の2・3）
     ・★較正（自信の正しさ）を動かす手段はこの章の好み訓練だけである（→02 §4）
   ══════════════════════════════════════════════════════════════════════════ */

const D={

ch:3, year:3,

/* ── 設定（番号は 02 §5）───────────────────────────────────────────── */
set:{
  rate      :1,        // 設定1
  budget    :5000,     // 設定2
  rescue    :1000,     // 設定2
  turns     :4,        // 設定37
  staffCap  :40,       // 設定24 ★通期の枠（年ごとに戻らない。K-4）
  staffPay  :1,        // 設定10 1名 年1億円（雇った年から5年目まで毎年）

  /* 市場と売値（設定3a・3b・3c。★3a は第37版で凍結＝37-1） */
  market5   :3e13,     // 設定3a 5年目時点の市場の全利用量（回）＝★30兆円相当
  mktUp     :0.2,      // 設定3b 毎年 ＋20%（→年tの市場 ＝ 3a ÷ 1.2^(5−t)）
  yen1000   :{high:2000,std:1000,low:500},  // 設定3c 1,000回あたりの売値（円）
  cheap     :{high:0,  std:50,  low:100},   // 設定3c 「売値の安さ」の写像

  /* 魅力（設定4・33・34。★第35版で W_price を凍結） */
  wPrice    :1.75,     // 設定4  ★通過域 [1.5, 2.0] の線形中央
  wObey     :30,       // 設定33 ★出荷可能な最大40 − 基礎10（→02 §5-C の A-3'）
  full      :475,      // 設定33 満点 ＝ 300 ＋ 100×1.75
  rival0    :237.5,    // 設定34 他社の初期値 ＝ 満点の半分
  rivalUp   :0.2,      // 設定8  他社は毎年2割増
  follow    :0.4,      // 設定13 追従速度（目標との差の4割）
  thinkMin  :20,       // 設定5  考える力の下限（★これ未満なら魅力0）
  /* ★W_think は【毎回計算する】（設定33・§5-C の A-3）。★可動域の最大は第1〜5章の
     全カードに依存する＝【章をまたぐ】ので、★土台が計算して st.wThink で渡す。
     ★ここに写すのは 02 §5-C の O が書いている単独最大の内訳だけである。
     ★★凍結値（P1＝P2＝0.5）では可動域は【定数 80】である（→02 §5-C の A-3''）。
       ★全数列挙で上端がクリップ100 に到達することを確かめた ＝ ★目減りは上端を動かさない。
       ★だから wThink0 と C.wThink() は同じ 80 を返す（★どちらの経路でも値が一致する） */
  wThinkParts:{base20:50,rlvr:30,maj:4,cot:10,code:10,clip:100,floor:20},
  wThink0   :80,       // ★可動域（＝クリップ100 − 下限20）。★凍結値ではこれが正しい値である
  /* ★★`wThink0` は【保険】である：★土台が `wThinkParts` を渡せなかったときにだけ使う。
     ★いまの実装では C.wThink() が 80 を返すので、★この行は通らない（★消さない理由は 04 §11-13）*/

  /* バー（設定29〜32） */
  obeyBase  :10,       // 設定30
  safeBase  :50,       // 設定31 ★安全 ＝ 50 −（指示に従う−10）− 10×[RLVR]
  widthBase :50,       // 設定32
  majMin    :60,       // 設定32 多数決が効く下限（第5章で使う）
  depthK    :0.05,     // 設定6  使う深さ ＝ 1 − ずれ(pt)×0.05
  depthMin  :0.2,      // 設定6  下限（★到達不能。安全弁）
  width9    :w=>1+(w-50)/10*0.1,  // 設定9 ★次章の考える力の加算に掛かる倍率（章境界で1回確定）

  /* 門（設定7・22。★33-1 でシェアの上限になった） */
  gateBase  :30,       // リスク管理なしの切片
  gateRisk  :20,       // 買った年の切片（設定22）
  cap       :(safe,risk)=>Math.max(0,2*(safe-(risk?20:30))),

  /* 原価と設備（設定35・21・28） */
  unit      :2,        // 設定35 パラメータ100億あたり 1,000回で2円（★第31版で錨に載せた）
  equipX    :170,      // 設定21 1,000回を捌く容量あたり170円 ★パラメータ数に依存しない
  /* 設定28 の倍率（第3章には倍率カードが無いので、この章の mult は 1 である） */
},

/* ── カード（第3章。02 §4-G-1）─────────────────────────────────────
   obey  : 指示に従うへの加算（設定30）   width : 答えの幅への加算（設定32）
   ece   : 自信の申告のずれ（pt。★絶対値。設定12）  staff : 必要な人員（通期枠から引く）
   turn  : ★第2〜5章はターンで縛らない（02 設定37。→04 §11-3 の①）
   ★★tag と cite は【画面に出る文字列】である（ch3.html が C.src で描画する）。
     ★★ と、02／04 への参照と、版番号を書かない（→03 §36-0 の規約）。設計の注記はコメント側 */
cards:[
 {id:'hire', name:'人を雇う', grp:'仕上げ', kind:'staff',
  cost:0, turn:0, per:1, cap:40,
  tag:'【実測】上限40名（5年間の合計。あとで戻りません）／【設定】1名 年1億円',
  cite:'Ouyang et al. 2022, arXiv:2203.02155 §5.3（約40名を雇い、チームを小さく保った）'},

 /* ★好み訓練 ── 較正を動かす唯一の手段。★強を60億に固定する（実測から外れるため）
    ★指示に従うの加算1ポイントにつき安全−1（設定31）は settle が自動で計算する。
    ★弱10億・中30億と、ずれ 2pt／4pt は【設定】（測定された2点の間の内挿） */
 {id:'pref', name:'好みで整える', grp:'好み', kind:'choice',
  turn:null,
  opts:[
   {id:'none',   name:'やらない', cost:0,  obey:0,  staff:0,  ece:0.7,
    tag:'【設定】0円0名。自信の申告のずれは0.7ポイントのまま'},
   {id:'weak',   name:'弱',       cost:10, obey:10, staff:10, ece:2,
    tag:'【設定】10億円。測られた2点の間を割った値'},
   {id:'mid',    name:'中',       cost:30, obey:20, staff:20, ece:4,
    tag:'【設定】30億円。測られた2点の間を割った値'},
   {id:'strong', name:'強',       cost:60, obey:30, staff:30, ece:7.4,
    tag:'【換算】実測 60 PF-days ×【設定】換算率 ／'+
        '【実測】自信の申告のずれ 0.7ポイント → 7.4ポイント'}
  ],
  tag:'【設定】指示に従うが10上がるごとに、安全が10下がる ／'+
      '【実測】強くするほど、自信の申告のずれが大きくなる',
  /* ★cite の「PPO-ptx」「175B」は内部の呼び名なので落とした（2026-08-19。★§5.1 の記述は同じ） */
  cite:'Ouyang et al. 2022, arXiv:2203.02155 §5.1（最も大きいモデルで、'+
       '好み訓練にかかった計算量は 60 PF-days。'+
       '人の好みで整えるほうが、モデルを100倍大きくするより役に立ちやすい）'+
       '／§4.1・Figure 3（素 < プロンプトの工夫 < 見本 < 好み訓練 の順序。'+
       '勝率の数値は本文に無い）'+
       '／OpenAI 2023「GPT-4 Technical Report」arXiv:2303.08774 Figure 8'+
       '（ずれ 0.7ポイント → 7.4ポイント）'},

 /* ★渡す基準 ── ★好み訓練をやった場合にだけ盤面に出す（前提条件。30-2）
    ★A と C は排他ではない。真ん中が「原典と同じ設定」である（→02 §5-B の I-2）
    ★C のタグは第24版で1段下げた（測定値0件・原典の推測・原典は【欠点】として列挙） */
 {id:'basis', name:'渡す基準を選ぶ', grp:'好み', kind:'choice',
  cost:0, staff:0, turn:null, needs:'pref',
  opts:[
   {id:'A',   name:'有用性に寄せる', obey:10, width:0,
    tag:'【実測】ラベル付けでは、役に立つことを、正しさや無害さより先に置いた'},
   {id:'mid', name:'原典と同じ',     obey:0,  width:0,
    tag:'先にこれをやった研究チームと同じ設定。どちらの代償も払わず、どちらの効果も入らない'},
   {id:'C',   name:'謙虚さに寄せる', obey:-10, width:10,
    tag:'【実測（測定値ではありません）】研究チームは「答えが1つに決まる場面でも、'+
        '答えは1つではないと言って複数並べる」ことを【欠点】として挙げ、'+
        'その原因を「謙虚さを報酬したことが一因だと思われる」と書いている。'+
        'これを「答えの幅が上がる」という利益に読み替えているのは、このゲーム側の判断です'}
  ],
  tag:'【設定】0円。人に基準を渡す指示書なので、好みで整える工程が無いと選べない',
  cite:'Ouyang et al. 2022, arXiv:2203.02155 §3.4・Appendix B.2（ラベラーへの指示書）'+
       '／§5.3（最大の限界＝実世界で害に至りうる場合でも指示に従ってしまう）'+
       '／§4.3（複数の答えを並べる挙動と、その原因の推測）'},

 /* ★売値 ── ★第3章で1回だけ決め、以後5年変更しない（M-4 の2）
    ★「赤字で配る」から「安く配る」に改名した（第31版。★新しい原価では全構成が黒字） */
 {id:'price', name:'売値を決める', grp:'値付け', kind:'choice',
  cost:0, staff:0, turn:null,
  opts:[
   {id:'high', name:'高く売る', yen1000:2000, cheap:0,
    tag:'【設定】1,000回で2,000円。利幅は増えるが、選ばれにくくなる'},
   {id:'std',  name:'標準',     yen1000:1000, cheap:50,
    tag:'【設定】1,000回で1,000円（＝1回答えて1円）'},
   {id:'low',  name:'安く配る', yen1000:500,  cheap:100,
    tag:'【設定】1,000回で500円。代償は利幅が半分になること。赤字にはなりません'}
  ],
  tag:'【設定】0円。客が見るのは売値で、こちらの原価とは別である',
  cite:'【設定】（あなたの決定。論文に価格の記述はありません）'},

 /* ★設備を増やす ── ★毎年のカード（M-4 の1。前年ぶんは繰り越さない）
    ★単価170円は自由変数だったものを第35版で凍結した（通過域の対数中央）。
    ★第32版で ∝パラメータ数 を外した（設定35 と二重計上だった） */
 {id:'equip', name:'設備を増やす', grp:'設備', kind:'capacity',
  cost:0, staff:0, turn:null, x:170,
  tag:'【設定】1,000回を捌く容量あたり170円。モデルの大きさによらない。'+
      '買いすぎた分はその年で消える',
  cite:'Brown et al. 2020, arXiv:2005.14165 §6.3'+
       '（100ページ分の生成で約0.4 kW-h ＝ 数セント。使うときの費用は、作るときと桁が違う）'+
       '／単価そのものは【設定】'}
],

card(id){return this.cards.find(c=>c.id===id)},
opt(id,oid){const c=this.card(id);return c&&c.opts?c.opts.find(o=>o.id===oid):null},

/* ── chk() ── ★04 §14 の形。★0件が期待値。★★除外は →04 §14-2 */
chk(){
 const s=this.set, p=s.wThinkParts, out=[];
 const t=(k,got,want)=>{if(got!==want)out.push({file:'ch3',key:k,got,want})};
 t('wThink0 ＝ min(clip, 材料の和) − floor',
   s.wThink0, Math.min(p.clip,p.base20+p.rlvr+p.maj+p.cot+p.code)-p.floor);   // →04 §11-13
 t('full  ＝ 300＋100×wPrice',   s.full,   300+100*s.wPrice);   // 設定33
 t('rival0 ＝ full ÷ 2',         s.rival0, s.full/2);           // 設定34
 return out;
},

/* ── 表示の整形 ───────────────────────────────────────────────────── */
oku(n){return n.toLocaleString()},
yen(n){return `${Math.round(n).toLocaleString()}円`},
pct(n){return `${n.toFixed(1)}%`},

/* ── 章共通の量（★式は 02 §1。★係数は上の set が正本）───────────────── */
market(year){return this.set.market5/Math.pow(1+this.set.mktUp,5-year)},   // 設定3a・3b
rival (year){return this.set.rival0*Math.pow(1+this.set.rivalUp,year-1)},  // 設定8・34
cost1000(params){return this.set.unit*params/100},   // 設定35（params ＝ 億パラメータ）
depth (ece){return Math.max(this.set.depthMin,1-ece*this.set.depthK)},     // 設定6

/* 魅力（設定33。★項ごとに下限0。★出荷できた構成についてのみ定義する＝M-2） */
appeal(obey,think,cheap,wThink){
 const s=this.set;
 if(think<s.thinkMin) return 0;                       // 設定5 のゲート（★「未満」で発火）
 return Math.max(0,200*(obey-s.obeyBase)/s.wObey)
      + Math.max(0,100*(think-s.thinkMin)/wThink)
      + 100*s.wPrice*cheap/100;
},

/* ── 第3章の決算（02 §1・§7 の M-4）──────────────────────────────────
   st（土台が渡す状態）
     think   第2章末の考える力          obey    第2章末の指示に従う（10 or 20）
     width   第2章末の答えの幅（50）    params  第1章のパラメータ数（億）
     staff   ★通期で雇った人数の累計    prevShare 前年のシェア（%）
     pref    'none'|'weak'|'mid'|'strong'   basis 'A'|'mid'|'C'（★pref が none なら選べない）
     price   'high'|'std'|'low'         capacity その年に買った容量（回。★0 なら設備なし）
     risk    false（リスク管理は第4章）  rlvr false（RLVR は第4章）
     wThink  ★その (P1,P2) における考える力の可動域（★土台が計算して渡す）
     mul     ★設定9 の倍率（前章の答えの幅。★第3章に考える力の加算カードは無いので効かない）
     spent   前年までの累計支出                                                        */
settle(st){
 const s=this.set;
 const P=this.opt('pref',st.pref||'none');
 const B=(st.pref&&st.pref!=='none'&&st.basis)?this.opt('basis',st.basis):null;  // ★30-2
 const R=this.opt('price',st.price||'std');
 const wT=(st.wThink>0?st.wThink:s.wThink0);

 /* バー（設定29〜32。★すべて加算・0〜100でクリップ・順序依存なし＝N-2） */
 const think=Math.max(0,Math.min(100,st.think));            // ★第3章に考える力のカードは無い
 const obey =Math.max(0,Math.min(100,st.obey+P.obey+(B?B.obey:0)));
 const width=Math.max(0,Math.min(100,st.width+(B?B.width:0)));
 const safe =Math.max(0,Math.min(100,
             s.safeBase-(obey-s.obeyBase)-10*(st.rlvr?1:0)));
 const ece  =P.ece;                                          // 設定12（★絶対値）
 const cal  =Math.round(100-ece);                            // K：100−ずれpt

 /* シェア（設定13・33-1） */
 const rival =this.rival(this.year);
 const appeal=this.appeal(obey,think,R.cheap,wT);
 const target=Math.max(0,Math.min(100,appeal/(appeal+rival)*100));
 const share =Math.max(0,Math.min(100,
              (st.prevShare||0)+(target-(st.prevShare||0))*s.follow));
 const cap   =s.cap(safe,!!st.risk);                         // ★出せるシェアの上限
 const sold  =Math.min(share,cap);

 /* 売上・運用費（設定3a・3c・35・6・21。★第3章の倍率は1＝倍率カードが無い） */
 const mult  =1;                                             // 設定28（→第4・5章で増える）
 const depth =this.depth(ece);
 const users =this.market(this.year)*sold/100;               // 利用者（回）
 const use   =users*depth;                                    // 実際の利用回数
 /* ★容量に当たると捌けない（F-1）。★★捌けるのは【その年に買った容量まで】である。
    ★正本は 02 §7 の M-4 の1：「★毎年その年に捌く利用量を選び、設定21 で費用を払う。
      ★前年ぶんは繰り越さない」＝★★買わない年に捌ける量は 0 である（★値は作っていない）。
    ★★2026-08-20 まで `capacity>0` のときだけ上限を当てていた（＝買わない年は上限なし）。
      ★その形だと買うほど損になり、★02 §4-F-1 の T21「買わない → シェアが天井に当たる」と逆だった
      （→04 §15） */
 const served=Math.min(use,st.capacity||0);
 const revY  =served*R.yen1000/1000;                          // 売上（円）
 const opY   =served*this.cost1000(st.params)/1000*mult;      // 運用費（円）
 const eqY   =(st.capacity||0)*s.equipX/1000*mult;            // 設備費（円。★買った分を払う）

 /* 金額（億円。★開発費はその年に一括で払う＝M-4 の4） */
 const rev   =revY/1e8, op=opY/1e8, equip=eqY/1e8;
 const dev   =P.cost;                                         // ★渡す基準・売値は0円
 const fixed =st.staff*s.staffPay+equip;                      // ★リスク管理は第4章から
 const profit=rev-op-dev-fixed;

 return{
  bars:[['考える力',think],['指示に従う',obey],['自信の正しさ',cal],
        ['安全',safe],['答えの幅',width]],
  think,obey,safe,cal,width,ece,depth,
  appeal,rival,target,share,cap,sold,
  ship:cap>0,                       // ★上限0なら売上0（負け条件②）
  capBound:use>(st.capacity||0),   // ★容量に当たったか（→シェアが目標に追従できない）
  users,use,served,
  gross:(R.yen1000-this.cost1000(st.params)),  // 1,000回あたりの粗利（円。→T19・M-3）
  rev,op,equip,dev,fixed,profit,
  left:s.budget-(st.spent||0)-dev-fixed+rev-op,
  staffFree:st.staff-(st.assigned||0),
  nextMul:s.width9(width)          // ★設定9：この幅が【次章】の考える力の加算に掛かる
 };
}
};
