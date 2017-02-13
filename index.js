function add(a,b) {
  return a + b;
}
function subtract(a,b) {
return a - b;
}
function multiply(a,b){
return a * b;
}
function divide(a,b){
return a / b ;
}
function inc(n) {
 n = n + 1;
 return n;
}
function dec(n) {
  n = n - 1;
 return n;
}
function makeInt(n) {
  return parseInt(n, 10);

}
 function preserveDecimal(n) {

 return parseFloat(n);

}

// escribe('preserveDecimal(n)', function() {
//   it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
//     expect(preserveDecimal('2.222')).toBe(2.222)
//   })
