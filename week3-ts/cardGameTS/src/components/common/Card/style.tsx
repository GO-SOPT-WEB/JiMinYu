import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";

export const CardSection = styled.section`
	position: absolute;
	top: 10rem;
	left: 0%;
	width: 100%;
	height: 100vh;

	padding: 1rem;

	display: flex;
	flex-direction: column;
	align-items: center;

	background-color: ${theme.colors.light_coral_100};
`;

export const Buttons = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 1rem;
	margin: 1rem 0 3rem 0;

	button {
		width: 9rem;
		height: 4rem;
	}
`;

export const CardItemsSection = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;

	column-gap: 1rem;
	row-gap: 1rem;
	margin: 1rem 0 1rem 0;
	width: 70%;
	height: fit-content;
`;

export const CardItem = styled.article<{
	flipped: boolean;
	correct: boolean;
}>`
	width: 12.5rem;
	height: 16.5rem;
	padding: 0rem;

	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${theme.colors.green_200};
	border-radius: 15px;
	box-shadow: ${theme.shadow.type_2};

	& > .cardFront {
		transform: rotateY(0deg);
	}

	& > .cardBack {
		transform: rotateY(180deg);
	}

	${({ flipped }) =>
		flipped &&
		css`
			transform: rotateY(180deg);
		`}
`;

export const CardImgBack = styled.img`
	width: 12rem;
	height: 16rem;

	border-radius: 15px;
`;

export const CardImgFront = styled.img`
	width: 12rem;
	height: 16rem;

	border-radius: 15px;
	background-color: ${theme.colors.coral_100};
`;
