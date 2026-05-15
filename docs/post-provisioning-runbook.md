# Post-Provisioning Runbook

## Overview

This runbook describes the recommended post-provisioning steps after the PW-App Starter Pack has been deployed into a consumer Azure DevOps repository using the orchestration pipeline.

The starter pack provides:
- Playwright application test framework
- CI/CD pipeline templates
- Smart Report integration
- Smoke and E2E test examples
- Governance and onboarding documentation

The consumer team is responsible for completing repository governance configuration and validating the framework against their target application.

---

# 1. Confirm Repository Deployment

## Validation Checklist

Confirm the following:

- Repository exists in Azure DevOps
- `deployment` branch exists
- Starter pack files/folders are present
- README and docs are accessible
- Pipelines folder exists
- Playwright config files exist
- Smoke tests are available

---

# 2. Clone and Validate Framework

## Clone Repository

```bash
  git clone <repo-url>
  git checkout deployment
  npm install
  npx playwright install
```
---
# 3. Execute Baseline Validation Tests

1. Run Smoke Tests >> `npm run test:smoke`
2. Run Smart Report Validation >> `npm run test:smart`
   Expected outcome:
   - Tests execute successfully
   - Smart Report generates correctly
   - HTML report is accessible
---
# 4. Configure Repository Governance
Recommended Branch Strategy

```feature/* → integration → main```

Recommended Branch Policies

Configure the following:

- Pull Requests required for main/integration
- Minimum reviewers enabled
- Successful CI pipeline required
- Direct push to main restricted
- Delete source branch after merge enabled

---

# 5. Configure CI/CD Pipelines

Recommended pipelines:

| Pipeline                       | Purpose                |
| ------------------------------ | ---------------------- |
| playwright-pr.yml              | PR validation          |
| playwright-ci.yml              | CI execution           |
| playwright-scheduled.yml       | Scheduled regression   |
| playwright-smart-report-v2.yml | Smart Report execution |

---

# 6. Configure Permissions

Recommended access model:

| Role           | Access                   |
| -------------- | ------------------------ |
| Contributors   | Push to feature branches |
| Reviewers      | Approve PRs              |
| Administrators | Manage repo and policies |

---
# 7. Reporting and Evidence

The baseline starter pack includes:

- Playwright HTML reporting
- Smart Report / Stagewright reporting
- Pipeline artifacts

Optional future integrations may include:

- Power BI dashboards
- Aggregated enterprise reporting
- Power Automate workflows

---
# 8. Optional Add-ons

The PW-App starter pack is intentionally lightweight with a project folder structure that is based for application testing.
However, instead of having individual starter packs for different testing types we have vaidated that app, api and performance test frameworks can co-exist and run tests independantly.

add-ins will include:

- API testing
- Performance testing
- Accessibility testing
- AI-assisted testing utilities

 # 9. Utilities

There are also utilities that can be used for various use cases:

| Utility                        | Purpose                |
| ------------------------------ | ---------------------- |
| playwright-pr.yml              | PR validation          |
| playwright-ci.yml              | CI execution           |
| playwright-scheduled.yml       | Scheduled regression   |
| playwright-smart-report-v2.yml | Smart Report execution |

 


