const {
  divideTwoNums,
  validateNumber,
  validateAndDivide,
} = require("../validatedDivision");

beforeAll(() => {
  console.log("setup");
});

describe("divideTwoNums", () => {
  it("it should divide two numbers", () => {
    expect(divideTwoNums(4, 2)).toBe(2);
  });
});

describe("validateNumber", () => {
  it("should return true if number is valid", () => {
    expect(validateNumber(4)).toBe(true);
  });
  it("should return false if number is not valid", () => {
    expect(validateNumber("4")).toBe(false);
  });
  it("should return false if number is 0", () => {
    expect(validateNumber(0)).toBe(false);
  });
});

describe("validateAndDivide", () => {
  it("should return the result of dividing two numbers", () => {
    expect(validateAndDivide(4, 2)).toBe(2);
  });
  it("should return 'Invalid input' if one of the numbers is not valid", () => {
    expect(validateAndDivide("4", 2)).toBe("Invalid input");
  });
});
