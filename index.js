var x = add(1,80);

function add(a,b){
  return a+b;
}
var x = subtract(60,40);
function subtract(a, b){
  return a-b;
}
var x = multiply(2,3.4)
function multiply(a,b){
  return a*b;
}
var x = divide(5, 2.5);
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
  return parseInt(n, 10);
}
function preserveDecimal(n){
  return parseFloat(n);
}
