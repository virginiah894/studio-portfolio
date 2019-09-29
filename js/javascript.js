
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

$("#one").mouseenter(function() {
 $("#overlay").show();
});

$("#one").mouseleave(function(){
  $("#overlay").hide()
  });
  $("#two").mouseenter(function() {
    $("#overlayA").show();
   });
   
   $("#two").mouseleave(function(){
     $("#overlayA").hide()
     });
     $("#three").mouseenter(function() {
      $("#overlayB").show();
     });
     
     $("#three").mouseleave(function(){
       $("#overlayB").hide()
       });
       $("#four").mouseenter(function() {
        $("#overlayC").show();
       });
       
       $("#four").mouseleave(function(){
         $("#overlayC").hide()
         });
         $("#five").mouseenter(function() {
          $("#overlayD").show();
         });
         
         $("#five").mouseleave(function(){
           $("#overlayD").hide()
           });
           $("#six").mouseenter(function() {
            $("#overlayE").show();
           });
           
           $("#six").mouseleave(function(){
             $("#overlayE").hide()
             });
       
             $("#seven").mouseenter(function() {
              $("#overlayF").show();
             });
             
             $("#seven").mouseleave(function(){
               $("#overlayF").hide()
               });
               $("#eight").mouseenter(function() {
                $("#overlayG").show();
               });
               
               $("#eight").mouseleave(function(){
                 $("#overlayG").hide()
                 });
           
    
                 $("#sub").submit(function one (){
                  alert("Submitted");
                });
              $("#sub").show()
          
              function alertFunction(){
                var test = "test";
                var email = "email@domain.com"
                var message = "a message"
                test = document.getElementById("name").value;
                email = document.getElementById("email").value;
                message = document.getElementById("msg").value;
            
                alert("Thank you " + test + " for contacting us  We have received your message ");
              }