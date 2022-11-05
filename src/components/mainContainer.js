import {GoSearch} from 'react-icons/go';
import rain from '../images/rainy.png';
import sun from '../images/suny.png';
import cloud from '../images/cloudy.png';
import { useState } from 'react';
import ReactLoading from 'react-loading';
import toast from 'react-toast-notification';
import Axios from 'axios';



const MainContainer = () =>{
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");
    const [location, setLocation] = useState("");
    const API_KEY = "62a88d67cc4dc48d8587205287c8dd54";

    const handleSearch = ()=>{
        if(location.length == 0){
            toast.error("city can't be empty")
        }
        else{
            setIsLoading(true);
            setErrorMsg("");
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}`;
            Axios.get(url).then(res=>{
                setData(res.data);
                setIsLoading(false)
            }).catch(err=>{
                setErrorMsg("Please Enter Valid City name")
                setIsLoading(false)
            })
        }
    }





    return <div className="container">
        <h3>Enter A City</h3>
            <input type="text" placeholder="Enter a City" value={location} onChange={e=>setLocation(e.target.value)}/>
            <span onClick={handleSearch}><GoSearch/></span>

        {isLoading? <div>
           <center> <ReactLoading type="bubbles"/></center>
        </div> : errorMsg != "" ? <div className='error-msg'>
            <p className='error-title'>Oops</p>
            <p>{errorMsg}</p>
        </div>:
        data.length == 0 ? <div className='welcome'>
            <h1>Welcome</h1>
            <h4>Explore Weather of diffrent Cities</h4>
        </div>:
            <div className='weather-detail'>
                <div className='city-detail'>
                    <h2>{data.name}</h2>
                    <h2 className='temp'>{(data.main.temp - 273.15).toString().slice(0,5)}°C</h2>
                </div>
                <div className='weather-info'>
                    {data.weather[0].main == "Clouds" || data.weather[0].main == "Mist" || data.weather[0].main == "Snow"? <img src={cloud}/> : data.weather[0].main == "Rain"? <img src={rain}/>  : data.weather[0].main == "Clear" && <img src={sun}/>}
                    {/* <img src={rain}/> */}
                    <h3>{data.weather[0].main}</h3>
                </div>
            </div>
        
        }
    </div>
}

export default MainContainer;