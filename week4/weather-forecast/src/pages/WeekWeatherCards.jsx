import PageLayout from "../components/PageLayout";
import { Outlet } from "react-router-dom";

const WeekWeatherCards = () => {
	return (
		<PageLayout>
			<Outlet />
		</PageLayout>
	);
};

export default WeekWeatherCards;
