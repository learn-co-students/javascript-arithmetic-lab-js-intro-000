function add() {}

function subtract() {}

function multiply() {}

function divide() {}

function add(a, b) {
  var result = (a + b)
  return (`${result}`)
}

function subtract(a, b) {
  var result2 = (a - b)
  return (`${result2}`)
}

function multiply(a, b) {
  var result3 = (a * b)
  return (`${result3}`)
}

function divide(a, b) {
  var result4 = (a / b)
  return (`${result4}`)
}

function increment(n) {
  var result5 = (++n)
  return (`${result5}`)
}

function decrement(n) {
  var result6 = (--n)
  return (`${result6}`)
}

var NaN = ("Not a Number")

function makeInt(n) {
  var result7 = parseInt(n, 10)
    return (`${result7}`)
}

function preserveDecimal(n) {
  return parseFloat(n)
}
