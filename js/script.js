//business logic
$(document).ready(function() {
    $(".form-one").submit(function(event) {
      $(".btn").click()
      const lastName = $("#lastname").val().toUpperCase();
      const firstName = $("#firstname").val().toUpperCase();
      const otherName = $("#othername").val().toUpperCase();
let fullName = (`${lastName} ${firstName} ${otherName}`);

     $(".fullname").text(fullName);
 
  
      $("#story").toggle();

      event.preventDefault();
    });
  });





$(document).ready(function(){
    $(".col-3").click(function(){
        window.location.href="form.html"
    });
    $(".col-4").click(function(){
        window.location.href="form.html"
    });
    $("#woman").click(function(){
        window.location.href="women.html"
    });
    $("#man").click(function(){
        window.location.href="men.html"
    });


    $(".sign-up").click(function(){
        window.location.href="form.html"
    });
    $(".btn").click(function(){
        window.location.href="form.html"
    });
    $(".dropbtn").click(function(){
    $(".dropdown-content").toggle();
    });
    $("#sub").click(function(){
        window.location.href="reciept.html"
    });
});