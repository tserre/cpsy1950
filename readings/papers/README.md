# Course Papers - PDF Library

This directory contains PDF files of papers used in the course.

## 📁 Organization

```
papers/
├── week01/          # Week 1 papers
├── week02/          # Week 2 papers (bootcamp)
├── week03/          # Week 3 papers (SSL/objectives)
├── week04/          # Week 4 papers (scaling)
├── week05/          # Week 5 papers (Prediction vs understanding)
├── week06/          # Week 6 papers (Rep. interpretability)
├── week07/          # Week 7 papers (Mech. interpretability)
├── week08/          # Week 8 papers (Neural alignment)
├── week09/          # Week 9 papers (Behavioral/cognitive alignment)
├── week10-15/       # Later weeks
├── classics/        # Classic/foundational papers
└── optional/        # Optional reading materials
```

## 📝 Naming Convention

**Format:** `FirstAuthorYear-ShortTitle.pdf`

**Examples:**
- `Doerig2023-Neuroconnectionist.pdf`
- `Chen2020-SimCLR.pdf`
- `He2022-MAE.pdf`
- `Krizhevsky2012-ImageNet.pdf`

## 🔄 How PDFs Get Added

**Collaborative workflow with AI assistant:**

1. You tell me: "Add paper X to Week Y"
2. I download PDF from arXiv or source
3. I add to appropriate week folder
4. I update `readings.yml` with:
   - Official journal link
   - arXiv link (if available)
   - PDF download link: `/cpsy1950/papers/filename.pdf`
5. I sync to website

**Students see:**
- 🔗 Journal link (official source)
- 📑 arXiv link (open access)
- 📄 PDF download (direct access, no paywall)

## 📦 Current Status

### Week 02 (Bootcamp) - Ready
- Doerig2023-Neuroconnectionist.pdf
- Cichy2019-DeepNeuralNetworks.pdf

### Week 03-09 - To Be Added
Paper pools will be added as you curate them.

## 💾 Storage Guidelines

- ✅ Keep PDFs under 10MB when possible (compress if needed)
- ✅ Use institutional access for downloading
- ✅ Prefer open access / arXiv versions
- ✅ Always include both official link AND PDF
- ⚠️ Files >50MB: Consider using Git LFS

## 🔍 Finding PDFs

**Priority sources:**
1. arXiv (open access)
2. OpenReview (open access)
3. Conference open access (CVPR, ICCV, etc.)
4. Journal via institutional access
5. Author's website

## 📊 Website Display

Each paper shows all available links:

```
Paper Title
Authors • Journal • Year

🔗 Official Paper | 📄 PDF Download | 📑 arXiv
```

Students can choose:
- Read on journal site (with access)
- Download PDF directly (always available)
- Check arXiv version (preprint)

## 🎓 Copyright & Fair Use

**Educational Use:**
- Course materials fall under fair use
- PDFs for enrolled students only
- Not publicly distributed beyond course site

**Best Practices:**
- Always cite original source
- Provide official links
- Use institutional access for downloads
- Respect publisher policies

## 🔧 Management Commands

```bash
# View all PDFs
ls -lR ~/Projects/cpsy1950/readings/papers/

# Check total size
du -sh ~/Projects/cpsy1950/readings/papers/

# Find a specific paper
find readings/papers/ -name "*SimCLR*"

# Sync to website
make sync
```

## 📚 Adding Papers Manually

If you have a PDF:
```bash
# Copy to appropriate week
cp ~/Downloads/paper.pdf readings/papers/week03/AuthorYear-Title.pdf

# Then ask AI assistant to update YAML files
```

## ✨ Collaborative Workflow

**You focus on:** What papers you want  
**AI assistant handles:** Downloading, organizing, YAML updates, syncing

Just say: "Add [paper] to Week [N]" and everything else is automatic! 🚀

