// 상수 선언
const header = document.querySelector("header");
const main = document.querySelector("main");
const headerSidebar = document.querySelector(".header-sidebar");
const navCheckboxes = document.querySelectorAll('nav input[type="checkbox"]');
const cardSection = document.querySelector(".card-section");
// const navItems = [" 전체 😋", " 봄 🌸", " 여름 🌻", " 가을 🍁"];
// 나중에 카테고리도 자스로 바꾸기
const cardItems = [
	{
		title: "사과",
		hashtags: ["가을", "빨강", "상큼"],
		imageSrc: "./images/apple.png",
	},
	{
		title: "블루베리",
		hashtags: ["가을", "보라", "달달"],
		imageSrc: "./images/blueberry.png",
	},
	{
		title: "체리",
		hashtags: ["가을", "빨강", "달달"],
		imageSrc: "./images/cherry.png",
	},
	{
		title: "포도",
		hashtags: ["여름", "보라", "달달"],
		imageSrc: "./images/grape.png",
	},
	{
		title: "망고",
		hashtags: ["여름", "노랑", "달달"],
		imageSrc: "./images/mango.png",
	},
	{
		title: "멜론",
		hashtags: ["여름", "초록", "달달"],
		imageSrc: "./images/melon.png",
	},
	{
		title: "복숭아",
		hashtags: ["여름", "분홍", "달달"],
		imageSrc: "./images/peach.png",
	},
	{
		title: "감",
		hashtags: ["가을", "주황", "달달"],
		imageSrc: "./images/persimmon.png",
	},
	{
		title: "배",
		hashtags: ["가을", "노랑", "상큼"],
		imageSrc: "./images/pear.png",
	},
	{
		title: "자두",
		hashtags: ["여름", "빨강", "상큼"],
		imageSrc: "./images/plum.png",
	},
	{
		title: "딸기",
		hashtags: ["겨울", "빨강", "달달"],
		imageSrc: "./images/strawberry.png",
	},
	{
		title: "수박",
		hashtags: ["여름", "빨강", "달달"],
		imageSrc: "./images/watermelon.png",
	},
];

const clickedLists = document.createElement("section");
clickedLists.classList.add("clicked-section");
main.appendChild(clickedLists);
main.insertBefore(clickedLists, cardSection);

//좌측 해시태그 카테고리 누르면 해당 태그들 위에 띄워주기
navCheckboxes.forEach((checkbox) => {
	checkbox.addEventListener("click", filterHashtag);
});

function filterHashtag() {
	const clickedHashtags = document.querySelectorAll(".clicked-hashtag");

	clickedHashtags.forEach((clickedHashtag) => {
		clickedHashtag.remove();
	});

	navCheckboxes.forEach((checkbox) => {
		if (checkbox.checked) {
			const clickedHashtag = document.createElement("div");
			clickedHashtag.classList.add("clicked-hashtag");
			clickedLists.appendChild(clickedHashtag);

			const clickedHashtagName = document.createElement("p");
			clickedHashtagName.innerText = checkbox.parentNode.innerText;

			const clickedCancel = document.createElement("button");
			clickedCancel.innerText = "🆇";
			clickedHashtag.appendChild(clickedCancel);

			clickedHashtag.appendChild(clickedHashtagName);
			clickedLists.appendChild(clickedHashtag);

			clickedCancel.addEventListener("click", cancelHashtag);

			function cancelHashtag() {
				clickedHashtag.style.display = "none";
				checkbox.checked = false;
			}
		}
	});
}

//카드 섹션에 상수 안에 있는 배열 순회하면서 카드 아이템 넣어주기
cardItems.forEach((item) => {
	const cardItem = document.createElement("article");
	cardItem.classList.add("card-item");

	//카드 아이템 제목
	const cardTitle = document.createElement("h3");
	cardTitle.textContent = item.title;
	cardItem.appendChild(cardTitle);

	//카드 아이템 해시태그 목록 만들기
	const hashtagList = document.createElement("ul");
	item.hashtags.forEach((hashtag) => {
		const hashtagItem = document.createElement("li");
		hashtagItem.textContent = hashtag;
		hashtagList.appendChild(hashtagItem);
	});
	cardItem.appendChild(hashtagList);
	const hashtagButton = document.createElement("button");
	hashtagButton.textContent = "🔽";
	cardItem.appendChild(hashtagButton);

	//버튼 누르면 태그 모달 나오게 설정하기
	hashtagButton.addEventListener("click", showModal);

	function showModal() {
		const modalDiv = document.createElement("div");
		modalDiv.classList.add("modal");
		cardItem.appendChild(modalDiv);

		modalDiv.textContent = `${item.hashtags}`;
		const closeModalBtn = document.createElement("button");
		modalDiv.appendChild(closeModalBtn);
		closeModalBtn.textContent = "🆇";

		modalDiv.style.display = "block";

		// 모달 닫기 버튼 활성화
		closeModalBtn.addEventListener("click", closeModal);

		function closeModal() {
			modalDiv.style.display = "none";
		}
	}

	//카드 아이템 이미지
	const cardImage = document.createElement("img");
	cardImage.src = item.imageSrc;
	cardImage.alt = `${item.title} 사진`;
	cardItem.appendChild(cardImage);

	//카드 아이템 하트찜 footer로 만들기
	const cardLike = document.createElement("footer");
	cardLike.textContent = "🤍";
	cardItem.appendChild(cardLike);

	//만든 카드 아이템 덩어리는 카드 섹션에 넣어주기
	cardSection.appendChild(cardItem);
});

// 선택한 카테고리에 맞는 애들 필터링
function showSortedItems() {}
