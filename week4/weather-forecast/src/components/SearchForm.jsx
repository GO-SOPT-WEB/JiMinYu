import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function SearchForm() {
	// const [searchParams, setSearchParams] = useSearchParams();
	const [input, setInput] = useState("");
	const [option, setOption] = useState("오늘");

	const navigate = useNavigate();

	const handleInputChange = (e) => {
		setInput(e.target.value);
	};

	const handleOptionChange = (e) => {
		setOption(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/${option}/${input}`);
	};

	return (
		<SearchFormStyle.FormWrapper onSubmit={handleSubmit}>
			<select
				name="period"
				id="period"
				className="period"
				defaultValue={option}
				onChange={handleOptionChange}
			>
				<option value="오늘">오늘</option>
				<option value="주간">주간</option>
			</select>
			<input
				type="text"
				name="area"
				id="area"
				placeholder="영어로 도시명 ex)seoul"
				onChange={handleInputChange}
			/>
			<button className="search-button" type="submit">
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
