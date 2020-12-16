function add(a,b) {
  var add = a + b;
  return add;
}

function subtract(a,b) {
  var subtract = a - b;
  return subtract;
}

function multiply(a,b) {
  var multiply = a * b;
  return multiply;
}

function divide(a,b) {
  var divide = a / b;
  return divide;
}

function increment(n) {
  var n = ++n;
  return n;
}

function decrement(n) {
  var n = --n;
  return n;
}

function makeInt(n) {
   return parseInt(n, 10);
}

function preserveDecimal(n) {
  var n = parseFloat(n);
  return n;
}
