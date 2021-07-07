function add(a,b){
  return a + b;
}

function subtract (a,b){
  return a - b;
}

function multiply (a, b){
  return a*b;
}

function divide(a,b){
  return a / b;
}

function inc(n){
  return ++n;
}

function dec(n){
  return --n;
}

function makeInt(n){
  var s = n.toString();
  var l = s.length;
  var x =  parseInt ( 'n', 10);
if (s[0]=== '0' && s[1]==='x' || s[1]==="X") {
   return 0;
 } else if (x === isNaN('x')){
   return NaN;
 } else {
 return n;
 }
}

function preserveDecimal(n){
return parseFloat(n);
}
