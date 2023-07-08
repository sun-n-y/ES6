//
const tim = {
  first: 'tim',
  last: 'cook',
  city: 'chicago',
  siblings: { sister: 'jane' },
};

//es6
const {
  first: firstName,
  last,
  city,
  siblings: { sister: favSib },
} = tim;
console.log(firstName, last, city, favSib);

//old way
// const firstName = tim.first;
// const lastName = tim.last;
// const sister = tim.siblings.sister;

// console.log(firstName, lastName, sister);
