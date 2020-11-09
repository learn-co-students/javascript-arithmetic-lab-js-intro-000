var add = function add(){
}
var subtract = function subtract(){
}
var multiply = function multiply(){
}
var divide = function divide(){
}
var add = function add(a,b){
  return a+b;
}
add();
var subtract = function subtract(a,b){
  return a-b;
}
subtract();
var multiply = function multiply(a,b){
  return a*b;
}
multiply();
var divide = function divide(a,b){
  return a/b;
}
divide();
var increment = function increment(n){
  return n += 1;
}
increment();

var decrement = function decrement(n){
  return n -=1;
}
decrement();

var makeInt = function makeInt(string){
  return parseInt(string,10);
}
makeInt();

var preserveDecimal = function preserveDecimal(string){
  return parseFloat(string);
}
preserveDecimal();
