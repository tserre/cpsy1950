# CPSY 1950 Course Management Makefile

.PHONY: help commit-main commit-website status serve

help:
	@echo "CPSY 1950 Course Management"
	@echo ""
	@echo "Available targets:"
	@echo "  commit-main      - Commit and push main repo (requires MSG=...)"
	@echo "  commit-website   - Commit and push website repo (requires MSG=...)"
	@echo "  status           - Show git status of both repos"
	@echo "  serve            - Start Jekyll server for local preview"
	@echo ""
	@echo "Usage examples:"
	@echo "  make commit-main MSG=\"Add week 3 materials\""
	@echo "  make status"

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
	cd ~/Projects/prj_web/tserre.github.io && \
	git add cpsy1950/ _data/cpsy1950/ && \
	git commit -m "Update CPSY 1950: $(MSG)" && \
	git push

# Show status of both repositories
status:
	@echo "=== Main Repository Status ==="
	@git status
	@echo ""
	@echo "=== Website Repository Status ==="
	@cd ~/Projects/prj_web/tserre.github.io && git status

# Start Jekyll server for local preview
serve:
	@echo "Starting Jekyll server..."
	@echo "Website will be available at http://localhost:4000/cpsy1950/"
	cd ~/Projects/prj_web/tserre.github.io && ./start_server.sh
