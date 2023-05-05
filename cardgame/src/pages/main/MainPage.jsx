import styled from "styled-components";
import { useState } from "react";
import { LevelButtons } from "../../components/Buttons";
import Header from "../../components/Header";
import CardSection 

// 버튼 누르면 난이도에 맞게 카드 개수랑 점수판 세팅
const MainPage = () => {
	// 레벨 초기화
	const [level, setLevel] = useState("EASY");
	const [score, setScore] = useState(0);
	const [cardNum, setCardNum] = useState(5);

	let cardItemNums;
// 선택한 레벨에 맞는 카드 개수 지정
	level === "easy"
		? (cardItemNums = 10)
		: level === "normal"
		? (cardItemNums = 14)
		: (cardItemNums = 18);
// 레벨 버튼 누르면 카드가 초기화되어야 함
	const resetCards = () => {};
	return (
		<>
			<Header
				score={score}
				cardNum={cardNum}
				setScore={setScore}
				setCardNum={setCardNum}
			></Header>
			<LevelButtons
				currentLevel={level}
				setLevel={setLevel}
				reset={resetCards}
			></LevelButtons>
			<StyledMain>
				<CardSection numCardItems={cardItemNums}></CardSection>
			</StyledMain>
		</>
	);
};
// 메인 부분에 배경색 주기
const StyledMain = styled.div`
	background-color: lemonchiffon;
`;

export default MainPage;
