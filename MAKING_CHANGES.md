# Making Central Changes - Complete Guide

## 🎯 Philosophy

**One source of truth**: `~/Projects/cpsy1950/`
- This is where you make ALL changes
- You control what students see with `published:` flags
- Sync sends filtered version to website

## 🔄 The Three-Stage Process

```
1. EDIT (main repo)
   ↓
2. PREVIEW (local sync)
   ↓
3. PUBLISH (git push)
```

## 📋 Step-by-Step Examples

### Example 1: Add Week 3 Paper Pool

**Step 1: Edit the source file**
```bash
cd ~/Projects/cpsy1950
# Open in Cursor or any editor:
open readings/readings.yml
```

**Add papers for Week 3:**
```yaml
# In readings/readings.yml
readings:
  # ... Week 2 already exists ...
  
  # Add Week 3
  - week: 3
    topic: "Modern Capabilities: Learning Objectives"
    description: "Self-supervised learning and learning objectives"
    published: false  # Keep false while drafting
    internal_notes: |
      Planning notes:
      - Focus on contrastive learning
      - Include at least one masked autoencoder paper
      - Consider JEPA
    papers:
      # Add papers as you curate them
      - title: "SimCLR: A Simple Framework for Contrastive Learning"
        authors: "Chen et al."
        journal: "ICML"
        year: 2020
        url: "https://arxiv.org/abs/2002.05709"
        published: false  # Draft - not ready yet
        internal_notes: "Good intro to contrastive learning"
      
      - title: "Masked Autoencoders Are Scalable Vision Learners"
        authors: "He et al."
        journal: "CVPR"
        year: 2022
        url: "https://arxiv.org/abs/2111.06377"
        published: false  # Draft - not ready yet
        
      # Add 13-18 more papers...
```

**Step 2: Preview locally**
```bash
make sync
# Open http://localhost:4000/cpsy1950/
# Week 3 should still show "TBD" (because published: false)
```

**Step 3: When ready, publish to students**
```bash
# Edit readings.yml again, set:
published: true  # for the week
published: true  # for each paper

# Preview again
make sync
# Now Week 3 papers should appear!

# Publish to live site
make full-update MSG="Publish week 3 paper pool"
```

### Example 2: Update Schedule with Guest Speaker

**Step 1: Edit schedule.yml**
```bash
cd ~/Projects/cpsy1950
open data/schedule.yml
```

**Find the guest lecture entry and update it:**
```yaml
# In data/schedule.yml
- date: "2026-04-14"
  topic: "Guest Lecture: Martin Schrimpf"  # Changed from TBD
  type: "guest"
  description: "Brain-Score and benchmarking neural network models"  # Changed from "Details TBD"
  published: true
  finalized: true  # Changed from false - now it's confirmed!
  internal_notes: "Confirmed via email 1/19. Send Zoom link by 4/7"
```

**Step 2: Preview**
```bash
make sync
# Check schedule table - should show speaker name
```

**Step 3: Publish**
```bash
make full-update MSG="Announce guest speaker Martin Schrimpf"
```

### Example 3: Update Main Course Page

**Step 1: Edit website's index.md**
```bash
cd ~/Projects/tserre.github.io/cpsy1950
open index.md
```

**Update instructor info, description, etc.**
```markdown
**Instructor:** Thomas Serre  
**Email:** thomas_serre@brown.edu  
**Office Hours:** Wednesdays 3-4pm, CIT 325
```

**Step 2: Commit directly to website**
```bash
cd ~/Projects/tserre.github.io
git add cpsy1950/index.md
git commit -m "Update instructor contact info"
git push
```

**Note:** Main page edits go directly to website repo (not synced from main repo)

## 🗂️ What Lives Where?

### Main Repository (`~/Projects/cpsy1950`)
✅ **Edit here:**
- `readings/readings.yml` - Reading lists
- `data/schedule.yml` - Course schedule
- `assignments/assignments.yml` - Assignments
- `data/videos.yml` - Video links
- `resources/resources.yml` - Additional resources
- `data/structure.yml` - Sidebar navigation

🔄 **These get synced to website automatically**

### Website Repository (`~/Projects/tserre.github.io/cpsy1950`)
✅ **Edit here:**
- `index.md` - Main course page
- `lesson1/index.md`, etc. - Individual lesson pages
- Any custom pages

❌ **Don't edit here:**
- `_data/cpsy1950/*.yml` - Auto-synced from main repo

## 📊 The Publishing Matrix

| Content | Main Repo File | Published Flag | Students See |
|---------|---------------|----------------|--------------|
| Bootcamp readings | `readings/readings.yml` | `published: true` | Full papers |
| Week 3 papers (draft) | `readings/readings.yml` | `published: false` | "TBD" |
| Lightning session | `data/schedule.yml` | `finalized: false` | "Details TBD" |
| Guest confirmed | `data/schedule.yml` | `finalized: true` | Full details |
| Main page | `index.md` (website) | N/A | Always visible |

## ⚙️ Common Workflows

### Weekly Release Cycle

**Monday/Tuesday (Prep Week N+1):**
```bash
cd ~/Projects/cpsy1950

# 1. Curate papers for next week
edit readings/readings.yml
# Add papers with published: false

# 2. Preview internally
make sync
# Check papers look good

# 3. Commit to main repo (students don't see yet)
git add readings/readings.yml
git commit -m "Curate week 4 papers (draft)"
git push
```

**Wednesday/Thursday (Release Week N+1):**
```bash
# 4. Finalize papers
edit readings/readings.yml
# Set published: true for week and papers

# 5. Update schedule
edit data/schedule.yml
# Set finalized: true for lightning session

# 6. Preview before publishing
make sync
# Verify everything looks right

# 7. Publish to students
make full-update MSG="Release week 4 paper pool"
```

### Emergency Update

**Need to hide something quickly?**
```bash
cd ~/Projects/cpsy1950

# Set published: false
edit readings/readings.yml

# Push immediately
make full-update MSG="Temporarily remove problematic paper"

# Live in ~2 minutes
```

### Gradual Build-Up

**Build paper pools over time:**
```bash
# Day 1: Add 5 papers (published: false)
make commit-main MSG="Add initial week 3 papers"

# Day 2: Add 5 more papers (published: false)  
make commit-main MSG="Add more week 3 papers"

# Day 3: Review and finalize
# Set published: true for all
make full-update MSG="Publish week 3 paper pool"
```

## 🔍 Preview vs Publish

### Preview Mode (Local Only)
```bash
make sync
# Opens: http://localhost:4000/cpsy1950/
# Only you see this
# Test your changes before publishing
```

### Publish Mode (Live to Students)
```bash
make full-update MSG="Your changes"
# Updates: https://tserre.github.io/cpsy1950/
# Students see this in ~2 minutes
# Also backs up to GitHub
```

## 🎨 Making Different Types of Changes

### Change Reading List
```bash
cd ~/Projects/cpsy1950
edit readings/readings.yml
make full-update MSG="Update readings"
```

### Change Schedule
```bash
cd ~/Projects/cpsy1950
edit data/schedule.yml
make full-update MSG="Update schedule"
```

### Change Course Description
```bash
cd ~/Projects/tserre.github.io/cpsy1950
edit index.md
cd ~/Projects/tserre.github.io
git add . && git commit -m "Update description" && git push
```

### Add New Lesson Page
```bash
cd ~/Projects/tserre.github.io/cpsy1950
mkdir lesson3
echo "---
layout: course-sidebar
title: Lesson 3
---
Content here" > lesson3/index.md

cd ~/Projects/tserre.github.io
git add . && git commit -m "Add lesson 3" && git push
```

### Change Sidebar Navigation
```bash
cd ~/Projects/cpsy1950
edit data/structure.yml
make full-update MSG="Update navigation"
```

## 🚨 Important Rules

### ✅ DO:
- Make all content changes in `~/Projects/cpsy1950`
- Use `published:` flags to control visibility
- Preview with `make sync` before publishing
- Use descriptive commit messages

### ❌ DON'T:
- Edit `_data/cpsy1950/*.yml` in website repo (they get overwritten)
- Forget to sync before checking preview
- Publish without testing locally first
- Edit both repos simultaneously (confusing!)

## 🔧 Useful Commands

```bash
# Preview changes locally
make sync

# Check status of both repos
make status

# Commit main repo only
make commit-main MSG="Your message"

# Commit website only
make commit-website MSG="Your message"

# Do everything (sync + commit both)
make full-update MSG="Your message"

# View what students will see (before pushing)
python3 scripts/prepare_for_website.py
cat .website_ready/readings.yml
```

## 📱 Quick Reference Card

| Task | Command | Where |
|------|---------|-------|
| Edit readings | `readings/readings.yml` | Main repo |
| Edit schedule | `data/schedule.yml` | Main repo |
| Edit main page | `index.md` | Website repo |
| Preview changes | `make sync` | Main repo |
| Publish changes | `make full-update MSG="..."` | Main repo |
| Check status | `make status` | Main repo |

## 🎓 Summary

**The Golden Rule:**
> Edit in `~/Projects/cpsy1950`, preview with `make sync`, publish with `make full-update`

**Everything else is automatic!** 🎉
