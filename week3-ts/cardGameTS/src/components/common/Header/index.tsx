import Button from "../Button";
import * as Styled from "./style";

export const Header = () => {
	return (
		<Styled.Root>
			<h1>🐰토심아 어딨니?!🐰</h1>
			<Styled.Div>
				<span>0/5</span>
				<Button>다시 할래!</Button>
			</Styled.Div>
		</Styled.Root>
	);
};
