# 🚀 STP Playwright App Starter Pack

This repository provides a **ready-to-use Playwright test automation starter pack**.

It is designed to give teams a **working baseline** with:

* test structure
* CI/CD pipelines
* reporting
* consistent conventions

---

## 🧭 Quick Start

### 1️⃣ Create your repo

Use this repository as a template (or clone it).

---

### 2️⃣ Install dependencies

```bash
npm install
npx playwright install
```

---

### 3️⃣ Run tests

```bash
npm run test:smoke
```

Or run all tests:

```bash
npx playwright test
```

---

## 📦 What’s included

* ✅ Playwright test framework (`src/`)
* ✅ Example tests (e2e + smoke)
* ✅ CI/CD pipelines (`pipelines/`)
* ✅ Setup scripts (`scripts/`)
* ✅ Reporting (JUnit + Smart Report ready)
* ✅ Configured Playwright environments

---

## 🧪 Test Structure

```plaintext
src/tests/
  e2e/         # user journey tests
  smoke/       # fast validation checks
  pages/       # reusable actions/helpers (lightweight)
  test-data/   # test data
```

---

## ▶️ Pipelines

This starter pack includes ready-to-use Azure DevOps pipelines:

* `playwright-ci.yml` → CI execution
* `playwright-pr.yml` → PR validation
* `playwright-scheduled.yml` → scheduled runs
* `playwright-smart-report-v2.yml` → enhanced reporting

---

## 📚 Documentation

Detailed guides are available in `/docs`:

* Setup runbook
* Running tests
* Pipeline guidance
* Coding standards

---

## 🔗 Platform Guidance

For working with this repository and the wider STP platform:

* GitHub Cheat Sheet (STP)
* GitHub + Azure DevOps Working Model (STP)

---

## 🎯 Key Principles

* Keep tests **user-focused and readable**
* Prefer **simple, maintainable patterns** over heavy abstraction
* Treat this starter pack as a **baseline**, not a finished solution

---

## 🧠 How to Use This Starter Pack

1. Run the Quick Start steps
2. Validate tests locally
3. Run the CI pipeline
4. Extend tests for your application

---

## 🚧 Notes

* Some example tests are intentionally flaky to demonstrate reporting behaviour
* URL-based tests may depend on environment availability

---

## 📌 Summary

This starter pack provides:

> A working, validated foundation for Playwright-based test automation,
> aligned with STP platform standards and ready for team adoption.
