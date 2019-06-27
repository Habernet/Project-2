var db = require("../models");

module.exports = function(app) {
  app.get("/api/reviews/:review", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
    db.Review.findAll({where: {itemreviewed: req.params.review}}).then(response => {
      res.json(response);
    });
  });
};