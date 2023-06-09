import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/Mainpage";
import WeekWeatherCard from "./components/WeekWeatherCard";
import DayWeatherCard from "./components/DayWeatherCard";
import Errorpage from "./pages/ErrorPage";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="day">
					<Route path=":area" element={<DayWeatherCard />} />
				</Route>
				<Route path="week">
					<Route path=":area" element={<WeekWeatherCard />} />
				</Route>
				<Route path="/*" element={<Errorpage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
