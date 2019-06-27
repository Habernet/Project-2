var db = require("./models");

let reviews = [
    {
       name: "Anne G.",
       review: "This burger was cooked well and absolutely covered in cheese! The homemade sauce they use pairs perfectly with the cheese.",
       itemreviewed: "Double Cheeseburger"
    },
    {
       name: "Brandon E.",
       review: "A crisp refreshing salad, their homemade dressing was fantastic!",
       itemreviewed: "House Salad"
    },
    {
       name: "DJ Phil",
       review: "I could have eaten a 40 inch version of this thing, it was amazing.",
       itemreviewed: "Personal Pizza"
    },
];

db.Review.bulkCreate(reviews).then(function(response) {
  console.log(response);
});
