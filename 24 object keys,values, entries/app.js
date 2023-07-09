//
const person = {
  name: 'john',
  age: 25,
  status: 'student',
};

//object keys
const keys = Object.keys(person);
console.log(keys);
//object values
const values = Object.values(person);
console.log(values);
//object enttries
const both = Object.entries(person);
console.log(both);

//map
const result = both.map((item) => {
  const [first, second] = item;
  return first;
});

// console.log(result);

// for of
for (const [first, second] of both) {
  //   const [first, second] = item;
  console.log(first, second);
}
