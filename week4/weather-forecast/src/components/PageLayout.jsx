import styled from "styled-components";
import React from "react";
import Header from "./Header";
import SearchForm from "./SearchForm";

const PageLayout = (props) => {
	const { children } = props;
	return (
		<PageStyle.PageWrapper>
			<Header />
			<SearchForm />
			{children}
		</PageStyle.PageWrapper>
	);
};

export default PageLayout;

const PageStyle = {
	PageWrapper: styled.div`
		display: flex;
		flex-direction: column;
		justify-items: center;
		align-items: center;

		width: 100%;
		height: 100%;
	`,
};
