const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients');

ul.append(...ingredients.map(i => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = i;
  return li;
}));