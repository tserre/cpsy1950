#!/bin/bash

# Quick script to sync and preview the website locally

set -e

echo "🔄 Syncing course materials to website..."
cd ~/Projects/cpsy1950
./scripts/sync_to_website.sh

echo ""
echo "🌐 Starting Jekyll server..."
cd ~/Projects/tserre.github.io
./start_server.sh
