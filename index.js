function add(a, b) {
  return a + b
};

function subtract(a, b) {
  return a - b
};

function multiply(a, b) {
  return a * b
};

function divide(a, b) {
  return a / b
};

function inc(n) {
  var incNumber = n;
  incNumber++;
  return incNumber;
};

function dec(n) {
  var decNumber = n;
  decNumber--;
  return decNumber;
};

function makeInt(n) {
  var intString = n;
  return parseInt(n, 10);
};

function preserveDecimal(n) {
  var intString = n;
  return parseFloat(n);
};
