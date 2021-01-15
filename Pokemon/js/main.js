$(document).ready(function () {
    $("button").click(function () {
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${$("input").val()}`,
            success: function (data) {
                $("#pokemon").text(data.name);
               $("#type").text(data.types[0].type.name);
               console.log(data.sprites.front_default)
               $("#stripe").html(`<img src="${data.sprites.front_default}"></img>`).addClass("d-flex justify-content-start img-fluid");
            }
        });
    })
})

/*$(document).ready(function(){
    $("button").click(function(){
        $.ajax({
            url :`https://pokeapi.co/api/v2/pokemon/1`,
            success:function data(){
                $("#pokemon").
                $("#type")
                $("#stripe")
            }
        })
    })
})*/