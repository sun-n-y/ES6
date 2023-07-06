//template strings

const name = 'tom';
const lastName = 'jones';
const age = 25;

const phrase =
  'my full name is ' + name + ' ' + lastName + ' and im ' + age + ' years old';

const phrase2 = `my full name is ${name} ${lastName} and I'm ${age} years old`;

// console.log(phrase2);

//insert html dynamically

const person = {
  name: 'kyle',
  job: 'developer',
  hobbies: ['surfing', 'soccer', 'volleyball'],
};

const result = document.querySelector('.result');

result.innerHTML = `
<h2>${person.hobbies}</h2>
<p>${person.job}</p>
<ul>${person.hobbies
  .map(function (item) {
    return `<li>${item}</li>`;
  })
  .join('')}</ul>
`;

//template leterals

const author = 'some author';
const statement = 'some statement';

const quote = highlight`here is the ${statement} by ${author} and it could not be more true`;
console.log(quote);

result.innerHTML = quote;

function highlight(text, ...vars) {
  const awesomeText = text.map(function (item, index) {
    return `${item} <strong class="blue">${vars[index] || ''}</strong> `;
  });
  return awesomeText.join('');
}
