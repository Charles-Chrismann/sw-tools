import Dragon_Knights from './Dragon_Knight'
import Frankenstein from './Frankenstein'
import Mystic_Witch from './Mystic_Witch'
import Panda_warrior from './Panda_warrior'

export const BASE_MONSTERS = {
	...Frankenstein,
	...Dragon_Knights,
	...Mystic_Witch,
	...Panda_warrior
}

export const BASE_MONSTERS_ARRAY = Object.values(BASE_MONSTERS)