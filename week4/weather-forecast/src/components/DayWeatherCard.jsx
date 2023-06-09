import { styled } from "styled-components";
import PageLayout from "./PageLayout";
import { useParams } from "react-router-dom";
import { getDayWeatherInfo } from "../api/getWeatherInfo";
import { useEffect, useState } from "react";
import { WEATHER_TYPE } from "../constants/weather";

const DayWeatherCard = () => {
	const { area } = useParams();
	const [weatherImage, setWeatherImage] = useState("");
	const [dayWeatherInfo, setDayWeatherInfo] = useState(null);

	//사진 업데이트
	async function fetchDayWeatherInfo(area) {
		const weatherData = await getDayWeatherInfo(area);
		setDayWeatherInfo(weatherData);
		setWeatherImage(
			WEATHER_TYPE.filter(
				(image) =>
					image?.description === dayWeatherInfo?.weather?.[0]?.description
			)[0]?.imgURL
		);
	}
	//사진 업데이트
	useEffect(() => {
		if (area) {
			fetchDayWeatherInfo(area);
		}
	}, [area]);

	return (
		<PageLayout>
			<CardStyle>
				<header>
					<h3>{dayWeatherInfo?.name}</h3>
				</header>
				<img
					src={weatherImage}
					alt={dayWeatherInfo?.weather?.[0]?.description}
				/>
				<div>
					<span>온도</span>
					<span>{dayWeatherInfo?.main?.temp}°C</span>
				</div>
				<div>
					<span>체감 온도</span>
					<span>{dayWeatherInfo?.main?.feels_like}°C</span>
				</div>
				<div>
					<span>최저/최고</span>
					<span>
						{dayWeatherInfo?.main?.temp_min}°C/{dayWeatherInfo?.main?.temp_max}
						°C
					</span>
				</div>
				<div>
					<span>구름</span>
					<span>{dayWeatherInfo?.clouds?.all}%</span>
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
