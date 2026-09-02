
/* 🔴 2026-09-02 A（統括）：★★上のバーに【エンブレム】と大きいタイトルを入れる
   ★山田様「1番上の AIの詰将棋… がなんでこんなにチープなんだ。
     ここにサムネというか、ちゃんとわかりやすいゲームのアイコンかエンブレムかなんかと、
     大きくタイトルを書いてほしい」（2026-09-02）
   ★★将棋の駒（五角形）の中に【AI】。★画像ファイルを使わない SVG なので 23ページで軽い
   ★★★製品名は「AIの詰将棋」。✗「詰めKaggle」は使えない（★Kaggle が Google のブランド） */
function drawTop(){
  var box = document.querySelector('.top .in'); if (!box) return;
  var tag = box.querySelector('.tag');
  var sub = tag ? tag.innerHTML : '';
  box.innerHTML =
    '<svg class="em" viewBox="0 0 44 44" aria-label="AIの詰将棋">'
    + '<path d="M22 3 L36 10.5 L33 40 L11 40 L8 10.5 Z" fill="#fff" stroke="#1a1a1a" stroke-width="2.2" stroke-linejoin="round"/>'
    + '<path d="M22 6.6 L32.8 12.4 L30.4 37 L13.6 37 L11.2 12.4 Z" fill="none" stroke="#1a1a1a" stroke-width="1"/>'
    + '<text x="22" y="29" text-anchor="middle" font-size="15" font-weight="700"'
    + ' font-family="Inter,system-ui,sans-serif" fill="#1a1a1a" letter-spacing="0.5">AI</text>'
    + '</svg>'
    + '<span class="ti"><b class="nm">AIの詰将棋</b>'
    + '<span class="tag">' + sub + '</span></span>';
}
/* ══════════════════════════════════════════════════════════════════════════
   AIの詰将棋 ── common.js（23ページで共有）
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
var SITE = { ver: 'v1.0', date: '2026-09-02', form: '', agora: '' };

/* ★フッタ（★23ページ一括。★版と日付は SITE から読む） */
function drawFoot(note) {
  var h = document.getElementById('foot'); if (!h) return;
  h.className = 'foot';
  h.innerHTML = 'AIの詰将棋 ' + SITE.ver + ' ／ ' + SITE.date
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
var CAST = [
  ['d', '博士', '',
   'AIの研究者。<b>元大学教授</b>で、機械学習を教えていた。'
  + '「説明を読ませるより、<b>つまみを回させたほうが早い</b>」が信条で、大学のやり方と合わずに辞めた。'
  + 'いまは家の一室でひとり実験している。'],
  ['m', '深井 学', 'ふかい まなぶ ／ 高校2年',
   '<b>数学は得意</b>だが、AI は素人。'
  + '「みんな AI って言うけど、<b>中で何が起きてるのか誰も説明してくれない</b>」が動機。'
  + '小学生のころから博士の家に出入りしている。<b>納得しないと引かない。</b>']
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
  var oHead = (o.head !== false), oOut = (o.outside !== false);
  var C = [
    { t: '機械学習',                   f: '#f6fafd', s: '#7ea9d4', n: 1 },
    { t: 'ディープラーニング（深層学習）', f: '#f5fbf7', s: '#77bb92', n: 2 },
    { t: 'LLM（大規模言語モデル）',      f: '#fffaf0', s: '#dcae5c', n: 3 }
  ];
  var W = 560, PAD = 26, TOP = 30, BH = 34;
  var g = '';
  for (var i = 0; i < 3; i++) {
    var x = 14 + i * PAD, y = TOP + i * BH,
        w = W - 28 - i * PAD * 2, hh = 214 - i * BH * 2 + (i * 12);
    var on = (C[i].n === ch) || (i === 2 && ch === 4);
    g += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + hh + '" rx="7"'
       + ' fill="' + C[i].f + '" stroke="' + C[i].s + '" stroke-width="' + (on ? 3 : 1.6) + '"/>'
       + '<text x="' + (x + 12) + '" y="' + (y + 21) + '" font-size="15" font-weight="700"'
       + ' font-family="Inter,system-ui,sans-serif" fill="#1a1a1a">' + C[i].t + '</text>';
    if (on) g += '<text x="' + (x + w - 12) + '" y="' + (y + 21) + '" font-size="14" font-weight="700"'
       + ' text-anchor="end" font-family="Inter,system-ui,sans-serif" fill="#c0392b">いまここ</text>';
  }
  /* 🔴 2026-09-02 1問1ページ担当2代目：★「第5章 は この外」＋破線は o.outside===false で出しません
     （★トップページには下に5章の表があるので重複。→ 山田様「ここでいらない」）
     ★出さないときは viewBox の高さも詰めます（★下に空きが残らないように） */
  var VBH = 300;
  if (oOut) {
    g += '<line x1="14" y1="272" x2="546" y2="272" stroke="#d9d9d9" stroke-dasharray="4 3"/>'
       + '<text x="20" y="290" font-size="14" font-family="Inter,system-ui,sans-serif" fill="#6e6e6e">'
       + '第5章 は この外（道具が変わる）</text>';
  } else { VBH = 258; }
  h.className = 'fg';
  var mark = function (n) { return ch === n ? '　<b>← いまここ</b>' : ''; };
  h.innerHTML =
    (oHead ? '<div class="ft">いま どこの話をしているのか</div>' : '')
  + '<svg class="dg" viewBox="0 0 560 ' + VBH + '" role="img" aria-label="機械学習の中に深層学習、その中に LLM">'
  +   g + '</svg>'
  + '<table><tr><th>呼び名</th><th>やること</th><th>章</th></tr>'
  +   '<tr><td>機械学習</td><td>データを見て、機械が自分でつまみを決める。人が数字を手で書かない。</td>'
  +     '<td>第1章' + mark(1) + '</td></tr>'
  +   '<tr><td>深層学習</td><td>掛けて足す箱を何段も重ねて、あいだで折り曲げる。</td>'
  +     '<td>第2章' + mark(2) + '</td></tr>'
  /* 🔴 2026-09-02 1問1ページ担当2代目：★「出口5万語」の太字を外しました（★山田様の指定 17:5x） */
  +   '<tr><td>LLM</td><td>やることは「次の1語を当てる」だけ。それを出口5万語まで大きくしたもの。</td>'
  +     '<td>第3章・第4章' + (ch === 3 || ch === 4 ? '　<b>← いまここ</b>' : '') + '</td></tr>'
  + '</table>';
  /* 🔴 2026-09-02 1問1ページ担当2代目：★★図の下の3段落を【全ページから消しました】
     （★山田様の指定 2026-09-02 21:1x「ここいらない。他のページも全部これ出るんでしょ？全部消して」）
     ★消したもの ── ✗「ChatGPT のように文章を作って返す道具を 生成AI と呼びます…」
       ✗「まったく別の技術ではありません。第1章・第2章でやった箱の…」
       ✗「第5章だけは この入れ子の外です ── 本物のデータ（Kaggle）で…」
     ★★SVG の中の「第5章 は この外（道具が変わる）」は別のもので、★q01・q06・q12・q15 では残ります
       （★index.html だけ o.outside===false で出しません）
     ★★これに伴い 第3引数の notes は使わなくなりました（★渡されても無害です） */
}

drawTop();
