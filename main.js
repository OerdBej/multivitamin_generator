// Array of objects with all info/data on our fruits, veggies & vitamins
const ingredientInfo = [
  {
    name: "Orange",
    quantity: "1 piece",
    vitamin: "C",
  },
  {
    name: "Apple",
    quantity: "1 piece",
    vitamin: "C",
  },
  {
    name: "Pear",
    quantity: "1 piece",
    vitamin: "C",
  },
  {
    name: "Pineapple",
    quantity: "1 piece",
    vitamin: "C",
  },
  {
    name: "Carrot",
    quantity: "1 piece",
    vitamin: "C",
  },
  {
    name: "Celery",
    quantity: "1 piece",
    vitamin: "C",
  },
  {
    name: "Beet",
    quantity: "1 piece",
    vitamin: "C",
  },
  {
    name: "Cucumber",
    quantity: "1 piece",
    vitamin: "C",
  },
  // {
  //   name: "Ginger",
  //   quantity: "1 piece",
  //   vitamin: "C",
  // },
  // {
  //   name: "Kiwi",
  //   quantity: "3 pieces",
  //   vitamin: "C",
  // },
  // {
  //   name: "Tomato",
  //   quantity: "3 pieces",
  //   vitamin: "C",
  // },
  {
    name: "Calcium",
    quantity: "1 piece",
    vitamin: "Calcium",
  },
  {
    name: "Iron",
    quantity: "1 piece",
    vitamin: "Iron",
  },
  {
    name: "Vitamin A",
    quantity: "1 piece",
    vitamin: "A",
  },
  {
    name: "Vitamin C",
    quantity: "1 piece",
    vitamin: "C",
  },
];

// !* FUNCTIONS
// Function to add/remove CSS class "hidden" to sections
function switchDisplay(toHide, toDisplay, progBarMove) {
  toHide.classList.toggle("hidden");
  toDisplay.classList.toggle("hidden");
  progBarMove.checked = true;
}

// Function to get the object data corresponding to the button clicked by the user
function getIngredient(element) {
  ingredientInfo.forEach(function(ingredient) {
    if (ingredient.name === element.innerHTML) {
      finalArray.push(ingredient);
    }
  })
}

// Function to delay executing the next step, needs to be called with "async function()" and "await"
// Source: https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// !* Vars for sections/frames & progress bar
// setting variables for all sections/frames of the webpage
let welcomeSection = document.querySelector(".welcome-section");
let veggieSection = document.querySelector(".veggies-section");
let fruitSection = document.querySelector(".fruits-section");
let vitaminSection = document.querySelector(".vitamins-section");
let recipeSection = document.querySelector(".juice-recipe-section");

// setting variables for all steps of the progress bar
let progBar25 = document.getElementById("twentyfive");
let progBar50 = document.getElementById("fifty");
let progBar75 = document.getElementById("seventyfive");
let progBar100 = document.getElementById("onehundred");

// finalArray will store all the object data for the fruit, veggie and vitamin the user chose
let finalArray = [];

// !* User interaction
// Step 1: Clicking the "Lets Mix" button on the landing page moves to veggies frame
let letsMix = document.querySelector(".lets-mix");
letsMix.addEventListener("click", function() {
  welcomeSection.style.display = "none";
  veggieSection.classList.toggle("hidden");
  progBar25.checked = true;
}) 

// Step2: Choosing a veggie button will lead the user to fruits frame
let veggieButtons = document.querySelectorAll(".veggie-btns");
veggieButtons.forEach(function(element) {
  element.addEventListener("click", async function() {
    getIngredient(element);
    console.log(finalArray);
    await sleep(750);
    switchDisplay(veggieSection, fruitSection, progBar50);
  })
})

// Step 3: Choosing a fruit button will lead the user to vitamins frame
let fruitButtons = document.querySelectorAll(".fruit-btns");
fruitButtons.forEach(function(element) {
  element.addEventListener("click", async function() {
    getIngredient(element);
    console.log(finalArray);
    await sleep(750);
    switchDisplay(fruitSection, vitaminSection, progBar75);
  })
})

// Step 4: Choosing a vitamin will lead the user to the final recipe
let vitaminButtons = document.querySelectorAll(".vitamin-btns");
vitaminButtons.forEach(function(element) {
  element.addEventListener("click", async function() {
    getIngredient(element);
    console.log(finalArray);
    await sleep(750);
    switchDisplay(vitaminSection, recipeSection, progBar100);
  })
})


// ANIMATED BTN

let animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

let bubblyButtons = document.getElementsByClassName("bubbly-button");

for (let i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}
