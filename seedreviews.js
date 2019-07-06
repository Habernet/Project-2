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
    {
       name: "Justin Williams",
       review: "Best pizza around, hands down!",
       itemreviewed: "Personal Pizza"
    },
    {
       name: "Dave",
       review: "This thing put me into a food coma. 10/10 would food coma again.",
       itemreviewed: "Double Cheeseburger"
    }
];

db.Review.bulkCreate(reviews).then(function(response) {
  console.log(response);
});
