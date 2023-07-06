//global scope variables
var amount = 100;

//function scope
function greet() {
  var random = 'some random value';
  console.log(`hello there ${amount} ${random}`);
}

// greet();

// console.log(random);

let total = 1000;
let test = true;

if (test) {
  let total = 'pranges';
  let value = 'raie;f';
  console.log(`hello there`);
}

console.log(total);
console.log(value);
