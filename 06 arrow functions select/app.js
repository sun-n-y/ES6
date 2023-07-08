// target element
const btn = document.querySelector('.btn');

//event listener
btn.addEventListener('click', function () {
  console.log(this);
  setTimeout(() => {
    console.log(this);
    this.style.color = 'black';
  }, 2000);
});
