//

const headings = [...document.querySelectorAll('h1')];
const result = document.querySelector('#result');

console.log(headings);

result.innerHTML = headings
  .map((item) => `<span>${item.textContent}</span>`)
  .join(' ');
