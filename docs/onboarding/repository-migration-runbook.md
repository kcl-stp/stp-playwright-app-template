# Repository Migration Runbook

## Overview

This runbook defines the process for migrating repositories from the QA Automation POC Azure DevOps project into the governed System Team Azure DevOps project.

The migration process standardises:

* repository location
* pipeline configuration
* SDLC governance
* onboarding documentation
* repository ownership

---

# Source and Target Projects

## Source (POC)

```text
https://dev.azure.com/KCLNonProduction/QA%20Automation%20POC
```

## Target (Governed)

```text
https://dev.azure.com/KCLScaledAgileFramework/System%20Team
```

---

# Migration Objectives

The migration process ensures that repositories:

* are moved into the governed System Team structure
* use standardised CI/CD pipelines
* adopt reusable SDLC controls
* align to Test Capability onboarding standards
* preserve historical POC repositories as read-only references

---

# Migration Process

## Step 1 – Review Existing Repository

Review the repository for:

* active branches
* existing pipelines
* repo variables/service connections
* documentation references
* pipeline YAML locations
* hardcoded URLs

Confirm the repository is suitable for migration.

---

## Step 2 – Clone the Existing Repository

Clone the repository locally using Git or VSCode.

Example:

```bash
git clone https://dev.azure.com/KCLNonProduction/QA Automation POC/_git/repository-name
```

---

## Step 3 – Create the New Repository

Create the target repository in:

```text
KCLScaledAgileFramework / System Team
```

Suggested naming conventions:

* tc-pw-starter-pack
* tc-api-starter-pack
* tc-performance-framework

---

## Step 4 – Push Repository to New Target

Update the Git remote:

```bash
git remote remove origin

git remote add origin https://dev.azure.com/KCLScaledAgileFramework/System Team/_git/repository-name
```

Push all branches and tags:

```bash
git push -u origin --all

git push origin --tags
```

---

# Step 5 – Update Pipeline References

Review and update:

* pipeline YAML paths
* pipeline names
* service connections
* variable groups
* branch references

Validate:

* PR validation pipeline
* CI pipeline
* scheduled pipelines (if applicable)

---

# Step 6 – Apply SDLC Governance Bootstrap

Run the reusable governance pipeline:

```text
apply-sdlc-policies.yml
```

The governance bootstrap applies:

* PR validation
* minimum reviewer policies
* work item linking
* merge strategy rules
* branch protection

Target branches:

* integration
* main

---

# Step 7 – Execute Commissioning Validation

Validate:

* PR pipeline executes successfully
* CI pipeline executes successfully
* ESLint/static checks pass
* governance policies are active
* branch protections are enforced

Recommended validation flow:

```text
feature branch
    ↓
integration
    ↓
main
```

---

# Step 8 – Update Documentation and URLs

Update:

* README files
* wiki references
* pipeline references
* onboarding guides
* architecture diagrams

Replace all legacy POC URLs with:

* System Team repository URLs
* new pipeline URLs
* updated documentation links

---

# Step 9 – Archive POC Repository

Once migration validation is complete:

* set the original POC repository to read-only
* add an archive notice to the README
* prevent further development in the POC repo

Recommended archive wording:

```text
This repository has been migrated to the KCLScaledAgileFramework / System Team project and is retained for historical reference only.
```

---

# Validation Checklist

| Validation Item       | Status |
| --------------------- | ------ |
| Repository migrated   | ☐      |
| Pipelines updated     | ☐      |
| Governance applied    | ☐      |
| PR validation working | ☐      |
| CI validation working | ☐      |
| Documentation updated | ☐      |
| POC repo archived     | ☐      |

---

# Future Enhancements

Potential future improvements:

* API-driven migration automation
* MCP-assisted repository commissioning
* automated pipeline registration
* automated repo archive workflows
* standardised migration reporting

---
