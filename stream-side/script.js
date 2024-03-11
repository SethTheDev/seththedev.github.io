$("#title").hide();
$("#hotel-img").hide();
$("#info").hide();
$(function(){
    $("#hotel-img").fadeIn(1000, function() {
        $("#title").fadeIn(750, function() {
            $("#info").fadeIn(500);
        });
    });
});