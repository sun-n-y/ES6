//arrow functions

const sayHi = () => console.log('hello');

sayHi();

//passing in one parameter
const double = (value) => value * 2;

const num = double(4);

console.log(num);

//passing in two parameters, more than one line
const multiply = (value1, value2) => {
  const result = value1 * value2;
  return { result };
};

console.log(multiply(3, 3));

//return object
const object = () => ({ name: 'john', age: 25 });

console.log(object());

//callback functions, one liner
const numbers = [1, 2, 3, 4, 5, 6];

const big = numbers.filter((number) => number > 2);

console.log(big);

//callback functions, two parameters and more than one line
const numbers2 = [1, 2, 3, 4, 5, 6];

const big2 = numbers.filter((number, index) => {
  console.log(index);
  return number > 2;
});

console.log(big2);

//arrow funcitons in event listener
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => console.log(window));
