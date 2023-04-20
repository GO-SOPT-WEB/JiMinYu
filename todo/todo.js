// import todoItems from "./todolist.js";
const todoItems = [
	{
		title: "Jimyu",
		contents: ["낮잠", "영화 보기", "방 청소"],
	},
	{
		title: "SOPT",
		contents: ["2차 과제 제출", "스터디 킥오프", "코드리뷰 남기기"],
	},
	{
		title: "HUFS",
		contents: ["졸프 개발 진행", "중간고사 공부"],
	},
	{
		title: "운동",
		contents: ["행사 준비", "숨쉬기 운동"],
	},
];

const body = document.querySelector("body");
const main = document.querySelector("main");
const weeklySection = document.querySelector(".weekly-section");
const todoSection = document.querySelector(".to-do");
const days = ["월", "화", "수", "목", "금", "토", "일"];

days.forEach((days, index) => {
	createCalendar(days, index);
});

todoItems.forEach((item) => {
	createTodos(item.title, item.contents);
});
function createCalendar(days, index) {
	const weeklyItem = document.createElement("article");
	weeklySection.appendChild(weeklyItem);
	weeklyItem.classList.add("weekly-section__item");
	// 요일 생성
	const weeklyDay = document.createElement("h3");
	weeklyDay.innerText = `${days}`;
	// 하트랑 투두 개수 영역 생성
	const weeklyImgDiv = document.createElement("div");
	const weeklyImg = document.createElement("img");
	const weeklyImgNum = document.createElement("p");
	// 날짜 부분
	const weeklyNum = document.createElement("p");
	// 날짜는 일단 27일부터 시작하게
	weeklyNum.innerText = Number(27) + Number(`${index}`);

	weeklyImg.src = "./images/black-heart.png";
	weeklyImg.alt = "검정-하트";

	weeklyItem.append(weeklyDay, weeklyImgDiv, weeklyNum);
	weeklyImgDiv.append(weeklyImg, weeklyImgNum);
}
