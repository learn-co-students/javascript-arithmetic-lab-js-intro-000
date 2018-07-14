function add(a,b) {
var  number = a + b;
  return number
}

function subtract(a,b) {
var  number = a - b;
  return number
}

function multiply(a,b) {
var  number = a * b;
  return number
}

function divide(a,b) {
var  number = a / b;
  return number
}

function inc(n) {
  n = n += 1
  return n
}

function dec(n) {
  n = n -= 1
  return n
}

function makeInt(n) {
 var parsed = parseInt(n, 10)
 return parsed
}

function preserveDecimal(n) {
  var parsed = parseFloat(n)
  return parsed
}
