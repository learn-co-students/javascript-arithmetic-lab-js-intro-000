function add() {
  1+80;
}

function subtract() {
  2-2;
}

function multiple() {
  5*6;
}
function devide() {
 10/2;
}

function add(a, b) {
  var addNum = a + b;
  return addNum;
}

function subtract(a, b) {
  var subNum = a - b;
  return subNum;
}

function multiply(a, b) {
  var multNum = a * b;
  return multNum;
}

function divide(a, b) {
  var divNum = a / b;
  return divNum;
}

function increment(n) {
  n++;
  return n;
}

function decrement(n) {
  n--;
  return n;
}

function makeInt(string) {
  var numInt = parseInt(string, 10);
  return numInt;
}
makeInt('5')

function preserveDecimal(string) {
  var num = parseFloat(string);
    return num;
}
preserveDecimal('2.222')