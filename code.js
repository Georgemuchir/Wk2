document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('#clear-button');
  const listDiv = document.querySelector('.container');
  const userInput = document.querySelector('#input-field');
  const addItemButton = document.querySelector('#add-button');
  const shoppingList = document.querySelector('#shopping-list');
  const emptyListMessage = document.querySelector('#empty-list');

  let lastPickedColor = '#000'; // Default color

  toggleButton.addEventListener('click', () => {
    shoppingList.innerHTML = '';
    updateEmptyListMessage();
  });

  addItemButton.addEventListener('click', () => {
    const itemText = userInput.value.trim();
    if (itemText !== '') {
      const li = document.createElement('li');
      li.textContent = itemText;
      li.style.color = lastPickedColor;
      shoppingList.appendChild(li);
      userInput.value = '';
    }
    updateEmptyListMessage();
  });

  shoppingList.addEventListener('mouseover', event => {
    if (event.target.tagName === 'LI') {
      event.target.style.textTransform = 'uppercase';
    }
  });

  shoppingList.addEventListener('mouseout', event => {
    if (event.target.tagName === 'LI') {
      event.target.style.textTransform = 'lowercase';
    }
  });

  function updateEmptyListMessage() {
    emptyListMessage.textContent = shoppingList.children.length === 0 ? 'The list is empty' : '';
  }

  updateEmptyListMessage(); // Initial check
});
