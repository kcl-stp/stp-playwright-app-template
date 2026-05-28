# 🚀 Starter Pack Repository Governance and SDLC Setup Guide

## Overview

This document describes the recommended repository governance, branch policies, permissions, and CI/CD controls for provisioned Playwright starter-pack repositories.

The purpose of this guide is to:

* Maintain consistent SDLC workflows
* Support code quality enforcement
* Ensure governance and auditability
* Reduce onboarding and setup effort
* Provide a repeatable operational model across teams

This guidance applies to repositories provisioned using the Test Capability orchestration pipeline and Playwright starter pack templates.

The following diagram represents the starter pack provisioning and governance bootstrap flow

```mermaid
flowchart TD
    A[Test Capability Request] --> B[Review request type]

    B --> C{Request Type}

    C -->|New starter pack| D[Run Starter Pack Orchestration Pipeline]
    C -->|POC migration| E[Migrate repo from QA Automation POC]
    C -->|Enhancement| F[Add required test enabler<br/>API / Accessibility / Performance / IaC]

    D --> G[Create / populate target ADO repo]
    E --> G
    F --> G

    G --> H[Create required branches<br/>deployment / integration / main]
    H --> I[Configure PR and CI pipelines]
    I --> J[Run initial framework validation]

    J --> K[Smoke Tests]
    J --> L[Smart Report Validation]
    J --> M[Static Checks]

    K --> N{Validation Passed?}
    L --> N
    M --> N

    N -->|No| O[Fix setup issues]
    O --> J

    N -->|Yes| P[Run SDLC Governance Bootstrap<br/>apply-sdlc-policies.yml]

    P --> Q[Apply branch policies]
    Q --> R[Require PR validation]
    Q --> S[Require reviewers]
    Q --> T[Require work item linking]
    Q --> U[Restrict direct pushes]

    R --> V[Repository Ready for Team Use]
    S --> V
    T --> V
    U --> V
```
---

# 1. Recommended Branch Strategy

## Standard Branch Flow

```text
feature/* → integration → main
```
---

## Branch Purpose

| Branch      | Purpose                                            |
| ----------- | -------------------------------------------------- |
| feature/*   | Development and enhancement work                   |
| integration | Shared integration and validation branch           |
| main        | Stable production-ready baseline                   |
| deployment  | Initial starter-pack deployment branch (temporary) |

## Notes

* Direct commits to `main` should be restricted.
* Pull Requests should be used for all merges.
* `deployment` can be deleted after successful onboarding and validation.

---

# 2. Repository Permissions

## Recommended Access Model

| Role           | Recommended Access              |
| -------------- | ------------------------------- |
| Contributors   | Push to feature branches        |
| Reviewers      | Approve Pull Requests           |
| Administrators | Manage repo and branch policies |
| Readers        | Read-only access                |

## Recommended Practices

* Restrict admin access where possible.
* Use groups rather than individual users where appropriate.
* Remove unused access regularly.
* Ensure repository ownership is clear.

---

# 3. Branch Policies

```mermaid
flowchart LR
    A[feature/* branch] --> B[Pull Request to integration]

    B --> C[PR Validation Pipeline<br/>playwright-pr.yml]
    C --> D[Static Checks<br/>ESLint / syntax / dependency checks]
    D --> E[Smoke Tests]
    E --> F{Checks Passed?}

    F -- No --> G[Fix Issues]
    G --> B

    F -- Yes --> H[Reviewer Approval Required]
    H --> I{Approved?}

    I -- No --> G
    I -- Yes --> J[Merge to integration]

    J --> K[CI Pipeline Triggered<br/>playwright-ci.yml]
    K --> L[Integration Validation]
    L --> M[Publish Reports / Artifacts]

    M --> N[Pull Request to main]
    N --> O[Governance Checks]
    O --> P[Reviewer Approval]

    P --> Q[Merge to main]

    Q --> R[Stable Governed Baseline]

```

## Main Branch Policies

Recommended settings for `main`:

* Pull Request required
* Minimum reviewers enabled
* Successful PR validation pipeline required
* Direct push restricted
* Delete source branch after merge enabled
* Comment resolution required before merge

## Integration Branch Policies

Recommended settings for `integration`:

* Pull Request required
* Successful CI validation required
* Minimum reviewers enabled
* Direct push restricted where possible

---

# 4. CI/CD Governance Controls

```mermaid
flowchart LR
    A[Pull Request<br/>feature/* to integration] --> B[playwright-pr.yml]
    B --> C[Static Checks]
    B --> D[Smoke Tests]
    B --> E[PR Evidence]

    F[Merge to integration] --> G[playwright-ci.yml]
    G --> H[Fuller CI Validation]
    G --> I[Publish Artifacts]
    G --> J[Smart Report / HTML Report]

    K[Scheduled Trigger] --> L[playwright-scheduled.yml]
    L --> M[Regression Run]

    N[Manual / Commissioning Trigger] --> O[apply-sdlc-policies.yml]
    O --> P[Branch Policies Applied]
    O --> Q[Governance Controls Enabled]

```
---
## Required Pipelines

| Pipeline                       | Purpose                          |
| ------------------------------ | -------------------------------- |
| playwright-pr.yml              | Pull Request validation          |
| playwright-ci.yml              | Continuous Integration execution |
| playwright-scheduled.yml       | Scheduled regression execution   |
| playwright-smart-report-v2.yml | Smart Report generation          |

---
## Recommended Pipeline Controls

* PR validation required before merge
* Smoke tests executed during PR validation
* CI pipeline triggered on integration/main updates
* Reports published as pipeline artifacts
* Failed tests block promotion where appropriate

---

# 5. Static Validation and Quality Controls

## Recommended Checks

| Control           | Purpose                      |
| ----------------- | ---------------------------- |
| Linting           | Code consistency and quality |
| Syntax validation | Prevent invalid commits      |
| Dependency checks | Identify package issues      |
| Test execution    | Validate framework health    |
| Report publishing | Provide execution evidence   |

## Suggested Future Enhancements

* SonarQube integration
* Security scanning
* Automated governance enforcement
* Accessibility scanning
* Coverage reporting

---

# 6. Initial Framework Validation

## Post-Provisioning Validation Steps

After provisioning:

### Clone Repository

```bash
git clone <repo-url>
```

### Checkout Deployment Branch

```bash
git checkout deployment
```

### Install Dependencies

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install
```

### Execute Smoke Tests

```bash
npm run test:smoke
```

### Execute Smart Report Validation

```bash
npm run test:smart
```

## Expected Outcome

* Tests execute successfully
* Reports generate successfully
* CI/CD pipelines can execute successfully
* Repository structure is validated

---

# 7. Reporting and Evidence

## Baseline Reporting

The starter pack includes:

* Playwright HTML reporting
* Smart Report / Stagewright reporting
* Pipeline artifacts
* Execution logs

## Optional Future Reporting Enhancements

Future integrations may include:

* Power BI dashboards
* Power Automate reporting workflows
* Aggregated cross-project reporting
* Enterprise quality dashboards

---

# 8. Governance Runbook Checklist

## Repository Setup

* Repository created
* Deployment branch created
* Starter pack deployed
* Required files present

## Governance

* Branch policies configured
* Permissions configured
* PR validation enabled
* CI pipelines linked

## Validation

* Smoke tests executed
* Smart Report generated
* Pipeline execution confirmed

---

# 9. Troubleshooting

## Authentication Issues

Check:

* PAT exists and is valid
* Variable group linked correctly
* Repo permissions configured correctly

## Pipeline Issues

Check:

* YAML references
* Node version
* Playwright browser installation
* Branch names

## Deployment Issues

Check:

* Target repository configuration
* Deployment branch creation
* Orchestration pipeline logs

---

# 10. Future Enhancements

The current implementation provides a lightweight and operational MVP.

Future enhancements may include:

* Automated branch policy configuration
* Automated permissions setup
* Config-driven add-ins
* Optional API/performance/accessibility scaffolding
* MCP/AI-assisted provisioning workflows
* Governance-as-code enforcement

---

# Summary

The Playwright starter pack provides a lightweight but scalable SDLC foundation for test automation projects.

The combination of:

* reusable starter packs
* orchestration pipelines
* governance guidance
* CI/CD templates
* reporting capabilities
* validation workflows

supports a repeatable onboarding and delivery model across Test Capability services and future enablers.

---
