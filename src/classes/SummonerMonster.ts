import { AwakeLevel } from "@/declarations";
import { Monster } from "./Monster";
import { Summoner } from "./Summoner";

export class SummonerMonster {
	baseMonster: Monster
	owner!: Summoner
	level: number
	awakeLevel: AwakeLevel
	skillUps: number[]

	constructor(
		baseMonster: Monster,
		level: number,
		awakeLevel: AwakeLevel,
		skillUps: number[],
	) {
		this.baseMonster = baseMonster
		this.level = level
		this.awakeLevel = awakeLevel
		this.skillUps = skillUps
	}

	getTotalAtk() {
		const baseAtk = this.baseMonster.stats[this.awakeLevel]!.atk
		const ownerAtkBonus = this.owner.skills['atk']
		return baseAtk + 497 + baseAtk * ownerAtkBonus / 100
	}

	getSkillDamage(skillIndex: number) {

		const skill = this.baseMonster.skills[skillIndex]
		const skillUpDamage = skill.skillUps
		.filter((s, i) => s.upgradeType === "Damage" &&  s.lvl >= this.skillUps[skillIndex])
		.reduce((acc, curr) => acc + curr.value, 0)

		console.log(skill, skillUpDamage)

		if(!skill || !skill.multiplier) {
			throw new Error
		}

		const totalAtk = this.getTotalAtk()

		console.log(totalAtk, skill.multiplier, skillUpDamage)

		return totalAtk * skill.multiplier! / 100 * (100 + skillUpDamage + 81) / 100
	}

	getDamageReductionFactor() {
		const defense = this.baseMonster.stats[this.awakeLevel]!.def
		return 1000 / ( 1140 + 3.5 * defense)
	}
}