//
const fruits = ['apple', 'prange', 'banana', 'peach'];
const longName = 'John Smith Pepper III';
let shortName = '';

for (const letter of longName) {
  //   console.log(letter);
  if (letter === ' ') {
    continue;
  } else {
    shortName += letter;
  }
}
console.log(shortName);
