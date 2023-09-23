//

const fruits = ['orange', 'banana', 'lemon', 'lime'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

const [one, , , two] = fruits;
console.log(one, two);

let first = 'joe';
let second = 'tim';

[second, first] = [first, second];
console.log(second);

//array from

const udemy = 'udemy';
console.log(Array.from(udemy));
