
var a = Math.floor(Math.random() * 1000)
var b = Math.floor(Math.random() * 1000)
function add(a, b){
  return a += b;
}

var a = Math.floor(Math.random() * 1000)
var b = Math.floor(Math.random() * 1000)
function subtract(a, b) {
  return a -= b;
}

function multiply(a, b){
 return a *= b;
}

function divide(a, b){
 return a /= b;
}

function inc(a) {
  a++;
 return a;
}

function dec(a) {
 a--;
 return a;
}

function makeInt (a) {
  return parseInt (a, 10);
}

function preserveDecimal(a){
 return parseFloat (a, 10);
}
