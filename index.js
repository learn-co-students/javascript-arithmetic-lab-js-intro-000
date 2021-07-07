function add (a,b) {
  return a + b;
}

function subtract (a,b) {
  return a - b;
}

function multiply (a,b) {
  return a * b;
}

function divide (a,b) {
  return a / b;
}

function inc (a) {
  a+=1;
  return a;
}

function dec (a) {
  a-=1;
  return a;
}

function makeInt (n) {
  var result = parseInt(n, 10);
  return result;
}

function preserveDecimal (n) {
  var result = parseFloat(n);
  return result;
}
