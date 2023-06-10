import { atom } from "recoil";

export const LevelState = atom<number>({
	key: "Level",
	default: 10,
});

export const ScoreState = atom<number>({
	key: "Score",
	default: 0,
});
