$(function() {
  $(".autoplay").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $(".payment").hide();

  $(".reviewBtn").bind("click", function() {
    $(".reviews").show();
  });

  var count = 0;
  var quantitytoUpdate;
  var price;
  var reviewBtn = null;
  var shoppingCart = [];

  function ContainsItem(item) {
    for (var i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].item === item) {
        return { bool: true, index: i };
      }
    }
    return { bool: false, index: null };
  }

  $(".addtoCartBtn").on("click", function() {
    $("#cart").replaceWith($("#cartwithOrder"));

    var itemOrdered = $(this)
      .closest(".card-body")
      .find(".name")
      .text();
    // console.log(itemOrdered);

    var priceforOrderedItem = $(this)
      .closest(".card-body")
      .find(".price")
      .text();
    // console.log(priceforOrderedItem);

    var quantity = $(this)
      .closest(".card-body")
      .find(".quantity")
      .val();
    // console.log(quantity);

    var totalPrice = quantity * priceforOrderedItem;
    // $("#cartwithOrder")
    //   .after("\n")
    //   .prepend(priceforOrderedItem);
    //   $("#cartwithOrder").prepend("   ");

    // $("#cartwithOrder").prepend(itemOrdered);

    // $("#cartwithOrder").prepend("<br>");
    var itemObject = {
      item: itemOrdered,
      quantity: parseInt(quantity),
      price: parseFloat(priceforOrderedItem),
      totalPrice: parseFloat(totalPrice)
    };
    // console.log(itemObject.quantity);

    if (!ContainsItem(itemOrdered).bool) {
      shoppingCart.push(itemObject);
    } else {
      shoppingCart[ContainsItem(itemOrdered).index].quantity =
        shoppingCart[ContainsItem(itemOrdered).index].quantity +
        itemObject.quantity;
      shoppingCart[ContainsItem(itemOrdered).index].totalPrice =
        shoppingCart[ContainsItem(itemOrdered).index].totalPrice +
        itemObject.quantity * itemObject.price;

      // console.log(
      //   shoppingCart[ContainsItem(itemOrdered).index].quantity +
      //     itemObject.quantity
      // );
      // console.log(
      //   shoppingCart[ContainsItem(itemOrdered).index].totalPrice +
      //     itemObject.quantity * itemObject.priceforOrderedItem
      // );
    }
    // console.log(typeof itemObject.price + ' sdsfsdf');

    var orderItem =
      "<tr><td class='itemOrdered'>" +
      itemOrdered +
      "</td><td>     </td><td>     </td><td class='quantity'>" +
      quantity +
      "</td><td>      </td><td>     </td><td class='actualPrice'>" +
      priceforOrderedItem +
      "</td> <td>     </td><td>     </td><td class='totalPrice'>" +
      totalPrice +
      "</td></tr>";
    $("tbody").append(orderItem);
    // Store the username into localStorage using "localStorage.setItem"

    // And display that name for the user using "localStorage.getItem"

    // $("tbody").append(orderItem);
    // $(" table tbody").append(priceforOrderedItem);
    if (reviewBtn === null) {
      reviewBtn = $(
        "<button class='btn btn-warning' id='reviewBtn'>Review Order  <span class='fa fa-thumbs-up'></span></button>"
      );
      reviewBtn.appendTo($("#cartwithOrder"));
    }
  });

  $(document).on("click", "#reviewBtn", function() {
    console.log("One review on click event");
    // reviewBtn.remove();
    if ($("tbody").text() === "") {
      $("#reviewBtn").remove();
      alert("Please select items from menu to place order");
      console.log("in" + $("tbody").text());
      location.reload();
    } else {
      var items = $("<tbody>");
      console.log(JSON.stringify(shoppingCart) + "herere");
      var grandTotal = 0;
      for (var i = 0; i < shoppingCart.length; i++) {
        var li = $("<tr>");
        var item = shoppingCart[i];
        li.text(
          // eslint-disable-next-line prettier/prettier
          item.item +" "+
            // eslint-disable-next-line prettier/prettier
            "-" +" "+
            // eslint-disable-next-line prettier/prettier
            item.quantity +" "+
            // eslint-disable-next-line prettier/prettier
            "-" +" "+
            // eslint-disable-next-line prettier/prettier
            item.price +" "+
            // eslint-disable-next-line prettier/prettier
            "-" +" "+

            item.totalPrice
        );

        items.append(li);
        grandTotal = grandTotal + item.totalPrice;
      }
      $(".modal-body").empty();
      $(".modal-body").append(items).css("text-align","center");
      $(".modal-body").append("<br>");

      $(".modal-body").append("Your total is " + grandTotal).css("font-weight:bolder");


      $("#myModal").show();
      // $("#closeBtn").on("click", function() {
      //   $(".modal-body").text(
      //     "Order placed successfully!! You will receive a notification shortly when your order is ready for pickup!!"
      //   );
    }
  });

  $(document).on("click", "#closeBtn", function() {
    $("#myModal").hide();
    $(".payment").show();
    $(".addtoCartBtn").prop("disabled", "true");
    reviewBtn.remove();
  });

  $(document).on("click", "#editBtn", function() {
    count++;
    quantitytoUpdate = $(this)
      .closest("tr")
      .find(".quantity")
      .text();
    price = $(this)
      .closest("tr")
      .find(".actualPrice")
      .text();

    console.log("edit clicked" + count);
    $("#cartwithOrder tr").each(function() {
      console.log($(this).find(".delete").length + " here1");
      if ($(this).find(".delete").length === 0) {
        var editIcon = $(
          // "
          // <button class='btn btn-primary edit quantityAdd'><span class='fa fa-plus'></span></button>" +
          //   "<button class='btn btn-primary edit quantityMinus'><span class='fa fa-minus' ></span></button>" +
          "<button class='btn btn-danger edit delete'><span class='fa fa-trash'></span></button>"
        );
        $(this)
          .after("\n")
          .append(editIcon);
      }
    });

    $("#myModal").hide();
    reviewBtn.appendTo($("#cartwithOrder"));
  });


  $(document).on("click", "#confirmPurchase", function(event) {
    event.preventDefault();
    $(".error").hide();

    var name = $("#owner")
      .val()
      .trim();
    var phone = $("#phoneNum")
      .val()
      .trim();
    var cvv = $("#cvv")
      .val()
      .trim();
    var ccNum = $("#cardNumber")
      .val()
      .trim();
    if (
      name.length < 1
      // || !name.test("/^[a-zA-Z\s]+$/)")
    ) {
      $("#owner").after("<span class='error'>Name required</span>");

      $("#owner").focus();
    }

    if (
      phone.length < 1 ||
      phone.length > 10
      //  ||
      //  !(phone.test("/[^0-9]/")
    ) {
      $("#phoneNum").after(
        "<span class='error'> Valid Phone number required</span>"
      );
      $("#phoneNum").focus();
    }
    if (
      ccNum.length > 16 ||
      ccNum.length < 16 ||
      ccNum.length === 0
      // ||
      // !ccNum.test("/[^0-9]/")
    ) {
      $("#cardNumber").after(
        "<span class='error'>Enter valid Credit card number</span>"
      );

      $("#cardNumber").focus();
    }

    if (
      cvv.length === 0 ||
      cvv.length > 4
      // || !cvv.test("/[^0-9]/")
    ) {
      $("#cvv").after("<span class='error'>Invalid CVV/CVC number</span>");

      $("#cvv").focus();
    }
    if (
      name.length !== "" &&
      phone.length !== "" &&
      (cvv.length > 1 && (cvv.length === 3 || cvv.length === 4)) &&
      ccNum.length === 16
      // &&
      // name === name.match("/^[a-zA-Z\s]+$/") &&
      // phone.test("/[^0-9]/") &&
      // ccNum === ccNum.match("/[^0-9]/") &&
      // cvv === cvv.match("/[^0-9]/"
    ) {
      var newOrder = {
        name: name,
        phone: phone
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
              " when your order is ready!"
          );

        $("#confirmModal").show();
        $("#endokBtn").on("click", function() {
          location.reload();
        });
      });
    }
  });

  $(document).on("click", ".delete", function() {
    var itemOrdered = $(this)
      .closest("tr")
      .find(".itemOrdered")
      .text();
    var quantity = $(this)
      .closest("tr")
      .find(".quantity")
      .text();
    var price = $(this)
      .closest("tr")
      .find(".actualPrice")
      .text();
    var totalPrice = $(this)
      .closest("tr")
      .find(".totalPrice")
      .text();
    $(this)
      .closest("tr")
      .remove();
    var itemObject = {
      itemOrdered: itemOrdered,
      quantity: parseInt(quantity),
      price: parseFloat(price),
      totalPrice: parseFloat(totalPrice)
    };
    console.log(shoppingCart);

    console.log(
      "before if" +
        JSON.stringify(shoppingCart[ContainsItem(itemOrdered).index])
    );

    if (ContainsItem(itemOrdered).bool) {
      if (shoppingCart[ContainsItem(itemOrdered).index].quantity === 1) {
        shoppingCart.splice(
          shoppingCart[ContainsItem(itemOrdered).index],
          1,
          1
        );
        console.log(
          "deleted item" +
            JSON.stringify(
              shoppingCart.splice(
                shoppingCart[ContainsItem(itemOrdered).index],
                1
              )
            )
        );
        console.log(shoppingCart);
      } else {
        console.log(
          "elsecondition" +
            shoppingCart[ContainsItem(itemOrdered).index].quantity -
            parseInt(itemObject.quantity)
        );
        console.log(
          "elsecondition" +
            shoppingCart[ContainsItem(itemOrdered).index].totalPrice -
            itemObject.quantity * itemObject.price
        );
        shoppingCart[ContainsItem(itemOrdered).index].quantity =
          shoppingCart[ContainsItem(itemOrdered).index].quantity -
          parseInt(itemObject.quantity);
        shoppingCart[ContainsItem(itemOrdered).index].totalPrice =
          shoppingCart[ContainsItem(itemOrdered).index].totalPrice -
          parseInt(itemObject.quantity) * parseFloat(itemObject.price);
      }
    }
    if (shoppingCart.length === 0) {
      location.reload();
    }
  });
});
