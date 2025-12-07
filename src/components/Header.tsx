import { ModeToggle } from "./ModeToggle";
import Nav from "./Nav";

export default function Header() {
	return (
		<header
			className="w-full flex justify-between items-center px-16 h-24"
		>
			<Nav />

			<div>
				<ModeToggle />
			</div>
		</header>
	)
}