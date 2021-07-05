function add(a, b){
  return a + b;
}
add(2, 5); // 7

function subtract(a, b){
  return a - b;
}
subtract(3, 1); // 2

function multiply(a, b){
  return a * b;
}
multiply(6, 2); // 12

function divide(a, b){
  return a / b;
}
divide(10, 5); // 2

function inc(n){
  return n += 1;
}
inc(5); // 6

function dec(n){
  return n -= 1;
}
dec(5); // 4

function makeInt(n){
  return parseInt(n, 10);
}
makeInt('5.9999'); // 5
makeInt('adjflaj'); // NAN

function preserveDecimal(n){
  return parseFloat(n);
}
preserveDecimal('2.222'); // 2.222
preserveDecimal('alkj;lj'); // NAN