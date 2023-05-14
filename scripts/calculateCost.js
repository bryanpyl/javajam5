// Ask user for Coffee Bean ID number
do {
  var doAgain = false;
  var coffeeID = parseInt(prompt("Enter the Coffee Bean ID number (1-4)(0 to stop): \n1.Brazil Cerrado(RM42 per pack)\n1.Vanguard Blend(RM42 per pack)\n3.Organic Marcala(RM56 per pack)\n4.Taster Pack Trio(RM69 per pack) "));

  // Check if Coffee Bean ID is valid
  if (coffeeID < 0 || coffeeID > 4) {
    alert("Invalid Coffee Bean ID number. Please enter a number between 0 and 4.");
    doAgain = true;
  }
} while (doAgain);

// Ask user for number of packs of coffee beans
let numPacks = parseInt(prompt("Enter the number of packs of coffee beans you want to purchase:"));

// Calculate total cost of coffee beans
let coffeeCost = 0;
switch (coffeeID) {
  case 0:
    throw "exit()";
  case 1:
    coffeeCost = 42.00;
    break;
  case 2:
    coffeeCost = 42.00;
    break;
  case 3:
    coffeeCost = 56.00;
    break;
  case 4:
    coffeeCost = 69.00;
    break;
}
let totalCost = coffeeCost * numPacks;

// Display total cost of coffee beans using an alert message
alert("The total cost of " + numPacks + " pack(s) of coffee beans is RM" + totalCost.toFixed(2) + ".");
