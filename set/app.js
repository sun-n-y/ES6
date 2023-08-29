//

const unique = new Set();

const random = 'third';

unique.add('first');
unique.add('sec');
unique.add('thrd');
unique.add('first');
unique.add(4);
unique.add(random);

const result = unique.delete('third');
console.log(result);

const isValue = unique.has(4);
console.log(isValue);

// unique.clear();

console.log(unique);
