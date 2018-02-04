function add(a,b) {
  return a+b;
}

function subtract(a,b) {
  return a-b;
}

function multiply(a,b) {
  return a*b;
}

function divide(a,b) {
  return a/b;
}

function inc(n) {
  var result = ++n;
  return result;
}

function dec(n) {
  var resultd = --n;
  return resultd;
}

function makeInt(n) {
  n = parseInt(n,10);
  return n;
}

function preserveDecimal(n) {
  n = parseFloat(n,10);
  return n;
}
