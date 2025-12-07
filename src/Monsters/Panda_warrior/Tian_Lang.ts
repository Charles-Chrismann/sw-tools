import { Monster } from "@/classes/Monster";
import MONSTER_FAMILIES from "../MONSTER_FAMILIES";
import { ATTRIBUTE_ARTIFACT_SUBS, TYPE_ARTIFACT_SUBS } from "@/constants";

export const Tian_Lang = new Monster({
	family: MONSTER_FAMILIES.Panda_Warrior,
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
	skills: [],
	artifactStats: [
		{
			version: "7 Dec 2025",
			main: {
				hp: 76.7,
				def: 14.4,
				atk: 8.9
			},
			attributeSubs: [
				{
					sub: ATTRIBUTE_ARTIFACT_SUBS.COM_ADD_DMG_HP,
					percentage: 15.5
				},
				{
					sub: ATTRIBUTE_ARTIFACT_SUBS.COM_ADD_DMG_SPD,
					percentage: 12.1
				},
				{
					sub: ATTRIBUTE_ARTIFACT_SUBS.COM_ADD_DMG_SPD,
					percentage: 8.3
				},
				{
					sub: ATTRIBUTE_ARTIFACT_SUBS.REDUC_DMG_WIND,
					percentage: 4.6
				},
				{
					sub: ATTRIBUTE_ARTIFACT_SUBS.COM_CRIT_RECEIVED,
					percentage: 4.2
				},
				{
					sub: ATTRIBUTE_ARTIFACT_SUBS.REDUC_DMG_FIRE,
					percentage: 3.9
				},
				{
					sub: ATTRIBUTE_ARTIFACT_SUBS.REDUC_DMG_DARK,
					percentage: 3.9
				},
				{
					sub: ATTRIBUTE_ARTIFACT_SUBS.COM_RENFO_SPD,
					percentage: 3.7
				},
				{
					sub: ATTRIBUTE_ARTIFACT_SUBS.REDUC_DMG_WATER,
					percentage: 3.7
				},
			],
			typeSubs: [
				{
					sub: TYPE_ARTIFACT_SUBS.COMP2_ACC,
					percentage: 13.5
				},
				{
					sub: TYPE_ARTIFACT_SUBS.COM_ADD_DMG_SPD,
					percentage: 12.1
				},
				{
					sub: TYPE_ARTIFACT_SUBS.COM_ADD_DMG_HP,
					percentage: 11.9
				},
				{
					sub: TYPE_ARTIFACT_SUBS.COM_ADD_DMG_DEF,
					percentage: 8.4
				},
				{
					sub: TYPE_ARTIFACT_SUBS.COM_ADD_DMG_ATK,
					percentage: 7.1
				},
				{
					sub: TYPE_ARTIFACT_SUBS.COMP1_ACC,
					percentage: 5.3
				},
				{
					sub: TYPE_ARTIFACT_SUBS.COMP2_CRIT,
					percentage: 4
				},
				{
					sub: TYPE_ARTIFACT_SUBS.COM_CRIT_RECEIVED,
					percentage: 3.9
				},
				{
					sub: TYPE_ARTIFACT_SUBS.COM_RENFO_SPD,
					percentage: 3.7
				},
				{
					sub: TYPE_ARTIFACT_SUBS.COM_CRIT_BAD_HP_ENN,
					percentage: 3.5
				},
			]
		}
	]
})