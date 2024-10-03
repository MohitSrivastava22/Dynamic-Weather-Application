// import { useState, useEffect, useContext } from 'react'
// import './App.css'
// import { ServiceContext, ServiceContextProvider } from './context/Context'
// import DateTime from './Utils/DateTime'
// import BackgroundLayout from './components/BackgroundLayout'
// import MiniCard from './components/MiniCard'
// import search from './assets/Icons/search.svg'


// function App() {
//   const { wind, humidity,temp,place,setPlace,weather} = useContext(ServiceContext)
//   const [time, setTime] = useState(new Date())
//   const [input, setInput]=useState('')

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date())
//     }, 1000)
//     return () => {
//       clearInterval(timer)
//     }
//   }, [])

// const submitCity=()=>{
//   setPlace(input)
//   setInput('')
// }

//   const gettime = time.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });


//   return (
//     <ServiceContextProvider>
//       <div className='Container flex '>
//         <BackgroundLayout weather={weather}/>
//         <div className=' flex justify-between  w-screen'>
//           <div className='font-bold text-3xl pt-8 pl-8'>Weather Application</div>
//           <div className='flex pt-8 pl-8 mr-3'>
//             <img src={search} alt="search" height="30" width='30'/>
//             <input className='rounded-sm' type="text" placeholder='Enter City Name' onKeyUp={(e)=>{
//               if(e.key=='Enter')
//                 submitCity();
//             }} value={input} onChange={(e)=>setInput(e.target.value)}  />
//             </div>
//             {/* KeyDown occurs when the user presses a key. KeyUp occurs when the user releases a key. */}
//             {/* There are many use cases for e. key , such as pressing the enter key, the ctrl key, the shift key, or even a combination of keys.  */}
//         </div>
//         <div className='leftBox'>
//           <div>
//             <div className='flex items-center gap-14'>
//               <div className='miniCard'><MiniCard weather={weather} /></div>
//               <div className='text-4xl'>{temp}&deg;C</div> 
//             </div>
//             <div className='text-3xl mt-10 text-center'>{place}</div>
//             <div className='flex justify-between'>
//             <div className='DateAndTime font-semibold translate-x-6  translate-y-10'><DateTime /></div>
//             <div className='font-semibold -translate-x-16 translate-y-10'>{gettime}</div>
//             </div>
//             <div className='flex translate-x-5 translate-y-10 gap-8'>
//               <div className=' wind  bg-blue-700 text-xl text-center'>Wind speed
//                 <div>{wind}</div>
//               </div>
//               <div className='humidity bg-green-600 text-xl text-center '>Humidity
//                 <div>{humidity}</div>
//               </div>
//             </div>
//             <div className='flex mt-20 ml-6 justify-between'>
//               <div className='font-semibold'>Heat Index</div>
//               <div className='mr-10'>311</div>
//             </div>
//             <div className='bg-white w-80 h-0.5 ml-6 mt-4'></div>
//           </div>
//         </div>
//         <div className='rightBox'></div>
//       </div>

//     </ServiceContextProvider>
//   );
// }

// export default App







import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import { ServiceContext, ServiceContextProvider } from './context/Context';
import DateTime from './Utils/DateTime';
import BackgroundLayout from './components/BackgroundLayout';
import MiniCard from './components/MiniCard';
import search from './assets/Icons/search.svg';

function App() {
  const { wind, humidity, temp, place, setPlace, weather } = useContext(ServiceContext);
  const [time, setTime] = useState(new Date());
  const [input, setInput] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const submitCity = () => {
    setPlace(input);
    setInput('');
  };

  const gettime = time.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <ServiceContextProvider>
      <div className='Container flex'>
        <BackgroundLayout weather={weather} />
        <div className='flex justify-between w-screen'>
          <div className='font-extrabold text-3xl pt-8 pl-8 '>Weather Application</div>
          <div className='flex pt-8 pl-8 mr-3'>
            <img src={search} alt='search' height='30' width='30' />
            <input
              className='rounded-sm'
              type='text'
              placeholder='Enter City Name'
              onKeyUp={(e) => {
                if (e.key === 'Enter') submitCity();
              }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </div>
        {place ? (
          <div className='leftBox'>
            <div>
              <div className='flex justify-center items-center gap-14'>
                <div className='miniCard'>
                  <MiniCard weather={weather} />
                </div>
                <div className='text-4xl'>{temp}&deg;C</div>
              </div>
              <div className='text-3xl mt-10 text-center'>{place}</div>
              <div className='flex justify-between'>
                <div className='DateAndTime font-semibold translate-x-44 translate-y-10'>
                  <DateTime />
                </div>
                <div className='font-semibold -translate-x-48 translate-y-10'>{gettime}</div>
              </div>
              <div className='flex translate-x-0.25 translate-y-10 gap-8' style={{ justifyContent: 'center' }} >
                <div className='wind bg-blue-700 text-xl text-center'>
                  Wind speed
                  <div>{wind}</div>
                </div>
                <div className='humidity bg-green-600 text-xl text-center'>
                  Humidity
                  <div>{humidity}</div>
                </div>
              </div>
              {/* <div className='flex mt-20 ml-6 justify-between'>
                <div className='font-semibold'>Heat Index</div>
                <div className='mr-10'>311</div>
              </div> */}
              {/* <div className='bg-white w-80 h-0.5 ml-6 mt-4'></div> */}
            </div>
          </div>
        ) : null}
        <div className='rightBox'></div>
      </div>
    </ServiceContextProvider>
  );
}

export default App;
