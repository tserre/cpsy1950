# Jekyll Setup - One-Time Fix

## The Problem (Now Fixed!)

Your `Gemfile.lock` required bundler 2.7.2 with Ruby 3.2+, but your shell was defaulting to the old macOS system Ruby 2.6. This caused the scripts to keep trying to update bundler.

## The Solution

✅ **Fixed!** Your scripts now use rbenv's Ruby 3.3.0 with matching bundler 2.7.2.

## What Changed

1. **Updated `start_server.sh`**
   - Now initializes rbenv automatically
   - Uses correct Ruby/bundler versions
   - Removed constant bundler update attempts
   - Shows version info on startup

2. **Updated workspace task**
   - Now uses rbenv shims path
   - Calls `start_server.sh` which handles rbenv

3. **Added rbenv to your `.zshrc`**
   - rbenv now initializes in all new terminal sessions
   - No more manual setup needed

## Verify It's Working

```bash
# Open a new terminal
ruby --version    # Should show 3.3.0 or higher
bundle --version  # Should show 2.7.2

cd ~/Projects/tserre.github.io
./start_server.sh # Should start without bundler errors
```

## Why This Happened

Your Mac has two Ruby installations:
1. **System Ruby** (2.6.10) - Old, built into macOS at `/usr/bin/ruby`
2. **rbenv Ruby** (3.3.0) - New, installed via rbenv at `~/.rbenv/versions/`

The scripts were accidentally using the system Ruby, which is too old for modern Jekyll/bundler.

## Current Setup

```bash
$ ruby --version
ruby 3.3.0 (2023-12-25 revision 5124f9ac75) [arm64-darwin24]

$ bundle --version
Bundler version 2.7.2

$ which ruby
/Users/tserre/.rbenv/shims/ruby  # ✅ Using rbenv

$ which bundle
/Users/tserre/.rbenv/shims/bundle  # ✅ Using rbenv
```

## No More Auto-Updates

The scripts will no longer:
- ❌ Constantly try to update bundler
- ❌ Show version mismatch warnings
- ❌ Attempt to install/update gems repeatedly

They will only:
- ✅ Check rbenv is initialized
- ✅ Install dependencies once (if needed)
- ✅ Start the server cleanly

## If You Still See Issues

### Issue: "Command not found: bundle"
```bash
# Ensure rbenv is in your PATH
source ~/.zshrc
rbenv rehash
```

### Issue: "Wrong Ruby version"
```bash
cd ~/Projects/tserre.github.io
rbenv local 3.3.0  # Or whichever version you prefer
```

### Issue: "Bundler version mismatch"
```bash
cd ~/Projects/tserre.github.io
gem install bundler:2.7.2
bundle install
```

### Issue: "rbenv not working"
```bash
# Verify rbenv is installed
which rbenv

# Should output: /opt/homebrew/bin/rbenv or similar

# Verify it's in your shell config
grep rbenv ~/.zshrc

# Should show: eval "$(rbenv init - zsh)"
```

## Clean Slate (If Needed)

If you want to start fresh:

```bash
cd ~/Projects/tserre.github.io

# Remove installed dependencies
rm -rf vendor/bundle

# Reinstall with correct Ruby
bundle install --path vendor/bundle

# Test
./start_server.sh
```

## Now You Can

✅ Open workspace: `cpsy1950`  
✅ Jekyll starts automatically  
✅ No bundler version warnings  
✅ Clean, fast startups  
✅ Everything "just works"

The constant update attempts are gone! 🎉
