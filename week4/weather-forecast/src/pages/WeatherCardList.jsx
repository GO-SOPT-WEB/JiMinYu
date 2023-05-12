import { Outlet } from "react-router-dom";
import WeatherCard from "../components/WeatherCard";
import { WEATHER_TYPE } from "../constants/weather";
const WeatherCardList = () => {
	return <Outlet />;
};

export default WeatherCardList;
