import { Skill } from "./classes/Skill"

export interface MonsterConstructor {
	name: string
	attribute: Attribute
	stats: {
		notAwake: MonsterConstructorStats
		awake?: MonsterConstructorStats
		secondAwake?: MonsterConstructorStats
	}
	skills: Skill[]
}

export interface MonsterConstructorStats {
	hp: number
	atk: number
	def: number
	spd: number

	cr?: number
	cd?: number
	res?: number
	acc?: number
}

export interface MonsterStat {
	hp: number
	atk: number
	def: number
	spd: number

	cr: number
	cd: number
	res: number
	acc: number
}

export interface SummonersSkills {
	spd: number
	cd: number
	atk: number
	def: number
	hp: number
	fireAtk: number
	waterAtk: number
	windAtk: number
	lightAtk: number
	darkAtk: number
}

export type Attribute = "Fire" | "Water" | "Wind" | "Light" | "Dark"

export type Language = "English" | "French"

export type TranslationObject = {
	[K in Language]?: string
}

export type SkillUpUpgradeType = "Damage" | "HarmfulEffectType" | "CoolDown" | "Heal"

export interface SkillUp {
	lvl: number
	upgradeType: SkillUpUpgradeType
	value: number
}

export type AwakeLevel = "notAwake" | "awake" | "secondAwake"