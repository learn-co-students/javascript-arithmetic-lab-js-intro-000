function add(a, b){
  return a+=b;
};
add(2, 5);

function subtract(a, b){
  return a-=b;
};
subtract(7, 5);

function multiply(a, b){
  return a*=b;
};
multiply(2, 5);

function divide(a, b){
  return a/=b;
};
divide(2, 5);

var i = 0;

function inc(n){
  n++;
  return n;
}

i=inc(i);

function dec(n){
  n--;
  return n;
}

i=dec(i);

function makeInt(n){
  return n;
}

makeInt("2");

function makeInt(n){
  return parseInt(n, 10);
}

function preserveDecimal(n){
  return parseFloat(n);
};
