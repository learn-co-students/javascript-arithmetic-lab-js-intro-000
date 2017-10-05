var a, b

a = Math.floor(Math.random() * 1000)
b = Math.floor(Math.random() * 1000)

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function inc(n){
  return n += 1;
}

function dec(n){
  return n -= 1;
}
function makeInt(num){
  return parseInt(num, 10);
}
 function preserveDecimal(num){
   return parseFloat(num, 10);
 }
