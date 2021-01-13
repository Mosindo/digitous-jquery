$(document).ready(function () {
    $("button").click(function () {
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${$("input").val()}`,
            success: function (data) {
                $("#pokemon").html(data.name);
               $("#type").html(data.types[0].type.name);
               console.log(data.sprites.front_default)
               $("#stripe").html(`<img src="${data.sprites.front_default}"></img>`).addClass("d-flex justify-content-start img-fluid");
            }
        });
    })
})

