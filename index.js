function add(numberone, numbertwo) {
  return numberone + numbertwo
}

function subtract(numberone, numbertwo) {
  return numberone - numbertwo
}

function multiply(numberone, numbertwo) {
  return numberone * numbertwo
}

function divide(numberone, numbertwo) {
  return numberone / numbertwo
}

function inc(n) {
  return n += 1
}

function dec(n) {
  return n -= 1
}

function makeInt(n) {
  n = parseInt(n, 10)
  return n
}

function preserveDecimal(n) {
  n = parseFloat(n)
  return n
}
