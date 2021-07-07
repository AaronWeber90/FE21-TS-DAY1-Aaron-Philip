// console.log("Hello World");
var menu_headlines = ["Starters"];
// class FoodItems {
//   name: string;
//   price: number;
//   img: string;
//   desc?: string;
//   constructor(name: string, price: number, img: string, desc: string) {
//     this.name = name;
//     this.price = price;
//     this.img = img;
//     this.desc = desc;
//   }
// }
// let menu_items: Array<FoodItems> = [
//   new FoodItems("Beef Soup", 4.95, "img/starter1_beefsoup_new.jpg", "Soup made with home-made bone broth & mirepoix."),
//   new FoodItems("Pumpkin Soup (vegan)", 3.99, "img/starter2_pumpkinsoup_new.jpg", "Pumpkin soup made with coconut milk & carrots."),
//   new FoodItems("Smoothie (vegan)", 3.49, "img/starter3_smoothie_new.jpg", "Made with avocado, seasonal fruits, flaxseeds & almond milk."),
//   new FoodItems("Sushi", 11.9, "img/starter4_sushi_new.jpg", "6 pieces of maki & 5 pieces of sushi."),
// ];
var menu_items = [
    { name: "Beef Soup", price: 4.95, img: "img/starter1_beefsoup_new.jpg", desc: "Soup made with home-made bone broth & mirepoix." },
    { name: "Pumpkin Soup (vegan)", price: 3.99, img: "img/starter2_pumpkinsoup_new.jpg", desc: "Pumpkin soup made with coconut milk & carrots." },
    { name: "Smoothie (vegan)", price: 3.49, img: "img/starter3_smoothie_new.jpg", desc: "Made with avocado, seasonal fruits, flaxseeds & almond milk." },
    { name: "Sushi", price: 11.9, img: "img/starter4_sushi_new.jpg", desc: "6 pieces of maki & 5 pieces of sushi." },
];
var section_element = document.getElementById("menusection");
var html_string = "";
for (var _i = 0, menu_headlines_1 = menu_headlines; _i < menu_headlines_1.length; _i++) {
    var headline = menu_headlines_1[_i];
    html_string += "<h2 class=\"text-center mt-3 mt-md-4 mb-2 mb-mb-3\">" + headline + "</h2>"; // Create sub-headline
    html_string += "<div class=\"row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 g-xxl-5 px-2 px-md-4 pb-4 mx-auto\">"; // Start "Review" Grid 
    // Create Food Card
    for (var _a = 0, menu_items_1 = menu_items; _a < menu_items_1.length; _a++) {
        var food = menu_items_1[_a];
        html_string += "\n      <div class=\"col col-md-6 col-lg-3\">                \n        <div class=\"card h-100 imgzoom\">\n            <img src=\"" + food.img + "\" class=\"img-fluid rounded-start\" alt=\"" + food.name + "\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">" + food.name + "</h5>\n                <p class=\"card-text\">" + food.desc + "</p>\n                <p class=\"card-text fw-bold\">&euro;" + food.price + "</p>\n            </div>\n        </div>\n      </div>      \n    ";
    }
    // End "Review" Grid
    html_string += "</div>";
}
section_element.innerHTML = html_string;
// <!-- Start Beef Soup -->
// <div class="col col-md-6 col-lg-3">                
//     <div class="card h-100 imgzoom">
//         <img src="img/starter1_beefsoup_new.jpg" class="img-fluid rounded-start" alt="Beef Soup">
//         <div class="card-body">
//             <h5 class="card-title">Beef Soup</h5>
//             <p class="card-text">Soup made with home-made bone broth &amp; mirepoix.</p>
//             <p class="card-text fw-bold">&euro;4.95</p>
//         </div>
//     </div>
// </div> <!-- End Beef Soup -->
