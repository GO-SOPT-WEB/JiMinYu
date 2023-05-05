import { useState } from "react";
import Button from "../../../components/Buttons";
import Header from "../../../components/Header";
import { LevelButton } from "./style";

// 버튼 누르면 난이도에 맞게 카드 개수랑 점수판 세팅
const HandleLevelBtn = () => {
	const [level, setLevel] = useState("easy");
	const [score, setScore] = useState(0);
	const [cardNum, setCardNum] = useState(5);

	const handleEasyBtnClick = () => {
		setLevel("easy");
	};

	const handleNormalBtnClick = () => {
		setLevel("normal");
		setCardNum(7);
	};

	const handleHardBtnClick = () => {
		setLevel("hard");
		setCardNum(9);
	};

	let cardItemNums;

	level === "easy"
		? (cardItemNums = 10)
		: level === "normal"
		? (cardItemNums = 14)
		: (cardItemNums = 18);

	return (
		<>
			<HEADER></HEADER>
			<div className="level-buttons">
				<LevelButton onClick={handleEasyBtnClick}>EASY</LevelButton>
				<LevelButton onClick={handleNormalBtnClick}>NORMAL</LevelButton>
				<LevelButton onClick={handleHardBtnClick}>HARD</LevelButton>
			</div>
			<main>
				<DrawCard numCardItems={cardItemNums} />
			</main>
		</>
	);
};

const DrawCard = (numCardItems) => {
	return (
		<section className="card-section">
			{Array(numCardItems)
				.fill()
				.map((_, index) => (
					<div key={index} className="card-item"></div>
				))}
		</section>
	);
};

export { HandleLevelBtn, DrawCard };
