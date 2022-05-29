let weather = {
    apiKey: "e7784bce760f35a597af832251f6def8",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + " &units=metric&lang=se&appid=" + this.apiKey
        )
        
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));

    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Vädret i " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Fuktighet: " + humidity + "%";
        document.querySelector(".wind").innerText = "Vindhastighet: " + speed + "km/h"; 
        document.querySelector(".weather").classList.remove("loading");

    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search()
    }
});

weather.fetchWeather("Magaluf");

