//
const p = document.querySelectorAll('p');
const result = document.getElementById('result');
const second = document.getElementById('second');

console.log(p);

let newText = Array.from(p);
console.log(newText);
newText = newText.map((item) => `<span>${item.textContent}</span>`).join(' ');

result.innerHTML = newText;

const text = Array.from(document.querySelectorAll('p'), (item) => {
  return 'hello';
});

console.log(text);
