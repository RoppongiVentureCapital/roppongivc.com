# 秘書の候補画像（2026-08-16 退避）

**退避した理由。** 生成物が `/tmp` にしかなく、再起動で消えるため。生成したセッション（`8f45af24`）は
画像を読み込んだ直後から `ValidationException: Improperly formed request` を返し続けて復帰できず、
**自分で退避できない状態だった。**

経緯の全文は `ゲーム/全文ログ_2026-08-15_評価_8f45af24.md` の **付録A**（A-2〜A-7）にある。

---

## 中身

```
 一覧_A-D.png        方向性の違う4体（1回目）のコンタクトシート
 A_控えめ.png        人造人間だと分かる程度   stable-image-ultra-v1:1  seed 11
 B_機械的.png        いちばんロボット寄り     stable-image-ultra-v1:1  seed 23
 C_人間寄り.png      ほぼ人間、痕跡だけ       stable-image-ultra-v1:1  seed 37
 D_別絵柄.png        別モデルで絵柄を変えた   sd3-5-large-v1:0         seed 51

 一覧_E1-E4.png      A×D の合成（2回目）のコンタクトシート
 E1.png              sd3-5-large-v1:0  seed 51
 E2.png              sd3-5-large-v1:0  seed 64
 E3_採用_seed77.png  sd3-5-large-v1:0  seed 77   ★これを採用
 E4.png              sd3-5-large-v1:0  seed 90

 すべて 832×1216 / region us-west-2 / aspect_ratio 2:3 / output png
```

## 山田様の指示（2026-08-16）

> 顔と服装はAで、基本はDの感じがいい。

これを受けて E1〜E4 を生成し、**E3 を採用**（機械の腕と脚がはっきり見える／スカート丈が職場として自然／
顔が落ち着いている、という理由で生成側が選定）。

## E1〜E4 の生成指定（再現用）

```
共通（プロンプト）
  anime style cel-shaded illustration, full body, standing, front view,
  beautiful composed young female android secretary,
  ── 顔と髪（候補A由来）
  pale porcelain synthetic skin, dark brown bob haircut, calm gentle professional smile,
  ── 服装（候補A由来）
  white tailored blouse and dark navy pencil skirt,
  ── 全身の作り（候補D由来）
  segmented ceramic white forearms and lower legs with visible joint seams,
  slim cyan light trim running along the seams, subtle seam lines at the neck and wrists,
  holding a thin glowing data slate, poised upright posture,
  clean bold outlines, early 2000s Japanese video game character art,
  plain flat light grey background, no text, no logo

ネガティブ
  photorealistic, 3d render, text, letters, watermark, logo, extra limbs, extra fingers,
  deformed hands, sexualized, revealing clothing, cluttered background, multiple characters,
  helmet, face mask

発光色はUIのアクセント（シアン #67d3e8）に合わせている
```

## 🔴 未完了の作業（ここで止まった）

```
 1  E3 の背景除去（透過PNG化）
 2  全身立ち絵（高さ1020px）→ assets/secretary_full.png を差し替え
 3  バストアップ（148×148、顔を切り出し）→ assets/secretary_bust.png を差し替え
 4  PC・スマホでスクリーンショット確認
```

⚠️ **1でつまずいている。** `stability.stable-image-remove-background-v1:0` は on-demand throughput で
呼べない。**inference profile の ID または ARN が必要。**

```
 Invocation of model ID stability.stable-image-remove-background-v1:0 with on-demand
 throughput isn't supported. Retry your request with the ID or ARN of an inference
 profile that contains this model.
```

**代替案。** 背景は無地の明るい灰色なので、しきい値で抜ける可能性がある（Pillow で
`getbbox()` と近似色の透過化）。モデルを使わずに済むなら、その方が速い。**未検証。**

## 名前

**付けていない。** 造形と名前の最終決定は山田様、と記録に明記されているため、ラベルは「秘書」のまま。
