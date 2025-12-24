Playwright UI & API Automation Framework
======================================

This project is a beginner-friendly Playwright automation framework
covering both UI and API testing.

--------------------------------------
TECH STACK
--------------------------------------
- Playwright
- TypeScript
- Node.js
- dotenv
- HTML reporting

--------------------------------------
SETUP INSTRUCTIONS
--------------------------------------

1. Clone Repository
   git clone https://github.com/PRASADSQA/Playwright_UI_API_Framework.git

2. Install Dependencies
   npm install

3. Install Browsers
   npx playwright install

4. Setup Environment Variables
   copy .env.example .env

--------------------------------------
RUNNING TESTS
--------------------------------------

Run all tests:
   npx playwright test

Run UI tests:
   npx playwright test tests/ui

Run API tests:
   npx playwright test tests/api

View HTML report:
   npx playwright show-report

--------------------------------------
PROJECT STRUCTURE
--------------------------------------

pages/    -> Page Object Model
tests/ui  -> UI tests
tests/api -> API tests
utils/    -> Helpers
data/     -> Test data

--------------------------------------
AUTHOR
--------------------------------------
Prasad
