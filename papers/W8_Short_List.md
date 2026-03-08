# W8 — Short List: 18 Key Papers for Lecture

**Lecture:** Tue 3/10 — Neural Alignment: Comparing DNNs to Brain Activity
**Purpose:** Figure-first lecture slides; broad overview for mixed CS/neuro audience

---

## 1. WHY COMPARE DNNs AND BRAINS? (Motivation & Framework)

### 1. Kriegeskorte & Douglas (2018) ⭐ Assigned Reading
"Cognitive computational neuroscience"
*Nature Neuroscience*, 21, 1148-1160
DOI: https://doi.org/10.1038/s41593-018-0210-5
Brown: https://www-nature-com.revproxy.brown.edu/articles/s41593-018-0210-5
> The roadmap paper. Synthesizes encoding, RSA, and decoding into a unified framework.

### 2. Doerig, Sommers, Seeliger et al. (2023) ⭐ Assigned Reading
"The neuroconnectionist research programme"
*Nature Reviews Neuroscience*, 24, 431-450
DOI: https://doi.org/10.1038/s41583-023-00705-w
Brown: https://www-nature-com.revproxy.brown.edu/articles/s41583-023-00705-w
> Six desiderata for good ANN-brain models.

---

## 2. NEURAL DATA TYPES & TRADE-OFFS

### 3. Logothetis (2008)
"What we can do and what we cannot do with fMRI"
*Nature*, 453, 869-878
DOI: https://doi.org/10.1038/nature06976
Brown: https://www-nature-com.revproxy.brown.edu/articles/nature06976
> Classic review of fMRI capabilities/limitations. BOLD signal, spatial/temporal resolution trade-offs.

### 4. Cichy, Pantazis & Oliva (2014)
"Resolving human object recognition in space and time"
*Nature Neuroscience*, 17, 455-462
DOI: https://doi.org/10.1038/nn.3635
Brown: https://www-nature-com.revproxy.brown.edu/articles/nn.3635
> Pioneering MEG+fMRI fusion through RSA. Beautiful spatiotemporal dynamics figures.

### 5. Allen et al. (2022) — Natural Scenes Dataset
"A massive 7T fMRI dataset to bridge cognitive neuroscience and artificial intelligence"
*Nature Neuroscience*, 25, 116-126
DOI: https://doi.org/10.1038/s41593-021-00962-x
Brown: https://www-nature-com.revproxy.brown.edu/articles/s41593-021-00962-x
> The largest fMRI vision dataset. De facto standard for fMRI-based alignment. Noise ceilings.

---

## 3. METHODS PRIMER: Encoding, RSA, Brain-Score

### 6. Naselaris, Kay, Nishimoto & Gallant (2011)
"Encoding and decoding in fMRI"
*NeuroImage*, 56(2), 400-410
DOI: https://doi.org/10.1016/j.neuroimage.2010.07.073
> The definitive tutorial on encoding vs. decoding. Linearized encoding model framework.

### 7. Kriegeskorte, Mur & Bandettini (2008)
"Representational similarity analysis — connecting the branches of systems neuroscience"
*Frontiers in Systems Neuroscience*, 2, 4
DOI: https://doi.org/10.3389/neuro.06.004.2008
> The original RSA paper. RDMs as a common language for cross-modal, cross-species comparison.

### 8. Schrimpf, Kubilius, Hong et al. (2018/2020) ⭐ Lightning Talk #2
"Brain-Score: Which artificial neural network for object recognition is most Brain-Like?"
*Neuron*
DOI: https://doi.org/10.1101/407007
Brown: https://www-cell-com.revproxy.brown.edu/neuron/fulltext/S0896-6273(20)30605-X
> Brain-Score benchmark. Composite neural + behavioral metrics. Noise-ceiling normalization.

### 9. Nili, Wingfield, Walther et al. (2014)
"A toolbox for representational similarity analysis"
*PLoS Computational Biology*, 10(4), e1003553
DOI: https://doi.org/10.1371/journal.pcbi.1003553
> Practical RSA methods: permutation tests, bootstrap, noise ceiling estimation, Spearman-Brown.

---

## 4. THE BREAKTHROUGH: DNNs Predict Visual Cortex

### 10. Yamins, Hong, Cadieu et al. (2014) ⭐ Lightning Talk #1
"Performance-optimized hierarchical models predict neural responses in higher visual cortex"
*PNAS*, 111(23), 8619-8624
DOI: https://doi.org/10.1073/pnas.1403112111
Brown: https://www-pnas-org.revproxy.brown.edu/doi/10.1073/pnas.1403112111
> The paper that launched the field. Task-optimized DNNs predict V4/IT neurons.

### 11. Güçlü & van Gerven (2015)
"Deep neural networks reveal a gradient in the complexity of neural representations across the ventral stream"
*Journal of Neuroscience*, 35(27), 10005-10014
DOI: https://doi.org/10.1523/JNEUROSCI.5023-14.2015
> Maps DNN layers to brain regions: early layers → V1, deeper → IT. The complexity gradient.

---

## 5. BEYOND VISION: Language & Auditory

### 12. Schrimpf, Blank, Tuckute et al. (2021) ⭐ Lightning Talk #4
"The neural architecture of language: Integrative modeling converges on predictive processing"
*PNAS*, 118(45), e2105646118
DOI: https://doi.org/10.1073/pnas.2105646118
Brown: https://www-pnas-org.revproxy.brown.edu/doi/10.1073/pnas.2105646118
> Transformer models predict language cortex best. Predictive processing as organizing principle.

### 13. Kell, Yamins, Shook et al. (2018)
"A task-optimized neural network replicates human auditory behavior, predicts brain responses, and reveals a cortical processing hierarchy"
*Neuron*, 98(3), 630-644
DOI: https://doi.org/10.1016/j.neuron.2018.03.044
Brown: https://www-cell-com.revproxy.brown.edu/neuron/fulltext/S0896-6273(18)30250-2
> Extends the Yamins/DiCarlo approach to audition.

---

## 6. DECODING: Brain → Model

### 14. Takagi & Nishimoto (2023)
"High-resolution image reconstruction with latent diffusion models from human brain activity"
*CVPR 2023*
URL: https://arxiv.org/abs/2306.11536
> fMRI → images via Stable Diffusion. Landmark brain-to-image reconstruction.

### 15. Tang, LeBel, Jain & Huth (2023)
"Semantic reconstruction of continuous language from non-invasive brain recordings"
*Nature Neuroscience*, 26, 858-866
DOI: https://doi.org/10.1038/s41593-023-01304-9
Brown: https://www-nature-com.revproxy.brown.edu/articles/s41593-023-01304-9
> fMRI → continuous text using GPT-based decoder.

---

## 7. LIMITATIONS & THE DIVERGENCE PROBLEM (Lecture Climax)

### 16. Linsley, Feng & Serre (2025) ⭐ Reflection Paper
"Better artificial intelligence does not mean better models of biology"
*Trends in Cognitive Sciences*
Brown: https://www-sciencedirect-com.revproxy.brown.edu/science/article/pii/S1364661325003493
> Beyond ~70% ImageNet accuracy, models become worse brain models.

### 17. Jonas & Kording (2017)
"Could a neuroscientist understand a microprocessor?"
*PLoS Computational Biology*, 13(1), e1005268
DOI: https://doi.org/10.1371/journal.pcbi.1005268
> Applies neuroscience methods to a microprocessor. Correlations everywhere but no understanding.

### 18. Storrs, Kietzmann, Walther et al. (2021) ⭐ Lightning Talk #3
"Diverse deep neural networks all predict human IT cortex well, after training and fitting"
*Journal of Cognitive Neuroscience*, 33(10), 2044-2064
DOI: https://doi.org/10.1162/jocn_a_01755
Brown: https://direct-mit-edu.revproxy.brown.edu/jocn/article/33/10/2044/97402
> After linear reweighting, many diverse architectures fit IT equally well. Is neural predictivity diagnostic?
