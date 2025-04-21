import { useState } from 'react'
import './App.css'
import { FaCloudRain,FaCloudSun, } from "react-icons/fa";
import { FaSmog } from "react-icons/fa";
import { BsDropletHalf } from "react-icons/bs";
import { MdOutlineAir } from "react-icons/md";
import { MdCloudySnowing } from "react-icons/md";
import { FaCloudBolt, FaCloudShowersWater } from "react-icons/fa6";
import { useEffect } from 'react';

function App() {
  const [data, setData] = useState("chennai");
  const [apiData, setApidata] = useState(null);

  const store = (event) => {
    setData(event.target.value);
  };

  const getApidata= () =>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=cce6006e786ff50b9032a29c57a579e2`).then((item)=>item.json()).then((abc)=>setApidata(abc))
  }

  useEffect(() =>{
    getApidata();
  }, []);
  console.log(apiData);

  return (
   <div className='overall'>
    <div className='card'>
      <h3>Weather Card</h3><br/>
      <input onChange={store} type= "text" placeholder='Enter City name'/><button onClick={getApidata} className='btn'> Search </button>
      <h3> {apiData && apiData.name} </h3><br/>

      <div className='mist'>
      <FaCloudRain className='cloud'/><p className='mis'>{apiData && apiData.weather[0].main}</p>
      <span>
      {apiData && (apiData.weather[0].main === "Rain" ? (
                 <FaCloudRain/>
              ) : apiData.weather[0].main === "Mist" ? (
                <FaSmog />
              ) : (
                <FaCloudSun />
              
              ))
            }
            </span>
      </div><br/>
      
      <div className='mincard'>
      <div className='min'>
      <p>Humidity</p>
      <div className='minn'><BsDropletHalf className='level'/><p>50%</p></div>
      </div>
 
      <div className='min'>
      <p>Wind Speed</p>
      <div className='minn'><MdOutlineAir className='level'/><p>20.55</p></div>
      </div>
      </div>

    </div>
   </div>
  )
}

export default App
