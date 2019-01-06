function add(a, b) {
  return `${a + b}`;
}

function subtract(a, b) {
  return `${a - b}`;
}

function multiply(a, b) {
  return `${a * b}`;
}

function divide(a, b) {
  return `${a / b}`;
}

function inc(a) {
  return `${a+=1}`;
}

function dec(a) {
  return `${a-=1}`;
}

function makeInt(a) {
  var parse = parseInt(a, 10)
  return parse
}


function preserveDecimal(n) {
  var parse = parseFloat(n)
  return parse
}
