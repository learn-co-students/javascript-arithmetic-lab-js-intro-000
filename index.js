var a, b

a = Math.floor(Math.random() * 1000)
b = Math.floor(Math.random() * 1000)

function add(a, b) {
  return(a + b)
}

function subtract(a, b) {
  return(a - b)
}

function multiply(a, b) {
  return(a * b)
}

function divide(a, b) {
  return(a / b)
}

function inc(a) {
  return(++a)
}

function inc(b) {
  return(++b)
}

function dec(a) {
  return(--a)
}

function dec(b) {
  return(--b)
}

function makeInt(a) {
  return parseInt(a.toString(), 10)
}

function preserveDecimal(a) {
  return parseFloat(a.toString())
}
