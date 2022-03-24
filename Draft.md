<!-- *SNADBOX Tries  -->

// console.log("hello");

// function hello() {
// console.log("Hi there!");
// }

//! Storing the data

// const VitaminC = [
// { ingredient: "Orange", quantity: 10 },
// { ingredient: "Kiwi", quantity: 0 },
// ];

// const VitaminA = [
// { ingredient: "Carrot", quantity: 0 },
// { ingredient: "Sweet potato", quantity: 0 },
// ];

// const FruitsTest = { a: 10, b: 20, c: 50 };
// for (const property in FruitsTest) {
// console.log(` ${FruitsTest[property]}`);
// }

//\* search in an array one of the property and return their value 7 quantity

//\* Only Objects
// for (let i = 0; i < vitaminC.length; i++) {
// for (let [juicy, 1] in VitaminC)
// console.log(VitaminC[1]);
// }

//_ “ Your recipe for today is …..”
//_ how to get a value from a property
//! console.log(VitaminC[0].ingredient); // orange calling ingredients

// console.log(
// VitaminC.filter(function (e) {
// return e.quantity; // 10
// })
// );

// VitaminC.includes(("Orange")
// console.log(VitaminC[0].quantity);
// // )
// //\* CHecking the properties in an object!
// const FruitsTest = { a: 10, b: 20, c: 50 };
// for (const property in FruitsTest) {
// console.log(` ${FruitsTest[property]}`);
// }

//_get orange quantity according to the position
//_ returning the quantity!!!
// console.log(VitaminC[0].quantity);

//\* according to a var we need to return the quantity of 1 element

// const fruit1 = "orange";
// const fruit1 = prompt("Which is your favorite fruit");

// let which;
// console.log(fruit1);

// for (let i = 0; i < VitaminC.length; i++) {
// console.log(VitaminA[i]);
// }
// const Vitamin = [
// { name: "apples", quantity: 2 },
// { name: "bananas", quantity: 0 },
// { name: "cherries", quantity: 5 },
// ];

// function isCherries(fruit) {
// return fruit.name === "cherries"; //cherries.name = "cherries"
// }

// console.log(inventory.find(isCherries));
// // { name: 'cherries', quantity: 5 }

// const VitaminC = [
// { name: "Orange", quantity: 10 },
// { name: "Kiwi", quantity: 0 },
// ];

// const VitaminA = [
// { name: "Carrot", quantity: 0 },
// { name: "Sweet potato", quantity: 0 },
// ];

// function isCherries(fruit) {
// return fruit.name === "Orange"; //cherries.name = "cherries"
// }

// console.log(VitaminC.find(isCherries));

// let fruit1 = "orange";
// console.log(fruit1);

// const VitaminC = [
// { ingredient: "Orange", quantity: 10 },
// { ingredient: "Kiwi", quantity: 0 },
// ];

// const VitaminA = [
// { ingredient: "Carrot", quantity: 0 },
// { ingredient: "Sweet potato", quantity: 0 },
// ];

// VitaminC[0].ingredient === "orange" ? console.log("boom") : console.log("boom");

// VitaminC[0].ingredient === "orange"
// ? console.log("boom") : console.log(VitaminC[1].quantity);

//\* OERD VERSION

// const VitaminC = [
// { ingredient: "Orange", quantity: 10 },
// { ingredient: "Kiwi", quantity: 0 },
// ];

// for (let i = 0; i < VitaminC.length; i++) {
// console.log(VitaminC[i].quantity);
// };

// for (const item of VitaminC) {
// console.log(item.quantity);
// }
//this works
//Oerd Bej22:23
// const VitaminC = [
// { ingredient: "Orange", quantity: 10 },
// { ingredient: "Kiwi", quantity: 0 },
// ];

// for (let i = 0; i < VitaminC.length; i++) {
// console.log(VitaminC[i].quantity);
// };

// for (const item of VitaminC) {
// console.log(item.quantity);
// }

// if (VitaminC[0].ingredient === "orange") {
// for (let j in VitaminC) {
// console.log(VitaminC[j].quantity);
// }}

// VitaminC[0].ingredient === "orange" ? console.log("boom") : console.log("no");

//prompt
// click with place this var
// const test = "orange"

// const VitaminC = [
// { name: "Orange", quantity: 100 },
// { name: "Kiwi", quantity: 0 },
// ];

// const VitaminA = [
// { name: "Carrot", quantity: 0 },
// { name: "Sweet potato", quantity: 0 },
// ];

// console.log(VitaminC[0].quantity);

// for (let i = 0; i < VitaminC.length; i++) {
// if (VitaminC[i].name.toLowerCase() === test.toLowerCase()) {
// console.log((VitaminC[i].quantity),"Cup");
// }
// }
// ["quantity"]

// pseudo code: Challenge #01
//TODO Create a new array => Copy information from our Database (array) to place it in a new array!

// const VitaminC = [
// { name: "ORANGE", quantity: 100 },
// { name: "Kiwi", quantity: 0 },
// ];

// const VitaminA = [
// { name: "Carrot", quantity: 0 },
// { name: "Sweet potato", quantity: 0 },
// ];

<!-- *! ARNE's CODE -->

// let fruit;
// let totalAmount = [];

// Get the button and the empty p tag (where our message will be displayed) from the HTML
// const myButton = document.getElementById("big-button");
// const message = document.getElementById("text-here");

// // Add an event listener to the button, triggering a prompt asking the user for input, if the button is clicked
// myButton.addEventListener("click", function () {
// fruit = prompt("What fruit do you want? ");

// // The find method looks for a (case-insensitive) match for the user input in the array and stores the whole object as result
// let foundFruit = VitaminC.find(function (element) {
// return element.name.toLowerCase() === fruit.toLowerCase();
// });
// // If the find method returned no match, it stores "undefined" as its value

// // Checking the value of foundFruit to display a specific message in the HTML for each case
// if (foundFruit !== undefined) {
// message.innerHTML = `This is your quantity: ${foundFruit.quantity}`;
// totalAmount.push(foundFruit);
// } else {
// message.innerHTML = `Sorry, we don't have that fruit`;
// }

// // Same as arrow function:
// // let foundFruit = VitaminC.find(
// // (element) => element.name.toLowerCase() === fruit.toLowerCase()
// // );
// // If-else as a ternary:
// // foundFruit
// // ? message.innerHTML = `This is your quantity: ${foundFruit.quantity}`
// // : message.innerHTML = `Sorry, we don't have that fruit`
// return totalAmount;
// });

<!-- *! JS Code for using .toggle() to display & hide divs after clicking a button -->

// Function to add CSS class "hidden" to an HTML-element and remove the same class if it is already there from the start, so hidden stuff is now displayed

function switchDisplay(toHide, toDisplay) {
toHide.classList.toggle("hidden");
toDisplay.classList.toggle("hidden");
}

const fruitContainer = document.getElementById("fruits");
const veggieContainer = document.getElementById("veggies");
let textContainer = document.getElementById("text-here");
let finalArray = [];

const fruitButtons = document.querySelectorAll(".fruit-button")
// MUST addEventListener to each element with "forEach", adding the Listener to the variable fruitButtons as a whole doesn't work!
fruitButtons.forEach(function (element) {
element.addEventListener("click", function() {
// Below also works with (element.innerHTML) and (element.value) if value is specified like id/class
switchDisplay(fruitContainer, veggieContainer);
finalArray.push(element.innerHTML);

        console.log(`finalArray is now: ${finalArray} with ${finalArray.length} elements`);
    })

})

const veggieButtons = document.querySelectorAll(".veggie-button")
veggieButtons.forEach(function (element) {
element.addEventListener("click", function() {
// Below also works with (element.value) if value is specified like id/class
switchDisplay(veggieContainer, textContainer);
finalArray.push(element.innerHTML);

        console.log(`finalArray is now: ${finalArray} with ${finalArray.length} elements`);
    })

})

console.log(finalArray);
textContainer.innerHTML = `Your favorite fruit and veggie: ${finalArray}`;
// PROBLEM: above line displays nothing at all.
// textContainer.innerHTML = finalArray[0] displays undefined...
// "return finalArray" in both eventListener functions does not solve the issue.

\***\*\*\*\*\*\*\*** CSS IMAGES FOR THE BACKGROUND
carrot
https://foodandnutrition.org/wp-content/uploads/Savor-Carrots.jpg

celery
https://static.onecms.io/wp-content/uploads/sites/44/2021/12/07/is-celery-good-for-you-heres-what-an-rd-says.jpg

beets
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNKkvFa9cmNPh6kjznRGmZHx9wSIPM_qyvNA&usqp=CAU

cucamber
https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cucumber-slice-royalty-free-image-153556336-1562870568.jpg

Apple
https://idsb.tmgrup.com.tr/ly/uploads/images/2020/05/13/35552.jpeg

pear
https://agro-market24.eu/uploads/photos/73338/sprzedam_fruits-fresh-pear-_agromarket24_ceny%20rolnicze-480279-73338.jpeg

pineapple
https://aijn.eu/files/attachments/.116/wl1200hp1200q85_shutterstock_164089904.jpg

orange
https://www.gardeningknowhow.com/wp-content/uploads/2021/08/Orange-fruits.jpg

Vitamin A
https://media1.faz.net/ppmedia/aktuell/298872796/1.1643593/default-retina/strukturformel-von-tocopherol.jpg
