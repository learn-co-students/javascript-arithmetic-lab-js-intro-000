function add(a,b){
  /*var a, b;
  a += b;
  return a;*/
  // i'm not sure what's actually going on here. feel like for clarity it should be more like
  var intA = a, intB = b;
  intA += intB;
  return intA;
}
function subtract(a,b){
  var intA = a, intB = b;
  intA -= intB;
  return intA;
}
function multiply(a,b){
  var intA = a, intB = b;
  intA *= intB;
  return intA;
}
function divide(a,b){
  var intA = a, intB = b;
  intA /= intB;
  return intA;
}

function increment(n){
  var internal = n;
  internal++;
  return internal;
}
function decrement(n){
  var internal = n;
  internal--;
  return internal;
}

function makeInt(n){
  var internal = parseInt(n, 10);
  return internal;
}

function preserveDecimal(n){
  var internal;
  internal = parseFloat(n);
  return internal;
}
