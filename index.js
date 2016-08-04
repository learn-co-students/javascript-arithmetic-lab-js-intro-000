function makeInt(n) {
  var num = parseInt(n, 10);
  return num;
}

function preserveDecimal(n) {
  var num = parseFloat(n);
  return num;
}

function add(a, b) {
  a = preserveDecimal(a);
  b = preserveDecimal(b);
  return a + b;
}

function subtract(a, b) {
  a = preserveDecimal(a);
  b = preserveDecimal(b);
  return a - b;
}

function multiply(a, b) {
  a = preserveDecimal(a);
  b = preserveDecimal(b);
  return a * b;
}

function divide(a, b) {
  a = preserveDecimal(a);
  b = preserveDecimal(b);
  return a / b;
}

function inc(n) {
  return n = n + 1;
}

function dec(n) {
  return n = n - 1;
}
