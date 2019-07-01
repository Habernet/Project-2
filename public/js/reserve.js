// var tableInfo = require("../data/tableData");

$(".submit").on("click", function(event) {
  event.preventDefault();

  // Here we grab the form elements
  var newReservation = {
    name: $("#reserve-name")
      .val()
      .trim(),
    phonenumber: $("#reserve-phone")
      .val()
      .trim(),
    numberinparty: $("#numofPpl")
      .val()
      .trim()
  };

  console.log(newReservation);
  $.post("/api/tables", newReservation, function(data) {
    // If a table is available... tell user they are booked.
    if (data) {
      $("#myModal").show();
      $(".modal-body").text("Yay! Your table is reserved!!");
    }

    // If a table is available... tell user they on the waiting list.
    else {
      $("#myModal").show();
      $(".modal-body").text("Sorry you are on the wait list");
    }
    $("#closeBtn").on("click", function() {
      // location.replace(/dinein);
    location.replace(href = "/dinein");
    });

    // Clear the form when submitting
    $("#reserve-name").val("");
    $("#reserve-phone").val("");
    $("#reserve-email").val("");
    $("#reserve-unique-id").val("");
  });
});
