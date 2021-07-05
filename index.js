var a = Math.floor(Math.random() * 1000);
var b = Math.floor(Math.random() * 1000);

function add(a,b) {
  return (a += b);
}

function subtract(a,b) {
  return (a -= b);
}

function multiply(a,b) {
  return (a *= b);
}

function divide(a,b) {
  return (a /= b);
}

function increment(n) {
  return (n += 1);
}
function decrement(n) {
  return (n -= 1);
}

function makeInt(string){
  return parseInt(string,10);
}

function preserveDecimal(string) {
  return parseFloat(string);
}
