// let myvar: string = "new variable again!";
// let num: number = 854;
// let done: boolean = false;


// Basic ex 1
let number_array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result_div: any = document.getElementById("results");

result_div.innerHTML = "<h2>Basic ex 1</h2>";
for (let i of number_array) {
  for (let j of number_array) {
    // document.getElementById("results")
    result_div.innerHTML += `${j} X ${i} = ${j*i}<br />`;
  }
  result_div.innerHTML += "<br />";
}


// Basic ex 2
result_div.innerHTML += "<h2>Basic ex 2</h2>";
let person: Array<{ firstname: string, lastname: string, age?: number, }> = [{ firstname: "Philip", lastname: "Mahlberg" }];
result_div.innerHTML += person[0].firstname + " " + person[0].lastname + "<br />";
person.forEach(function(value) { // Confusing - Print your first name 10 times in the browser using a forEach loop (don't forget that forEach loop work on arrays, so you can put the object in an array and repeat it). 
  for (let i: number = 0; i < 10; i++) result_div.innerHTML += value.firstname + "<br />";
  
  setTimeout(function() {
    for (let i: number = 0; i < 10; i++) console.log(value.lastname + "\n");
  }, 5000);

});


// Basic ex 3
result_div.innerHTML += "<br /><h2>Basic ex 3</h2>";
let names: string[] = ["Thomas", "Philip", "Alexander", "Aaron"];
names[4] = "Joseph";
// names[5] = 12; // throws an error
let html_string = "";

// Print only the index of the elements.
html_string += "<h4>Print only the index of the elements.</h4>";
for (let index in names) html_string += index + "<br />";

html_string += "<br />";

// Print only the values. 
html_string += "<h4>Print only the values.</h4>";
for (let value of names) html_string += value + "<br />";

html_string += "<br />";



// Print both index and values.
html_string += "<h4>Print both index and values.</h4>";
names.forEach(function (value: string, index: number) {
  html_string += `<strong>Index:</strong> ${index} <strong>Value:</strong> ${value} <br />`;
});

// for (const [index, value] of names.entries()) {
//   html_string += `Index: ${index} Value: ${value} <br />`;
// }

result_div.innerHTML += html_string;
