function add(x,y)
{
  return x+y
}

function subtract(x,y)
{
  return x-y
}

function multiply(x,y)
{
  return x*y
}

function divide(x,y)
{
  return x/y
}

function increment(num)
{
  num += 1;
  return num
}

function decrement(num)
{
  num -= 1;
  return num
}

function makeInt(string)
{
  var num = parseInt(string,10);
  return num
}

function preserveDecimal(string)
{
  var num = parseFloat(string);
  return num
}
