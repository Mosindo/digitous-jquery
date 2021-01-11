$(document).ready(function () {
        if ($('input').val().length > 5) {
            $('input').addClass("is-invalid")
            $('input[type=text]').val("5 caratères requis ");
        } else {
            $('input').keyup("5 caratères requis ")
        }
    })

