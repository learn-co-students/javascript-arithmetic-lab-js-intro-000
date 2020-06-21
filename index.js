function add(a,b) {
  return a + b
}
function subtract(a,b) {
  return a - b
}
function multiply(a,b) {
  return a * b
}
function divide(a,b) {
  return a / b
}
function increment(n) {
  var n = n + 1
  return n++
}
function decrement(n) {
  var n = n - 1
  return n--
}
function makeInt(n) {
  var n = parseInt(n, 10)
  return n
}
function preserveDecimal(n) {
  var n = parseFloat(n)
  return n
}
