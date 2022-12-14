const input = document.querySelector("#city");
const button = document.getElementById("submit");
const cityreturn = document.querySelector("#cityreturn");
const weather = document.querySelector("#weather");
const temp = document.querySelector("#temp");
const API_KEY = "3045dd712ffe6e702e3245525ac7fa38";
function toFar(temp) {
    let con = temp * (9/5) - 459.67
    return con.toFixed(2);
};

button.addEventListener("click", function() {

    return fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=' + API_KEY)
    .then(res => res.json())
        .then(data => {
            let name = data["name"];
            let descrip = data["weather"][0]["description"];
            let tempval = toFar(data["main"]["temp"]);
            let windspd = data["wind"]["speed"];

            cityreturn.innerHTML = `Weather of <em><span>${name}<em></span>`;
            temp.innerHTML = `Tempreture: <span>${tempval} F</span>`;
            weather.innerHTML = `Weather: <span>${descrip}</span>`;


        })
        .catch(err => alert("Please type a valid name."));
});