function add(a,b){
  return a+b;
}

function subtract(a,b){
  return a-b;
}

function multiply(a,b){
  return a*b;
}

function divide(a,b){
  return a/b;
}
function inc(a){
  return a+=1;
}
function dec(a){
  return a-+1;
}

function makeInt(n){
  var parsed = parseInt(n, 10);
  if (isNaN(parsed)) { return 'NaN' }
  return parsed;
}

function preserveDecimal(n){
  var parsed = parseFloat(n);
  if (isNaN(parsed)) { return 'NaN' }
  return parsed;
}
inc(a);
dec(a);
makeInt('238');
preserveDecimal('2.222');
