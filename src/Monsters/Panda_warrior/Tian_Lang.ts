import { Monster } from "@/classes/Monster";

export const Tian_Lang = new Monster({
	name: "Tian Lang",
	attribute: "Light",
	stats: {
		notAwake: {
			hp: 8115,
			atk: 476,
			def: 436,
			spd: 95,
		},
		awake: {
			hp: 12345,
			atk: 681,
			def: 637,
			spd: 96,
		},
	},
	skills: []
})