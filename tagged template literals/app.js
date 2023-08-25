//
const author = 'some author';
const statment = 'some statement';

const quote = highlight`here is the ${statment} by ${author} and it could not be more true`;

console.log(quote);

const result = document.getElementById('result');
result.innerHTML = quote;

function highlight(text, ...args) {
  const awesomeText = text.map((item, index) => {
    return `${item} <strong class="blue">${args[index] || ''}</strong>`;
  });
  return awesomeText.join('');
}
