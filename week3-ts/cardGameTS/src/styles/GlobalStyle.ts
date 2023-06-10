import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
@font-face {
font-family: 'UhBeeJJIBBABBA';
src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_five@.2.0/UhBeeJJIBBABBA.woff') format('woff');
font-weight: normal;
font-style: normal;
}

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

:root {
	font-family: "UhBeeJJIBBABBA";

	color-scheme: light dark;
	color: rgba(255, 255, 255, 0.87);
	background-color: "#FFE4E1";

	font-synthesis: none;
	text-rendering: optimizeLegibility;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-text-size-adjust: 100%;
}

a {
	font-weight: 500;
	color: #646cff;
	text-decoration: inherit;
}
a:hover {
	color: #535bf2;
}

body {
	margin: 0;
	display: flex;
	place-items: center;
	min-width: 320px;
	min-height: 100vh;

	font-family: "UhBeeJJIBBABBA";
	background-color: ${theme.colors.light_coral_100};
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;

}

body {
	line-height: 1;
    font-family: "UhBeeJJIBBABBA";
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

button {
    cursor: pointer;
    border: 0;
    background-color: inherit;
  }
`;

export default GlobalStyle;
