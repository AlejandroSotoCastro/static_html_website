const listItems = document.querySelectorAll("li");
console.log(`We have ${listItems.length} list items on this page`);
const btns = document.querySelectorAll('button');

// Convert buttons NodeList to an array
const btnsArr = Array.from(btns);
console.log(btnsArr)