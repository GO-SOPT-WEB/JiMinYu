import styled from "styled-components";
import { LevelButton } from "./Buttons";
const LevelButtonsWrapper = styled.div`
	display: flex;
	justify-content: center;
	row-gap: 1rem;
`;
const Levels = ["EASY", "NORAML", "HARD"];
// 레벨 정하는 버튼 만들어주고 각 버튼에 클릭이벤트 줘기
const LevelButtons = (props) => {
	const { currentLevel, setLevel, reset } = props;
	return (
		// 레벨 버튼 생성하기
		<LevelButtonsWrapper>
			{Levels.map((level, index) => {
				return (
					// 클릭하면 레벨이 세팅되고 그에 맞게 카드가 리셋된다
					<LevelButton
						key={index}
						onClick={() => {
							setLevel(level);
							reset();
						}}
						level={level}
						currentLevel={currentLevel}
					>
						{level}
					</LevelButton>
				);
			})}
		</LevelButtonsWrapper>
	);
};

export default LevelButtons;
