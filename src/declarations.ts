import { Skill } from "./classes/Skill"
import { ATTRIBUTE_ARTIFACT_SUBS, TYPE_ARTIFACT_SUBS } from "./constants"

export interface MonsterConstructor {
	family: string
	name: string
	attribute: Attribute
	stats?: {
		notAwake: MonsterConstructorStats
		awake?: MonsterConstructorStats
		secondAwake?: MonsterConstructorStats
	}
	skills?: Skill[]
	artifactStats?: ArtifactStat[]
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

export type MainArtifactType = "hp"| "atk" | "def"

export interface ArtifactSub {
	title: TranslationObject
	min: number
	max: number
}

export interface AttributeArtifact {
	main: MainArtifactType
	subs: ArtifactSub
}

export interface ArtifactStat {
	version: string // ex: 7 Dec 2025
	main: {
		hp: number
		def: number
		atk: number
	}
	attributeSubs: {
		sub: typeof ATTRIBUTE_ARTIFACT_SUBS[keyof typeof ATTRIBUTE_ARTIFACT_SUBS]
		percentage: number
	}[]
	typeSubs: {
		sub: typeof TYPE_ARTIFACT_SUBS[keyof typeof TYPE_ARTIFACT_SUBS]
		percentage: number
	}[]
}[]

export type CommonArtifactSubsKey =
| "COM_RENFO_ATK_DEF"
| "COM_RENFO_SPD"
| "COM_BOMB_DMG"
| "COM_CRIT_RECEIVED"
| "COM_LIFE_DRAIN"
| "COM_ADD_DMG_HP"
| "COM_ADD_DMG_ATK"
| "COM_ADD_DMG_DEF"
| "COM_ADD_DMG_SPD"
| "COM_CRIT_GOOD_HP_ENN"
| "COM_CRIT_BAD_HP_ENN"
| "COM_CRIT_SOLO"
| "COM_REVENGE_JOIN_ATK"
export type AttributeArtifactSubsKey =
| CommonArtifactSubsKey
| "INCR_DMG_FIRE"
| "INCR_DMG_WATER"
| "INCR_DMG_WIND"
| "INCR_DMG_LIGHT"
| "INCR_DMG_DARK"
| "REDUC_DMG_FIRE"
| "REDUC_DMG_WATER"
| "REDUC_DMG_WIND"
| "REDUC_DMG_LIGHT"
| "REDUC_DMG_DARK"
export type TypeArtifactSubsKey =
| CommonArtifactSubsKey
| "COMP1_CRIT"
| "COMP2_CRIT"
| "COMP3/4_CRIT"
| "CRIT_FIRST_ATK"
| "COMP1_HEAL"
| "COMP2_HEAL"
| "COMP3_HEAL"
| "COMP1_ACC"
| "COMP2_ACC"
| "COMP3_ACC"