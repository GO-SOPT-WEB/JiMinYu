import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/Mainpage";
import WeatherCard from "./components/WeatherCard";
import Errorpage from "./pages/ErrorPage";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path=":period">
					<Route path=":area" element={<WeatherCard />} />
				</Route>
				<Route path=":period/" element={<Errorpage />} />
				<Route path="/*" element={<Errorpage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
