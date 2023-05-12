import React from "react";
import { styled } from "styled-components";
import PageLayout from "./PageLayout";

const DayWeatherCard = () => {
	return (
		<PageLayout>
			<CardStyle>
				<header>
					<h3>${}</h3>
				</header>
				<img src="" alt="${area}-사진" />
				<div>
					<span>온도</span>
					<span>${}°C</span>
				</div>
				<div>
					<span>체감 온도</span>
					<span>${}°C</span>
				</div>
				<div>
					<span>최저/최고</span>
					<span>
						${}°C/${}°C
					</span>
				</div>
				<div>
					<span>구름</span>
					<span>${}%</span>
				</div>
			</CardStyle>
		</PageLayout>
	);
};
const CardStyle = styled.article`
	display: flex;
	flex-direction: column;

	margin-top: 3rem;
	padding: 2rem;
	gap: 1rem;

	border-radius: 1rem;
	font-size: 5rem;
	background-color: ${({ theme }) => theme.colors.Light_Green};
`;
export default DayWeatherCard;
