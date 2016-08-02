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
  return a / b;
}

function inc(n) {
  return n += 1;
}

function dec(n) {
  return n -= 1;
}

function makeInt(n) {
  if (!isNaN(n)) {
    return parseInt(n, 10);
  } else {
    return NaN;
  }
}

function preserveDecimal(n) {
  if (!isNaN(n)) {
    return parseFloat(n);
  } else {
    return NaN;
  }
}
