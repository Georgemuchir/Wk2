### Functions and Event Listeners Explained

---

#### `document.addEventListener('DOMContentLoaded', () => { ... })`

**Description**:  
This code runs when the whole web page is loaded and ready.

---

#### `toggleButton.addEventListener('click', () => { ... })`

**Description**:  
When you click the button with the ID `clear-button`, this code clears the shopping list.

**How it Works**:
1. Empties the list.
2. Updates the message to say if the list is empty.

---

#### `addItemButton.addEventListener('click', () => { ... })`

**Description**:  
When you click the button with the ID `add-button`, this code adds a new item to the shopping list.

**How it Works**:
1. Gets the text from the input box.
2. If the text isn't empty, it makes a new list item with that text.
3. Adds the new item to the list.
4. Clears the input box.
5. Updates the message to say if the list is empty.

---

#### `shoppingList.addEventListener('mouseover', event => { ... })`

**Description**:  
When you move your mouse over a list item, this code changes its text to uppercase.

**How it Works**:
1. Checks if you are hovering over a list item.
2. If yes, changes the text to uppercase.

---

#### `shoppingList.addEventListener('mouseout', event => { ... })`

**Description**:  
When you move your mouse away from a list item, this code changes its text back to lowercase.

**How it Works**:
1. Checks if you are leaving a list item.
2. If yes, changes the text back to lowercase.

---

#### `function updateEmptyListMessage() { ... }`

**Description**:  
This code updates the message that tells you if the shopping list is empty.

**How it Works**:
1. Counts the items in the list.
2. If there are no items, it says "The list is empty".
3. If there are items, it clears the message.

---

**Additional Context**:
- `updateEmptyListMessage();`: This line runs the `updateEmptyListMessage` function right away to check if the list is empty when the page first loads.
