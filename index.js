function add(a,b) {
  a=parseInt (a,10);
  b=parseInt(b,10)
  var add = a + b;
  return add;
}
function subtract(a,b) {
  a=parseInt (a,10);
  b=parseInt(b,10)
  var subtract = a-b;
  return subtract;
}
function multiply(a,b) {
  a=parseInt (a,10);
  b=parseInt(b,10)
  var multiply = b * a;
  return multiply;
}
function divide(a,b) {
  a=parseInt (a,10);
  b=parseInt(b,10)
  var divide = a / b;
  return divide;
}
function inc(n) {
  return ++n;
}
function dec(n) {
  return --n;
}
function makeInt(n) {
  return parseInt(n,10);
}
function preserveDecimal(n) {
  return parseFloat(n);
}
