$(document).ready(function(){
    //rendre l'input invalide
       $("button").click(function(){
         $("input").addClass("is-valid")
        })   
    //changer les lettres tapés en étoile au fur et à mesure
        $("input").keyup(function(){
        var len=$("input").val().length
        var chaine=''
        for (var i = 0; i < len; i++) {
        chaine=chaine+'*';
        $("input").val(chaine)
       }
    })   
  });