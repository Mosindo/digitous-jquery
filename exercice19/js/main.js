$(document).ready(function(){
        $(".btn").click(function(){
            $("input").val("");
            $( "input" ).prop( "disabled", false );
        })
})