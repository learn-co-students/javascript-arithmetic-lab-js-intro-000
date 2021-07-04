
function add(a, b){
  var result = b + a;
  return result;
}
add();

function subtract(a, b){
  var result = a - b;
  return result;
}
subtract();

function multiply(a, b){
  var result = a * b;
  return result;
}
multiply();

function divide(a, b){
  var result = a/b;
  return result;
}
divide();


function inc(n){

  var result = ++n;
  return result;
}

function dec(n){
  var result = --n;
  return result;
}


function makeInt(n){
  return parseInt(n, 10);
  
}

function preserveDecimal(n){
  return parseFloat(n);
}
