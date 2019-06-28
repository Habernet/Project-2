var db = require("../models");
var tableInfo = require("../data/tabledata");

console.log("hello world");

module.exports = function(app) {
  app.get("/api/reviews/:review", function(req, res) {
    db.Review.findAll({where: {itemreviewed: req.params.review}}).then(response => {
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
};
