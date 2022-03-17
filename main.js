// console.log("hello");

// function hello() {
//   console.log("Hi there!");
// }

//! Storing the data

// const VitaminC = [
//   { ingredient: "Orange", quantity: 10 },
//   { ingredient: "Kiwi", quantity: 0 },
// ];

// const VitaminA = [
//   { ingredient: "Carrot", quantity: 0 },
//   { ingredient: "Sweet potato", quantity: 0 },
// ];

// const FruitsTest = { a: 10, b: 20, c: 50 };
// for (const property in FruitsTest) {
//   console.log(` ${FruitsTest[property]}`);
// }

//* search in an array one of the property and return their value 7 quantity

//* Only Objects
// for (let i = 0; i < vitaminC.length; i++) {
//  for (let [juicy, 1] in VitaminC)
//   console.log(VitaminC[1]);
// }

//* “ Your recipe for today is …..”
//* how to get a value from a property
//! console.log(VitaminC[0].ingredient); // orange calling ingredients

// console.log(
//   VitaminC.filter(function (e) {
//     return e.quantity; // 10
//   })
// );

// VitaminC.includes(("Orange")
//   console.log(VitaminC[0].quantity);
// // )
// //* CHecking the properties in an object!
// const FruitsTest = { a: 10, b: 20, c: 50 };
// for (const property in FruitsTest) {
//   console.log(` ${FruitsTest[property]}`);
// }

//*get orange quantity according to the  position
//* returning the quantity!!!
// console.log(VitaminC[0].quantity);

//* according to a var we need  to return the quantity of 1 element

// const fruit1 = "orange";
// const fruit1 = prompt("Which is your favorite fruit");

// let which;
// console.log(fruit1);

// for (let i = 0; i < VitaminC.length; i++) {
//   console.log(VitaminA[i]);
// }
// const Vitamin = [
//   { name: "apples", quantity: 2 },
//   { name: "bananas", quantity: 0 },
//   { name: "cherries", quantity: 5 },
// ];

// function isCherries(fruit) {
//   return fruit.name === "cherries"; //cherries.name = "cherries"
// }

// console.log(inventory.find(isCherries));
// // { name: 'cherries', quantity: 5 }

// const VitaminC = [
//   { name: "Orange", quantity: 10 },
//   { name: "Kiwi", quantity: 0 },
// ];

// const VitaminA = [
//   { name: "Carrot", quantity: 0 },
//   { name: "Sweet potato", quantity: 0 },
// ];

// function isCherries(fruit) {
//   return fruit.name === "Orange"; //cherries.name = "cherries"
// }

// console.log(VitaminC.find(isCherries));

// let fruit1 = "orange";
// console.log(fruit1);

// const VitaminC = [
//   { ingredient: "Orange", quantity: 10 },
//   { ingredient: "Kiwi", quantity: 0 },
// ];

// const VitaminA = [
//   { ingredient: "Carrot", quantity: 0 },
//   { ingredient: "Sweet potato", quantity: 0 },
// ];

// VitaminC[0].ingredient === "orange" ? console.log("boom") : console.log("boom");

// VitaminC[0].ingredient === "orange"
//   ? console.log("boom")  : console.log(VitaminC[1].quantity);

//* OERD VERSION

// const VitaminC = [
//   { ingredient: "Orange", quantity: 10 },
//   { ingredient: "Kiwi", quantity: 0 },
// ];

// for (let i = 0; i < VitaminC.length; i++) {
//     console.log(VitaminC[i].quantity);
// };

// for (const item of VitaminC) {
//     console.log(item.quantity);
// }
//this works
//Oerd Bej22:23
// const VitaminC = [
//   { ingredient: "Orange", quantity: 10 },
//   { ingredient: "Kiwi", quantity: 0 },
// ];

// for (let i = 0; i < VitaminC.length; i++) {
//     console.log(VitaminC[i].quantity);
// };

// for (const item of VitaminC) {
//     console.log(item.quantity);
// }

// if (VitaminC[0].ingredient === "orange") {
//   for (let j in VitaminC) {
    // console.log(VitaminC[j].quantity);
// }}


// VitaminC[0].ingredient === "orange" ? console.log("boom") : console.log("no");

//prompt
// click with place this var 
// const test = "orange"

// const VitaminC = [
//   { name: "Orange", quantity: 100 },
//   { name: "Kiwi", quantity: 0 },
// ];

// const VitaminA = [
//   { name: "Carrot", quantity: 0 },
//   { name: "Sweet potato", quantity: 0 },
// ];

// console.log(VitaminC[0].quantity);

// for (let i = 0; i < VitaminC.length; i++) {
//   if (VitaminC[i].name.toLowerCase() === test.toLowerCase()) {
//     console.log((VitaminC[i].quantity),"Cup");
//   } 
//   }
// ["quantity"]

// pseudo code: Challenge #01
//TODO Create a new array => Copy information from our Database (array) to place it in a new array! 

const VitaminC = [
  { name: "ORANGE", quantity: 100 },
  { name: "Kiwi", quantity: 0 },
];

const VitaminA = [
  { name: "Carrot", quantity: 0 },
  { name: "Sweet potato", quantity: 0 },
];

//* STEP1: Create an empty array to fill in with the info and an empty var to store the user input
let fruit;
let totalAmount = [];

// Get the button and the empty p tag (where our message will be displayed) from the HTML
const myButton = document.getElementById("big-button");
const message = document.getElementById("text-here");

// Add an event listener to the button, triggering a prompt asking the user for input, if the button is clicked
myButton.addEventListener("click", function () {
  fruit = prompt("What fruit do you want? ");

  // The find method looks for a (case-insensitive) match for the user input in the array and stores the whole object as result
  let foundFruit = VitaminC.find(function (element) {
    return element.name.toLowerCase() === fruit.toLowerCase();
  });
  // If the find method returned no match, it stores "undefined" as its value
  
  // Checking the value of foundFruit to display a specific message in the HTML for each case
  if (foundFruit != undefined) {
    message.innerHTML = `This is your quantity: ${foundFruit.quantity}`;
    totalAmount.push(foundFruit);
  } else {
    message.innerHTML = `Sorry, we don't have that fruit`;
  }

  // Same as arrow function:
  // let foundFruit = VitaminC.find(
  //   (element) => element.name.toLowerCase() === fruit.toLowerCase()
  // );
  // If-else as a ternary:
  // foundFruit
  //   ? message.innerHTML = `This is your quantity: ${foundFruit.quantity}`
  //   : message.innerHTML = `Sorry, we don't have that fruit`
  return totalAmount;
});



// pseudo code when we click on apple btn then console.log const apple 

// const apple = "2 Apples "
// const Orange = "3 Oranges"
console.log(totalAmount);