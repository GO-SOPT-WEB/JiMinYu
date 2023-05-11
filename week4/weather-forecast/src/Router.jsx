import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/Mainpage";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
