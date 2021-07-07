/////////////////////////////
// Calculate Invoice Function
function calculateInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice) {
    let invoice = Number(starterPrice) + Number(maindishPrice) + Number(dessertPrice) + Number(beveragePrice);
    invoice = Math.round(invoice * 1e2) / 1e2; // round to two decimals
    //invoice = Number(invoice.toFixed(2)); // second way to round decimals, but returns a string by default
     return invoice;
 }

/* I hope I can do it with arrays as well. Since it only says "create four variables that you will pass to the function"
so this shouldn't exclude an array! */
var starter_prices = [4.95, 3.99, 3.49, 11.9];
var maindish_prices = [12.99, 8.45, 5.95, 4.29];
var dessert_prices = [1.99, 3.29, 3.95, 4.55];
var beverage_prices = [2.49, 2.49, 2.9, 0.99];

// console.log("For costumer \"A\" the invoice is: " + calculateInvoice(starter_prices[0], maindish_prices[2], dessert_prices[0], beverage_prices[3]));

// console.log("Another customer has to pay in Euro: " + calculateInvoice(starter_prices[1], maindish_prices[3], dessert_prices[2], beverage_prices[0]));

// console.log("Your total invoice amount is: " + calculateInvoice(starter_prices[3], maindish_prices[1], dessert_prices[1], beverage_prices[2]));

// console.log("\n\n\n");


// non-array approach
var starter = 3.99;
var maindish = 8.45;
var dessert = 4.55;
var beverage = 2.9;
console.log("For costumer \"A\" the invoice is: " + calculateInvoice(starter, maindish, dessert, beverage));

var starter = 11.99;
var maindish = 5.95;
var dessert = 3.29;
var beverage = 2.49;
console.log(`Another customer has to pay in Euro ${calculateInvoice(starter, maindish, dessert, beverage)}`);

var starter = 4.95;
var maindish = 12.99;
var dessert = 1.99;
var beverage = 0.99;
console.log("Your total invoice amount is: " + calculateInvoice(starter, maindish, dessert, beverage));

console.log("\n\n\n");

////////////////////////////
// Students Invoice Variable
const studentInvoice = function(starterPrice, maindishPrice, dessertPrice, beveragePrice) {
    let invoice = (Number(starterPrice*0.9)) + (Number(maindishPrice*0.9)) + (Number(dessertPrice*0.9)) + Number(beveragePrice); // make sure they are all numbers
    invoice = Math.round(invoice * 1e2) / 1e2; // round to two decimals
    //invoice = Number(invoice.toFixed(2)); // second way to round decimals, but returns a string by default
    return invoice;
};

console.log("Your total invoice amount as a student is: " + studentInvoice(starter_prices[0], maindish_prices[0], dessert_prices[0], beverage_prices[0]));

console.log("Your total invoice amount with 10% discount is: " + studentInvoice(starter_prices[1], maindish_prices[3], dessert_prices[2], beverage_prices[0]));

var student_invoice = studentInvoice(starter_prices[3], maindish_prices[1], dessert_prices[1], beverage_prices[2]);
console.log(`As a student you get a 10% discount, and therefore only need to pay:  ${student_invoice}`);
