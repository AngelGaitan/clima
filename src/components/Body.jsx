import { useState, useEffect } from "react"
import axios from "axios"

const Body = () =>{

    const apiPassword = "79d3bdc6b53d4af133740dcb82431d13";
    const [data, setData] = useState({})
    useEffect( () => {
        navigator.geolocation.getCurrentPosition((position)=>{
            
            axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiPassword}`)
            .then(resp => {
                setData(resp.data)
                
            })
            .catch(error => console.error(error))
        })
    },[])  
    
    

    return(
        <div>
            <div className="card">
                <div className="degrees">{Math.round(data.main?.temp)}°</div>
                <div className="main">
                    <div className="b"><span>VIENTO:</span> <span>{data.wind?.speed} m/s</span> </div>
                    <div className="b"><span>NUBES:</span> <span>{data.clouds?.all}%</span> </div>
                    <div className="b"><span> PRESIÓN:</span> <span>{data.main?.pressure} hPa</span> </div>
                </div>
                <div className="container-icon">
                </div>
                <div className="container-label">
                <div className="location"></div>
                <div className="description"></div>
                </div>
            </div>
            <div><img src="" alt="" /></div>
        </div>
    )
}

export default Body