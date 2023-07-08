//
//
const tim = {
  first: 'tim',
  last: 'cook',
  city: 'chicago',
  siblings: { sister: 'jane' },
};

function printPerson({ first, last, city }) {
  //   const { first, last, city } = person;
  console.log(first, last, city);
}

printPerson(tim);
