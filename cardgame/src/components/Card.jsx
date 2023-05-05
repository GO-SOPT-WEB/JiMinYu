import styled from "styled-components";

const Card = (props) => {
	const { key, cardImage, cardId, cardAlt } = props;
	return (
		<CardWrapper className={flipped ? "flipped" : ""}>
			<CardImg
				key={key}
				cardImage={cardImage}
				cardId={cardId}
				cardAlt={cardAlt}
			/>
		</CardWrapper>
	);
};

const CardWrapper = styled.div`
	padding: 1rem;
`;

const CardImg = styled.img`
	src: {cardImage};
`;
export default Card;
