const api = {
    key: "9053ac1127d680ad0a3906a2313d4b7c",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector('.search-box');

searchBox.addEventListener('keydown', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchBox.value);
    }
}



function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
    }

    function displayResults (weather) {

        let city = document.querySelector('.location .city');
        city.innerText = `${weather.name}, ${weather.sys.country}`;

        let temperature = document.querySelector('.temp');
        temperature.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

        let now = new Date();
        let date = document.querySelector('.location .date');
        date.innerText = dateBuilder(now)

        let hi_lows = document.querySelector('.hi-low')
        hi_lows.innerHTML= `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`

        let weather_el = document.querySelector('.current .weather');
        weather_el.innerText = weather.weather[0].main;



        function dateBuilder(d) {
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

            let day = days[d.getDay()];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();

            return `${day} ${date} ${month} ${year}`;



            
            

        }

    }