//

const p = document.querySelectorAll('p');
const result = document.getElementById('result');
const second = document.getElementById('second');

console.log(p);

let newText = Array.from(p);

result.innerHTML = newText
  .map((item) => `<h1>${item.textContent}</h1>`)
  .join(' ');

const text = Array.from(document.querySelectorAll('p'), (item) => {
  return `<span>${item.textContent}</span>`;
}).join(' ');

console.log(text);

second.innerHTML = text;
