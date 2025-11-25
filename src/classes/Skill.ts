import { SkillUp, TranslationObject } from "@/declarations";

export class Skill {
	name: TranslationObject
	description: TranslationObject
	baseCoolDown: number | null
	multiplier: number | null
	isPassif: boolean
	skillUps: SkillUp[]

	constructor(
		{
			name,
			description,
			baseCoolDown,
			multiplier,
			isPassif,
			skillUps,
		} : {
			name: TranslationObject,
			description: TranslationObject,
			baseCoolDown?: number | null
			multiplier?: number | null
			isPassif?: boolean
			skillUps?: SkillUp[]
		}
	) {
		this.name = name
		this.description = description
		this.baseCoolDown = baseCoolDown ?? null
		this.multiplier = multiplier ?? null
		this.isPassif = isPassif ?? false
		this.skillUps = skillUps ?? []
	}
}