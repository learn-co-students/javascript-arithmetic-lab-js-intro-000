function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b > 0) {
    return a / b;
  }
}

function inc(a) {
  return ++a;
}

function dec(a) {
  return --a;
}

function makeInt(a) {
  if (a == parseInt(a, 10)) {
    return parseInt(a);
  } else if (isNaN(a)) {
    return a;
  } else {
    return 0;
  }
}

function preserveDecimal(a) {
  return isNaN(a) ? a : parseFloat(a);
}
