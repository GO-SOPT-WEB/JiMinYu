import React from "react";
import styled from "styled-components";

const submitInput = () => {
	//     fetch("API 주소", {
	//       method: "GET",
	//       headers: {
	//         "Content-Type": "Json",
	//       },
	//       body: ,
	//     })
	//       .then((response) => {
	//         if (response.ok === true) {
	//           return response.json();
	//         }
	//         throw new Error("에러 발생!");
	//       })
	//       .catch((error) => {
	//         alert(error);
	//       })
	//       .then((data) => {
	//         console.log(data);
	//       });
};

function SearchForm() {
	return (
		<SearchFormStyle.FormWrapper action="" method="get">
			<select name="period" id="period" class="period">
				<option value="오늘">오늘</option>
				<option value="주간">주간</option>
			</select>
			<input
				type="text"
				name="area"
				id="area"
				placeholder="영어로 도시명 ex)seoul"
			/>
			<button class="search-button" type="submit" onClick={submitInput}>
				날씨 요정 소환!
			</button>
		</SearchFormStyle.FormWrapper>
	);
}

export default SearchForm;

const SearchFormStyle = {
	FormWrapper: styled.form`
		display: flex;
		align-items: center;
		gap: 1rem;

		width: 100%;

		border-radius: 1rem;
		background-color: ${({ theme }) => theme.colors.Sky_Blue};

		.period {
			background-color: ${({ theme }) => theme.colors.Light_Gray};
		}

		.search-button {
			${({ theme }) => theme.color.Light_Pink};
		}

		#area {
			padding: 1rem;
			background-color: ${({ theme }) => theme.colors.Sky_Blue};
		}
	`,
};
