const menu = document.querySelector('#menu');
const button = document.querySelector('#menu-button');

button.addEventListener('click', function() {
  menu.classList.toggle('hidden');
});