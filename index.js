//NOTE for 1 - 4, you need the = sign involved. For 5-6 you can't say n++ or n--
  
  
  function add(a, b) {
    return a += b;
  }
  
  function subtract(a, b) {
    return a -= b; 
  }
  
  function multiply(a, b) {
    return a *= b;
  }
  
  function divide(a, b) {
    return a /= b;
  }
  
  function inc(n) {
    return ++n;
  }
  
  function dec(n) {
    return --n;
  }
  
  function makeInt(n) {
    return parseInt(n);
  }
  
  //NOT SURE if base 10 is correct
function makeInt(n,o) {
  return parseInt(n, 10);
}


//preserveDecimal(n)

function preserveDecimal(n) {
  return parseFloat(n);
}
