import React from "react";
import styled from "styled-components";

function Header() {
	return (
		<HeaderStyle.HeaderWrapper>
			<h1>🧚🏻☀️날씨 요정의 기상예보☁️🧚🏻</h1>
		</HeaderStyle.HeaderWrapper>
	);
}

export default Header;

const HeaderStyle = {
	HeaderWrapper: styled.header`
		display: flex;
		justify-content: space-between;
		align-items: center;

		width: 100%;
		padding: 2rem;

		background-color: ${({ theme }) => theme.colors.Sky_Blue};
		cursor: pointer;

		h1 {
			font-size: 3.5rem;
			padding: 1rem;
		}
	`,
};
