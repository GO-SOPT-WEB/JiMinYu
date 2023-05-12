import { Outlet } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import WeatherCardList from "./WeatherCardList";

const Mainpage = () => {
	return (
		<PageLayout>
			<WeatherCardList />
			<Outlet />
		</PageLayout>
	);
};

export default Mainpage;
