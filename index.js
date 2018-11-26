function add(a,b){
  var addNum = a + b;
    return addNum;
}

function subtract(a,b){
  var subtractNum = a - b;
    return subtractNum;
}

function multiply(a,b){
  var multipliesNum = a * b;
    return multipliesNum;
}

function divide(a, b){
  var divideNum = a / b;
    return divideNum;
}

function inc(n){
  var incNum = ++n;
    return incNum;
}

function dec(n){
  var decNum = --n;
    return decNum;
}

function makeInt(n){
  parseInt(n, 10);
  return n;
}

function preserveDecimal(n){
  parseFloat(n);
  return n;
}
