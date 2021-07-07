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

function inc(num) {
  return add(num, 1);
}

function dec(num) {
  return subtract(num, 1);
}

function makeInt(num) {
  return Number.parseInt(num, 10);
}

function preserveDecimal(num) {
  return Number.parseFloat(num);
}