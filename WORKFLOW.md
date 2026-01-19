# Course Management Workflow

This document describes the workflow for managing course materials across the main repository and the website.

## Repository Structure

### Main Course Repository
**Location:** `~/Projects/cpsy1950`  
**GitHub:** https://github.com/tserre/cpsy1950

This repository contains:
- All course materials (readings, assignments, lectures)
- Central configuration files (YAML)
- Course documentation (syllabus, outline)
- Sync scripts

### Website Repository
**Location:** `~/Projects/tserre.github.io/cpsy1950`  
**GitHub:** https://github.com/tserre/tserre.github.io  
**Live Site:** https://tserre.github.io/cpsy1950/

This repository contains:
- Jekyll website structure
- Course pages (index.md, lesson pages)
- Synced data files in `_data/cpsy1950/`
- Static files (papers, assignments, lectures)

## Typical Workflow

### Adding New Course Content

#### 1. Add Readings

```bash
# In main repo: ~/Projects/cpsy1950
cd ~/Projects/cpsy1950

# Add PDF to readings/papers/
cp ~/Downloads/paper.pdf readings/papers/week02-paper-title.pdf

# Edit readings/readings.yml
# Add paper metadata to appropriate week

# Sync to website
./scripts/sync_to_website.sh

# Commit to main repo
git add readings/
git commit -m "Add week 2 readings"
git push

# Commit to website repo
cd ~/Projects/tserre.github.io
git add cpsy1950/
git commit -m "Update CPSY 1950 readings"
git push
```

#### 2. Add Assignments

```bash
cd ~/Projects/cpsy1950

# Add assignment files
cp assignment1.pdf assignments/files/

# Edit assignments/assignments.yml
# Add assignment details

# Sync and commit
./scripts/sync_to_website.sh
git add assignments/
git commit -m "Add assignment 1"
git push

cd ~/Projects/tserre.github.io
git add cpsy1950/
git commit -m "Update CPSY 1950 assignments"
git push
```

#### 3. Update Schedule

```bash
cd ~/Projects/cpsy1950

# Edit data/schedule.yml
# Add new schedule entries

# Sync and commit
./scripts/sync_to_website.sh
git add data/schedule.yml
git commit -m "Update course schedule"
git push

cd ~/Projects/tserre.github.io
git add cpsy1950/
git commit -m "Update CPSY 1950 schedule"
git push
```

#### 4. Add Lecture Materials

```bash
cd ~/Projects/cpsy1950

# Add lecture slides
cp ~/Downloads/lecture1.pdf lectures/slides/

# Add lecture notes
echo "# Lecture 1 Notes" > lectures/notes/lecture1.md

# Sync and commit
./scripts/sync_to_website.sh
git add lectures/
git commit -m "Add lecture 1 materials"
git push

cd ~/Projects/tserre.github.io
git add cpsy1950/
git commit -m "Update CPSY 1950 lectures"
git push
```

### Adding New Lessons/Pages

For structural changes (new lessons, pages), edit both repos:

```bash
# 1. Update structure in main repo
cd ~/Projects/cpsy1950
# Edit data/structure.yml to add new lesson

# 2. Create lesson page in website repo
cd ~/Projects/tserre.github.io/cpsy1950
mkdir -p lesson7
cat > lesson7/index.md << 'EOF'
---
layout: course-sidebar
title: Lesson 7: Your Title
subtitle: Part 2
---

## Overview
Your lesson content here...
EOF

# 3. Sync structure
cd ~/Projects/cpsy1950
./scripts/sync_to_website.sh

# 4. Commit both repos
git add data/structure.yml
git commit -m "Add lesson 7"
git push

cd ~/Projects/tserre.github.io
git add cpsy1950/
git commit -m "Add CPSY 1950 lesson 7"
git push
```

## Automated Workflow (Optional)

You can create a Makefile or alias for common operations:

```bash
# In ~/Projects/cpsy1950/Makefile
sync:
	./scripts/sync_to_website.sh

commit-main:
	git add -A
	git commit -m "$(MSG)"
	git push

commit-website:
	cd ~/Projects/tserre.github.io && \
	git add cpsy1950/ && \
	git commit -m "Update CPSY 1950: $(MSG)" && \
	git push

full-update:
	make sync
	make commit-main MSG="$(MSG)"
	make commit-website MSG="$(MSG)"
```

Then use:
```bash
make full-update MSG="Add week 3 readings"
```

## Best Practices

1. **Always sync before committing** to the website repo
2. **Use descriptive commit messages** that explain what changed
3. **Test locally** when possible (use Jekyll serve)
4. **Keep file sizes reasonable** for web hosting (compress PDFs if needed)
5. **Maintain consistent naming** conventions for files
6. **Version control everything** except large binary files (consider Git LFS)

## File Organization Tips

### Naming Conventions

- Papers: `AuthorYear-ShortTitle.pdf`
- Lectures: `weekNN-topic.pdf`
- Assignments: `assignmentN-title.pdf`

### Directory Structure

```
readings/papers/
├── week01/
├── week02/
├── classics/
└── optional/

lectures/
├── slides/
│   ├── week01-intro.pdf
│   └── week02-vision.pdf
└── notes/
    ├── week01.md
    └── week02.md

assignments/
└── files/
    ├── assignment1.pdf
    └── assignment1-template.ipynb
```

## Troubleshooting

### Sync script fails
- Check that both directories exist
- Verify file permissions
- Ensure no files are locked

### Website not updating
- Check that changes were committed and pushed
- GitHub Pages can take a few minutes to rebuild
- Verify YAML syntax (use online validator)

### Broken links
- Use relative paths for internal links
- Test all PDF links after syncing
- Check that file names match exactly (case-sensitive)

## Quick Reference

### Common Commands

```bash
# Sync materials to website
cd ~/Projects/cpsy1950 && ./scripts/sync_to_website.sh

# Check status of both repos
cd ~/Projects/cpsy1950 && git status
cd ~/Projects/tserre.github.io && git status

# View website locally
cd ~/Projects/tserre.github.io && bundle exec jekyll serve

# Create new week of content
cd ~/Projects/cpsy1950
mkdir -p readings/papers/week03
# Edit readings/readings.yml, add papers
./scripts/sync_to_website.sh
```

### YAML File Locations

| Content Type | Main Repo | Website |
|-------------|-----------|---------|
| Readings | `readings/readings.yml` | `_data/cpsy1950/readings.yml` |
| Assignments | `assignments/assignments.yml` | `_data/cpsy1950/assignments.yml` |
| Schedule | `data/schedule.yml` | `_data/cpsy1950/schedule.yml` |
| Videos | `data/videos.yml` | `_data/cpsy1950/videos.yml` |
| Resources | `resources/resources.yml` | `_data/cpsy1950/resources.yml` |
| Structure | `data/structure.yml` | `_data/cpsy1950/structure.yml` |
