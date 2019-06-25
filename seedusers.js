var db = require("./models");

let items = [
    {
       name: "Double Cheeseburger",
       description: "Two patties with cheddar cheese.",
       price: 11.99
    },
    {
       name: "House Salad",
       description: "Romaine lettuce, cherry tomatoes, onions, black olives, house dressing.",
       price: 9.99
    },
    {
       name: "Personal Pizza",
       description: "12 inch pizza with your choice of toppings.",
       price: 12.99
    },
];

db.Item.bulkCreate(items).then(function(response) {
  console.log(response);
});
