function add (x, y) {
  return x + y
}

function subtract (x, y) {
  return x - y
}

function multiply (x, y) {
  return x * y
}

function divide (x, y) {
  return x / y
}

var n = 0;
function increment(n) {
  n++
  return n
}

function decrement(n) {
  n--
  return n
}

function makeInt(n) {
  var number = parseInt(n, 10)
  return number
}

function preserveDecimal(n) {
  var realNumber = parseFloat(n)
  return realNumber
}
