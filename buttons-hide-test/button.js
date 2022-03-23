// ! Only works with buttons which have a match in the array "ingredientInfoLookup" !
// Will not work on buttons like celery, kale etc. !

const ingredientInfoLookup = [
    {
      name: "orange",
      quantity: "1 piece",
      vitamin: "C",
    },
    {
      name: "apple",
      quantity: "1 piece",
      vitamin: "C",
    },
    {
      name: "carrot",
      quantity: "1 piece",
      vitamin: "C",
    },
    {
      name: "ginger",
      quantity: "1 piece",
      vitamin: "C",
    },
    {
      name: "kiwi",
      quantity: "3 pieces",
      vitamin: "C",
    },
    {
      name: "tomato",
      quantity: "3 pieces",
      vitamin: "C",
    },
];

// Test if eventListener works on <img>   => WORKS
let pineTest = document.getElementById("pine-picture");
pineTest.addEventListener("click", function() {
    alert("Hey, it works!");
})

// Function to add CSS class "hidden" to an HTML-element and remove the same class if it is already there from the start, so hidden stuff is now displayed 
function switchDisplay(toHide, toDisplay) {
    toHide.classList.toggle("hidden");
    toDisplay.classList.toggle("hidden");
}

const fruitContainer = document.getElementById("fruits");
const veggieContainer = document.getElementById("veggies");
let textContainer = document.getElementById("text-here");

// empty array for the final recipe
let finalArray = [];

const fruitButtons = document.querySelectorAll(".fruit-button")
// adding eventListener for clicking on each fruit-button with "forEach"
fruitButtons.forEach(function (element) {
    element.addEventListener("click", function() {
      // again "forEach" to loop through each object in our main array "ingredientInfoLookup"
        ingredientInfoLookup.forEach(pizza => {
          // if the name property of an object is the same as a button id => add the whole object with name, quantity and vitamin info to the finalArray
            if(pizza.name === element.id) {
                finalArray.push(pizza);
            }
        })
        // now hide the fruits and show the veggies
        switchDisplay(fruitContainer, veggieContainer);
        console.log(finalArray);
    })
})

// Same as above with the fruits
const veggieButtons = document.querySelectorAll(".veggie-button")
veggieButtons.forEach(function (element) {
    element.addEventListener("click", function() {
        ingredientInfoLookup.forEach(pizza => {
            if(pizza.name === element.id) {
                finalArray.push(pizza);
            }
        })
        // Hide the veggies and show the <p> for the final result
        switchDisplay(veggieContainer, textContainer);

        console.log(`finalArray is now: ${finalArray} with ${finalArray.length} elements`);
        // Display this in the <p> tag, here set to the second button we clicked, the veggie, should be changed of course!
        textContainer.innerHTML = `<h1>Your need ${finalArray[1].quantity} of ${finalArray[1].name} to get lots of Vitamin ${finalArray[1].vitamin}<h1>`
    })
})