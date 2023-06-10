import Button from "../Button";
import * as Styled from "./style";
import { tosim_background } from "../../../assets/images";
import TOSIM from "../../../assets/images/TOSIM";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { LevelState, ScoreState } from "../../../recoil/atom";

//버튼에 맞는 카드 개수 띄워주는 함수(개수 + 랜덤 지정)
const EASY = 10;
const NORMAL = 14;
const HARD = 18;

interface CardItemProps {
	id: number;
	alt: string;
	src: string;
	correct: boolean;
	flipped: boolean;
}

//카드 랜덤으로 섞기
const shuffleCards = (cardList: CardItemProps[]) => {
	for (let i = cardList.length - 1; i > 0; i--) {
		// eslint-disable-next-line prefer-const
		let j = Math.floor(Math.random() * (i + 1));
		[cardList[i], cardList[j]] = [cardList[j], cardList[i]];
	}
};

//카드 두 개 눌렸을 때마다 정답여부 판단하는 useEffect 함수

export const Card = () => {
	const [level, setLevel] = useRecoilState(LevelState);
	const [score, setScore] = useRecoilState(ScoreState);

	const [cardList, setCardList] = useState<CardItemProps[]>(TOSIM);
	const [flippedCards, setFlippedCards] = useState<number[]>([]);

	const [isReset, setIsReset] = useState(false);

	const toggleCardFlip = (card: CardItemProps) => {
		if (flippedCards.length === 2) {
			return;
		}

		// 	const updatedCard = { ...card, flipped: !card.flipped };
		// 	if (!card.flipped && !card.correct) {
		// 		return { ...card, flipped: true };
		// 	}
		// 	setCardList([])
	};

	//섞은 카드 중에서 레벨에 맞는 개수만큼 잘라주고 만들기
	const createCards = (level: number) => {
		let newCardList = TOSIM.slice(0, level / 2);
		newCardList = [...newCardList, ...newCardList];
		setCardList(newCardList);
		shuffleCards(cardList);

		return cardList.map((card, index) => (
			<Styled.CardItem
				key={index}
				correct={card.correct ? 1 : 0}
				flipped={card.flipped ? 1 : 0}
			>
				{card.flipped ? (
					<Styled.CardImgFront
						className="cardFront flipped"
						src={card.src}
						alt={card.alt}
						onClick={() => toggleCardFlip(card)}
					/>
				) : (
					<Styled.CardImgBack
						className="cardBack"
						src={tosim_background}
						alt="토심카드-뒷면"
						onClick={() => {
							toggleCardFlip(card);
						}}
					/>
				)}
			</Styled.CardItem>
		));
	};

	const onLevelClicked = (cardNums: number) => {
		setLevel(cardNums);
		setIsReset(true);
		shuffleCards(TOSIM);
	};

	//리셋 처리해주는 useEffect(setIsReset 거짓으로 바꿔놔야 함)
	useEffect(() => {
		setLevel(level);
	}, [level]);

	useEffect(() => {
		setIsReset(false);
	}, [isReset]);

	return (
		<Styled.CardSection>
			<Styled.Buttons>
				<Button onClick={() => onLevelClicked(EASY)}>EASY</Button>
				<Button onClick={() => onLevelClicked(NORMAL)}>NORMAL</Button>
				<Button onClick={() => onLevelClicked(HARD)}>HARD</Button>
			</Styled.Buttons>
			<Styled.CardItemsSection>{createCards(level)}</Styled.CardItemsSection>
		</Styled.CardSection>
	);
};
