# W8 Slide Generation Workflow

## Overview

This documents the workflow for generating `W8_Neural_Alignment_Figures.pptx` — a figure-first lecture deck for Week 8 (Neural Alignment: Comparing DNNs to Brain Activity).

**Output:** 105 slides (1 title + 7 section dividers + 97 figure slides)
**Template:** `cpsy1950_template.pptx`
**Figures:** `figures/week8/<paper_dir>/fig_NN.png`

---

## Step 1: Paper List

Source: `papers/W8_Short_List.md` — 18 papers organized into 7 thematic sections.

## Step 2: Figure Extraction

For each paper, download figures using the best available source:

| Tier | Source | Papers |
|------|--------|--------|
| **Publisher CDN** | Elsevier `_lrg.jpg`, SpringerNature `/full/` | Kriegeskorte 2018, Doerig 2023, Logothetis 2008, Cichy 2014, Allen 2022, Naselaris 2011, Kell 2018, Linsley 2025 |
| **arXiv source** | Original author files from LaTeX tarball | Takagi 2023 |
| **PDF render** | Full-page render at 4-5x zoom | Kriegeskorte 2008 RSA, Nili 2014, Yamins 2014, Güçlü 2015, Schrimpf 2020, Schrimpf 2021, Jonas 2017, Storrs 2021, Tang 2023 |

### Publisher CDN Patterns

**Elsevier / Cell Press** (NeuroImage, Neuron, TiCS):
```
https://ars.els-cdn.com/content/image/1-s2.0-{PII}-gr{N}_lrg.jpg
```

**SpringerNature** (Nature, Nature Neurosci, Nature Rev Neurosci):
```
https://media.springernature.com/full/springer-static/image/art%3A{encoded_doi}/MediaObjects/{id}_Fig{N}_HTML.png
```
Scrape figure URLs from `https://www.nature.com/articles/{id}/figures/{N}`.

### Naming Convention
```
figures/week8/<first_author>_<year>/
  fig_01.png          # Full figure (no pre-cropping)
  fig_01_caption.txt  # Caption text from paper
  fig_02.png
  ...
```

## Step 3: Caption Extraction

Extract captions from PDFs using PyMuPDF text search for "Figure N" / "Fig. N" patterns. Save as `fig_NN_caption.txt` alongside each figure.

## Step 4: Slide Generation

Uses `python-pptx` with the course template.

### Template Layouts (0-indexed)
- **Layout 1 (CPSY_TITLE):** PH 100 = title block, PH 101 = subtitle
- **Layout 2 (CPSY_SECTION):** PH 101 = section title, PH 102 = subtitle — DO NOT override fonts
- **Layout 3 (CPSY_CONTENT):** PH 100 = title, PH 101 = picture (type 18), PH 102 = citation

### Key Positions (from template slides)
| Placeholder | Position | Size |
|-------------|----------|------|
| CPSY_TITLE PH 100 | (0.00", 0.04") | 10.00" × 4.22" |
| CPSY_TITLE PH 101 | (1.00", 4.35") | 8.00" × 0.90" |
| CPSY_CONTENT PH 100 (title) | (0.00", 0.154") | 10.00" × 0.747" |
| CPSY_CONTENT figure area | (0.34", 1.30") | 9.32" × 3.60" |
| CPSY_CONTENT PH 102 (citation) | (0.00", 5.285") | 10.00" × 0.335" |

### Image Insertion Strategy

**DO NOT use `insert_picture()` on the picture placeholder** — it center-crops to fill, which cuts off content when the figure aspect ratio doesn't match the placeholder.

Instead:
1. Remove PH 101 (picture placeholder) from the slide XML
2. Add the image as a regular shape via `slide.shapes.add_picture()`
3. Scale to fit within the placeholder bounds while preserving aspect ratio
4. Center the image in the available area

### Citation Format
```
Authors  Journal Year
```
- "Authors " in Zilla Slab Light 12pt regular gray (#334155)
- "Journal Year" in Zilla Slab Light 12pt **bold italic** gray (#334155)
- ≤3 authors: "A & B" or "A, B & C"; >3: "First et al."

### Speaker Notes
Captions are added as speaker notes via XML injection (the template's notes slide has no default body placeholder):
```xml
<p:sp>
  <p:nvSpPr>
    <p:cNvPr id="3" name="Notes Placeholder 2"/>
    <p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr>
    <p:nvPr><p:ph type="body" idx="1"/></p:nvPr>
  </p:nvSpPr>
  <p:spPr/>
  <p:txBody>
    <a:bodyPr/><a:lstStyle/>
    <a:p><a:r><a:t>{caption}</a:t></a:r></a:p>
  </p:txBody>
</p:sp>
```

### Template Cleanup
The template contains 3 example slides that MUST be removed before adding content:
```python
while len(prs.slides) > 0:
    rId = prs.slides._sldIdLst[0].get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id')
    prs.part.drop_rel(rId)
    prs.slides._sldIdLst.remove(prs.slides._sldIdLst[0])
```

## Step 5: Quality Check

- Flag figures < 1500px wide as low-resolution
- Verify slide count matches expected (105)
- Verify captions in notes (97/97)
- Open in PowerPoint to spot-check figure visibility and citation formatting

## Deck Structure

| Section | Papers | Slides |
|---------|--------|--------|
| Title | — | 1 |
| Why Compare DNNs and Brains? | Kriegeskorte & Douglas 2018, Doerig et al. 2023 | 1 + 8 |
| Neural Data Types & Trade-offs | Logothetis 2008, Cichy et al. 2014, Allen et al. 2022 | 1 + 15 |
| Methods Primer | Naselaris et al. 2011, Kriegeskorte et al. 2008, Schrimpf et al. 2020, Nili et al. 2014 | 1 + 19 |
| The Breakthrough | Yamins et al. 2014, Güçlü & van Gerven 2015 | 1 + 10 |
| Beyond Vision | Schrimpf et al. 2021, Kell et al. 2018 | 1 + 13 |
| Decoding: Brain → Model | Takagi & Nishimoto 2023, Tang et al. 2023 | 1 + 7 |
| Limitations & Divergence | Linsley et al. 2025, Jonas & Kording 2017, Storrs et al. 2021 | 1 + 25 |
| **Total** | **18 papers** | **105** |

## Known Issues

- Logothetis 2008 figures are natively low-res from Nature CDN (~800px) — old paper
- Some PDF-rendered figures (Jonas 2017, Storrs 2021) are below 1500px
- The `fig_04.png` in kriegeskorte_2018 is a Box figure (not numbered) — excluded from deck
- Schrimpf 2020 has only 2 real figures (fig_03 was a table) — excluded
