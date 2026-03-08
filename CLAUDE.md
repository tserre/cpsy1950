# CPSY 1950 — Deep Learning in Brains, Minds & Machines

## Course Basics
- **Course:** CPSY 1950 — Deep Learning in Brains, Minds & Machines (Brown University, Spring 2026)
- **Instructor:** Thomas Serre — Professor, Cognitive & Psychological Sciences and Computer Science
- **Email:** thomas_serre@brown.edu
- **Course website:** https://tserre.github.io/cpsy1950
- **Schedule:** TTh 2:30–3:50 pm, Friedman Hall 108
- **Office hours:** Wednesdays 1:00–2:00 pm, Carney Innovation Hub (Room 402)
- **Communication:** Ed Discussion
- **This repo:** Course materials — rubrics, presentations, diagrams, internal docs

## Schedule & Syllabus

The canonical sources live in the website repo (`~/Projects/personal/web/tserre.github.io/cpsy1950/`). Local copies are kept in `website/` (gitignored) and refreshed via `make sync-website`.

**When you need schedule or syllabus details, read these files:**
- `website/index.md` — full weekly schedule with readings, links, due dates, lightning talk info
- `website/syllabus.md` — official syllabus (grading, policies, course description, objectives)

If files seem stale or missing, run `make sync-website` to pull the latest from the website source repo.

---

## Course Description

A seminar exploring NeuroAI — the joint study of artificial and biological intelligence. Covers modern foundation models (training objectives, scaling, emergent capabilities), explainability/interpretability (XAI), and neural + behavioral alignment between DNNs and the brain. Emphasizes two-way interactions: AI methods informing neuroscience hypotheses, and neuroscience guiding novel architectures and evaluations.

**Audience:** Advanced undergrad and graduate students from computational and/or biological sciences.

---

## Course Format

- **Tuesdays (80 min):** Instructor lecture introducing the week's theme
- **Thursdays (80 min):** Student lightning talks (~12 presentations, 4–5 min each) + synthesis/discussion
- **After spring break:** Project studio → poster mini-conference → guest lectures

### Student Activities Each Week
1. **Background reading** (1–2 papers) — completed before Tuesday lecture
2. **Reading response** — short written response, due **Tuesday 2:00 pm** (before lecture)
3. **Lightning talk prep** — each student presents 3 times over the semester in rotating groups of 3
4. **Reflection paper** — post-Thursday follow-up connecting lecture + lightning talks, due **Sunday 2:00 pm**
5. **In-class reading checks** — brief quizzes on key paper details

### Grading
- Weekly work (readings, responses, follow-ups): 40%
- Lightning talks: 20%
- Participation (in-class + Ed): 20%
- Final exam: 20%

---

## Weekly Topic Overview

| Week | Topic |
|------|-------|
| W1 | Course kickoff |
| W2 | Foundations (async bootcamp) |
| W3 | The three levers of deep learning |
| W4 | Scaling and emerging capabilities |
| W5 | Prediction vs Understanding |
| W6 | Representation-level interpretability |
| W7 | Mechanistic interpretability |
| W8 | Neural alignment |
| W9 | Behavioral and cognitive alignment |
| W10 | Spring Break |
| W11 | Project studio |
| W12 | Project poster mini-conference |
| W13–14 | Guest lectures |
| Final | Exam (Tue May 12, 9:00 am) |

For full details (readings, due dates, links, guest speakers), read `website/index.md`.

---

## Key Course Themes
1. Computational models of biological vision
2. Deep learning as models of the brain
3. Prediction vs. understanding debate
4. Performance vs. competence (Firestone)
5. Interpretability — representation-level and mechanistic
6. Neural alignment (encoding models, RSA, Brain-Score)
7. The divergence between AI performance and biological alignment
8. NeuroAI as a two-way street (AI ↔ neuroscience)

---

## Repo Structure
- `website/` — local copies of schedule + syllabus from website repo. **Gitignored. Refresh with `make sync-website`.**
- `presentations/` — Lecture slide decks (.pptx), per-week diagrams, support files
  - **Convention:** All slide decks and related assets go here, not the repo root
- `rubrics/` — Rubric and sample files (`W{N}_*_Rubric_and_Samples.md`)
  - **Convention:** New rubric/samples files go here, not the repo root
- `papers/week{N}/` — PDFs and URL lists per week
- `figures/week{N}/` — Extracted figures (PNG + captions)
- `internal/` — Internal TA documents
- `cpsy1950_template.pptx` — Slide deck template
- `Lightning_Talk_Papers.md` — Weekly reading lists with corrected citations and Brown RevProxy links
- `Makefile` — Build automation (commit helpers, Jekyll serve)

## Preferred Workflows
- **Figure extraction:** use `figure-extractor` skill
- **Literature search:** use `literature-search` skill
- **Slide generation:** use `pptx` skill — one figure per slide, dark theme

## Paper & Figure Notes
- Most papers are arXiv or NeurIPS/ICLR proceedings
- Zoom 3.0 is fine for most PDFs; use 4.0 for older papers
- Skip supplementary figures unless explicitly requested

## Standing Tasks
- **After each week's lightning talks are finalized:** Copy the paper list for that week into `Lightning_Talk_Papers.md` with verified references and Brown RevProxy links. Source data is in the [Google Sheet](https://docs.google.com/spreadsheets/d/1Nv2y51NqKJzXxe488ezqavaG_AAvHLC3HE9NpR6yWWw). Verify author lists against Semantic Scholar before adding.

## Instructor's Own Papers (relevant to course)
- **Serre & Pavlick (2025)** — "From Prediction to Understanding" — *Neuron* — W5 reading
- **Linsley, Feng & Serre (2025)** — "Better artificial intelligence does not mean better models of biology" — *Trends in Cognitive Sciences* — W8 reflection
- **Linsley et al. (2023)** — "Performance-optimized DNNs are evolving into worse models of inferotemporal visual cortex" — *NeurIPS*
- **Fel, Felipe, Linsley & Serre (2022)** — "Harmonizing the object recognition strategies of DNNs with humans" — *NeurIPS*
- **Muzellec, Alamia, Serre & Van Rullen (2025)** — "Enhancing DNNs through complex-valued representations and Kuramoto synchronization" — *TMLR*

## Semantic Scholar API
- API key configured — use for literature searches related to course topics
