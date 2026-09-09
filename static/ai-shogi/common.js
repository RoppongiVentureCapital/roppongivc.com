
/* 🔴 2026-09-02 A（統括）：★★上のバーに【エンブレム】と大きいタイトルを入れる
   ★山田様「1番上の 製品名… がなんでこんなにチープなんだ。
     ここにサムネというか、ちゃんとわかりやすいゲームのアイコンかエンブレムかなんかと、
     大きくタイトルを書いてほしい」（2026-09-02）
   ★★将棋の駒（五角形）の中に【AI】。★画像ファイルを使わない SVG なので 23ページで軽い
   ★★★製品名は【Deep Black Box】（★2026-09-08 に「AIの詰将棋」から変更）。
     ✗「詰めKaggle」は使えない（★Kaggle が Google のブランド）
     ★★本文中の「詰将棋」アナロジーは当日の議論の語なので残す（★読者に見える場所には0件） */
/* 🔴 2026-09-08 A：★★エンブレムの中身を1か所にまとめた（★drawTop と drawCta で共有）
   ★★2つに分かれると片方だけ直して食い違うので、★必ずここだけを直すこと */
var EMBLEM =
      '<path d="M8 19.4 L22 13.4 L36 19.4 L36 21.4 L22 27.4 L8 21.4 Z" fill="#9b9b9b"/>'
    + '<g transform="translate(22,19.4) matrix(0.9191,0.3939,-0.9191,0.3939,0,0)">'
    +   '<text x="0" y="3.37" text-anchor="middle" font-size="9.5" font-weight="600"'
    +   ' font-family="Avenir Next" fill="#151515" letter-spacing=".4">AI</text>'
    + '</g>'
    + '<path d="M8 22 L8 34 L22 40 L36 34 L36 22 L22 28 Z" fill="#151515"/>'
    + '<g stroke="#019949" stroke-width="0.5" fill="#019949" stroke-linecap="round">'
    +   '<line x1="11" y1="26.69" x2="22" y2="30.80"/><line x1="11" y1="26.69" x2="22" y2="34.00"/>'
    +   '<line x1="11" y1="26.69" x2="22" y2="37.20"/><line x1="11" y1="31.89" x2="22" y2="30.80"/>'
    +   '<line x1="11" y1="31.89" x2="22" y2="34.00"/><line x1="11" y1="31.89" x2="22" y2="37.20"/>'
    +   '<line x1="22" y1="30.80" x2="33" y2="26.69"/><line x1="22" y1="30.80" x2="33" y2="31.89"/>'
    +   '<line x1="22" y1="34.00" x2="33" y2="26.69"/><line x1="22" y1="34.00" x2="33" y2="31.89"/>'
    +   '<line x1="22" y1="37.20" x2="33" y2="26.69"/><line x1="22" y1="37.20" x2="33" y2="31.89"/>'
    +   '<circle cx="11" cy="26.69" r="0.85"/><circle cx="11" cy="31.89" r="0.85"/>'
    +   '<circle cx="22" cy="30.80" r="0.85"/><circle cx="22" cy="34.00" r="0.85"/>'
    +   '<circle cx="22" cy="37.20" r="0.85"/><circle cx="33" cy="26.69" r="0.85"/>'
    +   '<circle cx="33" cy="31.89" r="0.85"/>'
    + '</g>';

function drawTop(){
  var box = document.querySelector('.top .in'); if (!box) return;
  var tag = box.querySelector('.tag');
  var sub = tag ? tag.innerHTML : '';
  /* 🔴🔴🔴 2026-09-08 A：★★★製品名を「AIの詰将棋」→【Deep Black Box】に変えた
     ★★出所：記事側セッションからの連絡（★記事側は commit c6c509a で反映済み）
       旧  AIの詰将棋 ／ 将棋の詰将棋のように、AIの中身を1問ずつ切り出しました。全21問。
       新  Deep Black Box ／ AIのブラックボックスを、1問ずつ開けて手で動かす。全21問。
     ★★エンブレムも差し替えた ── ★将棋の駒（五角形＋AI）を廃止し、
       ★★蓋の開いた黒い箱＋中のニューラルネットにした。
       ★★★出どころ roppongivc.com/static/img/agora/r1/emblem-dbb.svg を【1バイトも変えずに写した】
     ★幾何（★勝手に動かさないこと。★動かすなら再計算する）── ★記事側の SVG のコメントより
       箱  M8 22 L8 34 L22 40 L36 34 L36 22 L22 28 Z（★口の傾き 6/14）
       蓋  厚みのある菱形を1.4下げ、白い隙間を0.6pxにしてある
       AI  蓋の上面に、面内の軸に沿って寝かせている（matrix・Avenir Next 9.5・右下へ流れる）
       網  2:3:2 ＝ 問9と同じ構成（★重み 2×3＋3×2、辺12本）
           ★各層の中心を「箱の口から6.0px下」に置いてあるので左右が高く中央が 4.71px 低い。
             ★これは箱の口の傾きと同じ比率。★★左右は必ず同じ高さ
       検算 全ノードが箱の輪郭から半径0.85ぶん内側にあることを記事側が確認済み
     ★★★パス /ai-shogi/ とファイル名は【据え置き】（★変えると相互リンクが全部変わる）
     ★★本文中の「詰将棋」というアナロジーと「詰めKaggle」は当日の議論の語なので残す。
       ★ゲーム側では どちらも【コメントの中だけ】＝読者には0件（★実測） */
  var inner =
    '<svg class="em" viewBox="0 0 44 44" role="img" aria-label="Deep Black Box">' + EMBLEM
    + '</svg>'
    + '<span class="ti"><b class="nm">Deep Black Box</b>'
    + '<span class="tag">' + sub + '</span></span>';
  /* 🔴 2026-09-04 A：★★上のバー一帯を【はじめのページへのリンク】にする（★山田様の指定）
     ★「問題のところでもどこでも、1番上のアイコンとかタイトル名とか一帯をクリックすると
       トップページ（はじめのページ）に行けるように」
     ★★はじめのページ自身では包まない ── ★自分に飛ぶリンクを置かないため。
       ★判定は【ファイル名】で行う（★末尾が / のときも index.html とみなす）
     ★★★href は index.html（★相対）── ★絶対パス（/…）は禁止（→ A105 の検査⑵）
     ★見た目は包む前と同じ（★色を継ぐ・下線なし）。→ common.css の .top .in>.home */
  var here = location.pathname.split('/').pop() || 'index.html';
  if (here === 'index.html') { box.innerHTML = inner; return; }
  box.innerHTML = '<a class="home" href="index.html" aria-label="Deep Black Box はじめのページへ">'
                + inner + '</a>';
}

/* ══════════════════════════════════════════════════════════════════════════
   🔴🔴🔴 2026-09-08 A【新設】★★「はじめる」の枠 ── ★記事の CTA と同じ形
   ★★★山田様の指定（2026-09-08）「トップのここさ、記事の今1番上のほうにある
     Deep Black Box ／ AIのブラックボックスを、1問ずつ開けて手で動かす。全21問。／
     はじめる に変えて」「1番上と一緒のはじめるインターフェイスと同じのを使って」
   ★★index の ① と ⑤ の2か所で呼ぶ（★同じ関数なので必ず同じ見た目になる）
   ★エンブレムは drawTop と同じ EMBLEM を使い回す（★食い違いを作らない）
   ══════════════════════════════════════════════════════════════════════════ */
function drawCta(id) {
  var h = document.getElementById(id); if (!h) return;
  h.innerHTML =
    '<div class="hd">'
  +   '<svg class="em2" viewBox="0 0 44 44" role="img" aria-label="Deep Black Box">' + EMBLEM + '</svg>'
  +   '<div class="ti2"><div class="nm3">Deep Black Box</div>'
  +     '<p class="sb2">AIのブラックボックスを、1問ずつ開けて手で動かす。全21問。</p></div>'
  + '</div>'
  + '<a class="btn" href="q01.html">はじめる</a>';
}
/* ══════════════════════════════════════════════════════════════════════════
   Deep Black Box ── common.js（23ページで共有）
   🔴 2026-09-02 1問1ページ担当が新設
   ──────────────────────────────────────────────────────────────────────────
   ⑴ 会話を描く drawCV（話者名・吹き出し・★"f" 行の図）／登場人物 drawCast
   ⑵ 進み具合の帯（全21問）drawProg ＋ 章の表示 drawChap ＋ 戻る/次へ drawNav   ★新設
   ⑶ 「いま どこの話か」の入れ子図 drawNest（★02 の CV から移した）              ★新設
   ⑷ 小道具 $ / show / R3 / R1 / mark / gauge / T / JP / BOX / QT〜QARW
   ──────────────────────────────────────────────────────────────────────────
   ★★★⑷ は tsume-03-train-dialog.html の【行をそのまま写した】もの（★mark() だけ例外）。
     ★ゲームの判定・数値・図を1つも動かさないための条件です。
   ★★ el / R2 は common.js に入れませんでした ── ★00 と 01 が独自に定義しており、
     ★99 は el を別の意味で 177 か所 使っています（★A の設計⓸を1件 訂正）
   ══════════════════════════════════════════════════════════════════════════ */

/* ══════════ ⑷ 小道具（★03 の 812〜833 行の写し）══════════ */
const $ = id => document.getElementById(id);
const show = id => { const e = $(id); if (e) e.classList.remove('hide'); };
const R3 = v => +v.toFixed(3);
const R1 = v => +v.toFixed(1);
/* 🔴 2026-09-02 1問1ページ担当：★★帯が【全21問1本】になったので、
   ★各ページの var QBASE（00＝0 / 01＝5 / 02＝11 / 03＝14 / 99＝17）を足す。
   ★★mark( を呼ぶ側は1文字も触っていない（★03 は mark(0/1/2,'done') の3件）→ A の判断1 */
/* 🔴🔴 2026-09-02 1問1ページ担当【申告・処置】★★帯が【5つの章グループ】に変わったので、
   ★mark() の children[QBASE+i] は【もう別のものを指します】（★#steps の子は21個 → 5個）。
   ★★実害 ── ⒜ 03（QBASE=14）は children[14] が無いので【帯が塗られない】
     ⒝ ★★★00（QBASE=0）だと children[0]＝第1章のグループの class が 'done' に上書きされ、
        ★章グループのレイアウトが壊れます（★00 を流す前に直さないと踏む）
   → ★★drawProg() が各バーに付けている title="問N　…" で引き当てる形に変えました。
     ★通し番号は QBASE + i + 1。★「問1　」と「問15　」は【全角スペースまで見る】ので混ざりません
   ★★mark( を呼ぶ側は1文字も触っていません（★A の判断1 の条件⑴）
   ★drawProg() も1文字も触っていません */
function mark(i, cls) {
  const q = (window.QBASE || 0) + i + 1;
  const e = document.querySelector('#steps .bar [title^="問' + q + '\u3000"]');
  if (e) e.className = cls;
}
/* ★ゲージ。小さいほど良い場合は inv=true */
function gauge(fillId, markId, v, goal, max, inv) {
  const f = $(fillId), m = $(markId);
  const p = Math.max(0, Math.min(1, v / max));
  f.style.width = (p * 100).toFixed(1) + '%';
  const ok = inv ? (v <= goal) : (v >= goal);
  f.className = 'gfill' + (ok ? ' ok' : '');
  m.style.left = (Math.max(0, Math.min(1, goal / max)) * 100).toFixed(1) + '%';
}
/* ══════════ 共通の絵の部品（→01 と同じ） ══════════ */
const T = (x, y, s, o) => { o = o || {};
  return `<text x="${x}" y="${y}" font-size="${o.fs || 13}" fill="${o.c || '#3f3f3f'}"
    text-anchor="${o.a || 'start'}" font-family="${o.f || 'Inter'}"${o.b ? ' font-weight="600"' : ''}
    >${s}</text>`; };
const JP = "'Noto Serif JP',serif";
const BOX = (x, y, w, h, fill) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill || '#fff'}" stroke="#000"/>`;

/* ══════════ ⑷ 図の部品（★03 の IIFE 1872〜1888・2067〜2089 行の写し）══════════ */
  var QT = function (x, y, s, o) {
    o = o || {};
    return '<text x="' + x + '" y="' + y + '" font-size="' + (o.fs || 13) + '"'
      + ' fill="' + (o.c || '#3f3f3f') + '" text-anchor="' + (o.a || 'start') + '"'
      + ' font-family="' + (o.f || 'Inter') + '"' + (o.b ? ' font-weight="600"' : '') + '>'
      + s + '</text>';
  };
  var QJP = "'Noto Serif JP',serif";
  var QBOX = function (x, y, w, h, fill, stroke, sw) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '"'
      + ' fill="' + (fill || '#fff') + '" stroke="' + (stroke || '#000') + '"'
      + ' stroke-width="' + (sw || 1) + '"/>';
  };
  var QARR = function (x, y1, y2) {   /* 下向きの矢印 */
    return '<line x1="' + x + '" y1="' + y1 + '" x2="' + x + '" y2="' + (y2 - 6) + '" stroke="#000"/>'
      + '<path d="M' + x + ' ' + y2 + 'l-4.5-6.5h9z" fill="#000"/>';
  };

  var QPER = function (x, y, sc, c) {
    sc = sc || 1; c = c || '#6e6e6e';
    return '<circle cx="' + x + '" cy="' + y + '" r="' + (5.5 * sc) + '" fill="' + c + '"/>'
      + '<path d="M' + (x - 8 * sc) + ' ' + (y + 19 * sc)
      + ' a' + (8 * sc) + ' ' + (10.5 * sc) + ' 0 0 1 ' + (16 * sc) + ' 0 z" fill="' + c + '"/>';
  };
  /* ── 紙（★右上を折った四角。★中に横線2本）───────────────────── */
  var QDOC = function (x, y, w, h, c, st) {
    var f = Math.min(10, w * 0.28);
    return '<path d="M' + x + ' ' + y + 'h' + (w - f) + 'l' + f + ' ' + f + 'v' + (h - f)
      + 'h' + (-w) + 'z" fill="' + (c || '#fff') + '" stroke="' + (st || '#6e6e6e') + '"/>'
      + '<line x1="' + (x + 5) + '" y1="' + (y + h * 0.5) + '" x2="' + (x + w - 6)
      + '" y2="' + (y + h * 0.5) + '" stroke="#d9d9d9"/>'
      + '<line x1="' + (x + 5) + '" y1="' + (y + h * 0.72) + '" x2="' + (x + w - 12)
      + '" y2="' + (y + h * 0.72) + '" stroke="#d9d9d9"/>';
  };
  /* ── 右向きの矢印 ─────────────────────────────────────────── */
  var QARW = function (x1, x2, y, c) {
    c = c || '#000';
    return '<line x1="' + x1 + '" y1="' + y + '" x2="' + (x2 - 7) + '" y2="' + y
      + '" stroke="' + c + '" stroke-width="1.5"/>'
      + '<path d="M' + x2 + ' ' + y + 'l-7-4.5v9z" fill="' + c + '"/>';
  };

/* ══════════════════════════════════════════════════════════════════════════
   ⑵ 進み具合の帯（全21問）／章の表示／戻る・次へ                        ★新設
   ★★帯は【いまどこか】だけを見せる。✗ localStorage で「解いたか」を保存しない
     （→ A の判断2。★山田様「全部の問を最初から表示する」）
   ══════════════════════════════════════════════════════════════════════════ */
var QLIST = [
  'つまみを回す', '坂を下る', '2個では足りない', 'つまみを増やす', '確率に直す',
  '入力を増やす', '単位をそろえる', '線1本の限界', '層を1つ入れる', '深くすると', '覚えただけ',
  '温度', 'どの語を見るか', '2つの語を同時に見る',
  '大量に練習する', '好みで整える', '正誤で伸ばす',
  '組で決める', 'どこまで分ける', '列を作る', 'どこで止める'
];
/* 🔴 2026-09-02 A：★できているページ。★★章を流すたびに足すこと（→ リンク切れ0件） */
/* 🔴 2026-09-02 1問1ページ担当：★★全21問が揃ったので全部リンクにしました（★リンク切れ0件） */
var READY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

var CHAP = [
  /* 🔴 2026-09-02 A：★s＝帯に出す略称（★t は下の行と章表示に使う正式名）
     ★理由：★帯の1章の幅は 3/21〜6/21 しかなく、正式名だと文字が切れる（★実測 30〜69px はみ出した） */
  { n: 1, t: '機械学習の基礎',      s: '機械学習',     a: 1,  b: 5  },
  { n: 2, t: '深層学習',            s: '深層学習',     a: 6,  b: 11 },
  /* 🔴 2026-09-02 1問1ページ担当2代目：★帯の第3章の略称を「注目」→【LLM】にしました
     （★山田様の指定 21:1x「ここの3章 注目っておかしいだろ。LLM にしろ。全部な。上の目次っぽいところだぞ」） */
  { n: 3, t: 'LLMは何を見ているか', s: 'LLM',           a: 12, b: 14 },
  { n: 4, t: 'どうやって作るか',    s: '作り方',       a: 15, b: 17 },
  { n: 5, t: '本物のデータで使う',  s: '本物のデータ', a: 18, b: 21 }
];
function chapOf(q) { for (var i = 0; i < CHAP.length; i++) if (q >= CHAP[i].a && q <= CHAP[i].b) return CHAP[i]; }

/* ★帯 ── 21マス。★いまの問は open、それより前は done、後は素のまま
   ★★マスの中は【問番号だけ】（1280px で1マス 40px・390px で 16px しか無い）。
     ★いまの問の題は下の行が持つ */
function drawProg(q) {
  /* 🔴 2026-09-02 A：★★帯を【章ごとのバー】にした（★数字を並べる形は「チープ」と却下された）
     ★山田様「ここチープだな。本番では番号にページリンク全部貼るの？ スマホにすると小さいかも。
       まあとりあえずいい感じのデザインにして」（2026-09-02 14:1x）
     ★★形 ── 5章を【問数に比例した幅】で横に並べ、1問＝1本の細いバー。
       ★済んだ問は黒／いまの問は赤で高く／まだの問は灰
       ★★★バーは【ページへのリンク】。★READY にある問だけ href を付ける（→ リンク切れ0件を保つ）
     ★★スマホ（430px 以下）では章名を「第N章」だけにし、★いまの章だけタイトルも出す */
  var h = document.getElementById('steps'); if (!h) return;
  h.className = 'pv';
  var s = '';
  for (var ci = 0; ci < CHAP.length; ci++) {
    var c = CHAP[ci], n = c.b - c.a + 1, here = (q >= c.a && q <= c.b);
    s += '<div class="sg' + (here ? ' on' : '') + '" style="flex:' + n + '">'
       +   '<div class="bar">';
    for (var i = c.a; i <= c.b; i++) {
      var cls = i < q ? 'done' : (i === q ? 'open' : ''),
          ttl = '問' + i + '　' + QLIST[i - 1],
          ok  = READY.indexOf(i) >= 0 && i !== q,
          tag = ok ? 'a' : 'span',
          hre = ok ? ' href="q' + (i < 10 ? '0' + i : i) + '.html"' : '';
      s += '<' + tag + ' class="' + cls + '"' + hre + ' title="' + ttl + '"></' + tag + '>';
    }
    s += '</div><div class="lb"><b>第' + c.n + '章</b>'
       +   '<span class="tt">' + c.s + '</span></div></div>';
  }
  h.innerHTML = s;
  var cc = document.getElementById('prog_cnt'), ch = chapOf(q);
  if (cc) cc.innerHTML = '<span><b>問' + q + '</b>　' + QLIST[q - 1] + '</span>'
    + '<span>第' + ch.n + '章　' + ch.t + '　／　全' + QLIST.length + '問</span>';
}

/* ★章の表示（★迷子対策）── 章名と、その章が何をやる章かを1行 */
function drawChap(q, intro) {
  var h = document.getElementById('chap'); if (!h) return;
  var ch = chapOf(q);
  h.innerHTML = '<b>第' + ch.n + '章　' + ch.t + '</b>（問' + ch.a + '〜' + ch.b + '）'
    + (intro ? '<br>' + intro : '');
}

/* ══════════════════════════════════════════════════════════════════════════
   🔴 2026-09-02 1問1ページ担当2代目：★★未確定の値は【ここ1か所】に集める（→ A の指示）
   ★★★どのページにも URL・版・日付を書きません。★URL が来たら この1行だけ直します
     （★書いてしまうと 23ページ 触ることになります）
   ★form / agora が空のときは ボタンを出さず、★灰色で1行だけ出します
   ══════════════════════════════════════════════════════════════════════════ */
/* 🔴🔴 2026-09-07 A：★★agora に記事の URL を入れました（★山田様が指定 2026-09-07）
   ★https://www.roppongivc.com/m3v8k1qz6p/  ── ★本番で 200 を確認済み
   ★★これ1行で【4か所】に効きます ── index の［2時間で何が起きたかを読む］と
     ★q05・q21・end の drawForm の［この教材の元になった記事へ］
   ★form（感想フォーム）は まだ空です。★URL を頂いたらここに入れます */
var SITE = { ver: 'v1.0', date: '2026-09-02', form: '',
             agora: 'https://www.roppongivc.com/m3v8k1qz6p/' };

/* ★フッタ（★23ページ一括。★版と日付は SITE から読む）
   🔴🔴 2026-09-08 A：★★フッタに【六本木ベンチャーキャピタル】へのリンクを足した
     ★★★山田様「六本木VCのロゴって今のスマホで見た上のところあまりスペースないけど
       どう反映するべきか」への答え ＝ ★上のバーではなく【フッタ】に置く。
     ★理由：★★上のバーは390pxで 105.9px しかなく、製品名が「AIの詰将棋」(5字)から
       ★「Deep Black Box」(14字)に長くなったので【横の空きが減った】。
       ★★ロゴを足すと製品名が折り返すか、エンブレムを小さくすることになる。
     ★★フッタなら【縦のコストが実質0】で、23ページ全部に出る。★1か所で効く
     ★★★そして共有時のブランド露出は og:image で取る（→ 次の巡で入れる）──
       ★上のバーのロゴは【触っている本人にしか見えない】が、
       ★og:image は【共有先の全員に見える】。★そちらのほうが効く */
function drawFoot(note) {
  var h = document.getElementById('foot'); if (!h) return;
  h.className = 'foot';
  h.innerHTML = 'Deep Black Box ' + SITE.ver + ' ／ ' + SITE.date
    + ' ／ <a href="https://www.roppongivc.com/" target="_blank" rel="noopener">六本木ベンチャーキャピタル</a>'
    + (note ? '<br>' + note : '');
}

/* ★感想の導線 ── ★q05・q21・end の3か所から呼ぶ（★同じ関数を3回） */
function drawForm(id) {
  var h = document.getElementById(id || 'form'); if (!h) return;
  h.className = 'formbox';
  if (!SITE.form && !SITE.agora) {
    h.innerHTML = '<span class="pend">感想フォームは準備中です</span>';
    return;
  }
  var b = '';
  if (SITE.form) b += '<a class="btn go" href="' + SITE.form + '" target="_blank" rel="noopener">感想を書く →</a>';
  if (SITE.agora) b += '<a class="btn" href="' + SITE.agora + '" target="_blank" rel="noopener">この教材の元になった記事へ →</a>';
  h.innerHTML = '<div class="h">読んだ感想を聞かせてください</div><div class="togs">' + b + '</div>';
}

/* ★戻る・次へ ── ★どのページでも常に押せる（★解けなくても進める） */
function drawNav(prev, next) {
  var h = document.getElementById('nav'); if (!h) return;
  h.className = 'nav';
  h.innerHTML = (prev ? '<a href="' + prev[0] + '">← ' + prev[1] + '</a>' : '<span class="sp"></span>')
              + (next ? '<a class="go" href="' + next[0] + '">' + next[1] + ' →</a>' : '<span class="sp"></span>');
}

/* ══════════════════════════════════════════════════════════════════════════
   ⑴ 登場人物と会話
   ★★顔は外部ファイル（★base64 をやめた）── 1ページ 29,926字 × 23ページ の重複が消える
   ══════════════════════════════════════════════════════════════════════════ */
var IMG = { m: 'assets/av-marky.jpg', d: 'assets/av-doc.jpg' };
var CNM = { m: '学', d: '博士' };
/* 🔴 2026-09-02 1問1ページ担当【申告】★★博士の紹介から「口癖は<b>「やってみろ」</b>。」の
   1文（12字）を消しました。★A が承認済み（2026-09-02）
   ★理由：★§5-39 で博士の命令形を【0件】にしたので、★読者は「やってみろ」を一度も聞きません。
     ★紹介に書いてあるのに本文に出てこないのは →§2-3 の型（見せ方と中身が食い違う）です
   ★★申告が漏れていました ── ★文言の変更は【数値や図に触らなくても内容の変更】です */
/* 🔴🔴 2026-09-08 A：★★紹介文の太字を【全部 外した】（★山田様の指定 2026-09-08）
   ★★★「ここの二人の紹介文のところにあるところは、名前以外は、全部太字の部分は元に戻せ」
   ★外した5件 ── 元大学教授／つまみを回させたほうが早い／数学は得意／
     中で何が起きてるのか誰も説明してくれない／納得しないと引かない。
   ★★名前（.nm2「博士」「深井 学」）は太字のまま（★CSS の font-weight:700）
   ★★★法則（★全ページ共通。★山田様 2026-09-08）──
     ⑴ 上のほうに来るものは【章の説明の章名】以外 太字にしない
     ⑵ 博士・学の紹介文は 太字にしない */
var CAST = [
  ['d', '博士', '',
   'AIの研究者。元大学教授で、機械学習を教えていた。'
  + '「説明を読ませるより、つまみを回させたほうが早い」が信条で、大学のやり方と合わずに辞めた。'
  + 'いまは家の一室でひとり実験している。'],
  ['m', '深井 学', 'ふかい まなぶ ／ 高校2年',
   '数学は得意だが、AI は素人。'
  + '「みんな AI って言うけど、中で何が起きてるのか誰も説明してくれない」が動機。'
  + '小学生のころから博士の家に出入りしている。納得しないと引かない。']
];
function drawCast(id) {
  var h = document.getElementById(id || 'cast2'); if (!h) return;
  h.className = 'cast2';
  h.innerHTML = CAST.map(function (c) {
    return '<div class="row">'
         +   '<img class="ic" src="' + IMG[c[0]] + '" alt="' + c[1] + '"'
         +        ' width="150" height="150" decoding="async">'
         +   '<div><span class="nm2" style="color:' + (c[0] === 'd' ? '#b0700c' : '#2f6fb5') + '">'
         +     c[1] + (c[2] ? '<span class="rb">' + c[2] + '</span>' : '') + '</span>'
         +     '<span class="tx2">' + c[3] + '</span></div>'
         + '</div>';
  }).join('');
}
/* ★★"f" 行は【吹き出しではなく図】として描く（★02 の作りをそのまま写した） */
function drawCV(CV) {
  Object.keys(CV).forEach(function (k) {
    var h = document.getElementById(k);
    if (!h) return;
    h.className = 'cv';
    h.innerHTML = CV[k].map(function (l) {
      if (l[0] === 'f') return '<div class="fg">' + l[1] + '</div>';
      return '<div class="cl ' + l[0] + '">'
           +   '<span class="av"><img class="ic" src="' + IMG[l[0]] + '" alt="' + CNM[l[0]] + '"'
           +   ' width="46" height="46" loading="lazy">'
           +   '<span class="nm">' + CNM[l[0]] + '</span></span>'
           + '<div class="bb">' + l[1] + '</div>'
           + '</div>';
    }).join('');
  });
}

/* ══════════════════════════════════════════════════════════════════════════
   ⑶ 「いま どこの話か」の入れ子図                                       ★新設
   ★★02 の CV の "f" 行にあったものを common へ移した（→ A の判断4）
   ★★02 の文言「00 と 01 でやったのは ここ」→「第1章と第2章でやったのは ここ」に直した
   ★★★出すのは【章の最初のページだけ】（★毎ページ出すと 21回 出て邪魔になる）
   ★引数 ch ＝ いまの章の番号。★その枠を強調する
   ══════════════════════════════════════════════════════════════════════════ */
/* 🔴 2026-09-02 1問1ページ担当2代目【引数を1つ足しました】★★第3引数 o（省略可）
   ★山田様の FB（2026-09-02 17:3x・★トップページだけ）で、index.html では
     ⑴ 見出し「いま どこの話をしているのか」／⑶ SVG の「第5章 は この外」＋破線／
     ⑷ 図の下の3段落 ── を出さないことになりました。
   ★★★o を渡さなければ 今までと1バイトも同じ形です（★q01・q06・q12・q15 は変わりません）
     ★index.html だけ drawNest("nest", 0, {head:false, outside:false, notes:false}) と呼びます
   ★★【2】表の1列目の見出しは「ここ」→「呼び名」に替えました（★全ページ共通。★A の案・承認済み） */
function drawNest(id, ch, o) {
  /* 🔴 2026-09-02 A：★★★入れ子図を【SVG の図】にした（★div の枠は しょぼい・チープ と却下された）
     ★山田様「これしょぼい。チープ。せめて機械学習とか枠囲ってるところは図ならば図のSVG か
       なんか作って当てはめるとかしろ」（2026-09-02）
     ★★3重の入れ子を1枚の SVG で描く。★★文章は SVG の【外】（→ 規則：SVG の中に文章を入れない） */
  var h = document.getElementById(id); if (!h) return;
  o = o || {};
  /* 🔴 2026-09-09 A：★第4の選択肢 table を足した（★省略すると今までと1バイトも同じ）
     ★★★index だけ表を出しません ── ★山田様「いまある2つの表を、1つにまとめてください。
       上の表（機械学習・深層学習・LLMの定義）は削除します。定義は下の表の詳細に溶かしてあります」
     ★★q01・q06・q12・q15 では【表を残す】── ★あそこの表は迷子対策で、
       ★「いま どこの話か」を示す役があるため（→§5-41 の記事側FB）*/
  var oHead = (o.head !== false), oOut = (o.outside !== false), oTab = (o.table !== false);
  var C = [
    { t: '機械学習',                   f: '#f6fafd', s: '#7ea9d4', n: 1 },
    { t: 'ディープラーニング（深層学習）', f: '#f5fbf7', s: '#77bb92', n: 2 },
    { t: 'LLM（大規模言語モデル）',      f: '#fffaf0', s: '#dcae5c', n: 3 }
  ];
  /* 🔴🔴🔴 2026-09-07 A【文字の大きさを「描画幅から逆算」する形にした】
     ★★★山田様「ここの図解の中にある字のフォントも小さい。スマホサイズにしたとき全然見えない。
       ちゃんとそれもスペースあるんだから本文と同じフォントサイズになるようにしろスマホサイズでも」
     ★★★「問題あるなら 16.6 にする必要はないから、とにかくちゃんと見える範囲で、
       支障のない範囲で大きくしろ」（2026-09-07）

     ★★★なぜ固定の数字にできないのか（★実測）
       SVG の font-size は【viewBox の単位】なので  実効px ＝ 単位 × (描画幅 ÷ 560)。
       ★描画幅がページによって違う ──
         q01 348px（★.wrap の中）／ q12 340px ／ index 250px（★.card の余白32px×2に食われる）／
         PC 520px（★max-width）
       → ★★1つの数字では どのページも 16.6px にできない。★だから【逆算する】。

     ★やり方
       ⑴ 先に空の SVG を置いて【本当の描画幅】を測る
       ⑵ 単位 ＝ 16.6px × 560 ÷ 描画幅
       ⑶ ★★ただし【いちばん長いラベルが枠に収まる上限】で頭を打つ ──
          「ディープラーニング（深層学習）」は15文字あり、
          いちばん内側から2番目の枠の内側（460単位）に入る上限は 28単位。
          ★これを超えると枠から出るので、そこで止める（★16.6px に届かない幅では小さいままにする）
       ⑷ 「いまここ」が1行に入らないときは【2行】に落とし、帯もその分 厚くする
          ★★1行のまま文字だけ上げると、q06 で「ディープラーニング（深層学習）」と
            9.00px 重なった（★A111_svgfit.js が捕まえた。★目視では気づけない）

     ★実効の結果（実測）  index 15.9px ／ q01 16.8px ／ q12 16.4px ／ PC 16.7px
       ★直す前は index 6.7px ／ q01 9.3px でした */
  var W = 560, TARGET = 16.6;
  h.className = 'fg';
  h.innerHTML = (oHead ? '<div class="ft">いま どこの話をしているのか</div>' : '')
              + '<svg class="dg" viewBox="0 0 560 100"></svg>';
  var rw = h.querySelector('svg.dg').getBoundingClientRect().width || 348;

  /* ★全角＝1.0em ／ 半角＝0.68em で見積もる（★実測より安全側。
     ★実測 "LLM（大規模言語モデル）" 12.01em に対し 見積り 12.04em） */
  var emw = function (s) {
    var n = 0;
    for (var i = 0; i < s.length; i++) n += (s.charCodeAt(i) < 0x2E80 ? 0.68 : 1.0);
    return n;
  };
  var PAD = 22, TOP = 8, ASC = 0.80, DESC = 0.20, TP = 10, GAP = 8, BP = 10;
  var inner = function (i) { return (W - 28 - i * PAD * 2) - 28; };   /* 枠の内側の使える幅 */
  var cap = 999;
  for (var i = 0; i < 3; i++) cap = Math.min(cap, inner(i) / emw(C[i].t) * 0.94);  /* ★6%の余裕 */
  var FL = Math.max(15, Math.min(Math.floor(cap), Math.round(TARGET * W / rw)));
  var FN = Math.round(FL * 0.88), FO = FN;

  /* ★「いまここ」が1行に入るか（★いちばん厳しい枠で判定して全部そろえる） */
  var TWO = false;
  for (var i = 0; i < 3; i++)
    if (emw(C[i].t) * FL + 16 + emw('いまここ') * FN > inner(i)) TWO = true;

  var L1 = TP + ASC * FL;
  var L2 = TWO ? (L1 + DESC * FL + GAP + ASC * FN) : L1;
  var BH  = Math.ceil(L2 + DESC * (TWO ? FN : FL) + BP);   /* 1段ぶんの帯の厚み */
  var IH  = BH + Math.round(FL * 0.7);                     /* いちばん内側の箱（★帯＋中身） */
  var BOT = Math.max(14, Math.round(BH * 0.22));           /* 下の食い込み */
  var HH = [BH + (BH + IH + BOT) + BOT, BH + IH + BOT, IH];
  var g = '';
  for (var i = 0; i < 3; i++) {
    var x = 14 + i * PAD, y = TOP + i * BH, w = W - 28 - i * PAD * 2, hh = HH[i];
    var on = (C[i].n === ch) || (i === 2 && ch === 4);
    g += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + hh + '" rx="8"'
       + ' fill="' + C[i].f + '" stroke="' + C[i].s + '" stroke-width="' + (on ? 3 : 1.6) + '"/>'
       + '<text class="nl" x="' + (x + 14) + '" y="' + (y + L1).toFixed(1) + '" font-size="' + FL + '" font-weight="700"'
       + ' font-family="Inter,system-ui,sans-serif" fill="#1a1a1a">' + C[i].t + '</text>';
    if (on) g += '<text class="nb" x="' + (x + w - 14) + '" y="' + (y + L2).toFixed(1) + '" font-size="' + FN + '" font-weight="700"'
       + ' text-anchor="end" font-family="Inter,system-ui,sans-serif" fill="#c0392b">いまここ</text>';
  }
  var BOTY = TOP + HH[0];
  /* 🔴 2026-09-02 1問1ページ担当2代目：★「第5章 は この外」＋破線は o.outside===false で出しません
     （★トップページには下に5章の表があるので重複。→ 山田様「ここでいらない」）
     ★出さないときは viewBox の高さも詰めます（★下に空きが残らないように） */
  var VBH;
  if (oOut) {
    g += '<line x1="14" y1="' + (BOTY + 22) + '" x2="546" y2="' + (BOTY + 22) + '"'
       + ' stroke="#d9d9d9" stroke-dasharray="4 3"/>'
       + '<text class="no" x="20" y="' + (BOTY + 22 + FO * 1.6).toFixed(1) + '" font-size="' + FO + '"'
       + ' font-family="Inter,system-ui,sans-serif" fill="#444">'
       + '第5章 は この外（道具が変わる）</text>';
    VBH = Math.ceil(BOTY + 22 + FO * 1.6 + FO * 0.55);
  } else { VBH = BOTY + 14; }
  var mark = function (n) { return ch === n ? '　<b>← いまここ</b>' : ''; };
  h.innerHTML =
    (oHead ? '<div class="ft">いま どこの話をしているのか</div>' : '')
  + '<svg class="dg" viewBox="0 0 560 ' + VBH + '" role="img" aria-label="機械学習の中に深層学習、その中に LLM">'
  +   g + '</svg>'
  + (!oTab ? '' :
    '<table class="ntab"><tr><th>呼び名</th><th>やること</th><th>章</th></tr>'
  /* 🔴 2026-09-09 A：★「つまみ」→「パラメータ（つまみ）」にした（★山田様の指定 2026-09-09）
     ★★ここは読者が最初に見る表なので、★正式な名前を先に出す形にした */
  +   '<tr><td>機械学習</td><td>データを見て、機械が自分でパラメータ（つまみ）を決める。人が数字を手で書かない。</td>'
  +     '<td>第1章' + mark(1) + '</td></tr>'
  +   '<tr><td>深層学習</td><td>掛けて足す箱を何段も重ねて、あいだで折り曲げる。</td>'
  +     '<td>第2章' + mark(2) + '</td></tr>'
  /* 🔴 2026-09-02 1問1ページ担当2代目：★「出口5万語」の太字を外しました（★山田様の指定 17:5x） */
  +   '<tr><td>LLM</td><td>やることは「次の1語を当てる」だけ。それを出口5万語まで大きくしたもの。</td>'
  +     '<td>第3章・第4章' + (ch === 3 || ch === 4 ? '　<b>← いまここ</b>' : '') + '</td></tr>'
  + '</table>');
  /* 🔴 2026-09-07 A：★★幅が変わったら描き直す（★スマホを横に倒したとき／窓の大きさを変えたとき）
     ★★文字の大きさを【描画幅から逆算】しているので、★描いたあとに幅が変わると古い値のままになる。
     ★250ms まとめてから1回だけ描き直す（★resize を毎回 拾うと重い）。★登録は1回だけ */
  drawNest._c = (drawNest._c || []).filter(function (a) { return a[0] !== id; });
  drawNest._c.push([id, ch, o]);
  if (!drawNest._hook) {
    drawNest._hook = true;
    var tid = null;
    window.addEventListener('resize', function () {
      clearTimeout(tid);
      tid = setTimeout(function () {
        drawNest._c.slice().forEach(function (a) { drawNest(a[0], a[1], a[2]); });
      }, 250);
    });
  }
  /* 🔴 2026-09-02 1問1ページ担当2代目：★★図の下の3段落を【全ページから消しました】
     （★山田様の指定 2026-09-02 21:1x「ここいらない。他のページも全部これ出るんでしょ？全部消して」）
     ★消したもの ── ✗「ChatGPT のように文章を作って返す道具を 生成AI と呼びます…」
       ✗「まったく別の技術ではありません。第1章・第2章でやった箱の…」
       ✗「第5章だけは この入れ子の外です ── 本物のデータ（Kaggle）で…」
     ★★SVG の中の「第5章 は この外（道具が変わる）」は別のもので、★q01・q06・q12・q15 では残ります
       （★index.html だけ o.outside===false で出しません）
     ★★これに伴い 第3引数の notes は使わなくなりました（★渡されても無害です） */
}

/* ══════════════════════════════════════════════════════════════════════════
   🔴🔴 2026-09-07 A【新設】★★外へ出るリンクは【必ず別タブ】で開く
   ★★★山田様の指定（2026-09-07）「リンクは別タブで開くようにして。
     ゲーム上にあるリンクは全て別タブで開くようにして」

   ★★対象 ── ★href が http:// https:// mailto: で始まるもの（＝ゲームの外に出るリンク）
   ★★対象にしないもの ── ★ゲームの中のページ遷移（q01.html・index.html など）
     ★理由：★［はじめる］［戻る］［次へ］［章の一覧］［上のバー］［進み具合の帯］は
       ★★全部ゲーム内の移動で、実測すると 1ページに 4〜27本 あります。
       ★これを別タブにすると、通してプレイするだけでタブが20枚 以上 開き、
       ★★「いまどこにいるか」が分からなくなります（★迷子対策と正面から衝突します）。
     ★★★もし「ゲーム内の移動も別タブに」というご指示でしたら、
       ★下の EXT の判定を外すだけで そうできます（★1行）。★山田様のご判断を仰ぎます

   ★なぜ CSS でなく JS で当てるのか ── ★★静的に書き忘れても効くようにするため。
     ★実測：★いま外へ出るリンクは 静的7本（Amazon 1・六本木VC 1・Agora 1・Kaggle 4）と
       ★JS が作る3本。★どれも既に target="_blank" が付いていましたが、
       ★★次に足す人が忘れても これで拾えます
   ★rel="noopener" も一緒に付けます（★別タブ側から元のページを触られないようにするため）
   ══════════════════════════════════════════════════════════════════════════ */
function extBlank(root) {
  var as = (root || document).querySelectorAll('a[href]');
  for (var i = 0; i < as.length; i++) {
    var h = as[i].getAttribute('href') || '';
    if (/^(https?:|mailto:)/i.test(h)) {
      as[i].setAttribute('target', '_blank');
      var r = as[i].getAttribute('rel') || '';
      if (r.indexOf('noopener') < 0) as[i].setAttribute('rel', (r + ' noopener').trim());
    }
  }
}
/* ★★あとから JS が書いたリンク（drawForm・drawNest・index の #agora）にも効かせるため、
   ★読み込み直後と、少し遅らせて もう1回 当てる（★各ページの起動行は common.js の後に走る） */
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { extBlank(); setTimeout(extBlank, 0); });
else { extBlank(); setTimeout(extBlank, 0); }

/* ══════════════════════════════════════════════════════════════════════════
   🔴🔴🔴 2026-09-08 A【新設】★★アクセス解析（GA4）── ★★★記事の公開（9/10）より前に入れた
   ★★★山田様の確認「GA4でいいのか？ こっちで用意しないとダメ？」への答え ＝
     ★同じ測定ID を1行 足すだけ。★新しいツールも新しいプロパティも要らない。

   ★★なぜゲームには自動で入らないのか（★実測で確かめた）
     記事   Hugo の layouts/_default/baseof.html を通る → ★GA4 が自動で入る
     ゲーム static/ai-shogi/ の素のHTML → ★Hugo のレイアウトを通らないので入らない
     ★実測（2026-09-08）本番の /ai-shogi/index.html と q01.html に gtag は【0件】だった。
     → ★★★つまり これを入れるまで、ゲームについて GA4 は【何ひとつ記録していなかった】

   ★★★何が測れるか ── ★1問1ページ（23URL）なので【ページビューだけで到達の深さが分かる】
     /ai-shogi/ → q01 → q05 → q11 → q21 → end
     ★「開いただけ（index で離脱）」と「触った（q01以降）」と「最後までやった（end）」が分かれる。
     ★★★いちばん価値があるのは【どの問で人が落ちるか】。★そこを直せる
     ★つまみを動かしたか等はイベントを足せば測れるが、★まずはページビューで足りる

   ★★測定ID は【サイト共通と同じ】G-BRMZ5TV9BJ（★baseof.html と一致。★実測で確認）
     → ★同じプロパティ・同じレポートの中で、記事とゲームが1つの流れとして見える
   ★★noindex とは無関係（★noindex でも解析は動く）
   ★★★23ページを触らない ── ★ここ1か所で全ページに効く
   ══════════════════════════════════════════════════════════════════════════ */
var GA_ID = 'G-BRMZ5TV9BJ';
(function () {
  if (!GA_ID) return;
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
})();

drawTop();
