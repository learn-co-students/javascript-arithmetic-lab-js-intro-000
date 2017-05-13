var a = 1
var b = 716
var n = '2.222'
function add(a, b) {
  add = a + b 
  return add
}

function subtract(a, b) {
  subtract = a - b 
  return subtract
}

function multiply(a, b) {
  multiply = a * b 
  return multiply
}

function divide(a, b) {
  divide = a / b 
  return divide
}

function inc(n) {
  n ++
  return n
}

function dec(n) {
  n --
  return n
}

function makeInt(n) {
  makeInt = parseInt(n , 10)
  return makeInt
}

function preserveDecimal(n) {
  preserveDecimal = parseFloat(n)
  return preserveDecimal
}