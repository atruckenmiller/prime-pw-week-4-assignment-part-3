console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

var basket = [];
function addItem( item ){
  basket.push();
  basket.push('apples', 'strawberries', 'peaches', 'pears');
  return 'true';
}
console.log('The item was added to the basket:', addItem());

function listItems(){
  for(x=0; x=basket.length; x++);
}
for (let item of basket){
  console.log('The items in the basket are: ', item)
}

// function empty(){
//   for();
// }

// const maxItems = 5;
// let isFull = 0;
//
// function isFull(){
//   if ( maxItems > 5 ){
//     return true;
//   }
//     if (maxItems < 5){
//     return false;
//   }
// }
// console.log('isFull- should say true', isfull());
// console.log('isFull- Is not full should say false', isfull());
