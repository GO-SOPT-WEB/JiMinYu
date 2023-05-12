import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/Mainpage";
import WeatherCard from "./components/WeatherCard";
import WeatherCardList from "./pages/WeatherCardList";
const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/day" element={<WeatherCardList />}>
					<Route path=":area" element={<WeatherCard />} />
				</Route>
				<Route path="/week" element={<WeatherCardList />}>
					<Route path=":area" element={<WeatherCard />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
