import { useState, useEffect } from "react";
import WeatherForm from "./weatherForm.jsx";
import WeatherInfos from "./weatherInfos.jsx";
import Loader from "./loader.jsx";

const WEATHERAPI_KEY = "0c1dabafcca64cebbd6140709241903";

const WEATHERAPI_URL = "https://api.weatherapi.com/v1/current.json?aqui?=no";
export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);
  useEffect(() => {
    document.title = `Meteo | ${weather?.location.name ?? ""}`;
  }, [weather]);

  async function loadInfo(city = "london") {
    try {
      const request = await fetch(
        `${WEATHERAPI_URL}&key=${WEATHERAPI_KEY}&q=${city}`,
      );
      const json = await request.json();
      setTimeout(() => {
        setWeather(json);
      }, 2000);

      console.log(json);
    } catch (error) {
      console.log("erreur lors de la requete", error);
    }
  }
  function handleChange(city) {
    setWeather(null);
    loadInfo(city);
  }
  return (
    <>
      <div className="container">
        <WeatherForm onChangeCity={handleChange} />
        {weather ? <WeatherInfos weather={weather} /> : <Loader />}
      </div>
    </>
  );
}
