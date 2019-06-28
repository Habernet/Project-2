$(function() {
  $(".payment").hide();

  var orderBtn = null;
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

    var quantity = $(this)
      .closest(".card-body")
      .find(".quantity")
      .val();
    console.log(quantity);

    var totalPrice = quantity * priceforOrderedItem;
    // $("#cartwithOrder")
    //   .after("\n")
    //   .prepend(priceforOrderedItem);
    //   $("#cartwithOrder").prepend("   ");

    // $("#cartwithOrder").prepend(itemOrdered);

    // $("#cartwithOrder").prepend("<br>");
    var orderItem =
      "<tr><td>" +
      itemOrdered +
      "</td><td>" +
      quantity +
      "</td><td>" +
      totalPrice +
      "</td></tr>";

    $("table tbody").append(orderItem);
    // $(" table tbody").append(priceforOrderedItem);
    if (orderBtn == null) {
      orderBtn = $(
        "<button class='btn btn-primary id='orderBtn'>Place Order</button>"
      );
      orderBtn.appendTo($("#cartwithOrder"));

      $(orderBtn).bind("click", function() {
        orderBtn.remove();
        var items=$("table").text();
        $(".modal-body").append(items);
        $("#myModal").show();
        // $("#closeBtn").on("click", function() {
        //   $(".modal-body").text(
        //     "Order placed successfully!! You will receive a notification shortly when your order is ready for pickup!!"
        //   );
          $("#closeBtn").on("click", function() {
            $("#myModal").hide();
            $(".payment").show();

          });

        });
      };
    });

    $(".name").on("click", function() {
      $("#itemModal").show();
    });
    $("#confirmPurchase").on("click", function(event) {
      event.preventDefault();

      var newOrder = {
        name: $("#owner")
          .val()
          .trim(),
        phone: $("#phoneNum")
          .val()
          .trim()
      };
      console.log(newOrder);
      $.ajax("/api/orderdetails", {
        type: "POST",
        data: newOrder
      }).then(function() {
        console.log("created new order with details of customer");
        location.reload();
      });
    });
  });

