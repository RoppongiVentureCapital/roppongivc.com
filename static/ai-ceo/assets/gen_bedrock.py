#!/usr/bin/env python3
"""
Bedrock で ch1.html 用のアセットを生成する。

前提: us-east-1 で Bedrock の Stability モデルにアクセスできること。
     amazon.nova-canvas-v1:0 は LEGACY 扱いで拒否されるため使わない。
     代わりに ACTIVE な下記を使う。

  us.stability.stable-image-control-structure-v1:0  構図を保って質感を差し替える（背景）
  us.stability.stable-image-control-sketch-v1:0     線画から絵を起こす（キャラ）
  us.stability.stable-image-remove-background-v1:0  背景を透過に抜く

使い方:
  python3 gen_bedrock.py bg      … 背景を作り直す（条件画像は ch1.html 内のSVGから自動生成）
  python3 gen_bedrock.py chara   … 立ち絵を作り直す（下絵は本スクリプト内のSVG）
"""
import base64, json, subprocess, sys, os, re, tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
GAME = os.path.join(HERE, "..", "ch1.html")
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
REGION = "us-east-1"


def shot(html: str, w: int, h: int, out: str):
    """HTML文字列をヘッドレスChromeでPNGに焼く"""
    f = tempfile.NamedTemporaryFile("w", suffix=".html", delete=False, encoding="utf-8")
    f.write(html)
    f.close()
    subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars",
                    f"--window-size={w},{h}", "--virtual-time-budget=4000",
                    f"--screenshot={out}", "file://" + f.name],
                   capture_output=True)
    os.unlink(f.name)
    return out


def invoke(model: str, body: dict) -> bytes:
    """Bedrock を叩いて1枚目の画像バイト列を返す"""
    req = tempfile.NamedTemporaryFile("w", suffix=".json", delete=False)
    json.dump(body, req)
    req.close()
    out = req.name + ".out"
    r = subprocess.run(["aws", "bedrock-runtime", "invoke-model", "--region", REGION,
                        "--model-id", model, "--content-type", "application/json",
                        "--accept", "application/json", "--body", "fileb://" + req.name, out],
                       capture_output=True, text=True)
    if r.returncode:
        raise RuntimeError(r.stderr.strip()[-400:])
    d = json.load(open(out))
    os.unlink(req.name); os.unlink(out)
    if d.get("finish_reasons", [None])[0]:
        raise RuntimeError("filtered: " + str(d["finish_reasons"]))
    return base64.b64decode(d["images"][0])


def b64(path: str) -> str:
    return base64.b64encode(open(path, "rb").read()).decode()


# ────────────────────────────────────────── 背景
BG_PROMPT = (
    "pre-rendered 3D office interior of a small AI research startup, one-point perspective, "
    "floor-to-ceiling center window with late afternoon city skyline, warm orange sunset light "
    "across a glossy tiled floor, dark blue-grey side walls, white desk on the right with two flat "
    "monitors, potted plant on the left, office chair, baked global illumination, soft contact "
    "shadows, floor reflections, PlayStation 2 era pre-rendered game background art, detailed "
    "textures, cinematic, slightly desaturated, no people, no text"
)
BG_NEG = ("people, person, text, letters, watermark, logo, blurry, fisheye, cartoon, "
          "flat vector illustration, clutter, messy")


def gen_bg(seed=7, strength=0.72):
    """ch1.html 内のSVGオフィスを条件画像にして、構図を保ったまま質感を差し替える"""
    svg = re.search(r'(<svg viewBox="0 0 1200 700".*?</svg>)',
                    open(GAME, encoding="utf-8").read(), re.S).group(1)
    ref = shot('<!DOCTYPE html><meta charset="utf-8"><style>*{margin:0;padding:0}'
               'html,body{width:1024px;height:768px;overflow:hidden;background:#070d15}'
               'svg{width:1024px;height:768px;display:block}</style>' + svg,
               1024, 768, "/tmp/_cond.png")
    img = invoke("us.stability.stable-image-control-structure-v1:0",
                 {"prompt": BG_PROMPT, "negative_prompt": BG_NEG, "image": b64(ref),
                  "control_strength": strength, "seed": seed, "output_format": "png"})
    dst = os.path.join(HERE, "bg_office.png")
    open(dst, "wb").write(img)
    print("書き出し:", dst)


# ────────────────────────────────────────── 立ち絵
SKETCH = """<svg viewBox="0 0 640 1024">
<g fill="none" stroke="#111" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
 <path d="M232 196c-6-92 40-146 88-146s94 54 88 146c-4 58-10 84-18 96"/>
 <path d="M244 292c-14-10-20-40-22-72"/>
 <ellipse cx="320" cy="192" rx="66" ry="82"/>
 <path d="M258 150c22-26 52-38 62-14 8-20 44-14 62 14"/>
 <path d="M290 196h22M328 196h22M310 232h20"/>
 <path d="M300 268v34M340 268v34"/>
 <path d="M300 300c-52 8-82 30-92 62l-12 128h48l6 150h204l6-150h48l-12-128c-10-32-40-54-92-62"/>
 <path d="M300 300l20 40 20-40M304 306l-16 26M336 306l16 26"/>
 <path d="M320 356v130"/>
 <path d="M208 362l-26 148 14 82 40-6"/>
 <path d="M432 362l30 140-16 74-44-10"/>
 <rect x="356" y="474" width="112" height="140" rx="4"/>
 <path d="M392 474v-14h40v14"/><path d="M372 512h80M372 542h64M372 572h72"/>
 <path d="M226 640l-14 132h216l-14-132"/>
 <path d="M262 772l-8 168M310 772l4 168M330 772l-4 168M378 772l8 168"/>
 <path d="M246 940h34l6 22h-46zM322 940h34l6 22h-46z"/>
</g></svg>"""

CH_PROMPT = ("anime style illustration of a friendly young Japanese office secretary standing, "
             "white long-sleeve blouse, dark navy pencil skirt, dark brown shoulder-length hair, "
             "holding a clipboard, gentle smile, cel shaded, clean bold outlines, "
             "early 2000s Japanese video game character art, full body, front view, "
             "plain flat white background")
CH_NEG = ("photorealistic, 3d render, text, watermark, extra limbs, deformed hands, "
          "sexualized, cluttered background, shadow on background")


def gen_chara(seed=11, strength=0.62):
    """線画 → Control Sketch → 背景除去 → 全身とバストアップに切り出す"""
    from PIL import Image
    ref = shot('<!DOCTYPE html><meta charset="utf-8"><style>*{margin:0;padding:0}'
               'html,body{width:640px;height:1024px;overflow:hidden;background:#fff}'
               'svg{width:640px;height:1024px;display:block}</style>' + SKETCH,
               640, 1024, "/tmp/_sk.png")
    raw = invoke("us.stability.stable-image-control-sketch-v1:0",
                 {"prompt": CH_PROMPT, "negative_prompt": CH_NEG, "image": b64(ref),
                  "control_strength": strength, "seed": seed, "output_format": "png"})
    open("/tmp/_ch_raw.png", "wb").write(raw)

    cut = invoke("us.stability.stable-image-remove-background-v1:0",
                 {"image": base64.b64encode(raw).decode(), "output_format": "png"})
    open("/tmp/_ch_cut.png", "wb").write(cut)

    src = Image.open("/tmp/_ch_cut.png").convert("RGBA")
    # 全身：余白を詰めて高さ1020px（表示スロットの2倍）
    full = src.crop(src.getbbox())
    sc = 1020 / full.height
    full.resize((round(full.width * sc), 1020), Image.LANCZOS)\
        .save(os.path.join(HERE, "secretary_full.png"))
    # バストアップ：顔まわりを正方形で 148x148（74pxスロットの2倍）。枠色で下地を埋める
    cx, top, half = 320, 44, 132
    bust = src.crop((cx - half, top, cx + half, top + half * 2)).resize((148, 148), Image.LANCZOS)
    bg = Image.new("RGBA", bust.size, (28, 58, 88, 255))
    bg.alpha_composite(bust)
    bg.convert("RGB").save(os.path.join(HERE, "secretary_bust.png"))
    print("書き出し: secretary_full.png / secretary_bust.png")


if __name__ == "__main__":
    task = sys.argv[1] if len(sys.argv) > 1 else "bg"
    {"bg": gen_bg, "chara": gen_chara}[task]()
