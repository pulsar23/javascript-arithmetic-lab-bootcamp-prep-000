var a = 2, b = 5;

function add(a,b) {
 return a += b;
}
 
function subtract(a,b) {
  return a -= b;
}

function multiply(a,b) {
  return a *= b;
}
function divide(a,b) {
  return a /= b;
}

add(a,b);
console.log(a);

subtract(a,b);
console.log(a);

multiply(a,b);
console.log(a);

divide(a,b);
console.log(a);



