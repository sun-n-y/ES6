// spread operator

//strings
const udemy = 'udemy';

const letters = [...udemy];

// console.log(letters);

//arrays
const boys = ['john', 'peter', 'tim'];
const girls = ['susan', 'melissa'];
const bestFriend = 'arnold';

const friends = [bestFriend, ...boys, bestFriend, ...girls, bestFriend];

console.log(friends);

//refernce
// const newFriends = friends;
// newFriends[0] = 'karina';

//copy
const newFriends = [...friends];
console.log(friends);
newFriends[0] = 'karina';
console.log(newFriends);
