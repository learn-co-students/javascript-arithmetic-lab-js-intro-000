function add() {
  n += 1
}

function subtract() {
  n -= 1
}

function add(a, b) {
  add = a +=b;
  return(add)
}

function subtract(a, b) {
  subtract = a -=b;
  return(subtract)
}

function multiply(a, b) {
  multiply = a *=b;
  return(multiply)
}

function divide(a, b) {
  divide = a /=b;
  return(divide)
}


function increment(n) {
  return ++n;
}

function decrement(n) {
  return --n;
}

function makeInt(str) {
var a =  parseInt(str, 10);
  return(a);
}

function preserveDecimal(str) {
var a =  parseFloat(str);
  return(a);
}
