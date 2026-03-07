# W8 — Semantic Scholar Deep Search: Neural Alignment

**Generated:** 2026-03-07 | **Last updated:** 2026-03-07

This document organizes papers for W8 into two categories:
1. **Lecture background (3/10)** — foundational methods and key results for the instructor's overview lecture
2. **Extended reading** — recent/advanced papers for enrichment, discussion, and future assignments

---

## PART A: Lecture Background for 3/10

These papers provide the conceptual and methodological foundation for the W8 lecture on neural alignment. Organized by lecture topic to support slide planning.

---

### A1. The Core Method: Encoding Models & Voxelwise Modeling

**Naselaris, Kay, Nishimoto & Gallant (2011)**
"Encoding and decoding in fMRI"
*NeuroImage* | 938 citations | [S2](https://www.semanticscholar.org/paper/255910019e3661154eef356e93124ddce2931a2b)
> Definitive review of encoding vs. decoding. Encoding models predict brain activity from stimuli; decoding does the reverse. Shows that encoding models offer a more complete functional description. Introduces the linearizing feature space framework.

**Kriegeskorte & Douglas (2018)** ⭐ *W8 Key Reading*
"Cognitive computational neuroscience"
*Nature Neuroscience* | 408 citations | [S2](https://www.semanticscholar.org/paper/fe65133015723d49f8090e0aec099e7b61b8a54b)
> Synthesizes encoding models, RSA, and decoding into a unified framework for testing computational models against brain data. The roadmap paper for the field.

---

### A2. Representational Similarity Analysis (RSA)

**Kriegeskorte, Mur & Bandettini (2008)**
"Representational similarity analysis — connecting the branches of systems neuroscience"
*Frontiers in Systems Neuroscience* | 2,919 citations | [S2](https://www.semanticscholar.org/paper/cbc4266795a13b6124294e0fb15bfcdcc29417e2)
> The original RSA paper. Compares representational dissimilarity matrices (RDMs) across brain regions, species, and computational models. Foundational method for the entire field.

**Nili, Wingfield, Walther, Su, Marslen-Wilson & Kriegeskorte (2014)**
"A toolbox for representational similarity analysis"
*PLoS Computational Biology* | 884 citations | [S2](https://www.semanticscholar.org/paper/c2ac6995bcf3e7675c325327c29514a837cc42cf)
> Practical RSA toolbox. Searchlight RSA, nonparametric inference, linear-discriminant t value. The paper students would use if implementing RSA.

**Diedrichsen & Kriegeskorte (2017)**
"Representational models: A common framework for understanding encoding, pattern-component, and representational-similarity analysis"
*PLoS Computational Biology* | 296 citations | [S2](https://www.semanticscholar.org/paper/7f6deb94598e7dc580aba4678ecc06c070e75ed2)
> Unifies encoding, PCM, and RSA under one mathematical framework — all evaluate the second moment of activity profiles. Clarifies when each method is most powerful.

---

### A3. The Foundational Result: DNNs Predict Visual Cortex

**Yamins, Hong, Cadieu, Solomon, Seibert & DiCarlo (2014)**
"Performance-optimized hierarchical models predict neural responses in higher visual cortex"
*PNAS* | 2,130 citations | [S2](https://www.semanticscholar.org/paper/2bd2b120ccd5aa88a5927889a973b2204732e435)
> ⭐ Lightning talk #1. The paper that launched the field. Task-optimized deep CNNs predict V4 and IT neural responses. Performance on categorization correlates with neural predictivity.

**Khaligh-Razavi & Kriegeskorte (2014)**
"Deep supervised, but not unsupervised, models may explain IT cortical representation"
*PLoS Computational Biology* | 1,252 citations | [S2](https://www.semanticscholar.org/paper/e5e3a4a13e719ce770e036b4eeb82c95527c3296)
> Compares 37 models. Deep supervised networks (AlexNet) match human IT far better than traditional models (HMAX, SIFT) or unsupervised networks.

**Cadieu, Hong, Yamins, Pinto, Ardila, Solomon, Majaj & DiCarlo (2014)**
"Deep neural networks rival the representation of primate IT cortex for core visual object recognition"
*PLoS Computational Biology* | 820 citations | [S2](https://www.semanticscholar.org/paper/858c455a16e29d9a65f8257ed87b18ff14c6218c)
> Directly compares object representations in DNNs vs. macaque IT. DNNs (HMO) match IT representation as well as IT matches itself across recording sessions.

**Güçlü & van Gerven (2015)**
"Deep neural networks reveal a gradient in the complexity of neural representations across the ventral stream"
*Journal of Neuroscience* | 949 citations | [S2](https://www.semanticscholar.org/paper/e854d3943b6ee54d87277a27ffc8eaba28d58b59)
> Maps DNN layer representations across the cortical sheet. Reveals an explicit complexity gradient along the ventral stream: early layers → V1, deeper layers → IT. Achieves unsurpassed decoding accuracy.

---

### A4. Brain-Score: Benchmarking Brain-Likeness

**Schrimpf, Kubilius, Hong et al. (2018/2020)**
"Brain-Score: Which artificial neural network for object recognition is most Brain-Like?"
*bioRxiv* | 653 citations | [S2](https://www.semanticscholar.org/paper/31619c8f4f9557136a675514b22ca8ece65ed38c)
> ⭐ Lightning talk #2. Introduces Brain-Score — a composite benchmark of neural and behavioral metrics. First observation: correlation between ImageNet accuracy and Brain-Score weakens at ≥70% top-1 accuracy (foreshadowing Linsley et al.).

**Kubilius, Schrimpf et al. (2019)**
"Brain-like object recognition with high-performing shallow recurrent ANNs"
*NeurIPS 2019* | 309 citations | [S2](https://www.semanticscholar.org/paper/146d40346ed686f54087386f66666adaf6a6efaf)
> Introduces CORnet-S. Shallow recurrent network (4 areas) matches or exceeds much deeper feedforward networks on Brain-Score. Recurrence is the key factor.

---

### A5. Beyond Feedforward: Recurrence and Neural Controlcla

**Kar, Kubilius, Schmidt, Issa & DiCarlo (2019)**
"Evidence that recurrent circuits are critical to the ventral stream's execution of core object recognition behavior"
*Nature Neuroscience* | 456 citations | [S2](https://www.semanticscholar.org/paper/749118e990a532dddf9f573676e9d178f8442e2d)
> Identifies "challenge" images where primates outperform feedforward CNNs. Late-phase IT responses (requiring recurrence) are poorly predicted by feedforward models.

**Bashivan, Kar & DiCarlo (2019)**
"Neural population control via deep image synthesis"
*Science* | 439 citations | [S2](https://www.semanticscholar.org/paper/aa0ad8dd35f7b385feba07cedb30d7e3a1935381)
> Uses ANN models to synthesize images that drive or suppress specific V4 neurons. Demonstrates that ANN models embed useful causal knowledge — not just correlation.

---

### A6. The Neuroconnectionist Framework

**Doerig, Sommers, Seeliger et al. (2023)** ⭐ *W8 Key Reading*
"The neuroconnectionist research programme"
*Nature Reviews Neuroscience* | 161 citations | [S2](https://www.semanticscholar.org/paper/b1dc41c7f150201132a3ee6765fc2d4a1c24100c)
> Presents neuroconnectionism as a Lakatosian research programme. Six desiderata for good ANN-brain models: neural prediction, behavioral match, multi-scale bridging, emergence, intervention, and novel understanding.

---

### A7. The Divergence Problem (Lecture Climax)

**Fel, Felipe, Linsley & Serre (2022)**
"Harmonizing the object recognition strategies of deep neural networks with humans"
*NeurIPS 2022* | 99 citations | [S2](https://www.semanticscholar.org/paper/d2995cbd50528beac1419e5943c8fd6e4c91ddb3)
> Across 84 DNNs: systematic trade-off between accuracy and human alignment. Introduces the neural harmonizer and ClickMe maps.

**Linsley, Rodriguez, Fel, Arcaro, Sharma, Livingstone & Serre (2023)**
"Performance-optimized deep neural networks are evolving into worse models of inferotemporal visual cortex"
*NeurIPS 2023* | 29 citations | [S2](https://www.semanticscholar.org/paper/c44bdf4ff085f577a7cdd9a1cebf4af0b4eb0c82)
> Three experiments showing DNNs have become progressively worse IT models. Precursor to the reflection paper.

**Linsley, Feng & Serre (2025)** ⭐ *W8 Reflection Paper*
"Better artificial intelligence does not mean better models of biology"
*Trends in Cognitive Sciences* | 7 citations | [S2](https://www.semanticscholar.org/paper/d9df15ca7de173965094a911f697a725059a4f85)
> The inflection point: beyond ~70% ImageNet accuracy, more accurate models become *worse* brain models. Argues vision science must chart its own course.

---

## PART B: Lightning Talk Papers (3/12)

These are the 11 papers assigned for student lightning talks, cross-referenced with S2 IDs where found.

### Vision
1. **Yamins et al. (2014)** — see A3 above
2. **Schrimpf et al. (2018/2020)** — see A4 above
3. **Storrs, Kietzmann, Walther, Mehrer & Kriegeskorte (2021)** — "Diverse deep neural networks all predict human IT cortex well, after training and fitting" — *JoCN* | 101 cites | [S2](https://www.semanticscholar.org/paper/a2bb6f8b9c7078ac574dad062ebae7ec1940ec08)

### Language
4. **Schrimpf, Blank, Tuckute et al. (2021)** — "The neural architecture of language" — 571 cites | [S2](https://www.semanticscholar.org/paper/644a33399711b31f8a5a1b464f6ffd7c2264fedc)
5. **Caucheteux, Gramfort & King (2023)** — "Evidence of a predictive coding hierarchy in the human brain listening to speech" — *Nature Human Behaviour* | 254 cites | [S2](https://www.semanticscholar.org/paper/66c286df54551baba7351a1ed44019367e5aa7ea)
6. **Goldstein, Zada et al. (2022)** — "Shared computational principles for language processing in humans and deep language models" — *Nature Neuroscience* | 438 cites | [S2](https://www.semanticscholar.org/paper/b4206dd288958affeb314aee0ec1397de5c74c23)
7. **Tuckute, Sathe, Srikant et al. (2024)** — "Driving and suppressing the human language network using large language models" — 30 cites | [S2](https://www.semanticscholar.org/paper/5e1456b25e260951bed9c387932304dd054acc0a)

### Audition
8. **Li, Anumanchipalli, Mohamed et al. (2023)** — "Dissecting neural computations in the human auditory pathway using deep neural networks for speech" — *Nature Neuroscience* | 44 cites | [S2](https://www.semanticscholar.org/paper/9095d9a3be7f11fd73a2f4c6b561d3387cbdf6a6)
9. **Défossez, Caucheteux, Rapin, Kabeli & King (2023)** — "Decoding speech perception from non-invasive brain recordings" — *Nature Machine Intelligence* | 215 cites | [S2](https://www.semanticscholar.org/paper/e52479dc9f0f52f65222ff7ca86d9f59c2e6d12f)

### Foundation Models
10. **Azabou, Arora et al. (2023)** — "A unified, scalable framework for neural population decoding" — 86 cites | [S2](https://www.semanticscholar.org/paper/b1cab4d3ed28cc66b733de017cf16c58bf0c2707)
11. **Ding et al. (2025)** — "A foundation model of the mouse visual cortex" — 57 cites | [S2](https://www.semanticscholar.org/paper/1246b589f66c0e0b47870f301fd013784a4def66)

---

## PART C: Extended Reading & Enrichment

Papers for deeper exploration, potential future assignments, or lecture enrichment.

### C1. Convergent Evolution (Counter-argument to divergence)

**Shen, Zhao, Dong, Zhang & Zeng (2025)**
"Alignment between Brains and AI: Evidence for Convergent Evolution across Modalities, Scales and Training Trajectories"
3 citations | [S2](https://www.semanticscholar.org/paper/e99aa4839b180c1f406b21e83662800fb37a59b5)
> 600+ AI models (language + vision). Language models show stronger brain correlation (r=0.89) than vision (r=0.53). Brain alignment precedes performance improvements. **Interesting counterpoint — suggests divergence may be vision-specific.**

### C2. Advanced Methods

**Saha, He & Khosla (2026)**
"Barycentric alignment for instance-level comparison of neural representations"
[S2](https://www.semanticscholar.org/paper/dae3983be689774b6cd344e9e839877c7c61cfe5)
> Novel method for instance-level comparison across neural networks and brains. Universal embedding spaces.

**Sarch, Tarr, Fragkiadaki & Wehbe (2023)**
"Brain Dissection: fMRI-trained networks reveal spatial selectivity in natural images"
*bioRxiv* | 14 cites | [S2](https://www.semanticscholar.org/paper/c8aed4c98a830e6e20cb28c3743a8d97c8f2fee7)
> Trains networks from scratch to predict brain responses, then uses network dissection for explainability. Addresses "trading one black box for another."

**Margalit, Lee, Finzi, DiCarlo, Grill-Spector & Yamins (2024)**
"A unifying framework for functional organization in early and higher ventral visual cortex"
*Neuron* | 58 cites | [S2](https://www.semanticscholar.org/paper/c23f4a78d777527956e7d3a893bf0bf8c79ec3cf)
> Topographic Deep ANN (TDANN) — first model to predict functional organization of multiple cortical areas.

### C3. Cross-Modal & Multimodal

**Chen, Liu, Wang et al. (2025)**
"Language modulates vision: Evidence from neural networks and human brain-lesion models"
4 cites | [S2](https://www.semanticscholar.org/paper/62a34a7f6108f6d62f29a369be2f04b8a11568dc)
> CLIP captures unique variance in VOTC vs. vision-only models. Left-lateralized. Stroke data shows reduced connectivity → reduced CLIP-brain correspondence. **Combines DNN-brain comparison with causal lesion data (addresses Doerig's intervention desideratum).**

### C4. Dynamic / Temporal

**Turishcheva et al. (2023)**
"The Dynamic Sensorium competition for predicting large-scale mouse visual cortex activity from videos"
25 cites | [S2](https://www.semanticscholar.org/paper/ed753ecbb4f326d39d0a3614696832bec7a47586)
> Benchmark for video-based neural prediction. 78,000+ neurons, 2+ hours of video.

### C5. Biologically Inspired Architectures

**Muzellec, Alamia, Serre & Van Rullen (2025)**
"Enhancing deep neural networks through complex-valued representations and Kuramoto synchronization dynamics"
*TMLR* | 1 cite | [S2](https://www.semanticscholar.org/paper/f15fa78bc0722b1cb1ab298e4c723981d49b6864)
> **Serre lab.** Complex-valued representations + Kuramoto dynamics for phase-based object binding.

### C6. Texture vs. Shape (Supports divergence argument)

**Loke, Soerensen, Groen, Cappaert & Scholte (2025)**
"Shared texture-like representations, not global form, underlie deep neural network alignment with human visual processing"
*bioRxiv* | 0 cites | [S2](https://www.semanticscholar.org/paper/4e7ceba19ae8d7040b9150e3f26d9ce598ae0cb2)
> DNN-human alignment is driven by texture-like features, not global form.

### C7. Encoding Surveys

**Oota, Gupta et al. (2023)**
"Deep neural networks and brain alignment: Brain encoding and decoding (Survey)"
*TMLR* | 27 cites | [S2](https://www.semanticscholar.org/paper/ea018112b3ba92beabaab67ae7f7d70ac6b375af)
> Comprehensive survey of encoding/decoding across vision, language, speech.

---

## Summary Statistics

| Category | Count | Key Papers |
|----------|-------|-----------|
| Foundational methods (A1-A2) | 4 | Naselaris 2011, Kriegeskorte 2008, K&D 2018, RSA Toolbox |
| Core results (A3) | 4 | Yamins 2014, Khaligh-Razavi 2014, Cadieu 2014, Güçlü 2015 |
| Brain-Score (A4) | 2 | Schrimpf 2018, CORnet-S 2019 |
| Recurrence & Control (A5) | 2 | Kar 2019, Bashivan 2019 |
| Framework (A6) | 1 | Doerig 2023 |
| Divergence (A7) | 3 | Fel 2022, Linsley 2023, Linsley 2025 |
| Lightning talks (B) | 11 | Across vision, language, audition, foundation models |
| Extended (C) | 7 | Shen 2025, Margalit 2024, Chen 2025, etc. |
| **Total unique papers** | **~30** | |

## Suggested Lecture Arc for 3/10

1. **Motivation** — Why compare DNNs and brains? (Kriegeskorte & Douglas 2018)
2. **Methods primer** — Encoding models (Naselaris 2011), RSA (Kriegeskorte 2008), Brain-Score (Schrimpf 2018)
3. **The breakthrough** — DNNs predict V4/IT (Yamins 2014, Cadieu 2014, Güçlü 2015)
4. **The complexity gradient** — Layer-to-region mapping (Güçlü 2015, Khaligh-Razavi 2014)
5. **Beyond prediction** — Recurrence (Kar 2019), neural control (Bashivan 2019)
6. **Criteria for explanation** — Doerig's six desiderata (Doerig 2023)
7. **The inflection point** — The divergence problem (Linsley 2025, Fel 2022)
8. **Preview of lightning talks** — Extending to language, audition, foundation models
