import { Button } from "./ui/button";
interface LinksMenuProps {
	locale: string;
}

function LinksMenu({ locale }: LinksMenuProps) {
	return (
		<>
			<a href='#contact'>
				<Button
					variant={"ghost"}
					className='text-white hover:bg-slate-600 hover:text-white w-full'
				>
					Contact
				</Button>
			</a>

			<a href='#project'>
				<Button
					variant={"ghost"}
					className='text-white hover:bg-slate-600 hover:text-white w-full'
				>
					{locale === "fr" ? "Projets" : "Projects"}
				</Button>
			</a>

			<a href='#aboutme'>
				<Button
					variant={"ghost"}
					className='text-white hover:bg-slate-600 hover:text-white w-full'
				>
					{locale === "fr" ? "A propos" : "About me"}
				</Button>
			</a>
		</>
	);
}

export default LinksMenu;
