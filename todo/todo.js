// import { todoItems } from "./todolist.js";

const body = document.querySelector("body");
const main = document.querySelector("main");
const cardSection = document.querySelector(".weekly-section");
const days = ["월", "화", "수", "목", "금", "토", "일"];

days.forEach((days, index) => {
	createCalendar(days, index);
});

function createCalendar(days, index) {
	const weeklyItem = document.createElement("article");
	cardSection.appendChild(weeklyItem);
	weeklyItem.classList.add("weekly-section__item");

	const weeklyDay = document.createElement("h3");
	weeklyDay.innerText = `${days}`;
	const weeklyImgDiv = document.createElement("div");
	const weeklyImg = document.createElement("img");
	const weeklyImgNum = document.createElement("p");
	const weeklyNum = document.createElement("p");
	weeklyNum.innerText = Number(27) + Number(`${index}`);

	weeklyImg.src = "./images/black-heart.png";
	weeklyImg.alt = "검정-하트";

	weeklyItem.append(weeklyDay, weeklyImgDiv, weeklyNum);
	weeklyImgDiv.append(weeklyImg, weeklyImgNum);
}
