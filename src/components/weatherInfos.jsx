export default function WeatherInfos({ weather }) {
  return (
    <div className="card-infos">
      <div className="card-name">
        <h3>{weather?.location.name}</h3>
      </div>
      <div className="card-country">
        <h1>{weather?.location.country}</h1>
      </div>
      <div className="card-box">
        <div className="icon">
          <img
            src={`http:${weather?.current.condition.icon}`}
            alt={weather?.current.condition.text}
          />
        </div>
        <div className="card-temp">
          <h5>Temparature (c)</h5>
          <p>{weather?.current.condition.text}</p>
          <span>{weather?.current.temp_c}`c</span>
        </div>
        <div className="card-map">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.77824505235!2d${weather.location.long}!3d${weather.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!!2scm!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!4v1710850617639!5m2!1sen!2scm`}
            width="400"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
