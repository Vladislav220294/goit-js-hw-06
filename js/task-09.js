function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector('body');
const btnActionEl = document.querySelector('.change-color');
const textColorEl = document.querySelector('.color');

btnActionEl.addEventListener('click', onActiveBtn);

function onActiveBtn() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  textColorEl.textContent = getRandomHexColor();
}
