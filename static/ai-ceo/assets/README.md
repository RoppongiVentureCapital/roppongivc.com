# assets/ — 画像アセットの差し替え口

ch1.html は **画面内部解像度 1024×768（4:3）固定**で組んである。
ウィンドウサイズに応じて `transform:scale()` で拡大縮小するだけなので、
ここに置く画像は下記のピクセルサイズで作れば必ずぴったり合う。

**このディレクトリにファイルを置くだけで反映される。**
置かなければ、SVG や CSS グラデーションのフォールバックがそのまま出る。
HTML 側を編集する必要はない。

---

## 現在入っているもの

| ファイル | 中身 | 生成元 |
|---|---|---|
| `bg_office.png` | 夕景オフィス 1024×768 | Bedrock Control Structure |
| `bg_office_alt_dusk.png` | 別案（薄暮・ティール寄り） | 同上 seed=21 |
| `bg_office_alt_golden.png` | 別案（強い西日） | 同上 seed=33 |
| `secretary_full.png` | 秘書 全身 透過 396×1020 | Control Sketch → Remove Background |
| `secretary_bust.png` | 秘書 顔 148×148 | 同上を切り出し |

別案を使うときは `bg_office.png` に上書きコピーするだけでよい。

### 再生成

```
python3 assets/gen_bedrock.py bg      # 背景
python3 assets/gen_bedrock.py chara   # 立ち絵
```

`amazon.nova-canvas-v1:0` は **LEGACY 扱いで InvokeModel が拒否される**ため使っていない。
代わりに ACTIVE な Stability モデルを使う。

- `us.stability.stable-image-control-structure-v1:0` … ch1.html 内のSVGオフィスを
  条件画像として渡し、**構図（一点透視・窓の位置・机の位置）を保ったまま**質感だけ
  差し替える。テキストのみの生成より構図を制御できるので、UIの死角と噛み合わせやすい
- `us.stability.stable-image-control-sketch-v1:0` … スクリプト内の線画SVGから立ち絵を起こす
- `us.stability.stable-image-remove-background-v1:0` … 立ち絵を透過に抜く

`control_strength` を上げると下絵に忠実になり、下げると自由に描く。
背景は 0.72、立ち絵は 0.62 で出している。

---

## 優先度A：これを入れると見た目が一番変わる

### `bg_office.png` — オフィス背景
| 項目 | 値 |
|---|---|
| サイズ | **1024×768**（2倍なら 2048×1536） |
| 形式 | PNG または JPG（不透明） |
| 差し替え先 | `<img id="bgimg">`。SVGの手描きオフィスを完全に覆う |

作り方の要点:
- **一点透視**。消失点は画面中央のやや上（y ≈ 300 / 768 付近）
- 画面中央に**窓**、外は夕方の街。左右は壁、手前右に**デスク**
- **上端 40px は上部バー、下端 104px は Information バーに隠れる。**
  重要なものを置かない
- 左の帯（x = 10〜208px）はメニューが重なる。ここも避ける
- **右の帯（x = 816〜1024px）は秘書の立ち絵が立つ。**ここも避ける
- 実際に絵が見えるのは **中央の帯（x = 216〜816）の下半分**。
  上半分はパネルが覆うので、床・机・窓の下部に情報量を集中させる
- 背景画像の上には `#grade` レイヤーが乗って、上下を暗く落とし
  周辺光量を下げている。**元画像は明るめでよい**
- PS2期のプリレンダー感を出すなら、コントラストを落として全体に
  わずかに青を乗せ、窓からの光でハイライトを作る

生成用プロンプトの方向性:
> pre-rendered 3D office interior, one-point perspective, late afternoon
> light through center window, city skyline outside, desk with CRT monitors
> at right, potted plant at left, PS2-era game background, baked lighting,
> slightly desaturated, 4:3

### `secretary_bust.png` — 秘書のバストアップ
| 項目 | 値 |
|---|---|
| サイズ | **74×74**（2倍なら 148×148） |
| 形式 | PNG（背景透過推奨、不透明でも可） |
| 差し替え先 | Information バー左の枠。`object-fit:cover` / 上端基準 |

顔が枠の上寄りに来るように作る（`object-position:top center` 指定済み）。
現状はプレースホルダの丸と「秘書」の文字が出ている。

---

## 優先度B：あると効く

### `secretary_full.png` — 秘書の全身立ち絵
| 項目 | 値 |
|---|---|
| サイズ | 高さ **約 510px**（= 768の66%）／幅は成り行き。2倍なら高さ1020px |
| 形式 | PNG **背景透過必須** |
| 配置 | 画面右端から2%、Information バーの上に立つ |

参考画像（サカつく）のように、背景オフィスの中に人が立っていると
一気に「ゲーム画面」になる。`bg_office.png` に描き込んでしまう手もあるが、
分けておくと表情差分やポーズ差分を後から足せる。

### `ui_topbar.png` — 上部バーの地
| 項目 | 値 |
|---|---|
| サイズ | **1024×40** |
| 形式 | PNG（不透明） |
| 挙動 | `background-size:100% 100%` で伸縮。CSSのグラデーションを覆う |

金属のベベル（上端に白ハイライト、下端に黒の落ち）を焼き込んだ帯。
文字は HTML 側で乗るので、**帯の地だけ**を描く。

### `ui_menu.png` / `ui_menu_sel.png` — メニュー項目の地
| 項目 | 値 |
|---|---|
| サイズ | **198×34** 程度 |
| 形式 | PNG |
| 挙動 | `background-size:100% 100%` で伸縮 |

右端が斜めに切れた平行四辺形は CSS の `clip-path` 側で処理される。
画像は**矩形のまま**作ってよい。`_sel` は選択時（現状は金色）。

---

## フォントについて

UIチロムは `DotGothic16`（Google Fonts のビットマップ体）を使っている。
本文の長い解説文だけは可読性のため `Noto Sans JP` のまま。

- UI用: `var(--ui)` = DotGothic16
- 見出し: `var(--dp)` = Zen Kaku Gothic New
- 本文: `var(--sn)` = Noto Sans JP
- 数字: `var(--nm)` = Oswald

黒縁は `.ol`（1px相当）と `.ol2`（2px相当）のユーティリティクラス。
8方向に `text-shadow` を打っている。新しい文字要素を足すときは
このクラスを付けると他と揃う。

## ドット絵を入れる場合

低解像度のドット絵を意図的に拡大したいときは、ch1.html の

```css
#frame,#frame *{image-rendering:-webkit-optimize-contrast}
```

を

```css
#frame,#frame *{image-rendering:pixelated}
```

に変えると、拡大時に補間されずカクッとしたドットのまま出る。
