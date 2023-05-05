import styled from "styled-components";
import { useState } from "react";
import { LevelButton, ResetButton } from "../../components/Buttons";
import Header from "../../components/Header";
import CardSection from "../../components/CardSection";
import CHUNSIK_DATA from "../../assets/CHUNSIK_DATA";

// 버튼 누르면 난이도에 맞게 카드 개수랑 점수판 세팅
const MainPage = () => {
	// 레벨 초기화
	const [level, setLevel] = useState("EASY");
	const [score, setScore] = useState(0);
	const [cardNum, setCardNum] = useState(5);
	const [clickedFirst, setClickedFirst] = useState(null);
	const [clickedSecond, setClickedSecond] = useState(null);
	const [isFlipped, setIsFlipped] = useState(false);

	// 선택한 레벨에 맞는 카드 개수 지정
	level === "easy"
		? setCardNum(5)
		: level === "normal"
		? setCardNum(7)
		: setCardNum(9);

	// 레벨 버튼 누르면 카드가 초기화되어야 함
	const resetCards = () => {
		setScore(0);
		setClickedFirst(null);
		setClickedSecond(null);
		setIsFlipped(false);
	};

	// 리셋 버튼 누르면 전체 초기화 되어야 함
	const resetAll = () => {
		setScore(0);
		setLevel("EASY");
		setClickedFirst(null);
		setClickedSecond(null);
		setIsFlipped(false);
	};

	// 클릭시 이미지 띄우기
	const handleClick = (image) => {
		clickedFirst ? setClickedSecond(image) : setClickedFirst(image);
	};

	// 카드 맞는지 검사하기

	return (
		<>
			<Header
				score={score}
				cardNum={cardNum}
				setScore={setScore}
				setCardNum={setCardNum}
			></Header>
			<ResetButton resetAll={resetAll}>RESET</ResetButton>
			<LevelButton
				currentLevel={level}
				setLevel={setLevel}
				reset={resetCards}
			></LevelButton>
			<StyledMain>
				<CardSection
					numCardItems={cardNum}
					currentLevel={level}
					cardItemNums={cardNum * 2}
					cardData={CHUNSIK_DATA}
				></CardSection>
			</StyledMain>
		</>
	);
};
// 메인 부분에 배경색 주기
const StyledMain = styled.div`
	background-color: lemonchiffon;
`;

export default MainPage;
