//
const person = {
  name: 'john',
  age: 25,
  status: 'student',
};

for (const propertyName in person) {
  console.log(`${propertyName} : ${person[propertyName]}`);
}
