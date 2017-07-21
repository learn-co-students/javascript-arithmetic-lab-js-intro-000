function add(a, b) {
  var resultAdd = a + b;
  return resultAdd;
}

function subtract(a, b) {
  var resultSub = a - b;
  return resultSub;
}

function multiply(a, b) {
  var resultMul = a * b;
  return resultMul;
}

function divide(a, b) {
  var resultDiv = a / b;
  return resultDiv;
}

function inc(n) {
  n += 1;
  return n;
}

function dec(n) {
  n -= 1;
  return n;
}

function makeInt(n) {
  var resultMakeInt = parseInt(n, 10);
  return resultMakeInt;
}

function preserveDecimal(n) {
  var resultPreDeci = parseFloat(n);
  return resultPreDeci;
}
