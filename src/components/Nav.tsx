import Link from "next/link";

export default function Nav() {
	return (
		<nav
			className="flex gap-4"
		>
			<Link
				href="/"
				className="hover:underline underline-offset-2"
			>
				Home
			</Link>
			<Link
				href="/artifact-matcher"
				className="hover:underline underline-offset-2"
			>
				Artifact Matcher
			</Link>
		</nav>
	)
}