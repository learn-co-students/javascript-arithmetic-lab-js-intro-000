var a = Math.floor(Math.random() * 1000)
var b = Math.floor(Math.random() * 1000)

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function inc(n) {
  n++
  return n
}

function dec(n) {
  n--
  return n
}

function makeInt(n){
  var n = parseInt(n, 10)
  return n
}

function preserveDecimal(n){
  var n = parseFloat(n)
  return n
}
