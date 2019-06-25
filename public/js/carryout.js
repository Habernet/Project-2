$(function(){  
    $(".payment").hide();
 $(".addtoCartBtn").on("click",function(){
     $("#cart").replaceWith($("#cartwithOrder"));
 var itemOrdered=$(this).closest(".row").find(".name").text();
 console.log(itemOrdered);
   
var priceforOrderedItem=$(this).closest(".row").find(".price").text();
console.log(priceforOrderedItem);
$("#cartwithOrder").after("\n").prepend(priceforOrderedItem);

$("#cartwithOrder").prepend(itemOrdered);

$("#cartwithOrder").prepend("<br>");

});
$("#placeorderBtn").one("click",function(){
    var orderBtn=$("<button class='btn btn-primary id='orderBtn'>Place Order</button>") ;
    orderBtn.appendTo($("#cartwithOrder"));

    $(orderBtn).bind("click",function(){
        $(".payment").show();
       
       });
    

});




    
});