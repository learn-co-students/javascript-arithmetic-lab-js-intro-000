var number = 5
number += 3 // 8
number -= 2 // 3
number *= 10 // 50
number /= 5 // 1

function add(a, b) {
  return a+b;
}

function subtract(a, b) {
  return a-b;
}

function multiply(a, b) {
  return a*b;
}

function divide(a, b) {
  return a/b;
}

function inc(n) {
  return n+1;
}

function dec(n) {
  return n-1;
}

function makeInt(n) {
  return parseInt(n,10);
}

function preserveDecimal(n) {
  return parseFloat(n);
}
