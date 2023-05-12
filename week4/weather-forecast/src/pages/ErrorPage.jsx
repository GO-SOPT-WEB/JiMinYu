import PageLayout from "../components/PageLayout";
import { styled } from "styled-components";
const Errorpage = () => {
	return (
		<PageLayout>
			<ErrorStyle>
				<p>검색 결과가 없습니다🥺</p>
				<p> 다시 검색해주세요🧚🏻</p>
			</ErrorStyle>
		</PageLayout>
	);
};

const ErrorStyle = styled.div`
	margin-top: 30%;
	font-size: 5rem;
	font-weight: bold;
	text-align: center;
	color: ${({ theme }) => theme.colors.Hot_Pink};
`;
export default Errorpage;
