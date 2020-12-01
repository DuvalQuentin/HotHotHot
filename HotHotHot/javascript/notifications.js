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
document.getElementById("date").addEventListener("click", function (e){date()})
    function showAlertes(jsonObj, temperature, interieurOuPas = true)
    {
        if(!interieurOuPas)
        {
            if(temperature > 35)
            {
                notie.alert({ type: 2, text: jsonObj['1'], time: 2 });
            }
            else if(temperature < 0)
            {
                notie.alert({ type: 4, text: jsonObj['2'], time: 2 });
            }
        }else
        {
            if(temperature > 22 && temperature <= 50)
            {
                notie.alert({ type: 1, text: jsonObj['3'], time: 2 });
            }
            else if (temperature > 50)
            {
                notie.alert({ type: 2, text: jsonObj['4'], time: 2 });
            }
            else if (temperature < 12 && temperature >= 0)
            {
                notie.alert({ type: 4, text: jsonObj['5'], time: 2 });
            }
            else if (temperature < 0)
            {
                notie.alert({ type: 3, text: jsonObj['6'], time: 2 });
            }
        }
    }

    function date() {
    notie.date({
        value: new Date(2015, 8, 27),
        cancelCallback: function (date) {
            notie.alert({ type: 3, text: 'You cancelled: ' + date.toISOString() })
        },
        submitCallback: function (date) {
            notie.alert({ type: 1, text: 'You selected: ' + date.toISOString() })
        }
    })
}