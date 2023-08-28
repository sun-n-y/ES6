//
const udemy = 'udemy';

console.log(Array.from(udemy));

function countTotal() {
  let total = Array.from(arguments).reduce(
    (total, currNum) => (total += currNum),
    0
  );
  console.log(total);
}

countTotal(34, 45, 23, 12, 23);
