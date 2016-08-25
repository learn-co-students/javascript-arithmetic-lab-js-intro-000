var a = 100
var b = 59

function add(a, b) {
return (a + b)
}
function subtract(a, b) {
  return (a - b)
}
function multiply(a, b) {
  return (a * b)
}
function divide(a, b) {
  return (a / b)
}
function inc(a) {
  console.log(a++)
  return (a++)
}
function dec(a) {
  console.log(a--)
  return (a--)
}
function makeInt(string) {
  return parseInt(string, 10)
}
function preserveDecimal(n) {
 return parseFloat(n, 10)
}
