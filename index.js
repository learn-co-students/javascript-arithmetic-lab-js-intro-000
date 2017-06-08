function add (a,b) {

var sum = (a+b)

return sum
}
add(4,5)

function subtract (a,b) {

  var diff = (a-b)

  return diff
}
subtract (10,5)

function multiply(a,b) {

  var mult = (a*b)

  return mult
}
multiply (5*6)

function divide (a,b) {

var div = (a/b)

return div
}

divide (10,5)

function inc(n) {

  var up = (n+=1)
  return up

}
inc (5)

function dec (n) {

  var down = (n-=1)
  return down
}
dec (5)

function makeInt (n) {

  var pInt = parseInt(n,10)

  return pInt
}

makeInt(5.55)

function preserveDecimal(n) {

  var pDec = parseFloat (n)

  return pDec
}

preserveDecimal (40.34565)
