import { Children, useState } from "react";
import styled, { css } from "styled-components";

const Button = () => {
	const [isClick, setIsClick] = useState(false);

	return (
		<LevelButton
			type="button"
			isClick={isClick}
			onClick={() => setIsClick((prev) => !prev)}
		>
			{Children}
		</LevelButton>
	);
};

export { ResetButton, LevelButton };

export const ResetButton = styled.button`
	width: 50%;
	margin: 1rem;
	padding: 0.5rem;

	border: none;
	border-radius: 1rem;

	font-weight: bold;
	font-size: 1.2rem;
	${(props) =>
		props.isClick
			? css`
					background-color: #ffa824;
					color: #f7437c;
			  `
			: css`
					background-color: ##90ee90;
					color: #5d1616a7;
			  `};
`;

export const LevelButton = styled.button`
	width: 50%;
	margin: 1rem;
	padding: 0.5rem;

	border: none;
	border-radius: 1rem;

	font-weight: bold;
	font-size: 1.2rem;
	${(props) =>
		props.isClick
			? css`
					background-color: #ffa824;
					color: #f7437c;
			  `
			: css`
					background-color: ##90ee90;
					color: #5d1616a7;
			  `};
`;
