//
const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'tom', 'anana', 'kelly'];

//old way of accessing vairables
const orange = fruits[0];
const banana = fruits[1];
const lemon = fruits[2];

console.log(orange, banana, lemon);

//faster way
const [john, tom, bob] = friends;

console.log(john, tom, bob);
