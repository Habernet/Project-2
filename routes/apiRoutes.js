var db = require("../models");

module.exports = function(app) {
  // app.get("/api/reviews/:review", function(req, res) {
  //   db.Review.findAll({where: {itemreviewed: req.params.review}}).then(response => {
  //     res.json(response);
  //   });
  // });
  app.get("/api/reviews", function(req, res) {
    db.Review.findAll().then(response => {
      res.json(response);
    });
  });

  app.post("/api/orderdetails", (req, res) => {
      // take your req.body and update the DB with it.
      // use the res to send back to the ajax call the order number
      db.Order.create({
        name: req.body.name,
        phonenumber: req.body.phone
      }).then(response => {
        res.json({
          orderid: response.orderid,
          name: response.name,
          phonenumber: response.phonenumber
        });
      });
  });

  app.get("/api/tables", (req, res) => {
    db.Table.findAll().then(response => {
      res.json(response);
    });
  });
  // return to the front end all objects in this table


  app.get("/api/waitlist", (req, res) => {
    db.Waitlist.findAll().then(response => {
      res.json(response);
    });
  });
  // return to the front end all objects in this table


  app.post("/api/tables", (req, res) => {
    console.log(req.body);
    db.Table.findAll().then(response => {
      if (response.length < 5) {
        db.Table.create({
          name: req.body.name,
          phonenumber: req.body.phonenumber,
          numberinparty: req.body.numberinparty
        }).then(response => {res.json(true)});
      } else {
        db.Waitlist.create({
          name: req.body.name,
          phonenumber: req.body.phonenumber,
          numberinparty: req.body.numberinparty
        }).then(response => {res.json(false)});
      };
    });
  });
  // A request to be seated comes in as a post request from the front end. (a button will be configured to do this)
  // This route will be hit, it will call everything in the tables table. It will test the length of the response.
  // If there are less than five, it will create a record with the incoming request and send a response to the user "true"
  // If there are five in the response, it will create a record in the waitlist table and return "false"

  // The front end will decide what to do with "true" and "false" being received. 

app.post("/api/reviews", (req, res) => {
  // take your req.body and update the DB with it.
  // use the res to send back to the ajax call the order number
  db.Review.create({
    name: req.body.name,
    review: req.body.review,
    itemreviewed:req.body.itemreviewed
  }).then(response => {res.json(true)}) 
 });

};