# W8 Reading Response — Grading Guide for TA

## The Prompt (as posted on Canvas)

**W8 Reading Response — Neural Alignment: Methods and Criteria**
*Due: Tuesday March 10, 2:00pm on Canvas*

This week we turn to neural alignment — how researchers compare the internal representations of deep neural networks to brain activity. The two readings below approach this from complementary angles: Kriegeskorte & Douglas lay out the *methods* (how we measure and compare model and brain representations), while Doerig et al. lay out the *criteria* (what it would take for such comparisons to constitute genuine explanations of the brain). Together, they provide the conceptual foundation for Tuesday's lecture and Thursday's lightning talks.

---

**Reading 1 (methods):** Kriegeskorte, N. & Douglas, P.K. (2018). Cognitive computational neuroscience. *Nature Neuroscience*, 21, 1148–1160.
[Access via Brown library](https://www-nature-com.revproxy.brown.edu/articles/s41593-018-0210-5)

**How to read it:** This paper introduces the toolkit for comparing computational models to brain data. Focus on the sections covering **encoding models** (predicting brain responses from model activations), **representational similarity analysis (RSA)** (comparing the geometry of representations in models vs. brains), and **decoding / linear readout** (what information is accessible in a brain region). Pay attention to how different **brain measurement methods** (fMRI, electrophysiology, EEG/MEG) constrain what comparisons are possible — e.g., fMRI gives you spatial resolution but not temporal dynamics, while EEG gives you millisecond timing but coarse spatial information. You can **skim or skip the connectivity modeling sections** (effective connectivity, DCM, Granger causality) — those are about interactions *between* brain regions rather than comparing model representations *to* brain data, which is our focus this week. You don't need to follow every mathematical detail; the goal is to come away understanding *what* these methods measure and *why* a researcher would choose one over another.

---

**Reading 2 (criteria for explanation):** Doerig, A., Sommers, R.P., Seeliger, K., Richards, B., Ismael, J., Lindsay, G.W., Kording, K.P., Konkle, T., van Gerven, M.A.J., Kriegeskorte, N., & Kietzmann, T.C. (2023). The neuroconnectionist research programme. *Nature Reviews Neuroscience*, 24, 431–450.
[Access via Brown library](https://www-nature-com.revproxy.brown.edu/articles/s41583-023-00705-w)

**How to read it:** This is a longer, more philosophical paper. Focus on the **Introduction** (why DNNs are promising brain models) and then on **"Neuroconnectionism as a Lakatosian research programme"** — especially the subsection **"The neuroconnectionist core"**, which lays out the six desiderata (a–f) for what a good neuroconnectionist model should achieve. Then read **"From core to belt: the neuroconnectionist toolbox"** — especially the **"Model testing"** subsection and **Figure 4**, which maps out the four main ways to test a model against the brain: behavioral agreement, agreement with neural data (encoding models, RSA), in silico electrophysiology (lesion/intervention studies), and developmental agreement. You can **skim "The neuroconnectionist belt"** (the modality-specific case studies for vision, audition, language, etc.) — we will cover those in detail during Thursday's lightning talks. The key question to keep in mind: the methods from Kriegeskorte & Douglas let us *measure* alignment, but when does alignment actually *explain* anything?

---

After reading both papers, respond to the following four questions. Where relevant, we encourage you to connect your answers to ideas from earlier in the course (e.g., Crick's distinction between "demonstrations" and genuine brain models, the prediction vs. understanding debate from Serre & Pavlick, Firestone's performance vs. competence distinction, the interpretability methods from Weeks 6–7).

**Q1.** Kriegeskorte & Douglas describe several approaches for comparing models to brains. Two of the most widely used are **encoding models** and **representational similarity analysis (RSA)**. In 2–3 sentences each, describe what each method measures. Then state one specific thing encoding models can reveal that RSA cannot (or vice versa).

**Q2.** Doerig et al. argue that neural predictivity alone — i.e., a model's ability to predict brain responses — is *not sufficient* to claim the model explains the brain. Do you agree? Give one concrete reason why high neural predictivity might be misleading, drawing on a specific example or argument from either paper.

**Q3.** Suppose a research group reports that their DNN achieves state-of-the-art Brain-Score (i.e., it predicts fMRI and neural responses better than any previous model). Using Doerig et al.'s framework, name **two additional tests** you would want to see before concluding that this model genuinely explains visual processing — and briefly say what each test would reveal.

**Q4.** Both papers discuss brain data from multiple measurement methods (fMRI, electrophysiology, EEG/MEG). Pick one measurement method and explain one way in which its properties (spatial resolution, temporal resolution, or what it directly measures) could make a model look more or less "aligned" than it really is.

---

## Rubric (20 points total)

**Grading philosophy:** Additive rubric — each sub-component earns points from zero. A student who did the readings and gave reasonable, specific answers should land around **18/20**. 

---

### Question 1 — Encoding models vs. RSA (5 pts)

**1a. Description of encoding models (2 pts)**

- **+ 2 pts** — Clearly describes encoding models as fitting a mapping (e.g., linear regression) from model activations to brain responses (voxels, firing rates), in their own words.
- ✔ **+ 1.5 pts** — Mostly correct but vague (e.g., says "predicts brain activity from the model" without specifying the mapping/regression step).
- **+ 1 pt** — Partial or confused (e.g., conflates encoding with decoding, or gives only a label with no description).
- **+ 0 pts** — Missing or incorrect.

**1b. Description of RSA (2 pts)**

- **+ 2 pts** — Clearly describes RSA as comparing similarity/distance structures (representational geometry) between model and brain, rather than predicting individual responses.
- ✔ **+ 1.5 pts** — Mostly correct but vague (e.g., "compares how similar stimuli are in the model vs. brain" without mentioning pairwise distances or geometry).
- **+ 1 pt** — Partial or confused (e.g., describes RSA as a type of encoding model, or gives only a label).
- **+ 0 pts** — Missing or incorrect.

**1c. Meaningful difference between the two methods (1 pt)**

- **+ 1 pt** — Identifies a specific, accurate difference in what the methods can reveal (e.g., encoding models reveal which features drive prediction via regression weights; RSA is invariant to the coordinate system; encoding models require fitting while RSA does not; RSA can compare across different measurement modalities).
- ✔ **+ 0.5 pts** — Identifies a real difference but explains it loosely or incompletely.
- **+ 0 pts** — Missing or trivially vague (e.g., "they measure different things").

*Subtotal Q1: \_\_ / 5*

---

### Question 2 — Is neural predictivity sufficient? (5 pts)

**2a. Clear stance with reasoning (2.5 pts)**

- **+ 2.5 pts** — Takes a clear position (agree or disagree) and supports it with a concrete reason rooted in either paper (e.g., a model could exploit low-level statistics; multiple architectures could achieve similar predictivity; fit vs. explanation distinction from Doerig).
- ✔ **+ 2 pts** — Has a stance and a reason, but the reason is somewhat generic (e.g., "correlation isn't causation" or "prediction doesn't equal understanding" without a specific mechanism).
- **+ 1 pt** — Takes a stance but no supporting reason, or reason is unclear.
- **+ 0.5 pts** — Restates the question without answering it.
- **+ 0 pts** — Missing or misunderstands what neural predictivity means.

**2b. Concrete example or argument (2.5 pts)**

- **+ 2.5 pts** — Gives a concrete, well-explained example drawn from the readings (e.g., Doerig's point that even random models explain some neural variance; that unconstrained encoding models let lower-level features "explain" higher-level brain areas; that two very different architectures can predict similar variance).
- ✔ **+ 2 pts** — Example present but underexplained or loosely connected to the argument.
- **+ 1 pt** — Mentions an example but it's unclear or inaccurate.
- **+ 0 pts** — No concrete example.

*Subtotal Q2: \_\_ / 5*

---

### Question 3 — Two additional tests beyond Brain-Score (5 pts)

For each of the two tests (2.5 pts each):

**Per test:**

- **+ 2.5 pts** — Names a recognizable test from Doerig et al.'s framework AND explains what it would reveal / why it matters.
- ✔ **+ 2 pts** — Names a real test but explanation of what it reveals is thin or generic.
- **+ 1.5 pts** — Test is vaguely described (e.g., "test behavior" without specifying what behavioral alignment means).
- **+ 0.75 pts** — Mentions something related but doesn't clearly connect to Doerig's framework.
- **+ 0 pts** — Missing or completely off-topic.

**Acceptable tests** (student can use any wording):
- Behavioral alignment (human-like errors, generalization patterns, psychophysics)
- Intervention / lesion correspondence (ablation → selective deficit matching brain lesions)
- Out-of-distribution generalization (alignment holds on new stimulus types)
- Architectural correspondence (model structure maps onto brain anatomy)
- Representational geometry beyond predictivity (similarity structure, not just variance explained)
- Task-specificity (alignment is specific to the relevant task/modality)

*Subtotal Q3: \_\_ / 5*

---

### Question 4 — Measurement method and alignment bias (3 pts)

**4a. Picks a specific measurement method (1 pt)**

- **+ 1 pt** — Names a specific method (fMRI, EEG, MEG, electrophysiology, calcium imaging, ECoG, etc.).
- **+ 0 pts** — Doesn't name one, or confuses methods (e.g., says fMRI has millisecond temporal resolution).

**4b. Identifies a specific property of that method (1 pt)**

- **+ 1 pt** — Names a concrete property: spatial resolution, temporal resolution, what signal it measures (BOLD, spikes, field potentials), sampling bias, etc.
- ✔ **+ 0.5 pts** — Mentions a property but vaguely (e.g., "has limitations").
- **+ 0 pts** — No specific property identified.

**4c. Explains how that property could inflate or deflate alignment (1 pt)**

- **+ 1 pt** — Clearly explains the direction of bias with reasoning (e.g., "fMRI voxel averaging could make two different models look equally aligned because fine-grained neural differences wash out"; "EEG's coarse spatial resolution means a high correlation doesn't tell you which brain area is driving the alignment").
- ✔ **+ 0.5 pts** — Explains a bias direction but loosely or without full reasoning.
- **+ 0 pts** — Missing or incorrect.

*Subtotal Q4: \_\_ / 3*

---

### Clarity & effort (2 pts)

- **+ 2 pts** — Writing is clear and well-organized, response is complete, both papers are referenced somewhere.
- ✔ **+ 1.5 pts** — Writing is clear, response complete, but only one paper clearly referenced.
- **+ 1 pt** — Writing is okay, both papers referenced, but rushed or hard to follow in places.
- **+ 0.5 pts** — Rushed or hard to follow, and only one paper referenced.
- **+ 0 pts** — Clearly didn't read the papers; incoherent or mostly empty.

*Subtotal Clarity: \_\_ / 2*

---

### Scoring

**Total = Q1 + Q2 + Q3 + Q4 + Clarity = \_\_ / 20**

No conversion needed — sub-components sum directly to 20.

| Score | What it looks like |
|-------|-------------------|
| 19–20 | Every sub-component at or near top tier; both papers integrated |
| 17–18 | Solid answers, both papers referenced, reasonable specificity. **This is the target for a good student.** |
| 14–16 | All questions attempted, but one or more answers stay surface-level |
| 11–13 | Missing a question, or multiple answers too vague to show engagement |
| <11 | Minimal effort or largely off-topic |

**Important:** Always grade using the detailed sub-components above. After scoring, use the verification benchmarks at the end of this document to sanity-check the final score.

---

### General notes for TAs

- **Jargon is not required.** "I'd use the model's layer outputs to predict each brain voxel" = encoding model. "You compare the distance matrices" = RSA. Give full credit for correct ideas in informal language.
- **Don't penalize for "wrong" positions.** Disagreeing with Doerig on Q2 is fine if supported. The point is critical thinking, not agreement.
- **Don't penalize for leaning on one paper.** Some students will engage more with K&D, others with Doerig. Fine as long as both appear *somewhere* in the response.
- **Cross-references to earlier weeks = bonus.** References to Serre (2019, W3), Firestone (W4), Serre & Pavlick (W5), Olah et al. (W6), or mechanistic interpretability concepts from W7 → lean toward the higher tier within a sub-component. Not required for 18.

---

## Sample Responses

### Sample A — Score: 20/20

**Q1.** An encoding model takes the activations from a specific layer of a DNN (say, layer 4 of a ResNet) and trains a linear regression to predict the measured brain response — e.g., predicting fMRI voxel activity patterns or a neuron's firing rate for each stimulus. It tells you how much variance in the brain the model can account for, and by testing different layers, you can figure out which layer maps best to which brain area. RSA takes a different approach: instead of predicting individual responses, it computes a matrix of pairwise distances between all stimulus representations — separately for the model and the brain — and then asks whether those two distance matrices are correlated. In other words, do stimuli that the model treats as similar also get treated as similar by the brain? One key thing encoding models reveal that RSA cannot: because you fit specific regression weights, you can examine *which features* in the model layer are doing the heavy lifting for predicting a given brain area. RSA only tells you about the overall geometry, not which dimensions drive it.

*[1a: 2 — clear regression description. 1b: 2 — pairwise distances, geometry. 1c: 1 — feature weights vs. geometry.]*

**Q2.** I agree that neural predictivity alone is insufficient. This connects to the prediction vs. understanding theme from Serre & Pavlick (W5) — just because a model predicts data well doesn't mean it captures the underlying mechanism. Doerig et al. make exactly this point for neural alignment. They note that in encoding models, the units used to predict brain activity are not constrained to correspond to biologically meaningful counterparts — a higher-level brain region could end up being "explained" by lower-level network features, and the activity of thousands of brain cells can be predicted by a single network unit with broadly similar selectivity. Even more striking, Doerig et al. point out that even random, untrained models can explain some variance in neural recordings. If a random model can "predict" brain data, that predictivity clearly isn't telling us anything about shared computational mechanisms. This is similar to Firestone's (W4) point about performance vs. competence — the model performs well on the prediction benchmark without having the competence we're trying to explain.

*[2a: 2.5 — clear stance + reason grounded in Doerig, connects to W5 and W4. 2b: 2.5 — concrete examples drawn directly from Doerig (unconstrained mappings, random models).]*

**Q3.** Two tests I'd want beyond Brain-Score: First, **behavioral alignment** — does the model make the same kinds of errors as humans? For instance, Serre (2019, W3) discussed how CNNs can be fooled by adversarial perturbations that don't fool humans, and vice versa for texture-shape conflicts. If you show such stimuli, do the model's confusions match human confusions? This would reveal whether the model is solving the recognition task through a similar strategy, not just achieving the same accuracy. Second, **intervention correspondence** — building on the causal-intervention logic from mechanistic interpretability (W7), if you selectively ablate the model layer that best maps to area IT, does the model develop a selective deficit in object recognition while preserving other abilities (like texture discrimination or spatial processing)? If you just remove parts and the whole model degrades uniformly, that's not a good match to how focal brain lesions produce specific deficits. This test would reveal whether the model's functional organization mirrors the brain's modularity, not just its representational geometry.

*[Test 1: 2.5 — behavioral alignment + what it reveals, connects to W3 Serre. Test 2: 2.5 — intervention correspondence + specific prediction, connects to W7 causal interventions.]*

**Q4.** fMRI measures the BOLD signal at the level of voxels, each of which pools activity over a large population of neurons. As K&D describe, encoding models predict each voxel's activity as a linear combination of model features. But because each voxel averages over many neurons, two models with very different fine-grained representations could produce similar voxel-level predictions if their population-level averages converge. This means fMRI-based alignment could overestimate how closely a model matches the brain's actual representational scheme — the alignment is real at the macro scale but could be misleading about the underlying computation. Electrophysiology, which K&D discuss as measuring individual neurons' responses, could reveal differences between models that fMRI-level analysis misses.

*[4a: 1 — fMRI. 4b: 1 — voxel averaging / spatial resolution. 4c: 1 — clear direction of bias with reasoning.]*

*Clarity: 2 — clear writing, well-organized, both papers integrated. Total: 5 + 5 + 5 + 3 + 2 = 20/20.*

---

### Sample B — Score: 18.5/20

**Q1.** Encoding models predict brain responses from model features. You take a CNN layer's activations for a set of stimuli and train a linear regression to predict fMRI voxel patterns or neural firing rates. This tells you which layer best matches which brain area. RSA instead compares similarity structures: for a set of stimuli, it computes how similar each pair is in the model and in the brain, then checks whether those similarity patterns correlate. A key difference: encoding models can reveal which specific features in the model drive the brain prediction (by examining the regression weights), while RSA only tells you about the overall shape of the representational space.

*[1a: 2. 1b: 1.5 — correct but doesn't explicitly mention geometry/distances. 1c: 1. Subtotal: 4.5.]*

**Q2.** I agree. This reminds me of the prediction vs. understanding discussion from Serre & Pavlick (W5). Doerig et al. make a similar argument specifically for neural data: high predictivity could be misleading because the encoding model mapping is unconstrained — as they put it, higher-level brain regions can be "explained" by lower-level network features, and even random models can account for some variance in neural recordings. So a model might predict brain responses by exploiting broadly shared properties of the data without implementing anything like the brain's actual computations. If two completely different architectures predict the same brain area equally well, prediction alone can't tell you which one is the right explanation.

*[2a: 2.5 — connects to W5 theme. 2b: 2 — draws on Doerig's unconstrained-mapping and multiple-realizability arguments but slightly less developed than Sample A. Subtotal: 4.5.]*

**Q3.** First, I'd want to see behavioral alignment — does the model make human-like errors on challenging stimuli? Brain-Score only tests neural prediction, not whether the model behaves like a human observer. Second, I'd want lesion / intervention tests — similar to the causal intervention approach we discussed in W7 but applied to model–brain mappings: if you ablate the model's "IT-like" layer, does it show a selective object recognition deficit like a patient with IT damage? This would test whether the model's components play the same functional roles as the brain areas they're mapped to.

*[Test 1: 2 — names test, explains briefly but thin on "what it reveals." Test 2: 2.5 — connects to W7 causal logic. Subtotal: 4.5.]*

**Q4.** EEG has excellent temporal resolution (milliseconds) but very coarse spatial resolution because it measures electrical fields on the scalp surface. A model could look aligned at a specific time point (e.g., 100ms post-stimulus when early visual processing peaks) without that telling you anything about *where* in the brain the alignment is happening. You might conclude the model matches "visual cortex at 100ms" when really the EEG signal is a mixture of multiple areas, and the model only matches one of them.

*[4a: 1. 4b: 1. 4c: 1. Subtotal: 3.]*

*Clarity: 2 — clear writing, both papers referenced. Total: 4.5 + 4.5 + 4.5 + 3 + 2 = 18.5/20.*

---

### Sample C — Score: 15/20

**Q1.** Encoding models use regression to predict brain activity from model features — you take a CNN layer's activations and fit a linear model to predict fMRI voxel responses. RSA instead compares how similar different stimuli are in the model vs. the brain by looking at pairwise similarity matrices. One difference is that encoding models can tell you which specific layer of the model best predicts a given brain area, while RSA compares the overall similarity structure without fitting to individual responses.

*[1a: 2 — mentions regression and fMRI voxels. 1b: 1.5 — mentions similarity matrices but doesn't explicitly say "geometry." 1c: 0.5 — identifies a real difference (layer-specificity vs. overall structure) but explains loosely. Subtotal: 4.]*

**Q2.** I agree that prediction isn't enough. A model could predict brain responses well without actually computing things the same way the brain does — for instance, Doerig et al. point out that multiple models with very different architectures can achieve similar neural predictivity, which suggests prediction alone can't distinguish which one is the right explanation.

*[2a: 2.5 — clear stance + reason grounded in Doerig. 2b: 1 — mentions multiple architectures but doesn't develop a specific scenario. Subtotal: 3.5.]*

**Q3.** First, I'd want to see behavioral alignment — does the model make similar errors to humans, not just get the same accuracy? Second, I'd want to see what happens when you lesion or ablate parts of the model — do you get selective deficits like brain damage produces?

*[Test 1: 2 — names test, brief on what it reveals. Test 2: 2 — names test, brief on what it reveals. Subtotal: 4.]*

**Q4.** fMRI measures the BOLD signal, which has poor temporal resolution (seconds). A model that matches the brain's final steady-state representation could look very aligned in fMRI without capturing the rapid dynamics of how the brain arrives at that representation — so fMRI alignment might overestimate how well the model matches the actual processing.

*[4a: 1 — fMRI. 4b: 0.5 — mentions temporal resolution but slightly conflates with what BOLD measures. 4c: 0.5 — direction of bias present but reasoning is thin. Subtotal: 2.]*

*Clarity: 1.5 — writing is clear, but only K&D clearly referenced; Doerig mentioned once in passing. Total: 4 + 3.5 + 4 + 2 + 1.5 = 15/20.*

---

### Sample D — Score: 12/20

**Q1.** Encoding models predict brain data from model features using some kind of regression. RSA compares similarity patterns between model and brain. I think the difference is that encoding models are more direct while RSA is more about the overall shape.

*[1a: 1.5 — mentions regression but vague. 1b: 1 — labels RSA correctly but no detail. 1c: 0.5 — "more direct vs. overall shape" is vaguely correct but poorly explained. Subtotal: 3.]*

**Q2.** I agree that prediction alone isn't explanation. You need to understand why the model works, not just that it predicts well. As Doerig et al. mention, different model architectures could end up predicting brain data equally well, which would mean prediction alone can't tell you which one is right.

*[2a: 2 — stance + reason from Doerig, though brief. 2b: 1 — mentions multiple architectures but doesn't develop a concrete scenario. Subtotal: 3.]*

**Q3.** I'd want to see behavioral tests — does the model act like humans on tasks? That would show more than just prediction. Also, maybe testing whether the model handles new types of stimuli it wasn't trained on, to see if the alignment generalizes.

*[Test 1: 1.5 — vague behavioral. Test 2: 1.5 — mentions OOD generalization but vaguely. Subtotal: 3.]*

**Q4.** EEG has poor spatial resolution so you can't really tell where in the brain the model is matching. This could make alignment misleading because a high correlation with the EEG signal doesn't tell you if it's matching visual cortex or something else.

*[4a: 1 — EEG. 4b: 1 — spatial resolution. 4c: 0.5 — direction correct (misleading) but thin on reasoning. Subtotal: 2.5.]*

*Clarity: 0.5 — rushed, both papers referenced but only briefly, answers lack development. Total: 3 + 3 + 3 + 2.5 + 0.5 = 12/20.*

---

## Verification check (use after grading to catch outliers):

After you've scored a response using the detailed rubric, sanity-check the total against these benchmarks:

- All 4 questions answered with reasonable specificity, both papers referenced → score should land around **18 ± 1**.
- All 4 answered but one or more answers stay surface-level → score should land around **14–16**.
- Missing a question or clearly didn't engage with one paper → score should land around **11–13**.
- Minimal effort → score should land below **11**.

If the detailed rubric score doesn't match the benchmark, re-check the sub-component scores — it usually means one sub-component was scored too high or too low.
