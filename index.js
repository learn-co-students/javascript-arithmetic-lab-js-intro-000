var sum = 10+0;



function add(a,b) {
 return a+b;
}
console.log(add(2,3));

function subtract(a,b) {
 return a-b;
}
console.log(subtract(2,3));

function multiply(a,b) {
 return a*b;
}
console.log(multiply(2,3));

function divide(a,b) {
 return a/b;
}
console.log(divide(9,3));


function increment(n) {
  return n+=1;
} increment(5);

function decrement(n) {
  return n-=1;
} decrement(5);


function makeInt(n) {
  if(n !== 0)
        return parseInt(n);
        else{
          return NaN;
        }
      }

      function makeInt(n) {
        if(n >= 0 ){
          return 0;
        }
      }






      function makeInt(n) {
        return parseInt(n, 10);
      }
      makeInt("573");


function preserveDecimal(n) {
return parseFloat(n);

 }

 console.log(preserveDecimal(80.1235465));
