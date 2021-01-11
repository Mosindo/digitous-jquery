$(document).ready(function () {
    $(".btn").click(function () {
        if ($('input').val().length < 5) {
            $('input').addClass("is-invalid")
            $('input[type=text]').val("5 caratères requis ");
            } 
            else if($('input').val().length > 5){
            $('input').addClass("is-valid");
            $('input[type=text]').val("plus de 5 caratères  ");
            }
    })
})