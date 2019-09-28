
$(document).ready(function() {
  $("#design").click(function() {
    $("#des").toggle();
  });
});

$("#dev").click(function() {
  $("#desA").toggle();
});
$("#prd").click(function() {
  $("#desB").toggle();
});
$("#contacts").css("color","white");
$(".data").css("background-color","transparent");
$("#msg").css("height","200px");