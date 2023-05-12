import PageLayout from "../components/PageLayout";
import { Outlet } from "react-router-dom";

const DayWeatherCards = () => {
	return (
		<PageLayout>
			<Outlet />
		</PageLayout>
	);
};

export default DayWeatherCards;
