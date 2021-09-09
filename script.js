
var button = document.getElementById('button')
var input = document.getElementById('input')

button.addEventListener("click", function(){
    var cityName = input.value
    console.log(cityName)
    cityWeather(cityName)

})
 function cityWeather(userWeather){
    var weatherfetch = "https://api.openweathermap.org/data/2.5/weather?q="+ userWeather +"&appid=cd4c15d7efd7d6e6bfe238be28a6494d&units=imperial"
    fetch(weatherfetch)
    .then(response =>{
        return response.json()
    })
    .then(info =>{
        var weatherInfo = info.main.temp
        console.log(weatherInfo)
    })

 }
