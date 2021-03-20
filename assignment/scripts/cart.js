console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create a global variable named basket and set it to an empty array
var basket = [];

// Create a function called addItem. It should: take an input parameter for a string item
// add the new item to the global array basket. Return true indicating the item was added

function addItem( item ){
  basket.push(item); // used basket push item to add items in basket.
  return 'true';
}

// explanation: list of items for basket
console.log('Basket is${basket}');
console.log('Adding apples', addItem('apples'));
console.log('Adding strawberries', addItem('strawberries'));
console.log('Adding peaches', addItem('peaches'));
console.log('Adding pears', addItem('pears'));

// 2. Create a function called listItems. It should:
// loop over the items in the basket array. It should console.log each individual item on a new line
function listItems(){
for (let item of basket){
  console.log('The items in the basket are:', item);
  }
}

listItems(); // logs out each individual item.

// 3. Problem to put in an empty array.
function empty(){
  basket = []; // empty array for basket.
}
empty();
console.log('Empty the basket:', basket);


// 4. (Stretch Goals)
//Add a global const named maxItems and set it to 5.
//Create a function called isFull(). It should:return false if the basket contains less than max number of items
// return true otherwise (equal or more than maxItems) Update the required addItem function to:
// Use the isFull function to prevent more than maxItems from being added to the basket.If an item was added to the array, return true

const maxItems = 5;

function isFull(basket){
  if (basket >= maxItems){
    return true;
  } {
    return false;
  }
}
console.log('Is the basket full?', isFull()); // Explanation of code: There are only 4 items in the basket for me, and the max is 5, so thats why it returned false.

// 5. Stretch Goals
// Create a function called removeItem. It should: Take an input parameter for a string item.Use Array.indexOf to find the index of the first matching item in the basket.
// Use Array.splice to remove the first matching item from the basket. Return the item removed or null if the item was not found
