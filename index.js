var a, b

a = Math.floor(Math.random() * 1000)  // generate a random number, round it down (Math.floor) to a whole number, and max = 999
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
  return(a += 1)
}

function inc(b) {
  return(b += 1)
}

function dec(a) {
  return(a -= 1)
}

function dec(b) {
  return(b -= 1)
}

function makeInt(a) {
  return parseInt(a.toString(), 10)  // "toString()" converts number to string, then parseInt turns string into number
}

function preserveDecimal(a) {
  return parseFloat(a.toString())
}
