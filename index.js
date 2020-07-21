var add, subtract, multiply, multiple, divide, increment, decrement;

function makeInt(n) {
    // if (isNaN(n)) {
    //     return 0;
    // }
    var parsed = parseInt(n, 10);
    return parsed;
}

function preserveDecimal(n) {
  var preserved = parseFloat(n);
  return preserved;
}

function add(a, b) {
  var added = a + b;
  return added;
}

function subtract(a, b) {
  var subtracted = a - b;
  return subtracted;
}

function multiply(a, b) {
  var multiplied = a * b;
  return multiplied;
}

function divide(a, b) {
  var divided = a / b;
  return divided;
}

function increment(a) {
    ++a;
    return a;
}

function decrement(a) {
  --a;
  return a;
}
