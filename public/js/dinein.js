function runTableQuery() {
  $.ajax({ url: "/api/dinein", method: "GET" }).then(function(tableInfo) {
    // Here we then log the tableData to console, where it will show up as an object.
    console.log(tableInfo);

    for (var i = 0; i < tableInfo.length; i++) {
      var tableList = $("#tableList");

      var listItem = $("<li class='list-group-item mt-4'>");

      listItem.append(
        $("<h2>").text("Table #" + (i + 1)),
        $("<hr>"),
        $("<h2>").text("Name: " + tableInfo[i].name),
        $("<h2>").text("Phone: " + tableInfo[i].phone)
      );

      tableList.append(listItem);
    }
  });
}

//   function runWaitListQuery() {

//       for (var i = 0; i < waitData.length; i++) {
//         var waitList = $("#waitList");

//         var listItem = $("<li class='list-group-item mt-4'>");

//         listItem.append(
//           $("<h2>").text("Table #" + (i + 1)),
//           $("<hr>"),
//           $("<h2>").text("Name: " + waitData[i].customerName),
//           $("<h2>").text("Phone: " + waitData[i].phoneNumber)
//         );

//         waitList.append(listItem);
//       }

//   }

runTableQuery();
//   runWaitListQuery();

//
$(".submit").on("click", function(event) {
  event.preventDefault();
  var reservation = {
    people: $("#reserve-name")
      .val()
      .trim(),
    phones: $("#reserve-phone")
      .val()
      .trim()
  };

  console.log(reservation);

  $.post("/dinein", reservation, function(data) {
    if (data) {
      alert("booked");
    } else {
      alert("Sorry");
    }

    $("#reserve-name").val("");
    $("#reserve-phone").val("");
  });
});
