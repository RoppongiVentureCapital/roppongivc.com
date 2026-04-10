var PatternEngine=(function(){
var SHAPES=['circle','triangle','square','diamond','pentagon'];
var COLORS=['#000','#2563eb','#dc2626','#059669','#d97706'];
var SIZES=[14,22,30];
var SHAPE_NAMES=['丸','三角','四角','ひし形','五角形'];
var COLOR_NAMES=['黒','青','赤','緑','橙'];
var SIZE_NAMES=['小','中','大'];

function drawShape(ctx,shape,x,y,size,color){
  ctx.fillStyle=color;ctx.beginPath();
  if(shape==='circle'){ctx.arc(x,y,size,0,Math.PI*2);ctx.fill();}
  else if(shape==='triangle'){ctx.moveTo(x,y-size);ctx.lineTo(x-size*0.87,y+size*0.5);ctx.lineTo(x+size*0.87,y+size*0.5);ctx.closePath();ctx.fill();}
  else if(shape==='square'){ctx.fillRect(x-size*0.8,y-size*0.8,size*1.6,size*1.6);}
  else if(shape==='diamond'){ctx.moveTo(x,y-size);ctx.lineTo(x+size*0.7,y);ctx.lineTo(x,y+size);ctx.lineTo(x-size*0.7,y);ctx.closePath();ctx.fill();}
  else if(shape==='pentagon'){for(var i=0;i<5;i++){var a=Math.PI*2*i/5-Math.PI/2;if(i===0)ctx.moveTo(x+Math.cos(a)*size,y+Math.sin(a)*size);else ctx.lineTo(x+Math.cos(a)*size,y+Math.sin(a)*size);}ctx.closePath();ctx.fill();}
}
function drawCell(canvas,items){
  var ctx=canvas.getContext('2d'),w=canvas.width,h=canvas.height;ctx.clearRect(0,0,w,h);
  if(!items||!items.length)return;
  var pos=items.length===1?[[w/2,h/2]]:items.length===2?[[w*0.35,h/2],[w*0.65,h/2]]:[[w/2,h*0.3],[w*0.3,h*0.7],[w*0.7,h*0.7]];
  for(var i=0;i<items.length;i++)drawShape(ctx,SHAPES[items[i].shape],pos[i][0],pos[i][1],SIZES[items[i].size],COLORS[items[i].color]);
}
function cellToItems(c){var items=[];for(var i=0;i<(c.count||1);i++)items.push({shape:c.shape,color:c.color,size:c.size});return items;}

var PERMS=[[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]];
function rp(){return PERMS[Math.floor(Math.random()*6)];}

function makeGrid(rules){
  var grid=[];for(var r=0;r<3;r++){grid[r]=[];for(var c=0;c<3;c++)grid[r][c]={shape:0,color:0,size:1,count:1};}
  for(var ri=0;ri<rules.length;ri++){
    var rule=rules[ri],attr=rule.attr,type=rule.type,p=rp();
    if(type==='row_seq'){for(var r=0;r<3;r++)for(var c=0;c<3;c++)grid[r][c][attr]=p[c];}
    else if(type==='col_seq'){for(var r=0;r<3;r++)for(var c=0;c<3;c++)grid[r][c][attr]=p[r];}
    else if(type==='dist'){for(var r=0;r<3;r++)for(var c=0;c<3;c++)grid[r][c][attr]=p[(c+r)%3];}
    else if(type==='const_row'){for(var r=0;r<3;r++)for(var c=0;c<3;c++)grid[r][c][attr]=p[r];}
    else if(type==='const_col'){for(var r=0;r<3;r++)for(var c=0;c<3;c++)grid[r][c][attr]=p[c];}
    else if(type==='xor'){var rps=[rp(),rp(),rp()];for(var r=0;r<3;r++){grid[r][0][attr]=rps[r][0];grid[r][1][attr]=rps[r][1];grid[r][2][attr]=(rps[r][0]+rps[r][1])%3;}}
  }
  return grid;
}

function generateDistractors(answer,count){
  var ds=[],seen={},ak=answer.shape+','+answer.color+','+answer.size;seen[ak]=true;
  for(var att=0;att<60&&ds.length<count;att++){
    var d={shape:answer.shape,color:answer.color,size:answer.size,count:1};
    var attrs=['shape','color','size'];
    var nc=1+Math.floor(Math.random()*2);
    for(var i=0;i<nc;i++)d[attrs[Math.floor(Math.random()*3)]]=Math.floor(Math.random()*3);
    var k=d.shape+','+d.color+','+d.size;
    if(!seen[k]){seen[k]=true;ds.push(d);}
  }
  while(ds.length<count){var d={shape:Math.floor(Math.random()*3),color:Math.floor(Math.random()*3),size:Math.floor(Math.random()*3),count:1};
    var k=d.shape+','+d.color+','+d.size;if(!seen[k]){seen[k]=true;ds.push(d);}}
  return ds.slice(0,count);
}

// Rule explanation generator
function explainRules(rules){
  var parts=[];
  for(var i=0;i<rules.length;i++){
    var r=rules[i],an=r.attr==='shape'?'形':r.attr==='color'?'色':'サイズ';
    if(r.type==='row_seq')parts.push(an+'が各行で左から右に変化する（行ごとに同じパターン）');
    else if(r.type==='col_seq')parts.push(an+'が各列で上から下に変化する（列ごとに同じパターン）');
    else if(r.type==='dist')parts.push(an+'が各行・各列に1回ずつ出現する（ラテン方陣）');
    else if(r.type==='const_row')parts.push(an+'が各行で統一されている（行ごとに異なる）');
    else if(r.type==='const_col')parts.push(an+'が各列で統一されている（列ごとに異なる）');
    else if(r.type==='xor')parts.push(an+'が各行で「1番目と2番目の組み合わせ → 3番目」の法則に従う');
  }
  return parts.join('。\n')+'。';
}

var LEVELS=[
  {rules:[{attr:'shape',type:'row_seq'}]},
  {rules:[{attr:'color',type:'col_seq'}]},
  {rules:[{attr:'shape',type:'row_seq'},{attr:'color',type:'const_row'}]},
  {rules:[{attr:'shape',type:'const_row'},{attr:'color',type:'col_seq'}]},
  {rules:[{attr:'shape',type:'dist'}]},
  {rules:[{attr:'shape',type:'dist'},{attr:'color',type:'const_row'}]},
  {rules:[{attr:'shape',type:'dist'},{attr:'color',type:'dist'}]},
  {rules:[{attr:'shape',type:'dist'},{attr:'color',type:'col_seq'},{attr:'size',type:'const_row'}]},
  {rules:[{attr:'shape',type:'xor'},{attr:'color',type:'dist'}]},
  {rules:[{attr:'shape',type:'xor'},{attr:'color',type:'xor'},{attr:'size',type:'dist'}]}
];

function generate(level){
  var li=Math.min(level-1,LEVELS.length-1),def=LEVELS[li];
  var grid=makeGrid(def.rules),answer=grid[2][2];
  var ds=generateDistractors(answer,5),opts=ds.slice();
  var ai=Math.floor(Math.random()*6);opts.splice(ai,0,answer);
  return{grid:grid,answer:answer,answerIndex:ai,options:opts,level:level,rules:def.rules,explanation:explainRules(def.rules)};
}

return{drawCell:drawCell,cellToItems:cellToItems,generate:generate};
})();
