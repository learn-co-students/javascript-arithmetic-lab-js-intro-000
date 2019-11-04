function add(a,b){
  var value = a += b;
  return value
}
function subtract(a,b){
  var sub = a-=b;
  return sub
}
function multiply(a,b){
  var mul = a *= b;
  return mul
}
function divide(a,b){
  var div = a /= b;
  return div
}
function inc(n){
  var inc = ++n
  return inc
}

function dec(n){
  var dec = --n
  return dec
}
function makeInt(n){
return parseInt(n, 10)
}
function preserveDecimal(n){
return parseFloat(n)
}
