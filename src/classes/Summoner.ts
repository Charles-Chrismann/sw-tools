import { SummonersSkills } from "@/declarations";
import { SummonerMonster } from "./SummonerMonster";

export class Summoner {
	skills: SummonersSkills =  {
		spd: 20,
		cd: 20,
		atk: 20,
		def: 20,
		hp: 20,
		fireAtk: 20,
		waterAtk: 20,
		windAtk: 20,
		lightAtk: 20,
		darkAtk: 20
	}

	monsters: SummonerMonster[]

	constructor(
		monsters: SummonerMonster[]
	) {
		this.monsters = monsters
		this.monsters.forEach(m => m.owner = this)
	}

	getSkillPercentageBonus(skill: keyof SummonersSkills) {
		switch(skill) {
			case "spd":
				return [
					1,
					2,
					2.5,
					3,
					4,
					5,
					5.5,
					6,
					7,
					8,
					8.5,
					9,
					10,
					11,
					11.5,
					12,
					13,
					14,
					14.5,
					15,
				][this.skills.spd - 1]
			case "cd":
				return [
					1,
					2,
					3,
					5,
					6,
					7,
					8,
					9,
					10,
					12,
					13,
					15,
					16,
					17,
					18,
					20,
					21,
					22,
					23,
					25,
				][this.skills.cd - 1]
			default:
				return this.skills[skill]
		}
	}
}