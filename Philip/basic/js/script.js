// let myvar: string = "new variable again!";
// let num: number = 854;
// let done: boolean = false;
// Basic ex 1
var number_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result_div = document.getElementById("results");
result_div.innerHTML = "<h2>Basic ex 1</h2>";
for (var _i = 0, number_array_1 = number_array; _i < number_array_1.length; _i++) {
    var i = number_array_1[_i];
    for (var _a = 0, number_array_2 = number_array; _a < number_array_2.length; _a++) {
        var j = number_array_2[_a];
        // document.getElementById("results")
        result_div.innerHTML += j + " X " + i + " = " + j * i + "<br />";
    }
    result_div.innerHTML += "<br />";
}
// Basic ex 2
result_div.innerHTML += "<h2>Basic ex 2</h2>";
var person = [{ firstname: "Philip", lastname: "Mahlberg" }];
result_div.innerHTML += person[0].firstname + " " + person[0].lastname + "<br />";
person.forEach(function (value) {
    for (var i = 0; i < 10; i++)
        result_div.innerHTML += value.firstname + "<br />";
    setTimeout(function () {
        for (var i = 0; i < 10; i++)
            console.log(value.lastname + "\n");
    }, 5000);
});
// Basic ex 3
result_div.innerHTML += "<br /><h2>Basic ex 3</h2>";
var names = ["Thomas", "Philip", "Alexander", "Aaron"];
names[4] = "Joseph";
// names[5] = 12; // throws an error
var html_string = "";
// Print only the index of the elements.
html_string += "<h4>Print only the index of the elements.</h4>";
for (var index in names)
    html_string += index + "<br />";
html_string += "<br />";
// Print only the values. 
html_string += "<h4>Print only the values.</h4>";
for (var _b = 0, names_1 = names; _b < names_1.length; _b++) {
    var value = names_1[_b];
    html_string += value + "<br />";
}
html_string += "<br />";
// Print both index and values.
html_string += "<h4>Print both index and values.</h4>";
names.forEach(function (value, index) {
    html_string += "<strong>Index:</strong> " + index + " <strong>Value:</strong> " + value + " <br />";
});
// for (const [index, value] of names.entries()) {
//   html_string += `Index: ${index} Value: ${value} <br />`;
// }
result_div.innerHTML += html_string;
