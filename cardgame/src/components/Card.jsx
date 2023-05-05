import styled from "styled-components";
import { useState, useEffect } from "react";

const Card = (props) => {
	const {
		cardImage,
		cardId,
		cardAlt,
		checkMatch,
		clickedList,
		matchedList,
		setClickedList,
	} = props;
	const [isFlipped, setIsFlipped] = useState(false);

	// 두 개 선택되면 뒤집어지도록
	useEffect(() => {
		if (clickedList.length === 2) {
			setTimeout(() => setIsFlipped(false), 500);
			setClickedList([]);
		}
	}, [clickedList]);

	return (
		<CardWrapper
			onClick={() => {
				checkMatch({ cardId });
				setIsFlipped(true);
			}}
		>
			<article className="card">
				<img
					className={`card-item ${isFlipped ? "flipped" : ""}`}
					src={cardImage}
					id={cardId}
					alt={cardAlt}
				/>
				<div className="card-cover"></div>
			</article>
		</CardWrapper>
	);
};
const CardWrapper = styled.article`
	padding: 2rem;

	.card {
		width: 15rem;
		height: 18rem;
		.active {
			transform: rotateY("180deg");
		}
	}
	.card-item {
		width: 100%;
		height: 100%;

		transform-style: preserve-3d;
		border-radius: 0.5rem;
		transition: transform 400ms;
	}

	.card-cover {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;

		width: 100%;
		height: 100%;

		background-color: rgb(253, 157, 32);
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
		border-radius: 5px;
		::before {
			display: block;
			position: absolute;
			content: " ";
			width: 100%;
			height: 100%;
		}
	}
	img {
		width: 100%;
		height: 100%;
	}
`;
export default Card;
