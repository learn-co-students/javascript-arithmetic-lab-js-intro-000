function parseInteger(){
  var parse = "20"
  return parseInteger(parseInt);
}


var number = 10

function add5() {
  number += 5
  console.log(add5)
}

function divideBy3() {
  number /= 3
}

divideBy3()

console.log(number) // 3.333333333335

add5()

console.log(number) // 8.333333333335

// reset number
number = 10

add5()

console.log(number) // 15

divideBy3()

console.log(number) // 5
```
