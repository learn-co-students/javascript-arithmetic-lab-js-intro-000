function add(a, b){
  var c = a + b;
  return c;
}
//add(3,4);

function subtract(a, b){
  var c = a - b;
  return c;
}
//subtract(8, 3);

function multiply(a, b){
  var c = a * b;
  return c;
}
//multiply (3, 4);

function divide(a, b){
  var c = a / b;
  return c;
}
//divide(6, 3);

function makeInt(n){
  var s = parseInt(n, 10);
  return s;
}
//makeInt('7');

function preserveDecimal(n){
  var s = parseFloat(n);
  return s;
}
//preserveDecimal('3.323');

function inc(n){
  n += 1;
  return n;
}

function dec(n){
  return n -= 1;
  return n;
}