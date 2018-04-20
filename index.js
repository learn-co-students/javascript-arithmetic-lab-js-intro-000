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
  return a / b;
}

function inc(n){
  //increment first then return or it won't return the new number
  return n += 1;
}

function dec(n){
  return --n;
}

function makeInt(n){
  return parseInt(n, 10);
}

function preserveDecimal(n){
  return parseFloat(n);
}