//Whenever you write a test, you will follow the steps:
// 1. Import the function to test
// 2. give an input to the function
// 3. define what to expect as the output
// 4. check if the function produces the expected output

const { add, sub, mult, div } = require("../math");

//Test method is provided by Jest and is where we run our tests
//Takes in two arguments: Text to describe your test and a function

// -------- PART II --------- //
it("Will correctly add numbers", () => {
  expect(add(1, 2)).toEqual(3);
});

it("Will correctly subtract numbers", () => {
  expect(sub(1, 2)).toEqual(3);
});
it("Will correctly multiply numbers", () => {
  expect(mult(4, 5)).toEqual(20);
});
it("Will correctly divide numbers", () => {
  expect(div(8, 2)).toEqual(4);
});
