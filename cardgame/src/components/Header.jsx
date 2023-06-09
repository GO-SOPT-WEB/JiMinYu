import styled from "styled-components";
import { ResetButton } from "./Buttons";

const Header = (props) => {
	const { score, cardNum } = props;
	return (
		<>
			<HeaderWrapper>
				<div>
					<h1>😽춘식이를 맞춰랏😺</h1>
					<h2>
						{score} / {cardNum}
					</h2>
				</div>
			</HeaderWrapper>
			<ResetButton>RESET</ResetButton>
		</>
	);
};

export default Header;

const HeaderWrapper = styled.header`
	width: 100vw;

	text-align: center;
	margin: 0;

	background-color: #ff8e9e;
	font-size: 2rem;
`;
