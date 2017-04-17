function add(a, b){
  return a+b
}

function subtract(a, b){
return a-b
}

function multiply(a, b){
return a*b
}

function divide(a, b){
return a/b
}

function inc(a){
return ++a
}

function dec(a){
return --a
}


function makeInt(a){

var ans = parseInt(a,10)

if(ans == 0) {
  return ans
  }

else if(ans == NaN) {
  return true
  }

else {
  return ans
  }

}

function preserveDecimal(a){
  var ans = parseFloat(a)

  if(ans == NaN){
    return true
  }

  else {
    return ans
  }
}
