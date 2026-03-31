# ⚙️ STP Setup Runbook & Checklist (Playwright App Starter Pack)

## 📌 Purpose

This runbook provides step-by-step guidance for setting up a new test automation project using the STP Playwright App Starter Pack.

It includes:
- prerequisites
- setup steps
- validation checks
- a completion checklist

---

## 🧠 Overview

The goal is to ensure that any team can:

- clone or initialise the starter pack
- install dependencies
- configure their environment
- successfully run tests locally and via pipeline

---

## 🛠️ 1. Prerequisites

Ensure the following are installed:

- Node.js (v18+ recommended, v20 preferred)
- npm (comes with Node)
- Git
- Access to:
  - GitHub (starter pack source)
  - Azure DevOps (team repo + pipelines)

Verify installation:

```bash
    node -v
    npm -v
    git --version
```
---
## 📥 2. Initialise Project
Option A — Clone Starter Pack
```bash
git clone <starter-pack-repo-url>
cd pw-app-starter-pack
```
Option B — Create new repo and copy starter pack
- Create new repo in ADO
- Copy contents of starter pack into repo
- Commit and push

---
## 📦 3. Install Dependencies
```bash
npm ci
npx playwright install --with-deps
```
---
## ⚙️ 4. Environment Configuration

Create environment configuration:

```
.env
```

Example:
```bash
BASE_URL=https://your-app-url
USERNAME=test-user
PASSWORD=your-password
```
---
## 🔐 5. Secrets Handling
- Do NOT commit .env files
- Use:
    - local .env for development
    - ADO variable groups for pipelines
---
## 🧪 6. Validate Local Test Execution

Run:
```bash 
npx playwright test
```
Expected:

tests execute successfully
report is generated

Optional:

```bash
npx playwright show-report  
```
---
## 🔁 7. Pipeline Setup (ADO)

Ensure pipeline YAML is present:

- pr-validation.yml
- ci.yml (or equivalent)

Confirm pipeline includes:
```bash
npm ci
npx playwright install --with-deps
npx playwright test
```
---
## ✅ 8. Validate Pipeline Execution

- Create a feature branch
- Raise a PR
- Confirm:
    - pipeline triggers
    - tests run successfully
    - results are published
---
## 🧪 9. Project-Specific Setup (Team Responsibility)

Each team must define:

- 🔐 authentication/token generation approach
- 🧾 test data preparation
- 🌍 environment-specific configuration
- 🏷️ tagging strategy
- 🔁 any pre-test setup steps (API calls, DB state, etc.)

👉 These should be documented in the project repo.

---
## 📊 10. Reporting (Optional but Recommended)

If implemented:

- configure storage (Azure Blob / AWS S3)
- persist JSON results
- connect Power BI dashboard
---

## 🧾 11. Completion Checklist

- ✔ Repo created (ADO)
- ✔ Starter pack added
- ✔ Dependencies installed
- ✔ Playwright browsers installed
- ✔ Environment variables configured
- ✔ Tests run locally successfully
- ✔ Pipeline configured
- ✔ PR validation working
- ✔ Test results generated
- ✔ Project-specific setup documented
---

## 🚨 Common Issues
| Issue                  | Cause                     | Fix                              |
| ---------------------- | ------------------------- | -------------------------------- |
| Tests fail locally     | Missing env variables     | Check `.env`                     |
| Browsers not installed | Playwright setup skipped  | Run `npx playwright install`     |
| Pipeline fails         | Missing dependencies      | Ensure `npm ci` runs             |
| Auth failures          | Token/data not configured | Implement project-specific setup |
---
## 🧠 Key Principle

- The starter pack provides the baseline.

- Teams are responsible for completing application-specific setup.

---
## 🚀 Summary
- Clone → Install → Configure → Run → Validate
- Extend with project-specific needs
- Align with STP standards for consistency


---

## 🧠 Why this is important

This doc does 3 important things:

### 1. Removes dependency on any 'single points of failure'
No more:
> “how do I set this up?”

---

### 2. Forces teams to think
That section:
👉 **Project-Specific Setup**

…is doing a lot of heavy lifting.

---

### 3. Supports your SDLC enforcement

This ties directly into:
- PR validation  
- pipelines  
- repo provisioning (your next feature 👀)

---

# 🧩 Your doc set is now COMPLETE

You now have:

- ✅ `README.md` → what is this  
- ✅ `pipelines.md` → how it runs  
- ✅ `running-tests.md` → quick usage  
- ✅ `coding-standards.md` → how to write tests  
- ✅ `setup-runbook.md` → how to get started  

👉 That is a **the starter pack product**

---



