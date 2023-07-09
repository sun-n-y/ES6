//rest operator

//arrays
const fruit = ['apple', 'orange', 'lemon'];
const [first, second, ...fruits] = fruit;
console.log(first, second, fruits);
console.log(fruits);

//objects
const person = { name: 'john', lastname: 'smith', job: 'developer' };
const { ...rest } = person;
console.log(rest);

//collecting parameters in funciton

//rest operator of the parameters
const getAvg = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  console.log(`${name} johns avg score ${total / scores.length}`);
};

//rest of the parameters
getAvg(person.name, 78, 90, 56, 43);

const testScores = [34, 5, 6, 78, 345, 3432];

getAvg(person.name, ...testScores);
