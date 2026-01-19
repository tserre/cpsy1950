# Collaborative Workflow Guide

## 🤝 How We'll Work Together

### Your Role
Tell me what you want:
- "Add these 3 papers to Week 3"
- "Update the schedule for guest lecture"
- "Add this video to bootcamp materials"

### My Role
I'll automatically:
1. ✅ Update `COURSE_OUTLINE.md` with your content
2. ✅ Update corresponding YAML files (`readings.yml`, `videos.yml`, etc.)
3. ✅ Help you get/organize PDFs
4. ✅ Add both official links AND PDF download links
5. ✅ Sync everything to the website

## 📄 PDF Management System

### Directory Structure
```
readings/papers/
├── week01/          # Week 1 papers
├── week02/          # Week 2 papers (bootcamp)
├── week03/          # Week 3 papers
├── ...
├── week15/          # Week 15 papers
├── classics/        # Classic/foundational papers
└── optional/        # Optional reading materials
```

### Naming Convention
```
AuthorYear-ShortTitle.pdf

Examples:
- Doerig2023-Neuroconnectionist.pdf
- Chen2020-SimCLR.pdf
- He2022-MAE.pdf
```

### Where PDFs Live

**Main Repository:**
```
~/Projects/cpsy1950/readings/papers/week03/Chen2020-SimCLR.pdf
```

**Website (auto-synced):**
```
https://tserre.github.io/cpsy1950/papers/Chen2020-SimCLR.pdf
```

## 📝 Example: You Want to Add Papers

### You Say:
> "Add these papers to Week 3 (Learning Objectives):
> 
> 1. SimCLR (Chen et al., ICML 2020) - https://arxiv.org/abs/2002.05709
> 2. MAE (He et al., CVPR 2022) - https://arxiv.org/abs/2111.06377
> 3. MoCo v3 (Chen et al., ICCV 2021) - https://arxiv.org/abs/2104.02057"

### I Do:

**1. Update COURSE_OUTLINE.md:**
```markdown
## Week 3 — Modern Capabilities: Objectives

**Papers:**
- Chen et al. (2020). "SimCLR: A Simple Framework for Contrastive Learning" 
  - ICML 2020
  - arXiv: https://arxiv.org/abs/2002.05709
  
- He et al. (2022). "Masked Autoencoders Are Scalable Vision Learners"
  - CVPR 2022
  - arXiv: https://arxiv.org/abs/2111.06377
  
- Chen et al. (2021). "An Empirical Study of Training Self-Supervised Vision Transformers"
  - ICCV 2021
  - arXiv: https://arxiv.org/abs/2104.02057
```

**2. Update readings/readings.yml:**
```yaml
- week: 3
  topic: "Modern Capabilities: Learning Objectives"
  description: "Self-supervised learning approaches"
  published: true  # Ready for students
  papers:
    - title: "SimCLR: A Simple Framework for Contrastive Learning"
      authors: "Chen, T., Kornblith, S., Norouzi, M., & Hinton, G."
      journal: "ICML"
      year: 2020
      url: "https://proceedings.mlr.press/v119/chen20j.html"
      arxiv: "https://arxiv.org/abs/2002.05709"
      pdf: "/cpsy1950/papers/Chen2020-SimCLR.pdf"
      published: true
      
    - title: "Masked Autoencoders Are Scalable Vision Learners"
      authors: "He, K., Chen, X., Xie, S., et al."
      journal: "CVPR"
      year: 2022
      url: "https://openaccess.thecvf.com/content/CVPR2022/html/He_Masked_Autoencoders_Are_Scalable_Vision_Learners_CVPR_2022_paper.html"
      arxiv: "https://arxiv.org/abs/2111.06377"
      pdf: "/cpsy1950/papers/He2022-MAE.pdf"
      published: true
      
    - title: "An Empirical Study of Training Self-Supervised Vision Transformers"
      authors: "Chen, X., Xie, S., & He, K."
      journal: "ICCV"
      year: 2021
      url: "https://openaccess.thecvf.com/content/ICCV2021/html/Chen_An_Empirical_Study_of_Training_Self-Supervised_Vision_Transformers_ICCV_2021_paper.html"
      arxiv: "https://arxiv.org/abs/2104.02057"
      pdf: "/cpsy1950/papers/Chen2021-MoCoV3.pdf"
      published: true
```

**3. Help Get PDFs:**
```bash
# I'll run commands like:
cd ~/Projects/cpsy1950/readings/papers/week03

# Download from arXiv
curl -L https://arxiv.org/pdf/2002.05709 -o Chen2020-SimCLR.pdf
curl -L https://arxiv.org/pdf/2111.06377 -o He2022-MAE.pdf
curl -L https://arxiv.org/pdf/2104.02057 -o Chen2021-MoCoV3.pdf
```

**4. Sync & Commit:**
```bash
make full-update MSG="Add Week 3 papers: SimCLR, MAE, MoCo v3"
```

### Website Shows:
```
Week 3: Modern Capabilities: Learning Objectives

• SimCLR: A Simple Framework for Contrastive Learning
  Chen, T., Kornblith, S., Norouzi, M., & Hinton, G.
  ICML • 2020
  🔗 Journal | 📄 PDF | 📑 arXiv
```

## 🎬 Example Session

**You:**
> "Add the Doerig neuroconnectionist paper to Week 2. Get the PDF from arXiv."

**Me:**
```bash
# 1. Check if paper exists
# 2. Download PDF
cd ~/Projects/cpsy1950/readings/papers/week02
curl -L https://arxiv.org/pdf/2209.03718 -o Doerig2023-Neuroconnectionist.pdf

# 3. Update readings.yml with both links:
#    - url: journal link
#    - arxiv: arxiv link  
#    - pdf: /cpsy1950/papers/Doerig2023-Neuroconnectionist.pdf

# 4. Sync & commit
make full-update MSG="Add Doerig2023 paper with PDF"
```

**Result:**
- PDF stored: `~/Projects/cpsy1950/readings/papers/week02/Doerig2023-Neuroconnectionist.pdf`
- Website shows: Links to journal, arXiv, AND PDF download
- Students can download without journal access

## 📚 Managing Your PDF Library

### Adding PDFs Manually
```bash
# If you have a PDF locally:
cp ~/Downloads/paper.pdf ~/Projects/cpsy1950/readings/papers/week03/AuthorYear-Title.pdf

# Then tell me to add it to the YAML files
```

### Organizing PDFs
```bash
# View all PDFs
ls -lh ~/Projects/cpsy1950/readings/papers/week*/

# Check total size
du -sh ~/Projects/cpsy1950/readings/papers/

# Search for a paper
find ~/Projects/cpsy1950/readings/papers/ -name "*SimCLR*"
```

### PDF Best Practices
- ✅ Keep PDFs under 10MB when possible
- ✅ Use consistent naming: `AuthorYear-ShortTitle.pdf`
- ✅ Store in appropriate week folder
- ✅ Always provide official link + PDF link
- ⚠️ Large files (>50MB): Consider using Git LFS

## 🔄 Week-by-Week Content Addition

### Typical Weekly Flow

**Monday (You):**
> "I want to add these 5 papers to Week 4..."

**Monday (Me):**
- Update COURSE_OUTLINE.md
- Update readings.yml
- Download PDFs from arXiv/sources
- Set `published: false` (draft mode)
- Commit: "Add Week 4 paper pool (draft)"

**Wednesday (You):**
> "Looks good, publish Week 4"

**Wednesday (Me):**
- Set `published: true` in readings.yml
- Update schedule.yml `finalized: true`
- Commit: "Publish Week 4 paper pool"
- Students see it immediately

## 🎯 Quick Commands for Common Tasks

### You Say → I Do

| You Say | What I Do |
|---------|-----------|
| "Add paper X to Week Y" | Update outline + YAML + get PDF |
| "Update schedule for date Z" | Update schedule.yml |
| "Add video link" | Update videos.yml |
| "Change course description" | Update index.md on website |
| "Publish Week N" | Set published: true, sync |
| "Get PDF for paper X" | Download and organize |

## 📋 Template for You

When adding papers, give me:
```
Week: [number]
Papers:
1. [Full citation or title]
   - Link: [URL]
   - Notes: [any notes]

2. [Full citation or title]
   - Link: [URL]
   - Notes: [any notes]
```

I'll handle:
- ✅ Formatting citations properly
- ✅ Finding official journal links
- ✅ Getting arXiv links
- ✅ Downloading PDFs
- ✅ Updating all YAML files
- ✅ Organizing everything
- ✅ Syncing to website

## 🎨 Link Display on Website

Each paper will show:
```
Paper Title
Authors • Journal • Year

🔗 Journal | 📄 PDF | 📑 arXiv

Optional: Your notes here
```

Students can:
- Read the paper on official journal site
- Download PDF directly (no paywall)
- Check arXiv version
- See your reading notes

## ⚡ Benefits of This Workflow

**For You:**
- Just tell me what you want
- Don't worry about YAML syntax
- Don't worry about file organization
- Focus on content, not infrastructure

**For Me:**
- I handle all technical details
- Ensure consistency
- Validate links
- Organize files properly
- Keep everything in sync

**For Students:**
- Always have PDF access
- See official sources
- Clear organization
- No broken links

## 🚀 Getting Started

**Right now, try this:**
> "Add [paper name] to Week [number]"

I'll:
1. Update COURSE_OUTLINE.md
2. Update readings.yml
3. Get the PDF
4. Sync everything
5. Show you the result!

Then you just say "publish" when ready. ✨
