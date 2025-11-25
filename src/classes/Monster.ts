import { Attribute, MonsterConstructor, MonsterStat } from "@/declarations";
import { Skill } from "./Skill";

export class Monster {

	name: string
	attribute: Attribute
	stats: {
		notAwake: MonsterStat,
		awake?: MonsterStat,
		secondAwake?: MonsterStat,
	}
	skills: Skill[]

	constructor(monster: MonsterConstructor) {
		this.name = monster.name
		this.stats = {
			notAwake: {
				cr: 15,
				cd: 50,
				res: 15,
				acc: 0,
				...monster.stats.notAwake
			},
			awake: monster.stats.awake ? {
				cr: 15,
				cd: 50,
				res: 15,
				acc: 0,
				...monster.stats.awake
			}: undefined,
			secondAwake: monster.stats.secondAwake ? {
				cr: 15,
				cd: 50,
				res: 15,
				acc: 0,
				...monster.stats.secondAwake
			}: undefined
		}
		this.attribute = monster.attribute
		this.skills = monster.skills
	}
}

