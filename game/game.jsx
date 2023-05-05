import React from "react";
import { useState } from "react";

const HandleLevelBtn = () => {
	const [level, setLevel] = useState("easy");

	const handleEasyBtnClick = () => {
		setLevel("easy");
	};

	const handleNormalBtnClick = () => {
		setLevel("normal");
	};

	const handleHardBtnClick = () => {
		setLevel("hard");
	};

	let gridItemNums;

	level === "easy"
		? (gridItemNums = 10)
		: level === "normal"
		? (gridItemNums = 14)
		: (gridItemNums = 18);

	return (
		<>
			<div className="level-buttons">
				<button onClick={handleEasyBtnClick}>EASY</button>
				<button onClick={handleNormalBtnClick}>NORMAL</button>
				<button onClick={handleHardBtnClick}>HARD</button>
			</div>
			<main>
				<drawGrid numItems={gridItemNums} />
			</main>
		</>
	);
};

const DrawGrid = ({ numGridItems }) => {
	return (
		<section className="grid-section">
			{Array(numGridItems)
				.fill()
				.map((_, index) => (
					<div key={index} className="grid-item"></div>
				))}
		</section>
	);
};

export { HandleLevelBtn, DrawGrid };
