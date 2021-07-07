var a = 2;
var b = 3;
function add(a, b) {
  return a + b
}

a = 10;
b = 15;
function subtract(a, b){
  return a - b
}

a = 5;
b = 5;
function multiply(a, b){
  return a * b
}

a = 4;
b = 6;
function divide(a, b){
  return a / b
}

var n = 33;
function inc(n) {
  return n += 1
}

n = 34;
function dec(n){
  return n -= 1
}

//n = 35;
//function makeInt(n){
//  return n
//}

function makeInt(n) {
  return parseInt(n, 10)
}

function preserveDecimal(n) {
  return parseFloat(n)
}
