import axios from "axios";

export async function getDayWeatherInfo(area) {
	const { data } = await axios.get(
		`https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${
			import.meta.env.VITE_APP_WEATHER
		}&units=metric`
	);
	console.log({ data });
	return { data };
}

export async function getWeekWeatherInfo(area) {
	const { data } = await axios.get(
		`https://api.openweathermap.org/data/2.5/forecast?q=${area}&appid=${
			import.meta.env.VITE_APP_WEATHER
		}&units=metric`
	);
	return { data };
}
