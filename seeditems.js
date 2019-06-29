var db = require("./models");

let items = [
    {
       name: "Double Cheeseburger",
       description: "Two patties with cheddar cheese.",
       price: 11.99,
       url:"//cdn.shopify.com/s/files/1/1972/4747/products/SNAKcCheeseburger_98edb144-30d1-4af2-95ea-0941bb25b2f4_1024x1024@2x.jpg?v=1536222172"
      //  url: "http://www.fastfoodwatch.com/wp-content/uploads/2015/06/McDonaldsDoubleCheeseburger-600x350.jpg"
    },
    {
       name: "House Salad",
       description: "Romaine lettuce, cherry tomatoes, onions, black olives, house dressing.",
       price: 9.99,
       url:"https://www.tasteofhome.com/wp-content/uploads/2017/10/Hearty-Italian-Salad_exps165437_SD2856494B12_10_1bC_RMS-1-696x696.jpg"
      //  url:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/3/8/0/FNM_040118-Olive-Garden-Style-House-Salad_s4x3.jpg.rend.hgtvcom.826.620.suffix/1520543510452.jpeg"
      // //  url: "https://media-cdn.tripadvisor.com/media/photo-s/0e/c8/b6/ed/house-salad.jpg"
    },
    {
       name: "Personal Pizza",
       description: "12 inch pizza with your choice of toppings.",
       price: 12.99,
       url:"https://www.dudleysquaregrille.com/files/images/about-us.jpg"
      //  url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT42L977vUBuwwxdFpIsY7UTzQeNvhyvIM-kzB9EpmfvfgEictv"
    },
];

db.Item.bulkCreate(items).then(function(response) {
  console.log(response);
});
