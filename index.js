//fFunction # 1: add(a, b) adds a to  b and returns the result:
function add(a, b) {
  return a + b;
}

//Function # 2: subtract(a, b) subtracts b from a and returns the result:
function subtract(a, b) {
  return a - b;
}

//Function # 3: multiply(a, b) multiplies two numbers and returns the result:
function multiply(a, b){
  return a * b;
}

//Function # 4: divide(a, b) divides a by b and returns the result:
function divide(a, b) {
  return a / b;
}

//Function # 5: inc(n) increments n and returns the result:
function inc(n){
  return n += 1;
}

//Function # 6 dec(n) decrements n and returns the result:
function dec(n) {
  return n -+ 1;
}

//Function # 7: makeInt(n) parses n as an integer and returns the parsed integer:
function makeInt(n) {
  return parseInt( n, 10);
}

//Function #8: preserveDecimal(n) preserves n's decimals
//(it parses n as a floating point number) and returns the parsed number:
function preserveDecimal (n) {
  return parseFloat(n);
}
