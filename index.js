// add two numbers together
function add(num1, num2) {
  return num1 + num2;
}

// subtract one number from another
function subtract(num1, num2) {
  return num1 - num2;
}

// multiply two numbers together
function multiply(num1, num2) {
  return num1 * num2;
}

// divide one number by another
function divide(num1, num2) {
  return num1 / num2;
}

// increment a number
function inc(num) {
  return num += 1;
}

// decrement a number
function dec(num) {
  return num -= 1;
}

// turn a string into an integer
function makeInt(string) {
  return parseInt(string, 10);
}

// turn a string into a number, keeping the decimal
function preserveDecimal(string) {
  return parseFloat(string, 10);
}
