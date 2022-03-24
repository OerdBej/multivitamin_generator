//TODO second database structure
const ingredientInfoLookup = [
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
    name: "Carrot",
    quantity: "1 piece",
    vitamin: "C",
  },
  {
    name: "Ginger",
    quantity: "1 piece",
    vitamin: "C",
  },
  {
    name: "Kiwi",
    quantity: "3 pieces",
    vitamin: "C",
  },
  {
    name: "Tomato",
    quantity: "3 pieces",
    vitamin: "C",
  },
];

// Function to add/remove CSS class "hidden" to sections
function switchDisplay(toHide, toDisplay, progBarMove) {
  toHide.classList.toggle("hidden");
  toDisplay.classList.toggle("hidden");
  progBarMove.checked = true;
}

// setting variables for all sections/frames of the webpage
let welcomeSection = document.querySelector(".welcome-section");
let veggieSection = document.querySelector(".veggies-section");
let fruitSection = document.querySelector(".frame3fruits");
let vitaminSection = document.querySelector(".frame4vitamins");

// setting variables for all steps of the progress bar
let progBar25 = document.getElementById("twentyfive");
let progBar50 = document.getElementById("fifty");
// Making progBar clickable will have issues with hide&display, save for later...
// progBar50.addEventListener("click", () => progBar50.checked ? :)
let progBar75 = document.getElementById("seventyfive");
let progBar100 = document.getElementById("onehundred");


// Clicking the "Lets Mix" button on the landing page moves to veggies frame
let letsMix = document.querySelector(".lets-mix");
letsMix.addEventListener("click", function() {
  welcomeSection.style.display = "none";
  veggieSection.classList.toggle("hidden");
  progBar50.checked = true;
}) 

let finalArray = [];
let veggieButtons = document.querySelectorAll(".veggie-btns");
veggieButtons.forEach(function(element) {
  element.addEventListener("click", function() {
    element.classList.add()
    ingredientInfoLookup.forEach(function(ingredient) {
      if (ingredient.name === element.innerHTML) {
        finalArray.push(ingredient);
      }
    })
    // if 2 buttons are active, disable rest + hide & display & move progress bar 
  })
}) 


const ingredientList = [
  "apple",
  "kiwi",
  "carrot",
  "vitaminC",
  "orange",
  "ginger",
];

console.log("The recipie is: ");

ingredientList.forEach((ingredient) => {
  const ingredientInfo = ingredientInfoLookup[ingredient];
  console.log(
    `Take ${ingredientInfo.quantity} of ${ingredientInfo.prettyName} `
  );
});

//TODO Getting the elements in a new Recipe Array by check v
//TODO To add Btn and EventListener // Start - continue - continue - Mix it -- Delay Screen shows loading page - Show the recipe

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
