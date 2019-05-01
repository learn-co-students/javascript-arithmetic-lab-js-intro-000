function add(a, b) {
  var num = a + b;
  return num;
}

function subtract(a, b) {
  var num = a - b;
  return num;
}

function multiply(a, b) {
  var num = a * b;
  return num;
}

function divide(a, b) {
  var num = a / b;
  return num;
}

function inc(n) {
  n++;
  return n;
}

function dec(n) {
  n--;
  return n;
}

function makeInt(n) {
  var num = parseInt(n, 10);
  return num;
}

makeInt('blah!!!');

function preserveDecimal(n) {
  var num = parseFloat(n);
  return num;
}

preserveDecimal('blah!!!');
