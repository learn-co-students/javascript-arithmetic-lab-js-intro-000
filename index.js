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
function inc(n) {
  return n += 1;   
}
function dec(n) {
  return n -= 1;
}
function makeInt(n, base) {
  base = 10;
  var parse = parseInt(n, base);
  if (isNaN(parse)) {
    return NaN;
  }
  return parse;
}
function preserveDecimal(n) {
  var float = parseFloat(n);
  if (isNaN(float)) {
    return NaN;
  }
  return float;
}