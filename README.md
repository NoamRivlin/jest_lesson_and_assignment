# Introduction to Testing in JavaScript

## Steps to Write a Test

1. Import the function (component or module) you want to test into the spec file
2. Pass necessary inputs to function
3. Define what you expect as the output
4. Check if the function produces the expected output

## Initial Setup (already completed)

- [x] Ran `npm init -y`
- [x] Installed Jest as a `devDependency` with `npm i --D jest`
- [x] Updated `scripts` in `package.json` to:
  ```
  "scripts": { "test": "jest" }
  ```
- [x] Created `.gitignore` and added `node_modules` to file

## Student Project Setup

Complete the following steps to set up this project locally

- [ ] Fork and clone this repository
- [ ] Run `npm i` to install dependencies
- [ ] Run `npm test` to run tests

## Class Demo

### Class Demo - Part I: Unit Test `generateText`

- [ ] Navigate to the `class_demo` folder
- [ ] View the code in the `textValidation.js` file
- [ ] **Answer the questions:**
  - [ ] What do you need to test?
  - [ ] What types of tests will you be writing for each function?
- [ ] Create a `spec` file for `textValidation.js` in the `__tests__` folder
- [ ] Import `const { generateText, validateText, validateAndReturn } = require("./textValidation")` to the `textValidation.js` test file
- [ ] Write a **unit test** for the `generateText` function
- [ ] Ensure that all tests pass
- [ ] Place the test block inside a `describe` method
- [ ] Run `npx jest --coverage` to view code test coverage

### Class Demo - Part II: Unit Test `validateText`

- [ ] Write unit tests for the `validateText` function to ensure that:
  - [ ] `validateText` outputs `true` when the input is a text string
  - [ ] `validateText` outputs `false` when the input is empty
  - [ ] `validateText` outputs `false` when the input is a number
- [ ] Place all unit tests in a describe block

### Class Demo - Part III: Integration Test `validateAndReturn`

- [ ] Write an integration test for the `validateAndReturn` function

## Small Group Exercises

### Small Group Exercises - Part I: Math Function Unit Tests

- [ ] Navigate to the `group_exercises` folder
- [ ] Create a `__tests__` folder
- [ ] Create a `spec` file in the `__tests__` folder for the `math.js` file
- [ ] Import `const { add, sub, mult, div } = require("../math");` to `math.js` test file
- [ ] Write **unit tests** for each math function
- [ ] Ensure that all tests pass
- [ ] Put all `math.js` tests in a `describe` block

### Small Group Exercises - Part II: Unit Test `filterByTerm` in `searchFilter.js` file

- [ ] Create a `spec` file in the `__tests__` folder for the `searchFilter.js` file
- [ ] Import the function you want to test to `searchFilter.js` test file
- [ ] Write a **unit test** for the target function
- [ ] Ensure that all tests pass
- [ ] Run `npx jest --coverage` to view code test coverage

### Small Group Exercises - Part III: Write Unit and Integration Tests for Functions in `validatedDivision.js` file

- [ ] Determine which test cases you will write for each function in the `validatedDivision.js` file
  - [ ] Be sure to test all possible outputs for each function
- [ ] Write unit and integration tests
- [ ] Ensure that all tests pass

### Small Group Exercises - Challenge
- [ ] Write a `beforeAll` block that logs `setup` before all tests are run in the `validatedDivision.js` test file
- [ ] Use the appropriate method to log `test` before each test in the `validatedDivision.js` test file runs