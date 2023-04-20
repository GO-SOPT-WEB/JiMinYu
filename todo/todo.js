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

function createTodos(title, contents) {
	// 투두 하나 담을 공간 만들어주기
	const todoItem = document.createElement("article");
	todoSection.appendChild(todoItem);
	todoItem.classList.add("to-do__item");
	// 투두 제목 넣어주고 추가 버튼 생성하기
	const todoItemTitle = document.createElement("h3");
	todoItemTitle.innerHTML = `<p>${title}</p>`;
	const todoAddBtn = document.createElement("img");
	todoAddBtn.src = "./images/plus.png";
	todoAddBtn.alt = "추가-버튼";
	todoItemTitle.appendChild(todoAddBtn);

	// 할일 목록 만들어주기
	const todoItemList = document.createElement("ul");
	contents.forEach((todo) => {
		const todoContent = createTodoContents(todo);
		todoItemList.appendChild(todoContent);
	});
	todoItem.append(todoItemTitle, todoItemList);
}

// 할일 목록 추가하는 함수
function createTodoContents(todo) {
	const todoContent = document.createElement("li");
	todoContent.insertAdjacentHTML("afterbegin", `<button>🤍</button>${todo}`);
	return todoContent;
}

// 추가 버튼 눌렀을 때 모달 띄워주기
const todoAddBtn = document.querySelectorAll(".to-do__item > h3 > img");
todoAddBtn.forEach((item) => item.addEventListener("click", createModal));

// 모달 띄워주는 함수
function createModal() {
	const modalDiv = document.createElement("div");
	modalDiv.classList.add("modal");
	main.appendChild(modalDiv);
	console.log("Modal created");
	const addToDoContent = document.createElement("input");
	const addTodoBtn = document.createElement("button");
	modalDiv.append(addToDoContent, addTodoBtn);
	addTodoBtn.textContent = "추가";

	// 모달 닫기 버튼 활성화
	addTodoBtn.addEventListener("click", closeModal(modalDiv));

	modalDiv.style.display = "block";
}

function closeModal(modalDiv) {
	modalDiv.style.display = "none";
}

//하트 안에 숫자 띄워주는 함수

//미완료한 애들 계산하는 함수

//버튼 클릭하면 색깔 바뀌면서 완료 처리 되어야 함!
