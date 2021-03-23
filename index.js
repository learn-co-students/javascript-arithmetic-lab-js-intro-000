function add(a, b){
  var result = a + b;
  return result;
}
function subtract(num1, num2){
  var num3 = num1 - num2;
  return num3;
}
function multiply(num1, num2){
  var num3 = num1 * num2;
  return num3;
}
function divide(num1, num2){
  var num3 = num1/num2;
  return num3;
}

function increment(n){
  return n += 1;
}

function decrement(n){
  return n -= 1;
}

function makeInt(n) {
 return (parseInt(n, 10));
}

function preserveDecimal(string) {
  var number = parseFloat(string, 10);
  return number;
}
