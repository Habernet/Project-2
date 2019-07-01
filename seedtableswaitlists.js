var db = require("./models");

let tables = [
    {
       name: "Anne G.",
       phonenumber: 09992342992,
       numberinparty: 2
    },
    {
       name: "Patrick H.",
       phonenumber: 09992342992,
       numberinparty: 2
    },
    {
       name: "Tim",
       phonenumber: 09992342992,
       numberinparty: 2
    }
];
let waitlist = [
    {
       name: "Stephen",
       phonenumber: 09992342992,
       numberinparty: 2
    },
    {
       name: "Karsten",
       phonenumber: 09992342992,
       numberinparty: 2
    },
    {
       name: "DJ Phil",
       phonenumber: 09992342992,
       numberinparty: 2
    }
];


db.Table.bulkCreate(tables).then(function(response1) {
  db.Waitlist.bulkCreate(waitlist).then(function(response2) {
      console.log(response1, response2);
  });
});
