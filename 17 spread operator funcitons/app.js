//

const max = Math.max(4, 5, 6, 7, 899);

console.log(max);

//pass in array

const numbers = [12, 234, 6, 7, 3546, 345645, 333, 3123242342];

const max2 = Math.max(...numbers);

console.log(max2);

//
const john = ['john', 'sanders'];

const sayHello = (name, lastName) => {
  console.log(`hello, ${name} ${lastName}`);
};

sayHello(john[0], john[1]);
sayHello(...john);
