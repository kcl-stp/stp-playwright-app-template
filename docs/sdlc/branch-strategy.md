# Git Branching Strategy (Test Automation)

## 🎯 Purpose

Define a simple, consistent branching model for all Test Automation repositories and starter packs.

This supports:

* clean development flow
* controlled integration
* stable releases
* alignment with ADO pipelines

---

## 🧭 Branch Model

```plaintext
feature → integration → main
```

---

## 🧩 Branch Roles

### `main`

* Default branch
* Represents stable, release-ready code
* Protected (no direct commits)

---

### `integration`

* Shared working branch
* Used to combine feature work
* Used for validation and testing before release

---

### `feature/*`

* Short-lived branches
* Created from `integration`
* Used for individual pieces of work

Examples:

* `feature/pw-app-starter-pack`
* `feature/commissioning-checks`
* `feature/ado-orchestration`

---

## 🔄 Workflow

### 1️⃣ Create feature branch

```bash
git checkout integration
git pull
git checkout -b feature/<name>
git push -u origin feature/<name>
```

---

### 2️⃣ Merge feature → integration

* Create Pull Request (PR)
* Review changes
* Merge once approved

---

### 3️⃣ Merge integration → main

* Create PR
* Validate via pipeline
* Merge when stable

---

## 🔐 Branch Protection (GitHub)

### `main`

* Require pull request before merge
* Require at least 1 approval
* Prevent force pushes
* Prevent deletion

---

### `integration`

* Require pull request before merge
* Prevent force pushes

---

## ⚙️ Default Branch

* `main` must be set as the default branch
* Other branches (e.g. `recovery`) should not be used as default

---

## 🧠 Key Principles

* Always branch from `integration`
* Never commit directly to `main`
* Keep feature branches short-lived
* Use PRs for all merges
* Keep the flow simple and consistent

---

## 🚀 Future Enhancements (Next PI)

* Add required status checks (CI pipeline)
* Add PR validation pipeline
* Add environment-based promotion logic
* Align with full SDLC enforcement model

---

## 🎯 Summary

> This branching strategy supports a simple, scalable flow for STP development and starter pack delivery.

It enables:

* controlled change
* repeatable integration
* safe releases
