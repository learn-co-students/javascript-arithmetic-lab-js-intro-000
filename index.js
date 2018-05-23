var a = 10, b = 5;

function add(a , b) {
  return (a + b);
}

function subtract(a , b) {
  return (a - b);
}

function multiply(a , b) {
  return (a * b);
}

function divide (a , b) {
  return (a / b);
}

var n = 40;
function inc(n) {
  return n = n + 1;
}

var n = 13;
function dec(n) {
  return n = n - 1;
}

var n=393;
function makeInt(n) {
  return parseInt (n, 10);
}

var n=2;
function preserveDecimal (n) {  //function to take numbers with or without decimal in string form and return the number
  return parseFloat (n);
}
