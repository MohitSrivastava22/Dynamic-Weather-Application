import React from 'react'
import sun from '../assets/Icons/sun.png'
import cloud from '../assets/Icons/cloud.png'
import fog from '../assets/Icons/fog.png'
import rain from '../assets/Icons/rain.png'
import snow from '../assets/Icons/snow.png'
import storm from '../assets/Icons/storm.png'
import windy from '../assets/Icons/windy.png'
import { useContext, useEffect, useState } from 'react'
import { ServiceContext } from '../context/Context'


function MiniCard({weather}) {
    const [image, setImage] = useState()
    

    useEffect(() => {
        if (weather && weather.length > 0 && weather[0].main) {
            const condition = weather[0].main.toLowerCase();
            if (condition == 'clouds') {
                setImage(cloud)
            }
            else if (condition == 'fog' || condition == 'mist' || condition == 'haze') {
                setImage(fog)
            }
            else if (condition == 'rain') {
                setImage(rain)
            }
            else if (condition == 'snow') {
                setImage(snow)
            }
            else if (condition == 'thunder') {
                setImage(storm)
            }
            else if (condition == 'windy') {
                setImage(windy)
            }
            else if (condition == 'clear') {
                setImage(sun);
            }
        }
    }, [weather])



    return (
        <div>
            <div className='image'>
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default MiniCard









