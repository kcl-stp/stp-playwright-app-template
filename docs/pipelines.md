# 🔁 Pipelines

## 📌 Overview

This starter pack supports **two pipeline contexts**:

- **GitHub Actions** → used to validate and maintain the STP starter pack itself  
- **Azure DevOps Pipelines (ADO)** → used by teams to execute tests within governed SDLC workflows  

👉 In the STP model:

- **GitHub = Source of Truth (Starter Pack Product)**
- **ADO = Consumption + Governance + Execution**

---

## 🧭 Pipeline Architecture

![alt text](image.png)

---

## 🔄 End-to-End Flow

### 1. Feature Development
- Teams develop tests in their **ADO repository**
- Feature branches are created and worked on locally

---

### 2. Starter Pack Source (GitHub)
- STP starter packs are maintained in **GitHub**
- Teams consume and extend the baseline into their ADO repos
- Provides:
  - consistent structure
  - reusable framework patterns
  - baseline pipeline configuration

---

### 3. Build & Test Trigger
- Pipeline is triggered via:
  - Pull Request (PR)
  - Commit to branch
- Executes:
  - dependency install
  - Playwright tests
  - linting / static checks (if configured)

---

### 4. Publish Artifacts
- Test outputs are published as pipeline artifacts:
  - JSON results
  - JUnit reports
  - Smart Report output

👉 These artifacts form the baseline for reporting and traceability

---

### 5. Test Execution / Stage Promotion
- Pipelines execute tests across environments (e.g. Dev, Test)
- Supports:
  - SDLC enforcement (PR validation, approvals)
  - controlled promotion between stages
  - environment-specific execution

---

### 6. Reporting & Observability *(Optional but Recommended)*
- Pipeline artifacts can be persisted to:
  - Azure Blob Storage
  - AWS S3

- Enables:
  - historical trend analysis
  - cross-run comparisons
  - centralised reporting

- Visualisation tools:
  - Power BI dashboards
  - custom reporting solutions

---

## ⚙️ GitHub Actions (Starter Pack CI)

GitHub Actions are used to validate the **starter pack itself**.

### Typical use:
- install dependencies
- run Playwright tests
- validate structure/config
- generate reports
- (optional) publish release/tag

### Example

```yaml
name: Playwright Starter Pack CI

on:
  push:
    branches: [ main ]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright Browsers
        run: npx playwright install --with-deps

      - name: Run tests
        run: npx playwright test

      - name: Upload report
        uses: actions/upload-artifact@v4
        with:
          name: playwright-report
          path: playwright-report/
