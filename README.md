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
### Class Demo - Part I: Unit Test
- [ ] Navigate to the `class_demo` folder
- [ ] Create a `math.spec.js` file for `math.js` in the `__tests__` folder
- [ ] Import `const { add } = require("../math");` to `math.js` test file
- [ ] Write a **unit test** for the `add` function

### Class Demo - Part II: Unit and Integration Test


## Small Group Exercises

### Small Group Exercises - Part I: Math Function Unit Tests
- [ ] Navigate to the `group_exercises` folder
- [ ] Create a `__tests__` folder
- [ ] Create a `spec` file in the `__tests__` folder for the `math.js` file
- [ ] Import `const { sub, mult, div } = require("../math");` to `math.js` test file
- [ ] Write **unit tests** for each math function
- [ ] Ensure that all tests pass
- [ ] Put all `math.js` tests in a `describe` block

### Small Group Exercises - Part II: 

