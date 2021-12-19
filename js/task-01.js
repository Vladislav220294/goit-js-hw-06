const categoriesEl = document.querySelector('ul');
console.log('Number of categories:', categoriesEl.children.length);

const a = categoriesEl.children;
[...a].forEach(element => {
  console.log('Category:', element.firstElementChild.textContent);
  console.log('Elements:', element.lastElementChild.children.length);
});
