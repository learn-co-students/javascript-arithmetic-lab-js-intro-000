function add(){
  1 + 80
}

function subtract() {
  60 - 40
}

function multiply() {
  2 * 3.4
}

function divide() {
  5.0 / 2.5
}


function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

var number = 10

function add5() {
  number += 5
}

function divideBy3() {
  number /= 3
}

divideBy3()

console.log(number)

add5()

console.log(number)

// reset number
number = 10

add5()

console.log(number)

divideBy3()

console.log(number)

//1. make a function increment
//2. make function take in a number
//3. make increments of the provided value by one.
//4. make return the result


function increment(n) {
 return ++n
}

function decrement(n) {
  return --n
}

//1. make function makeInt
//2. take in a string
//3. parse it into a  base 10 integer
//4. return it
//5. get the fucking code to pass!


function makeInt(str) {
  return parseInt(str, 10)
}

function preserveDecimal(str) {
  return parseFloat(str)
}
