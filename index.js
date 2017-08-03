var a, b /*
beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
}) // what is this function for?  */
function add(a, b) {
  return (a + b);
}
add(1, 2);
function subtract(a, b) {
  return (a - b);
}
subtract(10,5);
function multiply(a, b){
  return (a * b);
}
multiply(4,3);
function divide(a, b){
  return (a / b);
}
divide(12,6);
function inc(n) { var mynum = n;
  return (++mynum);
}
inc(6);
function dec(n) {
  return (--n);
}
dec(8);
function makeInt(n) { 
  return (parseInt(n, 10));
}
makeInt(66.101);
function preserveDecimal(n) {
  return (parseFloat(n));
}
preserveDecimal(11.23456); preserveDecimal('nonsense');