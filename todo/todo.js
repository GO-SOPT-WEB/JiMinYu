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

calcUndone();

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
	todoItemTitle.insertAdjacentHTML("afterbegin", `<p>${title}</p>`);
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
	todoContent.insertAdjacentHTML(
		"afterbegin",
		`<button id="undone">🤍</button>${todo}`
	);

	//버튼 클릭하면 완료 상태 변경되도록 설정
	const doneButton = todoContent.querySelector("#undone, #done");
	doneButton.addEventListener("click", clickDoneButton);
	return todoContent;
}

// 추가 버튼 눌렀을 때 모달 띄워주기
const todoAddBtn = document.querySelectorAll(".to-do__item > h3 > img");
todoAddBtn.forEach((item) =>
	item.addEventListener("click", () => {
		const clickedArticle = item.closest("article");

		createModal(clickedArticle);
	})
);

// 모달 띄워주는 함수
function createModal(clickedArticle) {
	const modalDiv = document.createElement("div");
	modalDiv.classList.add("modal");
	main.appendChild(modalDiv);

	//입력창이랑 버튼 생성
	const addToDoContent = document.createElement("input");
	addToDoContent.type = "textarea";
	const addTodoBtn = document.createElement("button");
	modalDiv.append(addToDoContent, addTodoBtn);
	addTodoBtn.textContent = "추가";
	modalDiv.style.display = "block";

	//버튼 누르면 입력값 추가하고 모달 닫기
	addTodoBtn.addEventListener("click", () => {
		const addInputValue = addToDoContent.value;
		if (addInputValue) {
			const newTodoContent = createTodoContents(addInputValue);
			clickedArticle.querySelector("ul").appendChild(newTodoContent);
			//모달 닫기
			closeModal(modalDiv);
			//추가하면 바로 숫자 업데이트 되도록 수정
			calcUndone();
		}
	});
}

function closeModal(modalDiv) {
	modalDiv.remove();
}

function clickDoneButton(event) {
	const clickedButton = event.target;
	if (clickedButton.getAttribute("id") === "undone") {
		clickedButton.setAttribute("id", "done");
		clickedButton.innerText = "💚";
		calcUndone();
	} else if (clickedButton.getAttribute("id") === "done") {
		clickedButton.setAttribute("id", "undone");
		clickedButton.innerText = "🤍";
		calcUndone();
	}
}

//미완료한 애들 계산하는 함수
function calcUndone() {
	const undoneNum = document.querySelectorAll("#undone").length;
	//하트 안에 숫자 띄워주기!
	const leftNum = main.querySelector(".weekly-section__item > div >p ");
	leftNum.innerText = undoneNum;
}
