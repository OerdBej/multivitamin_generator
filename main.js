//TODO second database structure
const ingredientInfoLookup = {
  orange: {
    prettyName: "Orange",
    quantity: "1 piece",
    vitamin: "C",
  },
  apple: {
    prettyName: "Apple",
    quantity: "1 piece",
    vitamin: "C",
  },
  carrot: {
    prettyName: "Carrot",
    quantity: "1 piece",
    vitamin: "C",
  },
  ginger: {
    prettyName: "Ginger",
    quantity: "1 piece",
    vitamin: "C",
  },
  kiwi: {
    quantity: "3 pieces",
    vitamin: "C",
  },
  vitaminC: {
    prettyName: "Tomato",
    quantity: "3 pieces",
  },
};

const vitaminInKiwi = ingredientInfoLookup["kiwi"].vitamin;
const quantitiyOfKiwi = ingredientInfoLookup["kiwi"].quantity;
console.log(vitaminInKiwi); //works!
console.log(quantitiyOfKiwi); //works!

const ingridientList = [
  "apple",
  "kiwi",
  "carrot",
  "vitaminC",
  "orange",
  "ginger",
];

console.log("The recipie is: ");

ingridientList.forEach((ingridient) => {
  const ingredientInfo = ingredientInfoLookup[ingridient];
  console.log(
    `Take ${ingredientInfo.quantity} of ${ingredientInfo.prettyName} `
  );
});

//TODO Getting the elements in a new Recepie Array by check v
//TODO To add Btn and EventListener // Start - continue - continue - Mix it -- Delay Screen shows loading page - Show the recepie
