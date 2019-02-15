$("button").click(function(){
    var name= $(".num1").val();
    $(".name").append(name);
});

$("button").click(function(){
    var flavor= $(".num2").val();
    $(".flavor").append(flavor);
});

$("button").click(function(){
    var amount= $(".num3").val();
    var total= amount * 312;
    $(".total").append(total);
});

$("button").click(function(){
    $("span").css("display", "inline");
});





