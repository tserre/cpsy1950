# CPSY 1950 Course Management Makefile
# Simplifies common course management tasks

.PHONY: help sync commit-main commit-website full-update status preview

# Default target
help:
	@echo "CPSY 1950 Course Management"
	@echo ""
	@echo "Available targets:"
	@echo "  sync             - Sync materials to website"
	@echo "  commit-main      - Commit and push main repo (requires MSG=...)"
	@echo "  commit-website   - Commit and push website repo (requires MSG=...)"
	@echo "  full-update      - Sync, commit main, and commit website (requires MSG=...)"
	@echo "  status           - Show git status of both repos"
	@echo "  preview          - Preview website locally (requires Jekyll)"
	@echo ""
	@echo "Usage examples:"
	@echo "  make sync"
	@echo "  make full-update MSG=\"Add week 3 readings\""
	@echo "  make status"

# Sync materials to website
sync:
	@echo "Syncing materials to website..."
	./scripts/sync_to_website.sh

# Commit and push main repository
commit-main:
ifndef MSG
	$(error MSG is required. Usage: make commit-main MSG="your message")
endif
	@echo "Committing main repository..."
	git add -A
	git commit -m "$(MSG)"
	git push

# Commit and push website repository
commit-website:
ifndef MSG
	$(error MSG is required. Usage: make commit-website MSG="your message")
endif
	@echo "Committing website repository..."
	cd ~/Projects/tserre.github.io && \
	git add cpsy1950/ _data/cpsy1950/ && \
	git commit -m "Update CPSY 1950: $(MSG)" && \
	git push

# Full update: sync and commit both repos
full-update:
ifndef MSG
	$(error MSG is required. Usage: make full-update MSG="your message")
endif
	@echo "Performing full update..."
	$(MAKE) sync
	$(MAKE) commit-main MSG="$(MSG)"
	$(MAKE) commit-website MSG="$(MSG)"
	@echo ""
	@echo "✓ Full update complete!"

# Show status of both repositories
status:
	@echo "=== Main Repository Status ==="
	@git status
	@echo ""
	@echo "=== Website Repository Status ==="
	@cd ~/Projects/tserre.github.io && git status

# Preview website locally (sync first, then start server)
preview:
	@echo "Syncing and starting preview server..."
	./scripts/preview.sh

# Start Jekyll server without syncing
serve:
	@echo "Starting Jekyll server..."
	@echo "Website will be available at http://localhost:4000/cpsy1950/"
	cd ~/Projects/tserre.github.io && ./start_server.sh
