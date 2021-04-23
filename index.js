function add(a, b) {
  var number = a+= b
  return number
}

function subtract(a, b) {
  var number = a -= b
  return number
}

function multiply(a, b) {
  var number = a *= b
  return number
}

function divide(a, b) {
  var number = a /= b
  return number
}

function increment(n) {
  n++
  return n
}

function decrement(n) {
  n--
  return n
}

function makeInt(n) {
  return parseInt(n, 10)
}

function preserveDecimal(n) {
  return parseFloat(n)
}