function add(a,b){
  var sum = a + b;
  return sum;
}

add (1,2);

function subtract(a,b){
  var difference = a - b;
  return difference;
}

subtract (3, 1);

function multiply(a,b){
  var times = a * b;
  return times;
}

multiply (3, 2);

subtract (3, 1);

function divide(a,b){
  var division = a / b;
  return division;
}

divide (6, 3);

function inc(n){
  n ++;
  return n;
}

inc(10);

function dec(n){
  n --;
  return n;
}

dec(10);


function makeInt(n) {
  var parse = parseInt(n, 10)
  return parse;
}

makeInt('10');


function preserveDecimal(n) {
  var preserve = parseFloat(n)
  return preserve;
}

preserveDecimal('10.9876');
