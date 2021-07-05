function add(a, b) {
  var result = a + b;
  return parseInt(result, 10);
}

function subtract(a, b) {
  var result = a - b;
  return parseInt(result, 10);
}

function multiply(a, b) {
  var result = a * b;
  return parseInt(result, 10);
}

function divide(a, b) {
  return a / b;
}
 function inc(n) {
   var result = n += 1;
   return result;
 }

 function dec(n) {
   var result = n -= 1;
   return result;
 }

function makeInt(n) {
   var parsedInteger = parseInt(n, 10);
   return parsedInteger;
 }

function preserveDecimal(n) {
  var parsedFloat = parseFloat(n);
  return parsedFloat;
}
