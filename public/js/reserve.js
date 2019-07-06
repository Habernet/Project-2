// var tableInfo = require("../data/tableData");

$(".submit").on("click", function(event) {
  event.preventDefault();
  $(".error").remove();
  var name = $("#reserve-name")
    .val()
    .trim();
  var phonenumber = $("#reserve-phone")
    .val()
    .trim();

  if (name.length < 1) {
    $("#reserve-name").after(
      "<span class='error'>This field is required</span>"
    );
    $("#reserve-name").focus();
  }
  if (
    phonenumber.length > 10 ||
    (phonenumber.length > 1 && phonenumber.length < 10)
  ) {
    $("#reserve-phone").after(
      "<span class='error'>Valid  phone number is required</span>"

    );
    $("#reserve-phone").focus();
  }
  if (phonenumber.length < 1) {
    $("#reserve-phone").after(
      "<span class='error'>This field is required</span>"

    );
    $("#reserve-phone").focus();
  }

  if (name.length != 0 && phonenumber.length != 0 && phonenumber.length == 10) {
    // Here we grab the form elements
    var newReservation = {
      name: name,
      phonenumber: phonenumber,
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
        location.replace((href = "/dinein"));
      });


      // Clear the form when submitting
      $("#reserve-name").val("");
      $("#reserve-phone").val("");
      $("#numofPpl").val("");
    });
  }
});
