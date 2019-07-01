var db = require("../models");
module.exports = function (app) {

  let dineInObject = {};

  let getRenderObject = (res) => {
    db.Table.findAll().then(response1 => {
      db.Waitlist.findAll().then(response2 => {
        console.log("FIVE");
        dineInObject.response1 = response1,
        dineInObject.response2 = response2;
        console.log("SIX!");
        res.render("dinein", dineInObject);
      });
    });
  };

  function createDestroyRender(tables, res, callback) {
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
          callback(res);
        });
    });
  };

  // Load index page

  app.get("/", function (req, res) {
    res.render("index");
    // {
    //   // msg: "Very Basic Title Page so we can have a visual!"
  });

  // Load example page and pass in an example by id
  app.get("/dinein", function (req, res) {
    
    db.sequelize.query("DELETE FROM tables WHERE createdAt < (NOW() - INTERVAL 1 MINUTE)").then(([results, metadata]) => {
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
            createDestroyRender(tables, res, getRenderObject);
          });
        } else {
          console.log("TWO AND HEIF");
          getRenderObject(res);
        };
      });
  });

  app.get("/reserve", function (req, res) {
    res.render("reserve");
  });

  app.get("/carryout", function (req, res) {
    // Call the DB and get all of the data from our menu table. Use a callback to render these with handlebars.
    // We will then expand the logic here based on the front end. First step is get the menu displayed.
    db.Item.findAll().then(function (response) {
      res.render("carryout", { data: response });
    });
  });

  // app.get("/reviews", function(req, res) {
  //   // This has yet to be discussed with the group, idea is to have an expanded menu page where people can write reviews. This would be a 2-3 review per item ordeal. This is just an idea.
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
