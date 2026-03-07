# W6 Reflection — Grading Guide for TA

## The Prompt (as posted on Gradescope)

**W6 Reflection Activity — Local vs. Distributed Coding in Modern Deep Networks**
*Due: Sunday March 1, 2:00pm on Gradescope*

## Reading

Read the following paper:

**Thorpe, S.J. (1989).** *Local vs. Distributed Coding.* Intellectica, 8, 3–40.
[Access via Persée](https://www.persee.fr/doc/intel_0769-4113_1989_num_8_2_873#intel_0769-4113_1989_num_8_2_T1_0004_0000)

**How to read it:** This is a classic paper that lays out the conceptual framework for thinking about how information is represented in neural networks (biological or artificial). Thorpe's central claim is that the key distinction between local and distributed coding is whether the activity of individual units is interpretable on its own — not simply whether many units are active. Focus on this distinction and how Thorpe operationalizes it. The paper also discusses grandmother cells, ensemble coding, and the continuum between fully local and fully distributed representations. You don't need to follow every historical example — the goal is to come away with Thorpe's framework for thinking about what makes a code "local" vs. "distributed."

---

## Question (10 points, ~400 words)

In a short response (~400 words), use Thorpe's framework to take a position on the following question: is the code in modern deep networks more local or distributed?

Thorpe's central claim is that the key distinction between local and distributed coding is whether the activity of individual units is interpretable on its own. Use the lightning papers from this week as evidence. You might consider: what does the existence of curve detectors and Spider-Man neurons suggest? What does polysemanticity suggest? What does the fact that we need sparse autoencoders — a learned transformation to recover interpretable units — imply about the native code of the network? Does your answer change depending on the layer, the model, or the task?

You do not need to reach a definitive conclusion, but you should commit to a position and defend it with specific examples from the readings.

---

## Key concepts from Thorpe (1989) (for TA reference)

Students may reference any of the following. They do not need to use this exact terminology — credit correct ideas in any wording.

1. **The interpretability criterion** — Thorpe argues the defining feature of local coding is that individual unit activity is meaningful/interpretable on its own: you can say what a unit "means" by looking at it in isolation. In distributed coding, only the pattern of activity across many units is interpretable — individual units don't have clear standalone meaning.

2. **Local ≠ single unit active** — Thorpe is careful to distinguish local coding from the straw-man version where exactly one unit fires. A code can be local even if many units are active, as long as each active unit has an interpretable role. The key question is interpretability, not sparsity.

3. **Grandmother cells** — The extreme local case: one unit per concept. Thorpe discusses why this is a caricature — real local coding doesn't require one-to-one mapping, just that individual units have clear semantic meaning.

4. **The continuum** — Coding schemes exist on a spectrum from fully local (each unit has a clear label) to fully distributed (meaning is only in the population pattern). Most real systems are somewhere in between.

5. **Coarse coding** — An intermediate scheme where each unit responds to a range of stimuli, but with interpretable tuning (e.g., edge detectors in early CNN layers that respond to a range of orientations — each is interpretable but not tied to a single specific stimulus). Units are not one-to-one with concepts but are still individually meaningful.

6. **Advantages of each scheme** — Local coding: easy to read out, easy to interpret, but requires many units. Distributed coding: efficient, generalizable, fault-tolerant, but hard to interpret.

---

## Lightning talk papers (for TA reference)

### Feature Visualization & Circuits

1. **Olah, Mordvintsev & Schubert (2017)** — *Feature Visualization*
   [Distill](https://distill.pub/2017/feature-visualization/)
   Uses optimization-based visualization to reveal what individual neurons in deep CNNs respond to. Finds interpretable features — textures, patterns, object parts — at various layers. Demonstrates that many neurons in vision networks have clear, human-readable meanings when visualized.
   **Thorpe relevance:** The fact that individual neurons can be visualized as detecting specific features (edges, textures, object parts) suggests local coding — at least for some units in some layers.

2. **Olah, Cammarata, Schubert, Goh, Petrov & Carter (2020)** — *Zoom In: An Introduction to Circuits*
   [Distill](https://distill.pub/2020/circuits/zoom-in/)
   Proposes three claims: (1) features are the fundamental unit of neural networks, (2) features are connected by circuits, (3) analogous features and circuits appear across different networks. The curve detector example shows a specific neuron that detects curves by combining earlier edge-detecting features.
   **Thorpe relevance:** The curve detector is a paradigmatic example of a locally coded, interpretable unit — you can say exactly what it responds to. The "universality" claim (analogous features across different networks) also suggests these locally coded features are not random — they emerge reliably across architectures.

3. **Goh, Cammarata, Voss, Carter, Petrov, Schubert, Radford & Olah (2021)** — *Multimodal Neurons in Artificial Neural Networks*
   [Distill](https://distill.pub/2021/multimodal-neurons/)
   Discovers "multimodal neurons" in CLIP that respond to the same high-level concept across images and text — e.g., a single neuron that fires for photos of Spider-Man, drawings of Spider-Man, and the text "spider." These are strikingly interpretable single units.
   **Thorpe relevance:** Spider-Man neurons are among the strongest evidence for local coding in modern networks — a single unit with clear, interpretable meaning that generalizes across modalities. However, these exist in CLIP (a multimodal model), and it's unclear how common such units are vs. how cherry-picked the examples are.

### Attribution Methods

4. **Selvaraju, Cogswell, Das, Vedantam, Parikh & Batra (2017)** — *Grad-CAM: Visual Explanations from Deep Networks via Gradient-based Localization*
   [ICCV 2017](https://arxiv.org/abs/1610.02391)
   Produces class-discriminative localization maps by weighting feature maps by their gradient with respect to a target class. Shows which spatial regions a network attends to for a given decision.
   **Thorpe relevance:** Grad-CAM operates at the level of feature maps (channels), treating each as a meaningful unit whose importance can be assessed — implicitly assuming a degree of local interpretability at the feature-map level.

### Concept-Based XAI

5. **Kim, Wattenberg, Gilmer, Cai, Wexler, Viegas & Sayres (2018)** — *TCAV: Interpretability Beyond Classification: Quantitative Testing with Concept Activation Vectors*
   [ICML 2018](https://arxiv.org/abs/1711.11279)
   Introduces Testing with Concept Activation Vectors: defines human-specified concepts as directions in activation space (not individual neurons) and tests whether the network's predictions are sensitive to those concepts. Concepts like "striped texture" correspond to linear directions, not single neurons.
   **Thorpe relevance:** TCAV explicitly rejects single-neuron interpretability — concepts are directions in the space spanned by many neurons, which is distributed coding. The fact that this works well suggests much of the network's knowledge is encoded in distributed directions, not individual units.

6. **Fel, Picard, Bethune, Boissin, Vigouroux, Colin, Cadène & Serre (2023)** — *CRAFT: Concept Recursive Activation FacTorization for Explainability*
   [CVPR 2023](https://arxiv.org/abs/2211.10154)
   Discovers concepts automatically (rather than requiring human-defined concept sets like TCAV) by factorizing activations using NMF. Decomposes activations into additive, interpretable concept components — e.g., a face decomposed into eyes, nose, mouth.
   **Thorpe relevance:** CRAFT recovers interpretable concepts through a learned decomposition, which implies the network's native basis is *not* aligned with interpretable concepts — you need a transformation to find them. This points toward distributed coding as the default.

7. **Koh, Nguyen, Tang, Mussmann, Pierson, Kim & Liang (2020)** — *Concept Bottleneck Models*
   [ICML 2020](https://arxiv.org/abs/2007.04612)
   Architecturally forces the network to predict human-defined concepts as an intermediate bottleneck layer before making final predictions. This makes the intermediate representation fully interpretable by design.
   **Thorpe relevance:** CBMs impose local coding by architectural constraint — each bottleneck unit corresponds to a named concept. The fact that this is an *intervention* (not the default) implies standard networks don't naturally produce locally coded intermediate representations.

### Sparse Representations & SAEs

8. **Cunningham, Ewart, Riggs, Huben & Sharkey (2024)** — *Sparse Autoencoders Find Highly Interpretable Features in Language Models*
   [OpenReview](https://openreview.net/forum?id=F76bwRSLeK)
   Trains sparse autoencoders (SAEs) on LLM activations to decompose them into a larger set of sparse, interpretable features. Finds that SAE features are far more interpretable than individual neurons — suggesting neurons are polysemantic (respond to multiple unrelated concepts) while the "true" features are recoverable through a learned sparse basis.
   **Thorpe relevance:** This is central evidence. Individual neurons are polysemantic (distributed coding), but SAEs recover monosemantic features (local coding in a different basis). This implies the network *uses* distributed coding in its native basis, but the underlying computational structure may be locally decomposable — you just need the right coordinate system.

9. **Templeton, Conerly, Marcus, Lindsey, Bricken, Chen, ... & Henighan (2024)** — *Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet*
   [Anthropic](https://transformer-circuits.pub/2024/scaling-monosemanticity/)
   Scales SAEs to Claude 3 Sonnet and finds interpretable features at remarkable specificity — the Golden Gate Bridge feature, safety-relevant features, multilingual concept features. Demonstrates that SAEs work at production scale and that the features discovered have causal influence on model behavior.
   **Thorpe relevance:** Similar to Cunningham et al. — the need to train SAEs to extract interpretable features implies the network's native code is distributed. But the existence of causally effective, monosemantic features (e.g., Golden Gate Bridge) in the SAE basis suggests a recoverable local structure underlying the distributed surface.

### Foundation Model Interpretability

10. **Fel, Wang, Lepori, Kowal, Lee, Balestriero, Joseph, Lubana, Konkle, Ba, ... (2025)** — *Into the Rabbit Hull: From Task-Relevant Concepts in DINO to Minkowski Geometry*
    [arXiv](https://arxiv.org/abs/2510.08638)
    Identifies task-relevant concepts in DINO's representation using Minkowski geometry, mapping concepts to directions in a high-dimensional space. Think of this as Activation Atlases for the modern ViT era — concepts instead of a static grid, interactive demo at kempnerinstitute.github.io/dinovision.
    **Thorpe relevance:** Concepts are directions in representation space (not individual neurons), consistent with distributed coding. The geometric approach suggests the meaningful structure is in the *space* the neurons span, not in the neurons themselves.

---

## Rubric (10 points)

**Grading philosophy:** Additive rubric — each sub-component earns points from zero. This is a low-stakes reflection activity, so grade generously. A student who read Thorpe, attended the lightning talks, and made a reasonable argument should land around **9/10**.

---

### 1a. Thorpe's framework — correct understanding (2.5 pts)

- ✔ **+ 2.5 pts** — Correctly identifies that Thorpe's key distinction is about the interpretability of individual units. Full credit even if the explanation is brief — the student just needs to show they understood the core criterion. Does not need to explicitly contrast interpretability with sparsity.
- **+ 2 pts** — Correct general idea but doesn't fully articulate "individual units interpretable in isolation" (e.g., "local means you can tell what a neuron does" without specifying the in-isolation aspect).
- **+ 1.25 pts** — Uses Thorpe's framework but conflates local coding with sparsity or one-to-one mapping (e.g., "each neuron represents a specific thing").
- **+ 0.5 pts** — Mentions Thorpe but mischaracterizes the framework (e.g., equates local coding with "exactly one neuron fires") or only uses the terms without explanation.
- **+ 0 pts** — No reference to Thorpe, or completely misrepresents the paper.

### 1b. Clear position with reasoning (2.5 pts)

- ✔ **+ 2.5 pts** — Takes a clear position (local, distributed, or mixed/it depends) and gives reasons. The bar here is low: any student who commits to a position and provides reasoning — even if compressed — earns full credit.
- **+ 1.75 pts** — Takes a position but the reasoning is very thin or purely asserted (e.g., "I think it's distributed" with no supporting logic).
- **+ 1 pt** — Hedges without committing (e.g., "it's complicated" without explaining why) or states a position with no reasoning at all.
- **+ 0 pts** — No position taken.

### 1c. Specific evidence from lightning talk papers (3 pts)

- **+ 3 pts** — Cites at least two specific findings from the lightning talk papers as evidence, with clear connections to the local/distributed argument. Full credit for using any of: feature visualization, curve detectors, Spider-Man neurons, polysemanticity, SAEs, TCAV, CRAFT, concept bottleneck models, Grad-CAM, Fel et al.'s concept geometry.
- ✔ **+ 2.5 pts** — Cites at least two papers/findings but one is described thinly or the connection to the argument is somewhat loose.
- **+ 1.75 pts** — Cites one specific paper well, or cites two but both are thin.
- **+ 1 pt** — Vague references to "the readings" without specific findings or papers.
- **+ 0 pts** — No evidence from the lightning talks.

### 1d. Clarity & engagement (2 pts)

- ✔ **+ 2 pts** — Writing is clear and coherent. This is the default for any on-topic, readable response that is roughly within word count. Don't require exceptional prose — readable and organized is sufficient.
- **+ 1.25 pts** — Readable but well under word count, or clearly rushed with minimal engagement.
- **+ 0.5 pts** — Hard to follow or incoherent.
- **+ 0 pts** — No meaningful engagement with the material.

*Total: \_\_ / 10*

---

### Scoring summary

| Score | What it looks like |
|-------|-------------------|
| 10 | Accurate Thorpe framework, clear position, multiple specific examples, nuanced argument (e.g., acknowledges layer/model dependence, grapples with the SAE paradox) |
| 9–9.5 | Thorpe framework present, position taken with reasoning, specific examples from papers, clear writing. **This is the target for a good student.** |
| 7.5–8.5 | Position taken but evidence is somewhat thin or Thorpe's framework is described vaguely |
| 5–7 | Only one source clearly referenced, or Thorpe's framework is mischaracterized |
| 1–4 | Minimal effort, no meaningful engagement |
| 0 | No submission |

---

### General notes for TAs

- **Any well-defended position is fine.** "Mostly distributed," "mostly local," "depends on the layer," "local in a learned basis but distributed in the native basis" — all are defensible. Grade the quality of the argument, not the conclusion.
- **Thorpe's framework is the key.** The critical test is whether the student uses Thorpe's interpretability criterion (not just sparsity or number of active units) as their lens. A student who says "distributed because many neurons are active" without engaging the interpretability criterion should lose points on 1a.
- **Polysemanticity is a strong signal of distributed coding.** A neuron that responds to both "Golden Gate Bridge" and "orange paint" and "San Francisco" doesn't have a single interpretable meaning — that's distributed in Thorpe's sense.
- **SAEs are the most interesting evidence.** The best responses will grapple with the SAE paradox: the network's native basis is distributed (polysemantic neurons), but a learned transformation recovers interpretable features (local in the SAE basis). What does this say about the "true" code?
- **Layer-dependent arguments earn extra credit.** Early layers of vision networks (edge detectors, texture detectors — as shown in Olah et al. 2017) look locally coded. Later layers become more distributed/polysemantic. If a student makes this distinction, lean toward the higher tier.
- **Don't penalize for missing any specific paper.** Students saw 3-minute presentations of 10 papers. Using 2–3 examples well is sufficient for full credit on 1c.
- **Cross-references to Thorpe's other concepts (coarse coding, ensemble coding) show strong engagement.** Not required, but if present, lean toward the higher tier.
- **Don't require exact word counts.** Anywhere from 300–500 words is fine.

---

## Sample Responses

### Sample A — Score: 10/10

Thorpe (1989) argues that the defining feature of local coding is not how many units are active, but whether the activity of individual units is *interpretable on its own* — whether you can look at a single unit and say what it "means." By this criterion, I would argue that the native code of modern deep networks is primarily distributed, but with pockets of local coding whose prevalence depends on the layer and the model.

The case for local coding is strongest in early and middle layers of vision networks. Olah et al. (2017) showed through feature visualization that individual neurons in CNNs develop as detectors for specific visual features — edges, textures, and object parts — and these are readily interpretable by humans. The curve detector from Olah et al. (2020) is a textbook example: a single neuron that reliably fires for curves, built from a circuit of earlier edge detectors. By Thorpe's criterion, this unit is locally coded — its activity has a clear, standalone meaning. Even more striking are the "multimodal neurons" in CLIP (Goh et al., 2021): a single neuron that fires for photos of Spider-Man, drawings of Spider-Man, *and* the text "spider." This is a grandmother-cell-like unit that Thorpe would classify as strongly local.

However, these interpretable units appear to be the exception rather than the rule — especially in larger language models. Cunningham et al. (2024) showed that individual neurons in LLMs are typically *polysemantic*: a single neuron might respond to multiple unrelated concepts. By Thorpe's criterion, polysemantic neurons are distributed-coded — their individual activity is not interpretable because the same unit participates in representing many different things. The need for sparse autoencoders (SAEs) to recover interpretable features is itself the strongest evidence that the network's native code is distributed. If the code were naturally local, we wouldn't need a learned transformation to find meaningful units.

This creates a fascinating paradox that Thorpe's framework helps clarify. The SAE basis *is* locally coded — features like the Golden Gate Bridge feature from Templeton et al. (2024) have clear, monosemantic meaning. But the network doesn't compute in this basis. It computes in a basis where individual neurons are polysemantic — distributed in Thorpe's sense. The "local" features are recoverable but not native. It's as if the network is writing in a distributed code that *could* be decoded into local symbols, but it chose the distributed code because it's more efficient (exactly as Thorpe predicts — distributed codes pack more information into fewer units). This distinction — local in a learned basis, distributed in the native basis — may be the most accurate characterization of modern deep networks.

*[1a: 2.5 — accurately describes Thorpe's interpretability criterion and explicitly distinguishes it from sparsity. 1b: 2.5 — clear position (primarily distributed, layer-dependent) with a well-developed argument arc. 1c: 3 — cites four papers accurately (Olah feature viz, Goh multimodal neurons, Cunningham SAEs, Templeton scaling monosemanticity) with clear connections to the local/distributed argument. 1d: 2 — clear, well-organized, genuinely engaging argument that builds to a synthesis. Total: 10/10.]*

---

### Sample B — Score: 9.5/10

Thorpe (1989) defines the local-vs-distributed distinction not by how many neurons fire, but by whether each neuron's activity is meaningful in isolation. A locally coded network has neurons you can label — "this one detects faces," "this one detects curves." A distributed code requires looking at the full pattern of activity to extract meaning. Using this criterion, I argue that modern deep networks are fundamentally distributed, though some locally coded features emerge — particularly in vision models and particularly at intermediate layers.

The most compelling evidence for distributed coding comes from the sparse autoencoder (SAE) work. Cunningham et al. (2024) showed that individual neurons in language models are polysemantic — they respond to multiple unrelated concepts. A single neuron might fire for both legal terminology and cooking recipes. By Thorpe's criterion, this is textbook distributed coding: you cannot interpret the neuron in isolation. The fact that we need SAEs — a learned change of basis — to recover monosemantic, interpretable features implies that the network's native representation is not organized around human-interpretable concepts.

On the other hand, Olah et al.'s (2017, 2020) feature visualization work demonstrates that some neurons in vision networks *are* interpretable — curve detectors, texture detectors, and even high-level object-part detectors can be identified. The Spider-Man neuron in CLIP (Goh et al., 2021) is the most dramatic example: a single unit with a clear, generalizable meaning. By Thorpe's criterion, these are locally coded.

How do we reconcile these? I think the answer is layer- and model-dependent. In vision networks, early layers develop something close to coarse coding (Thorpe's intermediate category) — neurons with interpretable but broad tuning, like oriented edge detectors. Some middle-layer neurons achieve genuinely local coding. But as you move to later layers and larger models — especially language models — the code becomes increasingly distributed. The network packs more information into the same number of units via superposition, sacrificing per-unit interpretability for representational efficiency. The locally coded features that SAEs recover suggest the *information* is there, but it's written in a distributed format that requires decoding to read.

*[1a: 2.5 — clearly articulates Thorpe's interpretability criterion. 1b: 2.5 — clear position (fundamentally distributed, with layer-dependent local pockets). 1c: 2.5 — cites three papers (Cunningham SAEs, Olah feature viz, Goh multimodal neurons) with clear connections; descriptions are accurate but slightly thinner than Sample A. 1d: 2 — clear, well-organized, on-topic writing throughout. Total: 9.5/10.]*

---

### Sample C — Score: 9.25/10

According to Thorpe (1989), the key to distinguishing local from distributed coding is whether individual neurons are interpretable on their own. If you can say what a single neuron "means," the code is local; if meaning only emerges from the population pattern, it's distributed.

I think modern deep networks use mostly distributed coding. The strongest evidence is polysemanticity — individual neurons in large models respond to multiple unrelated concepts. Cunningham et al. (2024) showed this for language models and demonstrated that sparse autoencoders can recover monosemantic features from polysemantic neurons. The fact that we need this extra step to get interpretable units tells us the native code is distributed in Thorpe's sense.

That said, some neurons are genuinely interpretable. The Spider-Man neuron from Goh et al. (2021) fires for Spider-Man across images and text — you can clearly label what it detects. And Olah et al. (2017) showed that many neurons in image classifiers detect recognizable visual features. So it's not purely distributed — there are locally coded units mixed in.

I think the answer depends on what layer and what model you look at. Vision models seem to have more locally coded neurons, especially in early-to-middle layers. Language models seem more distributed, which is why we need SAEs to make sense of them.

*[1a: 2.5 — correctly identifies Thorpe's interpretability criterion ("whether individual neurons are interpretable on their own"). Brief but accurate. 1b: 2.5 — commits to "mostly distributed" with layer/model-dependent reasoning. 1c: 2.25 — cites three papers (Cunningham, Goh, Olah) with connections present but less developed than B; reads somewhat list-like. 1d: 2 — clear, on-topic, readable writing. Total: 9.25/10.]*

---

### Sample D — Score: 7/10

Thorpe talks about local vs. distributed coding, where local means each neuron represents a specific thing and distributed means the representation is spread across many neurons.

I think deep networks are a mix of both. Some neurons are clearly interpretable — like the curve detector from Olah et al. that specifically detects curves, or the Spider-Man neuron that responds to Spider-Man in different forms. These seem local.

But a lot of neurons are polysemantic, meaning they respond to unrelated things. This is why researchers developed sparse autoencoders to find cleaner features. So in that sense the code is distributed because you can't just look at one neuron and know what it means.

Overall I'd say it's more distributed than local, especially in bigger models where there's more polysemanticity. But the fact that some neurons are interpretable means it's not fully distributed either.

*[1a: 1.25 — mentions Thorpe but conflates local coding with one-to-one mapping ("each neuron represents a specific thing") rather than clearly stating the interpretability criterion. 1b: 2.5 — commits to "more distributed than local" and gives a reason (polysemanticity in bigger models). 1c: 2 — mentions curve detector, Spider-Man neuron, and SAEs, but descriptions are thin and lack paper citations (between the 2.5 and 1.75 tiers). 1d: 1.25 — readable but well under word count (~160 words vs. ~400 target). Total: 7/10.]*

---

## Valid positions & evidence pairings (non-exhaustive, for TA reference)

These are natural arguments students might make. Many other formulations are valid.

| Position | Supporting evidence | How it connects to Thorpe |
|---|---|---|
| **Primarily local** | Feature visualization (Olah 2017), curve detectors (Olah 2020), Spider-Man neurons (Goh 2021) | Individual units are interpretable → local by Thorpe's criterion |
| **Primarily distributed** | Polysemanticity (Cunningham 2024, Templeton 2024), need for SAEs to recover interpretable features | Individual neurons are *not* interpretable → distributed by Thorpe's criterion |
| **Local in vision, distributed in language** | Feature viz works well for CNNs; SAEs needed for LLMs | Thorpe's criterion met in one domain but not the other |
| **Layer-dependent** | Early layers have interpretable edge/texture detectors (Olah 2017); later layers increasingly polysemantic | Moves along Thorpe's continuum from local to distributed |
| **Local in a learned basis, distributed natively** | SAEs recover monosemantic features from polysemantic neurons | Network computes in distributed code but information is locally decomposable |
| **Concept-based methods show distributed coding** | TCAV (Kim 2018), CRAFT (Fel 2023): concepts are directions, not neurons | Interpretable structure is in directions across many neurons, not in individual units |
| **Concept bottlenecks as imposed local coding** | CBMs (Koh 2020) force interpretable intermediate units | The fact that this must be architecturally imposed suggests networks don't default to local coding |
| **Coarse coding** (Thorpe's intermediate) | Neurons with broad but interpretable tuning (e.g., edge detectors) | Maps to Thorpe's discussion of overlap between local and distributed |

---

## Verification check (use after grading to catch outliers):

After scoring a response using the detailed rubric, sanity-check the total:

- Accurate Thorpe framework, clear position, multiple specific examples, nuanced argument → **9.5–10**
- Thorpe framework present, position taken with reasoning, reasonable evidence → **9–9.5**
- Position taken but evidence somewhat thin or Thorpe's framework vague → **7.5–8.5**
- Only one source clearly engaged, or Thorpe mischaracterized → **5–7**
- Minimal effort → below **5**

If the rubric score doesn't match the benchmark, re-check the sub-component scores.
