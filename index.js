function add(a = 3, b = 2) {
  return a + b
}

function subtract(a = 3, b = 5) {
  return a - b
}

function multiply(a = 3, b = 5) {
  return a * b
}

function divide(a = 6, b = 2) {
  return a / b
}

function increment(n = 5) {
  return n += 1
}

function decrement(n = 5) {
  return n -= 1
}

function makeInt(n = "7") {
    return parseInt(n , 10)
}

function preserveDecimal(n = "8.343342") {
  return parseFloat(n, 10)
}
