"use client";

import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { ArtifactSub, Language, MainArtifactType } from "@/declarations";
import FormSectionTitle from "@/components/app-ui/FormLabel";
import { Combobox } from "@/components/app-ui/Combobox";
import { ATTRIBUTE_ARTIFACT_SUBS, TYPE_ARTIFACT_SUBS } from "@/constants";
import { Monster } from "@/classes/Monster";
import { BASE_MONSTERS_ARRAY } from "@/Monsters";
import Image from "next/image";

export default function ArtifactMatcherClient() {
  const language: Language = "French"
  const attributeArtifactWithKey = Object.entries(ATTRIBUTE_ARTIFACT_SUBS).map(([key, value]) => ({
    label: value.title[language] ?? value.title.English!,
    value: key,
    raw: value
  }))
  const typeArtifactWithKey = Object.entries(TYPE_ARTIFACT_SUBS).map(([key, value]) => ({
    label: value.title[language] ?? value.title.English!,
    value: key,
    raw: value
  }))

  const [artifactType, setArtifactType] = useState<"Attribute" | "Type">("Attribute");
  const [propositions, setPropositions] = useState(attributeArtifactWithKey)
  const [main, setMain] = useState<MainArtifactType>("hp");
  const [sub1, setSub1] = useState<(typeof attributeArtifactWithKey)[number]['value']>("")
  const [sub2, setSub2] = useState<(typeof attributeArtifactWithKey)[number]['value']>("")
  const [sub3, setSub3] = useState<(typeof attributeArtifactWithKey)[number]['value']>("")
  const [sub4, setSub4] = useState<(typeof attributeArtifactWithKey)[number]['value']>("")
  const [scoreboard, setScoreboard] = useState<Monster[]>([])
  const hide = [sub1, sub2, sub3, sub4]

  console.log(BASE_MONSTERS_ARRAY)

  useEffect(() => {
    setPropositions(artifactType === "Attribute" ? attributeArtifactWithKey : typeArtifactWithKey)
  }, [artifactType])

  useEffect(() => {
    const scores: { score: number, monster: Monster, level: number }[] = []
    const subs: ArtifactSub[] = []
    const a = propositions.filter(p => [sub1, sub2, sub3, sub4].includes(p.value))

    for(const monster of BASE_MONSTERS_ARRAY) {
      console.log(monster.artifactStats)
      if(!monster.artifactStats || !monster.artifactStats.length) continue

      const artifactStat = monster.artifactStats.at(-1)!

      const stats = artifactStat[artifactType === "Attribute" ? "attributeSubs" : "typeSubs"]

      // lower means better
      const mainIndex = Object.entries(artifactStat.main).map(([stat, value]) => ({ stat, value }))
      .sort((a, b) => b.value - a.value)
      .findIndex(i => i.stat === main)

      const score = { score: stats.filter(s => a.map(i => i.raw).includes(s.sub)).reduce((prev, curr) => prev + curr.percentage, 0), monster, level: mainIndex }
      scores.push(score)

    }
    const finalScoreboard = scores.sort((a, b) => {
      if(a.level !== b.level) return a.level - b.level
      return b.score - a.score
    })
    setScoreboard(finalScoreboard.map(i => i.monster))
  }, [main, artifactType, ...hide])

  return (
    <div
			className="px-16 flex flex-col"
		>
      <div>
        <FormSectionTitle title="Main Property" />

        <RadioGroup
          onValueChange={(newValue: "Attribute" | "Type") => setArtifactType(newValue)}
          defaultValue={artifactType}
        >
          <div className="flex items-center gap-3">
            <RadioGroupItem value="Attribute" id="r1" />
            <Label htmlFor="r1">Attribute</Label>
          </div>

          <div className="flex items-center gap-3">
            <RadioGroupItem value="Type" id="r2" />
            <Label htmlFor="r2">Type</Label>
          </div>
        </RadioGroup>
      </div>

      <Separator className="my-4" />

      <div>
        <FormSectionTitle title="Main Property" />

        <RadioGroup
          onValueChange={(newValue: MainArtifactType) => setMain(newValue)}
          defaultValue={main}
        >
          <div className="flex items-center gap-3">
            <RadioGroupItem value="hp" id="r-main-1" />
            <Label htmlFor="r-main-1">hp</Label>
          </div>

          <div className="flex items-center gap-3">
            <RadioGroupItem value="atk" id="r-main-2" />
            <Label htmlFor="r-main-2">atk</Label>
          </div>

          <div className="flex items-center gap-3">
            <RadioGroupItem value="def" id="r-main-3" />
            <Label htmlFor="r-main-3">def</Label>
          </div>
        </RadioGroup>
      </div>

      <Separator className="my-4" />


      <FormSectionTitle title="Sub Properties" />

      <div className="flex flex-col gap-4">
        <Combobox propositions={propositions} value={sub1} setValue={setSub1} hide={hide} />
        <Combobox propositions={propositions} value={sub2} setValue={setSub2} hide={hide} />
        <Combobox propositions={propositions} value={sub3} setValue={setSub3} hide={hide} />
        <Combobox propositions={propositions} value={sub4} setValue={setSub4} hide={hide} />
      </div>


			{
        !!scoreboard.length &&
        <div>
          <ul className="flex mt-4 flex flex-wrap gap-2">
            {scoreboard.map((m) => (
              <li key={m.name}>
                <Image
                  className="rounded-sm"
                  src={`/monsters/${m.family}/${m.name}.png`}
                  alt=""
                  width={64}
                  height={64}
                />
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  );
}
