import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";
import Router from "./Router";

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Router />
			</ThemeProvider>
		</>
	);
}

export default App;
