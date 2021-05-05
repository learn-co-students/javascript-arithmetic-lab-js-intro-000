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

function increment(n) {
  n++;
  return n;
}

function decrement(n) {
  n--;
  return n;
}

function makeInt(n) {
  var result = parseInt(n,10);
  return result;
}

function preserveDecimal(n) {
  var result = parseFloat(n);
  return result;
}
