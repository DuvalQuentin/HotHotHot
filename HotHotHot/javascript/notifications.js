/*_________________________________*/
/* Permet d'afficher les alertes dynamiquement grâce à ajax et au DOM */
/* en récupérant la valeur associé getElementById et au addEventListener. */
/* En fonction de la valeur reçu, on vas chercher dans alertes.json. */
/* On récupére la valeur associé et on envoie une notification correspondante.  */
/*_________________________________*/
var requestChemin = './json/alertes.json';
var request = new XMLHttpRequest();
request.open('GET', requestChemin);
request.responseType = 'json';
request.send();
let alerts;
request.onload = function() {
    alerts = request.response;
}
notie.setOptions({
    alertTime: 2
})

//on récupére les valeur associés aux alertes
document.getElementById("alertInt1").addEventListener("click", function (e){showAlertes(alerts, 60)})
document.getElementById("alertInt2").addEventListener("click", function (e){showAlertes(alerts, 26)})
document.getElementById("alertInt3").addEventListener("click", function (e){showAlertes(alerts, 4)})
document.getElementById("alertInt4").addEventListener("click", function (e){showAlertes(alerts, 0)})
document.getElementById("alertInt5").addEventListener("click", function (e){showAlertes(alerts, -22)})
document.getElementById("alertExt1").addEventListener("click", function (e){showAlertes(alerts, 666, false)})
document.getElementById("alertExt2").addEventListener("click", function (e){showAlertes(alerts, -12, false)})
document.getElementById("alertExt3").addEventListener("click", function (e){showAlertes(alerts, -56, false)})
document.getElementById("alertExt4").addEventListener("click", function (e){showAlertes(alerts, 37, false)})
document.getElementById("alertExt5").addEventListener("click", function (e){showAlertes(alerts, -12, false)})

// En fonction de la valeur reçu, On récupére la valeur associé
//<dans le alertes.json et on envoie une notification correspondante.
function showAlertes(jsonObj, temperature, interieurOuPas = true)
{
    if(!interieurOuPas)
    {
        if(temperature > 35)
        {
            notie.alert({ type: 2, text: temperature + "° : " + jsonObj['1'], time: 2 });
        }
        else if(temperature < 0)
        {
            notie.alert({ type: 4, text: temperature + "° : " + jsonObj['2'], time: 2 });
        }
    }else
    {
        if(temperature > 22 && temperature <= 50)
        {
            notie.alert({ type: 1, text: temperature + "° : " + jsonObj['3'], time: 2 });
        }
        else if (temperature > 50)
        {
            notie.alert({ type: 2, text: temperature + "° : " + jsonObj['4'], time: 2 });
        }
        else if (temperature < 12 && temperature >= 0)
        {
            notie.alert({ type: 4, text: temperature + "° : " + jsonObj['5'], time: 2 });
        }
        else if (temperature < 0)
        {
            notie.alert({ type: 3, text: temperature + "° : " + jsonObj['6'], time: 2 });
        }
    }f
}