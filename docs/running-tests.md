# Running Playwright Tests
*A cheat sheet of the most powerful Playwright CLI commands, explained in plain English, with a sprinkle of real-world context and developer wisdom*

---
## 1. Setting up your project

```js
npm init playwright@latest
```
🎯 What it does:

- Sets up a sample project
- Installs browsers
- Adds test examples
- Creates config files

**Why it’s awesome: You can literally go from zero to testing in under 1 minute.**

---

## 2. Quick Navigation Table

🧭 Quick Navigation Table
| Action                  | Command                                 |
| ----------------------- | --------------------------------------- |
| Run all tests           | `npx playwright test`                   |
| Run specific test       | `npx playwright test login.test.ts`     |
| Run headed browser      | `npx playwright test --headed`          |
| Debug test              | `npx playwright test --debug`           |
| Run only matching title | `--grep="Login"`                        |
| Codegen flow recording  | `npx playwright codegen <url>`          |
| Test specific browser   | `--project=chromium / firefox / webkit` |
| Generate HTML report    | `--reporter=html`                       |
| Open test report        | `npx playwright show-report`            |
| View trace replay       | `npx playwright show-trace trace.zip`   |
