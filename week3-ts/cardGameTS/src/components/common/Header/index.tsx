import { useRecoilState } from "recoil";
import { LevelState, ScoreState } from "../../../recoil/atom";
import Button from "../Button";
import * as Styled from "./style";

export const Header = () => {
	const [level, setLevel] = useRecoilState(LevelState);
	const [score, setScore] = useRecoilState(ScoreState);

	return (
		<Styled.Root>
			<h1>🐰토심아 어딨니?!🐰</h1>
			<Styled.Div>
				<span>
					{score}/{level / 2}
				</span>
				<Button>다시 할래!</Button>
			</Styled.Div>
		</Styled.Root>
	);
};
