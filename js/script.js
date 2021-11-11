//business logic
const firstName = $("#firstname").val();
const middleName = $("#middlename").val();
const lastName = $("#lastname").val();
const email = $("#email").val();
const phonenumber = $("#phonenumber").val();
const wear = $("#wear").val();
const cash = $("input:radio[name=gender]:checked").val();
const payment = $("input:radio[name=payment]:checked").val();

$(document).ready(function() {
    $(".data").submit(function userDetails() {
    
        const firstName = $("#firstname").val();
        const middleName = $("#middlename").val();
        const lastName = $("#lastname").val();
        const email = $("#email").val();
        const phonenumber = $("#phonenumber").val();
        const wear = $("#wear").val();
        const cash = $("input:radio[name=gender]:checked").val();
        const payment = $("input:radio[name=payment]:checked").val();
      

let fullName = (`${firstName} ${middleName} ${lastName} ${cash} ${payment} ${email} ${phonenumber} ${wear}`);
//event.preventDefault();

     $("#sub").text(fullName);
     $(".m").text(wear);
     $(".e").text(firstName);
     $(".t").text(payment);



      
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