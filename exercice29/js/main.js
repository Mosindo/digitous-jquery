$(document).ready(function () {
    $(".btn").click(function () {
        $("input").val();
        if ($("input").val().length > 5) {
            $("input").removeClass("is-invalid")
            $("input").addClass("is-valid")
        } else {
            $("input").addClass("is-invalid")
        }
    })
})