$(document).ready(function () {
    $(".btn").click(function () {
        if ($('input').val().length < 5) {
            $('input').addClass("is-invalid")
            $('input[type=text]').val("5 caratères requis ");
        } else {
            // $('input[type=text].sitebg').val('000000');

        }
    })
})