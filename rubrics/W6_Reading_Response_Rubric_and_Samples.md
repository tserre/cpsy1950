# W6 Reading Response — Grading Guide for TA

## The Prompt (as posted on Canvas)

**Reading Response: Olah et al. (2018) — The Building Blocks of Interpretability**
*10 Points*

**Required Reading:** Olah, C., Satyanarayan, A., Johnson, I., Carter, S., Schubert, L., Ye, K., & Mordvintsev, A. (2018). *The Building Blocks of Interpretability.* Distill.
[https://distill.pub/2018/building-blocks/](https://distill.pub/2018/building-blocks/)

**Reading guidance:** Read the full interactive article and engage seriously with the visualizations — they're not decorative, they're the argument. Pay close attention to how the authors combine feature visualization with attribution to build richer explanations, and to what they mean when they say interpretability requires more than just one of these tools alone.

---

**Q1 — What are the "building blocks" and why do they matter? (4 pts)**

The article argues that interpretability requires combining multiple tools — feature visualization, attribution, and spatial/channel decompositions — rather than relying on any single technique. In 2–4 sentences, explain in your own words what each of the two core building blocks is (features and attribution), and why the authors argue that neither alone is sufficient for understanding. Then explain what the authors mean by a "semantic dictionary" and why that concept matters for bridging the gap between individual neurons and human-readable concepts.

As you write, consider the analogy to neuroscience: early systems neuroscience characterized neurons one at a time using single-unit recording, then moved to population-level accounts measured simultaneously across arrays of electrodes. Feature visualization might seem like a step forward over just knowing a unit's preferred stimulus — but does it actually close the gap between a model that works and a model that explains, in Crick's sense? What would Crick say is still missing?

**Q2 — Brains and Networks: Does this help us understand either? (4 pts)**

Several of the network visualizations in this paper look strikingly like findings from visual neuroscience: curvature-selective units echoing V4 recordings (Gallant et al., 1996; Pasupathy & Connor, 2001), and face- or concept-selective units echoing recordings from IT cortex and the medial temporal lobe (Tsao et al., 2006; Quiroga et al., 2005). This convergence might seem encouraging — but consider a more troubling reading: if a network with no biology built in recovers the same representational hierarchy as the brain purely from exposure to natural images, it may mean that these features reflect the statistical structure of natural images rather than anything specifically neural. Any sufficiently powerful system trained on those images might find them, which would make the correspondence uninformative about cortical mechanisms.

In 3–5 sentences, address the following: Does finding that a network unit behaves like a biological neuron tell us something interesting about the network, the brain, or both? Be precise — does shared phenomenology imply shared mechanism? Use Marr's levels to structure your answer: which level does the visual similarity between network features and neural responses speak to, and which levels does it leave completely open? Then use the distinction from Serre & Pavlick (2025) between prediction and understanding to say whether you think interpretability tools like those in Olah et al. bring us closer to a genuine mechanistic account of either system — or whether Crick's worry still applies.

**Q3 — Reflections (2 pts)**

List four items total, any mix of:

- something you found surprising or visually striking in the article
- something you still don't understand or would like clarified
- a connection to another paper or idea from this course
- something you think will matter for interpretability or neuroscience going forward

One sentence each is enough.

---

## Rubric (10 points total)

**Grading philosophy:** Additive rubric — each sub-component earns points from zero. A student who did the reading and gave reasonable, specific answers should land around **9/10**.

---

### Question 1 — Building blocks and why they matter (4 pts)

**1a. Feature visualization described (1 pt)**

- **+ 1 pt** — Clearly describes feature visualization as a method for understanding what a neuron/channel responds to, typically by generating or optimizing an input that maximally activates it. May mention that it reveals learned features (edges, textures, objects) at different layers.
- ✔ **+ 0.5 pts** — Mostly correct but vague (e.g., "shows what neurons detect" without mentioning optimization, generated examples, or how it differs from just knowing a preferred stimulus).
- **+ 0 pts** — Missing or incorrect.

**1b. Attribution described (1 pt)**

- **+ 1 pt** — Clearly describes attribution as identifying which parts of an input (pixels, regions) are responsible for a network's output or a neuron's activation. May mention saliency maps, gradient-based methods, or spatial attribution.
- ✔ **+ 0.5 pts** — Mostly correct but vague (e.g., "shows which input parts matter" without spatial or mechanistic detail).
- **+ 0 pts** — Missing or incorrect.

**1c. Why combining them matters / semantic dictionaries (1 pt)**

- **+ 1 pt** — Explains that combining the two building blocks (e.g., into semantic dictionaries) lets you see *both* what features the network detects *and* where in the input those features are active — bridging the gap between individual neurons and human-readable concepts. May mention a concrete example (e.g., "floppy ear" detector firing on the ear region of a dog image).
- ✔ **+ 0.5 pts** — Says combining is "more powerful" or "gives more information" but doesn't explain *how* or *why*, or doesn't address semantic dictionaries specifically.
- **+ 0 pts** — Missing or trivially vague (e.g., "two tools are better than one").

**1d. Crick connection (1 pt)**

- **+ 1 pt** — Engages with the Crick analogy: draws a connection between feature visualization and the shift from single-unit characterization to richer explanations, and identifies what Crick would say is still missing (e.g., feature visualization is still a "demonstration" — it shows what the network detects but doesn't explain *why* it learned those features or *how* it computes them; it doesn't give you a mechanistic model in Crick's sense).
- ✔ **+ 0.5 pts** — Mentions Crick or the neuroscience analogy but the connection is surface-level (e.g., "Crick would say we need more than just pictures of what neurons like" without elaborating).
- **+ 0 pts** — Doesn't address the Crick/neuroscience component of the question.

*Subtotal Q1: \_\_ / 4*

---

### Question 2 — Shared phenomenology ≠ shared mechanism (4 pts)

**2a. Engages with the "troubling reading" / shared phenomenology question (1.5 pts)**

- **+ 1.5 pts** — Directly addresses whether shared feature types (curvature detectors, face cells, etc.) between networks and brains imply shared mechanism. Takes a clear position on the "troubling reading": e.g., acknowledges that convergent features could reflect the statistical structure of natural images rather than anything specifically neural, OR argues that the convergence *is* informative for specific reasons. The key is engaging with the idea that phenomenological similarity ≠ mechanistic similarity.
- ✔ **+ 1 pt** — Addresses the question but stays at a general level (e.g., "similar outputs don't mean similar processes" without engaging with the natural-image-statistics argument).
- **+ 0.5 pts** — Restates the question setup without taking a position.
- **+ 0 pts** — Missing or off-topic.

**2b. Marr's levels applied (1.5 pts)**

- **+ 1.5 pts** — Uses Marr's levels to structure the answer. E.g.: the visual similarity between network features and neural responses speaks to the computational/representational level (both systems extract similar features), but leaves the algorithmic level (how those features are computed) and implementation level (biological vs. silicon substrate) completely open. The answer should make clear *which* level the feature correspondence addresses and *which* it doesn't.
- ✔ **+ 1 pt** — References Marr's levels but the mapping is imprecise or incomplete (e.g., mentions "computational level" without clarifying what's left open).
- **+ 0.5 pts** — Names Marr's levels without applying them to the specific question.
- **+ 0 pts** — No engagement with Marr's levels.

**2c. Serre & Pavlick prediction vs. understanding + Crick's worry (1 pt)**

- **+ 1 pt** — Uses the prediction vs. understanding distinction to evaluate whether interpretability tools like those in Olah et al. bring us closer to genuine mechanistic understanding or remain at the level of description/prediction. May argue that feature visualization + attribution provide *predictive* interpretability (you can anticipate what a network will respond to) without *mechanistic* understanding (you don't know why training converged on those features). May conclude that Crick's worry still applies, or argue that compositional structure (semantic dictionaries) starts to address it.
- ✔ **+ 0.5 pts** — References Serre & Pavlick or Crick but the connection to Olah et al.'s specific methods is generic.
- **+ 0 pts** — No engagement with prediction/understanding or Crick.

*Subtotal Q2: \_\_ / 4*

---

### Question 3 — Reflections (2 pts)

The question asks for **four items** (one sentence each), any mix of: something surprising/striking, something still unclear, a connection to another course paper, or something they think will matter going forward.

- **+ 2 pts** — Four items, at least two of which are specific (reference a particular figure, example, concept, or argument from the article or course). Items show genuine engagement.
- ✔ **+ 1.5 pts** — Four items provided but most are generic or brief. OR three well-developed items.
- **+ 1 pt** — Two to three items, at least one specific. OR four items that are all generic.
- **+ 0.5 pts** — One item only, or multiple items that are extremely vague.
- **+ 0 pts** — Missing.

*Subtotal Q3: \_\_ / 2*

---

### Scoring

**Total = Q1 + Q2 + Q3 = \_\_ / 10**

| Score | What it looks like |
|-------|-------------------|
| 9–10 | Every sub-component at or near top tier; Marr + Serre & Pavlick + Crick integrated meaningfully |
| 8–8.5 | Solid answers, reasonable specificity, frameworks referenced. **This is the target for a good student.** |
| 6–7.5 | All questions attempted, but one or more answers stay surface-level or miss a required framework |
| 4–5.5 | Missing a question, or multiple answers too vague to show engagement |
| <4 | Minimal effort or largely off-topic |

**Important:** Always grade using the detailed sub-components above. After scoring, use the verification benchmarks at the end of this document to sanity-check the final score.

---

### General notes for TAs

- **Jargon is not required.** "It generates a picture of what the neuron likes" = feature visualization. "It highlights which pixels matter" = attribution. Give full credit for correct ideas in informal language.
- **Don't penalize for "wrong" positions.** Arguing that network–brain convergence *is* informative about mechanism is fine if well-reasoned. Arguing that Olah et al.'s methods *do* provide genuine understanding is fine if defended. The point is critical engagement, not agreement with any particular view.
- **Q2 explicitly requires all three frameworks.** The question asks students to use Marr's levels *and* Serre & Pavlick *and* address Crick's worry. Students who use only one framework can't reach full marks on Q2 even if the reasoning is excellent. Note this gently in feedback.
- **Q3 asks for four items, not one.** Students who write a single long reflection instead of four items should still get credit proportional to quality, but note the format.
- **Cross-references to earlier weeks = lean toward higher tier.** References to Crick (W2), Serre 2019 (W3), Firestone (W4), or Serre & Pavlick (W5) beyond the ones explicitly requested → lean toward the higher tier within a sub-component.
- **Temporal boundary:** Students submit this *before* the W6 lecture and lightning talks. Don't expect them to reference W6 lightning talk papers or material from W7+. The only new material is Olah et al. (2018); everything else should come from W2–W5.
- **The neuroscience citations in Q2 are context, not required reading.** Students are not expected to have read Gallant et al., Pasupathy & Connor, Tsao et al., or Quiroga et al. The prompt provides those as framing. Don't penalize students who don't cite them; give credit to students who use them thoughtfully.
- **Many students come from CS, not neuroscience.** A CS student who says "the brain probably doesn't learn via backprop" gets the same credit as a neuro student who says "cortical plasticity mechanisms differ from gradient descent." Don't expect neuroscience terminology beyond what appears in the prompt text itself or in the course readings (Crick 1989, Serre & Pavlick 2025). Terms like "V4," "IT cortex," and "single-unit recording" appear in the prompt and students can use them, but shouldn't be penalized for paraphrasing (e.g., "brain area that processes curves" instead of "V4").

---

## Sample Responses

### Sample A — Score: 10/10

**Q1.** Feature visualization is a technique for understanding what a given neuron or channel in a neural network has learned to detect. The idea is to generate (typically by optimization) an input image that maximally activates that unit, producing a visual "portrait" of what the neuron responds to — edges and textures at early layers, object parts and whole objects deeper in the network. Attribution is the complementary question: given a specific input image and a specific network output, which parts of the input were most responsible? Attribution methods (like saliency maps) highlight spatial regions of the input that drove a particular activation or classification.

Olah et al.'s key argument is that neither building block alone gives a complete picture. Feature visualization tells you *what* a neuron detects but not *where* in a particular image it's responding; attribution tells you *where* but not *what concept* is being picked up. By composing the two into "semantic dictionaries," you can see both simultaneously: for each spatial location in an image, you can identify which learned concept (via feature visualization) is active there and how strongly (via attribution). This bridges the gap between individual neurons and human-readable concepts — instead of saying "neuron 47 fires," you can say "the floppy-ear detector fires on the ear region and the grass detector fires in the background."

The analogy to neuroscience is apt: early systems neuroscience characterized neurons one at a time with their preferred stimulus, much like feature visualization gives you a single unit's "ideal input." But Crick would argue that this is still a "demonstration" — it shows us what a unit responds to without explaining *why* the network learned that feature or *how* it computes it. Feature visualization is a richer version of the preferred-stimulus characterization, but it doesn't give you a mechanistic model. You know the network has an ear detector, but you don't know why training produced ear detectors rather than some other decomposition, or how the network combines these features into a classification.

*[1a: 1 — optimization, layer progression. 1b: 1 — spatial regions, saliency. 1c: 1 — semantic dictionaries with concrete example, bridges neuron ↔ concepts. 1d: 1 — draws neuroscience analogy, identifies what Crick would still want.]*

**Q2.** The visual similarity between network features and neural recordings — curvature detectors resembling V4 responses, face-selective units resembling IT cortex — is striking but potentially misleading. The "troubling reading" is compelling: if any sufficiently powerful system trained on natural images converges on these features, then the correspondence tells us about the structure of the *training data*, not the mechanism of either system. Shared phenomenology does not imply shared mechanism — two very different algorithms could produce curvature detectors simply because curvature is a statistically reliable feature in natural scenes.

Marr's levels help clarify this. The feature correspondence speaks primarily to the computational level — both brains and networks solve the problem of extracting useful features from natural images, and they arrive at similar *representations* (curvature, faces, textures). But this leaves the algorithmic level wide open: the learning algorithm that produced those features in the network (backpropagation over millions of gradient steps) is presumably very different from however the brain arrives at its features. The implementation level is obviously different (silicon vs. neurons), but more importantly, even the algorithmic commitments — how features are learned, combined, and routed — are completely undetermined by feature-level similarity alone.

Using Serre & Pavlick's distinction, I'd say these interpretability tools provide powerful *predictive* insight — you can predict what a network unit will respond to, and even see that it resembles a biological neuron — but this is not *understanding* in the mechanistic sense. You can describe the representations without explaining why training converged on them or whether the same representations would emerge under different architectures. Crick's worry still applies: semantic dictionaries are a more sophisticated "demonstration" than a raw accuracy number, but they don't constitute a model of *how* the system works.

*[2a: 1.5 — directly engages troubling reading, natural-image statistics argument. 2b: 1.5 — maps to computational level, identifies algorithmic and implementation as open. 2c: 1 — prediction vs. understanding applied to Olah et al., concludes Crick's worry applies.]*

**Q3.**

1. I was struck by the "semantic dictionary" visualization of GoogLeNet processing a labrador image — the fact that you can see "floppy ear," "fur," "snout," and "grass" detectors firing in the right spatial locations makes the network's representation look almost modular, even though it wasn't explicitly trained for modularity.
2. I'm still unclear on how robust semantic dictionaries are to adversarial or out-of-distribution inputs — if you show the network a surrealist painting of a dog, do the same feature detectors fire in interpretable ways, or does the decomposition break down?
3. The connection to Firestone (W4) seems important: Firestone argued that good performance doesn't imply human-like competence, and here the interpretability *looks* human-readable but that doesn't mean the underlying processing is human-like.
4. I think the composability principle — building richer explanations from simple building blocks — will matter enormously for scaling interpretability to larger models; the question is whether the building blocks themselves remain interpretable as models grow.

*[Q3: 2 — four items, all specific, mix of striking finding, open question, course connection, and forward-looking thought.]*

*Total: 4 + 4 + 2 = 10/10.*

---

### Sample B — Score: 8/10

**Q1.** Feature visualization shows what a neuron in a neural network responds to — you can think of it as generating the neuron's "ideal input." For early layers, this reveals simple patterns like edges, while later layers show complex objects or textures. Attribution is the flip side: given an actual input image, it highlights which regions of the image were important for the network's response (like a heatmap). The authors argue that combining these into "semantic dictionaries" is more powerful because you can see both *what* the network detects and *where* it detects it — bridging the gap between isolated neuron descriptions and the holistic picture of what the network sees in an image.

On the Crick point, this is analogous to neuroscience moving from single-cell recordings to understanding populations. But Crick would probably say that feature visualization is still a more elaborate version of "this neuron prefers faces" — it's a richer description, but it doesn't explain the mechanism behind *why* the network organizes its representations this way.

*[1a: 1 — "ideal input," layer progression. 1b: 0.5 — heatmap but doesn't elaborate on mechanism. 1c: 1 — composition + semantic dictionaries explained. 1d: 0.5 — mentions Crick, brief but relevant.]*

**Q2.** The similarity between network features and brain responses (curvature in V4, face cells in IT) is interesting but I think the prompt's "troubling reading" is right to be cautious. If these features just reflect the statistics of natural images, then any powerful visual system would learn them, and the convergence doesn't tell us much about brain mechanisms specifically. In Marr's terms, the similarity is at the computational/representational level — both systems extract similar features — but the algorithmic level (how those features are learned and combined) is completely unaddressed. Serre & Pavlick would say that interpretability tools like Olah et al.'s help us *predict* and *describe* what networks represent, but they don't give us *understanding* of why these representations emerge. I lean toward thinking Crick's worry still holds: semantic dictionaries are an impressive demonstration, but they don't constitute a mechanistic explanation of either system.

*[2a: 1 — addresses troubling reading, clear position. 2b: 1.5 — Marr's levels mapped correctly, identifies computational vs. algorithmic. 2c: 0.5 — references Serre & Pavlick and Crick but somewhat generic.]*

**Q3.**

1. The interactive feature visualization at different layers was visually striking — seeing the progression from simple edge detectors at early layers to complex object-part detectors deeper in the network was more convincing than any static figure I've seen.
2. I still don't fully understand how the attribution methods handle cases where multiple overlapping features contribute to the same spatial region.
3. This connects to Crick (W2): feature visualization is a modern, prettier version of the single-unit characterization he would call a "demonstration."
4. I think this approach will struggle with language models where there's no spatial structure to visualize.

*[Q3: 2 — four items, specific, good mix.]*

*Total: 3 + 3 + 2 = 8/10.*

---

### Sample C — Score: 6/10

**Q1.** Feature visualization generates images that show what a neuron detects. Attribution highlights which parts of an input image matter for the network's output. The authors combine these into "semantic dictionaries" that show both what and where at the same time, which gives a richer picture than either alone. I think Crick would say that even with these tools, we're still just describing what the network does without really explaining why.

*[1a: 0.5 — correct but vague. 1b: 0.5 — correct but thin. 1c: 0.5 — mentions semantic dictionaries but doesn't elaborate on bridging neurons ↔ concepts. 1d: 0.5 — Crick mentioned but brief.]*

**Q2.** I think the similarity between network features and brain responses is interesting but doesn't necessarily mean the mechanisms are the same. In Marr's terms, this is probably at the computational level. Serre & Pavlick would say this is prediction, not understanding. So I don't think these interpretability tools give us genuine mechanistic understanding of either system — they're useful descriptions but Crick's worry still applies.

*[2a: 0.5 — addresses the question at a very surface level, no engagement with natural-image statistics argument. 2b: 1 — names Marr's levels but doesn't specify which levels are left open. 2c: 0.5 — names Serre & Pavlick and Crick but application is formulaic.]*

**Q3.**

1. The visualizations were cool and made the article easier to follow than a normal paper.
2. I'm confused about how gradient-based methods work exactly.
3. This seems related to what we discussed about prediction vs. understanding.
4. Interpretability will be important as models get bigger.

*[Q3: 1 — four items but all generic; none reference specific figures, examples, or arguments.]*

*Total: 2 + 2 + 1 = 5/10.*

*Note: This is a borderline case. All questions were attempted and the student clearly read the article, but the engagement stays at a surface level throughout. The verification benchmarks suggest 6–7.5 for "all answered but surface-level"; this sits at the low end of that range. A TA could reasonably score this anywhere from 5 to 6 depending on how charitably they read the Q2 framework engagement.*

---

### Sample D — Score: 3/10

**Q1.** Feature visualization and attribution are two methods for understanding neural networks. Feature visualization shows what neurons detect and attribution shows which inputs matter. Together they give more information. Crick would probably want more explanation.

*[1a: 0.5 — labels correctly but no real description. 1b: 0.5 — labels correctly but no real description. 1c: 0 — trivially vague. 1d: 0 — doesn't engage with Crick.]*

**Q2.** The similarity between networks and brains is interesting but doesn't mean they work the same way. These tools help describe networks but don't give full understanding. As we discussed in class, there's a difference between prediction and understanding.

*[2a: 0.5 — addresses question at label level. 2b: 0 — doesn't use Marr's levels. 2c: 0.5 — vague reference to prediction/understanding without applying it.]*

**Q3.**

1. The article was interesting.
2. I learned about interpretability.

*[Q3: 0.5 — only two items, both extremely generic.]*

*Total: 1 + 1 + 0.5 = 2.5/10. → Round to 3/10.*

*Note: This student likely did not engage deeply with the article. The answers are mostly generic and could have been written without reading the specific content.*

---

## Verification check (use after grading to catch outliers):

After you've scored a response using the detailed rubric, sanity-check the total against these benchmarks:

- All 3 questions answered with reasonable specificity; Marr + Serre & Pavlick + Crick all engaged → score should land around **8.5 ± 1**.
- All 3 answered but some surface-level, or missing one of the three required frameworks in Q2 → score should land around **6–7.5**.
- Missing a question or clearly didn't engage with the reading → score should land around **3–5**.
- Minimal effort → score should land below **3**.

If the detailed rubric score doesn't match the benchmark, re-check the sub-component scores — it usually means one sub-component was scored too high or too low.
