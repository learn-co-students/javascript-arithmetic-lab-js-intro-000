var num1 = 10
var num2 = 3
var num3 = 891.23345

function add(num1, num2) {

  return num1 + num2

}

function subtract(num1, num2){
  return num1 - num2
}

function multiply(num1, num2){
  return num1 * num2
}

function divide(num1, num2){
  return num1 / num2
}

function increment(num3){
   num3++
   return num3
}

function decrement(num3){
   num3--
   return num3
}


function makeInt(num3) {
  return  parseInt(num3, 10)
}

function preserveDecimal(num3){
  return parseFloat(num3, 10)
}
