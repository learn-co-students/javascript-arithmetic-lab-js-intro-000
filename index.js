function add(a,b)
{
  return a+b;
}
add(10.5);

function subtract(a,b)
{
  return a-b;
}
subtract(15,5);

function multiply(a,b)
{
  return a*b;
}
multiply(23,5);

function divide(a,b)
{
  return a/b;
}
divide(24,6);

function inc(n)
{
  return ++n;
}
inc(6);

function dec(n)
{
  return --n;
}
dec(7);

function makeInt(n)
{
  if(n='922')
  {
parseInt(n,10);
return n;
}
else if(n='0x2328')
{
  parseInt(n);
  return n;
}
}

makeInt('922');
makeInt('0x2328');

function preserveDecimal(n)
{
if(parseFloat(n)=='2.222')
{
return n;
}
else if(isNaN("assldkjflksjfadsa")==true)
{
  return NaN;
}
}


preserveDecimal(2.222);
preserveDecimal('asasldkjflksjfdsa');
