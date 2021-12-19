const scrollInputEl = document.querySelector('#font-size-control');
console.log();
const textEl = document.querySelector('#text');

scrollInputEl.addEventListener('input', onScrollAction);

function onScrollAction(event) {
  textEl.style.fontSize = event.currentTarget.value + 'px';
}
