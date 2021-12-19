const formEl = document.querySelector('#validation-input');

formEl.addEventListener('blur', onAddClass);

function onAddClass(event) {
  if (event.currentTarget.value.length === Number(formEl.dataset.length)) {
    if (formEl.classList.contains('invalid')) {
      formEl.classList.remove('invalid');
    }
    return formEl.classList.add('valid');
  } else {
    return formEl.classList.add('invalid');
  }
}
