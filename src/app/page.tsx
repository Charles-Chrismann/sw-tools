import { Summoner } from "@/classes/Summoner";
import { SummonerMonster } from "@/classes/SummonerMonster";
import { BASE_MONSTERS_ARRAY } from "@/Monsters";

export default function Home() {
  const Leo = BASE_MONSTERS_ARRAY.find(m => m.name === "Leo")!
  const TianLang = BASE_MONSTERS_ARRAY.find(m => m.name === "Tian Lang")!

  const leo = new SummonerMonster(
    Leo,
    40,
    "awake",
    []
  );
  const tianLang = new SummonerMonster(
    TianLang,
    40,
    "awake",
    [6, 6]
  );

  const summoners = new Summoner([
    leo,
    tianLang,
  ])

  console.log(leo.getSkillDamage(0) * tianLang.getDamageReductionFactor())
  console.log()

  // const dmg = 

  return (
    <div>
    </div>
  );
}
