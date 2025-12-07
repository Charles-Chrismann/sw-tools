import { ArtifactStat, Attribute, MonsterConstructor, MonsterStat } from "@/declarations";
import { Skill } from "./Skill";

export class Monster {
	family: string
	name: string
	attribute: Attribute
	artifactStats?: ArtifactStat[]
	stats?: {
		notAwake: MonsterStat,
		awake?: MonsterStat,
		secondAwake?: MonsterStat,
	}
	skills?: Skill[]

	constructor(
		monster: MonsterConstructor
	) {
		this.family = monster.family
		this.name = monster.name
		this.attribute = monster.attribute
		if(monster.stats) {
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
		}
		this.attribute = monster.attribute
		this.skills = monster.skills
		this.artifactStats = monster.artifactStats
	}
}

