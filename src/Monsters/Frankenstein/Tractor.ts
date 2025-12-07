import { Monster } from "@/classes/Monster";
import MONSTER_FAMILIES from "../MONSTER_FAMILIES";
import { ATTRIBUTE_ARTIFACT_SUBS, TYPE_ARTIFACT_SUBS } from "@/constants";

export const Tractor = new Monster({
	name: "Tractor",
	attribute: "Water",
	family: MONSTER_FAMILIES.Frankenstein,
	artifactStats: [
		{
			version: "7 Dec 2025",
			main: {
				def: 75.6,
				hp: 21.2,
				atk: 3.2
			},
			attributeSubs: [
				{
					sub: ATTRIBUTE_ARTIFACT_SUBS.COM_ADD_DMG_DEF,
					percentage: 15.9
				},
				{
					sub: ATTRIBUTE_ARTIFACT_SUBS.COM_ADD_DMG_HP,
					percentage: 7.5
				},
				{
					sub: ATTRIBUTE_ARTIFACT_SUBS.COM_ADD_DMG_SPD,
					percentage: 6.8
				},
				{
					sub: ATTRIBUTE_ARTIFACT_SUBS.REDUC_DMG_WIND,
					percentage: 6.7
				},
				{
					sub: ATTRIBUTE_ARTIFACT_SUBS.COM_ADD_DMG_ATK,
					percentage: 5
				},
				{
					sub: ATTRIBUTE_ARTIFACT_SUBS.REDUC_DMG_DARK,
					percentage: 4.4
				},
				{
					sub: ATTRIBUTE_ARTIFACT_SUBS.REDUC_DMG_WATER,
					percentage: 4.4
				},
				{
					sub: ATTRIBUTE_ARTIFACT_SUBS.REDUC_DMG_FIRE,
					percentage: 4.3
				},
				{
					sub: ATTRIBUTE_ARTIFACT_SUBS.COM_CRIT_RECEIVED,
					percentage: 4.2
				},
				{
					sub: ATTRIBUTE_ARTIFACT_SUBS.COM_CRIT_BAD_HP_ENN,
					percentage: 4.1
				},
			],
			typeSubs: [
				{
					sub: TYPE_ARTIFACT_SUBS.COM_ADD_DMG_DEF,
					percentage: 16.5
				},
				{
					sub: TYPE_ARTIFACT_SUBS.COM_ADD_DMG_HP,
					percentage: 8.5
				},
				{
					sub: TYPE_ARTIFACT_SUBS.COM_ADD_DMG_SPD,
					percentage: 7.8
				},
				{
					sub: TYPE_ARTIFACT_SUBS.COMP1_CRIT,
					percentage: 6.9
				},
				{
					sub: TYPE_ARTIFACT_SUBS.COM_ADD_DMG_ATK,
					percentage: 5.4
				},
				{
					sub: TYPE_ARTIFACT_SUBS.COMP1_ACC,
					percentage: 5.1
				},
				{
					sub: TYPE_ARTIFACT_SUBS.COMP2_ACC,
					percentage: 4.8
				},
				{
					sub: TYPE_ARTIFACT_SUBS.COM_CRIT_RECEIVED,
					percentage: 5.7
				},
				{
					sub: TYPE_ARTIFACT_SUBS.COM_CRIT_BAD_HP_ENN,
					percentage: 4.4
				},
				
				{
					sub: TYPE_ARTIFACT_SUBS.COM_CRIT_SOLO,
					percentage: 4.2
				},
			]
		}
	]
})