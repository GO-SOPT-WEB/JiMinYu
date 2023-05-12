import { Outlet } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import WeatherCard from "../components/DayWeatherCard";

const Mainpage = () => {
	return (
		<PageLayout>
			<WeatherCard />
			<Outlet />
		</PageLayout>
	);
};

export default Mainpage;
