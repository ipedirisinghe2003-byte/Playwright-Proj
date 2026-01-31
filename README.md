# Test Suite - Playwright Automation

This repository contains automated tests built with Playwright to validate function behavior and UI interactions.

## Project Structure

- `tests/` - Contains all test files
  - `positive-function.spec.js` - Tests for valid input scenarios
  - `negative-function.spec.js` - Tests for edge cases and error handling
  - `ui-test.spec.js` - UI interaction tests
- `playwright.config.ts` - Playwright configuration file
- `playwright-report/` - HTML test reports (generated after test runs)
- `test-results/` - Detailed test failure information (generated after test runs)

## Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Steps to Install Dependencies

1. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

2. Install dependencies using npm:
   ```bash
   npm install
   ```

This will install:
- **@playwright/test** - Playwright testing framework
- **@types/node** - TypeScript type definitions for Node.js

## Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run Tests in Headed Mode (See Browser)
```bash
npx playwright test --headed
```

### Run a Specific Test File
```bash
npx playwright test tests/positive-function.spec.js
```

### Run Tests in Debug Mode
```bash
npx playwright test --debug
```

### View Test Report
After running tests, view the HTML report:
```bash
npx playwright show-report
```

## Test Files

- **positive-function.spec.js** - Validates correct behavior with valid inputs
- **negative-function.spec.js** - Tests error handling and edge cases
- **ui-test.spec.js** - Tests user interface interactions

## Test Results

- **playwright-report/** - Contains the HTML test report with detailed results
- **test-results/** - Contains error context and failure details for each test

## Additional Commands

### Update Playwright Browsers
```bash
npx playwright install
```

### Run Tests with Specific Browser
```bash
npx playwright test --project=chromium
```

### Run Tests with Tracing
```bash
npx playwright test --trace on
```

## Troubleshooting

- If tests fail, check the `test-results/` directory for error details
- View the HTML report in `playwright-report/` for visual debugging
- Use `--debug` flag to step through tests interactively
