var db = require("./models");

let items = [
    {
       name: "Double Cheeseburger",
       description: "Two patties with cheddar cheese.",
       price: 11.99,
       url:"//cdn.shopify.com/s/files/1/1972/4747/products/SNAKcCheeseburger_98edb144-30d1-4af2-95ea-0941bb25b2f4_1024x1024@2x.jpg?v=1536222172"
    },
    {
       name: "House Salad",
       description: "Romaine lettuce, cherry tomatoes, onions, black olives, house dressing.",
       price: 9.99,
       url:"https://www.tasteofhome.com/wp-content/uploads/2017/10/Hearty-Italian-Salad_exps165437_SD2856494B12_10_1bC_RMS-1-696x696.jpg"
    },
    {
       name: "Personal Pizza",
       description: "12 inch pizza with your choice of toppings.",
       price: 12.99,
       url:"https://www.dudleysquaregrille.com/files/images/about-us.jpg"
    },
    {
       name: "Wings",
       description: "12 Wings with either hot, mild, or BBQ sauce.",
       price: 12.99,
       url:"https://homemadehooplah.com/wp-content/uploads/2019/01/buffalo-chicken-wings-1.jpg"
    },
    {
       name: "Meat lovers calzone",
       description: "Beef, ham, fresh mozzarella and ricotta!",
       price: 14.99,
       url:"https://pixel.nymag.com/imgs/daily/grub/2017/best-of-new-york/calzone-wheated.w700.h700.jpg"
    },
    {
       name: "Veggie Quesadilla",
       description: "Five cheese quesadilla for a veggie lover!",
       price: 12.99,
       url:"https://gimmedelicious.com/wp-content/uploads/2018/05/Southwest-Veggie-Quesadillas_-3.jpg"
    }
];

db.Item.bulkCreate(items).then(function(response) {
  console.log(response);
});
