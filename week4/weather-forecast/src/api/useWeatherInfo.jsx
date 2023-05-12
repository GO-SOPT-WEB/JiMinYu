import axios from "axios";
import { useState } from "react";

export async function useDayWeatherInfo(area) {
	const [dayInfo, setDayInfo] = useState([]);

	const data = await axios.get(
		`https://api.openweathermap.org/data/2.5/weather"?q=${area}&appid=${
			import.meta.env.VITE_APP_WEATHER
		}&units=metric`
	);
	setDayInfo(data.data);
	return { dayInfo };
}

export async function useWeekWeatherInfo(area) {
	const [weekInfo, setWeekInfo] = useState([]);
	const data = await axios.get(
		`https://api.openweathermap.org/data/2.5/forecast"?q=${area}&appid=${
			import.meta.env.VITE_APP_WEATHER
		}&units=metric`
	);
	setWeekInfo(data.data);
	return { weekInfo };
}
