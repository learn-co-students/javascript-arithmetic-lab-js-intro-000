// Basic Math Operator

var a = 6;
var b = 3;

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

// Increment and decrement
var n = 5;

function increment(n) {
   n += 1;
   return n;
}

function decrement(n) {
  n -= 1;
  return n;
}

//ParseInt and parseFloat
var string = 3.888888
function makeInt(string) {
  return parseInt(string, 10);
}

function preserveDecimal(string) {
  return parseFloat(string, 10);
}
