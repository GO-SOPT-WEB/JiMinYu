import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";

export const Root = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	height: 15%;
	width: 100%;
	padding: 2rem;

	font-family: "UhBeeJJIBBABBA";

	background-color: ${theme.colors.pink_300};

	z-index: 999;
	h1 {
		font-size: 3rem;
	}
`;

export const Div = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	span {
		position: absolute;
		left: 50%;
		font-size: 2rem;
	}
	button {
		position: absolute;
		right: 10%;
		font-size: 1.5rem;
	}
`;
