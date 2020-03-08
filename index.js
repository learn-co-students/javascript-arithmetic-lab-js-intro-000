function add(a, b){
  return a + b;
}

function subtract(a, b){
  return a - b;
}

function multiply(a, b){
  return a * b;
}

function divide(a, b) {
  return a /b;
}

function increment(n) {
  return n += 1;
}

function decrement(n) {
  return n -= 1;
}

function makeInt(n) {
  if (parseInt(n, 10) != NaN){
    return parseInt(n, 10);
  }
  return NaN;
}

function preserveDecimal(n) {
  if (parseFloat(n) != NaN) {
    return parseFloat(n);
  }
  return NaN;
}
