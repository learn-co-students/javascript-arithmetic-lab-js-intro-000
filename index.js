function add(){
  return `${5+2}`
}
function subtract() {
  return `${5-3}`
}
function multiply() {
  return `${5*3}`
}
function divide() {
  return `${5/3}`
}
function add(a,b) {
  var result = a + b
  return result;
}
 add(700 + 99)

 function subtract(a,b) {
   var result = a - b
   return result
}
subtract(700 - 99)

function multiply(a,b) {
  var result = a * b
  return result
}
multiply(5*3)

function divide(a,b) {
  var result = a/b
  return result
}
divide(5/3)

function increment(n) {
  var result = ++n
  return result
}
increment(5)

function decrement(n) {
  var result = --n
  return result
}
decrement(6)

function makeInt(n) {
  return parseInt(n,10)
}
makeInt('5')

function preserveDecimal(n) {
  return parseFloat(n)
}
preserveDecimal('2.63454')
