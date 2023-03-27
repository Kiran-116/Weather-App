// https://rapidapi.com/apininjas/api/weather-by-api-ninjas/

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '34ed0159dfmshaa689f9ea9fed57p1e5b2cjsn86a018663b46',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            // cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset


        })
        .catch(err => console.error(err));
}
    
// getWeather('Seattle')

submit.addEventListener("click", (e) => {
    e.preventDefault()  // will not reload the page
    getWeather(city.value)
})

getWeather('Delhi')


const getOtherCommonWeather1 = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)

            cloud_pct_1.innerHTML = response.cloud_pct
            feels_like_1.innerHTML = response.feels_like
            humidity_1.innerHTML = response.humidity
            max_temp_1.innerHTML = response.max_temp
            min_temp_1.innerHTML = response.min_temp
            sunrise_1.innerHTML = response.sunrise
            sunset_1.innerHTML = response.sunset
            temp_1.innerHTML = response.temp
            wind_degrees_1.innerHTML = response.wind_degrees
            wind_speed_1.innerHTML = response.wind_speed

        })
        .catch(err => console.error(err));
}

const getOtherCommonWeather2 = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)

            cloud_pct_2.innerHTML = response.cloud_pct
            feels_like_2.innerHTML = response.feels_like
            humidity_2.innerHTML = response.humidity
            max_temp_2.innerHTML = response.max_temp
            min_temp_2.innerHTML = response.min_temp
            sunrise_2.innerHTML = response.sunrise
            sunset_2.innerHTML = response.sunset
            temp_2.innerHTML = response.temp
            wind_degrees_2.innerHTML = response.wind_degrees
            wind_speed_2.innerHTML = response.wind_speed

        })
        .catch(err => console.error(err));
}

const getOtherCommonWeather3 = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)

            cloud_pct_3.innerHTML = response.cloud_pct
            feels_like_3.innerHTML = response.feels_like
            humidity_3.innerHTML = response.humidity
            max_temp_3.innerHTML = response.max_temp
            min_temp_3.innerHTML = response.min_temp
            sunrise_3.innerHTML = response.sunrise
            sunset_3.innerHTML = response.sunset
            temp_3.innerHTML = response.temp
            wind_degrees_3.innerHTML = response.wind_degrees
            wind_speed_3.innerHTML = response.wind_speed

        })
        .catch(err => console.error(err));
}

const getOtherCommonWeather4 = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)

            cloud_pct_4.innerHTML = response.cloud_pct
            feels_like_4.innerHTML = response.feels_like
            humidity_4.innerHTML = response.humidity
            max_temp_4.innerHTML = response.max_temp
            min_temp_4.innerHTML = response.min_temp
            sunrise_4.innerHTML = response.sunrise
            sunset_4.innerHTML = response.sunset
            temp_4.innerHTML = response.temp
            wind_degrees_4.innerHTML = response.wind_degrees
            wind_speed_4.innerHTML = response.wind_speed

        })
        .catch(err => console.error(err));
}

getOtherCommonWeather1('Shanghai')
getOtherCommonWeather2('Boston')
getOtherCommonWeather3('Lucknow')
getOtherCommonWeather4('Kolkata')