function add(a, b){
  return a+b;
}

function subtract(a, b){
  return a-b;
}

function multiply(a, b){
  return a*b;
}

function divide(a, b){
  return a/b;
}

function inc(n){
  return ++n;
}

function dec(n){
  return --n;
}

/*This test is a little confusing
  I declared a variable and parseInt'd
  with the parameters of n
  and 10, assuming base 10
*/
function makeInt(n){
  var validBase10 = parseInt(n, 10);
    return validBase10;
}

function preserveDecimal(n){
  var validNumber = parseFloat(n);
    return validNumber;
}