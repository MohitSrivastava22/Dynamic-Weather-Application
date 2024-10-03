import React, { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";

const ServiceContext = createContext();


const ServiceContextProvider = ({ children }) => {
    const [weather, setWeather] = useState([]);
    const [place, setPlace] = useState("Gorakhpur");
    const [temp, setTemp] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [wind, setWind] = useState(0)


    const fetchWeather = async () => {
           try{
               const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=133c42d12ae62fbc460befa583bdace2&units=metric`)
               const data = await api.json();
               setWeather(data.weather)
               // setWeather((prevWeather) => {
               //     console.log('New weather state:', data.weather); // Check if the new state is correct
               //     return data.weather;
               // });
               setWind(data.wind.speed)
               setTemp(data.main.temp)
               setHumidity(data.main.humidity)
               console.log('Fetched weather data:', data);
           }catch{(error)=>{
            console.log(error)
           }}
        } 
    useEffect(() => {
        fetchWeather();
    }, [place])



    return (
        <ServiceContext.Provider value={{
            weather,
            wind,
            temp,
            humidity,
            place,
            setPlace
        }}>{children}</ServiceContext.Provider>

    )

}

export { ServiceContext, ServiceContextProvider };

