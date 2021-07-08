// var a, b

function add (a,b) {
  var sum = a+b;
  return sum;
}


function subtract (b,a) {
  var minus = b-a;
  return minus;
}


function multiply (a,b) {
  var many = a*b;
  return many;
}

function divide (b, a) {
  var share=b/a;
  return share;
}


function inc (n){
  var increment = n+1;
  return increment;
}


function dec(n) {
  var decrement = n-1;
  return decrement;
}


function makeInt(n){
  var parse = parseInt(n,"10");
  return parse;
}

function preserveDecimal (n) {
  var preserve = parseFloat (n);
  return preserve;
}
