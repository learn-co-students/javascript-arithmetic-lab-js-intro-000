var a = 1
var b = 80
function add(a,b) {
  return (a + b) // 81
}
function subtract(a,b){
  return (a - b) // 20
}
function multiply(a,b) {
  return (a * b) // 6.8 (there's that floating-point arithmetic again...)
}
function divide(a,b) {
  return (a / b) // 2
}
function increment(n) {
  return (n += 1)
}
function decrement(n) {
  return (n - 1)
}
function makeInt(n){
  return parseInt(n, 10)
}
function preserveDecimal (n){
  return parseFloat (n, 10)
}
