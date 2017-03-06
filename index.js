function add(a, b) {
  return a + b;
}
add(1, 81);

function subtract(a, b) {
  return a - b;
}
subtract(60, 40);

function multiply(a, b) {
  return a * b;
}
multiply(2, 3.4)

function divide(a, b) {
  return a / b;
}
divide(5, 2.5);

function inc(a) {
  return a += 1;
}

function dec(a) {
  return a -= 1;
}

function makeInt(a, b) {
  return parseInt(a, b);
}
makeInt('4', 10);

function makeInt(a) {
  return parseFloat(a);
}
makeInt('4.2345');

function preserveDecimal(a) {
  return parseFloat(a);
}
preserveDecimal('4.2345');
