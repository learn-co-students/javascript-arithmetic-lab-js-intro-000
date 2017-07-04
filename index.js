function add(a, b){
  return a + b;
}

function subtract(a, b){
  return a - b;
}

function multiply(a, b){
  return a * b;
}

function divide(a, b){
  return a/b;
}

function inc(n){
  return n += 1;
}

function dec(n){
  return n -= 1;
}

function makeInt(n){
  return parseInt(n, 10); // parseInt arguments: the number to be parsed, and the base (base 10 here)
}

function preserveDecimal(n){
  return parseFloat(n);
}
