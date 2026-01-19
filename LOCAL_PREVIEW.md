# Local Site Preview - Automatic Rendering

Your workspace is now set up to automatically render the Jekyll site locally!

## 🎯 How It Works

### Automatic Start (Recommended)

When you open the workspace with `cpsy1950`, Jekyll will automatically:
1. Start in the background
2. Build your site
3. Watch for file changes
4. Auto-reload your browser
5. Show output in a dedicated terminal panel

**No manual commands needed!** 🎉

### Manual Options

If you prefer manual control:

```bash
# Option 1: Sync + Preview
make preview
# Syncs course materials, then starts Jekyll server

# Option 2: Just Serve (no sync)
make serve
# Starts Jekyll server without syncing

# Option 3: Direct script
cd ~/Projects/tserre.github.io
./start_server.sh
```

## 🌐 Accessing Your Site

Once running, your site is available at:

- **Main site**: http://localhost:4000/
- **CPSY 1950**: http://localhost:4000/cpsy1950/
- **Live reload**: Enabled automatically

## 🔄 Typical Workflow

### Development Workflow

1. **Open workspace**: `cpsy1950`
   - Jekyll starts automatically
   - Browser tab: http://localhost:4000/cpsy1950/

2. **Edit course materials** in main repo
   - Edit `readings/readings.yml`
   - Edit `data/schedule.yml`
   - Add papers, etc.

3. **Sync to website**:
   ```bash
   make sync
   ```
   - Files copied to website
   - Jekyll detects changes
   - Browser auto-refreshes
   - See updates immediately!

4. **Commit when ready**:
   ```bash
   make full-update MSG="Update week 3"
   ```

### Quick Preview Flow

```bash
# Terminal 1 (automatic - just open workspace)
cpsy1950
# Jekyll starts automatically

# Terminal 2 (your work)
cd ~/Projects/cpsy1950
# Edit files...
make sync        # See changes immediately
make sync        # Edit more, sync again
# Browser auto-refreshes each time!

# When done
make commit-main MSG="Your changes"
make commit-website MSG="Your changes"
```

## 🎨 Live Reload Features

The server includes:
- ✅ **Automatic rebuild** on file changes
- ✅ **Browser auto-refresh** (no F5 needed)
- ✅ **Incremental builds** (fast rebuilds)
- ✅ **CSS injection** (instant style updates)

## 📁 Workspace Structure

Your workspace includes three folders:

1. **CPSY1950 - Main Repository**
   - Your working files
   - Internal versions with notes

2. **CPSY1950 - Website**
   - Student-facing files
   - Synced from main repo

3. **Website Root (for Jekyll)**
   - Full website directory
   - Needed for Jekyll to run properly

## 🛠️ First-Time Setup

The `start_server.sh` script automatically handles:
- Checking for bundler
- Updating bundler if needed
- Installing Jekyll dependencies
- Starting the server

If you encounter issues:

```bash
cd ~/Projects/tserre.github.io

# Update bundler
bundle update --bundler

# Install dependencies
bundle install

# Try starting again
./start_server.sh
```

## 🎬 Task Controls in Cursor

Once the workspace is open, you can control Jekyll via:

1. **Terminal Panel**: See Jekyll output
2. **Tasks Menu**: 
   - Run Task → "Jekyll: Serve Website"
   - Run Task → "Jekyll: Build Website"
   - Run Task → "Course: Sync to Website"

3. **Keyboard Shortcut**: Cmd+Shift+B (build tasks)

## 🔧 Stopping the Server

To stop the Jekyll server:
- Click the trash icon in the terminal panel
- Or press Ctrl+C in the terminal
- Or close Cursor

Server stops automatically when you close the workspace.

## 📝 What Students See vs What You See

### Your Local Preview
- Shows exactly what you've synced
- Instant updates with `make sync`
- Test before publishing
- See both published and draft states (if you manually edit website files)

### Live Website (GitHub Pages)
- Only shows committed changes
- Updates ~2 minutes after git push
- Students see this version
- Only published content (thanks to filtering)

## 🚀 Pro Tips

### Tip 1: Two Browser Windows
- Left: http://localhost:4000/cpsy1950/ (your preview)
- Right: Your course materials in Cursor
- Edit → Sync → See changes instantly

### Tip 2: Side-by-Side
- Split Cursor editor
- Left: `readings/readings.yml` (internal)
- Right: Terminal showing sync output
- Bottom: Jekyll server output

### Tip 3: Quick Iterations
```bash
# Fast iteration loop
edit file → make sync → check browser
edit file → make sync → check browser
# When done
make full-update MSG="Finalized week 3"
```

### Tip 4: Test Published State
```bash
# See what students will see
make sync
# Check http://localhost:4000/cpsy1950/
# Verify TBD appears for unpublished content
```

## 🐛 Troubleshooting

### Server Won't Start
```bash
cd ~/Projects/tserre.github.io
bundle update --bundler
bundle install
./start_server.sh
```

### Port Already in Use
```bash
# Kill existing Jekyll process
pkill -f jekyll
# Or use different port
bundle exec jekyll serve --port 4001
```

### Changes Not Appearing
```bash
# Hard rebuild
cd ~/Projects/tserre.github.io
rm -rf _site
bundle exec jekyll build
./start_server.sh
```

### Bundler Version Issues
```bash
gem install bundler
bundle update --bundler
```

## 📚 Useful Commands

```bash
# Check if server is running
lsof -i :4000

# View Jekyll version
bundle exec jekyll --version

# Clean build
cd ~/Projects/tserre.github.io
bundle exec jekyll clean
bundle exec jekyll build

# Serve with drafts visible
bundle exec jekyll serve --drafts --livereload
```

## 🎓 Summary

**Automatic Mode** (Recommended):
```bash
cpsy1950                    # Opens workspace, Jekyll auto-starts
# Edit files in Cursor
make sync                   # See changes immediately
make full-update MSG="..."  # Commit and publish
```

**Manual Mode**:
```bash
cd ~/Projects/cpsy1950
make preview               # Sync + serve
# Edit, sync, repeat
make full-update MSG="..." # When done
```

**Server runs at**: http://localhost:4000/cpsy1950/  
**Auto-reload**: Enabled  
**Speed**: Incremental builds  
**Setup**: Automatic

Enjoy instant previews! 🎉
