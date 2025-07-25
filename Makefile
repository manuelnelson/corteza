.PHONY: dev test lint fresh audit

dev:
	@echo "---Preparing libs and clients---"
	@(yarn) || (echo "Failed to prepare libs and client"; exit 1)

test:
	@echo "---Testing libs---"
	@(cd $(CURDIR)/lib-vue3 && make test) || (echo "Failed to test libs"; exit 1)
	@echo "---Testing clients---"
	@(cd $(CURDIR)/client-vue3 && make test) || (echo "Failed to test clients"; exit 1)
	@echo "---Testing server---"
	@(cd $(CURDIR)/server && make test) || (echo "Failed to test server"; exit 1)

lint:
	@echo "---Linting libs---"
	@(cd $(CURDIR)/lib-vue3 && make lint) || (echo "Failed to lint libs"; exit 1)
	@echo "---Linting clients---"
	@(cd $(CURDIR)/client-vue3 && make lint) || (echo "Failed to lint clients"; exit 1)

fresh:
	@echo "---Fresh libs and clients---"
	@yarn install --force

audit:
	@echo "---Audit libs and clients---"
	@yarn audit

.DEFAULT_GOAL := dev