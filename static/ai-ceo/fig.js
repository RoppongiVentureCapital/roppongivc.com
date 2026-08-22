const G={
 office:()=>`<svg viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
<defs>
 <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="#20365a"/><stop offset=".32" stop-color="#4d6f96"/>
  <stop offset=".62" stop-color="#c98f66"/><stop offset=".82" stop-color="#f0b276"/>
  <stop offset="1" stop-color="#ffd9a0"/></linearGradient>
 <radialGradient id="sun" cx=".62" cy=".78" r=".3">
  <stop offset="0" stop-color="#fff2cf" stop-opacity=".95"/>
  <stop offset="1" stop-color="#fff2cf" stop-opacity="0"/></radialGradient>
 <linearGradient id="ceil" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="#16283c"/><stop offset="1" stop-color="#3f5f80"/></linearGradient>
 <linearGradient id="flr" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="#33465c"/><stop offset=".42" stop-color="#54708e"/>
  <stop offset="1" stop-color="#1e2b3a"/></linearGradient>
 <linearGradient id="wlg" x1="0" y1="0" x2="1" y2="0">
  <stop offset="0" stop-color="#122336"/><stop offset="1" stop-color="#456385"/></linearGradient>
 <linearGradient id="wrg" x1="0" y1="0" x2="1" y2="0">
  <stop offset="0" stop-color="#456385"/><stop offset="1" stop-color="#122336"/></linearGradient>
 <linearGradient id="gl" x1="0" y1="0" x2=".8" y2="1">
  <stop offset="0" stop-color="#ffffff" stop-opacity=".28"/>
  <stop offset=".45" stop-color="#d7ecfa" stop-opacity=".05"/>
  <stop offset="1" stop-color="#ffd39a" stop-opacity=".2"/></linearGradient>
 <linearGradient id="dtop" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="#eef3f8"/><stop offset="1" stop-color="#a3b5c6"/></linearGradient>
 <radialGradient id="lamp"><stop offset="0" stop-color="#fff6dc" stop-opacity=".9"/>
  <stop offset="1" stop-color="#fff6dc" stop-opacity="0"/></radialGradient>
 <linearGradient id="ray" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="#ffdca8" stop-opacity=".28"/>
  <stop offset="1" stop-color="#ffdca8" stop-opacity="0"/></linearGradient>
 <linearGradient id="refl" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="#ffd9a0" stop-opacity=".42"/>
  <stop offset="1" stop-color="#ffd9a0" stop-opacity="0"/></linearGradient>
 <radialGradient id="vg"><stop offset=".52" stop-color="#000" stop-opacity="0"/>
  <stop offset="1" stop-color="#000" stop-opacity=".7"/></radialGradient>
</defs>

<!-- 面 -->
<polygon points="0,0 400,196 800,196 1200,0" fill="url(#ceil)"/>
<polygon points="0,700 400,472 800,472 1200,700" fill="url(#flr)"/>
<polygon points="0,0 400,196 400,472 0,700" fill="url(#wlg)"/>
<polygon points="1200,0 800,196 800,472 1200,700" fill="url(#wrg)"/>
<rect x="400" y="196" width="400" height="276" fill="url(#sky)"/>
<ellipse cx="648" cy="412" rx="120" ry="90" fill="url(#sun)"/>

<!-- 遠景ビル 2層 -->
<g fill="#3a5878" opacity=".55">
 <rect x="402" y="330" width="46" height="142"/><rect x="456" y="300" width="34" height="172"/>
 <rect x="500" y="344" width="52" height="128"/><rect x="562" y="292" width="38" height="180"/>
 <rect x="608" y="336" width="56" height="136"/><rect x="674" y="308" width="36" height="164"/>
 <rect x="718" y="346" width="50" height="126"/><rect x="776" y="316" width="24" height="156"/></g>
<g fill="#22384f" opacity=".9">
 <rect x="410" y="368" width="30" height="104"/><rect x="448" y="348" width="24" height="124"/>
 <rect x="482" y="380" width="36" height="92"/><rect x="528" y="336" width="26" height="136"/>
 <rect x="564" y="372" width="42" height="100"/><rect x="616" y="352" width="26" height="120"/>
 <rect x="652" y="384" width="38" height="88"/><rect x="700" y="342" width="28" height="130"/>
 <rect x="738" y="366" width="40" height="106"/></g>
<g fill="#ffe9c0" opacity=".7">
 <rect x="415" y="378" width="4" height="6"/><rect x="426" y="396" width="4" height="6"/>
 <rect x="453" y="358" width="4" height="6"/><rect x="462" y="382" width="4" height="6"/>
 <rect x="488" y="392" width="4" height="6"/><rect x="502" y="412" width="4" height="6"/>
 <rect x="533" y="348" width="4" height="6"/><rect x="543" y="374" width="4" height="6"/>
 <rect x="570" y="384" width="4" height="6"/><rect x="588" y="408" width="4" height="6"/>
 <rect x="621" y="364" width="4" height="6"/><rect x="631" y="390" width="4" height="6"/>
 <rect x="658" y="396" width="4" height="6"/><rect x="674" y="418" width="4" height="6"/>
 <rect x="705" y="354" width="4" height="6"/><rect x="715" y="380" width="4" height="6"/>
 <rect x="744" y="378" width="4" height="6"/><rect x="760" y="402" width="4" height="6"/></g>
<rect x="400" y="196" width="400" height="276" fill="url(#gl)"/>

<!-- 窓枠（縦桟＋横桟＋厚み） -->
<g stroke="#93aec4" fill="none">
 <rect x="400" y="196" width="400" height="276" stroke-width="9"/>
 <path d="M500 196v276M600 196v276M700 196v276" stroke-width="5.5"/>
 <path d="M400 302h400" stroke-width="4.5" opacity=".8"/></g>
<g stroke="#cfe0ee" stroke-width="1.6" opacity=".5" fill="none">
 <path d="M404 200v268M796 200v268M404 200h392"/></g>

<!-- 天井：格子＋ペンダント3本 -->
<g stroke="#7ea1c2" stroke-width="1.3" opacity=".34" fill="none">
 <path d="M0 0L400 196M1200 0L800 196M200 0L440 196M1000 0L760 196M400 0L520 196M800 0L680 196"/>
 <path d="M96 47h1008M196 96h808M290 142h620"/></g>
<g>
 <rect x="470" y="46" width="260" height="8" rx="4" fill="#fff6dc" opacity=".95"/>
 <ellipse cx="600" cy="52" rx="200" ry="30" fill="url(#lamp)"/>
 <rect x="504" y="106" width="192" height="7" rx="3.5" fill="#fff6dc" opacity=".85"/>
 <ellipse cx="600" cy="112" rx="150" ry="22" fill="url(#lamp)" opacity=".75"/>
 <rect x="532" y="156" width="136" height="6" rx="3" fill="#fff6dc" opacity=".7"/>
 <ellipse cx="600" cy="160" rx="106" ry="16" fill="url(#lamp)" opacity=".55"/></g>

<!-- 窓からの光の帯 -->
<g opacity=".85">
 <polygon points="404,472 496,472 380,700 150,700" fill="url(#ray)"/>
 <polygon points="504,472 596,472 700,700 470,700" fill="url(#ray)"/>
 <polygon points="704,472 796,472 1050,700 820,700" fill="url(#ray)"/></g>

<!-- 床：カーペット目＋反射 -->
<g stroke="#9db8cf" stroke-width="1.1" opacity=".2" fill="none">
 <path d="M0 700L400 472M1200 700L800 472M240 700L448 472M960 700L752 472M480 700L520 472M720 700L680 472"/>
 <path d="M340 520h520M270 570h660M170 630h860"/></g>
<polygon points="400,472 800,472 940,700 260,700" fill="url(#refl)"/>

<!-- 左壁：本棚 -->
<g>
 <polygon points="24,96 214,190 214,436 24,596" fill="#0f1e2e" opacity=".9"/>
 <g stroke="#5b7a99" stroke-width="2" fill="none">
  <path d="M24 96L214 190M24 596L214 436M24 96v500M214 190v246"/>
  <path d="M28 196L214 246M32 296L214 306M36 396L214 366"/></g>
 <g>
  <rect x="30" y="150" width="13" height="42" fill="#c2604f" opacity=".85"/>
  <rect x="50" y="155" width="16" height="42" fill="#4f7fa8" opacity=".85"/>
  <rect x="72" y="161" width="19" height="42" fill="#c8a04a" opacity=".85"/>
  <rect x="96" y="166" width="13" height="42" fill="#5f9f77" opacity=".85"/>
  <rect x="114" y="171" width="16" height="42" fill="#8f6fa8" opacity=".85"/>
  <rect x="136" y="177" width="19" height="42" fill="#b8825a" opacity=".85"/>
  <rect x="160" y="182" width="13" height="42" fill="#c2604f" opacity=".85"/>
  <rect x="178" y="187" width="16" height="42" fill="#4f7fa8" opacity=".85"/>
  <rect x="32" y="250" width="16" height="44" fill="#5f9f77" opacity=".85"/>
  <rect x="54" y="255" width="19" height="44" fill="#c2604f" opacity=".85"/>
  <rect x="78" y="261" width="13" height="44" fill="#8f6fa8" opacity=".85"/>
  <rect x="96" y="266" width="16" height="44" fill="#c8a04a" opacity=".85"/>
  <rect x="118" y="271" width="19" height="44" fill="#4f7fa8" opacity=".85"/>
  <rect x="142" y="277" width="13" height="44" fill="#b8825a" opacity=".85"/>
  <rect x="160" y="282" width="16" height="44" fill="#5f9f77" opacity=".85"/>
  <rect x="182" y="287" width="19" height="44" fill="#c2604f" opacity=".85"/>
  <rect x="36" y="350" width="19" height="40" fill="#c8a04a" opacity=".85"/>
  <rect x="60" y="355" width="13" height="40" fill="#4f7fa8" opacity=".85"/>
  <rect x="78" y="361" width="16" height="40" fill="#b8825a" opacity=".85"/>
  <rect x="100" y="366" width="19" height="40" fill="#5f9f77" opacity=".85"/>
  <rect x="124" y="371" width="13" height="40" fill="#c2604f" opacity=".85"/>
  <rect x="142" y="377" width="16" height="40" fill="#8f6fa8" opacity=".85"/>
  <rect x="164" y="382" width="19" height="40" fill="#c8a04a" opacity=".85"/>
 </g></g>

<!-- 右壁：ガラスパーティション -->
<g>
 <polygon points="1176,96 986,190 986,436 1176,596" fill="#7fb6d6" opacity=".13"/>
 <g stroke="#a8cde3" stroke-width="2.2" opacity=".55" fill="none">
  <path d="M1176 96L986 190M1176 596L986 436M1176 96v500M986 190v246M1112 128v420M1050 159v354"/></g>
 <polygon points="1120,150 1176,124 1176,300 1120,318" fill="#ffffff" opacity=".1"/></g>

<!-- デスク -->
<g>
 <polygon points="690,516 1172,554 1172,586 690,546" fill="url(#dtop)"/>
 <polygon points="690,546 1172,586 1172,602 690,560" fill="#798ea3"/>
 <rect x="716" y="558" width="17" height="112" fill="#8ea3b7"/>
 <rect x="1134" y="596" width="19" height="104" fill="#8ea3b7"/>
 <polygon points="782,424 916,435 916,514 782,506" fill="#16283a"/>
 <polygon points="790,432 908,443 908,507 790,499" fill="#4f8ea8" opacity=".92"/>
 <g fill="#bfe4f2" opacity=".5">
  <rect x="800" y="446" width="60" height="4"/><rect x="800" y="458" width="86" height="4"/>
  <rect x="800" y="470" width="44" height="4"/><rect x="800" y="482" width="72" height="4"/></g>
 <rect x="840" y="514" width="18" height="14" fill="#8ea3b7"/>
 <polygon points="948,442 1068,453 1068,522 948,514" fill="#16283a"/>
 <polygon points="955,449 1061,459 1061,515 955,507" fill="#4f8ea8" opacity=".78"/>
 <polygon points="742,534 838,542 828,556 730,547" fill="#2b3d50"/>
 <polygon points="748,537 832,544 824,552 738,545" fill="#d9e4ee" opacity=".35"/>
 <polygon points="700,530 766,536 758,548 692,541" fill="#eef3f8" opacity=".92"/>
 <g><ellipse cx="886" cy="536" rx="15" ry="7" fill="#e0dcd4"/>
  <rect x="871" y="522" width="30" height="15" rx="3" fill="#f0ece4"/>
  <path d="M901 526q11 4 0 9" stroke="#f0ece4" stroke-width="3" fill="none"/></g></g>

<!-- 椅子 -->
<g><polygon points="866,596 1006,612 1002,638 862,620" fill="#2b3d51"/>
 <polygon points="880,548 1000,562 996,600 876,586" fill="#334a61"/>
 <rect x="928" y="634" width="17" height="52" fill="#465b71"/>
 <ellipse cx="936" cy="690" rx="58" ry="11" fill="#293a4c"/></g>

<!-- 植物 -->
<g><polygon points="112,592 200,602 192,690 120,678" fill="#a9bccd"/>
 <polygon points="112,592 200,602 196,616 116,606" fill="#c6d6e3"/>
 <g fill="#3f7f60">
  <ellipse cx="156" cy="518" rx="16" ry="60"/>
  <ellipse cx="116" cy="542" rx="14" ry="50" transform="rotate(-24 116 542)"/>
  <ellipse cx="196" cy="542" rx="14" ry="50" transform="rotate(24 196 542)"/>
  <ellipse cx="134" cy="504" rx="11" ry="42" transform="rotate(-12 134 504)"/>
  <ellipse cx="180" cy="504" rx="11" ry="42" transform="rotate(12 180 504)"/></g>
 <g fill="#57a37c" opacity=".8">
  <ellipse cx="146" cy="490" rx="8" ry="30" transform="rotate(-8 146 490)"/>
  <ellipse cx="168" cy="490" rx="8" ry="30" transform="rotate(8 168 490)"/></g></g>

<!-- ホワイトボード（左手前壁） -->
<g><polygon points="46,238 190,310 190,404 46,352" fill="#e8eef4" opacity=".9"/>
 <polygon points="46,238 190,310 190,318 46,246" fill="#b9c8d6"/>
 <g stroke="#5b8fb0" stroke-width="2.4" fill="none" opacity=".7">
  <path d="M66 282l30 16 26-8 34 20"/><path d="M66 316h96"/><path d="M66 330h60"/></g></g>

<!-- 仕上げ -->
<rect width="1200" height="700" fill="#04101c" opacity=".30"/>
<rect width="1200" height="700" fill="url(#vg)"/>
</svg>`,

 // 人
 man:(x,y,s=1,c='#cfe0ee')=>`<g transform="translate(${x},${y}) scale(${s})">
  <circle cx="0" cy="-24" r="8.5" fill="${c}"/>
  <path d="M-9 -13 q9 -4 18 0 l3 19 h-24 z" fill="${c}"/>
  <rect x="-8" y="6" width="6" height="15" rx="3" fill="${c}"/>
  <rect x="2" y="6" width="6" height="15" rx="3" fill="${c}"/>
  <rect x="-15" y="-12" width="5.5" height="16" rx="2.7" fill="${c}"/>
  <rect x="9.5" y="-12" width="5.5" height="16" rx="2.7" fill="${c}"/></g>`,
 // 本の山
 books:(x,y,n,c='#7fb98f')=>{let s='';const w=[46,40,50,42,48];
  for(let i=0;i<n;i++)s+=`<rect x="${x-w[i%5]/2}" y="${y-i*11}" width="${w[i%5]}" height="9" rx="2"
   fill="${i%2?c:'#a9d3b5'}" stroke="rgba(0,0,0,.3)" stroke-width=".6"/>`;return s},
 box:(x,y,w,h,c='#67d3e8')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="7"
   fill="rgba(103,211,232,.10)" stroke="${c}" stroke-width="1.5"/>`,

 wire:(x,y,w,h,L,R,c,tags)=>{
 const x1=x+9,x2=x+w-9,
  ly=i=>+(y+h*(i+1)/(L+1)).toFixed(1), ry=j=>+(y+h*(j+1)/(R+1)).toFixed(1);
 let s='';
 for(let i=0;i<L;i++)for(let j=0;j<R;j++)
  s+=`<line x1="${x1}" y1="${ly(i)}" x2="${x2}" y2="${ry(j)}" stroke="${c}" stroke-width=".7" opacity=".4"/>`;
 (tags||[]).forEach(([i,j,v,t])=>{
  const px=+(x1+(x2-x1)*t).toFixed(1), py=+(ly(i)+(ry(j)-ly(i))*t).toFixed(1);
  s+=`<line x1="${x1}" y1="${ly(i)}" x2="${x2}" y2="${ry(j)}" stroke="${c}" stroke-width="1.8"/>`
   +`<rect x="${px-17}" y="${py-7}" width="34" height="13" rx="2" fill="rgba(0,0,0,.78)" stroke="${c}" stroke-width=".6"/>`
   +`<text x="${px}" y="${py+3}" fill="#dfeaf4" font-family="Oswald" font-size="9.5" text-anchor="middle">${v}</text>`});
 for(let i=0;i<L;i++)s+=`<circle cx="${x1}" cy="${ly(i)}" r="3" fill="${c}"/>`;
 for(let j=0;j<R;j++)s+=`<circle cx="${x2}" cy="${ry(j)}" r="3" fill="${c}"/>`;
 return s},
 // 札束
 money:(x,y,n,c='#f5c14e')=>{let s='';for(let i=0;i<n;i++)
  s+=`<g transform="translate(${x+i*17},${y})"><rect x="-13" y="-8" width="26" height="16" rx="2"
   fill="${c}" stroke="rgba(0,0,0,.35)" stroke-width=".7"/>
   <text x="0" y="4" font-size="10" text-anchor="middle" fill="#3b2a08" font-family="Oswald">¥</text></g>`;
  return s},
 // 吹き出し
 bub:(x,y,w,h,t,c='#5ed093')=>`<g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="7"
   fill="rgba(0,0,0,.4)" stroke="${c}" stroke-width="1.2"/>
   <text x="${x+w/2}" y="${y+h/2+4}" font-size="12" text-anchor="middle" fill="${c}">${t}</text></g>`,

 flow:(v={})=>{
  const g=x=>(x===undefined||x===null||x==='')?'─':x;
  let rows=[
   ['魅力',              g(v.appeal), '#67d3e8'],
   ['落ち着くシェア',    g(v.target), '#67d3e8'],
   ['今年のシェア',      g(v.share),  '#67d3e8'],
   ['実際に出せたシェア',g(v.sold),   '#f5c14e'],
   ['必要だった容量',    g(v.need),   '#f5c14e'],
   ['捌けた回数',        g(v.served), '#5ed093'],
   ['売上',              g(v.rev),    '#5ed093'],
  ];
  let sides=[
   [1,'他社の力',           g(v.rival), 'これと比べた取り分'],
   [3,'安全が許すシェアの上限', g(v.cap),   '安全から決まる枠'],
   [4,'一人あたりの利用量', g(v.depth), '客の数にこれを掛ける'],
   [5,'買った容量',         g(v.bought),'設備で買った分まで'],
  ];
  if(Array.isArray(v.only)){
   const keep=rows.filter(r=>v.only.includes(r[0]));
   const nameToNew={}; keep.forEach((r,i)=>nameToNew[r[0]]=i);
   const oldName=i=>rows[i]&&rows[i][0];
   // ★合流の入る段が絞り込みで消えたら、★残る段のうち元の位置に最も近い段へ寄せる
   //   （★第1章は「今年のシェア」1段に「出せるシェアの上限」を合流させたい）
   const keepOldIdx=keep.map(r=>rows.findIndex(x=>x[0]===r[0]));
   const nearest=oi=>{let best=0,bd=1e9;keepOldIdx.forEach((k,ni)=>{const d=Math.abs(k-oi);if(d<bd){bd=d;best=ni}});return best};
   const os=Array.isArray(v.onlySides)?v.onlySides:[];
   sides=sides.filter(sd=>os.includes(sd[1]))
     .map(sd=>[ (nameToNew[oldName(sd[0])]!==undefined?nameToNew[oldName(sd[0])]:nearest(sd[0])),
                sd[1],sd[2],sd[3] ]);
   rows=keep;
  }
  const BX=104, BW=336, BH=26, GAP=11, TOP=8;
  const y=i=>TOP+i*(BH+GAP);
  let s='';
  rows.forEach(([nm,val,c],i)=>{
   const yy=y(i);
   s+=`<rect x="${BX}" y="${yy}" width="${BW}" height="${BH}" rx="6"
     fill="rgba(0,0,0,.42)" stroke="${c}" stroke-width="1.1"/>`
    +`<text x="${BX+12}" y="${yy+17}" fill="#dfeaf4" font-size="11">${nm}</text>`
    +`<text x="${BX+BW-12}" y="${yy+17}" fill="${c}" font-size="12"
      font-family="Oswald" text-anchor="end">${val}</text>`;
   if(i<rows.length-1){                                  // ★下向きの矢印
    const y1=yy+BH, y2=y(i+1);
    s+=`<line x1="${BX+BW/2}" y1="${y1}" x2="${BX+BW/2}" y2="${y2-4}"
      stroke="#8a9db3" stroke-width="1.4"/>`
     +`<path d="M${BX+BW/2-4} ${y2-5} L${BX+BW/2+4} ${y2-5} L${BX+BW/2} ${y2} Z" fill="#8a9db3"/>`;
   }
  });
  sides.forEach(([i,nm,val,sub])=>{
   const yy=y(i);
   s+=`<rect x="${BX+BW+34}" y="${yy-3}" width="${200}" height="${BH+6}" rx="6"
     fill="rgba(0,0,0,.28)" stroke="#8a9db3" stroke-width=".9" stroke-dasharray="3 2"/>`
    +`<text x="${BX+BW+44}" y="${yy+8}" fill="#bcccdd" font-size="10.5">${nm}</text>`
    +`<text x="${BX+BW+44}" y="${yy+18}" fill="#8a9db3" font-size="9">${sub}</text>`
    +`<text x="${BX+BW+226}" y="${yy+29}" fill="#dfeaf4" font-size="11"
      font-family="Oswald" text-anchor="end">${val}</text>`
    +`<line x1="${BX+BW+32}" y1="${yy+BH/2}" x2="${BX+BW+8}" y2="${yy+BH/2}"
      stroke="#8a9db3" stroke-width="1.2"/>`
    +`<path d="M${BX+BW+9} ${yy+BH/2-4} L${BX+BW+9} ${yy+BH/2+4} L${BX+BW+3} ${yy+BH/2} Z" fill="#8a9db3"/>`;
  });
  return `<svg viewBox="0 0 700 ${y(rows.length-1)+BH+8}" style="width:100%">${s}</svg>`;
 },

 spread:(v={})=>{
  const A='#67d3e8', B='#f5c14e';
  const cell=(x,y,t,c)=>`<rect x="${x}" y="${y}" width="74" height="20" rx="4"
    fill="rgba(0,0,0,.42)" stroke="${c}" stroke-width="1"/>
    <text x="${x+37}" y="${y+14}" fill="${c}" font-size="11" text-anchor="middle">${t}</text>`;
  let s='';
  // ★左＝幅が狭い（★同じ答えばかり）／★右＝幅が広い（★ばらける）
  s+=`<text x="12" y="16" fill="#dfeaf4" font-size="11.5">答えの幅が【狭い】── 同じ問題を4回聞くと</text>`;
  ['答えA','答えA','答えA','答えA'].forEach((t,i)=>{s+=cell(12+i*82,26,t,A)});
  s+=`<text x="352" y="41" fill="#8a9db3" font-size="10.5">→ 何回聞いても同じ答え</text>`;
  s+=`<text x="12" y="76" fill="#dfeaf4" font-size="11.5">答えの幅が【広い】── 同じ問題を4回聞くと</text>`;
  ['答えA','答えB','答えA','答えC'].forEach((t,i)=>{s+=cell(12+i*82,86,t,B)});
  s+=`<text x="352" y="101" fill="#8a9db3" font-size="10.5">→ 聞くたびに違う答え</text>`;
  s+=`<rect x="12" y="122" width="600" height="24" rx="5" fill="rgba(103,211,232,.09)" stroke="#67d3e8" stroke-width=".9"/>`
   +`<text x="22" y="138" fill="#cdeff8" font-size="11.5">「答えの幅」＝ 同じ問題を何回も聞いたときの、答えのばらけ具合です。</text>`;
  // ★目盛り（0〜100）と、いまの自分の位置・境目
  const X=12, W=600, sc=x=>X+W*Math.max(0,Math.min(100,x))/100;
  s+=`<rect x="${X}" y="164" width="${W}" height="12" rx="3" fill="rgba(0,0,0,.5)"/>`
   +`<text x="${X}" y="192" fill="#8a9db3" font-size="10">0（ばらけない）</text>`
   +`<text x="${X+W}" y="192" fill="#8a9db3" font-size="10" text-anchor="end">100（よくばらける）</text>`;
  if(v.min!==undefined&&v.min!==null){
   s+=`<line x1="${sc(v.min)}" y1="158" x2="${sc(v.min)}" y2="180" stroke="#f5c14e" stroke-width="1.6"/>`
    +`<text x="${sc(v.min)}" y="155" fill="#f5c14e" font-size="10" text-anchor="middle">${v.label||'多数決が効く下限'} ${v.min}</text>`;
  }
  if(v.now!==undefined&&v.now!==null){
   s+=`<rect x="${X}" y="164" width="${sc(v.now)-X}" height="12" rx="3" fill="#67d3e8" opacity=".8"/>`
    +`<text x="${sc(v.now)}" y="208" fill="#cdeff8" font-size="11" text-anchor="middle"
      font-family="Oswald">いまの答えの幅 ${v.now}</text>`;
  }
  return `<svg viewBox="0 0 640 216" style="width:100%">${s}</svg>`;
 },

 think:(v={})=>{
  const X=12, W=600, sc=x=>X+W*Math.max(0,Math.min(100,x))/100;
  let s='';
  s+=`<text x="12" y="15" fill="#dfeaf4" font-size="11.5">「考える力」＝ AIが問題を解ける度合いの点数です（0〜100点）。</text>`;
  // ★門（★ここから下だと売れない）
  if(v.min!==undefined&&v.min!==null){
   s+=`<rect x="${X}" y="44" width="${sc(v.min)-X}" height="18" rx="3" fill="rgba(224,87,74,.28)"/>`
    +`<text x="${X+6}" y="57" fill="#ff9d90" font-size="10">この幅だと1円も売れません</text>`;
  }
  s+=`<rect x="${X}" y="44" width="${W}" height="18" rx="3" fill="none" stroke="#8a9db3" stroke-width=".9"/>`
   +`<text x="${X}" y="76" fill="#8a9db3" font-size="10">0点</text>`
   +`<text x="${X+W}" y="76" fill="#8a9db3" font-size="10" text-anchor="end">100点</text>`;
  if(v.min!==undefined&&v.min!==null)
   s+=`<line x1="${sc(v.min)}" y1="40" x2="${sc(v.min)}" y2="66" stroke="#ff9d90" stroke-width="1.6"/>`
    +`<text x="${sc(v.min)}" y="37" fill="#ff9d90" font-size="10" text-anchor="middle">売れる境目 ${v.min}点</text>`;
  if(v.prev!==undefined&&v.prev!==null)
   s+=`<line x1="${sc(v.prev)}" y1="44" x2="${sc(v.prev)}" y2="62" stroke="#8a9db3" stroke-width="1.4" stroke-dasharray="3 2"/>`;
  if(v.now!==undefined&&v.now!==null)
   s+=`<rect x="${X}" y="44" width="${sc(v.now)-X}" height="18" rx="3" fill="#67d3e8" opacity=".55"/>`
    +`<text x="${sc(v.now)}" y="92" fill="#cdeff8" font-size="11" text-anchor="middle"
      font-family="Oswald">いまの考える力 ${v.now}点</text>`;
  // ★倍率が挟まることを1本で出す
  const bx=(i)=>12+i*208, by=112;
  const bw=188, bh=30;
  const put=(i,nm,val,c)=>`<rect x="${bx(i)}" y="${by}" width="${bw}" height="${bh}" rx="5"
    fill="rgba(0,0,0,.42)" stroke="${c}" stroke-width="1"/>
   <text x="${bx(i)+10}" y="${by+13}" fill="#bcccdd" font-size="10">${nm}</text>
   <text x="${bx(i)+bw-10}" y="${by+25}" fill="${c}" font-size="12" font-family="Oswald"
    text-anchor="end">${val}</text>`;
  const g=x=>(x===undefined||x===null||x==='')?'─':x;
  s+=put(0,'カードの札に出ている分',g(v.add),'#f5c14e')
   +put(1,'去年の答えの幅で決まる倍率',g(v.mul),'#8a9db3')
   +put(2,'実際に増えた分（決算の数）',g(v.now2!==undefined?v.now2:v.gain),'#5ed093');
  [0,1].forEach(i=>{
   const x1=bx(i)+bw, x2=bx(i+1);
   s+=`<line x1="${x1}" y1="${by+bh/2}" x2="${x2-5}" y2="${by+bh/2}" stroke="#8a9db3" stroke-width="1.3"/>`
    +`<path d="M${x2-6} ${by+bh/2-4} L${x2-6} ${by+bh/2+4} L${x2} ${by+bh/2} Z" fill="#8a9db3"/>`;
  });
  s+=`<text x="12" y="164" fill="#8a9db3" font-size="10.5">札の数は倍率をかける前の分です。だから決算の数のほうが小さくなることがあります。</text>`;
  return `<svg viewBox="0 0 640 172" style="width:100%">${s}</svg>`;
 },

 rival:()=>{
  // ★他社の力：★初年を基準に毎年1.2倍（★02 の「毎年2割ずつ」を形で見せる。★数値は出さない）
  //   ★自分の力：★遅れずに育てた場合の伸び（★説明用の一例。★測った値ではない）
  const rival=[1,1.2,1.44,1.73,2.07];        // ★2割ずつ（★形のためだけ）
  const you  =[1.3,1.55,1.75,1.9,2.0];       // ★先行するが伸びが鈍る一例（★5年目で交差）
  const X0=54, X1=616, base=176, top=24;
  const n=rival.length, gap=(X1-X0)/(n-1);
  const maxv=2.2, sc=v=>base-(base-top)*(v/maxv);
  const xat=i=>X0+gap*i;
  let s='';
  // ★下の軸（★1年目〜5年目）
  s+=`<line x1="${X0-6}" y1="${base}" x2="${X1+6}" y2="${base}" stroke="#8a9db3" stroke-width="1"/>`;
  for(let i=0;i<n;i++)
   s+=`<text x="${xat(i)}" y="${base+16}" fill="#8a9db3" font-size="10.5" text-anchor="middle">${i+1}年目</text>`;
  // ★2本の折れ線（★他社＝赤／自分＝シアン）
  const line=(arr,c)=>{let d='';arr.forEach((v,i)=>{d+=(i?'L':'M')+xat(i)+' '+sc(v).toFixed(1)});
   return `<path d="${d}" fill="none" stroke="${c}" stroke-width="2.4"/>`
    +arr.map((v,i)=>`<circle cx="${xat(i)}" cy="${sc(v).toFixed(1)}" r="3.2" fill="${c}"/>`).join('')};
  s+=line(you,'#67d3e8')+line(rival,'#ff9d90');
  // ★線の名前（★線の脇に置く。★凡例の箱を作らない）
  s+=`<text x="${xat(0)+6}" y="${sc(you[0])-8}" fill="#67d3e8" font-size="11">あなたのAIの力</text>`
   +`<text x="${xat(0)+6}" y="${sc(rival[0])+16}" fill="#ff9d90" font-size="11">他社のAIの力</text>`;
  // ★交差する年（★5年目）に縦線と印
  const cx=xat(n-1);
  s+=`<line x1="${cx}" y1="${top-4}" x2="${cx}" y2="${base}" stroke="#f5c14e" stroke-width="1" stroke-dasharray="3 3"/>`
   +`<circle cx="${cx}" cy="${sc(you[n-1]).toFixed(1)}" r="5" fill="none" stroke="#f5c14e" stroke-width="1.8"/>`
   +`<text x="${cx}" y="${top-8}" fill="#f5c14e" font-size="11" text-anchor="end">ここで追い越される</text>`;
  // ★結論の1行（★急ぐ理由）
  s+=`<text x="${X0}" y="212" fill="#dfeaf4" font-size="11.5">他社の力は毎年強くなります。遅れると、5年目にはあなたのAIが追い越されます。</text>`
   +`<text x="${X0}" y="230" fill="#8a9db3" font-size="10.5">（棒の高さは伸び方を見せるための一例です。実際の割合は画面の上の「他社の力」に出ます）</text>`;
  return `<svg viewBox="0 0 640 240" style="width:100%">${s}</svg>`;
 },

 catchup:()=>{
  const X0=54, W=470, goal=1;        // ★落ち着く先＝1（★満タン）
  const rate=0.4, years=5;
  // ★毎年 残りの差の4割を詰める。★[到達した割合]の配列を作る（★start 年目から育て始める）
  const grow=(start)=>{let cur=0, out=[]; for(let y=0;y<years;y++){ if(y<start){out.push(0);continue;}
    cur=cur+(goal-cur)*rate; out.push(cur);} return out;};
  const A=grow(0), B=grow(1);        // ★A＝今年から／★B＝1年おくれて始める（＝A を1年右へずらした形）
  const X1=X0+W, gap=W/(years-1), xat=i=>X0+gap*i;   // ★rival と同じ横並びの座標
  const rowY=[46,112], barH=18;
  let s='';
  s+=`<text x="12" y="16" fill="#dfeaf4" font-size="11.5">始めるのが1年おくれると、その分だけ、シェアがそろう年もおくれます。</text>`;
  // ★下の軸（★1年目〜5年目。★rival と同じ形）
  s+=`<line x1="${X0-6}" y1="150" x2="${X1+6}" y2="150" stroke="#8a9db3" stroke-width="1"/>`;
  for(let i=0;i<years;i++)
   s+=`<text x="${xat(i)}" y="166" fill="#8a9db3" font-size="10.5" text-anchor="middle">${i+1}年目</text>`;
  // ★1本の帯＝その年に「落ち着く先」へどこまで来たかを、丸の大きさ（＝到達の割合）で並べる
  const draw=(arr,y,label,c)=>{
   let g=`<text x="12" y="${y+4}" fill="${c}" font-size="10.5">${label}</text>`;
   // ★落ち着く先（★満タン）の位置＝点線の目安
   g+=`<line x1="${X0}" y1="${y-14}" x2="${X1}" y2="${y-14}" stroke="#8a9db3" stroke-width=".8" stroke-dasharray="3 2"/>`;
   arr.forEach((v,i)=>{
    const cx=xat(i), r=3+9*v;       // ★丸の大きさ＝その年の到達（★大きいほど落ち着く先に近い）
    g+=`<circle cx="${cx}" cy="${y}" r="${r.toFixed(1)}" fill="${c}" opacity="${(0.30+0.6*v).toFixed(2)}"/>`;
   });
   return g;};
  s+=draw(A,rowY[0],'今年から', '#67d3e8');
  s+=draw(B,rowY[1],'1年おくれて','#f5c14e');
  s+=`<text x="${X1+8}" y="${rowY[0]-10}" fill="#8a9db3" font-size="9.5">＝落ち着く先</text>`;
  s+=`<text x="12" y="192" fill="#8a9db3" font-size="10.5">（丸が大きいほど、その年のシェアが落ち着く先に近い。この4割はこのゲームが置いた値です）</text>`;
  return `<svg viewBox="0 0 640 204" style="width:100%">${s}</svg>`;
 },

 bars:(v={})=>{
  // ★[名前, 作る前の値（★02 の凍結値）, 生まれ方の一言]
  //   ★★考える力だけ「作って生まれる」／★他4本は「作る前から値が決まっている」
  const rows=[
   ['考える力',    0,  '作ることで生まれる'],
   ['指示に従う',  10, '作る前から決まっている'],
   ['自信の正しさ',99, '作る前から決まっている'],
   ['安全',        50, '作る前から決まっている'],
   ['答えの幅',    50, '作る前から決まっている'],
  ];
  const now=Array.isArray(v.now)?v.now:null;
  const X=150, W=360, rowH=34, top=44;
  const sc=x=>W*Math.max(0,Math.min(100,x))/100;
  const y=i=>top+i*rowH;
  let s='';
  s+=`<text x="12" y="16" fill="#dfeaf4" font-size="11.5">AIの性質を5本のバー（0〜100点）で出します。作る前は、こうです。</text>`;
  // ★列の見出し
  s+=`<text x="${X}" y="34" fill="#8a9db3" font-size="10">作る前</text>`;
  if(now)s+=`<text x="${X+W+8}" y="34" fill="#67d3e8" font-size="10">いま</text>`;
  rows.forEach(([nm,before,how],i)=>{
   const yy=y(i);
   // ★名前と生まれ方
   s+=`<text x="12" y="${yy+13}" fill="#dfeaf4" font-size="11">${nm}</text>`
    +`<text x="12" y="${yy+26}" fill="#8a9db3" font-size="9">${how}</text>`;
   // ★作る前の棒（★薄い）
   s+=`<rect x="${X}" y="${yy}" width="${W}" height="9" rx="3" fill="rgba(0,0,0,.45)"/>`
    +`<rect x="${X}" y="${yy}" width="${sc(before).toFixed(1)}" height="9" rx="3" fill="#8a9db3" opacity=".7"/>`
    +`<text x="${X+W+8}" y="${yy+8}" fill="#8a9db3" font-size="9.5" font-family="Oswald">${before}</text>`;
   // ★いまの棒（★濃い。★渡されたときだけ）
   if(now){const nv=now[i];
    s+=`<rect x="${X}" y="${yy+13}" width="${W}" height="9" rx="3" fill="rgba(0,0,0,.45)"/>`
     +`<rect x="${X}" y="${yy+13}" width="${sc(nv).toFixed(1)}" height="9" rx="3" fill="#67d3e8" opacity=".85"/>`
     +`<text x="${X+W+8}" y="${yy+21}" fill="#67d3e8" font-size="9.5" font-family="Oswald">${nv}</text>`;
   }
  });
  const bottom=y(rows.length-1)+ (now?44:38);
  // ★考える力だけ0から伸びること／★指示に従う↑で安全↓ を1行で言う
  s+=`<text x="12" y="${bottom}" fill="#dfeaf4" font-size="11">考える力だけが0から始まります。他の4本は、作る前から値が決まっている性質です。</text>`;
  s+=`<text x="12" y="${bottom+17}" fill="#8a9db3" font-size="10.5">「指示に従う」を上げると、その分だけ「安全」が下がります（同じ1本のつまみの両端です）。</text>`;
  const H=bottom+30;
  return `<svg viewBox="0 0 640 ${H}" style="width:100%">${s}</svg>`;
 },

 safe:(v={})=>{
  const X=12, W=600, sc=x=>X+W*Math.max(0,Math.min(100,x))/100;
  let s='';
  s+=`<text x="12" y="15" fill="#dfeaf4" font-size="11.5">「安全」＝ あなたのAIが、害になる答えを出しにくいかどうかの点数です（0〜100点）。</text>`;
  // ★境目（★ここから下だと「出せるシェアの上限」は0%＝1円も売れない）
  if(v.ng!==undefined&&v.ng!==null){
   s+=`<rect x="${X}" y="44" width="${(sc(v.ng)-X).toFixed(1)}" height="18" rx="3" fill="rgba(224,87,74,.28)"/>`
    +`<text x="${X+6}" y="57" fill="#ff9d90" font-size="10">ここから下だと1円も売れません</text>`;
  }
  // ★0〜100 の帯（★満点＝100点を右端に置く）
  s+=`<rect x="${X}" y="44" width="${W}" height="18" rx="3" fill="none" stroke="#8a9db3" stroke-width=".9"/>`
   +`<text x="${X}" y="78" fill="#8a9db3" font-size="10">0点</text>`
   +`<text x="${X+W}" y="78" fill="#8a9db3" font-size="10" text-anchor="end">100点（満点）</text>`;
  if(v.ng!==undefined&&v.ng!==null)
   s+=`<line x1="${sc(v.ng)}" y1="40" x2="${sc(v.ng)}" y2="66" stroke="#ff9d90" stroke-width="1.6"/>`
    +`<text x="${sc(v.ng)}" y="37" fill="#ff9d90" font-size="10" text-anchor="middle">上限が0%になる境目 ${v.ng}点</text>`;
  // ★始まり（作る前）の位置（★数は呼ぶ側が渡す＝設定31 の safeBase。★fig.js に値も算術も置かない）
  //   ★★帯の直上に小さな三角の印を打ち、その上に「始まり ○点」を出す。
  //   ★★境目の字と横で近づいたときだけ、始まりの字を横へ寄せる（★字が重ならないため。
  //     ★上へ逃がすと見出しの行と重なるので、同じ段のまま横へ寄せる。★帯の端からはみ出さない側へ寄せる。
  //     ★sc() のみ。算術は足さない）
  if(v.base!==undefined&&v.base!==null){
   const bx=sc(v.base);
   const near=(v.ng!==undefined&&v.ng!==null)&&Math.abs(bx-sc(v.ng))<110;
   // ★近ければ横へ寄せる。★帯の右半分にあるものは左へ、左半分にあるものは右へ（★端からはみ出さない側へ）
   const toLeft=bx>=X+W/2;
   const tx=near?(toLeft?bx-70:bx+70):bx;
   const anc=near?(toLeft?'end':'start'):'middle';
   s+=`<path d="M${bx-4} 40 L${bx+4} 40 L${bx} 44 Z" fill="#cdeff8"/>`
    +`<text x="${tx}" y="37" fill="#cdeff8" font-size="10" text-anchor="${anc}">始まり ${v.base}点</text>`;
  }
  if(v.safe!==undefined&&v.safe!==null)
   s+=`<rect x="${X}" y="44" width="${(sc(v.safe)-X).toFixed(1)}" height="18" rx="3" fill="#67d3e8" opacity=".55"/>`
    +`<text x="${sc(v.safe)}" y="94" fill="#cdeff8" font-size="11" text-anchor="middle"
      font-family="Oswald">いまの安全 ${v.safe}点</text>`;
  // ★帯の下に「安全が許すシェアの上限 ○%」を並べる（★数字は呼ぶ側が文字列で渡す）
  //   ★★2026-08-22 画面の字を旧語「出せるシェアの上限」→【安全が許すシェアの上限】に統一（当て先＝この直下の text）
  if(v.cap!==undefined&&v.cap!==null&&v.cap!=='')
   s+=`<rect x="${X}" y="110" width="${W}" height="24" rx="5"
      fill="rgba(103,211,232,.09)" stroke="#67d3e8" stroke-width=".9"/>`
    +`<text x="${X+10}" y="126" fill="#bcccdd" font-size="11">安全が許すシェアの上限</text>`
    +`<text x="${X+W-10}" y="126" fill="#67d3e8" font-size="12" font-family="Oswald"
      text-anchor="end">${v.cap}</text>`;
  return `<svg viewBox="0 0 640 148" style="width:100%">${s}</svg>`;
 },

 calib:(v={})=>{
  const g=x=>(x===undefined||x===null||x==='')?'─':x;
  const bw=200, bh=32;
  // ★左＝起点の箱（★自信の申告のずれ）
  const LX=12, LY=54;
  // ★右＝分かれた先の2つの箱
  const RX=400, RY1=16, RY2=92;
  let s='';
  s+=`<text x="12" y="16" fill="#dfeaf4" font-size="11.5">「自信の申告のずれ」＝ AIが言った自信と、実際の正解率の差です（単位はポイント）。</text>`;
  // ★左の箱
  s+=`<rect x="${LX}" y="${LY}" width="${bw}" height="${bh}" rx="6"
     fill="rgba(0,0,0,.42)" stroke="#f5c14e" stroke-width="1.1"/>`
   +`<text x="${LX+10}" y="${LY+13}" fill="#bcccdd" font-size="10">自信の申告のずれ</text>`
   +`<text x="${LX+bw-10}" y="${LY+26}" fill="#f5c14e" font-size="13" font-family="Oswald"
     text-anchor="end">${g(v.ece)}</text>`;
  // ★上下2つの箱を描く関数
  const put=(x,y,nm,val,c)=>`<rect x="${x}" y="${y}" width="${bw}" height="${bh}" rx="6"
     fill="rgba(0,0,0,.42)" stroke="${c}" stroke-width="1.1"/>`
   +`<text x="${x+10}" y="${y+13}" fill="#bcccdd" font-size="10">${nm}</text>`
   +`<text x="${x+bw-10}" y="${y+26}" fill="${c}" font-size="13" font-family="Oswald"
     text-anchor="end">${val}</text>`;
  s+=put(RX,RY1,'自信の正しさ',g(v.calib),'#67d3e8');
  s+=put(RX,RY2,'一人あたりの利用量',g(v.depth),'#5ed093');
  // ★左の箱から右へ2本に分かれる矢印
  const sx=LX+bw, sy=LY+bh/2;
  const arrow=(ty,c,note)=>{
   const ey=ty+bh/2;
   return `<path d="M${sx} ${sy} C${(sx+RX)/2} ${sy}, ${(sx+RX)/2} ${ey}, ${RX-5} ${ey}"
      fill="none" stroke="${c}" stroke-width="1.6"/>`
    +`<path d="M${RX-6} ${ey-4} L${RX-6} ${ey+4} L${RX} ${ey} Z" fill="${c}"/>`
    +`<text x="${(sx+RX)/2}" y="${(sy+ey)/2-4}" fill="#8a9db3" font-size="9"
      text-anchor="middle">${note}</text>`;
  };
  s+=arrow(RY1,'#67d3e8','ずれが小さいほど高い');
  s+=arrow(RY2,'#5ed093','ずれが大きいほど下がる');
  // ★起点の丸
  s+=`<circle cx="${sx}" cy="${sy}" r="3.2" fill="#f5c14e"/>`;
  s+=`<text x="12" y="142" fill="#8a9db3" font-size="10.5">「一人あたりの利用量」は、客1人がその年に使う回数の倍率です。1.0 が「ふつうに使う」量です。</text>`;
  return `<svg viewBox="0 0 640 156" style="width:100%">${s}</svg>`;
 },

 trend:(v={})=>{
  // ★5本の名前。★並びは run.log の bars と同じ（→ch1.data.js 135行が正本）
  const names=['考える力','指示に従う','自信の正しさ','安全','答えの幅'];
  // ★渡された年だけを対象にする（★配列でなければ空。★1年でも途中欠けでも落ちない）
  const years=Array.isArray(v.years)?v.years:[];
  const X0=64, X1=616, base=196, top=30;
  const sc=x=>base-(base-top)*Math.max(0,Math.min(100,x))/100;   // ★0〜100点→画素
  const n=years.length;
  let s='';
  // ★縦の目盛り（0・50・100点）
  [0,50,100].forEach(t=>{
   const yy=sc(t);
   s+=`<line x1="${X0-6}" y1="${yy}" x2="${X1+6}" y2="${yy}" stroke="#8a9db3" stroke-width="${t===0?1:0.7}" opacity="${t===0?0.9:0.35}"/>`
    +`<text x="${X0-10}" y="${yy+3}" fill="#8a9db3" font-size="9.5" text-anchor="end">${t}点</text>`;
  });
  if(n>0){
   const slot=(X1-X0)/n;                       // ★1年ぶんの幅
   const groupW=slot*0.78;                     // ★群れ（5本）の幅
   const bw=groupW/5*0.78;                      // ★棒1本の幅
   const gx=i=>X0+slot*i+(slot-groupW)/2;       // ★i年目の群れの左端
   years.forEach((arr,i)=>{
    const gxx=gx(i);
    // ★年の下ラベル（★1年目〜5年目）
    s+=`<text x="${gxx+groupW/2}" y="${base+16}" fill="#8a9db3" font-size="10.5" text-anchor="middle">${i+1}年目</text>`;
    const row=Array.isArray(arr)?arr:[];
    names.forEach((nm,j)=>{
     const val=row[j];
     if(val===undefined||val===null)return;    // ★渡されなかった本は描かない
     const bx=gxx+(groupW/5)*j+((groupW/5)-bw)/2;
     const by=sc(val), bh=base-by;
     // ★5本すべて同じ色（シアン）。★見分けは【位置】と【下のラベル】で付ける（★新色を発明しない）
     s+=`<rect x="${bx.toFixed(1)}" y="${by.toFixed(1)}" width="${bw.toFixed(1)}" height="${bh.toFixed(1)}"
        rx="1.5" fill="#67d3e8" opacity="${(0.5+0.1*j).toFixed(2)}"/>`
      +`<text x="${(bx+bw/2).toFixed(1)}" y="${(by-3).toFixed(1)}" fill="#cdeff8" font-size="8"
        font-family="Oswald" text-anchor="middle">${val}</text>`;
    });
   });
  }
  // ★下に5本の名前の帯（★どの棒がどの本かを示す。★群れの中の左→右の並びと同じ順）
  //   ★★年ごとの群れの中で、左から この順（考える力→指示に従う→自信の正しさ→安全→答えの幅）に並ぶ
  const ly=base+30;
  s+=`<text x="12" y="${ly}" fill="#dfeaf4" font-size="10.5">1年ごとに、左から この順で5本が並びます：</text>`;
  names.forEach((nm,j)=>{
   const cx=64+j*116;
   s+=`<rect x="${cx}" y="${ly+8}" width="10" height="10" rx="2" fill="#67d3e8" opacity="${(0.5+0.1*j).toFixed(2)}"/>`
    +`<text x="${cx+14}" y="${ly+17}" fill="#bcccdd" font-size="9.5">${nm}</text>`;
  });
  s+=`<text x="12" y="16" fill="#dfeaf4" font-size="11.5">5本のバーが、5年でどう動いたかです（0〜100点）。</text>`;
  return `<svg viewBox="0 0 640 ${ly+30}" style="width:100%">${s}</svg>`;
 },

 equip:(v={})=>{
  const X=12, W=600, MAX=200, sc=x=>X+W*Math.max(0,Math.min(MAX,x))/MAX;  // ★0〜200%を画素へ
  const mid=sc(100);                       // ★「必要ちょうど」の位置（★帯の境目）
  const short=(v.pct!==undefined&&v.pct!==null&&v.pct<100);   // ★境目より左＝足りない
  let s='';
  s+=`<text x="12" y="15" fill="#dfeaf4" font-size="11.5">必要な容量まで買うと、その回数まで捌けます。足りない分は捌けず、余った分はその年で消えます。</text>`;
  // ★境目（★ここより左だと足りない）
  if(short) s+=`<rect x="${X}" y="44" width="${(sc(v.pct)-X).toFixed(1)}" height="18" rx="3" fill="rgba(224,87,74,.28)"/>`;
  // ★0〜必要の2倍 の帯
  s+=`<rect x="${X}" y="44" width="${W}" height="18" rx="3" fill="none" stroke="#8a9db3" stroke-width=".9"/>`
   +`<text x="${X}" y="78" fill="#8a9db3" font-size="10">0</text>`
   +`<text x="${X+W}" y="78" fill="#8a9db3" font-size="10" text-anchor="end">必要の2倍</text>`;
  // ★「必要ちょうど」の境目の線
  s+=`<line x1="${mid}" y1="40" x2="${mid}" y2="66" stroke="#5ed093" stroke-width="1.6"/>`
   +`<text x="${mid}" y="37" fill="#5ed093" font-size="10" text-anchor="middle">必要ちょうど</text>`;
  // ★買った量の塗り（★足りなければ赤／届いていれば緑）
  if(v.pct!==undefined&&v.pct!==null){
   const col=short?'#ff9d90':'#5ed093';
   s+=`<rect x="${X}" y="44" width="${(sc(v.pct)-X).toFixed(1)}" height="18" rx="3" fill="${col}" opacity=".45"/>`
    +`<text x="${sc(v.pct)}" y="92" fill="#cdeff8" font-size="11" text-anchor="middle"
      font-family="Oswald">買った量</text>`;
  }
  // ★帯の下に「必要な容量」「買った容量」「設備費」「この容量で立つ売上」を並べる（★数字は呼ぶ側が文字列で渡す）
  const rows=[
   ['必要な容量', v.need,   '#67d3e8'],
   ['買った容量', v.bought, short?'#ff9d90':'#5ed093'],
   ['設備費',     v.fee,    '#f5c14e'],
   ['この容量で立つ売上', v.rev, '#67d3e8'],
  ].filter(r=>r[1]!==undefined&&r[1]!==null&&r[1]!=='');
  let yy=110;
  rows.forEach(([nm,val,c])=>{
   s+=`<rect x="${X}" y="${yy}" width="${W}" height="22" rx="5"
      fill="rgba(103,211,232,.09)" stroke="${c}" stroke-width=".9"/>`
    +`<text x="${X+10}" y="${yy+15}" fill="#bcccdd" font-size="11">${nm}</text>`
    +`<text x="${X+W-10}" y="${yy+15}" fill="${c}" font-size="12" font-family="Oswald"
      text-anchor="end">${val}</text>`;
   yy+=27;
  });
  return `<svg viewBox="0 0 640 ${yy+4}" style="width:100%">${s}</svg>`;
 }
};

