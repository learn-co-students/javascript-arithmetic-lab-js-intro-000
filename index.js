function add(a,b) {
  return (a + b)
}
function subtract(a,b) {
  return (a - b)
}
function multiply(a,b) {
  return (a * b)
}
function divide(a,b) {
  return (a / b)
}
function inc(n) {
  return ++n
}
function dec(n) {
  return --n
}
function makeInt(n) {
  n = parseInt(n, 10)
  /*need to store n "preserve" it by adding n = parseInt(n, 10) instead of just parseInt(n) so that it can be returned as parsed n
  also, n is not 'n' in parameter because n could be a variable, but if we put 'n' that would always make it a string*/
  return n
}
function preserveDecimal(n) {
  n = parseFloat(n)
  return n
}
