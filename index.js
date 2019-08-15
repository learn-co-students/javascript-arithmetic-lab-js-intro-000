var a = 1
var b = 2
var n = 3
function add(a, b) {
  return parseInt(a) + parseInt(b)
}

function subtract(b, a) {
  return parseInt(b) - parseInt(a)
}

function multiply(a, b) {
  return parseInt(a) * parseInt(b)
}

function divide(a, b) {
  return parseInt(a) / parseInt(b)
}

function inc(n) {
  return parseInt(n + 1)
}

function dec(n) {
  return parseInt(n - 1)
}

function makeInt(n) {
  return parseInt(n, 10)
}

function preserveDecimal(n) {
  return parseFloat(n)
}
