import React, {useState,useEffect } from 'react'
import { ServiceContext } from '../context/Context'
import Cloudy from '../assets/Images/Cloudy.jpg'
import Clear from '../assets/Images/Clear.jpg'
import Fog from '../assets/Images/fog (1).png'   
import Rainy from '../assets/Images/Rainy.jpg'
import Snow from '../assets/Images/snow.jpg'
import Stormy from '../assets/Images/Stormy.jpg'
import '../App.css'



function BackgroundLayout({weather}) {
    const [bgImage,setBgImage]=useState()

    useEffect(()=>{
        if(weather&&weather.length>0&&weather[0].main){
            const condition = weather[0].main.toLowerCase();
            if (condition == 'clouds') {
                setBgImage(Cloudy)
            }
            else if (condition == 'fog' || condition == 'mist' || condition == 'haze') {
                setBgImage(Fog)
            }
            else if (condition == 'rain') {
                setBgImage(Rainy)
            }
            else if (condition == 'snow') {
                setBgImage(Snow)
            }
            else if (condition == 'thunder') {
                setBgImage(Stormy)
            }
            else if (condition == 'clear') {
                setBgImage(Clear);
            }
        }
    },[weather])
  return (
   <>
   <div className='background-layout'>
    <img src={bgImage} alt="" className='background-image'/>
   </div>
   </>
  )
}

export default BackgroundLayout

