//
const udemy = 'udemy';
console.log(Array.from(udemy));

//arguments object
function countTotal() {
  let total = Array.from(arguments).reduce((total, curr) => (total += curr), 0);
  console.log(total);
}

countTotal(67, 89, 54);

//
function countTotal2(...rest) {
  let total = rest.reduce((total, curr) => (total += curr), 0);
  console.log(total);
}

countTotal2(67, 89, 54);
