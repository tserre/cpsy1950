# Internal vs Public Content Management

## Philosophy

- **Main Repository** (`~/Projects/cpsy1950`): Your working version with all planning notes, alternatives, drafts
- **Website** (`https://tserre.github.io/cpsy1950/`): Clean student-facing version showing only finalized content

## How It Works

### The Sync Process

When you run `make sync` or `make full-update`, the system:

1. **Reads** your internal YAML files (with all your notes)
2. **Filters** using the `prepare_for_website.py` script
3. **Outputs** clean student-ready versions
4. **Copies** filtered versions to the website

### Control What Students See

Use these fields in your YAML files:

#### For Entire Weeks/Sections
```yaml
- week: 3
  topic: "Topic Name"
  published: true    # false = won't appear on website at all
  finalized: true    # false = shows "Details TBD" for descriptions
```

#### For Individual Papers
```yaml
papers:
  - title: "Paper Title"
    published: true  # false = won't appear on website
    internal_notes: "This is only visible to you"
```

#### Internal Planning Fields (Never Shown to Students)
- `internal_notes`: Your planning notes
- `alternatives`: Alternative paper options
- `status: "draft"`: Marks content as not ready

## Examples

### Example 1: Week With Draft Papers

**In your internal file** (`readings/readings.yml`):
```yaml
- week: 3
  topic: "Learning Objectives"
  published: false  # Not ready yet
  internal_notes: |
    Need to finalize paper pool.
    Consider: SimCLR, MAE, JEPA papers
  papers:
    - title: "Draft paper 1"
      status: "draft"
```

**On the website**: Shows "TBD - Readings will be announced soon"

### Example 2: Week With Ready Papers

**In your internal file**:
```yaml
- week: 2
  topic: "Bootcamp"
  published: true  # Ready!
  papers:
    - title: "The neuroconnectionist research programme"
      published: true
      url: "https://..."
```

**On the website**: Shows the complete paper information

### Example 3: Schedule With TBD Guest

**In your internal file** (`data/schedule.yml`):
```yaml
- date: "2026-04-14"
  topic: "Guest Lecture (TBD)"
  published: true
  finalized: false  # Not confirmed yet
  internal_notes: |
    Reached out to:
    - Schrimpf (Brain-Score) - waiting for reply
    - Binz - backup option
```

**On the website**: Shows "Guest Lecture (TBD)" with "Details TBD"

## Workflow

### Day-to-Day Updates

1. **Edit internal files** in `~/Projects/cpsy1950`
   - Add notes, alternatives, drafts
   - Set `published: false` for anything not ready

2. **When content is ready for students**:
   - Set `published: true`
   - Set `finalized: true` (for schedule items)
   - Remove `status: "draft"` from papers

3. **Sync to website**:
   ```bash
   make full-update MSG="Update readings for week 3"
   ```

### Publishing a New Week of Content

```bash
cd ~/Projects/cpsy1950

# 1. Edit readings/readings.yml
# Add papers and set published: true for week 3

# 2. Edit data/schedule.yml  
# Set finalized: true for week 3 lightning session

# 3. Sync and commit
make full-update MSG="Publish week 3 readings and paper pool"
```

## File-by-File Guide

### `readings/readings.yml`
- **You see**: All weeks, draft papers, internal notes, alternatives
- **Students see**: Only weeks/papers with `published: true`
- **TBD shown when**: Week has no published papers

### `data/schedule.yml`
- **You see**: All sessions, internal notes, candidate speakers
- **Students see**: All sessions, but "Details TBD" if `finalized: false`
- **Use case**: Show schedule structure but hide unconfirmed details

### `assignments/assignments.yml`
- **You see**: Draft assignments, internal notes
- **Students see**: Only `published: true` assignments
- **TBD shown when**: No published assignments exist

### `data/videos.yml`, `resources/resources.yml`, `data/structure.yml`
- **Copied as-is** (no filtering)
- **Use case**: Usually finalized upfront

## Current Status (Ready for Today)

✅ **Ready for students (published: true)**:
- Week 1: Kickoff
- Week 2: Bootcamp (all videos, readings)
- Weeks 3-9: Schedule structure (topics visible)
- Weeks 11-15: All dates and formats
- Week 14: Confirmed guest lectures (VanRullen, Boutin)

⏳ **Showing as TBD (will finalize later)**:
- Weeks 3-9: Paper pools for lightning talks (published: false in readings.yml)
- Weeks 3-9: Lightning session details (finalized: false in schedule.yml)
- Week 13: Guest lecture speakers (finalized: false)

## Tips

### Keep Internal Notes Organized
```yaml
internal_notes: |
  Week 3 planning:
  - Priority papers: SimCLR, MAE, BYOL
  - Backup papers: MoCo v3, DINO
  - Need to finalize by: 1/27
  - Send paper pool to students by: 1/29
```

### Use Draft Status
```yaml
papers:
  - title: "Considering this paper..."
    status: "draft"  # Won't appear on website
    url: "..."
    internal_notes: "Good figure on page 3, maybe for lecture"
```

### Version Control Everything
- All your internal notes are version controlled
- You can see history of what you were considering
- Nothing is lost when you finalize

## Testing

To test what students will see:
```bash
# Run the filter script
python3 scripts/prepare_for_website.py

# Check the output
cat .website_ready/readings.yml
cat .website_ready/schedule.yml
```

## Emergency: Hide Something Quickly

If you need to quickly hide content from students:

```bash
# Edit the file, set published: false
# Then:
make full-update MSG="Update course materials"
```

Changes propagate to website within minutes after pushing to GitHub.
