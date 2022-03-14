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
const test = "orange"

const VitaminC = [
  { name: "ORANGE", quantity: 100 },
  { name: "Kiwi", quantity: 0 },
];

const VitaminA = [
  { name: "Carrot", quantity: 0 },
  { name: "Sweet potato", quantity: 0 },
];

console.log(VitaminC[0].quantity);

for (let i = 0; i < VitaminC.length; i++) {
  if (VitaminC[i].name.toLowerCase() === test.toLowerCase()) {
    console.log(VitaminC[i].quantity);
  } 
  }
// ["quantity"]