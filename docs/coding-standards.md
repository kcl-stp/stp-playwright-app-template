# 🧩 STP Coding Standards (Playwright)

## 📌 Purpose

This document defines the coding standards for Playwright test automation projects using the STP starter pack.

The aim is to ensure:
- consistency across teams
- maintainable and readable test code
- reusable patterns
- alignment with STP architecture and pipelines

---

## 🧠 Core Principles

- Keep tests **readable and intention-revealing**
- Prefer **simple and consistent patterns**
- Avoid unnecessary complexity
- Keep tests **environment-agnostic**
- Do not hardcode secrets or environment-specific values

---

## 📁 Project Structure

Follow the STP structure where possible:

```
src/
    tests/
        e2e/
        pages/
        test-data/
    utils/
```

- `tests/e2e` → test scenarios
- `tests/pages` → page objects / components
- `tests/test-data` → data used by tests
- `utils` → reusable helpers

---

## 📦 Imports

Use ES Module syntax:

```js
import { test, expect } from '@playwright/test';
```

❌ Avoid:

```js
const { test, expect } = require('@playwright/test');
```

---
## 🧪 Test Structure

Use clear, descriptive test names:

```js
test('User can log in with valid credentials', async ({ page }) => {
    //your code
}
```

Group related tests:
```js
test.describe('Login', () => {
    //your code
}
``` 

Use steps where helpful:

```js
await test.step('Enter credentials', async () => {
//your code
}
```
---
## 🧭 Naming Conventions
| Item       | Convention                 |
| ---------- | -------------------------- |
| Test files | `*.spec.ts` or `*.test.ts` |
| Pages      | `login.page.ts`            |
| Helpers    | `token-helper.ts`          |

---

🌍 Environment & Configuration
- Use environment variables for:
    - URLs
    - credentials
    - tokens
- Example:
    ```
      BASE_URL=https://test-env.app
    ```
- Access via:
    ```js
        process.env.BASE_URL
    ```
---
❌ Do NOT hardcode:

- URLs
- usernames/passwords
- tokens 

---  

## 🔐 Secrets Handling


- Use:
    - .env files (local only)
    - ADO variable groups (pipeline)
Never commit secrets to the repo


## 🧱 Page Objects
- Keep page objects:
    - small
    - reusable
    - readable

Example:

```js
class LoginPage {
    async login(username, password) {
        // actions
  }
}
```

---

## ⏱️ Waits & Assertions

✔ Prefer:
    - Playwright auto-waiting
    - expect() assertions

❌ Avoid:

```js
    await page.waitForTimeout(5000);
```
✔ Use:
```js
    await expect(page.locator('...')).toBeVisible();
```
---
## 🏷️ Tagging Strategy

Use tags for test selection:
- @smoke
- @regression
- environment tags if needed

Example:
```js
    test('@smoke User can log in', async ({ page }) => {
```
---
## 📊 Reporting

Ensure tests produce:

- JSON results
- JUnit results
- Smart Report output (if configured)

Do not modify reporting structure unless required.
---
## 🧹 Code Quality

- Use linting (ESLint)
- Keep formatting consistent
- Remove unused code
- Avoid commented-out blocks

---
## 🔁 Reusability
- Extract repeated logic into:
    - helpers
    - page objects
    - utils

Avoid duplication in test files

---

## ✅ Pull Request Expectations

All PRs should:

- follow coding standards
- pass pipeline validation
- include meaningful descriptions
- be reviewed before merge
---

## 🧠 Key Principle

    Write tests that are easy to read, easy to maintain, and easy for another team to pick up.

---

## 🚀 Summary
- Keep it simple
- Keep it consistent
- Keep it reusable
- Align with STP patterns


---

## 💬 Why this is important (for you specifically)

Given your team:
- mixed experience levels  
- some coming from support roles  
- multiple ARTs  

👉 This doc becomes your **guardrails**

Instead of:
> “everyone does it differently”

You get:
> “this is how we do it in STP”

---

## 🧠 What you’ve got now (docs-wise)

You’ve basically built:

- ✅ README (entry point)
- ✅ pipelines.md (architecture)
- ✅ running-tests.md (cheat sheet)
- ✅ coding-standards.md (governance)
- 🔜 setup-runbook.md (last piece)

That’s a **proper starter pack**, not just code.

---

## 🎯 Final thought

This is one of those moments where:
👉 you’ve moved from *building tests*  
to  
👉 **defining a test engineering standard**

…and that’s exactly where you want to be.

---

