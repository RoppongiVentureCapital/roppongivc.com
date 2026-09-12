---
title: "A Record of Thinking with AI: An AI Olympiad Medalist from Japan's Most Selective High School on Growing More AI Builders"
date: 2026-09-10
draft: false
layout: "agora-article"
url: "/en/agora/ai-olympiad-record/"
# ★2026-09-12 英語版を新設（山田様のご承認）。
#   ★★★完成するまでは【非掲載＋noindex】── list: never で sitemap と RSS に載せず、
#     noindex: true で検索にも載せない。★仕上がったら list: always にして noindex を外す。
#     ★これは日本語版が限定公開だったとき（〜2026-09-09）と同じ仕組み。
#   ★日本語版 index.md は1バイトも触っていない。
_build:
  list: never
  render: always
  publishResources: true
noindex: true
description: "The ability to solve problems that have a fixed answer is passing to AI. So what does a high school student who has mastered that ability do when the problem has no answer? Hayato Yamai — a bronze medalist at the International Olympiad in Artificial Intelligence (IOAI) 2025 — came in with one theme: he wants to democratize Kaggle. A record of two hours between five people and an AI."
hero_label: "Agora | Session 1"
headline: "A Record of Thinking with AI: An AI Olympiad Medalist from Japan's Most Selective High School on Growing More AI Builders"
hero_photo: "img/agora/r1/hero-yamai.jpg"
hero_photo_alt: "Hayato Yamai"
# 🔴 2026-09-12 記録担当：★★★★英語版の共有カードに差し替えた。
#   ★これまで日本語版（og-r1-article.jpg）を指していたので、XやLINEに貼ると
#     ★日本語の見出しのカードが出ていた。
#   ★作りは日本語版（art-A8）と同じ座標・同じ写真で、文字だけ英語にしたもの。
#     ラベル Agora | Session 1 ／ 見出し4行（Georgia）／ Roppongi Venture Capital
#   ★道具は docs/_pending/og-20260910/build7-en.py
og_image: "img/agora/r1/og-r1-article-en.jpg"
---

In April 2026, ChatGPT took the entrance exam for the University of Tokyo — the most competitive university in Japan — and outscored the highest-scoring student who passed it. A year earlier, it had reached gold-medal level at the International Mathematical Olympiad. **Problems with a fixed answer, and a fixed way of grading that answer, now belong to AI**.

So what happens when someone who has mastered exactly that kind of problem turns to a problem with **no answer at all**?

In July 2026, five people met online. It was the first session of <strong>Agora</strong>, a program started by Roppongi Venture Capital. [Agora](/en/agora/) brings together exceptionally talented young people to think deeply with AI and create something that does not yet exist.

The theme came from **Hayato Yamai, a bronze medalist at the International Olympiad in Artificial Intelligence (IOAI) 2025 and a senior at Kaisei High School, the most selective high school in Japan**. He wanted to democratize Kaggle — the world's largest platform for machine learning competitions.

Two hours later, the five of them and the AI had arrived at a way of posing problems that Kaggle did not have. **Something that had not existed anywhere came out of that conversation**.

A month of development later, it was something anyone could try. **Here is what they built**.

{{< cta href="/en/deep-black-box/" label="Start" sub="Open up the black box of AI one question at a time, with your own hands. 21 questions in all." >}}

The five people in the Agora session that day

{{< people
"Hayato Yamai|High school senior at Kaisei High School, the most selective high school in Japan. Medalist, International Olympiad in Artificial Intelligence (IOAI) 2025|yamai.jpg"
"Kiichiro Iizuka|First-year student at Seiko Gakuin High School. Vice president of the student council. 3rd nationally at the Social Impact English Speech Contest. National finalist in app development at the Japan Wagamama Awards|iizuka.jpg"
"Kenichi Kitamura|Mathematics Advisor, Roppongi Venture Capital. M.S. in Mathematics, Graduate School of Science, Kyoto University. Works at a government-affiliated financial institution|kitamura.jpg"
"Tokio Itonaga|Associate, Roppongi Venture Capital. Serial entrepreneur. Representative Director, FEA Agricultural Research Association|itonaga.jpg"
"Koji Yamada|Founding Partner, Roppongi Venture Capital (moderator)|yamada.jpg"
>}}

## 1. Why he wants to democratize Kaggle

Yamai first heard about Kaggle in the winter of his first year of high school. It was by chance. He found out that an International Olympiad in Artificial Intelligence existed one month before the Japanese qualifying round. Less than a year after that, he had a medal.

What he had been short of, in other words, was not ability. **It was the chance to find out that any of this existed**.

So what is blocking the entrance? What he pointed to was not a shortage of learning material.

{{< say who="yamai" >}}
I think the hardest part is <strong>driving yourself forward</strong>. Gathering the information yourself, all of that work — I think it raises the barrier to entry quite a bit. And of course, most high school students have never even heard of Kaggle. **Whether it's material or a mentor, I think you need something that points you in a direction — even just a direction**.

{{< /say >}}

Kiichiro Iizuka, the other high school student in the room and vice president of the student council at Seiko Gakuin High School, had stumbled in the same place.

{{< say who="iizuka" >}}
What made it hard was building a notebook on my own from scratch and putting models together one after another — **without that knowledge or experience in the first place, you don't know where to start**. That part gave me a lot of trouble.
{{< /say >}}

By their own estimate, fewer than one in ten of their classmates has heard of Kaggle.

**When it comes down to luck, the problem is not on the side of the talent. It is on the side of the design**. That is what he meant by democratizing it.

{{< fig n="1" src="img/agora/r1/fig-kaggle.en.svg" src-sp="img/agora/r1/fig-kaggle-sp.en.svg" >}}How Kaggle works. The table and rankings are examples.{{< /fig >}}

### "They could just teach the principles in school," he said

That day, everyone in the session was looking at the same article: the [first installment of "Japan's Road to 100 Million AI-Capable People"](https://xtech.nikkei.com/atcl/nxt/column/18/03399/111000001/) in Nikkei xTECH. It reports that all four students Japan sent to IOAI 2025 came home with medals. Yamai is one of the four.

The article's argument runs like this. **At the frontier — the people who build AI — Japan is not behind**. What is missing is the base that supports that frontier: **the depth of the layer of people who use AI**. So if Japan is going to catch up as a whole, it needs to lift the general population.

The article never mentions the need to learn the underlying principles. That is exactly what caught Yamai's eye.

{{< say who="yamai" >}}
People tend to focus on "how to use it." But I do think it would be fine to go a little further into the specialist knowledge, the technical side. LLMs themselves seem likely to shift out from under us pretty quickly, so **the principles behind them — I think they could just teach that part in school**.
{{< /say >}}

(An LLM is an AI that works with text, like ChatGPT.)

The layer he wants to grow is not the users. **It is the base of the people who build**. Kenichi Kitamura, who studied mathematics at the graduate school of Kyoto University and now works at a government-affiliated financial institution, restated it as a question of international comparison.

{{< say who="kitamura" >}}
I often hear that researchers in China are extraordinarily motivated. There are people at every stage from research to application, and **that layer of researchers is simply thick, everybody is driven, and that is what carries the country's development**. When I think that Japan has to become like that, then in terms of this diagram, **it's about pulling the upper triangle downward and increasing the share of people like that** — lowering the initial barrier to entry makes it spread naturally, and that's what leads to a high level of research in Japan down the line.
{{< /say >}}

{{< say who="yamai" >}}
I do think that. No, that makes sense to me.
{{< /say >}}

{{< fig n="2" src="img/agora/r1/fig02.en.svg" src-sp="img/agora/r1/fig02-sp.en.svg" >}}When the boundary between the upper and lower layers drops, the share of people who build increases.{{< /fig >}}

Kitamura went on about the principles themselves.

{{< say who="kitamura" >}}
Using today's Transformer-based models well is one thing, but **you also want people who research what is actually inside them**. I suspect people in China are doing that too, and that **there are plenty of people seriously thinking about building models with completely new architectures**. I don't know how many people like that there are in Japan.
{{< /say >}}

### So should schools teach it?

Another view came up in the room, aimed at "schools could just teach it."

{{< say who="itonaga" >}}
Things move so fast that I think it's hard for schools to carry this on their own. A lot of the material is in English, and the compute available to each school varies.
{{< /say >}}

{{< say who="iizuka" >}}
I've taken part in a course that teaches AI theory. **The kids who are interested run ahead with it, and the ones who aren't end up thinking "this is boring."** The ones who do, do; the ones who don't, don't. That's what it looks like from a student's side.
{{< /say >}}

Even with material, and even with someone to teach it, what happens is a split into two groups. What is missing is not the distribution of knowledge. **It is whether anything catches fire at the start**. Lowering the boundary of the triangle is a question at the scale of a country; what is written here is not a record of moving all of that. It is a record of what we worked on in order to add one more entrance.

## 2. We asked the AI carelessly, and looked at its answer first

Agora starts from one assumption: **ask an AI carelessly and it will tend to answer carelessly**. Ask it to "come up with a good idea" and you get a patchwork of things you have heard somewhere before. Ask the same question as anyone else and you get the same safe, average answer. **An answer that anyone can obtain has no value**.

So before the discussion, everyone looked at what "asking carelessly" produces. The AI used was Anthropic's Claude Fable 5. One line of instruction, with nothing clever about it.

{{< say who="yamada" >}}
Come up with ideas for a new service that democratizes Kaggle
{{< /say >}}

About thirty seconds later, five ideas came back.

{{< say who="ai" >}}
Democratizing Kaggle — interesting theme. If we lay out Kaggle's current problems, the bottlenecks are roughly: a high barrier to entry (statistics and ML knowledge, English, GPU environments), a disconnect between the top competitors and beginners, and a gap from real-world practice. Here are several service ideas that break each of those down.

**1. "Kaggle Sherpa" — a competition platform with an AI mentor alongside you** ── When a beginner enters a competition, an AI agent works alongside them. It walks through EDA (exploratory data analysis) with you and explains, in dialogue, why a given feature is likely to matter. It automatically converts public notebooks into annotated explanations in Japanese. Before submission, it diagnoses leakage risk in your model and the causes of any gap between your cross-validation and the leaderboard. Differentiator: it is designed to teach how to think rather than to hand over answers, which separates it from a service that simply does the work for you.

**2. "Micro-Kaggle" — micro-competitions that finish in an hour** ── Kaggle competitions run for months, which is too heavy for working adults. Hold a daily "one-hour competition" with smaller datasets and simpler problems. Make it possible to take part from a phone (provide a notebook environment in the browser). Encourage habit formation with streaks and leagues, like Duolingo. Business model: sponsored competitions from companies (for recruiting).

**3. "Kaggle for Domain Experts" — competing without code** ── Bring in doctors, financial analysts, manufacturing engineers and others who have domain knowledge but cannot write code. Write your hypothesis in natural language — "the interaction between this lab value and age should matter" — and the AI handles feature engineering and model building for you. Add matching between domain experts and Kagglers (democratizing team play). Quantify the contribution of domain knowledge and reflect it in how prize money is split.

**4. "Real-Data Kaggle" — turning the problems of small and mid-sized companies into competitions** ── Only large companies can put their data on Kaggle. A SaaS that takes the problems of smaller companies (demand forecasting, defect detection and so on), anonymizes them or turns them into synthetic data, and poses them as competitions. Even with small prizes, the reward for participants is a track record on a real project. The company gets a low-cost proof of concept and the participant gets a portfolio — a structure that works for everyone.

**5. "Kaggle Replay" — time-machine learning from past competitions** ── A learning service that lets you re-experience a finished competition from the leaderboard state at the time. Unlock the top solutions in stages (you cannot see the next hint until you beat your own score). Follow along with "what was a Grandmaster thinking at this point" tied to their solution write-ups. Link it to certifications so it becomes a hiring signal for companies.

**My recommendation** ── The one I consider most viable as a business is the combination of 4 (Real-Data Kaggle) and 3 (bringing in domain experts). Reasons: it is distinctive in extending "democratization" beyond the participant side to the side that sets the problems; it only becomes possible now that synthetic data generation (for privacy protection) has matured; and the revenue source is clear (SaaS fees from companies), which is more sustainable than Kaggle's prize-dependent model.

I can go deeper on any particular idea, or work it up into a business model canvas or a technical architecture — just say the word.
{{< /say >}}

{{< say who="yamada" >}}
Yamai, from an expert's point of view, what level would you say this answer is at?
{{< /say >}}

{{< say who="yamai" >}}
I think it's somewhat interesting. <strong>Number 2, the one about turning it into micro-competitions</strong>, might be the one I personally like.
{{< /say >}}

{{< say who="yamada" >}}
Even a careless throw gets you something decent back, because the AI is capable. **Today, let's work at it and get past this in the Agora discussion**.
{{< /say >}}

## 3. What the people discussed over two hours

### Narrowing the target — "high school students" was too broad

The first thing they did was decide whose problem they were solving. "High school students" is too broad. Tokio Itonaga — who has worked on business development and management at more than sixty companies including listed ones, has thirty-nine exits behind him, and used to teach mathematics at a major cram school — drew the line from his teaching experience.

{{< say who="itonaga" >}}
I think it's hard to lump "high school students" together. The assumptions are quite different between the top group and the average group. But you don't have to restrict it to the genuine top — **if you set the line at, say, the upper 15 percent by standardized test score, they already have plenty of mathematical and logical ability, so they should be able to take on something as hard as Kaggle**. I think it's fine to include everyone down to there.
{{< /say >}}

{{< say who="yamai" >}}
I think that's right. I see that problem among the people around me too. Even in that band, I think it's still fairly tough.
{{< /say >}}

Then Kitamura compressed everything so far into a single line.

{{< say who="kitamura" >}}
So essentially, **how do you bring in the people who are bright but have never touched programming, for whom the doorstep is high**? Is that a fair statement of what you're aiming at?
{{< /say >}}

{{< say who="yamai" >}}
That's it, yes.
{{< /say >}}

"Democratization," which had been drifting outward, got its first outline from that one sentence. Someone with a mathematics background checks the definition. That keeps paying off for the rest of the session.

### If AI does all of it, does the wall disappear?

Here the moderator asked this.

{{< say who="yamada" >}}
We now have AI coding agents like Claude Code, so you can say what you want in plain language and the AI will analyze the data and produce the code. If you don't understand something, you can say "explain it so a middle schooler would get it" and it will. **Even so, do you think a hurdle remains?**
{{< /say >}}

{{< say who="yamai" >}}
In that case, **I do think more people would get as far as their first submitted score. But whether the number of people who genuinely understand it and are learning from Kaggle actually goes up** — I think that part is still an open problem.
{{< /say >}}

**"People who can submit" and "people who understand and learn" separated for the first time right here. What AI removes is only the first wall**.

{{< column n="1" title="How far can you hand over to AI?" >}}
The question "is it acceptable to have AI do Kaggle for you without understanding what is inside" was worked through by the moderator with an AI after the session ended. The conclusion was: no, it is not — but insisting that you understand everything is also wrong, because <strong>within understanding there are layers you may hand over to someone else, and layers you may not</strong>.

**① What is inside the tools** ── The calculations and the mathematics that an off-the-shelf tool performs internally. **This may be handed over to AI**. Even specialists do not read the inside in detail. It is the same as not needing engine theory to drive a car.

**② Whether the procedure is sound** ── How the data is prepared, whether answers have leaked in, how the scoring works, whether you have fitted too closely to your practice data. **This is the vital point**.

**③ Whether the conclusion is sound** ── Whether you may accept what came out as correct. **This cannot be handed over**. There is one reason: **AI cannot set the standard of correctness by itself**. That is why it can be wrong in a confident tone, and why it will sometimes run a test it wrote itself, pass it itself, and report back that there were no problems. The same holds in analysis: if two numbers move together, it will talk about one as the cause. Correlation and causation are different things, and separating them is a human job. On top of that, specialists disagree about it.

② Whether the procedure is sound — the reason this is the vital point is not that it is difficult. It is that when you get ② wrong, the result does not necessarily look wrong. And it does not necessarily look worse, either.

There is a record of this actually happening. Andrey Lukyanenko, a Kaggle Competition Master and a machine learning engineer at Meta, published a [record](https://andlukyane.com/blog/kaggle-antigravity-s6e7) of it in July 2026. **He had an AI agent run an entire Kaggle competition**. The moderator looked this up after the session.

{{< fig n="3" src="img/agora/r1/fig-agent.en.svg" src-sp="img/agora/r1/fig-agent-sp.en.svg" >}}All the human handed over was one instruction document and three decisions.{{< /fig >}}

**① What is inside the tools ── the AI did all of this layer.** The task was to look at health checkup records for 630,000 people and sort each one into "needs attention" or "no problem." The AI explored the data, built about 140 columns of its own as predictive signals, trained three kinds of models in parallel, tuned how to blend them, and made the submission entirely on its own. The human wrote almost no code. Nobody looked at what was in the columns, or at what was being computed inside the models. And it worked.

**② Whether the procedure is sound ── this is the layer where it stopped.** The AI checks how well it is doing as it goes and improves from there. The way it was checking did not match this task. Scaled down to 100 people, it looks like this.

```
 Sort 100 people into "needs attention" and "no problem."
 The actual split is lopsided

    needs attention   94  ●●●●●●●●●●●●●●●
    no problem         6  ○
```

```
 The way the AI was counting
    "Out of 100 people, how many did I get right?"

 The way this task called for
    Look at "did you find the people who need attention" and
    "did you find the people who are fine" with equal weight
```

That difference pulls the AI's judgment to one side.

```
 Say a borderline case comes up. Which do you answer?

   answer "needs attention"  → 94 of 100 need attention, so the odds of being right are high
   answer "no problem"       → the odds of being right are low
        │
        ▼
   Under the AI's way of counting, when in doubt it pays to answer "needs attention"
        │
        ▼
   That accumulates, and the answers drift toward "needs attention"
        │
        ▼
   The ability to find the 6 people who are fine never develops
```

**The AI did not cut corners. It optimized correctly against the way of counting it was handed**. Taken to the extreme, "everyone needs attention" scores 94 out of 100 under that way of counting. An answer that distinguishes nobody produces the highest number. And **the machine issues no warning here. The number keeps going up**.

**③ Whether the conclusion is sound ── it missed this layer too.** When the submitted result came back poor, the AI's diagnosis was that getting more data was the only way forward. It proposed using unofficial data uploaded by other participants and argued confidently that this was the only way through the wall. The human stopped it.

What the human doubted was not the data but the way of counting. The fix was to go back to what he had decided for himself at the start: use the way of counting the task calls for, and rebuild the self-check around that same measure. What could be handed to the AI stopped at ①.
{{< /column >}}

### AI can solve the University of Tokyo's math. What about Kaggle?

Partway through, the moderator asked this.

{{< say who="yamada" >}}
If you paste the University of Tokyo's math problems in as they are, AI can probably solve them now. **For Tokyo, AI is at the level where it could pass at the top of the class**. So what about Kaggle? Given the nature of the competition, **there is no such thing as a perfect score — however far you push accuracy, there is no ceiling** — so is it in a situation where AI is encroaching more slowly than in mathematics?
{{< /say >}}

{{< say who="yamai" >}}
There are benchmarks now that have AI and agents attempt Kaggle and measure how they do, but **fundamentally I still think it's a field where human ability is needed**.
{{< /say >}}

The moderator shared what he had found on the latest state of things. Announcements have appeared saying that AI models have reached grandmaster level on Kaggle. **Even so, compared with the University of Tokyo exam or the Mathematical Olympiad, the absence of a ceiling leaves room to keep pushing**.

Both Tokyo's mathematics and Kaggle are worlds where you compete on **how far you can push a given problem against a given standard**. That is what Yamai has mastered. **What these two hours were placed in is the space outside that. Neither what to solve nor what to measure it by was decided**.

{{< column n="2" title="What separates University of Tokyo math, Kaggle, and real-world problems" >}}
Lined up side by side, they look like this.

| | UTokyo math | Kaggle | The real world |
|---|---|---|---|
| Data | clean | dirty | dirty |
| Problem | given to you | given to you | **you decide it** |
| Scoring | exists | exists | **you build it** |
| The whole thing | closed | closed | **open** |

**Where Kaggle moved closer to the real world is one thing only: the dirtiness**. The hardest thing in the real world is deciding what should be solved in the first place, and on Kaggle the organizers do all of that for you — what to predict, what to measure it by, and even collecting the data.

And **a single property** — being closed — created its strength, its weakness, and its limit at the same time.

- **Why it is excellent as training** ── Results come back immediately, so you find out whether your own judgment was right
- **Why AI overtakes it** ── There is a scoring sheet, which puts it in exactly the shape machines are best at
- **Its limit as proof of ability** ── All it can prove is skill at the intermediate work. And that intermediate work is precisely where AI is now becoming good

The first of those involves a mechanism the UTokyo exam does not have. **Until a competition ends, part of the answer key used for scoring is hidden**.

If you keep tuning against the score that is visible throughout, that score climbs. Then at the end, a different score appears, computed on the data that had been hidden. Some people fall a long way in the rankings at that point. Matching the visible score only means matching the quirks of the data behind that score; it does not mean your ability to predict improved. **This is called overfitting**.

**So Kaggle's scoring is not only measuring whether your answer is right**. It measures whether you trusted your own scoring at hand, or chased the number in front of you — **a measurement of whether your own judgment was sound**. "Scoring exists" is true of UTokyo mathematics as well, but hidden scoring exists only on Kaggle. The reverse also holds: **Kaggle will not develop your ability to write a rigorous proof**, because on Kaggle you never write one.
{{< /column >}}

### The moderator's idea fell apart within minutes. That is how the target was found

The moderator put an idea forward.

{{< say who="yamada" >}}
What if high school students could become the ones who set the competitions, using problems close to their own lives? Wouldn't that make it personal?
{{< /say >}}

{{< say who="yamai" >}}
I think it could be interesting, but **I wonder whether there are hard limits on the volume and the quality of the data**. That's a negative view, but it's what came to mind straight away.
{{< /say >}}

Within minutes it was clear the idea did not work. But the way it failed struck gold. What he said next turned the direction of the discussion.

{{< say who="yamai" >}}
Actually, when you're doing Kaggle or building AI, **there are times when you stop caring about the real problem partway through**. Because what's essential ends up being **the structure, or the format of the data**.
{{< /say >}}

Not "useful to society," and not "solving a problem close to home." These people's interest points at structure itself.

{{< say who="kitamura" >}}
What Yamai said resonates with me completely. **It's not the content itself, it's how it's structured that interests you. I'm that type too**. Where I point that interest has changed since I entered the working world, but I know the feeling very well.
{{< /say >}}

**The target was in the room**. Here the target was fixed: high school students with the disposition to respond to the interest of mathematics and structure, who never had the chance to touch AI.

But "democratization" that day did not mean widening the base to include everyone. **It meant delivering one entrance to this group**. Delivering something to everyone and delivering it to the people it has not reached are different projects.

### A first-year high school student asked the person who set the theme a question that deepened it

The most important question of the day came from neither the AI nor the adults.

{{< say who="iizuka" >}}
You said earlier that learning about AI isn't for applying it to real life, but comes from curiosity about the structure itself. So with that curiosity about AI's structure — are you thinking about what you could do with AI, or do you want to know AI itself? **I'd like to ask which one you put the weight on**.
{{< /say >}}

{{< say who="yamai" >}}
This will be a completely personal answer, but personally, **I'm interested in AI itself**. I feel a bit of unease at how much it gets treated as just a tool lately. **There's so much about the principles of AI that isn't understood, so I want to get to the bottom of that part**.
{{< /say >}}

The second question went further in.

{{< say who="iizuka" >}}
Earlier you said you want to spread Kaggle because you want more AI people to come out of it — **and I think that when you recommend something to someone, it's because you think it's good yourself**. So I wondered whether you do Kaggle because you found something interesting, some joy, in doing it. **I'd personally like to ask what the biggest part of that joy or excitement was**.
{{< /say >}}

{{< say who="yamai" >}}
…That's a hard one. Well, the two things that are always there are **learning, being able to study**, and **climbing the leaderboard**. Not just having studied, but **when what I studied contributed to my score straight away** — that's probably what I personally find interesting. You look at the discussion among the people at the top, you study something you didn't know, and you can try it immediately. **Getting that sense of it right away is what I find structurally interesting about Kaggle**.
{{< /say >}}

It did not stop there.

{{< say who="iizuka" >}}
Given that you're saying "get everyone to do Kaggle" rather than "get everyone to read AI books" — is what you want for everyone to know about AI, or **do you want more people who feel that joy? Which is stronger**? As an honest opinion.
{{< /say >}}

{{< say who="yamai" >}}
**The feeling that I want Kaggle to be the entrance might be the stronger one**. Because that's the trigger that leads to "let me go read a book," too.
{{< /say >}}

{{< say who="yamai" >}}
Well, I think either is fine, but **understanding and application feel like a set to me. It doesn't end with reading a book, and I don't think it's possible to just raise your score without reading anything either**.
{{< /say >}}

{{< say who="itonaga" >}}
I don't think reading books is the only way to learn. Some people learn while competing, and that's **a place to practice and a place to learn at the same time**.
{{< /say >}}

{{< say who="yamai" >}}
No, I understand that. I really do think so.
{{< /say >}}

As a result of this dissection, the reason for the thing they would later build was put into words. There needs to be a place where it does not end with reading.

After the session, Yamai said this: "There were parts of Iizuka's questions I couldn't quite answer, and I'd like to use that as a starting point to go deeper." The person being questioned was grateful for the questions.

{{< column n="3" title="What is AI trained to aim at?" >}}
There are three things AI training aims at. They are added in order. **① Trace what it has seen** (the material is text from the internet; the exercise is predicting the next word) / **② Lean toward what people prefer** (the material is records of people being shown two options, A and B, and picking the one they thought was better; the exercise is making the chosen one score higher) / **③ Get right the things a machine can mark** (the material is mathematics and code; the exercise is having a machine check the answer against the key).

**There is a common misunderstanding about ①**. AI is not taught to "prefer words you see often." It is trained to assign correct probabilities to rare words too. The blandness of what comes out is not caused by this exercise. **It happens because when the conditions in your question are thin, probability piles up on the phrasings you see most often — and because the generation step is biased toward picking the tall peaks** (→ Column 4).

{{< fig n="4" src="img/agora/r1/fig-reward.en.svg" src-sp="img/agora/r1/fig-reward-sp.en.svg" >}}The top row shows the three aims of training. The bar lengths in the bottom row are schematic, not measured population figures.{{< /fig >}}

**None of these three contains a measure for "is this a valuable kind of new?"** ① has "does it match what I saw," ② has "did people think it was good," ③ has "does it match the answer key." The only thing missing anywhere is a measure of newness.

At this point you would expect ② to cover it. "Which is better" cannot be marked by a machine, so they had people choose and turned that into a reward. In the same way, you could have people choose "which is newer." In principle, you can. The reason it does not work lies elsewhere.

**Genuine newness, at the moment it appears, is legible as valuable to only a few people**. Score it by majority vote and it gets the lowest score. ① traces the average and ② leans toward the majority. Both push in the same direction.

That leaves ③, but ③ only works where an answer key can be written. A machine can mark "2 + 3 = 5"; it cannot mark "is this question interesting?" **What is worth creating belongs to the latter**. So it does not ride on ③ either. This is not a defect. It is structure.

Line up the cases where AI surpassed humans and the same thing becomes visible. In every one, a human made the scoring sheet.

| | The scoring sheet was made by |
|---|---|
| **AlphaFold** | a human (compare the predicted shape against the shape found by experiment) |
| **AlphaTensor** | a human (count the number of multiplications; fewer is better) |
| **AlphaZero** | a human (the rules of shogi, and how a win is decided) |

**What the AI did was raise its score inside that scoring sheet**. AlphaZero played millions of games against itself and made its own practice partner. It looks as though it set its own problem. Even so, the rules and the definition of winning stayed where a human put them. That is the part it did not move.

The human work ended at building the problem and the scoring mechanism in advance.

**These two hours were placed in exactly the opposite position**. You cannot check the answer, there is no reward anywhere, and the selection is done by a human one item at a time. Open the tap and thousands of candidates come out. So the real nature of creation becomes less "producing from nothing" and more <strong>"picking the rare meaningful one out of an enormous pile of candidates"</strong>.

That said, "AI cannot create" goes too far. More precisely: **it cannot aim at a valuable kind of new, and judge it, by itself**. Put the aim and the judgment in from outside and it reaches genuine discoveries. AlphaFold is an example of reaching one that way.
{{< /column >}}

## 4. The AI's first pass was correct, and obvious

9:18 p.m. The moderator gathered up the record of the discussion so far and handed it to the AI. The instruction was one line.

{{< fig n="5" src="img/agora/r1/fig-howto.en.svg" src-sp="img/agora/r1/fig-howto-sp.en.svg" >}}How the AI was used that day. Transcription is automatic; the AI is handed the record as a file.{{< /fig >}}

{{< say who="yamada" >}}
Analogy, abstraction, and insight, please
{{< /say >}}

**It is short, but it is not careless**. It names three different thinking operations, in the right order. Analogy is borrowing a structure from another domain. Abstraction is extracting the shared structure out of what you borrowed. Insight is producing, from that abstraction, a claim nobody has made yet. In the wrong order it does not work: abstract first and you have no material, so you get generalities.

The answer that came back began by summarizing where the discussion stood.

{{< say who="ai" >}}
The target is "high school students with the disposition to respond to the interest of mathematics and structure, who lacked both the chance and the driving force to touch AI." The problem is "they cannot start alone; books end with reading; there is no place to turn knowledge into skill." **So this is not a problem of learning material. It is a design problem of ignition and of a bridge**.
{{< /say >}}

Next came the analogies. It laid out four real bridges that carried people who like mathematics into another field. Each came with the condition under which it holds and the condition under which it collapses.

{{< say who="ai" >}}
<strong>1. Project Euler</strong> ── A site of mathematics problems. But they cannot be solved by hand; the only way through is to write a program. The mathematical question is the interest at the entrance, and programming is acquired as a side effect. It holds when the first problem can be started with nothing but the ability you already have. It collapses when problem one demands an environment setup or a language.

<strong>2. Competitive programming (AtCoder, the Informatics Olympiad)</strong> ── A real channel into which the Mathematical Olympiad crowd flowed in numbers. Mathematical ability works as currency from day one and feeds directly into your starting rating. It collapses in venues where the assets you already hold cannot be cashed at the entrance. This is the vital point.

**3. The shogi hall** ── A world where you could not get strong on your own was opened up by games (immediate feedback), game records (the thinking of stronger players), and ranks (a ladder). And importantly, shogi did not end when AI surpassed the top professionals. Sota Fujii's generation built AI into their training as a checking device and a research partner, and the rate at which they got stronger went up rather than down. What took hold was not "let the AI play" but "use the AI to verify your own reading."

**4. The radio kids and the microcomputer BASIC kids** ── You copy the code out of a magazine, get it running, and then you want to modify it. That gradient carried into engineering a group that textbooks could not carry. It collapses when the first experience of "it worked" is far away. Back then, a sound came out within minutes.
{{< /say >}}

The AI pulled the shared structure out of the four. Abstraction.

{{< say who="ai" >}}
None of the bridges that worked are learning material. Three conditions are common to all of them.

**1. Turning existing assets into currency** ── The ability the target already has (mathematics, an interest in structure) is cashed in at the entrance, directly into a first success
**2. Designing the gradient** ── A slope on which new skills become naturally necessary as you go further. Knowledge does not push; the problem pulls
**3. An immediate checking device and a ladder** ── Submit and you are scored at once, and rank becomes the motive to continue

In one sentence: **what carried people into a new field was not learning material, but a gradient of problems on which the ability they already had worked as currency at the entrance**.
{{< /say >}}

From there, two insights. The first pointed at Kaggle's entrance; the second at what democratization actually means.

{{< say who="ai" >}}
Kaggle's entrance does not accept this target's existing assets as currency. What Kaggle demands at the entrance today is Python, environment setup, and conventions; mathematical ability and an interest in structure are cashed into the first score at a rate of zero. What a mathematics-minded person meets first is not "the interest of structure" but "chores."

This is a candidate explanation for the contradiction raised today — "there is plenty of learning material, so why is it so hard to get started?" **What is missing is not material. It is that there is no lane for cashing in the assets you already have**.
{{< /say >}}

{{< say who="ai" >}}
As the shogi case shows, the question is not "is there any point in a human doing it when AI can." It is <strong>"can the design of the venue force a way of using AI that puts it on the side of a checking device and a research partner?"</strong> In an era where handing it over gets you a submission, a structure that steers people toward using it to understand and learn — the equivalent of shogi's post-game review and analysis mode — can be the substance of democratization.
{{< /say >}}

And at the end, the AI graded its own output.

{{< say who="ai" >}}
The four analogies all actually existed, so I believe they are sound. For insight 1, I have not checked whether the same thing already exists. Insight 2 is a restatement of what was said today, and **includes the possibility that I merely connected it up neatly. Please test it by looking for counterexamples**.
{{< /say >}}

To the question where Yamai had separated "people who can submit" from "people who understand and learn," the AI had answered head-on. And it declared its own weak points. Even so, the room's assessment was harsh.

{{< say who="yamada" >}}
When I ran an Agora rehearsal one-on-one on a different theme, somewhat deeper "I see" examples came out. **This is stating the obvious — there's no novelty in it**. The analogies are really simple, and it reads as though it's only written down things where you'd say "well, obviously."
{{< /say >}}

{{< say who="yamai" >}}
Well, what's correct is correct, I think.
{{< /say >}}

{{< say who="kitamura" >}}
It's obvious, but it does feel like it put into words something that had been vague. …I don't really get what these words <strong>"currency"</strong> and <strong>"bridge"</strong> mean, but it's saying let's make the entrance gentle and design it so you can climb as deep as you like — that's the gist, right? I think that much is fair. I've got no particular objection.
{{< /say >}}

The direction was right. What was missing was the form. And the AI was saying correct things in words that did not land.

{{< say who="yamada" >}}
There's no concreteness either. What should we do. In about thirty minutes I'd like to develop this into something like a concrete solution or product.
{{< /say >}}

Thirty minutes were left.

## 5. What changed sixteen minutes later

Just as it was about to stall, Yamai gave it a direction.

{{< say who="yamai" >}}
Not exactly in response to this answer, but — **taking the things Kaggle currently requires and breaking them down small and fine, into something more like a minimum Kaggle**, I think a product with that kind of structure is one option. Something like **a learning platform where you learn refined elements in small pieces, purely in order to follow the structural interest**.
{{< /say >}}

The moderator wrote that straight into an instruction for the AI. And at the end he added one clause: "**Search for similar services as well, then think about concrete ways to build it.**"

9:34 p.m. The first line of the answer that came back was honest bad news.

{{< say who="ai" >}}
| Existing | What it is | Where it overlaps with this idea |
|---|---|---|
| Kaggle Getting Started | Permanent beginner competitions with tutorials | "Easy competitions for beginners" already exists on Kaggle itself |
| **Kaggle Playground Series** | Lightweight monthly competitions. Simple synthetic tabular data, which Kaggle states is designed to be more approachable than the main competitions | "Mini competitions with the volume and complexity dialed down" **already exists in almost exactly this form** |
| Kaggle Community Competitions | Anyone can host a competition for free. Automatic scoring, leaderboards and notebooks included | The vessel for a "platform for setting problems" is off the shelf |
| SIGNATE practice problems, atmaCup beginner-friendly rounds | Japanese language, with beginner courses | A Japanese-language, beginner-oriented venue also already exists |

**An honest verdict:** if you build "make Kaggle smaller and easier and pose it that way" as stated, **it collides head-on with Playground Series**. All of the existing options are <strong>"the whole pipeline, shrunk"</strong> — lighter data and easier tasks, but the full set of stages.
{{< /say >}}

Without that one clause, "search for similar services as well," the AI would have proposed a "minimum competition" and stopped there. And second, it wrote down the difference that survived.

{{< say who="ai" >}}
The shogi analogy from earlier pays off here. Besides playing a game, shogi has **tsume-shogi and "find the next move"** — competitive formats that decompose the real game into its stages. In chess terms, tsume-shogi is the mate-in-three puzzle. Those formats have carried the entrance and the training for centuries.

**As far as I can find, Kaggle has no equivalent of tsume-shogi**. There is only ever the full game (environment setup → preprocessing → model → submission), and even the easy competitions are just short full games. So —

**Change the axis of decomposition from "make the data smaller" to "carve out a single stage." One problem equals one judgment**.
{{< /say >}}

Then it produced three formats for setting problems.

{{< say who="ai" >}}
**1. Tsume-Kaggle** ── "This notebook scores 93% in local validation but 71% on submission. Identify the cause." The answer is unique and can be scored automatically.
**2. Find the next move** ── "Add exactly one move to this baseline that raises the score." There are multiple right answers, and a scorer judges immediately.
**3. Structure quiz** ── "Why is this validation split wrong?" A problem where **mathematical and logical ability works directly as currency**.

These satisfy all three of tonight's conditions (existing assets as currency, a gradient, an immediate checking device). Someone who likes mathematics can solve problem one with logic and zero environment setup. Keep going and the practical knack comes as a side effect, and the top of the ladder connects to real Kaggle. **And because the problems can be designed so that your own judgment is tested even if you hand it all to an AI, this is a direct answer to Yamai's question about whether people who can submit are actually understanding and learning**.
{{< /say >}}

{{< say who="yamada" >}}
Tsume-Kaggle — I like that, it really resonated with me. With shogi, the game itself is fun, but **there are people who don't play much and only do tsume-shogi, the puzzle lovers**, and doing tsume-shogi builds your shogi strength too, and you can enjoy it in a short sitting. I feel it would be great to have a Kaggle version of that. Yamai, how does this look to you?
{{< /say >}}

{{< say who="yamai" >}}
No, that's interesting.
{{< /say >}}

{{< say who="itonaga" >}}
"Tsume-Kaggle" — I think that's really interesting.
{{< /say >}}

### Two things changed, broadly

Laid out from the instruction side, here is what happened in sixteen minutes.

| | 9:18 p.m. | 9:34 p.m. |
|---|---|---|
| Length | 6 words | 45 words |
| Specified | The thinking operations (analogy, abstraction, insight) | The same ＋ **a direction** ＋ **a check against what exists** |
| Direction | none | **break the stages down into a minimum** (Yamai's words) |
| Constraint | none | **search for similar services as well** |
| Result | Correct but obvious. "A well-aimed list" | The absence of tsume-shogi, after checking the main existing options |

**Specify the operations and, without a direction, it stops at the obvious**. And the direction came from neither the AI nor the moderator.

{{< column n="4" title="Why the same AI changed in sixteen minutes" >}}
The 9:18 p.m. output was obvious; the 9:34 p.m. output moved the room. **In those sixteen minutes the AI did not change by a single byte. What changed were the conditions a human added just before**.

There is a mechanical reason for this. AI is a machine that produces "given this context, which word comes next with what probability." So when you ask carelessly, the conditions are thin and probability piles up on **the phrasings most common in the world**. **A bland answer is not a malfunction. It is the design working correctly**.

Two things get confused here.

- **Lowering the temperature** ── Temperature is a setting used when generating the answer. Lower it and it picks only the highest-probability words; raise it and it also reaches for low-probability ones. But it is only changing how it chooses within the same distribution. It is an operation that moves toward the bland middle
- **Adding conditions** ── **This deforms the distribution itself and moves where the peaks are**. A new peak rises somewhere that had been buried in the tail

Two conditions were added at 9:34 p.m.: Yamai's direction to "break the stages down into a minimum," and the constraint to "look up similar services first."

**But while conditions can move you off the commonplace answer, they do not decide which low-probability region holds the value**. That has to come from outside.

{{< fig n="6" src="img/agora/r1/fig05.en.svg" src-sp="img/agora/r1/fig05-sp.en.svg" >}}The bar heights are schematic, not measured. Vocabulary size differs by model and runs into the tens of thousands of words.{{< /fig >}}

**There is one thing to take away. When you are not satisfied with an answer, suspect your own last set of conditions before you blame the AI**.

At the end of the two hours, Kitamura said this about the method: "Everyone talks, you feed it to the AI, and have the AI think. **That's an approach that produces an answer under conditions rather than an average** — I found that interesting."
{{< /column >}}

### He said he could not picture a concrete example

The move had been found. But the form was still not visible.

{{< say who="yamada" >}}
I can't picture a concrete example of Tsume-Kaggle. Explain it with an ASCII diagram, as an analogy with tsume-shogi
{{< /say >}}

9:47 p.m. The AI drew the contrast between a full game and a tsume-shogi problem, then transferred it onto Kaggle.

{{< say who="ai" >}}
【A full game — real shogi】

- Opening, middlegame, endgame, all of it
- One game ＝ several hours
- Too much to learn, so a beginner cannot even tell what went wrong

↓ this is where beginners give up

【Tsume-shogi — one decomposed problem】

- The position is handed to you from partway through
- "Force a mate in three from here"
- One problem ＝ 5 minutes. The answer is unique ＝ right or wrong is immediate

↓ beginners start here, and one single skill — endgame strength — is reliably trained

【Full Kaggle — today's entrance】

- environment setup → load data → preprocess → features → model → validate → submit
- One competition ＝ several weeks
- Mathematical ability is cashed into the first score at a rate of zero

【Tsume-Kaggle — the proposal】

- You are handed a notebook that is already partly finished (the position)
- "Think about one move inside it" / one problem ＝ 15 minutes
- Logical and mathematical ability works directly as currency
{{< /say >}}

And then it produced an actual problem.

{{< say who="ai" >}}
**Problem 7: "The Missing 22 Points"**

The situation ── Someone built a model to predict customer churn. In their own validation it scored **93**. When they submitted it, it scored **71**.

The data has five columns. Customer ID / age / months as a customer / **date the cancellation was filed** / whether they churned.

**The question: the 93 was a lie. Why? Name the one column responsible**.

The answer is "date the cancellation was filed." **Data that exists only for people who churned — information from the future — had been mixed in**. Using it to predict is the same as copying off someone's paper; the points vanish in the real run because that column is not available.

It has the same three properties as tsume-shogi. The position (code plus data) is handed to you, so environment setup is zero. The answer is unique, so a machine can score it instantly. **And what you need is not Python skill but an eye for logic**.
{{< /say >}}

{{< say who="ai" >}}
There is one point. **Just as tsume-shogi put someone who only knew how the pieces move in direct contact with the interest of the endgame, Tsume-Kaggle puts someone who cannot write Python in contact with the most interesting part of Kaggle — the moment of seeing through the structure behind the numbers — within the first fifteen minutes**. In today's full Kaggle, weeks of chores stand between you and that point.
{{< /say >}}

Here the practitioner's verdict came down.

{{< say who="yamai" >}}
One thing that's interesting — or rather, **that hadn't existed** — is that the thing where local validation says 93 and submission says 71, what's commonly called leakage, and **the mistakes you tend to make while doing Kaggle, and in data analysis generally — having those treated officially as problems would be quite welcome. For a beginner**.
{{< /say >}}

From there the carving continued.

{{< say who="itonaga" >}}
With tsume-shogi there's the "mate in how many moves" part, isn't there. I think it would be interesting if you could build that into Kaggle too. Something like: within a limited number of attempts, you must reach this point. **If it says "this can be done in N moves," I think that actually increases the number of people who go looking for that solution**.
{{< /say >}}

{{< say who="yamai" >}}
Data would be needed in some form. Generating data with AI does happen lately, but **the quality often isn't very good, so it feels best to be able to use real, publicly available data**.
{{< /say >}}

The mathematics advisor was the one who asked again who this was for. The one who gave the direction was a high school senior. The one who converted it into conditions for the AI was the moderator. The one who produced the link to tsume-shogi was the AI. The one who judged whether it was genuine was the high school senior. The one who added the carving of a move count was the entrepreneur. The one who checked the constraint on data was the high school senior. Take any one of them away and this move does not arrive.

{{< fig n="7" src="img/agora/r1/fig07.en.svg" src-sp="img/agora/r1/fig07-sp.en.svg" >}}In these two hours, the direction came from the high school senior, the link came from the AI, and the judgment of whether it was genuine also came from the high school senior.{{< /fig >}}

{{< column n="5" title="The newness AI can produce, and the newness it cannot" >}}
Being "a combination of things that already exist" **does not mean it has no value**. The reason is the number of combinations.

{{< fig n="8" src="img/agora/r1/fig-dots.en.svg" src-sp="img/agora/r1/fig-dots-sp.en.svg" >}}There are 28 dots. Choosing two gives 378 combinations. The number of dots is schematic; the number of elements a real AI has learned is far larger.{{< /fig >}}

**So newness is not decided on the side of the materials. It is decided by whether anyone had found that link yet**.

Here are well-known cases of creating a valuable new business.

```
  【Hailing a taxi】        you phone for one and wait
  【GPS in a smartphone】    you know where you are right now
  【Idle time and cars】     sitting unused
              ↓
  Connect the three and you get Uber

  ※ All three existed before 2010.
    The mechanism did not exist because nobody had connected them.
```

Research has a case that has been known for a long time.

```
  【Research on fish oil】     lowers blood viscosity
  【Research on Raynaud's】     a disease of poor circulation in the fingers
              ↓
  What they had in common was "blood viscosity"

  ※ Both bodies of literature already existed.
    Nobody crossed this bridge because nobody read both.
```

**What happened that day had the same shape**.

```
  【Shogi】     has tsume-shogi, a single decomposed problem
  【Kaggle】    has no single decomposed problem
              ↓
  What they had in common was the form "a competition that decomposes the real game into stages"

  ※ Everyone knows both.
    Nobody had noticed because nobody had put them side by side.
```

This is where the reason AI is strong and the reason a human is needed part ways. **AI can produce candidate links in bulk — more than a human can. But it cannot decide which of the candidates that come out has meaning**. As in Column 3, it has no instrument for measuring that.

AlphaFold and AlphaTensor became superhuman less because they were clever than because they could be scored. Whether a predicted shape matches an experiment, or whether the number of multiplications is smaller, is something a machine can judge. The question in these two hours has no such thing. So candidates come out, but the choosing falls to a human.

There is more than one way to make something new. There is a second one.

```
  Adding (linking)
    connect two elements that already exist
    example  tsume-shogi × the stages of Kaggle ＝ Tsume-Kaggle
    ※ because the number of combinations is enormous, unfound ones always remain

  Subtracting (removing an assumption)
    take something believed to be a premise and turn it into an option
    example  discard the parallel postulate
    ※ cannot be produced by combination. it is an operation outside addition
```

Euclid set down "through a point not on a line there is exactly one parallel" as a postulate. For roughly two thousand years afterward, everyone assumed it must be provable from the other postulates. Around 1830, Lobachevsky and Bolyai **stopped trying to prove it and discarded it**. What followed was that a world with infinitely many parallels, and a world with none, could both be built without contradiction.

And what is subtracted looks, afterward, like something that was added. Non-Euclidean geometry can now be explained as "four postulates combined with the properties of a curved surface." Before the discovery nobody held it as an element; after the discovery anyone can explain it as a combination. The line between inside and outside swaps depending on when you look.

What they did that day was the connecting-dots side. The side that removes something believed to be a premise, they did not do.
{{< /column >}}

## 6. Checking the answers

Finally, look again at the careless-throw answer from the beginning.

{{< say who="ai" >}}
Democratizing Kaggle — interesting theme. If we lay out Kaggle's current problems, the bottlenecks are roughly: a high barrier to entry (statistics and ML knowledge, English, GPU environments), a disconnect between the top competitors and beginners, and a gap from real-world practice. Here are several service ideas that break each of those down.

**1. "Kaggle Sherpa" — a competition platform with an AI mentor alongside you**

**2. "Micro-Kaggle" — micro-competitions that finish in an hour**

**3. "Kaggle for Domain Experts" — competing without code**

**4. "Real-Data Kaggle" — turning the problems of small and mid-sized companies into competitions**

**5. "Kaggle Replay" — time-machine learning from past competitions**
{{< /say >}}

Those five were not bad. Numbers 2 and 5 are even adjacent to the idea that was born. A careless throw does produce "a list of well-aimed directions."

But there are two decisive differences.

**First, all five sat inside the frame of "bring people closer to competitions — make them smaller, easier, with someone alongside."** Not once did they step into the frame of rebuilding the unit of competition itself.

Second. At the end of the careless-throw answer, the AI had written this.

{{< say who="ai" >}}
The one I consider most viable as a business is the combination of **4 (Real-Data Kaggle) and 3 (bringing in domain experts)**. Three reasons:

- **It is distinctive in extending "democratization" beyond the participant side to the side that sets the problems**
- It only becomes possible now that synthetic data generation (for privacy protection) has matured
- The revenue source is clear (SaaS fees from companies), which is more sustainable than Kaggle's prize-dependent model
{{< /say >}}

The AI's grounds for calling it distinctive were about extending democratization to the side that sets the problems, not the participant side.

Recall what happened. That direction had already collapsed within these two hours. It is the scene where the moderator's idea of "high school students becoming the ones who set the problems" was judged unworkable by Yamai within minutes on the grounds of the volume and quality of the data, and then reversed with "the interest points at structure, not at real problems."

**The idea the AI itself called the best had already been discarded, by a practitioner's judgment, within these two hours**. AI can produce candidates. But it holds no instrument for choosing which one is genuine — the structure written in Column 5 was performed live over two hours.

## 7. What was built

The idea that was born did not take shape as it was. The month it took to finish is covered in the development record (coming soon).

{{< fig n="9" src="img/agora/r1/shot-chapters.png" >}}Sixteen of the 21 questions. In every one, moving a knob (a parameter) or an option changes the numbers and the graph on the spot, and it judges whether you reached the target. It starts from a single straight line and moves on to stacked networks, the probabilities behind choosing words, and real data. (The screens are the Japanese version; the English version of the product is in preparation.){{< /fig >}}

### What the product is

**1. You read it as a dialogue, and move things yourself as you go**

It proceeds as an exchange between a professor and an 11th grader. Rather than reading an explanation, you follow a conversation and it comes into focus.

Introductions to AI written as dialogue exist. Visualization tools you can touch and move exist. Practice sites that pose one problem at a time and score it exist. **But nothing combined all three. So we built it**.

{{< wide >}}
| | Readable as dialogue | You move it yourself | Posed as a problem and scored |
|---|---|---|---|
| Introductions written as dialogue (e.g. the *Math Girls* notebooks) | ○ | ✗ | ✗ |
| AI visualization tools (e.g. Transformer Explainer) | ✗ | ○ | ✗ |
| One-problem, auto-scored practice sites (e.g. Deep-ML) | ✗ | ○ | ○ |
| **Deep Black Box** | ○ | ○ | ○ |
{{< /wide >}}

{{< fig n="10" src="img/agora/r1/shot-q1q2.png" wide="1" >}}Each question opens with an exchange between the professor and the 11th grader, and then you move things yourself. In question 1, moving two knobs brings a line closer to the points, and the score for the gap comes back on the spot. In question 2, that gap becomes a landscape and you descend toward the lowest place.{{< /fig >}}

**2. All 21 questions have you use your hands**

There is not a single question you only read. Most have **knobs** (sliders you move left and right) lined up, and what you are moving is the numbers inside the AI itself — the **parameters**. Questions without knobs have you switch things with buttons, or predict the outcome from three options first.

**3. Every number on the screen is a measured value**

AI is difficult, so it has to be written accessibly; but make it too accessible and the wording stops being accurate. So the mechanisms are tied to 32 original papers — the 32 papers cited in the Japanese book [*Understanding Generative AI from the Original Papers*](https://www.amazon.co.jp/%E5%8E%9F%E8%AB%96%E6%96%87%E3%81%8B%E3%82%89%E8%A7%A3%E3%81%8D%E6%98%8E%E3%81%8B%E3%81%99%E7%94%9F%E6%88%90AI-%E8%8F%8A%E7%94%B0-%E9%81%A5%E5%B9%B3/dp/4297150786). And wherever something was simplified for this product, it says so.

**4. Nothing to set up**

No installation, no environment setup. Just open it in a browser. It works on a phone too.


### Deep Black Box

Open up the black box of AI one question at a time, with your own hands. 21 questions in all.

{{< cta href="/en/deep-black-box/" label="Start" sub="Open up the black box of AI one question at a time, with your own hands. 21 questions in all." href2="https://docs.google.com/forms/d/e/1FAIpQLScyE3bWc8rh3wcnLLlaxpXOhrwUYjPU-ccS3FfnIZgcoPqkRw/viewform" label2="Send us your thoughts" >}}

## About this article

This is a record of the first session of [Agora](/en/agora/). It is small and selective; the first cohort is being run mainly through invitations and referrals.

Agora is run by [Roppongi Venture Capital](/en/). We run incubation programs for middle school, high school and university students at the level of Mathematical Olympiad and Science Olympiad medalists, in which selected participants experience building a product with AI and taking it out into the world.
