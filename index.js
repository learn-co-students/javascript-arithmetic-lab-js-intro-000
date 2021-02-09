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

function increment(n) {
  return n+1;
}

function decrement(n) {
  return n-1;
}

function makeInt(n) {
  var text = n;
  var parsed = parseInt(text, 10);
  return parsed;
}

function preserveDecimal(n) {
  var pointed = parseFloat(n);
  return pointed;
}
