var db = require("../models");

module.exports = function(app) {
  // app.get("/api/reviews/:review", function(req, res) {
  //   db.Review.findAll({where: {itemreviewed: req.params.review}}).then(response => {
  //     res.json(response);
  //   });
  // });

  function createDestroyRespond(tables, req, res, callback) {
    db.Table.bulkCreate(tables).then(created => {
      console.log("THREE");
      // get the names to destroy and store them in an array
      let toBeDestroyed = [];
      for (let i = 0; i < tables.length; i++) {
        toBeDestroyed.push(tables[i].name)
      };
      db.Waitlist.destroy({
        where: { name: toBeDestroyed }
      })
        .then(response => {
          console.log("FOUR ===== DESTROYED: ", response);
          callback(req, res);
        });
    });
  };

    let sendResponse = (req, res) => {
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
    };



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
    db.sequelize.query("DELETE FROM Tables WHERE createdAt < (NOW() - INTERVAL 45 SECOND)").then(([results, metadata]) => {
      console.log("Wooo!!");
    });
    db.Table.findAll()
      .then(response1 => {
        console.log("ONE");
        let emptyTables = 5 - response1.length;
        // also render outside of the if statement
        if (emptyTables > 0) {
          db.Waitlist.findAll(
            { limit: emptyTables }
          ).then(response2 => {
            let tables = [];
            for (let i = 0; i < response2.length; i++) {
              tables.push({
                name: response2[i].dataValues.name,
                phonenumber: response2[i].dataValues.phonenumber,
                numberinparty: response2[i].dataValues.numberinparty
              });
            };
            console.log("TWO");
            createDestroyRespond(tables, req, res, sendResponse);
          });
        } else {
          sendResponse(req, res);
        };
      });




      // I NEED THIS TO HAPPEN AFTER THE ABOVE

  
  });


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