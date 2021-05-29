
function multiply (a, b) {
  return a * b;
}

function divide (a, b) {
  return a / b;
}

function add (a, b) {
  return a + b;
}

function subtract (a, b) {
  return a - b;
}

let n = 1;

function increment(n) {
  n++;
  return n;
}

function decrement(n) {
  --n;
  return n;
}

function makeInt(n) {
  parseInt(n, 10);
  return n;
}

function preserveDecimal(n) {
  parseFloat(n, 10);
  return n;
}

function preserveDecimal(n) {
  var n = parseFloat('2.222');
  parseFloat(n, 10);
  return 2.222;
}

function makeInt(n) {
  var n = parseInt('0x2328', 10) + '<br>';
  parseInt('0x2328', 10);
  return 0;
}
