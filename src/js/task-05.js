const nameInputEl = document.querySelector('#name-input');
const nameOutEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', onActiveForm);

function onActiveForm(event) {
  console.log(event.currentTarget);
  if (event.currentTarget.value !== '') {
    return (nameOutEl.textContent = event.currentTarget.value);
  }
  return (nameOutEl.textContent = 'Anonymous');
}
