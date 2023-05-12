import React from "react";
import theme from "../styles/theme";
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
			<select name="period" id="period" className="period">
				<option value="오늘">오늘</option>
				<option value="주간">주간</option>
			</select>
			<input
				type="text"
				name="area"
				id="area"
				placeholder="영어로 도시명 ex)seoul"
			/>
			<button className="search-button" type="submit" onClick={submitInput}>
				날씨 요정 소환!
			</button>
		</SearchFormStyle.FormWrapper>
	);
}

export default SearchForm;

const SearchFormStyle = {
	FormWrapper: styled.form`
		display: flex;
		justify-content: center;

		width: 100%;
		margin-top: 2rem;
		gap: 1rem;

		.period,
		.search-button,
		#area {
			font-size: 2rem;
			padding: 0.7rem;
			font-weight: bold;
		}

		.period {
			border-radius: 1rem;
			background-color: ${({ theme }) => theme.colors.Light_Gray};
		}

		.search-button {
			border-radius: 1rem;
			${({ theme }) => theme.colors.Light_Pink};
		}

		#area {
			border-radius: 1rem;
			padding: 1rem;
			background-color: ${({ theme }) => theme.colors.Sky_Blue};
		}
	`,
};
