// math operation functions

function add(a, b) {
  var sum = a + b;
  return sum;
};

function subtract(a, b) {
  var dif = a - b;
  return dif;
};

function multiply(a, b) {
  var prod = a * b;
  return prod;
};

function divide(a, b) {
  var div = a / b;
  return div;
};

function inc(n) {
  n = n + 1;
  return n;
};

function dec(n) {
  n = n - 1;
  return n;
};

function makeInt(n) {
  var int = parseInt(n, 10);
  return int;
};

function preserveDecimal(n) {
  var fl = parseFloat(n);
  return fl;
};
