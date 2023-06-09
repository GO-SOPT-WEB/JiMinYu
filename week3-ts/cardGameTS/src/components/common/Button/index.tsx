import styled from "styled-components";
import { theme } from "../../../styles/theme";

const Button = styled.button`
	width: 15%;
	padding: 15px 0;

	background-color: ${theme.colors.white_300};
	color: ${theme.colors.pink_300};
	font-family: "UhBeeJJIBBABBA";

	border-radius: 20px;
	box-shadow: ${({ theme }) => theme.shadow.type_1};
	font-weight: 400;
`;

export default Button;
