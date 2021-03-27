var number;
function add(a, b){
  number = a + b;
  return number;
}
function subtract(a, b){
  number = a- b;
  return number;
}
function multiply(a, b){
  number = a * b;
  return number;
}
function divide(a,b){
  number = a / b;
  return number;
}

var number = 10

function add5() {
  number += 5
}

function divideBy3(){
  number /=3
}

divideBy3()
console.log(number)

add5()

console.log(number)

//reset number
number =10

add5()
console.log(number)

divideBy3()

console.log(number)

function increment(number){
  number ++;
  return number;
}
function decrement(number){
  number--;
  return number;
}

function makeInt(string){
return  parseInt(string, 10);

}
function preserveDecimal(string){
  return  parseFloat(string, 10);

}
