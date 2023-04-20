import { todoItems } from "./todolist";

const body = document.querySelector("body");
const main = document.querySelector("main");
const days = ["월", "화", "수", "목", "금", "토", "일"];

days.forEach((days, index) => {
	createCalendar;
});

function createCalendar() {
	const weeklyItem = document.createElement("article");
	main.appendChild(weeklyItem);

	const weeklyDay = document.createElement("h3");
	weeklyDay.innerText = `${days}`;
	const weeklyImgDiv = document.createElement("div");
	const weeklyImg = document.createElement("img");
	const weeklyImgNum = document.createElement("p");
	const weeklyNum = document.createElement("p");
	weeklyNum.innerText = 27 + `${index}`;
	weeklyImg.src = "./images/black-heart.png";
	weeklyImg.alt = "검정-하트";

	weeklyItem.appendChild(weeklyDay, weeklyImgDiv, weeklyNum);
	weeklyImgDiv.appendChild(weeklyImg, weeklyImgNum);
}
