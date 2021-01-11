$(document).ready(function(){
        $(".btn").click(function(){
            $("#myInput").val("");
            $( "#myInput" ).prop( "disabled", false );
        })
})