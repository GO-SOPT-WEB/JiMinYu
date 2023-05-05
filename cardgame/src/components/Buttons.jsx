import { Children, useState } from "react";
import styled from "styled-components";

// 레벨 선택 버튼
const LevelButton = (props) => {
	const resetCards = props;
	const [isClick, setIsClick] = useState(false);

	return (
		<StyledLevelButton
			type="button"
			isClick={isClick}
			onClick={() => {
				setIsClick((prev) => !prev);
				resetCards();
			}}
		>
			{Children}
		</StyledLevelButton>
	);
};

// 리셋버튼은 호버 시에만 색깔이 바뀐다
const ResetButton = (props) => {
	const resetAll = props;
	return (
		<StyledResetButton type="button" onClick={() => resetAll()}>
			{Children}
		</StyledResetButton>
	);
};

export { LevelButton, ResetButton };

const StyledResetButton = styled.button`
	width: 50%;
	margin: 1rem;
	padding: 0.5rem;

	border: none;
	border-radius: 1rem;

	font-weight: bold;
	font-size: 1.2rem;

	background-color: #90ee90;
	color: #5d1616a7;

	&:hover {
		background-color: #ffa824;
		color: #f7437c;
	}
`;

// 레벨 선택 버튼 선택되면 계속 색이 바뀐 채로 있어야 한다
const StyledLevelButton = styled.button`
	width: 50%;
	margin: 1rem;
	padding: 0.5rem;

	border: none;
	border-radius: 1rem;

	font-weight: bold;
	font-size: 1.2rem;
	/* background-color: #ffa824;
					color: #f7437c; */

	background-color: #90ee90;
	color: #5d1616a7;
`;
