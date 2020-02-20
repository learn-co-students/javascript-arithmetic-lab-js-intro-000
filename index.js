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

function makeInt(n) {
  return parseInt(n, 10)
}


function preserveDecimal(n) {
 return parseFloat(n)
}

/*
makeInt(string) should take in a string,
parse it into an base 10 integer and return it.
preserveDecimal(string) should take in a string,
parse it into a float and return it.
*/
