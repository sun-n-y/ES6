//
const person = 'peter smith';
const employee = '23456-EMP-PETER-SMITH';
const manager = '23456-MAN-TIM-JONES';

// console.log(person.startsWith('P'));
// console.log(employee.startsWith('EMP', 6));

const multiplyPeople = (person, amount = 5) => person.repeat(amount);

const people = multiplyPeople(person);

console.log(people);
