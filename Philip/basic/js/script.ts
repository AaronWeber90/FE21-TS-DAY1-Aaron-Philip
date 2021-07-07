// let myvar: string = "new variable again!";
// let num: number = 854;
// let done: boolean = false;



// // Basic ex 1
// let number_array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result_div: any = document.getElementById("results");
// for (let i of number_array) {
//   for (let j of number_array) {
//     // document.getElementById("results")
//     result_div.innerHTML += `${j} X ${i} = ${j*i}<br />`;
//   }
//   result_div.innerHTML += "<br />";
// }


// Basic ex 2

let person: Array<{ firstname: string, lastname: string, age?: number, }> = [{ firstname: "Philip", lastname: "Mahlberg" }];
let result_div: any = document.getElementById("results"); // which type???
result_div.innerHTML = person[0].firstname + " " + person[0].lastname + "<br />";
person.forEach(function(value) { // Confusing - Print your first name 10 times in the browser using a forEach loop (don't forget that forEach loop work on arrays, so you can put the object in an array and repeat it). 
  for (let i: number = 0; i < 10; i++) result_div.innerHTML += value.firstname + "<br />";
  
  setTimeout(function() {
    for (let i: number = 0; i < 10; i++) console.log(value.lastname + "\n");
  }, 5000);

});

