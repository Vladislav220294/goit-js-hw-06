function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');
const controlDivEl = document.querySelector('#controls');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = controlDivEl.firstElementChild.value;

  for (let i = 1; i <= amount && i <= 100; i += 1) {
    const aEl = document.createElement('div');
    aEl.style.backgroundColor = getRandomHexColor();

    aEl.style.width = 30 + (i - 1) * 10 + 'px';
    aEl.style.height = 30 + (i - 1) * 10 + 'px';
    boxesEl.append(aEl);
  }
}
function destroyBoxes() {
  boxesEl.innerHTML = '';
}
