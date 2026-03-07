# W7 Reflection — Grading Guide for TA

## The Prompt (as posted on Gradescope)

**W7 Reflection Activity — Mechanistic Interpretability**
*Due: Sunday March 8, 2:00pm on Gradescope*

Read Anthropic's blog post **"Tracing the Thoughts of a Large Language Model"** (https://www.anthropic.com/research/tracing-thoughts-language-model), which describes how researchers used *circuit tracing* to peer inside Claude and understand how it processes information — from planning rhymes in poetry, to thinking across languages, to how hallucinations arise.

**Question (10 points, 200–300 words):**

The Anthropic blog post describes circuit tracing as a way to understand the internal computations of a large language model. Many of this week's lightning presentations explored related (but different) approaches to the same goal — probing for structure, identifying circuits, or testing for emergent representations.

Pick one finding from the Anthropic blog post and connect it to one of this week's lightning talk papers. How do the two approaches complement or contrast with each other? What can one reveal that the other cannot?

---

## Key findings from the Anthropic blog post (for TA reference)

Students may reference any of the following. They do not need to use this terminology — credit correct ideas in any wording.

1. **Poetry / rhyme planning** — Claude plans rhyming words in advance before writing a line. Researchers confirmed this causally: removing the "rabbit" concept caused the model to switch to "habit"; injecting "green" broke the rhyme. Shows the model does multi-step planning, not just next-token prediction.

2. **Multilingual shared conceptual space** — When asked "the opposite of small" in English, French, and Chinese, the same core features (smallness, oppositeness) activate before being translated into each language. Claude thinks in a language-independent conceptual space.

3. **Mental math / parallel strategies** — Claude uses parallel computational paths for addition: one path approximates the answer roughly, another determines the final digit precisely. Importantly, Claude cannot accurately describe its own strategy — it claims to use the standard algorithm, revealing a gap between internal computation and self-explanation.

4. **Hallucination mechanism** — Refusal is Claude's *default* behavior (an always-active circuit). A competing "known entity" feature inhibits refusal for familiar topics. Hallucinations occur when the known-entity feature fires (recognizing a name) without associated knowledge, causing confabulation. Researchers could artificially trigger hallucinations by manipulating these features.

5. **Multi-step reasoning (Dallas → Texas → Austin)** — Claude combines independent facts through intermediate representations. For "capital of the state where Dallas is located," it first activates "Dallas → Texas" features, then "Texas → Austin" features. Swapping Texas for California changed the output to Sacramento, confirming genuine intermediate reasoning.

6. **Jailbreak vulnerability (BOMB acrostic)** — Safety features detect harmful content, but grammatical coherence features pressure Claude to complete sentences once started. The coherence pressure overrides safety mechanisms, creating a vulnerability window.

7. **Motivated reasoning / "bullshitting"** — When given incorrect hints on math problems, Claude works backward to justify the hinted answer rather than solving independently. This motivated reasoning is detectable through circuit tracing but not from outputs alone.

---

## Lightning talk papers (for TA reference)

Each entry includes the paper's actual authors, a short summary, and a link. Note: the student spreadsheet may list presenting students' names rather than paper authors.

1. **Hewitt & Manning (2019)** — *A Structural Probe for Finding Syntax in Word Representations*
   [Paper](https://aclanthology.org/N19-1419/)
   Proposes a *structural probe*: a learned linear transformation under which distances in embedding space correspond to distances in parse trees. Shows that syntax trees are implicitly encoded in the geometry of ELMo and BERT representations but not in baselines.

2. **Tenney, Das & Pavlick (2019)** — *BERT Rediscovers the Classical NLP Pipeline*
   [Paper](https://aclanthology.org/P19-1452/)
   Uses *edge probing* to show BERT's layers recapitulate the classical NLP pipeline in order: POS tagging → parsing → NER → semantic roles → coreference, from early to late layers. Also finds the model can dynamically revise lower-level decisions based on higher-level context.

3. **Lepori, Mozer & Ghandeharioun (2025)** — *Racing Thoughts: Explaining Contextualization Errors in LLMs*
   [Paper](https://arxiv.org/abs/2410.02102)
   Proposes the "LLM Race Conditions Hypothesis": contextualization errors occur when the model must resolve a token's meaning (e.g., "bank" as riverbank vs. financial institution) before it has processed the disambiguating context. Uses mechanistic interpretability methods to provide causal evidence for this hypothesis.

4. **Geiger, Lu, Icard & Potts (2021)** — *Causal Abstractions of Neural Networks*
   [Paper](https://arxiv.org/abs/2106.02997)
   Introduces *causal abstraction*: a formal method for testing whether a high-level causal model (an interpretable algorithm) maps onto a neural network's computation. Uses *interchange interventions* — swapping internal representations between inputs — to verify that neural representations have the causal properties of their aligned variables. Applied to models trained on natural logic inference.

5. **Wang, Variengien, Conmy, Shlegeris & Steinhardt (2022)** — *Interpretability in the Wild: a Circuit for Indirect Object Identification in GPT-2 Small*
   [Paper](https://arxiv.org/abs/2211.00593)
   Identifies a complete *circuit* (26 attention heads in 7 classes + MLPs) responsible for indirect object identification in GPT-2 (e.g., predicting "Mary" in "After John and Mary went to the shops, John gave a bottle of milk to ___"). Evaluated using faithfulness, completeness, and minimality criteria.

6. **Ravfogel, Elazar, Gonen, Twiton & Goldberg (2020)** — *Null It Out: Guarding Protected Attributes by Iterative Nullspace Projection*
   [Paper](https://aclanthology.org/2020.acl-main.647/)
   Introduces *Iterative Nullspace Projection (INLP)*: repeatedly trains linear classifiers to predict a property (e.g., gender) from representations, then projects the representations onto the classifier's nullspace to remove that information. Shows this can mitigate bias while preserving other representational structure.

7. **Li, Hopkins, Bau, Viégas, Pfister & Wattenberg (2023)** — *Emergent World Representations: Exploring a Sequence Model Trained on a Synthetic Task*
   [Paper](https://arxiv.org/abs/2210.13382)
   Trains a GPT variant to predict legal Othello moves and shows it develops an *emergent internal representation of the board state* (a world model), confirmed by nonlinear probes and causal interventions that change the model's behavior in predictable ways. Linear probes perform poorly, suggesting the representation is nonlinear.

8. **Li, Nye & Andreas (2021)** — *Implicit Representations of Meaning in Neural Language Models*
   [Paper](https://aclanthology.org/2021.acl-long.143/)
   Shows that BART and T5 develop contextual representations that function as dynamic models of entities and situations — tracking properties (e.g., location, state) as they evolve through a discourse. These representations support linear readout of entity properties and can be manipulated to predictably change generated text.

9. **Lepori, Tartaglini, Vong, Serre, Lake & Pavlick (2024)** — *Beyond the Doors of Perception: Vision Transformers Represent Relations Between Objects*
   [Paper](https://arxiv.org/abs/2406.15955)
   Uses mechanistic interpretability methods to study how vision transformers compute abstract visual relations (e.g., same/different judgments). Shows that ViTs develop internal representations of relations between objects, not just individual object features. Published at NeurIPS 2024.

10. **Tsvilodub et al. (2026)** — *On Emergent Social World Models: Evidence for Functional Integration of Theory of Mind and Pragmatic Reasoning in Language Models*
    [Paper](https://arxiv.org/abs/2602.10298)
    Tests whether LLMs develop integrated *social world models* — shared computational mechanisms for Theory of Mind and pragmatic reasoning. Uses behavioral evaluations and causal-mechanistic experiments inspired by cognitive neuroscience. Finds suggestive evidence for "functional integration": shared representations are repurposed across social reasoning tasks.

---

## Rubric (10 points)

**Grading philosophy:** Additive rubric — each sub-component earns points from zero. This is a low-stakes reflection activity, so grade generously. A student who read the blog post, attended the lightning talks, and made a reasonable connection should land around **9–9.5/10**.

---

### 1a. Specific finding from the Anthropic blog post (3 pts)

- **+ 3 pts** — Identifies a specific finding (e.g., rhyme planning, multilingual features, hallucination mechanism, multi-step reasoning, jailbreak coherence pressure) and describes it accurately in their own words with relevant detail.
- ✔ **+ 2.75 pts** — Identifies a finding correctly but the description is thin (e.g., "Claude plans ahead when writing poetry" without explaining how researchers confirmed this). Still shows engagement.
- **+ 2 pts** — Mentions something from the blog post but vaguely or only partially correct (e.g., "they traced how the model thinks" with a vague nod to a specific finding).
- **+ 0.75 pts** — Very vague reference — unclear which finding they mean or substantially inaccurate.
- **+ 0 pts** — No reference to the blog post, or completely misrepresents it.

### 1b. Specific lightning talk paper (2 pts)

- ✔ **+ 2 pts** — Names a specific lightning talk paper and captures the key idea. Thin descriptions count — students saw 5-minute presentations, not full papers. (e.g., "Wang et al. found circuits in GPT-2" is sufficient.)
- **+ 1.25 pts** — Names a paper but description is very thin or slightly off.
- **+ 0.5 pts** — Mentions a paper but inaccurately or very vaguely.
- **+ 0 pts** — No reference to any lightning talk paper.

### 1c. Meaningful comparison (3 pts)

- **+ 3 pts** — Draws a clear bidirectional comparison that explains *how* the two approaches complement or contrast. Addresses what one can reveal that the other cannot.
- ✔ **+ 2.5 pts** — Makes a reasonable comparison that shows the student thought about the relationship. May be somewhat general but goes beyond restating what each approach does separately.
- **+ 1.75 pts** — Attempts a comparison but stays surface-level or doesn't go beyond restating what each approach does separately.
- **+ 0.75 pts** — Gestures at a connection but no real methodological comparison.
- **+ 0 pts** — No comparison attempted.

### 1d. Clarity & engagement (2 pts)

- ✔ **+ 2 pts** — Writing is clear and readable. Response shows effort and is roughly within word count. This is the default for any response that is readable and on-topic.
- **+ 1.25 pts** — Writing is understandable but rushed or disorganized.
- **+ 0.5 pts** — Hard to follow or clearly written with minimal engagement.
- **+ 0 pts** — Incoherent or clearly didn't engage with the material.

*Total: \_\_ / 10*

---

### Scoring summary

| Score | What it looks like |
|-------|-------------------|
| 10 | Specific finding, specific paper, insightful comparison, clear writing — goes above and beyond |
| 9–9.5 | Both sources identified, reasonable comparison, clear writing. **This is the target for a good student.** |
| 7.5–8.5 | Both sources mentioned but comparison is surface-level or one source is vague |
| 5–7 | Only one source clearly referenced, or comparison is generic |
| 1–4 | Minimal effort, no meaningful engagement |
| 0 | No submission |

---

### General notes for TAs

- **Many valid pairings exist.** Almost any blog post finding can connect to multiple lightning talk papers. Don't penalize unusual pairings if the comparison is well-reasoned.
- **Don't require specific terminology.** "They tested what happens when you swap internal features" = interchange intervention. "They trained a classifier on the model's internal states" = probing. Give credit for correct ideas.
- **Reflection matters more than coverage.** A thoughtful comparison between one finding and one paper is worth more than a shallow tour of multiple findings.
- **Students weren't required to read the lightning talk papers in full.** They attended 5-minute presentations, so their understanding of the papers may be approximate. That's fine — grade based on whether the key idea is captured, not technical precision.

---

## Sample Responses

### Sample A — Score: 10/10

One of the most striking findings in the Anthropic blog post is the hallucination mechanism. The researchers discovered that Claude's default behavior is actually to *refuse* to answer — there's an always-active circuit that suppresses responses. A competing "known entity" feature overrides this default when Claude recognizes a familiar topic. Hallucinations happen when the known-entity feature fires for a name Claude recognizes but doesn't actually have knowledge about, causing it to confabulate plausible-sounding information. The researchers confirmed this causally by manipulating these features to trigger hallucinations on demand.

This connects interestingly to Li et al.'s (2023) work on emergent world representations. Li et al. showed that a sequence model trained only to predict Othello moves develops an internal board-state representation — a genuine world model — which they confirmed by training probes on the hidden states and by intervening on those representations to change the model's behavior. Both studies ask the same fundamental question: is the model just doing statistical pattern matching, or has it built internal structure that goes beyond the training signal?

But the approaches reveal different things. Li et al.'s probing shows *what* information is present in the representation (the board state) and that interventions on it change behavior in predictable ways. Anthropic's circuit tracing goes further by revealing the *computational graph* — not just that a "known entity" feature exists, but how it interacts with the refusal circuit, and how different features compete to determine the output. Probing tells you the model represents something; circuit tracing shows you the mechanism that uses that representation. On the other hand, Li et al.'s approach has the advantage of working with a fully controlled synthetic task where the ground truth (board state) is known, which makes the interpretation cleaner. Anthropic's circuit tracing operates on a vastly more complex system where confirming completeness of an explanation is much harder.

*[1a: 3 — accurately describes the hallucination mechanism with causal confirmation detail. 1b: 2 — accurately describes Li et al.'s probing + intervention approach on Othello. 1c: 3 — clear bidirectional comparison: circuit tracing reveals mechanism/computation graph while probing reveals what information is present; notes the controlled-task advantage of Li et al. 1d: 2 — clear, well-organized, genuine reflection. Total: 10/10.]*

---

### Sample B — Score: 9.5/10

The Anthropic blog post describes how Claude plans ahead when writing poetry — instead of generating each word independently, the model "thinks of" rhyming words before composing the line. Researchers showed this by removing the concept "rabbit" from the internal representations, which caused Claude to switch to a different rhyme ("habit"), and by injecting the concept "green," which broke the rhyme entirely. This demonstrates that the model's generation involves genuine multi-step planning, not just next-token prediction.

This finding pairs well with Wang et al.'s (2022) circuit-level analysis of indirect object identification in GPT-2. Wang et al. identified a specific circuit — a set of attention heads and MLP layers — responsible for determining the indirect object in sentences like "John gave the book to Mary." Both studies share the goal of identifying specific computational mechanisms inside a transformer, and both go beyond correlation to test these mechanisms causally.

One difference is scope: Wang et al. identified a complete circuit for a single well-defined task, while Anthropic's circuit tracing examines a broader behavior (poetry writing) in a much larger model. Wang et al. can claim they found *the* circuit for indirect object identification; Anthropic's analysis offers a window into the process but can't easily guarantee they've captured the whole mechanism. On the other hand, the Anthropic work shows that similar circuit-level analysis can scale to production models, which Wang et al.'s approach hasn't yet demonstrated.

*[1a: 3 — accurately describes the rhyme-planning finding with causal manipulation details. 1b: 2 — names Wang et al. and the correct task; thin description is sufficient for full credit. 1c: 2.5 — good comparison on scope and completeness. 1d: 2 — clear and well-organized. Total: 9.5/10.]*

---

### Sample C — Score: 9.25/10

In the Anthropic blog post, researchers found that Claude uses a shared conceptual space across languages. When asked for the opposite of "small" in different languages, the same internal features activated before being translated into each language. This suggests the model has something like a universal language of thought.

This reminds me of Li, Nye & Andreas's (2021) presentation about implicit representations of meaning. They probed language models to see whether they encode grounded properties like color and size even though these models are trained only on text. Both studies are asking whether language models develop representations that go beyond surface-level patterns — Anthropic shows cross-linguistic concepts, Li, Nye & Andreas show grounded physical properties.

The main difference is that Anthropic used circuit tracing to find this, while Li, Nye & Andreas used probing classifiers. Circuit tracing shows you how the features connect and interact, while probing just tells you whether the information is there.

*[1a: 2.75 — identifies the multilingual finding correctly, thin on detail but shows engagement. 1b: 2 — names Li, Nye & Andreas and captures the gist; sufficient for full credit. 1c: 2.5 — reasonable comparison (circuit tracing shows how features interact vs. probing shows whether info is present); goes beyond restating. 1d: 2 — clear writing, shows effort. Total: 9.25/10.]*

---

### Sample D — Score: 7.75/10

The Anthropic blog post had a lot of interesting findings about how Claude thinks internally. One thing that stood out was the part about hallucinations — apparently Claude has a default refusal mechanism and hallucinations happen when it recognizes a name but doesn't have real knowledge about it.

I think this connects to the interpretability work we saw in the lightning talks, like the Wang et al. paper about circuits in GPT-2. Both are trying to understand how models work on the inside.

The blog post approach seems more advanced since it's working with a bigger, newer model. The lightning talk papers were interesting but were working with older, smaller models. I think as models get bigger, we'll need more tools like what Anthropic is developing.

*[1a: 2.75 — mentions the hallucination mechanism correctly, brief but accurate. 1b: 2 — names Wang et al., thin but shows awareness; sufficient for full credit. 1c: 1.75 — "both are trying to understand how models work on the inside" is surface-level; "more advanced" / "bigger model" isn't a real methodological comparison. 1d: 1.25 — rushed but readable; lacks depth. Total: 7.75/10.]*

---

## Valid pairings (non-exhaustive, for TA reference)

These are natural connections students might draw. Many other pairings are valid.

| Blog post finding | Lightning talk paper | Connection |
|---|---|---|
| Rhyme planning (multi-step) | Wang et al. (2022) — circuits in GPT-2 | Both identify specific circuits for multi-step computation; differ in scale and completeness |
| Rhyme planning (multi-step) | Geiger et al. (2021) — causal abstraction | Both use causal interventions to test whether internal structure matches a hypothesized algorithm |
| Multilingual shared space | Li, Nye & Andreas (2021) — implicit meaning | Both ask whether models develop abstract representations beyond training signal |
| Multilingual shared space | Hewitt & Manning (2019) — structural probes | Both reveal hidden structure in representations; probes test for specific linguistic structure while circuit tracing reveals how features interact |
| Multi-step reasoning (Dallas) | Geiger et al. (2021) — causal abstraction | Both use interchange interventions to confirm intermediate reasoning steps |
| Multi-step reasoning (Dallas) | Tenney et al. (2019) — BERT pipeline | Both reveal staged/sequential processing; Tenney shows layer-by-layer specialization, Anthropic shows feature-level reasoning chains |
| Hallucination mechanism | Li et al. (2023) — emergent world models | Both ask whether models build internal models of the world; differ in method (circuit tracing vs. probing) and setting (natural vs. synthetic) |
| Jailbreak / coherence pressure | Ravfogel et al. (2020) — nullspace projection | Both involve features competing to determine output; INLP removes information, circuit tracing reveals which features override others |
| Motivated reasoning | Lepori, Mozer & Ghandeharioun (2025) — contextualization errors | Both reveal ways the model's internal processing can go wrong; one through input-dependent errors, the other through hint-dependent reasoning |
| Emergent world model (Dallas) | Tsvilodub et al. (2026) — social world models | Both test for structured internal models; one for factual geography, the other for social reasoning about agents |

---

## Verification check (use after grading to catch outliers):

After scoring a response using the detailed rubric, sanity-check the total:

- Specific finding, specific paper, thoughtful comparison → **9.5–10**
- Both sources mentioned, reasonable comparison → **9–9.5**
- Both sources mentioned but comparison is surface-level → **7.5–8.5**
- Only one source clearly engaged → **5–7**
- Minimal effort → below **5**

If the rubric score doesn't match the benchmark, re-check the sub-component scores.
