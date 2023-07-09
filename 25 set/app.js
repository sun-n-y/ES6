//
const unique = new Set();

unique.add('first');
unique.add('second');
unique.add(5);
unique.add(6);

const result = unique.delete(5);
console.log(result);

const isValue = unique.has(6);
console.log(isValue);

console.log(unique);
