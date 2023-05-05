import styled from "styled-components";
import Card from "./Card";
import GetRandomCards from "../utils/GetRandomCards";

// 선택된 단계에 맞게 카드 뿌려주기
export const CardSection = (props) => {
	const { numCardItems } = props;
	// 전달받은 레벨에 따른 카드 개수에 맞게 랜덤으로 카드 뽑기
	const shuffledCardsList = GetRandomCards(numCardItems);

	// 랜덤하게 개수에 맞는 카드 아이템 가져오기
	return (
		// 섹션에 랜덤한 카드 넣어서 반환해주기
		<StyledCardSection className="card-section">
			{shuffledCardsList.map((cardImage, index) => (
				<Card
					key={index}
					cardImage={cardImage.imgSrc}
					cardId={cardImage.id}
					cardAlt={cardImage.alt}
				/>
			))}
		</StyledCardSection>
	);
};

const StyledCardSection = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;
export default CardSection;
