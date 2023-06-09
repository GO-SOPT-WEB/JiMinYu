import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route></Route>
				</Routes>
			</BrowserRouter>
			<GlobalStyles />
		</>
	);
}

export default App;
