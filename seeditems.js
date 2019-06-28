var db = require("./models");

let items = [
    {
       name: "Double Cheeseburger",
       description: "Two patties with cheddar cheese.",
       price: 11.99,
       url: "http://www.fastfoodwatch.com/wp-content/uploads/2015/06/McDonaldsDoubleCheeseburger-600x350.jpg"
    },
    {
       name: "House Salad",
       description: "Romaine lettuce, cherry tomatoes, onions, black olives, house dressing.",
       price: 9.99,
       url: "https://media-cdn.tripadvisor.com/media/photo-s/0e/c8/b6/ed/house-salad.jpg"
    },
    {
       name: "Personal Pizza",
       description: "12 inch pizza with your choice of toppings.",
       price: 12.99,
       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT42L977vUBuwwxdFpIsY7UTzQeNvhyvIM-kzB9EpmfvfgEictv"
    },
];

db.Item.bulkCreate(items).then(function(response) {
  console.log(response);
});
