$(function() {
  $(".payment").hide();
  // $('[data-toggle="tooltip"]').tooltip();   

  $(".reviewBtn").bind("click", function() {
    $(".reviews").show();
  });
  var reviewBtn = null;
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
      "<tr><td class='itemOrdered'>" +
      itemOrdered +
      "</td><td class='quantity'>" +
      quantity +
      "</td><td class='actualPrice'>" +
      priceforOrderedItem +
      "</td><td class='totalPrice'>" +
      totalPrice +
      "</td></tr>";

    $("tbody").append(orderItem);
    // $(" table tbody").append(priceforOrderedItem);
    if (reviewBtn === null) {
      reviewBtn = $(
        "<button class='btn btn-warning id='reviewBtn'>Review Order  <span class='fa fa-thumbs-up'></span></button>"
      );
      reviewBtn.appendTo($("#cartwithOrder"));

      $(reviewBtn).bind("click", function() {
        // reviewBtn.remove();
        if (($("tbody").text())=== "") {
          alert("Please select items from menu to place order");
          console.log("in" + $("tbody").text());
          location.reload();
        } else {
          var items = $("tbody").text();
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
          $("#editBtn").on("click", function() {
            console.log("edit clicked");

            var editIcon = $(
              "<button class='btn btn-primary edit quantityAdd'><span class='fa fa-plus'></span></button>" +
                "<button class='btn btn-primary edit quantityMinus'><span class='fa fa-minus' ></span></button>" +
                "<button class='btn btn-danger edit delete'><span class='fa fa-trash'></span></button>"
            );
            $("tr")
              .after("\n")
              .append(editIcon);
            $("#myModal").hide();
            $(".quantityAdd").bind("click", function() {
              var quantitytoUpdate = $(this)
                .closest("tr")
                .find(".quantity")
                .text();
              var price = $(this)
                .closest("tr")
                .find(".actualPrice")
                .text();
              var quantity = parseInt(quantitytoUpdate) + 1;
              var totalPrice = parseInt(quantity) * parseFloat(price);
              var newQuantity = $(this)
                .closest("tr")
                .find(".quantity");
              var newtotalPrice = $(this)
                .closest("tr")
                .find(".totalPrice");

              console.log(newQuantity);
              newQuantity.text(quantity);
              newtotalPrice.text(totalPrice);
              console.log(quantitytoUpdate);
              console.log(price);
            });
            $(".quantityMinus").bind("click", function() {
              var quantitytoUpdate = $(this)
                .closest("tr")
                .find(".quantity")
                .text();
              var price = $(this)
                .closest("tr")
                .find(".actualPrice")
                .text();
              if (quantitytoUpdate > 1) {
                var quantity = parseInt(quantitytoUpdate) - 1;
                var totalPrice = parseInt(quantity) * parseFloat(price);
                var newQuantity = $(this)
                  .closest("tr")
                  .find(".quantity");
                var newtotalPrice = $(this)
                  .closest("tr")
                  .find(".totalPrice");

                console.log(newQuantity);
                newQuantity.text(quantity);
                newtotalPrice.text(totalPrice);
                console.log(quantitytoUpdate);
                console.log(price);
              } else {
                $(this)
                  .closest("tr")
                  .remove();
              }
            });
            $(".delete").bind("click", function() {
              $(this)
                .closest("tr")
                .remove();
            });
            reviewBtn.appendTo($("#cartwithOrder"));
            $(reviewBtn).bind("click", function() {
              reviewBtn.remove();
              var items = $("tbody").text();
              $(".modal-body").text(items);
              $("#myModal").show();
            });
          });
        }
      });
    }
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
    // console.log(newOrder);
    $.ajax("/api/orderdetails", {
      type: "POST",
      data: newOrder
    }).then(function(response) {
      console.log("created new order with details of customer");
      console.log(response);
      $(".modal-title").text("Hey " + response.name);
      $(".modal-body").text(
        "Your Order has been placed. Your order number is " + response.orderid
      );
      $(".modal-body")
        .append("<br>")
        .append(
          "\n" +
            "You will receive a text to # " +
            response.phonenumber +
            " when you order is ready!"
        );

      $("#confirmModal").show();
      $("#endokBtn").on("click", function() {
        location.reload();
      });
    });
  });
});
