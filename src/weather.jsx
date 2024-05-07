import React, { useState } from "react";
import './weather.css';
import search_icon from './asset/search.png';
import clouds_day_icon from './asset/clouds day.png' ;
import clouds_night_icon from'./asset/clouds night.png';
import humidity_icon from'./asset/humidity.png';
import wind_icon from './asset/wind.png';
import sun_icon from'./asset/sun.png';
import moon_icon from'./asset/moon.png';
import cloud_icon from'./asset/cloud.png';
import clouds_icon from'./asset/clouds.png';
import snow_icon from'./asset/snow.png';
import thunderstrom_icon from './asset/storm.png';
import rain_icon from'./asset/rain.png';
import mist_icon from'./asset/mist.png';





const Weather = () =>{

    let api_key = "9f5c46725f99575573d14f94e897b58f";
    const [wicon, setWicon]= useState(cloud_icon);
    const search = async () =>{
        const element = document.getElementsByClassName("cityInput");
        const city = element[0].value;
        console.log(city);
        
        if(city === ""){
            return 0;
        }
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
        let response = await fetch(url);
        let data = await response.json();
        const cityName = document.getElementsByClassName("weather-location");
        cityName[0].innerHTML=data.name;
        const humidity = document.getElementsByClassName("humidity-percent");
        humidity[0].innerHTML = `${data.main.humidity} %`;
        const winds = document.getElementsByClassName("wind_number");
        winds[0].innerHTML =`${data.wind.speed} km/h`;
        const temps = `${data.main.temp} `;
        const final_temp = document.getElementById("temp");
        final_temp.innerHTML = `${(temps - 273.15).toFixed(2)} °C`;

        if(data.weather[0].icon ==="01d"){
            setWicon(sun_icon);
        }else if(data.weather[0].icon ==="01n"){
            setWicon(moon_icon);
        }else if(data.weather[0].icon ==="02d"){
            setWicon(clouds_day_icon);
        }else if(data.weather[0].icon ==="02n"){
            setWicon(clouds_night_icon);
        }else if(data.weather[0].icon ==="03d" || data.weather[0].icon ==="03n"){
            setWicon(cloud_icon);
        }else if(data.weather[0].icon ==="04d" || data.weather[0].icon ==="04n"){
            setWicon(clouds_icon);
        }else if(data.weather[0].icon ==="09d" || data.weather[0].icon ==="09n" || data.weather[0].icon ==="10d" || data.weather[0].icon ==="10n"){
            setWicon(rain_icon);
        }else if(data.weather[0].icon ==="11d" || data.weather[0].icon ==="11n"){
            setWicon(thunderstrom_icon);
        }else if(data.weather[0].icon ==="13d" || data.weather[0].icon ==="13n"){
            setWicon(snow_icon);
        }else if(data.weather[0].icon ==="50d" || data.weather[0].icon ==="50n"){
            setWicon(mist_icon);
        }
    }

    return(
        <div className="container"> 
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="Please enter a city" id="cityIn"></input>
                <div className="search-icon" onClick={()=>{search()}}><img src={search_icon} id="search" alt="search"></img>
                </div>
            </div>
            <div className="weather-image">
                <img src={wicon} alt="weather_image" id="Img_weather"></img>
            </div>
            <div className="weather-location"></div>
            <div className="weather-temp"><p id="temp"></p></div>
            <div className="data-container">
                <div className="element">
                    <div className="data">
                        <img src={humidity_icon} alt="" className="icon"></img>
                        <div className="humidity-percent"></div>
                        <div className="humidity_name">Humidity</div>
                        <br />
                        <br />
                        <div className="wind_image"><img src={wind_icon} alt="wind" id="wind"></img></div>
                        <div className="wind_number"></div>
                        <div className="wind_text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather;