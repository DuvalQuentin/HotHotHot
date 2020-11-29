//api qui donne la température d'une ville
function GetValeurMeteo(ville) {
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+ ville +",fr&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric"

    $.get(url, callBackGetSuccess).done(function () {
        //alert( "second success" );
    })
        .fail(function () {
            alert("error");
        })
        .always(function () {
            //alert( "finished" );
        });
}

//callback
var callBackGetSuccess = function(data) {
    var temperatureInterieur = document.getElementById("valeurTemperatureInterieur");
    var temperatureExterieur = document.getElementById("valeurTemperatureExterieur");
    temperatureInterieur.innerHTML = (Math.round(data.main.temp) - getRandomInt(2)) + "°";
    temperatureExterieur.innerHTML = (Math.round(data.main.temp) - 5 - getRandomInt(3)) + "°";
}

//génére un nombre aléatoire entre 0 et un nombre donné en paramètre (max)
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

window.setInterval(function(){
    GetValeurMeteo("Toulon")
    //on lance la fonction GetValeurMeteo toute les 2 secondes
    //pour stopper il faut appeller la fonction : clearInterval()
}, 2000);