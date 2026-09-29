---
title: "How Far Has AI Gotten on Unsolved Math Problems? What 120 Records Show About the Last Two Years"
date: 2026-09-29
draft: false
description: "Has AI created new ways of thinking, as great mathematicians have? A 23-year-old without advanced math training used AI to solve a problem open for nearly 60 years. So who recognized its value? We analyzed 120 claims that AI \"solved\" or \"proved\" a problem."
pillars: ["Deep Tech Decoded"]
tags: ["AI", "Mathematics", "Data"]
hero_style: "background:linear-gradient(135deg,#0a1628 0%,#1a2744 40%,#0d3655 100%)"
thumbnail: "/img/jiwa/ai-math-frontier.png"
hero_label: "Deep Tech Decoded"
---

---

## A "solution" to a Millennium Prize Problem has been announced

On September 8, 2026, OpenAI announced that an AI it is developing in-house had produced a proof resolving a problem about the Navier–Stokes equations. It is one of the Millennium Prize Problems: seven hard problems chosen in 2000 by the Clay Mathematics Institute in the United States, each carrying a prize of one million dollars. The only one recognized as solved so far is the Poincaré conjecture, solved in 2002–2003 by the human mathematician Grigori Perelman.

The Navier–Stokes equations describe how water and air flow, and they are used every day in weather forecasting and aircraft design. Yet no one had proved that the equations always give a meaningful answer, that is, that the speed of the flow can never become infinite at a single point.

What OpenAI showed is an example in which the speed does become infinite, under the condition that a force keeps being applied to the flow from outside. It ran about 10,000 AI agents for 88 hours and wrote a 166-page proof. The Clay Mathematics Institute said the problem "appears to have been solved," while stating that it will not rush its review.

Mathematicians believe the proof is correct because it passed a machine check. At the same time, some said it is "not written for humans" and that "it is very hard to extract understanding from this proof." A dispute over credit also continues with a researcher who had published results on the same problem the day before.

<details style="margin:2em 0">
<summary><strong>More detail: What is the Navier–Stokes problem, and what is being debated? (click to open)</strong></summary>

**What the Millennium Prize Problems are**: Seven problems that the Clay Mathematics Institute selected in 2000 as the most important unsolved problems in mathematics. Solving one earns a prize of one million dollars. The only one officially recognized as solved is the Poincaré conjecture, proved in 2002–2003 by the Russian mathematician Perelman. That proof was entirely human and had nothing to do with AI.

**What the Navier–Stokes equations are**: Equations that describe the flow of water and air. They apply the law of motion taught in high school physics (force = mass × acceleration) to a small parcel of fluid, and they split the causes that change the speed of the flow into three: the push from surrounding fluid (pressure), the stickiness of the fluid (viscosity), and forces applied from outside. They were written down nearly 200 years ago and are still used every day in weather forecasts, the design of aircraft and cars, and simulations of blood flow.

**What the problem is**: Despite this heavy use, it has not been proved mathematically that the equations always give a meaningful answer. The question is whether, starting from a smooth flow, the speed can become infinite at some point at some moment (mathematicians call this "blow-up"). Real water never moves infinitely fast. If this happened in the equations, it would mean the equations fail to describe reality in that situation. A proof that it never happens would guarantee that the equations always make sense. Either answer has been expected to help us understand phenomena that are still poorly understood, such as turbulence. Tristan Buckmaster, a mathematician at New York University, told NPR that although the equations are used daily in physics and engineering, nobody fundamentally understands why they work.

**What OpenAI showed**: An example in which the speed becomes infinite in finite time, under the condition that a smooth force keeps being applied to the flow from outside. It ran about 10,000 AI agents for 88 hours, wrote a 166-page proof, and attached a machine check written in the Lean language. The Clay Mathematics Institute said the problem "appears to have been solved," while stating that it is deliberately not rushing its review. The result does not answer whether the same thing happens when no outside force is applied. Scientific American raised this point under the headline "Did OpenAI solve the wrong Navier–Stokes problem?"

**How mathematicians reacted**: The mathematicians NPR spoke with consider the proof technically correct, largely because the machine-checking code actually ran. At the same time, some said "it is very hard to extract human understanding from this proof" (James Maynard, University of Oxford) and "it is not written for humans; it does not explain which parts matter, which parts are routine calculation, or where its ideas could be used elsewhere" (Javier Gómez-Serrano, Brown University). Being correct and being understandable are different things.

**Whose result is it?**: Buckmaster had been working on the same problem with collaborators and published their results the day before OpenAI's announcement. Buckmaster has suggested that OpenAI knew how his group was approaching the problem; OpenAI denies this.

</details>

This one case contains nearly every issue of the past two years in AI and mathematics: a big announcement, results still being checked, machine verification, and disputes over credit.

This article collects announcements from 2023 through September 2026 in which AI was said to have contributed to an unsolved math problem, checks each one against papers and official records, and uses the resulting 120 cases to lay out what has happened.

---

## Where do the widely reported cases stand now?

- **October 2025　"GPT-5 solved 10 Erdős problems" (OpenAI)**<span style="display:inline-block;font-size:0.8em;line-height:1.5;padding:0 0.6em;margin-left:0.6em;border:1px solid #f39c12;color:#9c640c;border-radius:2px;font-weight:600;vertical-align:0.1em">Already known</span><br>
  What it showed: The answers to the 10 problems were already in published papers. What the AI found were those papers.<br>
  Current status: The announcement post was deleted.

- **May 2026　Disproof of the unit distance conjecture (OpenAI)**<span style="display:inline-block;font-size:0.8em;line-height:1.5;padding:0 0.6em;margin-left:0.6em;border:1px solid #1abc9c;color:#0e6655;border-radius:2px;font-weight:600;vertical-align:0.1em">Confirmed</span><br>
  What it showed: A conjecture about distances between points in the plane, posed by Erdős in 1946, is false.<br>
  Current status: Nine outside mathematicians wrote a verification paper.

- **July 2026　Counterexample to the Jacobian conjecture (researchers at Anthropic)**<span style="display:inline-block;font-size:0.8em;line-height:1.5;padding:0 0.6em;margin-left:0.6em;border:1px solid #1abc9c;color:#0e6655;border-radius:2px;font-weight:600;vertical-align:0.1em">Confirmed</span><br>
  What it showed: A conjecture about polynomials, open since 1939, is false for three or more variables.<br>
  Current status: An expository paper has been published, and there is a machine check.

- **August 2026　Zeros of the zeta function (Anthropic)**<span style="display:inline-block;font-size:0.8em;line-height:1.5;padding:0 0.6em;margin-left:0.6em;border:1px solid #1abc9c;color:#0e6655;border-radius:2px;font-weight:600;vertical-align:0.1em">Confirmed</span><br>
  What it showed: More than two thirds of the zeros of the zeta function, which governs how prime numbers are distributed, lie on the line where they are expected to lie. This is not the Riemann hypothesis itself.<br>
  Current status: There is a machine check, and human researchers have also published a separate proof.

- **September 2026　Lean formalization of Fermat's Last Theorem (Anthropic)**<span style="display:inline-block;font-size:0.8em;line-height:1.5;padding:0 0.6em;margin-left:0.6em;border:1px solid #1abc9c;color:#0e6655;border-radius:2px;font-weight:600;vertical-align:0.1em">Confirmed</span><br>
  What it showed: A theorem proved in 1995 was rewritten in 11 days into a form a machine can check (13 million lines). This is not new mathematics.<br>
  Current status: Kevin Buzzard, a leading figure in formalization, has confirmed it.

- **September 2026　Navier–Stokes equations (OpenAI)**<span style="display:inline-block;font-size:0.8em;line-height:1.5;padding:0 0.6em;margin-left:0.6em;border:1px solid #95a5a6;color:#515a5a;border-radius:2px;font-weight:600;vertical-align:0.1em">Not yet verified</span><br>
  What it showed: See the opening section.<br>
  Current status: The Clay Mathematics Institute is reviewing it.

- **September 2026　"Solved over 100 open problems" (OpenAI)**<span style="display:inline-block;font-size:0.8em;line-height:1.5;padding:0 0.6em;margin-left:0.6em;border:1px solid #95a5a6;color:#515a5a;border-radius:2px;font-weight:600;vertical-align:0.1em">Not yet verified</span><br>
  What it showed: Announced as results of a new in-house model.<br>
  Current status: As of September 27, neither the list of problems nor the proofs had been published.

<picture><source media="(max-width: 600px)" srcset="/img/jiwa/ai-math/c6_famous_en_m.png"><img src="/img/jiwa/ai-math/c6_famous_en.png" alt="Even conjectures nearly a century old have moved" loading="lazy"></picture>

The conjectures that make the news are ones that have been known for decades. As the chart shows, even conjectures from the 1930s have moved. However, results that have been fully checked (green) are mixed with results still being checked (gray). "Shown false" in the chart means the AI found an example proving the conjecture wrong. Showing that a conjecture is false also counts as solving the problem.

---

## How has the number of announcements changed over two years?

<picture><source media="(max-width: 600px)" srcset="/img/jiwa/ai-math/c1_quarterly_en_m.png"><img src="/img/jiwa/ai-math/c1_quarterly_en.png" alt="Announcements of AI contributions to open math problems (per quarter)" loading="lazy"></picture>

**From summer 2025, the number of announcements rose sharply.** There were 3 announcements in April–June 2025, 20 in October–December, and 35 in July–September 2026. Those 35 in the latest three months equal 40% of the total for the preceding two and a half years (85).

It was not only the number that changed. The kind of AI used changed too. Among the 13 cases through June 2025, only 3 had a large language model such as GPT or Gemini work on the problem directly; most used special-purpose programs built for mathematical search. Among the 107 cases from July 2025 onward, 81, about three quarters, used large language models such as GPT, Gemini, or Claude (an approximate count based on the names of the AI systems used).

Over the same period, AI reached the level of human gold medalists at the International Mathematical Olympiad for high school students: a silver-medal-level score in 2024, gold-medal level in 2025, and reports of perfect scores in 2026. From 2026, research organizations that evaluate AI began using real unsolved problems themselves as tests.

<picture><source media="(max-width: 600px)" srcset="/img/jiwa/ai-math/c2_breakdown_en_m.png"><img src="/img/jiwa/ai-math/c2_breakdown_en.png" alt="Where the 120 “AI solved it” claims stand" loading="lazy"></picture>

**However, of the 120 cases announced as "solved," only 64, about half, have been confirmed by third parties.** Of the rest, 40 have not yet been verified by anyone, 11 already had answers in published papers, 4 had wrong proofs, and 1 drew criticism for insufficient citation of prior work.

In this article, a result is called "confirmed" if it meets at least one of the following three conditions.

- It passed expert peer review and was published in a journal or similar venue
- It was verified in a language for machine-checking proofs, such as Lean, and the record is public
- At least two experts other than the authors publicly stated that it is correct

---

## Who is leading the work?

<picture><source media="(max-width: 600px)" srcset="/img/jiwa/ai-math/c7_lead_en_m.png"><img src="/img/jiwa/ai-math/c7_lead_en.png" alt="Who led the work?" loading="lazy"></picture>

We sorted the 120 cases into four groups by who mainly drove the work (the method is in Appendix 1).

- **In-house teams at major AI companies (55 cases)**: OpenAI, Google DeepMind, Anthropic, and Meta. Almost all of the cases that get major press coverage come from here.
- **AI-for-math startups (5 cases)**: Harmonic, Axiom Math, Math Inc, and others. Few in number, they handle rewriting known proofs for machine checking and building tools for machine verification.
- **Researchers at universities and institutes (31 cases)**: Researchers using AI in their own work. The quantum computing theorist Scott Aaronson wrote that GPT-5 supplied the key step in a proof he had been stuck on.
- **Individuals and online volunteers (29 cases)**: Mainly people posting on the Erdős problems website. Most of the 4 wrong proofs and the cases that were already known also fall here.

Major companies make the headlines, but by count, more than half of the cases come from researchers and volunteers. And professional mathematicians in the relevant fields are deeply involved even in the major companies' big results, as a later section shows.

---

## "Solved" does not mean just one thing

<picture><source media="(max-width: 600px)" srcset="/img/jiwa/ai-math/c4_claims_en_m.png"><img src="/img/jiwa/ai-math/c4_claims_en.png" alt="What did the AI do?" loading="lazy"></picture>

Of the 120 cases, 43, just over a third, claimed to have solved a problem completely. The rest include improving a record for an upper or lower bound (22 cases), solving special cases (21 cases), and finding a counterexample to a conjecture (14 cases). A headline saying "AI solved it" can mean any of these.

<picture><source media="(max-width: 600px)" srcset="/img/jiwa/ai-math/c3_erdos_en_m.png"><img src="/img/jiwa/ai-math/c3_erdos_en.png" alt="The stumbles are concentrated in Erdős problems" loading="lazy"></picture>

Of the 120 cases, 43 concern "Erdős problems": more than 1,100 problems that the 20th-century mathematician Paul Erdős left in his papers and talks over his lifetime, now collected on a website by the mathematician Thomas Bloom. **All 4 wrong proofs were Erdős problems, and so were 9 of the 11 cases that were already known.**

There are two reasons for this.

The first is the nature of the problems. "Open" on the website means the maintainers do not know the answer. So the list mixes problems that top mathematicians could not solve in decades with problems that nobody ever seriously looked at, or that had in fact been solved somewhere in the literature. The records kept by Terence Tao, the mathematician who received the Fields Medal in 2006, and his collaborators also warn that "open for years" can mean "nobody looked seriously" rather than "hard." The October 2025 "10 problems solved" episode was exactly this. Even then, the AI did find many old papers and papers in other languages that humans had overlooked. The problem was claiming it had "solved" them.

The second is a bias in the records. Only for Erdős problems do Tao and his collaborators publicly log each case, including not just successes but also errors and cases that were already known. Other fields have no such ledger. So this chart shows not only that "Erdős problems have many stumbles" but also that "Erdős problems are the only place where stumbles are recorded." Failures in other fields should be assumed to surface less often.

---

## Who checks correctness, and how?

<picture><source media="(max-width: 600px)" srcset="/img/jiwa/ai-math/c5_basis_en_m.png"><img src="/img/jiwa/ai-math/c5_basis_en.png" alt="Correctness is now judged mostly by machines" loading="lazy"></picture>

AI produces plausible-looking mistakes, so checking is essential. Who does the checking has changed over these two years. **Of the 64 confirmed cases, 57 were proofs checked by machine.**

The tools are languages such as Lean. When a proof is written step by step in a form a machine can read, the machine determines whether there are any gaps or errors in the logic. The rewriting of Fermat's Last Theorem mentioned above works the same way.

The 5 cases confirmed through expert peer review were all announced in 2023–2024. Peer review in mathematics usually takes one to two years, so announcements from 2025 onward have probably not yet received review results.

Machine checking has limits. What Lean guarantees is only that "the statement as written is true." If a mistake is made when translating the original problem into the machine's language, a correct proof still solves a different problem. A Google DeepMind paper reports cases in which the AI left hard steps marked "to be proved later" and cases in which it invoked theorems that do not exist. Checking that the translation is right is still a human job.

Human checking is not perfect either. In a paper in which researchers audited OpenAI's 10 announced results by hand, one of the points flagged as an "error" turned out to be a bar over a symbol that had simply disappeared when the text was extracted from a PDF.

---

## Why is so much computing power used?

For Navier–Stokes, about 10,000 AI agents ran for 88 hours. Why does it take that much computation?

Because even when a mathematical answer is short, finding it takes a long time. The counterexample to the Jacobian conjecture is a formula made of three polynomials. Checking it takes a moment, but finding it required trying countless candidates. It is like a PIN code: checking the right answer is instant, but finding it means trying many combinations.

Mathematicians, too, have spent years trying promising paths one after another and turning back at dead ends. AI runs that trial and error in parallel, at enormous scale. It is less a brute-force search over numbers than a brute-force search over proof strategies.

Proofs supported by computer calculation existed before AI. The four color theorem (any map can be colored with four colors), proved in 1976, used a computer to check its cases.

---

## Has AI created new ways of thinking, as great mathematicians have?

The history of mathematics includes people who, while working on a single problem, changed how the problem itself is seen.

In 1736, the mathematician Leonhard Euler answered the problem of the "Seven Bridges of Königsberg." Seven bridges connected an island in the river and the two banks of a town, and the question was whether one could walk across all seven bridges exactly once each. The townspeople tried many routes, but no one managed it.

<picture><source media="(max-width: 600px)" srcset="/img/jiwa/ai-math/c8_bridges_en_m.png"><img src="/img/jiwa/ai-math/c8_bridges_en.png" alt="Turning the seven bridges into dots and lines" loading="lazy"></picture>

Euler stopped trying routes. He set aside the shape of the land and the length of the bridges and looked only at how many bridges touch each landmass. On any landmass you pass through along the way, every bridge you enter by is paired with a bridge you leave by, so the number of bridges there must be even. Only two landmasses, where you start and where you finish, may have an odd number. In this town, however, all four landmasses had an odd number of bridges (5, 3, 3, and 3). So the walk is impossible in any order. This way of "thinking only in dots and lines" later became the field called graph theory, which leads to today's route-finding in car navigation systems and much more.

In the 19th century, Évariste Galois, working on whether fifth-degree equations have a formula for their solutions, stopped searching for the answers directly and instead studied the ways the answers can be swapped with one another. The idea that came out of this, the "group," is now a foundation of mathematics and physics.

What about AI? Reading the 120 cases, AI's work can be roughly divided into the following three stages (this classification is our own).

1. **Searching**: Trying huge numbers of candidates to improve records or to find examples that break conjectures. Most of the record improvements (22 cases) and counterexamples (14 cases) take this form. The counterexample to the Jacobian conjecture belongs here.
2. **Connecting**: Bringing a tool that was well known in one field to a problem where no one had thought to use it. Erdős problem #1196 is an example.
3. **Creating**: Building a new way of thinking itself, which becomes a new field, as with Euler's graph theory or Galois's groups. Whether any AI result falls into this category cannot be judged for decades.

In Erdős problem #1196, the AI brought ideas from probability to this problem about whole numbers. This approach is said to have been overlooked by experts ever since Erdős's 1935 paper. It resembles, in some ways, how Euler changed the way a problem was seen. Of this proof, Tao said that "a new way of studying the properties of large numbers has been found." At the same time, Tao said it is "not yet clear" how important this method will turn out to be (Scientific American).

The Navier–Stokes result from the opening section is, by the size of the problem tackled, the largest of the results AI has been involved in. But what was solved is the case in which an outside force keeps being applied. Mathematicians have said that "there is little to learn from this proof."

Whether new fields like graph theory or group theory will grow out of AI's results is not yet known. Galois's ideas themselves took more than a decade to be understood by mathematicians.

On the other hand, it is not accurate to dismiss AI's work as "mere brute force." Choosing which directions are worth searching and what to connect with what involves both human mathematicians' judgment and the AI's suggestions. There are cases in which the AI chose the direction itself (some Erdős problems, and the counterexample to the Köthe conjecture), and cases in which mathematicians set the direction and left the rest to AI (the zeros of the zeta function).

## Who notices the value of a result?

In April 2026, 23-year-old Liam Price entered Erdős problem #1196 into GPT-5.4 Pro and got a proof. What follows is based on an article in Scientific American (April 24, 2026).

Price says he has no advanced mathematical training and did not know what the problem was. He sent the result to Kevin Barreto, an undergraduate studying mathematics at the University of Cambridge with whom he sometimes works on Erdős problems. Barreto recognized its importance and alerted experts.

The problem had been open for about 60 years. Jared Duker Lichtman, a mathematician at Stanford University, had solved a problem of the same kind in his doctoral thesis but had been stuck on #1196. Tao explained that everyone who had attacked it before had all taken a slightly wrong turn at the very first step. The AI used a tool that was well known in a neighboring field but that no one had thought to apply to this problem.

However, according to Lichtman, the AI's original write-up of the proof was "pretty bad." Experts had to sift out what it was trying to say. Lichtman and Tao rewrote the proof more concisely, found that the same method works on other problems, and wrote a paper with Price and others as coauthors.

The same structure appears in the big results of major AI companies. Four of Anthropic's major announcements (the counterexample to the Jacobian conjecture, the zeros of the zeta function, the construction of special matrices, and a new record for elliptic curves) all involved the same mathematician, Levent Alpöge. It is professionals in the field who decide which problems to work on and whether the results are valuable.

**What AI has made dramatically cheaper is the "solving" part. Choosing what to solve, noticing the value of what comes out, and extending it into further research remain, for now, on the side of humans with mathematical ability.**

This shift is also visible in where money goes. The computing cost of having AI solve a problem varies greatly from problem to problem. Google DeepMind reported that when AlphaProof Nexus solved Erdős problems and others, the computing cost was a few hundred dollars per problem. For Navier–Stokes, on the other hand, about 10,000 AI agents ran for 88 hours. Even so, compared with work that takes experts years, the cost of "solving" has dropped sharply. Meanwhile, startups promising technology that guarantees the correctness of proofs by machine have been valued at over a billion dollars, such as Harmonic at 1.45 billion dollars (November 2025). Major AI companies have begun hiring mathematicians as researchers and giving them the job of choosing problems and checking results.

So where do people with the ability to choose what to solve and notice the value of results come from? One clue is the International Mathematical Olympiad for high school students. The economists Ruchir Agarwal and Patrick Gaule followed Olympiad participants over their later lives. They found that those who scored higher as teenagers went on to write more papers as adults and were more likely to win the Fields Medal.

On the other hand, many winners of major mathematics prizes never competed in the Olympiad. Many of them belong to generations before the competition began, or come from countries that did not take part. They had ability but no venue in which it could be measured and noticed. Agarwal and Gaule's research also showed that among participants with the same Olympiad score, those from low-income countries later produced 34% fewer papers and received 56% fewer citations than those from high-income countries. The paper's title is "Invisible Geniuses." Talent turns into results only when there is a place that finds and develops it.

---

## Why are leading mathematicians speaking out?

In 2026, mathematicians' voices became more prominent. In June, the "Leiden Declaration," which urges people not to believe exaggerated claims about AI's mathematical abilities, was issued and endorsed by the International Mathematical Union. On September 8, Tao issued a warning, and on September 11, 25 Fields Medalists released a statement.

Among those speaking out are the mathematicians who have used AI most actively. Tao has collaborated with AI on Erdős problems and publicly recorded where AI contributed. He has also reported that an inequality in one of his own papers was solved with AI's help. These voices are not saying "don't use AI."

The concerns that can be read from the statements and remarks fall into four groups.

1. **Speed**: Tao said AI companies are solving problems "faster than the mathematical community can digest." The concern is that new results keep arriving and there is no time to understand them, write them into textbooks, and teach them to students.
2. **How credit is described**: Who did what, and was prior work cited properly? Mathematicians pointed out that two of OpenAI's results did not sufficiently cite earlier work.
3. **Announcing before checking**: Press releases and social media posts keep coming before proofs are published or checked.
4. **The purpose of research**: The Fields Medalists said that the purpose of mathematics is not just to solve problems but to deepen human understanding, and pointed to a "severe misalignment" with the trend of treating problems as material for comparing AI performance.

Some ways of announcing results have been praised. The British mathematician James Maynard acknowledged that AI made a genuinely interesting contribution in Anthropic's zeta function announcement, and praised the announcement for being restrained and for giving credit to prior work.

Constructive proposals have also appeared. Daniel Litt of the University of Toronto wrote that the purpose of mathematics is human understanding and that doctoral examinations should put more weight on whether candidates can explain their work orally. In September, OpenAI also set up an advisory group of nine outside mathematicians, including Tim Gowers.

The mathematicians' statements can be read as the mathematical community itself rethinking, now that AI can produce proofs cheaply, how to define researchers' work, how to evaluate it, and how to train young researchers.

---

## What do humans do when working with AI?

From here on, this is our view, based on reading these records.

In their statement, the 25 Fields Medalists said that solving problems is only part of the purpose of mathematical research, and that this concern extends to intellectual work beyond mathematics. They did not, however, propose specific rules for what to do.

Putting the 120 cases side by side with the examples of Euler and Galois, the work humans do when working with AI seems to fall into the following five parts.

1. **Choosing the problem**: In four of Anthropic's major results, the mathematician Alpöge decided which problems to work on.
2. **Knowing where earlier attempts got stuck**: For #1196, Tao explained that the mathematicians who had tried it before all took the same path at the first step and got stuck further along. Knowing where others got stuck gives a clue for trying a different path.
3. **Deciding how to attack**: Euler decided to stop trying routes one by one and to count only the number of bridges touching each landmass. In #1196, the AI took on this part.
4. **Checking that it is real**: There are two things to check. The first is whether the answer is already known. The problems that GPT-5 was announced to have "solved" in October 2025 already had answers in published papers. The second is whether the proof is correct. The proof of #1196 was rewritten in Lean, a language for machine-checking proofs, and passed the machine check. But what Lean checks is only that the proof correctly solves the problem as rewritten. Whether the rewritten problem is the same as the original must be checked by people.
5. **Understanding and extending it**: According to Lichtman, the AI's original write-up of the proof was "pretty bad." Lichtman, Tao, and others worked out what it was trying to say, rewrote the proof more concisely, and showed that the same method also solves other conjectures. It was at this stage that the result became valuable as "a new way to solve a 60-year-old problem."

We believe these five parts apply outside mathematics as well. When developing a new business or a patentable idea, simply handing the task to AI tends to return ordinary ideas. People look into earlier cases, have the AI propose candidate approaches borrowed from other industries, and decide which one to pursue. What differs from mathematics is how the fourth part, checking, works. In mathematics, a machine can check that a proof is correct; whether a business idea is good is decided by the people who use it and by the market.

---

## Summary

- Announcements that "AI solved an unsolved math problem" rose sharply from summer 2025, with 35 in the last three months alone.
- However, only about half have been confirmed by third parties. When you see such a headline, checking three things tells you what it really means: "Is it the actual problem, or a related one?" "Who checked it?" and "Was the answer already known?"
- Checking correctness has increasingly been taken over by machines. But whether the problem has been correctly translated into the machine's language is still checked by people.
- Most of AI's work is "searching," trying huge numbers of candidates, and "connecting," bringing in tools from other fields. Whether new fields will grow out of it is not yet known.
- What AI has made cheaper is the "solving" part. The role of mathematicians with the ability to choose what to solve, notice the value of results, and extend them has, if anything, become clearer.

Most AI companies publish only their results. The process, where humans set the direction, what the AI produced, and where it went wrong, is almost never made public. That is exactly what mathematicians are asking for.

Roppongi Venture Capital runs "Agora," where young talents discuss ideas with AI and people from other fields, create things that do not yet exist, and publish their thinking process as it happened ([record of Session 1](https://www.roppongivc.com/en/agora/ai-olympiad-record/)).

---

<details>
<summary><strong>Appendix 1　Research method and the limits of counting (click to open)</strong></summary>

**Scope**: Announcements made between January 2023 and September 27, 2026 in which AI contributed to an unsolved mathematical problem (or a comparable research question). This includes complete solutions, partial progress, counterexamples, improved upper or lower bounds, rewriting known proofs for machine checking, refutations and retractions, cases that were already known, and citation concerns.

**How cases were checked**: For all 121 cases, we opened the papers, official announcements, Lean and Isabelle repositories, and the Erdős problems website, and checked the substance of each claim and how AI was involved. One case whose primary sources did not mention AI involvement (the inverse Galois problem for the Mathieu group M23) was excluded from the counts.

**Criteria for "confirmed"**: Meeting at least one of the following: (1) passed expert peer review and was published in a journal or conference; (2) verified in a machine-checking language such as Lean or Isabelle, with the record public; (3) at least two experts other than the authors publicly confirmed correctness, for example through an expository paper or an independent proof. Cases meeting none of these are classed as "not yet verified," even if they may well be correct.

**Limits of machine checking**: What we checked is that the proof repositories are public and contain statements and proofs. We did not run the code ourselves. Also, what a machine checks is the correctness of the "statement as written"; whether it is the same as the original problem must be checked separately.

**Unit of counting**: One paper or official announcement counts as one case. An announcement covering many problems (such as one that rewrote about 180 Erdős problems in Lean at once) is also one case. Counted by problem, the total is about 670.

**Announcements not yet found**: We estimated the total number from the overlap among three rounds of research (capture–recapture, Chapman's estimator). The result is that there are at least 140–150 announcements (95% interval about 115–180), meaning roughly 20–30 have not yet been found. Because the rounds of research consulted the same sources and are not independent, and well-known announcements are easier to find, this estimate comes out lower than the true figure.

**How "who led the work" was classified**: Based on the authors and the announcing organization, each case was sorted by hand into one of four groups: (1) in-house teams at major AI companies (announcements led by employees of OpenAI, Google DeepMind, Anthropic, or Meta); (2) AI-for-math startups; (3) researchers at universities and institutes (including the evaluation organization Epoch AI); and (4) individuals and online volunteers (such as posters on the Erdős problems website). Cases spanning several groups were placed with the group that led them.

**Bias toward Erdős problems**: For Erdős problems, Tao and his collaborators publicly record even errors and cases that were already known. Other fields have no such records, so the numbers of errors and already-known cases are very likely undercounted outside Erdős problems.

**Timing**: All figures are as of September 27, 2026. Many 2026 cases were announced only weeks ago, and their assessments may change through retractions, corrections, or peer review. We welcome corrections and reports of missing cases.

</details>

<details>
<summary><strong>Appendix 2　AI's results in competition mathematics (click to open)</strong></summary>

<div style="overflow-x:auto">

| Year | Event | How it was checked |
|---|---|---|
| July 2024 | Google DeepMind's AlphaProof and AlphaGeometry 2 scored 28 of 42 points at the International Mathematical Olympiad (silver-medal level). Some problems took days | Graded by prominent mathematicians |
| July 2025 | Google DeepMind's Gemini Deep Think and an OpenAI experimental model scored 35 points (gold-medal level), answering in natural language | Google DeepMind: official grading by the organizers; OpenAI: independent grading by former medalists |
| July 2026 | Multiple AIs reportedly achieved perfect scores (42 points) | Based on press reports; no primary announcement from the organizers confirmed |

</div>

On FrontierMath, a set of hard problems for researchers, the best AI's accuracy was below 2% when it was released in November 2024, and reached 98% on the hardest tier in September 2026 (according to OpenAI).

</details>

<details>
<summary><strong>Appendix 3　All 120 cases (click to open)</strong></summary>

Numbers are those in our case list. "Problem" is a summary, not a mathematically precise statement. Status follows the criteria in Appendix 1.

<div style="overflow-x:auto">

| No. | Date | Problem (summary) | AI (organization) | What was claimed | Status |
|---|---|---|---|---|---|
| C001 | 2023-10-11 | Proof of the existence of murmurations of elliptic curves (oscillation in averages of Frobenius traces) | Machine learning (pattern discovery) / human-authored proof (Universities/individuals (other AI)) | Partial progress | Confirmed |
| C002 | 2023-11-06 | Improved lower bound for Erdős (1975) extremal graph problem on girth 5 (no C3, C4) | AlphaZero + Tabu search (curriculum learning) (Google DeepMind) | Improved a bound | Confirmed |
| C003 | 2023-11-13 | Lean formalization of the Polynomial Freiman-Ruzsa (Marton) conjecture | Lean 4 (proof assistant); AI contribution was limited (Universities/individuals (other AI)) | Formalization | Confirmed |
| C004 | 2023-12-14 | Cap set problem (improved lower bound for n=8 and improved asymptotic lower bound) | FunSearch (LLM + evolutionary search) (Google DeepMind) | Partial progress | Confirmed |
| C005 | 2023-12-14 | Improved heuristics for online bin packing | FunSearch (LLM + evolutionary search) (Google DeepMind) | Improved a bound | Confirmed |
| C006 | 2024-03-29 | Improved lower bounds for small Ramsey numbers (e.g., R(W5,W7), book and wheel graphs) | Reinforcement learning (cross-entropy method, extension of Wagner's approach) (Universities/individuals (other AI)) | Improved a bound | Not yet verified |
| C007 | 2024-09-27 | Construction of counterexamples to a family of spectral graph theory conjectures (from Graffiti/AutoGraphiX) | Search algorithms (Monte Carlo search / NMCS, NRPA) (Universities/individuals (other AI)) | Counterexample | Not yet verified |
| C008 | 2024-10-10 | Discovery of Lyapunov functions for non-polynomial systems (global stability) | Symbolic transformer (seq2seq) (Meta (FAIR) and universities) | Partial progress | Confirmed |
| C009 | 2024-11-01 | Minimum number of edges in a spanning subgraph preserving the diameter of a d-dimensional hypercube (Graham's conjecture) | PatternBoost (transformer + local search) (Meta (FAIR) and universities) | Counterexample | Not yet verified |
| C010 | 2024-11-01 | Minimum size of saturated k-Sperner systems (improving the lower-bound exponent ε) | PatternBoost (Meta (FAIR) and universities) | Improved a bound | Not yet verified |
| C011 | 2025-05-14 | Number of scalar multiplications for 4x4 complex matrix multiplication (first improvement since Strassen) | AlphaEvolve (Gemini + evolutionary coding) (Google DeepMind) | Improved a bound | Not yet verified |
| C012 | 2025-05-14 | Kissing number problem (improved lower bound in 11 dimensions) | AlphaEvolve (Google DeepMind) | Improved a bound | Not yet verified |
| C013 | 2025-05-14 | Constructions and lower bounds across roughly 50 open problems in research mathematics (cross-domain verification) | AlphaEvolve (Google DeepMind) | Partial progress | Not yet verified |
| C014 | 2025-08-20 | Step-size condition for gradient descent in convex optimization (improved the sufficient condition for convexity of the objective value curve from 1/L to 1.5/L) | GPT-5 Pro (OpenAI) | Improved a bound | Not yet verified |
| C015 | 2025-09-03 | Extension of the fourth moment theorem for sums of two Wiener-Ito integrals in the Malliavin-Stein method to a quantitative version (convergence rate in total variation distance) | GPT-5 (OpenAI) | Partial progress | Not yet verified |
| C016 | 2025-09-11 | Lean formalization of the strong prime number theorem (strong PNT) by Gauss (Tao–Kontorovich 2024 challenge) | Gauss (Math Inc) | Formalization | Confirmed |
| C017 | 2025-09-17 | Systematic discovery of unstable singularities in fluid equations by DeepMind (new unstable self-similar solutions for IPM, bounded 3D Euler, etc.) | Physics-informed neural network (PINN) + Gauss-Newton optimization (Google DeepMind) | Partial progress | Not yet verified |
| C018 | 2025-09-26 | Limits of black-box amplification in QMA (amplification beyond double-exponential completeness / exponential soundness is impossible) | GPT-5 Thinking (OpenAI) | Partial progress | Not yet verified |
| C019 | 2025-09-30 | Erdős problems (literature search and full-solution discovery type, roughly 30 problems) | GPT-5, ChatGPT Deep Research, Gemini Deep Research, Aletheia, and others (Multiple companies' AI) | Found existing paper | Already known |
| C020 | 2025-10-11 | Erdős problem #339 (number theory; full solution found via literature search) | GPT-5 (OpenAI) | Found existing paper | Already known |
| C021 | 2025-10-18 | A group of Erdős problems (OpenAI announced GPT-5 'solved 10 problems and made progress on 11') | GPT-5 (OpenAI) | Found existing paper | Already known |
| C022 | 2025-10-22 | Optimality of the majority function in NICD (non-interactive correlation distillation) with erasures | GPT-5 Pro (counterexample search) (OpenAI) | Counterexample | Not yet verified |
| C023 | 2025-10-27 | Pointwise convergence of Nesterov's accelerated gradient method (convergence of the iterate sequence itself) | ChatGPT/GPT-5 (substantially assisted in finding the proof) (OpenAI) | Solved completely | Confirmed |
| C024 | 2025-11-03 | Erdős problems #36/#507/#951/#1097 and others (improved constructions via AlphaEvolve) | AlphaEvolve (Google DeepMind) | Improved a bound | Not yet verified |
| C025 | 2025-11-05 | AlphaEvolve's exploration of 67 mathematics problems (analysis, combinatorics, geometry, number theory; rediscovered the best known solution in many cases and improved on several) | AlphaEvolve (Google DeepMind) | Improved a bound | Not yet verified |
| C026 | 2025-11-11 | New construction of Nikodym sets over finite fields (smaller cardinality than conventional random constructions in dimension d; novel in the non-square-q regime) | AlphaEvolve + Deep Think (Google DeepMind) | Improved a bound | Not yet verified |
| C027 | 2025-11-17 | Erdős problems (formalization and Lean conversion of existing proofs, roughly 130 problems) | Aristotle (majority), GPT, Codex, Seed Prover, AxiomProver, and others (Multiple companies' AI) | Formalization | Confirmed |
| C028 | 2025-11-17 | 15 improvements to known bounds in kissing number lower bounds and generalizations | PackingStar (cooperative game-based reinforcement learning) (Universities/individuals (other AI)) | Improved a bound | Not yet verified |
| C029 | 2025-11-20 | Improved lower bound on the competitive ratio for online convex body chasing (from √d to (π/2)√⌊d/2⌋ ≈ 1.11√d) | GPT-5 (OpenAI) | Improved a bound | Not yet verified |
| C030 | 2025-11-20 | Inequality on the count of 5-vertex subgraphs in trees (proved Bubeck-Linial's 2013 second conjecture 29Y-42P-144S≤K) | GPT-5 (OpenAI) | Solved completely | Not yet verified |
| C031 | 2025-11-20 | Recovering parameter w from a single-time-snapshot observation of a dynamic network (preferential attachment tree) (2012 COLT open problem) | GPT-5 (OpenAI) | Partial progress | Not yet verified |
| C032 | 2025-11-20 | Minimum dimension of clique-avoiding codes, r(n)=⌊n/2⌋ (proof of the lower bound ⌊n/2⌋) | GPT-5 (OpenAI) | Found existing paper | Already known |
| C033 | 2025-11-20 | Erdős problem #367 (partial result; collaboration between Tao, Alexeev, van Doorn, and AI) | Aristotle, Gemini Deep Think (Multiple companies' AI) | Partial progress | Confirmed |
| C034 | 2025-11-23 | Erdős problem #707 (formalization; GPT formalized Hall (1947) in Lean) | GPT (OpenAI) | Formalization | Confirmed |
| C035 | 2025-11-29 | Erdős problem #124 (partial result formalized in Lean by Aristotle) | Aristotle (Harmonic) | Partial progress | Confirmed |
| C036 | 2025-12-01 | Erdős problem #481 (GPT found a complete solution; formalization of Barreto (2025)) | Aristotle, Claude / GPT (Multiple companies' AI) | Formalization | Confirmed |
| C037 | 2025-12-03 | Erdős problem #481 (complete solution found via literature search) | ChatGPT Deep research, Gemini Deep Research / GPT (Multiple companies' AI) | Found existing paper | Already known |
| C038 | 2025-12-08 | Erdős problem #1026 (complete solution plus a strengthened conclusion; example of collaboration showing diverse AI assistance) | AlphaEvolve, Aristotle, Gemini, GPT (Multiple companies' AI) | Solved completely | Already known |
| C039 | 2025-12-25 | Erdős problem #333 (complete solution in Lean; later found to coincide with Erdős-Newman (1977)) | Claude Opus 4.5, GPT-5.2 Pro (Multiple companies' AI) | Solved completely | Already known |
| C040 | 2026-01 | Erdős problems (over 100 complete solutions and partial results through human-AI collaboration) | GPT-5.4/5.5 Pro, Aristotle, Claude, Gemini, and others (Multiple companies' AI) | Partial progress | Confirmed |
| C041 | 2026-01-06 | Erdős problem #728 (number theory; regarded as the first autonomous and nontrivial solution by AI) | Aristotle, GPT-5.2 Pro (Multiple companies' AI) | Solved completely | Confirmed |
| C042 | 2026-01-10 | Erdős problem #205 (complete solution in Lean) | Aristotle, GPT-5.2 Thinking (Multiple companies' AI) | Solved completely | Confirmed |
| C043 | 2026-01-10 | Erdős problem #397 (complete solution in Lean; later found to match a 2012 China TST problem) | Aristotle, GPT-5.2 Pro (Multiple companies' AI) | Solved completely | Already known |
| C044 | 2026-01-11 | Erdős problem #401 (complete solution in Lean; human-AI collaboration) | Aristotle, GPT-5.2 Pro (Multiple companies' AI) | Solved completely | Confirmed |
| C045 | 2026-01-11 | Erdős problem #51 (the free version of ChatGPT produced an incorrect proof) | ChatGPT free version (OpenAI) | Wrong / withdrawn | Proof was wrong |
| C046 | 2026-01-18 | Erdős problems #616/#888 (multiple AIs produced incorrect proofs; later resolved separately) | Claude Sonnet 4.5, Gemini 3 Pro, GPT-5.2 Pro / Claude Opus 4.5, Gemini 3 Pro, GPT-5.2 Thinking (Multiple companies' AI) | Wrong / withdrawn | Proof was wrong |
| C047 | 2026-01-19 | Erdős problem #42 (partial result in Lean, by Codex/GPT-5.2) | Codex, GPT-5.2, GPT-5.2 Pro (OpenAI) | Partial progress | Confirmed |
| C048 | 2026-01-22 | Erdős problem #728 (Lean formalization of Pomerance (2026)'s proof) | Aristotle (Harmonic) | Formalization | Confirmed |
| C049 | 2026-01-24 | Erdős problem #11 (Aristotle/GPT made an incorrect claim) | Aristotle, GPT (Multiple companies' AI) | Wrong / withdrawn | Proof was wrong |
| C050 | 2026-01-28 | Erdős problem #647 (multiple AIs produced incorrect proofs) | ChatGPT Deep research, DeepSeek DeepThink, Gemini (Multiple companies' AI) | Wrong / withdrawn | Proof was wrong |
| C051 | 2026-01-29 | Erdős problem #1051 (Aletheia produced a complete solution in Lean) | Aletheia (Google DeepMind) | Solved completely | Confirmed |
| C052 | 2026-02 | Gemini's evaluation of about 700 Erdős problems (solved 13, including 5 new autonomous solutions and 8 identifications of existing literature) | Gemini Deep Think (Aletheia agent) (Google DeepMind) | Solved completely | Not yet verified |
| C053 | 2026-02-03 | AxiomProver's proof of the Fel conjecture (explicit formula for the syzygy invariant of numerical semigroups) | AxiomProver (Axiom Math) | Solved completely | Confirmed |
| C054 | 2026-02-03 | AxiomProver's determination of spin parity for k-differentials of genus 0 and 1 (proving a number-theoretic hypothesis of the Chen-Gendron conjecture) | AxiomProver (Axiom Math) | Solved completely | Confirmed |
| C055 | 2026-02-10 | Determination of the closed form of the general eigenweight (a structural constant appearing in arithmetic Hirzebruch proportionality) | Aletheia (research agent based on Gemini Deep Think) (Google DeepMind) | Solved completely | Not yet verified |
| C056 | 2026-02-10 | Lower bounds for multivariate independence polynomials and their generalizations (interacting particle systems / counting independent sets) | Aletheia / Gemini 2.5 Deep Think (multiple models) (Google DeepMind) | Partial progress | Not yet verified |
| C057 | 2026-02-10 | Strongly polynomial-time bound for L∞ policy iteration on robust MDPs (a number-theoretic lemma: bounded sums fall within a polynomial number of dyadic intervals) | Aletheia (based on Gemini Deep Think) (Google DeepMind) | Improved a bound | Not yet verified |
| C058 | 2026-02-14 | Erdős problem #1082 (DeepMind's prover agent found a partial counterexample; later found to match Fishburn (2002)) | DeepMind prover agent (Google DeepMind) | Counterexample | Already known |
| C059 | 2026-02-21 | Erdős problem #846 (DeepMind and OpenAI independently found complete solutions; later found to match Reiher-Rödl-Sales (2024)) | DeepMind prover agent; OpenAI internal model (Multiple companies' AI) | Solved completely | Already known |
| C060 | 2026-02 (announced 2026-03) | Lean formalization of 8-dimensional sphere packing (optimality of the E8 lattice) by Gauss | Gauss (Math Inc) | Formalization | Confirmed |
| C061 | 2026-03-02 | Erdős problem #457 (full solution in Lean, by Aristotle/GPT-5.2 Pro) | Aristotle, GPT-5.2 Pro (Multiple companies' AI) | Solved completely | Confirmed |
| C062 | 2026-03-10 | Lower bounds for 9 classical Ramsey numbers | AlphaEvolve (Google DeepMind) | Improved a bound | Not yet verified |
| C063 | 2026-03-30 | Erdős problem #125 (variant solved by DeepMind's Prover agent; full solution in Lean) | DeepMind prover agent (Google DeepMind) | Solved completely | Confirmed |
| C064 | 2026-03-31 | Erdős problem #263/#741 and others (partial results, by DeepMind/OpenAI/multiple companies) | DeepMind prover agent, OpenAI internal model, Aristotle, GPT-5.5 Pro, and others (Multiple companies' AI) | Partial progress | Confirmed |
| C065 | 2026-03 (approx.) | Further improvement, by a dual-agent system, of AlphaEvolve-derived lower bounds for optimization constants (the first autocorrelation inequality C6.2, the Erdős minimum overlap constant C6.5) | Dual agent (LLM-based) (Universities/individuals (other AI)) | Improved a bound | Not yet verified |
| C066 | 2026-04-04 | Resolution of Anderson's conjecture (an unsolved problem in commutative ring theory concerning quasi-complete Noetherian local rings) | Rethlas (informal reasoning agent) + Archon (formal verification agent) (Chinese institution (Peking University)) | Solved completely | Confirmed |
| C067 | 2026-04-07 | Erdős problem #12 (partial result in Lean by the DeepMind prover agent) | DeepMind prover agent (Google DeepMind) | Partial progress | Confirmed |
| C068 | 2026-04-09 | Erdős problems #960/#987/#990/#1014/#1091/#1141 (full solutions by an OpenAI internal model) | OpenAI internal model (OpenAI) | Solved completely | Not yet verified |
| C069 | 2026-04-13 | Erdős problem #1196 (full solution to a problem that experts had spent great effort on) | GPT-5.4 Pro, GPT-5.4 Thinking (OpenAI) | Solved completely | Confirmed |
| C070 | 2026-04-25 | Erdős problem #38 (full solution by GPT-5.5 Pro) | GPT-5.5 Pro (OpenAI) | Solved completely | Confirmed |
| C071 | 2026-05-08 | Erdős problem #690 (full solution by the Multiscalar Fields System, with human collaboration) | Multiscalar Fields System (Universities/individuals (other AI)) | Solved completely | Not yet verified |
| C072 | 2026-05-20 | Erdős problem #90 (the unit distance problem, posed in 1946; counterexample found by an OpenAI internal model) | OpenAI internal model (OpenAI) | Counterexample | Confirmed |
| C073 | 2026-05-21 | Erdős problem #90 (improved explicit estimate, by many humans plus GPT-5.5 Pro) | GPT-5.5 Pro (OpenAI) | Improved a bound | Not yet verified |
| C074 | 2026-05-21 | Nine Erdős problems (by AlphaProof Nexus, group row: #12, #26, #125, #138, #152, #741, #846, etc.) | AlphaProof Nexus (Google DeepMind) (Google DeepMind) | Solved completely | Confirmed |
| C075 | 2026-05-21 | Log-concavity of Hilbert functions in algebraic geometry (case of pure O-sequences, codimension 3, type 2) | AlphaProof Nexus (full-featured agent: Gemini 3.1 Pro + AlphaProof + evolutionary search, Lean formal verification) (Google DeepMind) | Solved completely | Confirmed |
| C076 | 2026-05-21 | Exact O(1/t) convergence rate for Anchored GDA (min-max convex-concave) in convex optimization | AlphaProof Nexus (schedule co-searched via EVOLVE-VALUE, Lean formal verification) (Google DeepMind) | Improved a bound | Confirmed |
| C077 | 2026-05-21 | Proofs of 44 out of 492 unresolved OEIS conjectures (e.g., the asymptotic expansion of A051293, integer-coefficient eighth roots of A228143) | AlphaProof Nexus (Lean formal verification, with test lemmas as a guard against misformalization) (Google DeepMind) | Solved completely | Confirmed |
| C078 | 2026-05-21 | A bipartite-graph variant of the graph reconstruction conjecture (under the assumption of type-distinguishability) | AlphaProof Nexus + AlphaEvolve (assisted in formulating the conjecture) (Google DeepMind) | Partial progress | Confirmed |
| C079 | 2026-05-21 | A graph theory conjecture posed in 1996 by Graffiti (an automated conjecture-generation system) (lower bound on the maximum number of leaves in a spanning tree) | AlphaProof Nexus (Lean formal verification) (Google DeepMind) | Solved completely | Confirmed |
| C080 | 2026-05-21 | A variant of problem #57 on Ben Green's list of open problems (coincidence of two quadratically structured function spaces) | AlphaProof Nexus (floating-point heuristics + Lean formal verification) (Google DeepMind) | Partial progress | Confirmed |
| C081 | 2026-05-21 | Several conjectures on the existence of high-dimensional photonic GHZ states (monochromatic quantum graphs, N=d∈{4,6,10}) | AlphaProof Nexus (Lean formal verification) (Google DeepMind) | Partial progress | Confirmed |
| C082 | 2026-05-24 | Several open problems in commutative ring theory and related fields (drawn from the Cahen-Fontana-Frisch-Glaz list, the Erman-Sam survey of Boij-Söderberg theory, etc.) | Rethlas (automated natural-language reasoning system) (Chinese institution (Peking University)) | Solved completely | Not yet verified |
| C083 | 2026-05-26 | Erdős problem #90 (independently fully solved by Claude Mythos) | Claude Mythos (Anthropic) | Solved completely | Not yet verified |
| C084 | 2026-06-09 | Erdős problem #619 (full solution in Lean by Claude Fable 5/Codex/GPT-5.5) | Claude Fable 5, Codex, GPT-5.5 (Multiple companies' AI) | Solved completely | Confirmed |
| C085 | 2026-07-10 | The cycle double cover conjecture | GPT-5.6 Sol Ultra (64 subagents) (OpenAI) | Solved completely | Confirmed |
| C086 | 2026-07-20 | The Jacobian conjecture (Keller's conjecture on the existence of inverses of polynomial maps) | Claude Fable 5 (Anthropic) (Anthropic) | Counterexample | Confirmed |
| C087 | 2026-07-22 | The Dinitz-Garg-Goemans conjecture | GPT-5.6 Pro (OpenAI) | Counterexample | Confirmed |
| C088 | 2026-07-27 | Crouzeix's conjecture | GPT-5.6 Sol (OpenAI) | Solved completely | Not yet verified |
| C089 | 2026-08 | Hadamard matrices (unresolved orders, including 668) | Claude (Anthropic) | Partial progress | Not yet verified |
| C090 | 2026-08 | Elliptic curves over the rationals with rank >= 30 / >= 31 | Claude (Anthropic) | Improved a bound | Not yet verified |
| C091 | 2026-08 | Borsuk's conjecture (minimum dimension of a counterexample) | GPT-5.6 Sol (arXiv version) (OpenAI) | Counterexample | Not yet verified |
| C092 | 2026-08 | Hopf problem: whether the 6-dimensional sphere S^6 admits an (integrable) complex structure (claimed to admit one) | Claude (unreleased version) (Anthropic) | Solved completely | Confirmed |
| C093 | 2026-08 | Improvement of Erdős problem #4 (large prime gaps, Rankin-type lower bound) | GPT-5.6 Pro (OpenAI) | Partial progress | Confirmed |
| C094 | 2026-08-01 | First improvement since 1978 of the general upper bound on high-dimensional sphere packing density / Cohn–Elkies asymptotic constant α* = 1/2·log2(2π/e) ≈ 0.6044 | Astra (internal version, next flagship model) (OpenAI) | Improved a bound | Confirmed |
| C095 | 2026-08-01 | First explicit construction of a non-sofic group (resolving the sofic group problem posed by Gromov in 1999) | Astra (OpenAI) | Solved completely | Confirmed |
| C096 | 2026-08-01 | Disproof of Connes' rigidity conjecture (construction of an infinite family of non-isomorphic property (T) groups with isomorphic group von Neumann algebras) | Astra (OpenAI) | Counterexample | Confirmed |
| C097 | 2026-08-01 | New lower bound on the circuit complexity of the matrix permanent | Astra (OpenAI) | Solved completely | Confirmed |
| C098 | 2026-08-01 | Parallel repetition theorem for two-player quantum games | Astra (OpenAI) | Solved completely | Confirmed |
| C099 | 2026-08-01 | Inapproximability hardness of lattice problems (closest vector problem / closest codeword problem) | Astra (OpenAI) | Solved completely | Confirmed |
| C100 | 2026-08-01 | Ehrhart's volume conjecture: maximum volume of a convex body whose centroid is the unique interior lattice point (sharp value in each dimension) | Astra (OpenAI) | Partial progress | Confirmed |
| C101 | 2026-08-01 | Erdős problem #183 on multicolor Ramsey numbers (recursive coloring construction) | Astra (OpenAI) | Solved completely | Confirmed |
| C102 | 2026-08-01 | Counterexamples to the compactness conjecture and the degeneracy conjecture in extremal graph theory (resolving Erdős problems #146 and #180) | Astra (OpenAI) | Solved completely | Confirmed |
| C103 | 2026-08-05 | Sendov's conjecture (all degrees) | GPT-5.6 Pro (proof), Claude Opus 5 (Lean formalization) (OpenAI) | Solved completely | Confirmed |
| C104 | 2026-08-06 | Allegations of citation errors and research misconduct in OpenAI Astra's "ten advances" paper (the sphere packing and group soficity chapters) | OpenAI Astra (LLM) (OpenAI) | Citation concern | Citation concerns |
| C105 | 2026-08-10 | More than 2/3 of the nontrivial zeros of the Riemann zeta function are simple and lie on the critical line (unconditional; 0.6725 using the Montgomery–Taylor window) | Claude (unreleased research version, with about 60 subordinate agents) (Anthropic) | Improved a bound | Confirmed |
| C107 | 2026-08-17 | Improved upper bound on the matrix multiplication exponent ω | AlphaEvolve (Google DeepMind) (Google DeepMind) | Improved a bound | Not yet verified |
| C108 | 2026-08-30 | Collection of over 15 counterexamples (in combinatorics, number theory, convexity, analysis, etc.) by GPT Pro | GPT Pro (OpenAI) (OpenAI) | Counterexample | Not yet verified |
| C109 | 2026-09-01 | GPT-6 Astra solved 2 problems (group row) in FrontierMath Erdős (68 unsolved Erdős problems selected by Bloom) | GPT-6 Astra (the only one to solve 2 problems), among others (OpenAI) | Solved completely | Confirmed |
| C110 | 2026-09 | Proof of the conjecture that critical percolation dies out (θ(p_c)=0) | ChatGPT Sol 5.6 Ultra, Claude Fable 5.1 (Multiple companies' AI) | Solved completely | Confirmed |
| C111 | 2026-09 | Disproof of the Köthe conjecture | Epoch AI, GPT-6 Astra (OpenAI) | Counterexample | Confirmed |
| C112 | 2026-09 | Disproof of the Ibragimov–Iosifescu conjecture for φ-mixing sequences | Epoch AI, GPT-6 Astra (OpenAI) | Counterexample | Confirmed |
| C113 | 2026-09 | Counterexample to the permanent dominance conjecture | Epoch AI, GPT-6 Astra (OpenAI) | Counterexample | Not yet verified |
| C114 | 2026-09 | Proof of the Dittert conjecture | Epoch AI, GPT-6 Astra (OpenAI) | Found existing paper | Already known |
| C115 | 2026-09 | Counterexample to the strong N conjecture in the n=4 case | Epoch AI, GPT-6 Astra (OpenAI) | Counterexample | Confirmed |
| C116 | 2026-09-04 | End-to-end Lean formalization of Fermat's Last Theorem (Wiles' proof) | Claude (internal research model, dozens of agents, built on Prove2Me) (Anthropic) | Formalization | Confirmed |
| C117 | 2026-09-08 | Navier–Stokes existence and smoothness (Millennium Prize Problem): construction of a finite-time blow-up for 3D incompressible flow with smooth external forcing | OpenAI internal reasoning model (reported to be in the Astra line) + Lean formalization (OpenAI) | Solved completely | Not yet verified |
| C118 | 2026-09-14 | Kakeya sets, Erdős minimum overlap, sign uncertainty, book Ramsey numbers, 11-dimensional kissing configurations, and more | GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro (combined) (Multiple companies' AI) | Improved a bound | Confirmed |
| C119 | 2026-09-20 | Proof of the existence of the Core (Core+) in approval-based committee elections. Posed in 2017 as a search problem for a counterexample (empty core), but proved that no counterexample exists | GPT-6 Astra (OpenAI) (OpenAI) | Solved completely | Not yet verified |
| C120 | 2026-09-21 | Claim that an OpenAI internal model "solved over 100 long-standing unsolved problems" (announced together with the formation of a mathematics-AI advisory group) | OpenAI internal model (reported to outperform GPT-6 Astra; training started 2026-08-28) (OpenAI) | Solved completely | Not yet verified |
| C121 | 2026-03-16 | Semi-autonomous formalization of Vlasov-Maxwell-Landau equilibria | Gemini DeepThink + Claude Code + Aristotle (Harmonic) (Multiple companies' AI) | Formalization | Confirmed |

</div>


</details>

<details>
<summary><strong>Appendix 4　Glossary (click to open)</strong></summary>

<div style="overflow-x:auto">

| Term | Meaning |
|---|---|
| Open problem / conjecture | A statement believed to be true that no one has yet proved. Showing it is false also counts as a "solution" |
| Counterexample | A specific example showing that a conjecture is false. One is enough to refute the conjecture |
| Upper bound / lower bound | Values showing that a quantity is "at most" or "at least" something. Bringing the two together homes in on the answer |
| Peer review | Review of a paper by experts in the same field. In mathematics it can take one to two years |
| Preprint / arXiv | A paper made public before peer review, and the site where such papers are posted |
| Lean | A language for having a computer check a proof step by step |
| Erdős problems | More than 1,100 problems left by the mathematician Paul Erdős, collected at erdosproblems.com (run by Thomas Bloom) |
| International Mathematical Olympiad (IMO) | An international mathematics competition for high school students. Six problems, 42 points maximum |
| Millennium Prize Problems | Seven problems chosen by the Clay Mathematics Institute in 2000. One million dollars each |
| Riemann hypothesis | The conjecture that all the (nontrivial) zeros of the zeta function, which governs the distribution of primes, lie on a single line. One of the Millennium Prize Problems |

</div>

</details>

<details>
<summary><strong>Appendix 5　Sources (click to open)</strong></summary>

**Main sources used in the text**

- Liam Price and Erdős problem #1196: Scientific American (April 24, 2026) https://www.scientificamerican.com/article/amateur-armed-with-chatgpt-vibe-maths-a-60-year-old-problem/ / paper https://arxiv.org/abs/2605.00301
- Record of AI contributions to Erdős problems (wiki by Tao and collaborators, updates stopped June 30, 2026): https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- The GPT-5 "10 problems" episode (The Decoder, October 18, 2025): https://the-decoder.com/leading-openai-researcher-announced-a-gpt-5-math-breakthrough-that-never-happened/
- Rewriting Fermat's Last Theorem in Lean (Anthropic, September 4, 2026): https://www.anthropic.com/research/formalizing-fermats-last-theorem
- AlphaProof Nexus (Google DeepMind, May 2026): https://arxiv.org/abs/2605.22763 / report on cost https://the-decoder.com/google-deepminds-alphaproof-nexus-solves-decades-old-math-problems-for-a-few-hundred-dollars/
- OpenAI's 10 results (August 1, 2026): https://openai.com/index/ten-advances-in-mathematics/ / manual audit https://arxiv.org/abs/2608.14673
- Counterexample to the Jacobian conjecture: expository paper https://arxiv.org/abs/2608.00222 / TheNextWeb https://thenextweb.com/news/jacobian-conjecture-disproved-ai-fable-5
- Zeros of the zeta function (Anthropic, August 2026): https://arxiv.org/abs/2608.13637 / Scientific American https://www.scientificamerican.com/article/no-ai-didnt-just-solve-the-thorniest-problem-in-math/
- Navier–Stokes equations: Clay Mathematics Institute statement https://www.claymath.org/news/navier-stokes-announcement
- Navier–Stokes equations: Scientific American https://www.scientificamerican.com/article/did-openai-solve-the-wrong-navier-stokes-problem/ / NPR (September 22, 2026) https://www.npr.org/2026/09/22/nx-s1-5968588/openai-navier-stokes-problem-mathematicians-learn-little
- Disproof of the unit distance conjecture: OpenAI (May 20, 2026) https://openai.com/index/model-disproves-discrete-geometry-conjecture/ / verification paper https://arxiv.org/abs/2605.20695
- Evaluation by Epoch AI (overview of FrontierMath: Open Problems): https://epoch.ai/frontiermath/open-problems/about/overview
- Aaronson et al.'s quantum computing theorem: https://arxiv.org/abs/2509.21131
- "Over 100 problems" and the advisory group (OpenAI, September 21, 2026): https://openai.com/index/advisory-group-on-mathematics-and-ai/
- Leiden Declaration (June 2, 2026): https://leidendeclaration.ai/
- Tao's warning (New Scientist, September 2026): https://www.newscientist.com/article/2588329-terence-tao-ai-companies-are-harming-mathematics/
- Content of the statement by 25 Fields Medalists (implicator.ai, September 13, 2026): https://www.implicator.ai/25-fields-medalists-say-ai-labs-race-to-solve-math-problems-is-harming-mathematics/
- Statement by 25 Fields Medalists (Le Monde, September 11, 2026): https://www.lemonde.fr/en/opinion/article/2026/09/11/25-fields-medalists-warn-the-goals-of-the-ai-companies-and-the-goals-of-the-mathematical-community-are-severely-misaligned_6757433_23.html
- Litt, "A beginning for mathematics" (September 13, 2026): https://www.daniellitt.com/blog/2026/9/13/a-beginning-for-mathematics/
- The International Mathematical Olympiad and later achievement: Agarwal & Gaule, "Invisible Geniuses" (AER: Insights) https://www.aeaweb.org/doi/10.1257/aeri.20190457 / working paper version https://www.imf.org/en/Publications/WP/Issues/2018/12/07/Invisible-Geniuses-Could-the-Knowledge-Frontier-Advance-Faster-46383 / NBER conference paper https://conference.nber.org/conf_papers/f210802.pdf
- Harmonic funding (November 25, 2025): https://www.businesswire.com/news/home/20251125727962/en/
- Axiom Math funding (SiliconANGLE, March 12, 2026): https://siliconangle.com/2026/03/12/verifiable-ai-startup-axiom-raises-200m-prove-ai-generated-code-safe-use/ / revenue analysis (Sacra) https://sacra.com/c/axiom-math/
- Ken Ono joins Axiom Math (VnExpress): https://e.vnexpress.net/news/news/education/legendary-us-mathematician-ken-ono-from-influential-mentor-to-working-for-former-student-carina-hong-s-ai-startup-5003840.html
- Pay for research roles at AI companies (levels.fyi, self-reported): https://www.levels.fyi/companies/openai/salaries/software-engineer/title/research-scientist
- Japan Society for the Promotion of Science research fellowship stipends: https://www.jsps.go.jp/j-pd/pd_oubo.html
- International Mathematical Olympiad 2025 (Google DeepMind): https://deepmind.google/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/
- FrontierMath (Epoch AI): https://epoch.ai/frontiermath/tiers-1-4/the-benchmark

**Sources for each case** (numbers match Appendix 3; dates are the announcement dates; all checked on September 27, 2026)

- C001 (2023-10-11): https://arxiv.org/abs/2310.07681 / https://arxiv.org/html/2609.00777v1
- C002 (2023-11-06): https://arxiv.org/abs/2311.03583 / https://www.ijcai.org/proceedings/2024/772
- C003 (2023-11-13): https://github.com/teorth/pfr / https://arxiv.org/abs/2311.05762
- C004 (2023-12-14): https://www.nature.com/articles/s41586-023-06924-6 / https://www.scientificamerican.com/article/ai-beats-humans-on-unsolved-math-problem/
- C005 (2023-12-14): https://www.nature.com/articles/s41586-023-06924-6 / https://deepmind.google/blog/funsearch-making-new-discoveries-in-mathematical-sciences-using-large-language-models/
- C006 (2024-03-29): https://arxiv.org/abs/2403.20055 / https://arxiv.org/html/2403.20055v1
- C007 (2024-09-27): https://arxiv.org/abs/2409.18626 / https://arxiv.org/html/2207.03343v3
- C008 (2024-10-10): https://arxiv.org/abs/2410.08304 / https://www.livescience.com/physics-mathematics/mathematics/ai-is-solving-impossible-math-problems-can-it-best-the-worlds-top-mathematicians
- C009 (2024-11-01): https://arxiv.org/abs/2411.00566 / https://arxiv.org/html/2411.00566
- C010 (2024-11-01): https://arxiv.org/abs/2411.00566 / https://arxiv.org/html/2411.00566
- C011 (2025-05-14): https://arxiv.org/abs/2506.13131 / https://spectrum.ieee.org/deepmind-alphaevolve
- C012 (2025-05-14): https://arxiv.org/abs/2506.13131 / https://www.popsci.com/science/human-outsmarts-ai-kissing-problem-math/
- C013 (2025-05-14): https://arxiv.org/abs/2506.13131 / https://spectrum.ieee.org/deepmind-alphaevolve
- C014 (2025-08-20): https://arxiv.org/abs/2511.16072 / https://arxiv.org/html/2509.03065 / https://arxiv.org/html/2511.16072
- C015 (2025-09-03): https://arxiv.org/abs/2509.03065 / https://arxiv.org/html/2509.03065
- C016 (2025-09-11): https://github.com/math-inc/strongpnt
- C017 (2025-09-17): https://arxiv.org/abs/2509.14185 / https://goo.gle/46loOuZ
- C018 (2025-09-26): https://arxiv.org/abs/2509.21131 / https://thequantuminsider.com/2025/09/29/gpt-5-serves-as-research-assistant-in-proving-one-of-quantum-computing-theorys-trickiest-theorems/
- C019 (2025-09-30): https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C020 (2025-10-11): https://www.erdosproblems.com/339 / https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C021 (2025-10-18): https://x.com/thomasfbloom/status/1979254235075059732
- C022 (2025-10-22): https://arxiv.org/abs/2510.20013 / https://arxiv.org/html/2510.20013v1
- C023 (2025-10-27): https://arxiv.org/abs/2510.23513 / https://openai.com/index/gpt-5-mathematical-discovery/
- C024 (2025-11-03): https://www.erdosproblems.com/36 / https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C025 (2025-11-05): https://arxiv.org/abs/2511.02864 / https://arxiv.org/html/2511.02864v3
- C026 (2025-11-11): https://arxiv.org/abs/2511.07721 / https://arxiv.org/pdf/2511.07721v1
- C027 (2025-11-17): https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems / https://xenaproject.wordpress.com/2025/12/05/formalization-of-erdos-problems/
- C028 (2025-11-17): https://arxiv.org/abs/2511.13391 / https://arxiv.org/html/2511.13391v1
- C029 (2025-11-20): https://arxiv.org/abs/2511.16072 / https://arxiv.org/html/2511.16072
- C030 (2025-11-20): https://arxiv.org/abs/2511.16072 / https://arxiv.org/html/2511.16072
- C031 (2025-11-20): https://arxiv.org/abs/2511.16072 / https://arxiv.org/html/2511.16072v1 / https://arxiv.org/html/2511.16072
- C032 (2025-11-20): https://arxiv.org/abs/2511.16072 / https://arxiv.org/html/2511.16072v1 / https://arxiv.org/html/2511.16072
- C033 (2025-11-20): https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C034 (2025-11-23): https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C035 (2025-11-29): https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C036 (2025-12-01): https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C037 (2025-12-03): https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C038 (2025-12-08): https://www.erdosproblems.com/1026 / https://terrytao.wordpress.com/2025/12/08/the-story-of-erdos-problem-126/
- C039 (2025-12-25): https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C040 (2026-01): https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C041 (2026-01-06): https://arxiv.org/abs/2601.07421
- C042 (2026-01-10): https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C043 (2026-01-10): https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C044 (2026-01-11): https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C045 (2026-01-11): https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C046 (2026-01-18): https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C047 (2026-01-19): https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C048 (2026-01-22): https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C049 (2026-01-24): https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C050 (2026-01-28): https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C051 (2026-01-29): https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C052 (2026-02): https://arxiv.org/abs/2601.22401 / https://arxiv.org/pdf/2602.10177
- C053 (2026-02-03): https://arxiv.org/abs/2602.03716 / https://axiommath.ai/research/proof-of-concept/
- C054 (2026-02-03): https://arxiv.org/abs/2602.03722 / https://www.wired.com/story/a-new-ai-math-ai-startup-just-cracked-4-previously-unsolved-problems/
- C055 (2026-02-10): https://arxiv.org/abs/2602.10177 / https://arxiv.org/html/2602.10177v1
- C056 (2026-02-10): https://arxiv.org/abs/2602.10177 / https://arxiv.org/html/2602.10177v1
- C057 (2026-02-10): https://arxiv.org/abs/2602.10177 / https://arxiv.org/html/2602.10177v1
- C058 (2026-02-14): https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C059 (2026-02-21): https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C060 (2026-02 (announced 2026-03)): https://arxiv.org/abs/2604.23468 / https://gwern.net/doc/math/2026-03-mathinc-completingtheformalproofofhigherdimensionalspherepacking.html
- C061 (2026-03-02): https://www.erdosproblems.com/457 / https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C062 (2026-03-10): https://arxiv.org/abs/2603.09172 / https://arxiv.org/html/2603.09172
- C063 (2026-03-30): https://www.erdosproblems.com/125 / https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C064 (2026-03-31): https://www.erdosproblems.com/741 / https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C065 (2026-03 (approx.)): https://arxiv.org/abs/2606.31182
- C066 (2026-04-04): https://arxiv.org/abs/2604.03789
- C067 (2026-04-07): https://www.erdosproblems.com/12 / https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C068 (2026-04-09): https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C069 (2026-04-13): https://arxiv.org/abs/2605.00301 / https://terrytao.wordpress.com/2026/05/03/primitive-sets-and-von-mangoldt-chains-erdos-problem-1196-and-beyond/
- C070 (2026-04-25): https://www.erdosproblems.com/38 / https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C071 (2026-05-08): https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C072 (2026-05-20): https://arxiv.org/abs/2605.20695
- C073 (2026-05-21): https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems / https://mathoverflow.net/questions/511514/what-is-the-unit-distance-exponent
- C074 (2026-05-21): https://arxiv.org/abs/2605.22763 / https://the-decoder.com/google-deepminds-alphaproof-nexus-solves-decades-old-math-problems-for-a-few-hundred-dollars/
- C075 (2026-05-21): https://arxiv.org/abs/2605.22763 / https://arxiv.org/html/2605.22763v2 / https://arxiv.org/html/2605.22763v1
- C076 (2026-05-21): https://arxiv.org/abs/2605.22763 / https://arxiv.org/html/2605.22763v2 / https://arxiv.org/html/2605.22763v1
- C077 (2026-05-21): https://arxiv.org/abs/2605.22763 / https://arxiv.org/html/2605.22763v2 / https://arxiv.org/html/2605.22763v1
- C078 (2026-05-21): https://arxiv.org/abs/2605.22763 / https://arxiv.org/html/2605.22763v2 / https://arxiv.org/html/2605.22763v1
- C079 (2026-05-21): https://arxiv.org/abs/2605.22763 / https://arxiv.org/html/2605.22763v2 / https://arxiv.org/html/2605.22763v1
- C080 (2026-05-21): https://arxiv.org/abs/2605.22763 / https://arxiv.org/html/2605.22763v2 / https://arxiv.org/html/2605.22763v1
- C081 (2026-05-21): https://arxiv.org/abs/2605.22763 / https://arxiv.org/html/2605.22763v2 / https://arxiv.org/html/2605.22763v1
- C082 (2026-05-24): https://arxiv.org/abs/2605.25259
- C083 (2026-05-26): https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C084 (2026-06-09): https://www.erdosproblems.com/619 / https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems
- C085 (2026-07-10): https://arxiv.org/abs/2607.16356
- C086 (2026-07-20): https://arxiv.org/abs/2608.00222 / https://officechai.com/ai/how-the-math-community-has-reacted-to-fable-helping-disprove-the-jacobian-conjecture/
- C087 (2026-07-22): https://www.isa-afp.org/entries/Dinitz_Garg_Goemans_Counterexample.html / https://isa-afp.org/browser_info/current/AFP/Dinitz_Garg_Goemans_Counterexample/outline.pdf
- C088 (2026-07-27): https://github.com/jinshanmu/CrouzeixConjecture / https://arxiv.org/abs/2608.03841
- C089 (2026-08): https://epoch.ai/frontiermath/open-problems/hadamard / https://mathoverflow.net/questions/85201/status-of-hadamard-matrix-conjecture
- C090 (2026-08): https://epoch.ai/frontiermath/open-problems/elliptic-curve-rank / https://mathworld.wolfram.com/EllipticCurveRank.html
- C091 (2026-08): https://arxiv.org/abs/2608.12561 / https://mathworld.wolfram.com/BorsuksConjecture.html
- C092 (2026-08): https://philip-engel.github.io/S6.pdf / https://www.scientificamerican.com/article/ai-solves-79-year-old-math-mystery-of-six-dimensional-spheres/
- C093 (2026-08): https://www.erdosproblems.com/forum/thread/4/proof-claims
- C094 (2026-08-01): https://arxiv.org/abs/2608.14673
- C095 (2026-08-01): https://arxiv.org/abs/2608.14673
- C096 (2026-08-01): https://arxiv.org/abs/2608.14673
- C097 (2026-08-01): https://arxiv.org/abs/2608.14673
- C098 (2026-08-01): https://arxiv.org/abs/2608.14673
- C099 (2026-08-01): https://arxiv.org/abs/2608.14673
- C100 (2026-08-01): https://arxiv.org/abs/2608.14673
- C101 (2026-08-01): https://arxiv.org/abs/2608.14673
- C102 (2026-08-01): https://arxiv.org/abs/2608.14673
- C103 (2026-08-05): https://github.com/teorth/sendov
- C104 (2026-08-06): https://www.scientificamerican.com/article/openais-latest-math-breakthroughs-commit-research-misconduct-experts-say/ / https://mathoverflow.net/questions/513866/what-are-the-key-new-ideas-in-the-proof-of-nonsoficity-of-groups-in-openai-s-con
- C105 (2026-08-10): https://arxiv.org/abs/2608.13637 / https://www.scientificamerican.com/article/no-ai-didnt-just-solve-the-thorniest-problem-in-math/
- C107 (2026-08-17): https://arxiv.org/abs/2608.16884
- C108 (2026-08-30): https://arxiv.org/abs/2608.29595
- C109 (2026-09-01): https://epoch.ai/latest/announcing-frontiermath-erdos
- C110 (2026-09): https://nitromannitol.github.io/kn1-verification-b80e9/ / https://github.com/anthropics/formal-math/blob/795efb86f191735c5481675763537cfb4ff37e55/percolation/README.md
- C111 (2026-09): https://arxiv.org/abs/2609.07996 / https://github.com/tadamcz/koethe
- C112 (2026-09): https://github.com/tadamcz/phi-mixing-clt
- C113 (2026-09): https://arxiv.org/abs/2609.11500 / https://arxiv.org/abs/2609.11500v1
- C114 (2026-09): https://github.com/tadamcz/dittert
- C115 (2026-09): https://github.com/tadamcz/n-conjecture-strong
- C116 (2026-09-04): https://www.anthropic.com/research/formalizing-fermats-last-theorem / https://thenextweb.com/news/anthropic-claude-fermat-last-theorem-lean-buzzard
- C117 (2026-09-08): https://www.claymath.org/news/navier-stokes-announcement
- C118 (2026-09-14): https://arxiv.org/abs/2608.23691 / https://www.together.ai/blog/einsteinarena
- C119 (2026-09-20): https://arxiv.org/abs/2609.11912 / https://eu.36kr.com/en/p/3991214012775170
- C120 (2026-09-21): https://openai.com/index/advisory-group-on-mathematics-and-ai/ / https://techcrunch.com/2026/09/21/openai-forms-math-advisory-group-as-its-ai-resolves-more-than-100-open-problems/
- C121 (2026-03-16): https://arxiv.org/abs/2603.15929 / https://arxiv.org/html/2603.15929v1


</details>

