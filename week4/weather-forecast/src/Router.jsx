import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/Mainpage";
import { Cards, WeekWeatherCards, DayWeatherCards } from "./components";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/day" element={<DayWeatherCards />}>
					<Route path=":area" element={<Cards />} />
				</Route>
				<Route path="/week" element={<WeekWeatherCards />}>
					<Route path=":area" element={<Cards />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
