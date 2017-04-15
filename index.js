/* it('add(a, b) adds two numbers and returns the result', function() {
  expect(add(a, b)).toEqual(a + b)
})
*/
function add(a, b) {
  return(a + b);
}

function subtract(a, b) {
  return(a- b);
}

function multiply(a, b) {
  return(a * b);
}

function divide(a, b) {
  return(a / b);
}

function inc(n) {
  var a = n;
  return(a += 1);
}

function dec(n) {
  var b = n;
  return(b -= 1);
}

function makeInt(n) {
  var parse = parseInt(n, 10);
  return(parse);
}

function preserveDecimal(n) {
  var parsedfloat = parseFloat(n);
  return(parsedfloat);
}


