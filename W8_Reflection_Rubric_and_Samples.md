# W8 Reflection — Grading Guide for TA

## The Prompt (as posted on Gradescope)

**W8 Reflection Activity — Neural Alignment**
*Due: Sunday March 15, 2:00pm on Gradescope*

## Reading

Read the following paper:

**Linsley, D., Feng, P., & Serre, T. (2025).** *Better artificial intelligence does not mean better models of biology.* Trends in Cognitive Sciences.
[Access via Brown library](https://www-cell-com.revproxy.brown.edu/trends/cognitive-sciences/fulltext/S1364-6613(25)00349-3)

**How to read it:** This is a short opinion piece (~12 pages). Focus on the main argument and the figures — especially Figure 1, which tracks neural alignment as a function of ImageNet accuracy across hundreds of models. You'll recognize several concepts from this week's lecture and readings (encoding models, Brain-Score, the question of what "alignment" really means). The key question: early deep networks improved as models of biological vision as they improved on AI benchmarks — but this trend has reversed. Why? And what does this mean for the model–brain comparison enterprise we've been studying all week?

---

## Question (10 points, 200–300 words)

Linsley, Feng & Serre (2025) present evidence that advances in AI no longer translate to better models of biological vision — the alignment between DNNs and primate visual cortex has plateaued or even declined as models have scaled to human-level accuracy. This week's lightning talks showcased a range of model–brain comparison studies across vision, language, and audition.

Pick **one specific finding or argument** from Linsley et al. and connect it to **one of this week's lightning talk papers**. Does the lightning talk paper's approach avoid the problems Linsley et al. identify, or is it vulnerable to the same concerns? What would strengthen the conclusions?

*Note: Linsley et al.'s argument focuses on vision, but the underlying logic — that improving benchmark performance does not guarantee better models of biology — may apply to other domains too. You are free to connect to any lightning talk paper, including those on language, audition, or foundation models.*

*You are welcome to draw on concepts from this week's pre-class readings (Kriegeskorte & Douglas; Doerig et al.) and lecture as well.*

---

### Lightning talk papers (for reference)

1. Yamins, Hong, Cadieu, Solomon, Seibert & DiCarlo (2014) — *Performance-optimized hierarchical models predict neural responses in higher visual cortex*
2. Schrimpf, Kubilius, Hong, Majaj, Rajalingham, Issa, Kar, Bashivan, Prescott-Roy, Geiger, Schmidt, Yamins & DiCarlo (2020) — *Brain-Score: Which artificial neural network for object recognition is most brain-like?*
3. Storrs & Kriegeskorte (2021) — *Diverse deep neural networks all predict human IT cortex well, after training and fitting*
4. Schrimpf, Blank, Tuckute, Kauf, Hosseini, Kanwisher, Tenenbaum & Fedorenko (2021) — *The neural architecture of language: Integrative modeling converges on predictive processing*
5. Caucheteux, Gramfort & King (2023) — *Evidence of a predictive coding hierarchy in the human brain listening to speech*
6. Goldstein, Zada, Buchnik, Sber, Price, Aubrey, Nastase, Feder, Emanuel, Cohen, Jansen, Gazula, Choe, Patil, Honey, Levy & Hasson (2022) — *Shared computational principles for language processing in humans and deep language models*
7. Tuckute, Sathe, Srikant, Taliaferro, Wang, Schrimpf, Kay & Fedorenko (2024) — *Driving and suppressing the human language network using large language models*
8. Li, Anumanchipalli, Mohamed, Lu, Wu & Bhatt (2023) — *Dissecting neural computations in the human auditory pathway using deep neural networks for speech*
9. Défossez, Caucheteux, Rapin, Kabeli & King (2023) — *Decoding speech perception from non-invasive brain recordings*
10. Azabou, Arora, Ganesh, Mao, Nachimuthu, Mendelson, Richards, Perich, Lajoie & Dyer (2023) — *A unified, scalable framework for neural population decoding*
11. Ding, Fahey, Papadopoulos, Wang, Celii, Papadopoulos, Kunin, Chang, Fu, Ding, Park, Patel, Euler, Reimer, Sinz & Tolias (2025) — *A foundation model of the mouse visual cortex*

---

## Key findings from Linsley, Feng & Serre (2025) (for TA reference)

Students may reference any of the following. They do not need to use this exact terminology — credit correct ideas in any wording.

1. **The inflection point** — Early DNNs showed increasing alignment with primate ITC as their ImageNet accuracy improved. But beyond ~70% accuracy (around the TResNet architecture), this positive correlation flipped: more accurate models became *worse* models of ITC (Figure 1A). The same pattern holds for image-mapped ITC responses (Figure 1B) and human feature importance alignment (Figure 1C).

2. **Divergent visual strategies** — Modern DNNs rely on visual features that diverge from those used by humans. Using ClickMe (a platform for collecting human feature importance maps), the authors show that more accurate DNNs increasingly rely on background textures, global statistics, and watermark labels rather than the object-level features humans find diagnostic (Figure 3).

3. **No single design factor explains the decline** — Neither architecture (CNN vs. ViT), model scale (parameters, layers), nor training data (ImageNet-only vs. internet-scale datasets like LAION-5B) could explain which models better matched primate neurons. The factors that drove AI progress are precisely the ones that drove the divergence from biology.

4. **Task-optimization as a declining strategy** — The original promise of task-optimized deep learning was that optimizing for object recognition would naturally produce brain-like representations. This worked for early, less accurate models but has broken down for modern, superhuman ones.

5. **Harmonization as a potential solution** — The authors propose "harmonization": training DNNs to directly optimize for biological alignment (e.g., co-training with human feature importance maps from ClickMe). Harmonized models not only align with human visual features but also show improved ITC alignment and adversarial robustness.

6. **Vision science must chart its own course** — The paper argues that vision science should stop following AI benchmarks and instead develop biologically-grounded training approaches: realistic data diets, behavioral objectives, and developmental/ecological constraints.

7. **Scaling may make things worse** — The exponential scale-up of DNNs has come at the cost of modeling biology. Modern state-of-the-art models achieve performance through a mixture of human-like and distinctly non-biological strategies.

---

## Lightning talk papers (for TA reference)

Each entry includes the paper's actual authors, a short summary, and relevance to the Linsley et al. argument.

### Vision papers (most directly relevant)

1. **Yamins, Hong, Cadieu, Solomon, Seibert & DiCarlo (2014)** — *Performance-optimized hierarchical models predict neural responses in higher visual cortex*
   [PNAS](https://www.pnas.org/doi/10.1073/pnas.1403112111)
   A task-optimized deep network predicts single-neuron responses in macaque V4 and IT. The landmark paper that launched the task-optimization paradigm. Data: single-unit electrophysiology (macaque).
   **Linsley et al. relevance:** This paper represents the *beginning* of the trend Linsley et al. describe — when task optimization still reliably improved neural alignment. Linsley et al. reference it directly [refs 1–3].

2. **Schrimpf, Kubilius, Hong, Majaj, Rajalingham, Issa, Kar, Bashivan, Prescott-Roy, Geiger, Schmidt, Yamins & DiCarlo (2020)** — *Brain-Score: Which artificial neural network for object recognition is most brain-like?*
   [Neuron](https://www.cell.com/neuron/fulltext/S0896-6273(20)30605-X)
   Systematic benchmark comparing hundreds of architectures to brain data. Data: fMRI + electrophysiology (macaque & human).
   **Linsley et al. relevance:** Linsley et al. use Brain-Score data directly in Figure 1A to show the inflection point. Brain-Score is the very metric that reveals the problem.

3. **Storrs & Kriegeskorte (2021)** — *Diverse deep neural networks all predict human IT cortex well, after training and fitting*
   [Journal of Cognitive Neuroscience](https://direct.mit.edu/jocn/article/33/10/2044/97402)
   Very different architectures all achieve similar brain-prediction scores after fitting. Data: fMRI (human IT).
   **Linsley et al. relevance:** Supports the argument — if architecturally diverse models all predict IT equally well, then prediction accuracy alone can't distinguish good from bad models of vision.

### Language papers

4. **Schrimpf, Blank, Tuckute, Kauf, Hosseini, Kanwisher, Tenenbaum & Fedorenko (2021)** — *The neural architecture of language: Integrative modeling converges on predictive processing*
   [PNAS](https://www.pnas.org/doi/10.1073/pnas.2105646118)
   Benchmark across 43 language models; next-word prediction is the key driver of brain alignment. Data: fMRI + ECoG (human).

5. **Caucheteux, Gramfort & King (2023)** — *Evidence of a predictive coding hierarchy in the human brain listening to speech*
   [Nature Human Behaviour](https://www.nature.com/articles/s41562-022-01516-2)
   Maps GPT-2 layers to brain regions, finding a predictive coding hierarchy. Data: fMRI (human).

6. **Goldstein, Zada, Buchnik et al. (2022)** — *Shared computational principles for language processing in humans and deep language models*
   [Nature Neuroscience](https://www.nature.com/articles/s41593-022-01026-4)
   Encoding model maps GPT-2 embeddings to ECoG activity during natural speech. Data: ECoG (human).

7. **Tuckute, Sathe, Srikant, Taliaferro, Wang, Schrimpf, Kay & Fedorenko (2024)** — *Driving and suppressing the human language network using large language models*
   [Nature Human Behaviour](https://www.nature.com/articles/s41562-023-01783-7)
   Uses language models to generate stimuli that maximally drive or suppress the language network. Data: fMRI (human).

### Audition & speech papers

8. **Li, Anumanchipalli, Mohamed, Lu, Wu & Bhatt (2023)** — *Dissecting neural computations in the human auditory pathway using deep neural networks for speech*
   [Nature Neuroscience](https://www.nature.com/articles/s41593-023-01468-4)
   Maps self-supervised speech model layers to the auditory hierarchy. Data: fMRI (human).

9. **Défossez, Caucheteux, Rapin, Kabeli & King (2023)** — *Decoding speech perception from non-invasive brain recordings*
   [Nature Machine Intelligence](https://www.nature.com/articles/s42256-023-00714-5)
   Decodes perceived speech from MEG/EEG using wav2vec 2.0 features. Data: MEG + EEG (human).

### Foundation models for neuroscience

10. **Azabou, Arora, Ganesh, Mao, Nachimuthu, Mendelson, Richards, Perich, Lajoie & Dyer (2023)** — *A unified, scalable framework for neural population decoding*
    [NeurIPS 2023](https://arxiv.org/abs/2310.16046)
    Foundation model for decoding neural activity across brain regions, tasks, and animals. Data: Neuropixels (mouse).

11. **Ding, Fahey, Papadopoulos et al. (2025)** — *A foundation model of the mouse visual cortex*
    [Nature](https://www.nature.com/articles/s41586-025-08829-y)
    Foundation model trained across thousands of neurons/sessions/mice; serves as a "digital twin" of mouse V1. Data: two-photon calcium imaging (mouse V1).
    **Linsley et al. relevance:** This is a different approach — fitting directly to neural data rather than task-optimizing. Students might argue it's closer to the "harmonization" idea Linsley et al. propose.

---

## Rubric (10 points)

**Grading philosophy:** Additive rubric — each sub-component earns points from zero. This is a low-stakes reflection activity, so grade generously. A student who read Linsley et al., attended the lightning talks, and made a reasonable connection should land around **9/10**.

---

### 1a. Specific finding or argument from Linsley et al. (3 pts)

- **+ 3 pts** — Identifies a specific finding (e.g., the inflection point, divergent visual strategies, failure of design factors to explain the decline, harmonization proposal) and describes it in their own words. Doesn't need to be exhaustive — enough to show they read the paper.
- ✔ **+ 2.5 pts** — Identifies a finding correctly but the description is thin (e.g., "better models on ImageNet don't predict the brain as well" without explaining the inflection point or why). Still shows engagement.
- **+ 1.5 pts** — Mentions something from Linsley et al. but vaguely or inaccurately (e.g., "they say DNNs aren't good models" without a specific finding).
- **+ 0 pts** — No reference to Linsley et al., or completely misrepresents the paper.

### 1b. Specific lightning talk paper (2 pts)

- **+ 2 pts** — Identifies a specific lightning talk paper and describes its key finding or method. Remember students saw 4.5-minute presentations — approximate descriptions are fine.
- ✔ **+ 1.5 pts** — Names a paper but description is thin (e.g., "Yamins et al. showed a DNN predicts brain responses"). Still earns most of the credit.
- **+ 1 pt** — Mentions a paper but inaccurately or very vaguely.
- **+ 0 pts** — No reference to any lightning talk paper.

### 1c. Meaningful connection (3 pts)

- **+ 3 pts** — Draws a clear connection explaining whether the lightning talk paper avoids, is vulnerable to, or directly illustrates the concerns Linsley et al. raise. Addresses what would strengthen the conclusions.
- ✔ **+ 2.5 pts** — Makes a reasonable connection. May be somewhat general but still shows the student thought about how the Linsley et al. argument applies (or doesn't) to the specific paper.
- **+ 1.5 pts** — Attempts a connection but it is vague or doesn't go beyond restating what each source says separately.
- **+ 0 pts** — No connection attempted.

### 1d. Clarity & engagement (2 pts)

- **+ 2 pts** — Writing is clear and demonstrates genuine engagement with the material. Response is roughly within word count.
- ✔ **+ 1.5 pts** — Writing is clear but rushed, or reads more like a summary than a reflection.
- **+ 1 pt** — Hard to follow or clearly written without much engagement.
- **+ 0 pts** — Incoherent or clearly didn't engage with the material.

*Total: \_\_ / 10*

---

### Scoring summary

| Score | What it looks like |
|-------|-------------------|
| 10 | Specific finding, specific paper, insightful connection that addresses resolution — goes above and beyond |
| 8–9 | Both sources identified, reasonable connection, clear writing. **This is the target for a good student.** |
| 6–7 | Both sources mentioned but connection is surface-level or one source is vague |
| 4–5 | Only one source clearly referenced, or connection is generic |
| 1–3 | Minimal effort, no meaningful engagement |
| 0 | No submission |

---

### General notes for TAs

- **Linsley et al.'s argument focuses on vision**, but thoughtful students may apply the logic to language or audition papers. A student who asks "could the same inflection point happen for language model–brain alignment?" is making a great connection — credit that reasoning even if Linsley et al. don't address it directly.
- **Storrs & Kriegeskorte (2021) supports the Linsley et al. argument** rather than being undermined by it. If a student pairs these two, they should explain how Storrs & Kriegeskorte's finding strengthens the case. This is a sophisticated pairing — don't penalize it.
- **Yamins et al. (2014) is a special case.** Linsley et al. frame it as the beginning of a trend that has since reversed. A student might argue Yamins et al.'s results are still valid (they used early, less-accurate models) or that the field over-generalized from them. Both are reasonable.
- **The foundation model papers (Azabou et al., Ding et al.) take a different approach.** They fit directly to neural data rather than task-optimizing — students might argue this is closer to Linsley et al.'s "harmonization" proposal. Credit this connection.
- **Don't require specific terminology.** "The correlation between accuracy and brain prediction has flipped" = the inflection point. "The model uses different features than humans" = divergent visual strategies. Give credit for correct ideas in any wording.
- **Students weren't required to know the full paper.** They were told to focus on the main argument and the figures. Grade based on whether they grasped the core thesis.
- **Note: Linsley et al. is the course instructor's paper.** Students may or may not realize this. Don't adjust grading either way — evaluate the quality of the reflection as usual.

---

## Sample Responses

### Sample A — Score: 10/10

Linsley, Feng & Serre (2025) present a striking finding: the positive correlation between DNN object-recognition accuracy and neural alignment with primate inferotemporal cortex has *reversed*. Using Brain-Score data across hundreds of models, they show that beyond ~70% ImageNet accuracy (around the TResNet architecture), more accurate models actually become worse predictors of ITC neural responses. They attribute this to divergent visual strategies — modern DNNs increasingly rely on background textures, global statistics, and even watermark labels rather than the object-level features that primates find diagnostic for recognition.

This finding has direct implications for the Brain-Score benchmark presented by Schrimpf et al. (2020). Brain-Score was designed to track which architectures are most brain-like, and its original value proposition was that improving on engineering benchmarks would also improve biological alignment. But Linsley et al. show this value proposition has broken down — the highest-performing models on ImageNet no longer rank highest on Brain-Score's neural predictivity measures, and the design factors that drove AI progress (scale, internet-scale data, ViT architectures) cannot explain which models better match biology.

That said, Brain-Score is more than just a neural prediction benchmark — it also includes behavioral measures and is designed to be extensible. Linsley et al.'s proposal for "harmonization" (co-training with human feature importance data) could be integrated as a training signal, and Brain-Score could evolve to weight harmonization-based metrics more heavily. The tension would be further resolved by testing whether harmonized models — which Linsley et al. show are more aligned with human features and ITC neurons — also score higher on Brain-Score's behavioral benchmarks, closing the loop between engineering, neural, and behavioral alignment.

*[1a: 3 — accurately describes the inflection point with specific detail (TResNet, ~70% accuracy) and the divergent strategies finding. 1b: 2 — describes Brain-Score accurately including its purpose and scope. 1c: 3 — insightful bidirectional analysis: Linsley et al. undermine Brain-Score's premise, but Brain-Score could evolve; proposes testing harmonized models on behavioral benchmarks. 1d: 2 — clear, well-organized, genuine engagement. Total: 10/10.]*

---

### Sample B — Score: 9/10

Linsley et al. argue that the strategies modern DNNs use to achieve high object-recognition accuracy have diverged from those used by the human visual system. Using the ClickMe platform, they show that more accurate models rely on features that are progressively less aligned with what humans find important for recognition — things like background textures and contextual cues rather than the objects themselves. This suggests that scaling up DNNs has pushed them toward non-biological shortcuts.

This is directly relevant to Yamins et al.'s (2014) finding that a task-optimized DNN predicts neural responses in macaque V4 and IT. Yamins et al. was a foundational result — it showed that training a model to classify objects produces representations that look like the brain's. But the model they used was an early, relatively simple DNN. According to Linsley et al., the alignment Yamins et al. found was part of a trend that held for older, less accurate models but has since broken down. If Yamins et al. repeated their study with a modern ViT trained on internet-scale data, the alignment with ITC might actually be worse.

To strengthen the conclusions from both papers, researchers could systematically track neural alignment across model generations — not just for ITC responses, but also for behavioral measures like human-consistent error patterns and feature importance. If the inflection point Linsley et al. describe also appears in these behavioral measures, that would confirm the divergence is fundamental rather than an artifact of the neural fitting procedure.

*[1a: 3 — clearly describes the divergent strategies finding with the ClickMe evidence. 1b: 1.5 — names Yamins et al. and captures the key finding, though description of the method is thin. 1c: 2.5 — good connection placing Yamins et al. on the "before the inflection point" side of the trend, with a reasonable proposal for strengthening. 1d: 2 — clear and well-organized. Total: 9/10.]*

---

### Sample C — Score: 8/10

Linsley et al. show that as DNNs have gotten more accurate on ImageNet, their alignment with primate visual cortex has actually gotten worse. There's an inflection point beyond which better AI performance means worse biological modeling. They suggest this is because modern models use different visual features from humans.

This made me think about the language model papers from the lightning talks, particularly Schrimpf et al.'s (2021) finding that next-word prediction drives brain alignment for language models. Could the same inflection point happen in language? Right now, larger language models seem to be getting more brain-aligned, but if Linsley et al.'s logic applies broadly, we might eventually see language models get so good at next-word prediction that they start using strategies the brain doesn't — similar to how vision models started using texture shortcuts instead of shape.

This is speculative since Linsley et al. only tested vision, but it would be interesting to track language model–brain alignment over time the way they tracked vision model alignment.

*[1a: 2.5 — captures the inflection point correctly but thin on the mechanism. 1b: 1.5 — names Schrimpf et al. (language) and the key finding. 1c: 2 — creative cross-domain extension asking whether the pattern could generalize to language; somewhat speculative but shows genuine thinking. 1d: 2 — clear writing and genuine engagement. Total: 8/10.]*

---

### Sample D — Score: 6.5/10

Linsley et al. argue that modern DNNs are not good models of the brain even though they're really good at classifying images. They show that the correlation between accuracy and brain alignment has flipped.

This connects to the Brain-Score paper by Schrimpf et al. which tries to rank models by how brain-like they are. If Linsley et al. are right, then the models that score highest on ImageNet might not actually be the best brain models, which is a problem for the whole approach.

I think this is an important issue for the field. We need better ways to evaluate whether models are actually processing information like the brain rather than just predicting brain activity well.

*[1a: 2.5 — mentions the inflection/flipped correlation but brief. 1b: 1.5 — names Brain-Score, thin description. 1c: 1 — "important issue" and "need better ways" is too vague; doesn't explain specifically what would strengthen conclusions or how the concerns apply. 1d: 1.5 — readable but rushed. Total: 6.5/10.]*

---

## Valid pairings (non-exhaustive, for TA reference)

These are natural connections students might draw. Many other pairings are valid.

| Linsley et al. finding | Lightning talk paper | Connection |
|---|---|---|
| Inflection point | Schrimpf et al. (2020) — Brain-Score | Brain-Score data directly shows the inflection point; raises questions about benchmarking by prediction alone |
| Inflection point | Yamins et al. (2014) — hierarchical model | Yamins et al. represents the era when task-optimization still improved alignment; model used was before the inflection |
| Divergent visual strategies | Yamins et al. (2014) — hierarchical model | Yamins' early model may have used more human-like features; modern successors may not |
| Prediction ≠ biology | Storrs & Kriegeskorte (2021) — diverse DNNs all predict IT | Directly supports the argument — if all models predict equally well, prediction is not a meaningful criterion |
| Task-optimization declining | Schrimpf et al. (2021) — language benchmark | Could the same pattern emerge for language? Currently, better LMs → better brain alignment, but for how long? |
| Harmonization proposal | Ding et al. (2025) — foundation model of mouse V1 | Fitting directly to neural data is conceptually similar to harmonization; sidesteps task-optimization |
| Harmonization proposal | Tuckute et al. (2024) — driving/suppressing language network | Goes beyond prediction to control; partially addresses the "prediction ≠ understanding" concern |
| Scaling makes things worse | Goldstein et al. (2022) — shared computational principles | Are the "shared principles" real computational overlap, or could scaling cause the alignment to reverse as in vision? |
| No design factor explains decline | Azabou et al. (2023) — neural population decoding | Foundation model approach bypasses architecture/data debates by fitting directly to brain data |
| Vision science must chart own course | Caucheteux et al. (2023) — predictive coding hierarchy | Example of using AI models to test neuroscience theories (predictive coding) rather than just benchmarking |

---

## Verification check (use after grading to catch outliers):

After scoring a response using the detailed rubric, sanity-check the total:

- Specific finding, specific paper, thoughtful connection → **9–10**
- Both sources mentioned, reasonable connection → **8–9**
- Both sources mentioned but connection is surface-level → **6–7**
- Only one source clearly engaged → **4–5**
- Minimal effort → below **4**

If the rubric score doesn't match the benchmark, re-check the sub-component scores.
