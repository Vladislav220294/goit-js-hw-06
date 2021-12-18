const counterValueEl = document.querySelector('#value');
const btnDecrementEl = document.querySelector(
  'button[data-action="decrement"]',
);

const btnIncrementEl = document.querySelector(
  'button[data-action="increment"]',
);
let counterValue = 0;

btnDecrementEl.addEventListener('click', onDicreasebtnValue);
btnIncrementEl.addEventListener('click', onIncreasebtnValue);

function onIncreasebtnValue() {
  counterValue += 1;
  updateValueUI();
}
function onDicreasebtnValue() {
  counterValue -= 1;
  updateValueUI();
}
function updateValueUI() {
  counterValueEl.textContent = counterValue;
}
