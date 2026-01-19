# Getting Started with CPSY 1950 Course Management

## Overview

Your course is set up with two repositories:

1. **Main Course Repository** (`~/Projects/cpsy1950`)
   - Contains all course materials and source files
   - On GitHub: https://github.com/tserre/cpsy1950

2. **Website Repository** (`~/Projects/tserre.github.io/cpsy1950`)
   - Jekyll-powered website for students
   - Live at: https://tserre.github.io/cpsy1950/

## Quick Start

### Daily Workflow

The easiest way to update course materials:

```bash
cd ~/Projects/cpsy1950

# Make your changes (add papers, edit YAML files, etc.)

# Then run:
make full-update MSG="Description of changes"
```

This will:
1. Sync files to the website
2. Commit and push the main repository
3. Commit and push the website repository

### Common Tasks

#### Add a Reading

1. **Add the PDF:**
   ```bash
   cp ~/Downloads/paper.pdf ~/Projects/cpsy1950/readings/papers/
   ```

2. **Update readings.yml:**
   ```bash
   # Edit readings/readings.yml
   # Add paper details under the appropriate week
   ```

3. **Sync and commit:**
   ```bash
   make full-update MSG="Add readings for week 3"
   ```

#### Update the Schedule

1. **Edit the schedule:**
   ```bash
   # Edit data/schedule.yml
   ```

2. **Sync and commit:**
   ```bash
   make full-update MSG="Update schedule for January"
   ```

#### Add an Assignment

1. **Add files:**
   ```bash
   cp assignment1.pdf ~/Projects/cpsy1950/assignments/files/
   ```

2. **Update assignments.yml:**
   ```bash
   # Edit assignments/assignments.yml
   ```

3. **Sync and commit:**
   ```bash
   make full-update MSG="Add assignment 1"
   ```

## File Locations Cheat Sheet

### In Main Repository (`~/Projects/cpsy1950`)

| What | Where |
|------|-------|
| Paper PDFs | `readings/papers/` |
| Readings config | `readings/readings.yml` |
| Assignments config | `assignments/assignments.yml` |
| Assignment files | `assignments/files/` |
| Lecture slides | `lectures/slides/` |
| Lecture notes | `lectures/notes/` |
| Schedule | `data/schedule.yml` |
| Videos | `data/videos.yml` |
| Resources | `resources/resources.yml` |
| Course structure | `data/structure.yml` |

### Configuration Files

All course content is managed through YAML files. The sync script automatically copies these to the website.

**readings/readings.yml** - Course readings by week:
```yaml
readings:
  - week: 1
    topic: "Introduction to NeuroAI"
    papers:
      - title: "Paper Title"
        authors: "Authors"
        journal: "Journal"
        year: 2024
        pdf: "/cpsy1950/papers/filename.pdf"
        url: "https://paper-url.com"
```

**assignments/assignments.yml** - Assignments:
```yaml
assignments:
  - title: "Assignment 1"
    due_date: "2026-02-15"
    description: "Assignment description"
    materials:
      - name: "Assignment PDF"
        type: "pdf"
        url: "/cpsy1950/assignments/filename.pdf"
```

**data/schedule.yml** - Course schedule:
```yaml
schedule:
  - date: "2026-01-22"
    topic: "Introduction"
    readings:
      - title: "Reading Title"
        url: "/cpsy1950/papers/reading.pdf"
```

## Makefile Commands

```bash
# Show help
make help

# Sync materials to website (without committing)
make sync

# Commit main repo only
make commit-main MSG="your message"

# Commit website repo only
make commit-website MSG="your message"

# Do everything at once (recommended)
make full-update MSG="your message"

# Check status of both repos
make status

# Preview website locally
make preview
```

## Tips

1. **Use descriptive commit messages**
   ```bash
   make full-update MSG="Add week 3 readings on visual attention"
   ```

2. **Sync before manual commits**
   If you prefer manual control:
   ```bash
   make sync                    # Sync files
   cd ~/Projects/cpsy1950
   git add -A && git commit -m "..." && git push
   cd ~/Projects/tserre.github.io
   git add cpsy1950/ && git commit -m "..." && git push
   ```

3. **Check status regularly**
   ```bash
   make status
   ```

4. **Test locally before pushing**
   ```bash
   make preview
   # Opens local server at http://localhost:4000/cpsy1950/
   ```

## Typical Semester Workflow

### Before Semester Starts
1. Update syllabus (`SYLLABUS.md`)
2. Set up initial schedule (`data/schedule.yml`)
3. Prepare first few weeks of readings
4. Create initial assignments

### During Semester
1. **Weekly**: Add next week's readings
2. **As needed**: Update schedule, add assignments
3. **After lectures**: Upload slides and notes
4. **Student requests**: Add resources, update materials

### Example Weekly Update
```bash
cd ~/Projects/cpsy1950

# Add next week's papers
cp ~/Downloads/week4-*.pdf readings/papers/

# Edit readings.yml to add week 4 papers
# Edit data/schedule.yml to confirm week 4 dates

# Add this week's lecture slides
cp ~/Documents/lecture3.pdf lectures/slides/

# Sync and commit everything
make full-update MSG="Week 4 materials and lecture 3 slides"
```

## Troubleshooting

### "MSG is required" error
You forgot the message:
```bash
make full-update MSG="your message here"
```

### Changes not appearing on website
1. Check if sync worked: `make sync`
2. Verify commits: `make status`
3. Check GitHub Pages build status
4. Wait a few minutes for GitHub Pages to rebuild

### File not found errors
- Check file paths are correct (case-sensitive)
- Verify files were copied to correct directories
- Run `make sync` again

## Getting Help

- **Documentation**: See `WORKFLOW.md` for detailed workflow
- **Course outline**: See `COURSE_OUTLINE.md`
- **Syllabus**: See `SYLLABUS.md`
- **Repository**: https://github.com/tserre/cpsy1950
- **Website**: https://tserre.github.io/cpsy1950/

## Advanced Usage

See `WORKFLOW.md` for:
- Creating new lesson pages
- Customizing the website structure
- Adding video content
- Advanced git workflows
- Automation options
