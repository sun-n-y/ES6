//
const products = [
  { title: 'Modern Poster' },
  { title: 'Bar Stool' },
  { title: 'Armchair' },
  { title: 'Leather Chair' },
];

const text = 'a';
const filteredProduct = products.filter((product) =>
  product.title.toLowerCase().includes(text)
);
console.log(filteredProduct);

// const firstName = 'john';

// // const result = firstName.includes('j', 1);

// const product = { title: 'some title 1' };

// const result = product.title.includes('s');

// console.log(result);
