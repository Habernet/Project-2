var db = require("../models");
var tableInfo = require("../data/tabledata");
module.exports = function(app) {
  // Load index page

  //Patrick changed this because we aren't loading anything from the DB on our main page. We just want a message. In fact might not even need handlebars here..will discuss later.
  app.get("/", function(req, res) {
    res.render("index", {
      msg: "Very Basic Title Page so we can have a visual!"
    });
  });

  // Load example page and pass in an example by id
  app.get("/dinein", function(req, res) {
    console.log(tableInfo);
    res.render("dinein", { table: tableInfo });

    // Call the DB and get the current data as far as reservations...use a callback to render these to the page.
    // We will then bring in more logic here to deal with the reservation/waitlist feature. Refer to old classwork to handle this.
    //Currently this will hit our 404 catch all because nothing is defined here.
  });

  app.get("/reserve", function(req, res) {
    res.render("reserve");
  });

  app.get("/carryout", function(req, res) {
    // Call the DB and get all of the data from our menu table. Use a callback to render these with handlebars.
    // We will then expand the logic here based on the front end. First step is get the menu displayed.
    db.Item.findAll().then(function(response) {
      res.render("carryout", { data: response });
    });
  });

  // app.get("/reviews", function(req, res) {
  //   // This has yet to be discussed with the group, idea is to have an expanded menu page where people can write reviews. This would be a 2-3 review per item ordeal. This is just an idea.
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
module.exports=tableInfo;

};
