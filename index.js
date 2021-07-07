function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function increment(n) {
  return n += 1;
}

function decrement(n) {
  return n -= 1;
}

function makeInt(n) {
   var n = parseInt(n, 10);
  return n;
}

function preserveDecimal(n) {
  var n = parseFloat(n);
  return n;
}
