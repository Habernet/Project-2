// var tableInfo = require("../data/tableData");

$(".submit").on("click", function(event) {
  event.preventDefault();
  var name = $("#customer-name")
    .val()
    .trim();
  var review = $("#review")
    .val()
    .trim();
  $(".error").remove();
  // Here we grab the form elements
  if (name.length < 1) {
    $("#customer-name").after(
      '<span class="error">This field is required</span>'
    );
    $("#customer-name").focus();

  }
  
   if (review.length < 1 ) {
    $("#review")
      .after('<span class="error">This field is required</span>');
      $("#review").focus()

 
 } 
 if(name.length!="" && review.length!="") {
    var newReview = {
      name: name,
      review: review,
      itemreviewed: $("#itemtobeReviewed").val()
    };

    console.log(newReview.itemreviewed);
    $.post("/api/reviews", newReview, function(data) {
      // If a table is available... tell user they are booked.
      if (data) {
        $("#myModal").show();
        $(".modal-body").text("Thank you for your valuable comments!!!");
      }

      // If a table is available... tell user they on the waiting list.
      else {
        $("#myModal").show();
        $(".modal-body").text("Please review and let us know what you think");
      }
      $("#closeBtn").on("click", function() {
        // location.replace(/dinein);
        location.replace((href = "/carryout"));
      });

      // Clear the form when submitting
      $("#customer-name").val("");
      $("#review").val("");
      $("#itemtobeReviewed").val("");
    });
  }
});
