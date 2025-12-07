import { Monster } from "@/classes/Monster";
import MONSTER_FAMILIES from "../MONSTER_FAMILIES";
import { ATTRIBUTE_ARTIFACT_SUBS, TYPE_ARTIFACT_SUBS } from "@/constants";

export const Megan = new Monster({
	name: "Megan",
	attribute: "Water",
	family: MONSTER_FAMILIES.Mystic_Witch,
	artifactStats: [
		{
			version: "7 Dec 2025",
			main: {
				hp: 71.2,
				def: 19.4,
				atk: 9.4
			},
			attributeSubs: [
				{
					sub: ATTRIBUTE_ARTIFACT_SUBS.COM_RENFO_SPD,
					percentage: 11.9
				},
				{
					sub: ATTRIBUTE_ARTIFACT_SUBS.COM_CRIT_RECEIVED,
					percentage: 6
				},
				{
					sub: ATTRIBUTE_ARTIFACT_SUBS.REDUC_DMG_WIND,
					percentage: 5.7
				},
				{
					sub: ATTRIBUTE_ARTIFACT_SUBS.COM_ADD_DMG_SPD,
					percentage: 5.4
				},
				{
					sub: ATTRIBUTE_ARTIFACT_SUBS.REDUC_DMG_FIRE,
					percentage: 4.8
				},
				{
					sub: ATTRIBUTE_ARTIFACT_SUBS.REDUC_DMG_DARK,
					percentage: 4.7
				},
				{
					sub: ATTRIBUTE_ARTIFACT_SUBS.REDUC_DMG_WATER,
					percentage: 4.6
				},
				{
					sub: ATTRIBUTE_ARTIFACT_SUBS.INCR_DMG_FIRE,
					percentage: 4.6
				},
				{
					sub: ATTRIBUTE_ARTIFACT_SUBS.COM_ADD_DMG_DEF,
					percentage: 4.5
				},
				{
					sub: ATTRIBUTE_ARTIFACT_SUBS.COM_ADD_DMG_HP,
					percentage: 4.2
				},
			],
			typeSubs: [
				{
					sub: TYPE_ARTIFACT_SUBS.COMP2_ACC,
					percentage: 11.4
				},
				{
					sub: TYPE_ARTIFACT_SUBS.COM_RENFO_SPD,
					percentage: 7.3
				},
				{
					sub: TYPE_ARTIFACT_SUBS.COMP1_ACC,
					percentage: 6.3
				},
				{
					sub: TYPE_ARTIFACT_SUBS.COM_ADD_DMG_SPD,
					percentage: 6.3
				},
				{
					sub: TYPE_ARTIFACT_SUBS.COM_ADD_DMG_DEF,
					percentage: 4.9
				},
				{
					sub: TYPE_ARTIFACT_SUBS.COM_CRIT_RECEIVED,
					percentage: 4.8
				},
				{
					sub: TYPE_ARTIFACT_SUBS.COM_ADD_DMG_ATK,
					percentage: 4.7
				},
				{
					sub: TYPE_ARTIFACT_SUBS.COMP2_CRIT,
					percentage: 4.6
				},
				{
					sub: TYPE_ARTIFACT_SUBS.COM_ADD_DMG_HP,
					percentage: 4.5
				},
				{
					sub: TYPE_ARTIFACT_SUBS.COMP1_CRIT,
					percentage: 4.5
				},
			]
		}
	]
})