# CPSY 1950 - Deep Learning in Brains, Minds & Machines

**Spring Semester 2026**  
**Instructor:** Thomas Serre  
**Location:** Friedman Hall 108  
**Time:** TTh 2:30pm-3:50pm

**GitHub:** https://github.com/tserre/cpsy1950  
**Website:** https://tserre.github.io/cpsy1950/

## Quick Start

See [GETTING_STARTED.md](GETTING_STARTED.md) for a quick guide to managing course materials.

**TL;DR:** To update course materials:
```bash
make full-update MSG="your change description"
```

## Repository Structure

This repository contains all course materials for CPSY 1950.

```
cpsy1950/
├── readings/           # Course readings and papers
│   ├── papers/         # PDF files of papers
│   └── readings.yml    # Central readings configuration
├── assignments/        # Assignment descriptions and materials
│   └── assignments.yml # Central assignments configuration
├── lectures/           # Lecture slides and materials
├── resources/          # Additional course resources
│   └── resources.yml   # Central resources configuration
├── data/               # Course data and configurations
│   ├── schedule.yml    # Course schedule
│   └── videos.yml      # Video links and materials
├── scripts/            # Utility scripts for course management
└── README.md          # This file
```

## Website Integration

The course website is hosted at: `https://tserre.github.io/cpsy1950/`

The website repository is located at: `~/Projects/tserre.github.io/cpsy1950/`

### Syncing to Website

To update the website with new materials:

```bash
# Use the sync script to copy data files to the website
./scripts/sync_to_website.sh

# Then commit and push the website changes
cd ~/Projects/tserre.github.io
git add cpsy1950/
git commit -m "Update CPSY 1950 materials"
git push
```

## Quick Start

### Adding Readings

1. Add PDF files to `readings/papers/`
2. Update `readings/readings.yml` with paper metadata
3. Run sync script to update website

### Adding Assignments

1. Create assignment materials in `assignments/`
2. Update `assignments/assignments.yml` with assignment details
3. Run sync script to update website

### Updating Schedule

1. Edit `data/schedule.yml`
2. Run sync script to update website

## Course Description

A seminar-style exploration of cutting-edge research at the intersection of natural and artificial intelligence. Students engage with recent papers and develop critical perspectives on how biological and artificial systems process information.

## Learning Objectives

- Understand computational principles shared between biological and artificial intelligence
- Critically evaluate recent research papers in NeuroAI
- Develop skills in scientific presentation and discussion
- Explore how neuroscience informs AI and vice versa

## Contact

For questions about course materials, please open an issue or contact the instructor.
