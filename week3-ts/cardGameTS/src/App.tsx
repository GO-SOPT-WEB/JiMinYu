import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";

import MainPage from "./pages/MainPage";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPage />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
