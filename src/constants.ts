import { Monster } from "./classes/Monster";
import { Skill } from "./classes/Skill";
import { ArtifactSub, AttributeArtifactSubsKey, CommonArtifactSubsKey, TypeArtifactSubsKey } from "./declarations";

export const COMMON_ARTIFACT_SUBS: {[k in CommonArtifactSubsKey]: ArtifactSub} = {
	"COM_RENFO_ATK_DEF": {
		title: {
			French: "Effet renforcement ATQ/DEF +"
		},
		min: 3,
		max: 5,
	},
	"COM_RENFO_SPD": {
		title: {
			French: "Effet aug. VIT +"
		},
		min: 4,
		max: 6,
	},
	"COM_BOMB_DMG": {
		title: {
			French: "Dgts de bombe +"
		},
		min: 2,
		max: 4,
	},
	"COM_CRIT_RECEIVED": {
		title: {
			French: "Dgts CRIT reçus +"
		},
		min: 2,
		max: 4,
	},
	"COM_LIFE_DRAIN": {
		title: {
			French: "Drain de vie +"
		},
		min: 5,
		max: 8,
	},
	"COM_ADD_DMG_HP": {
		title: {
			French: "Dgts supp. en prop. des PV"
		},
		min: .2,
		max: .3,
	},
	"COM_ADD_DMG_ATK": {
		title: {
			French: "Dgts supp. en prop. de ATQ"
		},
		min: 2,
		max: 4,
	},
	"COM_ADD_DMG_DEF": {
		title: {
			French: "Dgts supp. en prop. de DEF"
		},
		min: 2,
		max: 4,
	},
	"COM_ADD_DMG_SPD": {
		title: {
			French: "Dgts supp. en prop. de VIT"
		},
		min: 25,
		max: 40,
	},
	"COM_CRIT_GOOD_HP_ENN": {
		title: {
			French: "D.CRIT+ selon bon état PV enn."
		},
		min: 4,
		max: 6,
	},
	"COM_CRIT_BAD_HP_ENN": {
		title: {
			French: "D.CRIT+ sel. mauv. étt PV enn."
		},
		min: 8,
		max: 12,
	},
	"COM_CRIT_SOLO": {
		title: {
			French: "D.CRIT+ comp cib uniq pdt tour"
		},
		min: 8,
		max: 12,
	},
	"COM_REVENGE_JOIN_ATK": {
		title: {
			French: "Dgts de contre-attaque/attaque conjointe +"
		},
		min: 2,
		max: 4,
	},
};

export const ATTRIBUTE_ARTIFACT_SUBS: {[k in AttributeArtifactSubsKey]: ArtifactSub} = {
	...COMMON_ARTIFACT_SUBS,
	"INCR_DMG_FIRE": {
		title: {
			French: "Aug. des dgts infl. au Feu"
		},
		min: 3,
		max: 5,
	},
	"INCR_DMG_WATER": {
		title: {
			French: "Aug. des dgts infl. à l'Eau"
		},
		min: 3,
		max: 5,
	},
	"INCR_DMG_WIND": {
		title: {
			French: "Aug. des dgts infl. au Vent"
		},
		min: 3,
		max: 5,
	},
	"INCR_DMG_LIGHT": {
		title: {
			French: "Aug. des dgts infl. à Lum."
		},
		min: 3,
		max: 5,
	},
	"INCR_DMG_DARK": {
		title: {
			French: "Aug. des dgts infl. au Tén."
		},
		min: 3,
		max: 5,
	},
	"REDUC_DMG_FIRE": {
		title: {
			French: "Réd. des dgts reçus du Feu"
		},
		min: 4,
		max: 6,
	},
	"REDUC_DMG_WATER": {
		title: {
			French: "Réd. des dgts reçus de l'Eau"
		},
		min: 4,
		max: 6,
	},
	"REDUC_DMG_WIND": {
		title: {
			French: "Réd. des dgts reçus du Vent"
		},
		min: 4,
		max: 6,
	},
	"REDUC_DMG_LIGHT": {
		title: {
			French: "Réd. des dgts reçus de la Lum."
		},
		min: 4,
		max: 6,
	},
	"REDUC_DMG_DARK": {
		title: {
			French: "Réd. des dgts reçus des Tén."
		},
		min: 4,
		max: 6,
	},
};


export const TYPE_ARTIFACT_SUBS: {[k in TypeArtifactSubsKey]: ArtifactSub} = {
	...COMMON_ARTIFACT_SUBS,
	"COMP1_CRIT": {
		title: {
			French: "[comp. 1] Aug. Dgts CRIT"
		},
		min: 4,
		max: 6,
	},
	"COMP2_CRIT": {
		title: {
			French: "[comp. 2] Aug. Dgts CRIT"
		},
		min: 4,
		max: 6,
	},
	"COMP3/4_CRIT": {
		title: {
			French: "Dgts CRIT [compétence 3/4] +"
		},
		min: 4,
		max: 6,
	},
	"CRIT_FIRST_ATK": {
		title: {
			French: "Dgts CRIT 1re attaque +"
		},
		min: 4,
		max: 6,
	},
	"COMP1_HEAL": {
		title: {
			French: "[Comp. 1] Aug. des soins"
		},
		min: 4,
		max: 6,
	},
	"COMP2_HEAL": {
		title: {
			French: "[Comp. 2] Aug. des soins"
		},
		min: 4,
		max: 6,
	},
	"COMP3_HEAL": {
		title: {
			French: "[Comp. 3] Aug. des soins"
		},
		min: 4,
		max: 6,
	},
	"COMP1_ACC": {
		title: {
			French: "[Comp. 1] Aug. Précision"
		},
		min: 4,
		max: 6,
	},
	"COMP2_ACC": {
		title: {
			French: "[Comp. 2] Aug. Précision"
		},
		min: 4,
		max: 6,
	},
	"COMP3_ACC": {
		title: {
			French: "[Comp. 3] Aug. Précision"
		},
		min: 4,
		max: 6,
	},
};
