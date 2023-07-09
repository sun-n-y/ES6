//

const people = [
  { id: 1, name: 'john' },
  { id: 2, name: 'peter' },
  { id: 3, name: 'anna' },
];

const grades = ['A', 'B', 'A', 'B', 'C'];
const goodGrades = ['A', 'B', 'A', 'B'];

// //returns and array with an object
// const anna = people.filter((person) => person.name === 'anna');
// console.log(anna);
// console.log(anna[0].name);
// console.log(anna[0].id);

//find will return object only
// const anna = people.find((person) => person.name == 'anna');
// console.log(anna);

//find index
// const person = people.findIndex((item) => item.id == 3);
// console.log(person);
// const newPeople = people.slice(0, person);
// console.log(newPeople);

console.log(grades.every((item) => item !== 'C'));
console.log(goodGrades.every((item) => item !== 'C'));

console.log(grades.some((item) => item == 'C'));
console.log(goodGrades.some((item) => item == 'C'));
