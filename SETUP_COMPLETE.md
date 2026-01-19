# CPSY 1950 Setup Complete! 🎉

Your course infrastructure is now fully set up and ready to use.

## What Was Created

### 1. Main Course Repository
**Location:** `~/Projects/cpsy1950`  
**GitHub:** https://github.com/tserre/cpsy1950

Contains:
- ✅ Complete directory structure for course materials
- ✅ Central configuration files (YAML-based)
- ✅ Course documentation (Syllabus, Course Outline)
- ✅ Workflow automation (Makefile, sync scripts)
- ✅ Comprehensive documentation

### 2. Course Website
**Location:** `~/Projects/tserre.github.io/cpsy1950`  
**GitHub:** https://github.com/tserre/tserre.github.io  
**Live Site:** https://tserre.github.io/cpsy1950/

Contains:
- ✅ Jekyll-powered student-facing website
- ✅ Integrated data files from main repo
- ✅ Lesson pages and course structure
- ✅ Automatic synchronization from main repo

## Repository Status

Both repositories are:
- ✅ Initialized with git
- ✅ Connected to GitHub
- ✅ Initial commits pushed
- ✅ Fully documented

## Key Files and Their Purpose

### Main Repository (`~/Projects/cpsy1950`)

| File | Purpose |
|------|---------|
| `README.md` | Repository overview |
| `GETTING_STARTED.md` | Quick start guide - **READ THIS FIRST** |
| `WORKFLOW.md` | Detailed workflow documentation |
| `SYLLABUS.md` | Course syllabus |
| `COURSE_OUTLINE.md` | Weekly topics and structure |
| `Makefile` | Automated commands |
| `readings/readings.yml` | Reading list configuration |
| `assignments/assignments.yml` | Assignment configuration |
| `data/schedule.yml` | Course schedule |
| `data/structure.yml` | Website navigation structure |
| `scripts/sync_to_website.sh` | Sync script |
| `scripts/create_week.sh` | Create new week structure |

## Next Steps

### 1. Read the Documentation (5 minutes)
```bash
cd ~/Projects/cpsy1950
# Read these in order:
open GETTING_STARTED.md  # Quick start guide
open SYLLABUS.md         # Update with your details
```

### 2. Update Course Information (10 minutes)
Edit these files with your specific course details:
- `SYLLABUS.md` - Add your contact info, office hours, etc.
- `data/schedule.yml` - Add actual course dates
- `~/Projects/tserre.github.io/cpsy1950/index.md` - Update instructor info

### 3. Test the Workflow (5 minutes)
```bash
cd ~/Projects/cpsy1950

# Test the sync
make sync

# Check status
make status

# View available commands
make help
```

### 4. Add Your First Week of Materials (15 minutes)
```bash
# Create week 1 structure
./scripts/create_week.sh 1 "Introduction to NeuroAI"

# Add papers to readings/papers/week01/

# Edit readings/readings.yml to add week 1 papers

# Sync and commit
make full-update MSG="Add week 1 materials"
```

## Daily Usage

The simplest workflow for managing your course:

```bash
cd ~/Projects/cpsy1950

# 1. Make your changes (add papers, edit YAML files, etc.)

# 2. Run this ONE command to sync and commit everything:
make full-update MSG="Brief description of changes"
```

That's it! The Makefile handles:
- Syncing files to the website
- Committing to the main repository
- Committing to the website repository
- Pushing both to GitHub

## Important Commands

```bash
# Show available commands
make help

# Sync materials to website (without committing)
make sync

# Update everything (recommended)
make full-update MSG="your message"

# Check status of both repos
make status

# Create a new week's structure
./scripts/create_week.sh <week_num> "<topic>"
```

## Documentation Reference

- **Quick Start:** `GETTING_STARTED.md` - Best place to start
- **Detailed Workflow:** `WORKFLOW.md` - Comprehensive guide
- **Course Structure:** `COURSE_OUTLINE.md` - Weekly topics
- **Syllabus Template:** `SYLLABUS.md` - Course policies

## File Organization

### Adding Readings
1. Add PDF to `readings/papers/`
2. Edit `readings/readings.yml`
3. Run `make full-update MSG="Add readings"`

### Adding Assignments
1. Add files to `assignments/files/`
2. Edit `assignments/assignments.yml`
3. Run `make full-update MSG="Add assignment"`

### Updating Schedule
1. Edit `data/schedule.yml`
2. Run `make full-update MSG="Update schedule"`

## Website Preview

To view your website locally before pushing:
```bash
make preview
# Opens at http://localhost:4000/cpsy1950/
```

## GitHub Repositories

Both repositories are now on GitHub:

1. **Main Course Repository**
   - URL: https://github.com/tserre/cpsy1950
   - Contains: All course materials and configurations
   - Private by default (you can change in GitHub settings)

2. **Website Repository**
   - URL: https://github.com/tserre/tserre.github.io
   - Contains: Jekyll website
   - Live at: https://tserre.github.io/cpsy1950/

## Support

- For workflow questions: See `WORKFLOW.md`
- For quick reference: See `GETTING_STARTED.md`
- For course structure: See `COURSE_OUTLINE.md`

## Example: Adding Week 2 Materials

Complete example workflow:

```bash
cd ~/Projects/cpsy1950

# 1. Create week 2 structure
./scripts/create_week.sh 2 "Visual Processing"

# 2. Add papers
cp ~/Downloads/paper1.pdf readings/papers/week02/
cp ~/Downloads/paper2.pdf readings/papers/week02/

# 3. Edit readings/readings.yml
# Add week 2 section with paper details

# 4. Add lecture slides
cp ~/Documents/lecture2.pdf lectures/slides/

# 5. Update schedule
# Edit data/schedule.yml to add week 2 dates

# 6. Sync and commit everything
make full-update MSG="Add week 2 materials on visual processing"

# Done! Changes are now live on the website
```

## Congratulations! 🎓

Your course infrastructure is production-ready. You can now:
- ✅ Easily add and manage course materials
- ✅ Automatically sync to your student-facing website
- ✅ Version control everything with Git
- ✅ Collaborate using GitHub
- ✅ Focus on teaching, not infrastructure

**Ready to get started?** Open `GETTING_STARTED.md` for your first steps!
