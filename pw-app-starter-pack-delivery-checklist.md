🎯 PW-App Starter Pack - Scooter-level
---

👉 Have a clean, working, “team-usable” starter pack baseline

- Not perfect.
- Not feature-complete.
- Just usable, understandable, and runnable.
---
## 🧭 Focus Areas (Scooter-level)

### 1️⃣ Starter Pack Structure — sanity check

Goal: confirm it’s clean and logical

Checklist:

 - src/tests/e2e exists and makes sense
 - src/tests/smoke exists
 - src/pages present
 - src/utils present
 - test-data pattern is clear
 - no weird/legacy folders hanging around

👉 This is about confidence + clarity, not redesign

---

### 2️⃣ Example Tests — make them “tell the story”

Goal: someone opens the repo and gets it

Checklist:

 - at least 1 smoke test (simple, fast, reliable)
 - at least 1 e2e test
 - include one flaky test (for Smart Report demo 👀)
 - test names are readable (BDD-style 👍)

👉 These are teaching tools, not just tests

---

### 3️⃣ Config + Env — remove friction

Goal: no confusion when running locally

Checklist:

 - .env.example present
 - baseURL pattern clear
 - no hardcoded values
 - config file readable (not over-engineered)

👉 If someone asks “what do I change?” → it should be obvious

---

### 4️⃣ Reporting — prove it works

Goal: show value immediately

Checklist:

 - JUnit output working
 - JSON output working
 - Smart Report generates locally
 - flaky test actually shows something useful

👉 This is your “wow” moment for users

---

5️⃣ Pipeline sanity check (don’t overbuild)

Goal: confirm it runs end-to-end

Checklist:

 - pr-validation.yml exists and runs
 - ci.yml exists
 - pipeline installs + runs tests
 - results are visible (even basic)

👉 No perfection — just working baseline

---

6️⃣ README — “no hand-holding needed”

Goal: someone can run it without asking you

Minimum sections:

 - What is this?
 - How to install
 - How to run tests
 - How to view reports
 - Where to configure

👉 If you had to give this to Nathan/Liam — would they manage?

---
 
## 🤖 Definition of Done

You’re done when:

✅ Repo can be cloned
✅ npm install works
✅ tests run locally
✅ report is generated
✅ pipeline runs
✅ README gets someone started