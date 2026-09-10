
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
  /* 🔴🔴🔴 2026-09-09 A：★★★章題を【トップページの5つに揃えた】（★山田様の指示 2026-09-09）
     ★★直す前は t が トップと違っていた ── ★同じ章が2つの名前で呼ばれていた
       第1章 機械学習の基礎      → 機械学習
       第3章 LLMは何を見ているか → LLM
       第4章 どうやって作るか    → LLMはどうやって作られるのか
       第5章 本物のデータで使う  → 本物のデータでは、何が精度を決めるのか
     ★★★s（帯の略称）は【短いまま残す】── ★帯の1章分は 390px で 16〜30px しかなく、
       ★正式名を入れると前任の実測で 30〜69px はみ出した。★ここを長くしないこと */
  { n: 1, t: '機械学習',           s: '機械学習',     a: 1,  b: 5  },
  { n: 2, t: '深層学習',           s: '深層学習',     a: 6,  b: 11 },
  /* 🔴 2026-09-02 1問1ページ担当2代目：★帯の第3章の略称を「注目」→【LLM】にしました
     （★山田様の指定 21:1x「ここの3章 注目っておかしいだろ。LLM にしろ。全部な。上の目次っぽいところだぞ」） */
  { n: 3, t: 'LLM',                s: 'LLM',           a: 12, b: 14 },
  { n: 4, t: 'LLMはどうやって作られるのか',        s: '作り方',       a: 15, b: 17 },
  { n: 5, t: '本物のデータでは、何が精度を決めるのか', s: '本物のデータ', a: 18, b: 21 }
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
  /* 🔴🔴 2026-09-09 A：★★帯の下の行から【章名を外した】
     ★★★理由⑴ 章名は【真下の章の表示（.chap）】が必ず持っている ── ★同じ名前が 40px の中に2回
       出ていた（→§2-14 の型3「同じことをもう一度載せている」）。
     ★★★理由⑵ 章題をトップに揃えて長くしたので、★★390px で【3行に折り返して 21px→54px に伸びた】
       （★実測 q15〜q21 の7ページ）。★章名を外すと 21px に戻る。
     ★★章の対応は ⒜ 帯そのもの ⒝ 真下の章の表示 ⒞ 入れ子図の右端の章番号 の3つが持っています */
  if (cc) cc.innerHTML = '<span><b>問' + q + '</b>　' + QLIST[q - 1] + '</span>'
    + '<span>第' + ch.n + '章　／　全' + QLIST.length + '問</span>';
}

/* ══════════════════════════════════════════════════════════════════════════
   ★章の表と、章ごとの折りたたみ ── ★★トップページ（index.html）から【機械で写した】もの
   🔴🔴🔴 2026-09-09 A：★★★山田様の指示
     「ここってトップで書かれてる表現の方が正しいからそれをここに持ってくるべきじゃないん？」
     「これの 章／章題／中身 を入れた方がいいんじゃないん。入れ子図の下に。
       そして折りたたみの詳細を、その折りたたみのまま各章 該当するところに一つずつだけ入れたら」
   ★★写し間違いを防ぐため 検証ツール/00/A121_chapdesc.py が index.html から切り出しています。
     ★★★文言を直すときは【index.html を直してから この道具を流し直す】こと。
     ⚠️★いまは index.html と ここの2か所に同じ文言があります（★二重管理）。
       ★次に index を触れるときは、★index 側も この配列から描くようにしてください。
   ══════════════════════════════════════════════════════════════════════════ */
var CHTAB = [
  { n: 1, href: 'q01.html', t: '機械学習', d: 'AIが学習するとは、具体的に何をしているのか。数を調整して正解に近づける、その一番小さい形を自分の手で動かします', q: '1〜5' },
  { n: 2, href: 'q06.html', t: '深層学習', d: '深層学習の「深い」とは、何が深いのか。層を重ねる意味と、重ねただけではうまくいかない理由を、自分で層を足しながら確かめます', q: '6〜11' },
  { n: 3, href: 'q12.html', t: 'LLM', d: 'ChatGPTは中で何をしているのか。動いているLLMが次に来る語を確率で選ぶしくみと、同じ質問でも答えが変わる理由を、動かして見ます', q: '12〜14' },
  { n: 4, href: 'q15.html', t: 'LLMはどうやって作られるのか', d: 'なぜAIは丁寧に答え、数学は得意で、それでいて自信を持って間違えるのか。次の語を当てる練習、人が選んだ記録で整える、正誤が付く問題で鍛える、という3段に分けて動かします', q: '15〜17' },
  { n: 5, href: 'q18.html', t: '本物のデータでは、何が精度を決めるのか', d: 'タイタニック号の乗客891人の記録から、年齢・性別・客室の等級をもとに生死を当てます。Kaggleで最もよく使われる入門課題です。使う道具は決定木です', q: '18〜21' }
];

/* ★章ごとの折りたたみ（★見出し ＋ 中の <li> をそのまま） */
var CHDET = [
  { n: 1, s: '第1章　機械学習',
    ul: '<li><b>関数</b>（入力から出力を計算する式）── y = ax + b から始めます。a と b がパラメータ（つまみ）です</li><li><b>誤差</b>（正解とのずれ）── 予測と正解の差を1つの数にまとめたもの。これを小さくするのが目標です</li><li><b>勾配降下法</b>（坂を下る）── 坂の高さは誤差です。傾きを調べて、誤差が減る方向へパラメータを少しずつ動かします。機械が自分でパラメータを決めるのは、この繰り返しです</li><li><b>学習率</b>（歩幅）── 大きすぎると坂を通り過ぎ、誤差が増え続けて戻れなくなります</li><li><b>式の形の限界</b> ── 直線の式では、どうパラメータを動かしても届かない問題があります。パラメータを増やして折れ線にすると届きます</li><li><b>softmax</b>（点数を確率に直す）── 点数のまま足し引きすると差が縮んでしまうので、指数を使って合計が1になる確率に直します。大小の順は変わりません</li>' },
  { n: 2, s: '第2章　深層学習',
    ul: '<li><b>特徴量</b>（入力に使う列）── 1個から複数に増やします。関係のない列を足しても誤差は下がりません</li><li><b>正規化</b>（単位をそろえる）── 身長cmと体重kgのように桁が違う列を混ぜると、片方だけが効きすぎます。歩幅は全パラメータで共通なので、揃えないと学習が壊れます</li><li><b>直線の限界</b> ── 1本の直線では分けられない配置があります</li><li><b>中間層</b>（あいだの段）── 段を挟んでパラメータを増やします</li><li><b>活性化関数</b>（折り曲げる）── 折らないと、何段重ねても全体は直線1本と同じになります。だから段のあいだで曲げます</li><li><b>勾配消失</b>（深くすると壊れる）── 段を増やすと、誤差の手がかりが手前の段まで届かなくなり、手前の段が学習しなくなります。飛び越す道（残差接続）で直します</li><li><b>過学習</b> ── 訓練データだけに合わせすぎた状態です（第5章で実際に体験します）</li>' },
  { n: 3, s: '第3章　LLM',
    ul: '<li><b>語彙</b>（出口）── 出力側の選択肢のことです。「次に来る語」の候補が5万個あり、それぞれに確率が付きます</li><li><b>確率分布</b> ── 5万個の確率の並び。いちばん高いものを選び続けると、無難な言い回しになります</li><li><b>温度</b> ── その並びの中から、どれだけ確率の高いものに寄せるかの設定です。上げると低い確率の語も出てきます。ただし並び自体は変わらないので、並びを変えたいときは質問に条件を足します</li><li><b>自己注意</b>（注目）── 文中のどの語を手がかりにするかの重みです。重みの合計が1になるので、複数の語を同時に強く見ることには上限があります</li><li><b>マルチヘッド</b> ── だから重みを複数本に分けて、別々の語を見られるようにします</li>' },
  { n: 4, s: '第4章　LLMはどうやって作られるのか',
    ul: '<li><b>事前学習</b> ── 大量の文章で「次の語を当てる」練習だけをします。文法や事実は、この練習の副産物として付いてきます</li><li><b>RLHF</b>（人の好みで整える）── 「良い回答」は式に書けません。だから人に2つ見せて良いほうを選んでもらい、その記録を使って調整します。誰に選んでもらったかで結果が変わります</li><li><b>RLVR</b>（正誤で鍛える）── 答え合わせが機械でできる問題（数学・プログラム）だけを使って鍛えます。だから数学は伸び、面白さのような正解のないものはこの段では扱えません</li><li><b>自信を持って間違える理由</b> ── 訓練で選んでいるのは正しいことではなく、次に来そうなことだからです</li>' },
  { n: 5, s: '第5章　本物のデータでは、何が精度を決めるのか',
    ul: '<li><b>データ</b> ── タイタニック号（1912年に沈んだ客船）の乗客891人の記録。年齢・性別・客室の等級などから、生き残ったかを当てます。Kaggleで最もよく使われる入門課題です</li><li><b>特徴量エンジニアリング</b>（入力の列を作る）── 人が新しい列を作ると、当たる数が増えます。たとえば名前から敬称を取り出します</li><li><b>訓練の点は物差しにならない</b> ── 列を増やすと訓練データの点は上がりますが、それは実力ではなく、極端には丸暗記です</li><li><b>決定木</b> ── 勾配降下とは別の仕組みです。切れ目を全部試して、いちばん良いものを選びます</li><li><b>交差検証</b> ── 1回だけ測ると数字がぶれます。分けて何回か測り、平均を取ります</li><li>作りの違うモデルを並べると、同じ水準に並びます。モデルより入力が効く場面がある、ということです</li>' }
];

/* ★★章の表（★入れ子図の下に置く。★トップページと同じ表）
   ★いまの章の行を強調し、★他の章は章題を押すとその章の先頭へ飛べます
   ★★★これで「章／章題／中身」がトップと問題ページで【同じ言葉】になりました */
function drawChapTab(ch) {
  var h = document.getElementById('chaptab'); if (!h) return;
  var s = '<table class="dtab chtab"><tr><th class="c">章</th><th class="l">章題</th>'
        + '<th class="l">中身</th><th class="c">問</th></tr>';
  for (var i = 0; i < CHTAB.length; i++) {
    var c = CHTAB[i], on = (c.n === ch);
    s += '<tr' + (on ? ' class="me"' : '') + '><td class="c">' + c.n + '</td>'
       + '<td class="l">' + (on ? c.t : '<a href="' + c.href + '">' + c.t + '</a>') + '</td>'
       + '<td class="l">' + c.d + '</td><td class="c">' + c.q + '</td></tr>';
  }
  h.innerHTML = s + '</table>';
}

/* ★★その章の折りたたみを1つだけ出す（★トップページの「▸ 詳しく」と同じ中身）
   ★★★山田様「折りたたみの詳細を、その折りたたみのまま各章 該当するところに一つずつだけ入れたら」 */
function drawChapDet(ch) {
  var h = document.getElementById('chapdet'); if (!h) return;
  for (var i = 0; i < CHDET.length; i++) {
    if (CHDET[i].n !== ch) continue;
    /* 🔴 2026-09-09 A：★★見出しに【 で学ぶこと】を足す（★山田様の指示 2026-09-09）
       ★★★「第1章　機械学習 で学ぶこと」── ★全章 同じ形
       ★★トップページの折りたたみは【そのまま】です（★index.html は触っていません） */
    h.innerHTML = '<details class="ch"><summary>' + CHDET[i].s + ' で学ぶこと</summary><ul>'
                + CHDET[i].ul + '</ul></details>';
    return;
  }
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
   ★当時のURL https://www.roppongivc.com/m3v8k1qz6p/  ── ★本番で 200 を確認済み
     ⚠️★★★2026-09-10 に【一般公開のURLへ変えました】（★下の SITE を見てください）。
       ★この行は当時の記録として残しています。★★いまの値ではありません
   ★★これ1行で【4か所】に効きます ── index の［2時間で何が起きたかを読む］と
     ★q05・q21・end の drawForm の［この教材の元になった記事へ］
   ★form（感想フォーム）は まだ空です。★URL を頂いたらここに入れます */
/* 🔴🔴🔴🔴 2026-09-10 記録担当：★★★★記事の URL を【一般公開の形】に変えました
   ★旧 https://www.roppongivc.com/m3v8k1qz6p/（★限定公開のときのURL）
   ★新 https://www.roppongivc.com/agora/ai-olympiad-record/
   ★★出所：docs/111_site_publish_agora_game_20260909.md の §2-3（★山田様のご判断）
     ★記事を /agora/ の下に入れる理由 ── ★★URL 自体が「Agora第1回の記録」だと読め、
       ★検索する側にも Agora と同じ話題のかたまりだと示せるため。
   ★★旧URLは Hugo の aliases で【転送されます】── ★山井さん・飯塚さんに配ったURLは生きます。
   ⚠️★★★ここを直しても【本番には出ません】── ★A105 で同期し、★push しないと反映されません */
var SITE = { ver: 'v1.0', date: '2026-09-02',
             /* 🔴🔴🔴🔴 2026-09-10 記録担当：★★★★感想フォームの URL を入れました（★山田様のご指示）
                ★★山田様「感想ボタンもつけろ。★感想ボタンは記事の［感想を送る］ボタンの
                  リンクにつなげろ、★googleフォームな」（2026-09-10）
                ★★★出どころ ── ★記事（当時 /m3v8k1qz6p/）の［感想を送る］が指していた URL を
                  ★実際に取り出しました（★推測ではありません）。
                ★★これ1行で【3か所】に効きます ── q05・q21・end の drawForm
                ★★★入れる前は「感想フォームは準備中です」と灰色で出ていました */
             form: 'https://docs.google.com/forms/d/e/1FAIpQLScyE3bWc8rh3wcnLLlaxpXOhrwUYjPU-ccS3FfnIZgcoPqkRw/viewform',
             /* 🔴🔴🔴🔴 2026-09-10 記録担当【★自分の誤り】── ★記事の URL を
                【まだ存在しない新URLに先に変えてしまいました】。
                ★★実測：★/agora/ai-olympiad-record/ は【404】。★/m3v8k1qz6p/ が【200】。
                ★★★記事側のURL変更は 記事セッションの担当で、★まだ行われていません。
                  ★私は docs/111 の §2-3 の「確定」を読んで、★★順序を確かめずに先に変えました。
                → ★★生きているURLに戻しました。
                ⚠️★★★★記事側が /agora/ai-olympiad-record/ に切り替えたら【ここを直すこと】。
                  ★1行だけです。★手順書 docs/111 の段2 に書いてあります。
                  ★★旧URLは aliases で転送されるので、★切り替え後も この値のままでも動きます */
             agora: 'https://www.roppongivc.com/m3v8k1qz6p/' };

/* ══════════════════════════════════════════════════════════════════════════
   ★★★原典（出典）── ★★ここ1か所に集める。★書き方が二度とばらけないように
   🔴🔴🔴🔴 2026-09-09 A：★★★★山田様の指摘（2026-09-09）
     「Brown et al. 2020 Table 2.1 ── これって何？ 関連論文？ リンクもつけずに、
      この出典の書き方って中途半端じゃない？ 論文タイトルすらないんじゃないの？
      一般的にこういうときどう書くべきかって作法が全くなってないんじゃないの？」
   ★★★直す前の実態（★実測）── ★リンクは【全ページ0件】／★論文タイトルは【1つもない】／
     ★書き方が【5通り】に分かれていた ──
       ✗「Brown et al. 2020 Table 2.1」（★番号もタイトルもない。★いちばん悪い形）
       ✗「Ouyang et al. 2022 §4.2」（★番号なし）
       ✗「arXiv:2501.12948（Nature 645:633-638）」（★著者なし）
   ★★★出どころ ── 20260611_GenronAI/原論文解説/99_原典照合ログ.md の見出し
     ★★原論文32本のうち31本を【全文取得して照合済み】の記録です。★手で打ち直していません
   ★★使い方  ref('vaswani2017', '§3.2 Eq.1')  → ★著者・年・タイトル・通称・番号・該当箇所＋リンク
   ══════════════════════════════════════════════════════════════════════════ */
var REF = {
  vaswani2017: { a: 'Vaswani et al.', y: 2017, t: 'Attention Is All You Need',
                 alias: 'Transformer の原論文', ax: '1706.03762' },
  brown2020:   { a: 'Brown et al.',   y: 2020, t: 'Language Models are Few-Shot Learners',
                 alias: 'GPT-3 の論文',        ax: '2005.14165' },
  kaplan2020:  { a: 'Kaplan et al.',  y: 2020, t: 'Scaling Laws for Neural Language Models',
                 alias: '規模と性能の関係',    ax: '2001.08361' },
  ouyang2022:  { a: 'Ouyang et al.',  y: 2022, t: 'Training Language Models to Follow Instructions with Human Feedback',
                 alias: 'InstructGPT の論文',  ax: '2203.02155' },
  openai2023:  { a: 'OpenAI',         y: 2023, t: 'GPT-4 Technical Report',
                 alias: 'GPT-4 の技術報告',    ax: '2303.08774' },
  deepseek2025:{ a: 'DeepSeek-AI',    y: 2025, t: 'DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning',
                 alias: 'DeepSeek-R1 の論文',  ax: '2501.12948', extra: 'Nature 645:633-638' }
};

/* ★出典を1つ書く（★loc ＝ 該当箇所。★「Table 2.1」「§3.2 Eq.1」など）
   ★★リンクは arXiv の要旨ページへ（★誰でも無料で読めます）
   ★★★形 ── 著者 年「タイトル」（通称）arXiv:番号 該当箇所 */
function ref(key, loc) {
  var r = REF[key];
  if (!r) return '';
  return r.a + ' ' + r.y + '「' + r.t + '」'
       + (r.alias ? '（' + r.alias + '）' : '')
       + ' <a href="https://arxiv.org/abs/' + r.ax + '" target="_blank" rel="noopener">arXiv:' + r.ax + '</a>'
       + (r.extra ? '（' + r.extra + '）' : '')
       + (loc ? ' ' + loc : '');
}
/* ★★複数の出典を並べる（★／で区切る） */
function refs() {
  var out = [];
  for (var i = 0; i < arguments.length; i += 2) out.push(ref(arguments[i], arguments[i + 1]));
  return out.join(' ／ ');
}

/* ★★出典を HTML から呼ぶ ── <span class="ref" data-ref="brown2020" data-loc="Table 2.1"></span>
   ★★★これで【各ページには鍵と該当箇所だけ】が残り、★書き方は common.js の1か所で決まります。
   ★複数並べるときは | で区切る ── data-ref="vaswani2017|kaplan2020" data-loc="§3.1|Appendix C"
   ★★★次に出典を足す人は【REF に1行 足して data-ref を書く】だけです */
function drawRefs() {
  var es = document.querySelectorAll('[data-ref]');
  for (var i = 0; i < es.length; i++) {
    var e = es[i];
    var keys = (e.getAttribute('data-ref') || '').split('|');
    var locs = (e.getAttribute('data-loc') || '').split('|');
    var out = [];
    for (var j = 0; j < keys.length; j++) {
      var r = ref(keys[j], locs[j] || '');
      if (r) out.push(r);
      else out.push('★未登録の出典: ' + keys[j]);   /* ★★間違いを黙って隠さない */
    }
    var head = e.getAttribute('data-head');
    e.innerHTML = (head ? head + ' ' : '') + out.join(' ／ ');
  }
  return es.length;
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', drawRefs);
else drawRefs();

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
/* ══════════════════════════════════════════════════════════════════════════
   🔴🔴🔴 2026-09-09 A：★★★つまみに「動かせる」印（◀ ▶）を付ける ── ★C案1
   ★★★山田様「これ動かせるって気づかない人もいると言ってた。
     なんかつまみ動かしてくださいとか目立つ形で入れたほうがいい気がする」（2026-09-09）

   ★やり方 ── つまみ1本ずつを <span class="rgw"> で包み、★その ::after に ◀ ▶ を出す。
     ★★★input[type=range] は擬似要素を持てない（置換要素）ので、包む必要があります。
     ★★一度でも動かしたら .moved を付けて印を消します（★邪魔にならない）。
     ★印は pointer-events:none なので【指を邪魔しません】（→ common.css）

   ⚠️★包むときに壊れないか【先に確かめました】──
     ★common.css と23ページの <style> に input[type=range] の
       【直接の子（>）・隣（+ ~）セレクタは0件】。★だから span を挟んでも当たり方は変わりません
   ★★★23ページを触らずに全部に効きます（★common.js は全ページが読み込みます）
   ══════════════════════════════════════════════════════════════════════════ */
/* 🔴🔴 2026-09-09 A：★★レールの【左側を黒く塗る】── ★値の大きさを目で分かるようにする
   ★★★自己申告：★-webkit-appearance:none にしたら accent-color が効かなくなり、
     ★1度目の版では塗り分けが消えていました（★撮った画像を見て気づきました）。
   ★--p（0〜100%）を入れると common.css の linear-gradient がそこまで黒く塗ります */
function paintRange(r) {
  var mn = parseFloat(r.min), mx = parseFloat(r.max), v = parseFloat(r.value);
  if (!isFinite(mn) || !isFinite(mx) || mx === mn) return;
  var p = (v - mn) / (mx - mn);
  if (p < 0) p = 0; if (p > 1) p = 1;
  r.style.setProperty('--p', (p * 100).toFixed(2) + '%');
}

function markRanges() {
  var rs = document.querySelectorAll('input[type=range]');
  for (var i = 0; i < rs.length; i++) {
    var r = rs[i];
    paintRange(r);                                                   /* ★毎回 塗り直す */
    if (r.parentNode && r.parentNode.className === 'rgw') continue;   /* ★二重に包まない */
    if (r.disabled) continue;
    var w = document.createElement('span');
    /* 🔴🔴 2026-09-09 A：★★印は【そのページの1本目のつまみだけ】に付ける（→ common.css の .rgw--hint）
       ★★★理由：★印の場所16pxを全部のつまみに確保したら、★つまみが10本ある q09 で
         ★★会話を読む窓が【454px（15行）→ 78px（2.6行）】になりました（★検証セッションの実測）。
       ★1本目で「動かせる」と分かれば足ります */
    w.className = markRanges._first ? 'rgw' : 'rgw rgw--hint';
    markRanges._first = true;
    r.parentNode.insertBefore(w, r);
    w.appendChild(r);
    /* ★動かしたら印を消す（★input は動かした瞬間・change は指を離したとき） */
    (function (r2, w2) {
      /* ★★class を組み立て直す（★--hint が付いている1本目は それを保ったまま moved にする） */
      var off = function () {
        w2.className = (w2.className.indexOf('rgw--hint') >= 0 ? 'rgw rgw--hint moved' : 'rgw moved');
        paintRange(r2);
      };
      r2.addEventListener('input', off);
      r2.addEventListener('change', off);
      r2.addEventListener('keydown', off);
    })(r, w);
  }
  return rs.length;
}
/* ★★あとから JS が作るつまみにも効かせる ── ★描き直しのあとに もう一度 呼ぶ
   ★★★DOMContentLoaded のあと 1回 ＋ 800ms 後に1回（★図を描いてから作られるものがある） */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    markRanges(); setTimeout(markRanges, 800);
  });
} else { markRanges(); setTimeout(markRanges, 800); }
/* ★★★各ページの JS が r.value を書き換えたとき（★「はじめの場所に戻す」など）にも塗り直す
   ★input イベントは【人が動かしたときだけ】飛ぶので、★プログラムからの変更では飛びません。
   ★★だから 300ms ごとに全部を塗り直す（★値が変わっていなければ何も起きない軽い処理） */
setInterval(function () {
  var rs = document.querySelectorAll('input[type=range]');
  for (var i = 0; i < rs.length; i++) paintRange(rs[i]);
}, 300);

function drawFoot(note) {
  var h = document.getElementById('foot'); if (!h) return;
  h.className = 'foot';
  /* 🔴🔴🔴 2026-09-09 A：★★★著作権表示にした（★山田様の指定 2026-09-09）
     ★★直す前は社名がただ並んでいるだけで、★★★何の関係なのかを示していませんでした
       （★リンク先が六本木VC なので「関連会社か？ 広告か？」と読まれる形）。
     ★★★© は【誰が作って誰が権利を持つか】を1行で示す標準の印です。
     ★年は SITE.date から取ります（★直書きしない → 検査⑹） */
  h.innerHTML = 'Deep Black Box ' + SITE.ver + ' ／ ' + SITE.date
    + '　© ' + SITE.date.slice(0, 4)
    + ' <a href="https://www.roppongivc.com/" target="_blank" rel="noopener">六本木ベンチャーキャピタル</a>'
    + '　|　無断転載を禁じます'
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
  /* 🔴 2026-09-09 A（午前）：★第4の選択肢 table を足した（★index だけ表を出さない形にした）
     🔴🔴🔴 2026-09-09 A（午後）：★★★表そのものを【廃止した】ので o.table は【もう見ていません】
       ★山田様「消して、今ここをどこかで表現できればいい。基本的には入れ子図の中で」（2026-09-09）
       ★★表が持っていた章の対応は【枠の右端の章番号】が引き受けました（→ 下の C の c）
     ⚠️★index.html はまだ { table: false } を渡していますが【無視されます】（★害はありません）*/
  var oHead = (o.head !== false), oOut = (o.outside !== false);
  /* 🔴🔴 2026-09-09 A：★★c ＝【その枠がどの章か】（★呼び名の表を廃止したので図が引き受ける）
     ★★★山田様「消して、今ここをどこかで表現できればいい。基本的には入れ子図の中で」（2026-09-09）
     ★★★表が持っていた「機械学習＝第1章／深層学習＝第2章／LLM＝第3章・第4章」の対応を
       ★枠の右端に移した。★これで表を消しても章の対応は失われない */
  var C = [
    { t: '機械学習',                   c: '第1章',        f: '#f6fafd', s: '#7ea9d4', n: 1 },
    { t: 'ディープラーニング（深層学習）', c: '第2章',        f: '#f5fbf7', s: '#77bb92', n: 2 },
    { t: 'LLM（大規模言語モデル）',      c: '第3章・第4章', f: '#fffaf0', s: '#dcae5c', n: 3 }
  ];
  /* 🔴🔴🔴 2026-09-09 A：★★★第5章は【入れ子の外】に帯1本で置き、矢印で下ろす
     ★★★山田様「決定木ってするの絶対おかしいだろ、これは機械学習の中身に含まれるだろ、
       そういうことじゃなくてタイタニックのなんだっけ現実のデータとかそう言う意味の
       応用章みたいな意味を出したほうがいいだろ」（2026-09-09）
     ★★★つまり ── 入れ子は【どの技術の話か】の軸。★第5章はその軸の話ではなく【応用の章】。
       ★だから枠の中に並べない（★決定木を枠にするのは私の誤り。★決定木は機械学習の中身）。
       ★入れ子ぜんたいから矢印を下ろして「ここまでを本物のデータで試す」と置く。
     ★★旧「第5章 は この外（道具が変わる）」＋破線は【廃止】── ★山田様「意味わかりにくい」 */
  var C5 = { t: 'ここまでを本物のデータで試す', c: '第5章', f: '#f7f7f8', s: '#a9a9b0', n: 5 };
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
  /* 🔴 2026-09-09 A：★第5章の帯も頭打ちの判定に入れる（★枠0 と同じ幅を使う） */
  cap = Math.min(cap, inner(0) / emw(C5.t) * 0.94);
  var FL = Math.max(15, Math.min(Math.floor(cap), Math.round(TARGET * W / rw)));
  var FN = Math.round(FL * 0.88);

  /* ★右端に出す文字（★章番号 ＋ いまここ）
     🔴🔴 2026-09-09 A：★★★ch===0（トップページ）のときは【旧と同じ 'いまここ' で判定する】。
       ★理由：★ここで判定を変えると TWO が変わり、★帯の厚み BH が変わって
         ★★【固まったトップページの図の高さが動いてしまう】。★実測で index の出力は1バイトも変えていない */
  var rtW = function (cl) { return (ch > 0) ? emw(cl + '　いまここ') : emw('いまここ'); };

  /* ★「いまここ」が1行に入るか（★いちばん厳しい枠で判定して全部そろえる）
     ★★どの章のページでも同じ形になるように【いまここが付いた状態】で判定する */
  var TWO = false;
  for (var i = 0; i < 3; i++)
    if (emw(C[i].t) * FL + 16 + rtW(C[i].c) * FN > inner(i)) TWO = true;
  if (emw(C5.t) * FL + 16 + rtW(C5.c) * FN > inner(0)) TWO = true;

  var L1 = TP + ASC * FL;
  var L2 = TWO ? (L1 + DESC * FL + GAP + ASC * FN) : L1;
  var BH  = Math.ceil(L2 + DESC * (TWO ? FN : FL) + BP);   /* 1段ぶんの帯の厚み */
  var IH  = BH + Math.round(FL * 0.7);                     /* いちばん内側の箱（★帯＋中身） */
  var BOT = Math.max(14, Math.round(BH * 0.22));           /* 下の食い込み */
  var HH = [BH + (BH + IH + BOT) + BOT, BH + IH + BOT, IH];

  /* ★右端の文字を1つの text で描く（★章番号は灰・いまここは赤。★tspan で色を分ける）
     ★text-anchor="end" なので中身は右詰めのまま左へ流れる */
  var rtag = function (xr, yr, cl, on) {
    return '<text class="nb" x="' + xr + '" y="' + yr.toFixed(1) + '" font-size="' + FN + '"'
         + ' text-anchor="end" font-family="Inter,system-ui,sans-serif" font-weight="700">'
         + '<tspan fill="#444">' + cl + '</tspan>'
         + (on ? '<tspan fill="#c0392b">　いまここ</tspan>' : '')
         + '</text>';
  };

  var g = '';
  for (var i = 0; i < 3; i++) {
    var x = 14 + i * PAD, y = TOP + i * BH, w = W - 28 - i * PAD * 2, hh = HH[i];
    var on = (C[i].n === ch) || (i === 2 && ch === 4);
    g += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + hh + '" rx="8"'
       + ' fill="' + C[i].f + '" stroke="' + C[i].s + '" stroke-width="' + (on ? 3 : 1.6) + '"/>'
       + '<text class="nl" x="' + (x + 14) + '" y="' + (y + L1).toFixed(1) + '" font-size="' + FL + '" font-weight="700"'
       + ' font-family="Inter,system-ui,sans-serif" fill="#1a1a1a">' + C[i].t + '</text>';
    /* 🔴 2026-09-09 A：★章番号は【章のページだけ】出す（★ch===0 のトップページには出さない。
       ★トップは真下に5章の表があるので重複する。→ ★index の出力は1バイトも変わらない） */
    if (ch > 0) g += rtag(x + w - 14, y + L2, C[i].c, on);
  }
  var BOTY = TOP + HH[0];
  /* 🔴🔴🔴 2026-09-09 A：★★★第5章 ── 矢印1本＋帯1本（★旧「この外」＋破線を置き換えた）
     ★o.outside===false（★トップページ）では出しません ── ★下に5章の表があるので重複
     ★出さないときは viewBox の高さも詰めます（★下に空きが残らないように） */
  var VBH;
  if (oOut) {
    var G5 = Math.round(FL * 0.45), ARR = Math.round(FL * 0.80), AH = Math.round(FL * 0.45);
    var ay = BOTY + G5, cx = W / 2, on5 = (ch === 5);
    var y5 = ay + ARR + AH + G5;
    g += '<line x1="' + cx + '" y1="' + ay + '" x2="' + cx + '" y2="' + (ay + ARR) + '"'
       + ' stroke="#9a9a9a" stroke-width="2"/>'
       + '<polygon points="' + cx + ',' + (ay + ARR + AH) + ' ' + (cx - AH * 0.62) + ',' + (ay + ARR)
       +   ' ' + (cx + AH * 0.62) + ',' + (ay + ARR) + '" fill="#9a9a9a"/>'
       + '<rect x="14" y="' + y5 + '" width="' + (W - 28) + '" height="' + BH + '" rx="8"'
       + ' fill="' + C5.f + '" stroke="' + C5.s + '" stroke-width="' + (on5 ? 3 : 1.6) + '"/>'
       + '<text class="nl" x="28" y="' + (y5 + L1).toFixed(1) + '" font-size="' + FL + '" font-weight="700"'
       + ' font-family="Inter,system-ui,sans-serif" fill="#1a1a1a">' + C5.t + '</text>'
       + rtag(W - 28 - 14, y5 + L2, C5.c, on5);
    VBH = Math.ceil(y5 + BH + 2);
  } else { VBH = BOTY + 14; }
  h.innerHTML =
    (oHead ? '<div class="ft">いま どこの話をしているのか</div>' : '')
  + '<svg class="dg" viewBox="0 0 560 ' + VBH + '" role="img" aria-label="'
  +   (oOut ? '機械学習の中に深層学習、その中に LLM。第5章はその外で、ここまでを本物のデータで試す'
            : '機械学習の中に深層学習、その中に LLM') + '">'
  +   g + '</svg>';
  /* 🔴🔴🔴 2026-09-09 A：★★★呼び名の表（.ntab）を【廃止しました】── ★山田様の指示（2026-09-09）
     ★★理由：★★問題ページにだけ出ていて【トップと不統一】だった（★トップは 9/8 に消している）。
       ★さらに表の文言が §2-15 に2件 触れていた ──
         ✗「掛けて足す【箱】を何段も重ねて」（★原則⑥で「箱」は禁止）
         ✗「次の1語を当てる【だけ】」（★原則④の断定）
       ★★★そして表の章の欄は第1〜4章しかなく【第5章の行が無かった】。
     ★★表が持っていた「どの章がどこか」は【入れ子図の右端の章番号】が引き受けました（→ C の c）。
     ⚠️★index.html はまだ { table: false } を渡していますが【無視されます】（★害はありません）。
       ★次に index を触るときに引数を外してください（★いま index を触らないため残しています） */
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

/* ══════════════════════════════════════════════════════════════════════════
   🔴🔴🔴🔴 2026-09-09 記録担当：★★★★上下2分割（案A・2代目）の部品を
     splitA2.js から【そのまま移しました】（★220行。★中身は1文字も変えていません）。
   ★★出所 ── ★見本は展開担当が作り、★★山田様が触って承認された形です。
     ★取り込んだのは commit f86e66a（★data-movedown 入り）。
     ⚠️★★★展開担当の報告にあった md5 0ec1bb1a… は【誤りでした】。
       ★私が実測した正しい値は bef601db6d8fd561956803bb32dc344e で、
       ★作業コピー・commit f86e66a・HEAD の3つが一致しています（★未コミットの差分なし）。
       → ★★★引き継ぎ書の数字も報告の数字も信じず、★自分で測ること。
   ★★★なぜ移したか ── ★A105 の検査⑼ が、出せるものを
     【HTML・common.css・common.js・assets だけ】に限っているためです。
     ★★splitA2.js は【製品の部品】なので、出せる場所に入れるのが正しい形です。
     ⚠️★★★この1点で【丸一日 分割が0ページのまま止まりました】。★壁ではありませんでした。

   ★★★★包んだ理由（★ここだけが私の足したもの）
     ★★common.js は【body の途中】で読まれます（★q02 では531行目）。
     ★元の splitA2.js は【body の末尾】で読まれる前提だったので、
       ★★★ページによっては【分割の枠がまだ組み立てられていない】ことがあり得ます。
     → ★★DOM が揃ってから動かす形にしました。★中の処理は原文のままです。
   ★★★分割していないページでは【何もしません】── ★原文の先頭に
     data-split が A2 でなければ即座に戻る作りがあります（★実測で確認）。
   ══════════════════════════════════════════════════════════════════════════ */
(function () {
  var __splitBoot = function () {
/* ══════════════════════════════════════════════════════════════════════════
   splitA2.js ── 上下2分割（案A・2代目）
   🆕 2026-09-09 新設 ／ 🔴 2026-09-09 展開担当が【id 決め打ちを data 属性に】直した

   ★★★見本（q02）の設計は1つも変えていません。★変えたのは【誰を掴むか】の指定だけです。
     旧  var wrap = document.getElementById('q2wrap');  ← ★q02 専用
     新  <body data-split="A2" data-top="q09top" data-talk="q09talk"
               data-figs="bd9,net9" data-verdict="j9" data-figcap="…">
     ★★これで20ページに同じ部品を使えます（★ページごとに JS を増やさない）

   ★★高さは全部 window.innerHeight から【px で計算】（★vh を使わない → The Pudding）
   ★★★1代目・2代目が踏んだ穴は splitA2.css の中に理由つきで書いてあります
   ══════════════════════════════════════════════════════════════════════════ */
(function () {
  var B = document.body;
  if (B.getAttribute('data-split') !== 'A2') return;

  var ID = function (n) { return B.getAttribute(n) || ''; };
  var top_ = document.getElementById(ID('data-top'));
  var talk = document.getElementById(ID('data-talk'));
  if (!top_ || !talk) return;

  /* ★★掴む対象に class を付ける（★CSS は class で書いてあるので id に依らない） */
  top_.classList.add('splittop');
  talk.classList.add('splittalk');
  var wrap = top_.parentNode;
  if (wrap) wrap.classList.add('splitwrap');

  /* ★図の id（★複数。★カンマ区切り）── ★★実例 q02 は p2,p2m ／ q09 は bd9,net9
     ★★★図が2つ以上あるページで1つしか固定しないのは【考慮不足】です（→ 1代目の誤り⑹） */
  var figIds = ID('data-figs').split(',').map(function (s) { return s.trim(); }).filter(Boolean);
  var vid = ID('data-verdict');
  /* 🔴🔴🔴 2026-09-09 展開担当【新設】★★★data-movedown ── ★上の枠に置かないものを
     ★【下の枠の先頭へ DOM ごと移す】（★カンマ区切り。★閉じたら元に戻す）
     ★★★出所：決定1「上の枠に置く図は1枚。★変わらない図・2枚目は下の枠の先頭へ」
       ★理由（実測）── ★bd9 が14pxになるには高さ422px 必要ですが、
         ★分割中に与えられるのは119px（664）／182px（844）。★2枚同時は算数として不可能です。
     ★★実例 q09 は net9 ／ q10 は gr10 ／ q21 は ln20 を下へ移します */
  var mdIds = ID('data-movedown').split(',').map(function (s) { return s.trim(); }).filter(Boolean);
  var figcap = ID('data-figcap');

  /* 🔴 2026-09-09：★上の割合 ── ★実測で決めた 0.68（★q02 で 図2枚が各119px・下が7行） */
  var ratio = parseFloat(ID('data-ratio')) || 0.68;
  var open = false, row = null, homes = [];

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'splitbtn';
  btn.innerHTML = '▶ 画面を上下に分けて動かす';

  var bar = document.createElement('div');
  bar.className = 'splitbar';
  bar.innerHTML = '<span class="grip"></span><button type="button" class="closebtn">閉じる</button>';

  /* ★★図を1つの行にまとめる（★上下に積む。★横に並べない → 2代目の誤り⑸） */
  function makeRow() {
    if (row) return;
    var svgs = [];
    figIds.forEach(function (i) { var e = document.getElementById(i); if (e) svgs.push(e); });
    if (!svgs.length) return;
    row = document.createElement('div');
    row.className = 'figrow2';
    if (figcap) {
      var c = document.createElement('div');
      c.className = 'figrow2cap';
      c.textContent = figcap;
      row.appendChild(c);
    }
    homes = svgs.map(function (s) { return { el: s, next: s.nextSibling, parent: s.parentNode }; });
    top_.insertBefore(row, top_.firstChild);
    svgs.forEach(function (s) { row.appendChild(s); });
  }
  function unmakeRow() {
    if (!row) return;
    /* 🔴🔴 2026-09-09 展開担当【見本にあった不具合を直しました】── ★自己申告
       ★★元に戻す順が【前から】だったので、★★2つの図が【同じ親】にあるページで落ちます。
         ★実例 q09 ── bd9 と net9 はどちらも .figrow の子。
           ★bd9 の「元の次の兄弟」は net9 だが、★戻す時点で net9 はまだ row の中にいるので
           ★★insertBefore が NotFoundError で落ち、★閉じるが効かなくなります（★実測で捕まえた）。
       ★★q02 では p2 と p2m が【別の親】だったので出ませんでした。
       → ★★★後ろから戻す。★そうすれば「次の兄弟」が先に元の場所へ帰っています */
    for (var z = homes.length - 1; z >= 0; z--) {
      var h = homes[z];
      h.el.style.height = h.el.style.maxHeight = '';
      h.parent.insertBefore(h.el, h.next);
    }
    row.parentNode.removeChild(row);
    row = null; homes = [];
  }

  function layout() {
    var H = window.innerHeight;                 /* ★★実測の px（★vh を使わない） */
    var topH = Math.round(H * ratio);
    var botH = H - topH;

    top_.style.height = topH + 'px';
    talk.style.top = topH + 'px';
    talk.style.height = botH + 'px';
    bar.style.top = topH + 'px';

    /* ★★図に回せる高さ ＝ 上の枠 −（図の行より下の中身の合計）− 帯 */
    var used = 0, kids = top_.children;
    for (var q = 0; q < kids.length; q++) {
      if (kids[q] === row) continue;
      used += kids[q].getBoundingClientRect().height;
    }
    var room = topH - Math.round(used) - 40;
    if (row) {
      var capH = figcap ? 20 : 0;
      var svgs = [];
      for (var j = 0; j < row.children.length; j++)
        if (row.children[j].tagName.toLowerCase() === 'svg') svgs.push(row.children[j]);
      var each = Math.max(80, Math.floor((room - capH - 4 * (svgs.length - 1)) / svgs.length));
      for (var i = 0; i < svgs.length; i++) {
        svgs[i].style.height = each + 'px';
        svgs[i].style.maxHeight = each + 'px';
      }
      /* 🔴🔴🔴🔴 2026-09-10 記録担当（3代目）：★★★★溢れたぶんを【実測して引きます】。
         ★★上の式は 上の枠の padding-top と 要素どうしの間のすき間を数えていないので、
           ★★★測り直しを入れたあと 8〜14px 縦に溢れていました
             （★実測 q02 8／q07 14／q09 11／q10 11／q11 12）。
         ★余白を式で数えるのはやめました ── ★★数え漏れがまた起きます。
           ★★★出た結果を測って、溢れたぶんだけ引くほうが確実です。
         ⚠️★★★★引く量に【上限 16px】を付けています。★これが無いと、
           ★元から大きく溢れているページ（★図ではなく【図以外の中身】が多いページ）で
           ★★図だけが大きく削られます ── ★実測で q06 の図が 232px → 181px になりました。
           ★★★q06 は山田様がご承認済みなので、★勝手に小さくしてはいけません。
           → ★上限を付けると q06 は 216px に収まり、★元（232px）との差は 16px です。
         ★引くのは1回だけです（★引けば新しい溢れは消えるので、回り続けません）。 */
      var over = top_.scrollHeight - Math.round(top_.getBoundingClientRect().height);
      if (over > 0) {
        var cut = Math.min(16, Math.ceil(over / svgs.length));
        var e2 = Math.max(80, each - cut);
        if (e2 < each) for (var k2 = 0; k2 < svgs.length; k2++) {
          svgs[k2].style.height = e2 + 'px';
          svgs[k2].style.maxHeight = e2 + 'px';
        }
      }
    }
  }

  /* ★★判定文を【下の枠の先頭へ DOM ごと移す】（★fixed で重ねるとボタンを隠す → 誤り⑶）
     🔴 2026-09-09 展開担当：★★★data-verdict を【カンマ区切りの複数】にした。
       ★★理由（実測）── ★q09 は判定文（j9）のほかに【つまみの内わけ（net9c）】という
         ★読み上げ文があり、★★それだけで 139px 占めていました（★上の枠452px のうち）。
         ★これを上に置くと 図に回せる高さが 110px しか残らず、
         ★★図2枚が下限の 80px まで潰れます（★実測）。
       ★★移した後は 図に回せる高さが 249px になり、★図は各 112px になります */
  var mvHome = [];
  function moveVerdict(v) {
    /* ★★判定文と【下へ移すもの（data-movedown）】をまとめて扱う。
       ★★★並び ── ★判定文が先、★そのあとに移した図（★読む順に合わせる） */
    var ids = vid.split(',').map(function (x) { return x.trim(); }).filter(Boolean).concat(mdIds);
    if (v) {
      if (!mvHome.length) {
        ids.forEach(function (i) {
          var e = document.getElementById(i);
          if (e) mvHome.push({ el: e, next: e.nextSibling, parent: e.parentNode });
        });
      }
      /* ★先頭に積むので、★元の並び順を保つため 後ろから入れる */
      for (var k = mvHome.length - 1; k >= 0; k--) talk.insertBefore(mvHome[k].el, talk.firstChild);
    } else {
      /* ★★同じ理由で【後ろから】戻す（★j9 の次の兄弟が net9c のような場合） */
      for (var z = mvHome.length - 1; z >= 0; z--)
        mvHome[z].parent.insertBefore(mvHome[z].el, mvHome[z].next);
    }
  }

  /* ★★★閉じたとき【いま読んでいる場所から続ける】 */
  function markHere() {
    var kids = talk.querySelectorAll('.cl, h3, .verdict, .figbox');
    var topEdge = talk.getBoundingClientRect().top + 44;
    var best = null, bestD = 1e9;
    for (var i = 0; i < kids.length; i++) {
      var r = kids[i].getBoundingClientRect();
      if (r.height === 0) continue;
      var d = Math.abs(r.top - topEdge);
      if (d < bestD) { bestD = d; best = kids[i]; }
    }
    return best;
  }

  /* 🔴🔴🔴🔴 2026-09-10 記録担当（3代目）：★★★★中身の高さが【あとから変わる】のを見張ります。
     ★★実測（q09・390×664）── ★開いた直後の つまみの枠は【309px】で、
       ★★0.8秒ほどかけて【216px】まで縮みます。★★★その瞬間の値で図の高さを決めていたので、
       ★境目のグラフが【96px】しかもらえていませんでした（★正しくは 189px。★実効 4.27px 対 8.40px）。
     ★rAF 2回 と フォントの読み込み完了では【間に合いませんでした】（★実測）。
     → ★★大きさが変わったら測り直す形にします。
     ⚠️★★★見張るのは【図の行より外の中身】だけです。★図の行を見張ると
       ★layout() が図の高さを変える → また呼ばれる、で【回り続けます】。
     ★★念のため回数に上限（12回）を付けています。★開き直すと 0 に戻ります。 */
  var ro = null, roN = 0, roT = null;
  function watch() {
    if (!window.ResizeObserver) return;
    roN = 0;
    if (!ro) ro = new ResizeObserver(function () {
      if (!open || roN >= 12) return;
      roN++;
      clearTimeout(roT);
      roT = setTimeout(function () { if (open) layout(); }, 60);
    });
    ro.disconnect();
    for (var i = 0; i < top_.children.length; i++)
      if (top_.children[i] !== row) ro.observe(top_.children[i]);
  }
  function unwatch() { if (ro) ro.disconnect(); clearTimeout(roT); }

  function setOpen(v) {
    var here = (!v && open) ? markHere() : null;
    if (!v) unwatch();
    open = v;
    if (v) { makeRow(); moveVerdict(true); } else { moveVerdict(false); }
    B.classList.toggle('split-on', v);
    if (v) {
      layout();
      /* 🔴🔴🔴🔴 2026-09-10 記録担当（3代目）：★★★★開いた直後の1回だけでは足りません。
         ★★実測（q09・390×664）── ★開いた直後の つまみの枠は【309px】で、
           ★★0.8秒後に【216px】まで縮みます（★Web フォントの読み込みが終わって文字の高さが確定する）。
         ★★★その 93px の差のぶん、★図に回せる高さが少なく見積もられ、
           ★q09 の境目のグラフは【96px】しかもらえていませんでした（★正しくは 189px）。
           ★実効フォントで言うと 4.27px 対 8.40px です。
         → ★★フォントが揃ったら もう一度 測り直します。
           ★layout() は【何度呼んでも同じ結果になる】ので、呼び直しても副作用はありません。
         ★★★この直しで図が小さくなるページはありません ── ★中身の高さの見積りが
           【過大 → 正確】になるだけなので、★図に回る高さは 増えるか 同じです（★全21問で実測しました）。 */
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { if (open) layout(); });
      });
      if (document.fonts && document.fonts.ready)
        document.fonts.ready.then(function () { if (open) layout(); });
      watch();
    }
    else {
      unmakeRow();
      top_.style.height = '';
      talk.style.top = talk.style.height = '';
      if (here) {
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            var y = here.getBoundingClientRect().top + window.pageYOffset - 70;
            window.scrollTo(0, Math.max(0, Math.round(y)));
          });
        });
      }
    }
    btn.style.display = v ? 'none' : '';
  }

  btn.onclick = function () { setOpen(true); };
  bar.querySelector('.closebtn').onclick = function () { setOpen(false); };

  var dragging = false;
  bar.addEventListener('touchstart', function (e) { dragging = true; e.preventDefault(); }, { passive: false });
  bar.addEventListener('mousedown', function (e) { dragging = true; e.preventDefault(); });
  function move(e) {
    if (!dragging) return;
    var y = (e.touches ? e.touches[0].clientY : e.clientY);
    ratio = Math.min(0.80, Math.max(0.24, y / window.innerHeight));
    layout(); e.preventDefault();
  }
  window.addEventListener('touchmove', move, { passive: false });
  window.addEventListener('mousemove', move);
  window.addEventListener('touchend', function () { dragging = false; });
  window.addEventListener('mouseup', function () { dragging = false; });

  var tid = null;
  window.addEventListener('resize', function () {
    if (!open) return;
    clearTimeout(tid); tid = setTimeout(layout, 120);
  });

  /* ★★ボタンを【図の直前】に置く（★上の枠の直前）── ★山田様の指摘⑴ */
  function place() {
    if (btn.parentNode) return;
    top_.parentNode.insertBefore(btn, top_);
    talk.appendChild(bar);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', place);
  else place();

  /* ★★測定用に外から触れるようにする（★開いた状態を機械で測るため） */
  window.__split = { open: function () { setOpen(true); }, close: function () { setOpen(false); },
                     layout: layout, isOpen: function () { return open; } };
})();
  };
  if (document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', __splitBoot);
  else __splitBoot();
})();

/* ══════════════════════════════════════════════════════════════════════════
   🔴🔴🔴🔴 2026-09-10 記録担当：★★★★分割中の【前へ／次へ】を
     「いちばん下まで読んだら出す」形にする（★山田様のご指摘 2026-09-10）
   ★★山田様「分割して最初からずっと画面の下に出ている。★まあこれでもいいけど、
     ★★スペースのためにも、1番下まで言ってから次に進むとか出たほうがいいんだけど」
   ★★★理由（★実測）── ★分割中の下の枠は【212px】しかなく、
     ★★ナビの59pxは【28%】を占めます。★読んでいる間は会話に使うべきです。

   ★★やり方 ── ★下の枠（.splittalk）のスクロールを見て、
     ★★★いちばん下から【24px 以内】まで来たら body に navon を付けます。
     ★24px にした理由：★ぴったり0だと 端数の誤差で出ないことがあります（★実測で決めた値）。
   ★★閉じたときは navon を外します（★分割していないときは元どおり下に流れて出ます）。
   ⚠️★★★見た目を変えたので【点で測って確かめること】── ★visibility だけでは足りません。
     ★私はそれで3回 誤りました（→ common.css の #nav のところ）
   ══════════════════════════════════════════════════════════════════════════ */
(function () {
  var 見張り = function () {
    var 下 = document.querySelector('.splittalk');
    if (!下) return;
    var つく = function () {
      /* ★分割していないときは何もしない */
      if (!document.body.classList.contains('split-on')) {
        document.body.classList.remove('navon');
        return;
      }
      var 余り = 下.scrollHeight - 下.scrollTop - 下.clientHeight;
      document.body.classList.toggle('navon', 余り <= 24);
    };
    下.addEventListener('scroll', つく, { passive: true });
    /* ★開いた直後・閉じたとき・画面の向きが変わったときにも見直す */
    window.addEventListener('resize', つく);
    setTimeout(つく, 60);
    return つく;
  };

  var 始める = function () {
    /* ★★分割の枠は押したときに作られるので、★出来たかどうかを見張ります。
       ★★★60回（約6秒）で諦めます（★無限に回さない） */
    var 回 = 0, 付けた = null;
    var t = setInterval(function () {
      回++;
      var 下 = document.querySelector('.splittalk');
      if (下 && !付けた) { 付けた = 見張り(); }
      if (!下 && 付けた) {          /* ★閉じられた */
        document.body.classList.remove('navon');
        付けた = null;
      }
      if (回 > 600) clearInterval(t);   /* ★約60秒で止める */
    }, 100);
  };

  if (document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', 始める);
  else 始める();
})();
