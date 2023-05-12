import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/Mainpage";
import WeatherCard from "./components/WeatherCard";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path=":period">
					<Route path=":area" element={<WeatherCard />} />
				</Route>
				<Route></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
