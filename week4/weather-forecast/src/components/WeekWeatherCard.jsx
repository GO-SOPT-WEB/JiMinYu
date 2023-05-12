import { styled } from "styled-components";
import PageLayout from "./PageLayout";
import { useParams } from "react-router-dom";
import { getWeekWeatherInfo } from "../api/getWeatherInfo";
import { useEffect, useState } from "react";
import WEATHER_TYPE from "../constants/weather";

const WeekWeatherCard = () => {
	const { area } = useParams();
	const weekWeatherInfo = getWeekWeatherInfo(area);
	const [weatherImage, setWeatherImage] = useState("");

	//사진 업데이트
	useEffect(() => {
		setWeatherImage(
			WEATHER_TYPE.filter(
				(image) =>
					image?.description === weekWeatherInfo?.weather?.[0]?.description
			)[0]?.imgURL
		);
	}, [weekWeatherInfo]);

	return (
		<PageLayout>
			<CardStyle>
				{weekWeatherInfo?.list?.slice(0, 5).map((weatherInfo, i) => (
					<div key={i}>
						<header>
							<h3>{weatherInfo?.name}</h3>
						</header>
						<img
							src={weatherImage}
							alt={weatherInfo?.weather[0]?.description}
						/>
						<div>
							<span>온도</span>
							<span>{weatherInfo?.main?.temp}°C</span>
						</div>
						<div>
							<span>체감 온도</span>
							<span>{weatherInfo?.main?.feels_like}°C</span>
						</div>
						<div>
							<span>최저/최고</span>
							<span>
								{weatherInfo?.main?.temp_min}°C/{weatherInfo?.main?.temp_max}°C
							</span>
						</div>
						<div>
							<span>구름</span>
							<span>{weatherInfo?.clouds?.all}%</span>
						</div>
					</div>
				))}
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
	font-size: 1.6rem;
	background-color: ${({ theme }) => theme.colors.Light_Green};
`;
export default WeekWeatherCard;
