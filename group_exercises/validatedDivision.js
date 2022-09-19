const divideTwoNums = (num1, num2) => num1 / num2;

const validateNumber = (num) => {
  if (typeof num !== "number") {
    return false;
  }
  if (num === 0) {
    return false;
  }
  return true;
};

const validateAndDivide = (num1, num2) => {
  if (!validateNumber(num1) || !validateNumber(num2)) {
    return "Invalid input";
  }
  return divideTwoNums(num1, num2);
};

module.exports = { divideTwoNums, validateNumber, validateAndDivide };
