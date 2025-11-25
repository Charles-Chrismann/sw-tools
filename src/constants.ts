import { Monster } from "./classes/Monster";
import { Skill } from "./classes/Skill";

export const Monsters: Monster[] = [
	new Monster({
		name: "Leo",
		attribute: "Wind",
		stats: {
			notAwake: {
				hp: 7875,
				atk: 500,
				def: 420,
				spd: 99,
			},
			awake: {
				hp: 11850,
				atk: 714,
				def: 637,
				spd: 100,
			},
		},
		skills: [
			new Skill({
				name: {
					French: "Puissance du dragon"
				},
				description: {
					French: "Inflige des dégats continues pendant 2 tours si tu obtiens un coup critique."
				},
				multiplier: 430,
				skillUps: [
					{
						lvl: 2,
						upgradeType: "Damage",
						value: 5
					},
					{
						lvl: 3,
						upgradeType: "Damage",
						value: 5
					},
					{
						lvl: 4,
						upgradeType: "Damage",
						value: 10
					},
					{
						lvl: 5,
						upgradeType: "Damage",
						value: 10
					},
				]
			})
		]
	}),
	new Monster({
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
	}),
]