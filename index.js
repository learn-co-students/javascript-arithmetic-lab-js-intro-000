function add(a,b){
  return a + b;
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

function index(a,b){

}

function increment(n){
n+=1;
return n;
}
function decrement(n){
n-=1;
return n;
}

function makeInt(string,base){
  const parsed=parseInt(string, 10);
  return parsed;

}

function preserveDecimal(string, base){
  const parsed=parseFloat(string);
  return parsed;
}
