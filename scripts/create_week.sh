#!/bin/bash

# Create a new week's worth of content structure
# Usage: ./scripts/create_week.sh <week_number> <topic>

set -e

if [ $# -lt 2 ]; then
    echo "Usage: ./scripts/create_week.sh <week_number> <topic>"
    echo "Example: ./scripts/create_week.sh 4 \"Visual Attention\""
    exit 1
fi

WEEK_NUM=$1
TOPIC=$2
COURSE_REPO="/Users/tserre/Projects/cpsy1950"

echo "Creating structure for Week $WEEK_NUM: $TOPIC"

# Create directories
mkdir -p "$COURSE_REPO/readings/papers/week$(printf "%02d" $WEEK_NUM)"
mkdir -p "$COURSE_REPO/lectures/slides"
mkdir -p "$COURSE_REPO/lectures/notes"

# Create a placeholder lecture note
NOTES_FILE="$COURSE_REPO/lectures/notes/week$(printf "%02d" $WEEK_NUM)-notes.md"
cat > "$NOTES_FILE" << EOF
# Week $WEEK_NUM: $TOPIC

## Lecture Notes

### Overview

[Add lecture overview here]

### Key Concepts

1. Concept 1
2. Concept 2
3. Concept 3

### Important Papers

[List papers discussed this week]

### Discussion Questions

1. Question 1
2. Question 2

### Additional Resources

[Links to additional materials]

## Next Week

[Preview of next week's topic]
EOF

echo "✓ Created lecture notes template at $NOTES_FILE"
echo "✓ Created paper directory for week $WEEK_NUM"
echo ""
echo "Next steps:"
echo "1. Add papers to readings/papers/week$(printf "%02d" $WEEK_NUM)/"
echo "2. Update readings/readings.yml with week $WEEK_NUM content"
echo "3. Add lecture slides to lectures/slides/"
echo "4. Edit $NOTES_FILE"
echo "5. Update data/schedule.yml with week $WEEK_NUM dates"
echo ""
echo "When ready, run:"
echo "  make full-update MSG=\"Add week $WEEK_NUM materials\""
