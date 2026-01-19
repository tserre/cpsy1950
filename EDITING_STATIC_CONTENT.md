# Editing Static Website Content

## 📍 Where Static Content Lives

**File:** `~/Projects/tserre.github.io/cpsy1950/index.md`

This is your **main course page** with:
- Title and subtitle
- Course description
- Instructor information
- Course format overview
- Contact information

## 🎯 What You Can Edit

### Header Section (Top of index.md)

```markdown
---
layout: course-sidebar
title: CPSY 1950 - Deep Learning in Brains, Minds & Machines
subtitle: Spring 2026 • Advanced Undergraduate/Graduate
---

A seminar-style exploration of cutting-edge research...

**Format:** Tuesday lectures + Thursday lightning mini-conferences
```

**To Change:**
- Title/subtitle
- Course tagline
- Format description

### Course Information Section

```markdown
## Course Information

**Instructor:** Thomas Serre  
**Semester:** Spring 2026  
**Time:** Tuesday & Thursday, 2:30pm-3:50pm  
**Location:** Friedman Hall 108  
**Office Hours:** TBD
```

**To Change:**
- Instructor name/contact
- Semester
- Time/location
- Office hours

### Overview Section

```markdown
## Overview

This course uses an innovative **lecture + lightning mini-conference** format:

- **Tuesdays (80 min):** Instructor lecture...
- **Thursdays (80 min):** Student lightning talks...

Students work in rotating small groups...
```

**To Change:**
- Course description
- Format details
- Learning objectives

### Contact Section (Bottom)

```markdown
## Contact

For questions about the course, please contact [your email] or attend office hours.
```

**To Change:**
- Contact information
- Communication preferences

## 🔧 How to Make Changes

### Method 1: Direct Edit in Cursor

**In your workspace:**
1. Open the file in left sidebar:
   - Navigate to: **CPSY1950 - Website** folder
   - Open: `index.md`
2. Make your edits
3. Save file (Cmd+S)
4. Commit:
   ```bash
   cd ~/Projects/tserre.github.io
   git add cpsy1950/index.md
   git commit -m "Update course information"
   git push
   ```

### Method 2: Ask Me to Update

**Just tell me what to change:**

**You say:**
> "Change office hours to Wednesdays 3-4pm in CIT 325"

**I do:**
- Update `index.md`
- Commit and push
- Show you the result

### Method 3: Command Line

```bash
cd ~/Projects/tserre.github.io/cpsy1950

# Edit the file
nano index.md
# or
code index.md

# Commit and push
cd ~/Projects/tserre.github.io
git add cpsy1950/index.md
git commit -m "Update office hours"
git push
```

## 📄 Other Static Pages You Can Edit

### Individual Lesson Pages

```bash
~/Projects/tserre.github.io/cpsy1950/
├── lesson1/index.md    # Lesson 1 content
├── lesson2/index.md    # Lesson 2 content
└── ...
```

**Edit these to:**
- Add lesson-specific content
- Embed videos
- Add practice problems
- Include code examples

### Custom Pages

Create new pages:
```bash
cd ~/Projects/tserre.github.io/cpsy1950

# Create new page
mkdir resources
echo "---
layout: course-sidebar
title: Resources
---

## Additional Resources
..." > resources/index.md

# Commit
cd ~/Projects/tserre.github.io
git add cpsy1950/resources/
git commit -m "Add resources page"
git push
```

## 🎨 Editing Page Layouts

### Main Layout File

**File:** `~/Projects/tserre.github.io/_layouts/course-sidebar.html`

This controls:
- Page structure
- Sidebar navigation
- Header/footer
- CSS styling

**To modify layout:**
```bash
cd ~/Projects/tserre.github.io
code _layouts/course-sidebar.html
```

### Sidebar Navigation

**File:** `~/Projects/cpsy1950/data/structure.yml` (main repo)

**This is synced from main repo!** Edit here:
```yaml
resources:
  - title: "Canvas"
    url: "https://canvas.brown.edu"
    external: true
  - title: "Ed Discussion"
    url: "https://edstem.org"
    external: true
```

Then sync:
```bash
make sync
```

## 🔄 The Sync Distinction

### From Main Repo (Auto-synced)
- ✅ Readings (`readings.yml`)
- ✅ Schedule (`schedule.yml`)
- ✅ Assignments (`assignments.yml`)
- ✅ Videos (`videos.yml`)
- ✅ Resources (`resources.yml`)
- ✅ Structure (`structure.yml`)

### Website Repo Only (Manual edit)
- ✏️ `index.md` (main page)
- ✏️ Lesson pages
- ✏️ Custom pages
- ✏️ Layouts/templates
- ✏️ Styling

## 📝 Common Updates

### Update Office Hours

**Option 1: Tell me**
> "Update office hours to Wednesdays 3-4pm, CIT 325"

**Option 2: Edit directly**
```bash
cd ~/Projects/tserre.github.io/cpsy1950
# Edit index.md, find "Office Hours:" line
# Change to: **Office Hours:** Wednesdays 3-4pm, CIT 325
```

### Update Contact Email

**Option 1: Tell me**
> "Change contact email to thomas_serre@brown.edu"

**Option 2: Edit directly**
```bash
# Edit index.md, find Contact section
# Update email
```

### Change Course Description

**Option 1: Tell me**
> "Update the course overview to emphasize the project component"

**Option 2: Edit directly**
```bash
# Edit index.md, find ## Overview section
# Rewrite as needed
```

### Add Prerequisites Section

**Option 1: Tell me**
> "Add a prerequisites section after Course Information"

**Option 2: Edit directly**
```markdown
## Prerequisites

Students should have:
- Background in neuroscience OR machine learning
- Programming experience (Python)
- Linear algebra
```

## 🎯 Quick Reference

| Content Type | Location | How to Edit |
|--------------|----------|-------------|
| Title/Header | `index.md` (website) | Direct edit |
| Course Info | `index.md` (website) | Direct edit |
| Description | `index.md` (website) | Direct edit |
| Readings | `readings.yml` (main repo) | Auto-synced |
| Schedule | `schedule.yml` (main repo) | Auto-synced |
| Sidebar Links | `structure.yml` (main repo) | Auto-synced |
| Lesson Pages | `lessonN/index.md` (website) | Direct edit |
| Layout | `_layouts/*.html` (website) | Direct edit |

## ✨ Best Practice Workflow

### For Static Content Changes:

```bash
# 1. Navigate to website repo
cd ~/Projects/tserre.github.io/cpsy1950

# 2. Edit the file
code index.md

# 3. Preview locally (if Jekyll running)
# Check: http://localhost:4000/cpsy1950/

# 4. Commit and push
cd ~/Projects/tserre.github.io
git add cpsy1950/
git commit -m "Update course information"
git push

# Live in ~2 minutes
```

### For Dynamic Content (Readings, Schedule, etc.):

```bash
# Edit in main repo, then:
make full-update MSG="Update readings"
# Everything handled automatically
```

## 🚀 Pro Tip

**Use the workspace!**

In your CPSY1950 workspace, you can:
- See both repos side-by-side
- Edit `index.md` in left pane
- Edit `readings.yml` in right pane
- Commit from either location

## 💡 Example: Complete Update

**Scenario:** Update office hours and add new reading

```bash
# 1. Update static content (office hours)
cd ~/Projects/tserre.github.io/cpsy1950
code index.md
# Change office hours line
cd ~/Projects/tserre.github.io
git add . && git commit -m "Update office hours" && git push

# 2. Update dynamic content (readings)
cd ~/Projects/cpsy1950
code readings/readings.yml
# Add new paper
make full-update MSG="Add new reading"

# Both updates live in ~2 minutes!
```

## 🎓 Summary

**Static content** = Edit in `~/Projects/tserre.github.io/cpsy1950/`  
**Dynamic content** = Edit in `~/Projects/cpsy1950/` → auto-synced

**Or just tell me what you want changed, and I'll do it!** ✨
