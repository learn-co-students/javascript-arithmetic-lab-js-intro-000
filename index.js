function add(a, b){
  var a, b = a + b;
  return a, b;
}
add(1, 80);

function subtract(a, b) {
  var a, b = a - b;
  return a, b;
}
subtract(60, 40)

function multiply(a, b) {
  var a, b = a * b;
  return a, b;
}
multiply(2, 3.4)

function divide(a, b) {
  var a, b = a / b;
  return a, b;
}
divide(5.0, 2.5)

function inc(n) {
  n += 1;
  return n;
}
inc(953)

function dec(n) {
  n -= 1;
  return n;
}
dec(954);

function makeInt(n) {
  parseInt(n);
  return(n);
}
makeInt('20');

function makeInt(n) {
  return parseInt(n, 10);
}
parseInt('0x2328', 10);

function preserveDecimal(n) {
  return parseFloat(n);
}
preserveDecimal('2.222');
