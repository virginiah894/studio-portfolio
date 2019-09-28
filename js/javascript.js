
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

$(".data").submit(function(event) {
  var forms= ["#name", "#email","#msg"];

  forms.forEach(function(form) {
    var userInput = $(".data" + blank).val();
    $("." + blank).text(userInput);
  });
$("#contacts").text(alert)


  event.preventDefault();
});

// $("#one").mouseover(function() {
//  $("#one").text("Project one").css("background-color","blue", "position","absolute");
// });

// $("#one").hover(function(){
//   $("#one").text("Project one").css("background-color","blue", "overflow","hidden");
//   });
//   $("#two").hover(function(){
//     $("#two").text("Project one") .css("background-color","white");
//     });
//     $("#three").hover(function(){
//   $("#three").addClass("ma").text("Project one");
//   });
//   $("#four").hover(function(){
//     $("#four").addClass("ma").text("Project one");
//     });
//     $("#five").hover(function(){
//       $("#five").addClass("ma").text("Project one");
//       });
//       $("#six").hover(function(){
//         $("#six").addClass("ma").text("Project one");
//         });
//         $("#seven").hover(function(){
//           $("#seven").addClass("ma").text("Project one");
//           });
//           $("#eight").hover(function(){
//             $("#eight").addClass("ma").text("Project one");
//             });