function add() {
add(1 + 80) // 81
}
function subtract() {
subtract(60 - 40) // 20
}
function multiply() {
multiply(2 * 3.4) // 6.8 (there's that floating-point arithmetic again...)
}
function divide() {
divide(5.0 / 2.5) // 2
}

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

function increment(n) {
  return n += 1
}
function decrement(n) {
  return n -= 1
}

function makeInt(n, base) {
  return parseInt(n, 10)
}

function preserveDecimal(n) {
  return parseFloat(n)
}
