function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a*b;
}

function divide(a, b) {
  return a/b;
}

function inc(a) {
  return a += 1;
}

function dec(a) {
  return a -= 1;
}


function makeInt(a) {

  if ( typeof a === 'string') {
    return parseInt(a, 10);
  }

}

function preserveDecimal(a) {

  if (typeof a === 'string') {
  return parseFloat(a);
  }

}
