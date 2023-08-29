//
const people = [
  { id: 1, name: 'john' },
  { id: 2, name: 'will' },
  { id: 3, name: 'gill' },
];

const grades = ['A', 'B', 'A', 'B', 'C'];
const goodGrades = ['A', 'B', 'A', 'B'];

// const anna = people.filter((person) => person.name === 'john');
// console.log(anna);

// const anna = people.find((person) => person.name === 'john');
// console.log(anna);

// const person = people.findIndex((item) => item.id === 3);
// console.log(person);

// const neePeople = people.slice(0, person);
// console.log(neePeople);

const allGoodGrades = grades.every((item) => item !== 'C');
console.log(allGoodGrades);

const oneBadGrade = grades.some((item) => item === 'C');

console.log(oneBadGrade);
