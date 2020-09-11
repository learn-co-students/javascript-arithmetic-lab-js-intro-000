function add(a, b) {
  var x = a+=b;
  return(x);
}

function subtract(a, b) {
  var x = a-=b;
  return(x);
}

function multiply(a, b) {
  var x = a*=b;
  return (x);
}

function divide(a, b) {
  var x = a/=b;
  return (x);
}

function increment(n) {
  n++;
  return(n);
}

function decrement(n) {
  n--;
  return(n);
}

function makeInt(n) {
  return parseInt(n,10);
}

function preserveDecimal(n) {
  return parseFloat(n,10);
}
