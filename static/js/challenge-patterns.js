var PatternEngine=(function(){
// Drawing
var SHAPES=['circle','triangle','square','diamond','cross'];
var COLORS=['#000','#2563eb','#dc2626'];
var SIZES=[12,20,28];

function drawShape(ctx,shape,x,y,size,color){
  ctx.fillStyle=color;ctx.strokeStyle=color;ctx.lineWidth=2;ctx.beginPath();
  if(shape==='circle'){ctx.arc(x,y,size,0,Math.PI*2);ctx.fill();}
  else if(shape==='triangle'){ctx.moveTo(x,y-size);ctx.lineTo(x-size*0.87,y+size*0.5);ctx.lineTo(x+size*0.87,y+size*0.5);ctx.closePath();ctx.fill();}
  else if(shape==='square'){ctx.fillRect(x-size*0.75,y-size*0.75,size*1.5,size*1.5);}
  else if(shape==='diamond'){ctx.moveTo(x,y-size);ctx.lineTo(x+size*0.7,y);ctx.lineTo(x,y+size);ctx.lineTo(x-size*0.7,y);ctx.closePath();ctx.fill();}
  else if(shape==='cross'){var w=size*0.3;ctx.fillRect(x-w,y-size,w*2,size*2);ctx.fillRect(x-size,y-w,size*2,w*2);}
}

function drawCell(canvas,items){
  var ctx=canvas.getContext('2d'),w=canvas.width,h=canvas.height;ctx.clearRect(0,0,w,h);
  if(!items||!items.length)return;
  var n=items.length;
  var pos=n===1?[[w/2,h/2]]:n===2?[[w*0.33,h/2],[w*0.67,h/2]]:n===3?[[w/2,h*0.28],[w*0.3,h*0.7],[w*0.7,h*0.7]]:[[w*0.3,h*0.3],[w*0.7,h*0.3],[w*0.3,h*0.7],[w*0.7,h*0.7]];
  for(var i=0;i<n;i++){var it=items[i],sz=n>=3?Math.min(SIZES[it.size||1],16):SIZES[it.size||1];drawShape(ctx,SHAPES[it.shape],pos[i][0],pos[i][1],sz,COLORS[it.color||0]);}
}

function cellToItems(c){return c.elements?c.elements.slice():[];}

// Helper to make cell
function E(s,c,sz){return{shape:s,color:c||0,size:sz===undefined?1:sz};}
function C(){return{elements:Array.prototype.slice.call(arguments)};}

// ===== 10 FIXED PROBLEMS =====
var PROBLEMS=[

// Q1: Shape distribution (easy)
{grid:[
  [C(E(0)),C(E(1)),C(E(2))],
  [C(E(1)),C(E(2)),C(E(0))],
  [C(E(2)),C(E(0)),null]
],
answer:C(E(1)),
options:[C(E(0)),C(E(2)),C(E(1)),C(E(3)),C(E(4)),C(E(1,1))],
answerIndex:2,
explanation:'各行・各列に丸・三角・四角が1つずつ入る。3行目に三角がない。3列目にも三角がない。よって右下は三角。'},

// Q2: Size progression (easy)
{grid:[
  [C(E(0,0,0)),C(E(0,0,1)),C(E(0,0,2))],
  [C(E(1,1,0)),C(E(1,1,1)),C(E(1,1,2))],
  [C(E(2,2,0)),C(E(2,2,1)),null]
],
answer:C(E(2,2,2)),
options:[C(E(2,2,0)),C(E(2,2,1)),C(E(2,2,2)),C(E(0,2,2)),C(E(1,2,2)),C(E(2,0,2))],
answerIndex:2,
explanation:'各行で同じ形が小→中→大と大きくなる。3行目は赤い四角が小→中と来ているので、右下は大きい赤い四角。'},

// Q3: Shape + Color distribution (medium)
{grid:[
  [C(E(0,0)),C(E(1,2)),C(E(2,1))],
  [C(E(1,1)),C(E(2,0)),C(E(0,2))],
  [C(E(2,2)),C(E(0,1)),null]
],
answer:C(E(1,0)),
options:[C(E(1,1)),C(E(1,2)),C(E(0,0)),C(E(2,0)),C(E(1,0)),C(E(3,0))],
answerIndex:4,
explanation:'形（丸・三角・四角）と色（黒・青・赤）がそれぞれ各行・各列に1つずつ入る。3行目に三角がなく、3列目にも三角がない→形は三角。3行目に黒がなく、3列目にも黒がない→色は黒。'},

// Q4: Element count progression (medium)
{grid:[
  [C(E(0,0)),C(E(0,0),E(1,0)),C(E(0,0),E(1,0),E(2,0))],
  [C(E(3,1)),C(E(3,1),E(4,1)),C(E(3,1),E(4,1),E(0,1))],
  [C(E(1,2)),C(E(1,2),E(2,2)),null]
],
answer:C(E(1,2),E(2,2),E(3,2)),
options:[C(E(1,2),E(2,2)),C(E(1,2),E(2,2),E(3,2)),C(E(1,2),E(2,2),E(0,2)),C(E(1,2),E(2,2),E(4,2)),C(E(1,2),E(3,2)),C(E(2,2),E(3,2))],
answerIndex:1,
explanation:'各行で左から右に図形が1つずつ増える。3行目は三角→三角+四角と来ている。各行で3番目に追加される図形を見ると、1行目は四角、2行目は丸。3行目で新しく追加されるのはひし形。'},

// Q5: Subtraction (medium)
{grid:[
  [C(E(0,0),E(1,0),E(2,0)),C(E(0,0),E(1,0)),C(E(0,0))],
  [C(E(3,1),E(4,1),E(0,1)),C(E(3,1),E(4,1)),C(E(3,1))],
  [C(E(1,2),E(2,2),E(3,2)),C(E(1,2),E(2,2)),null]
],
answer:C(E(1,2)),
options:[C(E(1,2)),C(E(2,2)),C(E(3,2)),C(E(1,2),E(2,2)),C(E(1,0)),C(E(1,2),E(3,2))],
answerIndex:0,
explanation:'各行で右に行くほど図形が1つずつ減る。残るのは各行の最初の図形。3行目の最初は三角なので、右下は赤い三角1つ。'},

// Q6: Column-consistent addition (medium-hard)
{grid:[
  [C(E(0,0)),C(E(0,0),E(1,0)),C(E(0,0),E(1,0),E(2,0))],
  [C(E(0,1)),C(E(0,1),E(1,1)),C(E(0,1),E(1,1),E(2,1))],
  [C(E(0,2)),C(E(0,2),E(1,2)),null]
],
answer:C(E(0,2),E(1,2),E(2,2)),
options:[C(E(0,2),E(1,2),E(2,2)),C(E(0,2),E(1,2)),C(E(0,2),E(1,2),E(3,2)),C(E(0,2),E(2,2)),C(E(1,2),E(2,2)),C(E(0,2),E(1,2),E(2,0))],
answerIndex:0,
explanation:'各行で図形が1つずつ増える。さらに列方向を見ると、2列目で追加されるのは常に三角、3列目で追加されるのは常に四角。色は行ごとに統一。よって右下は赤い丸+三角+四角。'},

// Q7: Addition + color varies by position (hard)
{grid:[
  [C(E(0,0)),C(E(0,0),E(1,1)),C(E(0,0),E(1,1),E(2,2))],
  [C(E(3,1)),C(E(3,1),E(4,2)),C(E(3,1),E(4,2),E(0,0))],
  [C(E(1,2)),C(E(1,2),E(2,0)),null]
],
answer:C(E(1,2),E(2,0),E(3,1)),
options:[C(E(1,2),E(2,0),E(3,1)),C(E(1,2),E(2,0),E(3,0)),C(E(1,2),E(2,0),E(0,1)),C(E(1,2),E(2,0)),C(E(1,2),E(2,0),E(3,2)),C(E(1,2),E(3,1))],
answerIndex:0,
explanation:'各行で図形が1つずつ増える。追加される図形の色に注目：2列目で追加される色は行ごとに異なり（青→赤→黒）、3列目で追加される色も行ごとに異なる（赤→黒→青）。形は各行で新しい形が追加される。'},

// Q8: Shape+Color+Size all distributed (hard)
{grid:[
  [C(E(0,1,2)),C(E(1,0,1)),C(E(2,2,0))],
  [C(E(2,0,0)),C(E(0,2,2)),C(E(1,1,1))],
  [C(E(1,2,1)),C(E(2,1,0)),null]
],
answer:C(E(0,0,2)),
options:[C(E(0,0,2)),C(E(0,0,1)),C(E(0,0,0)),C(E(0,2,2)),C(E(1,0,2)),C(E(2,0,2))],
answerIndex:0,
explanation:'形・色・サイズの3つが全て、各行・各列に1つずつ入る。3行目に丸がない＋3列目に丸がない→形は丸。3行目に黒がない＋3列目に黒がない→色は黒。3行目に大がない＋3列目に大がない→サイズは大。'},

// Q9: Intersection (hard)
{grid:[
  [C(E(0,0),E(1,0),E(2,0)),C(E(1,0),E(2,0),E(3,0)),C(E(1,0),E(2,0))],
  [C(E(3,1),E(4,1),E(0,1)),C(E(4,1),E(0,1),E(1,1)),C(E(4,1),E(0,1))],
  [C(E(2,2),E(3,2),E(4,2)),C(E(3,2),E(4,2),E(0,2)),null]
],
answer:C(E(3,2),E(4,2)),
options:[C(E(3,2),E(4,2)),C(E(2,2),E(3,2),E(4,2)),C(E(3,2)),C(E(4,2)),C(E(3,2),E(4,2),E(0,2)),C(E(2,2),E(4,2))],
answerIndex:0,
explanation:'各行の3番目のセルには、1番目と2番目の両方に共通する図形だけが入る。1行目：{丸,三角,四角}∩{三角,四角,ひし形}＝{三角,四角}。同じルールで3行目：{四角,ひし形,十字}∩{ひし形,十字,丸}＝{ひし形,十字}。'},

// Q10: Complex — shape+color distributed + size progression (hardest)
{grid:[
  [C(E(0,0,0)),C(E(1,1,1)),C(E(2,2,2))],
  [C(E(2,1,0)),C(E(0,2,1)),C(E(1,0,2))],
  [C(E(1,2,0)),C(E(2,0,1)),null]
],
answer:C(E(0,1,2)),
options:[C(E(0,1,2)),C(E(0,1,1)),C(E(0,1,0)),C(E(0,2,2)),C(E(0,0,2)),C(E(1,1,2))],
answerIndex:0,
explanation:'3つの属性が全て独立に各行・各列で分配されている。形：3行目に丸がない＋3列目に丸がない→丸。色：3行目に青がない＋3列目に青がない→青。サイズ：各行で小→中→大と進む＋3列目は全て大→大。よって右下は青い大きな丸。'}
];

function generate(level){
  var idx=Math.min(level-1,PROBLEMS.length-1);
  var p=PROBLEMS[idx];
  // Deep copy grid with answer filled in
  var grid=[];
  for(var r=0;r<3;r++){grid[r]=[];for(var c=0;c<3;c++){
    if(p.grid[r][c]===null)grid[r][c]=p.answer;
    else grid[r][c]={elements:p.grid[r][c].elements.map(function(e){return{shape:e.shape,color:e.color||0,size:e.size===undefined?1:e.size};})};
  }}
  return{grid:grid,answer:p.answer,answerIndex:p.answerIndex,options:p.options,level:level,explanation:p.explanation};
}

return{drawCell:drawCell,cellToItems:cellToItems,generate:generate};
})();
