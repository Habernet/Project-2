// var tableInfo = require("../data/tableData");

$(".submit").on("click", function(event) {
  event.preventDefault();

  // Here we grab the form elements
  var newReservation = {
    name: $("#reserve-name").val().trim(),
    phonenumber: $("#reserve-phone").val().trim(),
    numberinparty: 1
  };

  console.log(newReservation);
  $.post("/api/tables", newReservation, function(data) {
    // If a table is available... tell user they are booked.
    if (data) {
      alert("Yay! You are officially booked!");
    }

    // If a table is available... tell user they on the waiting list.
    else {
      alert("Sorry you are on the wait list");
    }

    // Clear the form when submitting
    $("#reserve-name").val("");
    $("#reserve-phone").val("");
    $("#reserve-email").val("");
    $("#reserve-unique-id").val("");
  });
});
