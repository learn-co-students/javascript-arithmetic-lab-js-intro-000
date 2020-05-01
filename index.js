function add(){
  var add = +1;
  console.log(add);
}

function add(a, b){
  var total = a + b;
  return total;
  console.log(total)
}

function subtract(a, b){
  var total = a - b;
  return total;
  console.log(total)
}

function multiply(a, b){
  var total = a * b;
  return total;
  console.log(total)
}

function divide(a, b){
  var total = a / b;
  return total;
  console.log(total)
}

function increment(n){
  var total = ++ n;
  return total;
  console.log(total)
}

function decrement(n){
  var total = -- n;
  return total;
  console.log(total)
}

function makeInt(n){
  var makeInt = parseInt(n, 10);
  return makeInt;
}

function preserveDecimal(n){
  var preserveDecimal = parseFloat(n);
  return preserveDecimal;
}
