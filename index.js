

function add(a, b) {
  //return 1 + 80;
  return a + b;
}
//add(a, b);

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}


var number = 10;
function add5() {
  number += 5;
}

function divideBy3() {
  number /= 3;
}

divideBy3()

console.log(number); // 3.333333333335

add5()

console.log(number); // 8.333333333335

// reset number
number = 10;

add5()

console.log(number); // 15

divideBy3()

console.log(number); // 5

function increment(n) {
  let n = n++;
  return n;
}

function decrement(n) {
  let n = n--;
  return n;
}

function makeInt(string) {
  return parseInt(string, 10);
}

function preserveDecimal(string) {
  return parseFloat(string);
}
