import CHUNSIK_DATA from "../assets/CHUNSIK_DATA";

// 카드를 랜덤하게 섞어서 배치하기
export const GetRandomCards = (numCardItems) => {
	// 랜덤하게 뽑아서 넣을 리스트 만들기
	let randomCardsList = [];
	let shuffledCardsList = [];
	randomCardsList = [...CHUNSIK_DATA]
		.sort(() => 0.5 - Math.random())
		.slice(numCardItems);
	shuffledCardsList = [...randomCardsList, ...randomCardsList].sort(
		() => 0.5 - Math.random()
	);

	return shuffledCardsList;
};

export default GetRandomCards;
