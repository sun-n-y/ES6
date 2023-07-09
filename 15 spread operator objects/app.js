//
const person = {
  name: 'john',
  job: 'developer',
};

const newPerson = { ...person, city: 'chicago', name: 'tom' };
newPerson.food = 'pizza';
console.log(newPerson);
console.log(person);
