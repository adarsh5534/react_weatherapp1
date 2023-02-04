import './current-weather.css'
const CurrentWeather = ({data})=>{
    return (
        <div className='weather'>
            <div className='top'>
                <div>
                <p className='city'>{data.city}</p>
                <p className='weather-descripton'>
                {data.weather[0].description}
                </p>
                </div>
                <img alt='weather' className='weather-icon' src={`weatherimage/${data.weather[0].icon}.png`}></img>

            </div>
            <div className='bottom'>
            <p className='temperature'>{Math.round(data.main.temp)}°C</p>
<div className='details'>
    <div className='parameter-row '>
        <span className='Parameter-label'>Details</span>

    </div>
    <div className='parameter-row '>
        <span className='Parameter-label'>Feels like</span>
        <span className='Parameter-value'>{Math.round(data.main.feels_like)}°C</span>

    </div>
    <div className='parameter-row '>
        <span className='Parameter-label'>Wind</span>
        <span className='Parameter-value'>{data.wind.speed}m/s</span>

    </div>
    <div className='parameter-row '>
        <span className='Parameter-label'>Humidity</span>
        <span className='Parameter-value'>{Math.round(data.main.humidity)}%</span>

    </div>
    <div className='parameter-row '>
        <span className='Parameter-label'>Pressure</span>
        <span className='Parameter-value'>{Math.round(data.main.pressure)}hpa</span>

    </div>
</div>
            </div>
        </div>
    )
}
export default CurrentWeather