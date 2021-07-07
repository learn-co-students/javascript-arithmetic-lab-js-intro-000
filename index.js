var number;
function add(a, b){
  number = a + b;
  return a + b;
}
function subtract(a, b){
  number = a - b;
  return a-b;
}
function multiply(a, b){
  number = a * b;
  return a * b;
}
function divide(a, b){
  number = a / b;
  return a / b ;
}
function increment(n){
  number = n + 1;
  return n + 1;
}
function decrement(n){
  number = n -1;
  return n - 1;
}
function makeInt(a){
  number = parseInt(a, 10);
  return number;
}
function preserveDecimal(n){
  number= parseFloat(n, 10);
  return number;
}
