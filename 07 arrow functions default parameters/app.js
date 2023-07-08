//
const john = 'john';
const peter = 'peter';

function sayHi(person = 'polo') {
  console.log(`Hi ${person}`);
}

const sayHello = (person = 'him') => console.log(`Hello ${person}`);

sayHi();
sayHello();
