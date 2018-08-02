var a, b

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})

function add(a, b) {
  return (a + b)
}
add()

function subtract(a, b) {
  return (a - b)
}
subtract()

function multiply(a, b) {
  return (a * b)
}
multiply()


function divide(a, b) {
  return (a / b)
}
divide()

function inc(a) {
  return (a += 1)
}
inc()

function dec(a) {
  return (a -= 1)
}
dec()

function makeInt(a) {
  return (parseInt(a, 10))
}
makeInt()



function preserveDecimal(a) {
  return (parseFloat(a))
}
preserveFloat()
