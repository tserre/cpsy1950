# Week 8 Lecture Scenario — Neural Alignment

**Deck:** `W8_Neural_Alignment_Figures.pptx` (132 slides)
**Duration:** ~75 minutes (Tuesday lecture) + lightning talks (Thursday)
**Goal:** Give students the conceptual and methodological foundation they need for Thursday's lightning talks on neural alignment papers.

---

## Opening (slides 1–2) — 2 min

**Slide 1 — Title slide.**
Set up the week's theme: we've been building DNNs, training them on tasks, interpreting what they learn. Now we ask a deeper question — do these models actually match what the brain does?

**Slide 2 — Section: Why compare DNNs and brains?**
Transition: "Before we get into the methods, let's ask *why* this comparison matters at all."

---

## Why Compare DNNs and Brains? (slides 3–13) — 10 min

**Slide 3 — The central question (TEXT).**
Frame the three motivations: engineering (brain-inspired architectures drove progress), neuroscience (DNNs as testable models), cognitive science (understanding intelligence). Emphasize that neural alignment is the empirical version of this question — can we *measure* whether DNNs and brains use similar representations?

**Slide 4 — Levels of analysis / Marr (TEXT).**
Brief recap of Marr's three levels. DNNs give us something new: a system that solves the *same task* as the brain, so we can compare at the algorithmic level. The key insight is that task optimization might produce brain-like solutions even without explicitly modeling biology.

**Slides 5–7 — Kriegeskorte & Douglas 2018 figures.**
- Slide 5: Show the "cognitive computational neuroscience" vision — task-performing models evaluated against brain and behavioral data.
- Slide 6–7: Walk through their framework. These figures are conceptual — don't linger, but make sure students see the big picture.

**Slide 8 — Neuroconnectionist programme (TEXT).**
Introduce the six desiderata from Doerig et al. Don't go through all six in detail — highlight multi-scale and learning rules as the most debated. Ask: "How many of these do current DNNs actually satisfy?"

**Slides 9–13 — Doerig et al. 2023 figures.**
- Walk through 2–3 key figures. The framework figure (slide 9) is most important.
- These slides set up the rest of the lecture: we'll focus on the alignment methods (desideratum 1: multi-scale comparison).

> **Transition:** "OK, so we want to compare DNNs and brains. But what data do we actually have from the brain?"

---

## Neural Data Types & Trade-offs (slides 14–33) — 15 min

**Slide 14 — Section divider.**

**Slide 15 — Measuring brain activity (TEXT).**
Overview of the five main modalities. Emphasize: *every method involves a trade-off*. There's no perfect measurement. This matters because the method you choose constrains the questions you can ask.

**Slide 16 — Spatiotemporal resolution figure (Sejnowski et al. 2014).**
The classic comparison plot. Point to where each method sits. "fMRI gives you *where* but not *when*. EEG/MEG give you *when* but not *where*. This tension drives the whole field."

**Slides 17–19 — Logothetis 2008 (fMRI).**
What BOLD actually measures, limitations. Don't belabor — students have seen fMRI before. Key point: fMRI is the workhorse for neural alignment because it gives voxel-level resolution across the whole brain.

**Slide 20 — Spatiotemporal fusion (TEXT).**
Introduce the clever idea: use RSA to bridge fMRI and MEG recorded in separate sessions. Same stimuli → build RDMs → cross-correlate.

**Slides 21–26 — Cichy et al. 2014.**
- Show 2–3 key figures. The space-time matrix (which brain region activates when) is the highlight.
- "This gives us the first movie of object recognition unfolding across the cortex."

**Slide 27 — Natural Scenes Dataset (TEXT).**
Introduce NSD as the benchmark dataset. Stress the scale: 8 subjects, 30K+ trials each, 7T fMRI. This is what most current alignment studies use.

**Slides 28–33 — Allen et al. 2022 (NSD).**
- Show the experimental design and data quality figures.
- Highlight the noise ceiling concept (repeat presentations allow us to estimate reliability).
- Don't go through all 6 figures in detail — focus on the first 2–3.

> **Transition:** "Now we have data. How do we actually *compare* a DNN to the brain?"

---

## Methods Primer (slides 34–57) — 15 min

This is the most technically dense section. Go slowly.

**Slide 34 — Section divider.**

**Slide 35 — Three approaches (TEXT).**
The big picture: encoding, RSA, and decoding are three complementary ways to test alignment. Encoding predicts brain *from* model. Decoding predicts stimulus *from* brain. RSA compares geometry without fitting.

**Slide 36 — Encoding/decoding pipeline overview (supplementary figure).**
Walk through the pipeline diagram. Students need to understand: extract features from a DNN layer → fit a linear map to brain activity → cross-validate → report R².

**Slides 37–40 — Naselaris et al. 2011.**
- The foundational encoding/decoding paper. Show the voxelwise encoding model schematic.
- Key idea: *linearized* encoding — we're testing whether a linear readout of DNN features can predict each voxel. The DNN does the heavy lifting; the linear map just tests whether the information is there.

**Slide 41 — RSA (TEXT).**
The key conceptual innovation of RSA: instead of comparing individual responses, compare the *pattern of similarities*. This is a second-order comparison — it doesn't require matching the dimensions of the two systems.

**Slides 42–52 — Kriegeskorte 2008 RSA + Nili et al. 2014.**
- RSA is critical — spend time here. Walk through:
  - How to build an RDM (slide 42–43)
  - How to compare RDMs across species/models (slide 44–45)
  - Statistical inference (Nili toolbox, slides 56–57)
- Key insight: RSA lets you compare a macaque IT recording to a human fMRI scan to a DNN layer — all in the same framework.

**Slide 53 — Noise ceilings & benchmarking (TEXT).**
Critical concept. "A model that explains 30% of variance sounds bad — but if the noise ceiling is 35%, it's actually near-perfect." Walk through split-half reliability and Spearman-Brown correction.

**Slides 54–55 — Brain-Score (Schrimpf et al. 2020).**
The integrative benchmark. Composite score across brain regions + behavior. This is how the field currently ranks models.

**Slides 56–57 — Nili et al. 2014 toolbox.**
Brief — show the statistical inference framework. Students doing RSA for projects should look at this paper.

> **Transition:** "So we have the methods. What happened when people first applied them?"

---

## The Breakthrough (slides 58–71) — 10 min

**Slide 58 — Section divider.**

**Slide 59 — The key insight (TEXT).**
This is the climax of the story. Before 2014: hand-designed features gave moderate predictions. Then Yamins et al. showed that a DNN *trained only on object categorization* predicts V4 and IT better than anything before — without ever seeing neural data. The optimization objective shapes internal representations.

**Slides 60–63 — Yamins et al. 2014.**
- The paper that launched the field. Show: model architecture, V4/IT prediction results, the comparison to prior models.
- Emphasize: this was surprising! Nobody guaranteed that ImageNet training would produce brain-like features.

**Slide 64 — The complexity gradient (TEXT).**
The satisfying result: DNN layers map *systematically* onto the ventral stream. Early layers → V1, middle → V2/V4, deep → IT.

**Slide 65 — DNN layer representations (supplementary figure).**
Visual overview of what each DNN layer learns.

**Slides 66–71 — Güçlü & van Gerven 2015.**
- Confirmed the gradient using encoding models on fMRI.
- Show the layer-to-region mapping. "This gradient is now one of the most replicated findings in computational neuroscience."

> **Transition:** "Does this story extend beyond vision?"

---

## Beyond Vision (slides 72–87) — 8 min

**Slide 72 — Section divider.**

**Slide 73 — Language alignment (TEXT).**
Same paradigm: present sentences, record brain activity, extract LLM activations, map layers to brain regions. Transformer models predict language cortex best. Middle-to-late layers → temporal/frontal language areas.

**Slides 74–79 — Schrimpf et al. 2021.**
- Show 2–3 key figures. The layer-to-brain-region mapping for language models.
- Point out: next-word prediction emerges as an organizing principle — connects to predictive processing theory.

**Slide 80 — Auditory alignment (TEXT).**
Kell et al. extended the story to audition. DNN trained on word recognition + genre classification → early shared layers, then task-specific branches that map onto distinct cortical regions.

**Slides 81–87 — Kell et al. 2018.**
- Show the dual-task architecture and the cortical mapping.
- Punchline: task optimization → brain-like representations is a *general* principle, not specific to vision.

> **Transition:** "So far we've been going model → brain. Can we go the other direction?"

---

## Decoding: Brain → Model (slides 88–100) — 8 min

**Slide 88 — Section divider.**

**Slide 89 — Brain-to-image reconstruction (TEXT).**
The most visually dramatic results in the field. Two pathways: semantic (fMRI → CLIP) and perceptual (fMRI → VAE latent), fused through Stable Diffusion.

**Slides 90–95 — Takagi & Nishimoto 2023 + MindEye supplementary.**
- Show the pipeline, then the reconstruction grids. These are stunning results — let the images speak.
- Key point: the brain encodes enough information to reconstruct recognizable scenes. Not just category — layout, color, texture.

**Slide 96 — Brain-to-text decoding (TEXT).**
Tang et al. 2023: continuous language decoding from fMRI. Not single-word classification — full paraphrases of stories. Requires subject cooperation (can be resisted). Ethical implications.

**Slides 97–100 — Tang et al. 2023.**
- Show the decoded text examples. Emphasize: captures meaning, not exact words.
- Brief discussion of privacy/ethics — this is a good moment to gauge student reactions.

> **Transition:** "This all sounds great. But is it too good to be true?"

---

## Limitations & the Divergence Problem (slides 101–129) — 12 min

This is the section where we complicate the story. Essential for the reflection papers.

**Slide 101 — Section divider.**

**Slide 102 — The divergence problem (TEXT).**
The assumption everyone made: better ImageNet → better brain model. The reality from Linsley et al. 2025: the correlation breaks down above ~70% accuracy. State-of-the-art models are *worse* brain models than older CNNs. This challenges the "scale up and align" paradigm.

**Slides 103–105 — Linsley, Feng & Serre 2025.**
- Show the accuracy-vs-alignment scatter plot. This is the central result.
- "If our best models aren't our most brain-like models, what does that tell us?"
- Note: this is the instructor's own paper — acknowledge it, but stress the result is robust and now replicated.

**Slide 106 — Jonas & Kording provocation (TEXT).**
The thought experiment: apply neuroscience methods to a system we *fully understand* (a microprocessor). Do they work?

**Slides 107–119 — Jonas & Kording 2017 (13 figures!).**
- Don't show all 13. Pick 3–4 highlights:
  - The lesion study (slide 107–108): "transistors critical for Space Invaders"
  - Tuning curves (slide 109–110)
  - The punchline: all standard analyses "work" but reveal nothing about the actual computation
- This paper is provocative — expect student reactions. "Does this mean neural alignment is meaningless? Not necessarily — but it means we need to be more careful about what we claim."

**Slide 120 — Neural predictivity diagnosticity (TEXT).**
Storrs et al.: after linear reweighting, *all* DNN architectures predict IT equally well. If very different models fit the data equally, what does "brain-like" really mean?

**Slides 121–129 — Storrs et al. 2021.**
- Show 2–3 key results. The main finding is simple: the bar charts of neural predictivity are all the same height, despite wildly different architectures.
- "Linear fitting may be too flexible — it can remap any representation. We may need stronger tests."

> **Transition:** "These are the open questions your lightning talks and reflection papers should engage with."

---

## Thursday Preview & Wrap-up (slides 130–132) — 5 min

**Slide 130 — Section: Thursday lightning talks.**

**Slide 131 — Lightning talk preview (TEXT).**
Walk through the paper assignments organized by theme (vision, language, audition & foundation models). Give students a sense of how their papers connect to what we just covered.

**Slide 132 — Open questions (TEXT).**
Read through the six questions. These are meant to seed reflection papers:
1. Is neural predictivity the right metric?
2. What makes a model a good model vs. a good predictor?
3. Can we go beyond correlation to mechanism?
4. The many-to-one problem
5. Role of inductive biases
6. Does divergence generalize beyond vision?

End with: "Your job on Thursday is to convince us that your paper adds something to this conversation."

---

## Pacing Notes

| Section | Slides | Target time |
|---------|--------|-------------|
| Opening + Why compare | 1–13 | 12 min |
| Neural data types | 14–33 | 15 min |
| Methods primer | 34–57 | 15 min |
| The breakthrough | 58–71 | 10 min |
| Beyond vision | 72–87 | 8 min |
| Decoding | 88–100 | 8 min |
| Limitations | 101–129 | 12 min |
| Wrap-up | 130–132 | 5 min |
| **Total** | **132** | **~85 min** |

Pace is tight at 85 min. Two places to cut if running long:
- **Logothetis (slides 17–19):** Can skip if students already know fMRI basics. Saves ~3 min.
- **Jonas & Kording (slides 107–119):** Show only 3–4 figures instead of walking through all 13. Saves ~4 min.

## Key Rhetorical Arc

1. **Motivation:** Why would we compare? → The promise of neural alignment
2. **Data:** What do we measure? → The richness and limitations of brain recordings
3. **Methods:** How do we compare? → Encoding, RSA, benchmarking
4. **Success:** It works! → Yamins 2014, the complexity gradient, extension to language/audition
5. **Dramatic results:** Brain reading → Reconstruction, decoding
6. **Complication:** But wait → The divergence problem, Jonas & Kording, Storrs
7. **Open questions:** Hand off to students → Your lightning talks and reflections should engage with these tensions
