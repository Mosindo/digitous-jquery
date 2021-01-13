$(document).ready(function () {
    $("button").click(function () {
        $.ajax({
            url: 'https://restcountries.eu/rest/v2/name/france',
            success: function (data) {
                console.log('Nom :', data[0].name);
                console.log('Capital :', data[0].capital);
            }
        });
    })
})