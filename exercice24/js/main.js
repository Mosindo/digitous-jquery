$(document).ready(function(){
    $(".btn").click(function(){
        $("#bg ").animate({marginLeft:"+=100px"},function(){
            $("#bg ").fadeOut(1000) ; 
        });
      ;
    })
})