import { useState, useEffect } from "react"
import axios from "axios"

const Body = ({dark, data2, submit, celcius2}) =>{
    
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
    
   if (submit) {
   
    setTimeout(() => {
        setData(data2)  
    }, 100);
   }

    return(
        <div>
            <div className={`card ${dark ? "cardlol" : ""}`}>
                <div className="degrees">{Math.round(celcius2)}°</div>
                <div className="main">
                    <div className="b"><span>VIENTO:</span> <span>{data.wind?.speed} m/s</span> </div>
                    <div className="b"><span>NUBES:</span> <span>{data.clouds?.all}%</span> </div>
                    <div className="b"><span> PRESIÓN:</span> <span>{data.main?.pressure} hPa</span> </div>
                </div>
                <div className="container-icon">
                </div>
                <div className="container-label">
                <div className="location"><span>{data.name},</span> <span>{data.sys?.country}</span></div>
                <div className="description">{data.weather?.[0]?.description}</div>
                </div>
            </div>
            <div className="img-container">
                <img src={`/iconos/${data.weather?.[0]?.icon}.svg`} alt="" className="img" /></div>
        </div>
    )
}

export default Body