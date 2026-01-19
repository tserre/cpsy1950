#!/bin/bash

# Sync CPSY 1950 materials to the website repository
# This script copies data files from the main course repo to the website

set -e  # Exit on error

# Define paths
COURSE_REPO="/Users/tserre/Projects/cpsy1950"
WEBSITE_REPO="/Users/tserre/Projects/tserre.github.io/cpsy1950"

echo "Syncing CPSY 1950 materials to website..."

# Check if directories exist
if [ ! -d "$COURSE_REPO" ]; then
    echo "Error: Course repository not found at $COURSE_REPO"
    exit 1
fi

if [ ! -d "$WEBSITE_REPO" ]; then
    echo "Error: Website repository not found at $WEBSITE_REPO"
    exit 1
fi

# Create data directory if it doesn't exist
mkdir -p "$WEBSITE_REPO/data"

# Copy YAML data files
echo "Copying data files..."
cp "$COURSE_REPO/readings/readings.yml" "$WEBSITE_REPO/data/readings.yml"
cp "$COURSE_REPO/assignments/assignments.yml" "$WEBSITE_REPO/data/assignments.yml"
cp "$COURSE_REPO/data/schedule.yml" "$WEBSITE_REPO/data/schedule.yml"
cp "$COURSE_REPO/data/videos.yml" "$WEBSITE_REPO/data/videos.yml"
cp "$COURSE_REPO/resources/resources.yml" "$WEBSITE_REPO/data/resources.yml"

echo "✓ Data files synced successfully!"

# Optional: Copy papers directory
if [ -d "$COURSE_REPO/readings/papers" ]; then
    echo "Copying papers directory..."
    mkdir -p "$WEBSITE_REPO/papers"
    rsync -av --delete "$COURSE_REPO/readings/papers/" "$WEBSITE_REPO/papers/"
    echo "✓ Papers synced successfully!"
fi

# Optional: Copy assignment files
if [ -d "$COURSE_REPO/assignments/files" ]; then
    echo "Copying assignment files..."
    mkdir -p "$WEBSITE_REPO/assignments"
    rsync -av --delete "$COURSE_REPO/assignments/files/" "$WEBSITE_REPO/assignments/"
    echo "✓ Assignment files synced successfully!"
fi

# Optional: Copy lecture materials
if [ -d "$COURSE_REPO/lectures" ]; then
    echo "Copying lecture materials..."
    mkdir -p "$WEBSITE_REPO/lectures"
    rsync -av --delete "$COURSE_REPO/lectures/" "$WEBSITE_REPO/lectures/"
    echo "✓ Lecture materials synced successfully!"
fi

echo ""
echo "========================================="
echo "Sync complete!"
echo "========================================="
echo ""
echo "Next steps:"
echo "1. Review changes in the website repository:"
echo "   cd $WEBSITE_REPO"
echo "   git status"
echo ""
echo "2. Commit and push changes:"
echo "   git add ."
echo "   git commit -m 'Update CPSY 1950 materials'"
echo "   git push"
echo ""
