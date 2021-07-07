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
var person = [{ firstname: "Philip", lastname: "Mahlberg" }];
var result_div = document.getElementById("results"); // which type???
result_div.innerHTML = person[0].firstname + " " + person[0].lastname + "<br />";
person.forEach(function (value) {
    for (var i = 0; i < 10; i++)
        result_div.innerHTML += value.firstname + "<br />";
    setTimeout(function () {
        for (var i = 0; i < 10; i++)
            console.log(value.lastname + "\n");
    }, 5000);
});
