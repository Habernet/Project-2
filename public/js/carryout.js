$(function() {
  $(".payment").hide();
  $(".addtoCartBtn").on("click", function() {
    $("#cart").replaceWith($("#cartwithOrder"));
    var itemOrdered = $(this)
      .closest(".card-body")
      .find(".name")
      .text();
    console.log(itemOrdered);

    var priceforOrderedItem = $(this)
      .closest(".card-body")
      .find(".price")
      .text();
    console.log(priceforOrderedItem);
    // $("#cartwithOrder")
    //   .after("\n")
    //   .prepend(priceforOrderedItem);
    //   $("#cartwithOrder").prepend("   ");

    // $("#cartwithOrder").prepend(itemOrdered);

    // $("#cartwithOrder").prepend("<br>");
    var orderItem =
      "<tr><td>" +
      itemOrdered +
      "</td><td>Quantity</td><td>" +
      priceforOrderedItem +
      "</td></tr>";

    $("table tbody").append(orderItem);
    // $(" table tbody").append(priceforOrderedItem);
  });
  $("#placeorderBtn").one("click", function() {
    var orderBtn = $(
      "<button class='btn btn-primary id='orderBtn'>Place Order</button>"
    );
    orderBtn.appendTo($("#cartwithOrder"));

    $(orderBtn).bind("click", function() {
      orderBtn.remove();
      $(".payment").show();
    });
  });
  $(".name").on("click", function() {
    $("#itemModal").show();
  });
  $("#confirmPurchase").on("click", function(event) {
    event.preventDefault();
    $(".modal-body").append("Order summary");
    $("#myModal").show();
    $("#closeBtn").on("click", function() {
      $(".modal-body").text(
        "Order placed successfully!! You will receive a notification shortly when your order is ready for pickup!!"
      );
      $("#closeBtn").on("click", function() {
        $("#myModal").hide();
      });
    });
  });
});
