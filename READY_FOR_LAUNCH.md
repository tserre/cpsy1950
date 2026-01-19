# ✅ CPSY 1950 - Ready for Launch!

**Status**: Ready for syllabus/website release today  
**Website**: https://tserre.github.io/cpsy1950/  
**Date**: January 19, 2026

---

## What Students Will See Today

### ✅ Complete Schedule (All Dates Visible)
- Week 1: Course Kickoff (Jan 22)
- Week 2: Bootcamp with all video links (Jan 27-29)
- Weeks 3-9: Lightning mini-conferences (dates and topics visible)
- Week 10: Spring Break
- Weeks 11-12: Project studio and poster sessions
- Weeks 13-14: Guest lectures
- Week 15: Final exam (May 12, 9:00am)

### ✅ Finalized Content
- **Bootcamp readings** (Week 2):
  - Doerig et al. (2023) - The neuroconnectionist research programme
  - Cichy & Kaiser (2019) - Deep Neural Networks as Scientific Models
  - All conditional video links (3Blue1Brown, neuroscience intros)
  - Textbook chapters for neuroscience track

- **Course structure**:
  - Tuesday lecture format explained
  - Thursday lightning mini-conference format explained
  - Grading breakdown
  - Project poster information

- **Guest lectures**:
  - Week 14: Rufin VanRullen & Victor Boutin (confirmed)

### ⏳ Showing as "TBD" or "Details TBD"
- **Weeks 3-9**: Paper pools for lightning talks
  - Students see the schedule and topics
  - Paper lists show "TBD - Readings will be announced soon"
  - You'll add these as you finalize them

- **Week 13**: Guest lecture speakers
  - Shows "Guest Lecture (TBD)"
  - You'll update when confirmed

---

## Your Internal Planning (Not Visible to Students)

You have complete internal notes in:

### `readings/readings.yml`
- Week 2: ✅ Published (students see full details)
- Weeks 3-9: ⏳ Draft with your planning notes
  - Internal notes about paper pools
  - Themes and considerations
  - Will publish as you finalize

### `data/schedule.yml`
- All dates published (students see full calendar)
- Lightning sessions marked `finalized: false`
  - Shows "Details TBD" to students
  - Set `finalized: true` when paper pools ready
- Internal notes about guest speaker candidates

---

## How to Update Throughout the Semester

### Week by Week Release (Example: Week 3)

```bash
cd ~/Projects/cpsy1950

# 1. Edit readings/readings.yml
# Add papers for Week 3, set published: true

# 2. Edit data/schedule.yml
# Set finalized: true for Feb 5 lightning session

# 3. Sync and commit
make full-update MSG="Release Week 3 paper pool"

# Done! Changes live on website in ~2 minutes
```

### The System Protects You

**In your files** (`~/Projects/cpsy1950`):
- Keep all notes, drafts, alternatives
- Nothing is lost or hidden from you
- Full version control history

**On the website** (students see):
- Only items marked `published: true`
- "TBD" for everything else
- Clean, professional appearance

---

## Quick Status Check

Run anytime to see what students will see:

```bash
cd ~/Projects/cpsy1950
python3 scripts/prepare_for_website.py
cat .website_ready/readings.yml
```

---

## Today's Checklist

### Before Announcing to Students

- [x] Syllabus finalized and on website
- [x] Full schedule with dates published
- [x] Week 2 bootcamp materials ready
- [x] Course format explained
- [x] Grading breakdown clear
- [x] Assignment structure outlined

### Optional (Can Do Later)

- [ ] Finalize Week 3 paper pool (due ~Jan 29)
- [ ] Finalize Week 4 paper pool (due ~Feb 5)
- [ ] Confirm Week 13 guest speakers
- [ ] Create lightning talk rubric
- [ ] Create project poster guidelines

---

## Student Communication Template

Here's what you can say to students:

> The complete course schedule is now available at https://tserre.github.io/cpsy1950/
>
> **What's ready now:**
> - Full semester schedule and format
> - Week 2 bootcamp materials (all videos and readings)
> - Course policies and grading
>
> **Coming soon:**
> - Paper pools for lightning talks (announced 1 week before each session)
> - Lightning talk guidelines
> - Project poster requirements
>
> Please complete the Week 2 bootcamp materials according to your background (see conditional requirements on the website).

---

## Key Files Reference

### For You (Internal)
- `INTERNAL_VS_PUBLIC.md` - How the dual-version system works
- `readings/readings.yml` - Internal version with all notes
- `data/schedule.yml` - Internal version with planning notes
- `COURSE_OUTLINE.md` - Full course outline
- `ORIGINAL_OUTLINE.md` - Your original planning doc

### For Students (Website)
- https://tserre.github.io/cpsy1950/ - Main course page
- All dates and structure visible
- TBD for unfinalized content
- Auto-updated when you sync

---

## Emergency Controls

### Hide Something Quickly
```bash
# Edit file, set published: false
make full-update MSG="Update materials"
# Live in ~2 minutes
```

### Check What's Published
```bash
python3 scripts/prepare_for_website.py
# Shows what students will see
```

### Revert if Needed
```bash
cd ~/Projects/cpsy1950
git log  # Find commit to revert to
git revert <commit-hash>
git push
make sync
cd ~/Projects/tserre.github.io
git add . && git commit -m "Revert" && git push
```

---

## 🎉 You're Ready!

Your course infrastructure is:
- ✅ Professional and student-ready
- ✅ Flexible for semester-long updates
- ✅ Protects your planning process
- ✅ Version controlled and backed up
- ✅ Easy to update (one command)

**Website live at**: https://tserre.github.io/cpsy1950/

Good luck with the semester! 🎓
