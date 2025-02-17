import { Button } from "./ui/button";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import LinksMenu from "./LinksMenu";

interface HeaderProps {
	locale: string;
	setLocale: (locale: string) => void;
}

function Header({ locale, setLocale }: HeaderProps) {
	const [showMenu, setShowMenu] = useState(false);

	function switchLanguage() {
		if (locale === "fr") {
			setLocale("en");
		} else {
			setLocale("fr");
		}
	}

	useEffect(() => {
		console.log(showMenu);
	}, [showMenu]);
	return (
		<nav className='flex justify-end items-center w-full p-4'>
			<div className='flex justify-between items-center'>
				<div className='flex items-center'>
					<Button
						variant={"ghost"}
						className='rounded-full m-2 hover:bg-slate-600'
					>
						<a
							href='https://github.com/Haric0tmer'
							target='_blank'
						>
							<Github
								strokeWidth={1}
								color='white'
							></Github>
						</a>
					</Button>
					<Button
						variant={"ghost"}
						className='rounded-full m-2 hover:bg-slate-600'
					>
						<a
							href='https://www.linkedin.com/in/laurent-boualavong'
							target='_blank'
						>
							<Linkedin
								strokeWidth={1}
								color='white'
							></Linkedin>
						</a>
					</Button>
				</div>
				<div className=' hidden laptop:flex items-center'>
					<LinksMenu locale={locale}></LinksMenu>
				</div>
				<div
					className={`flex ${
						showMenu
							? "flex-col bg-slate-700 rounded p-1 absolute top-20 right-1 min-w-20"
							: "hidden"
					} laptop:hidden`}
				>
					<LinksMenu locale={locale}></LinksMenu>
				</div>
				{showMenu ? (
					<X
						onClick={() => setShowMenu(!showMenu)}
						className='laptop:hidden m-3 hover:cursor-pointer'
						color='white'
					></X>
				) : (
					<Menu
						color='white'
						className='laptop:hidden m-3 hover:cursor-pointer'
						onClick={() => setShowMenu(!showMenu)}
					></Menu>
				)}
				<div
					onClick={switchLanguage}
					className='m-2 hover:cursor-pointer'
				>
					{locale === "fr" ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='32'
							height='32'
							viewBox='0 0 512 512'
						>
							<mask id='circleFlagsFr0'>
								<circle
									cx='256'
									cy='256'
									r='256'
									fill='#fff'
								/>
							</mask>
							<g mask='url(#circleFlagsFr0)'>
								<path
									fill='#eee'
									d='M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z'
								/>
								<path
									fill='#0052b4'
									d='M0 0h167v512H0z'
								/>
								<path
									fill='#d80027'
									d='M345 0h167v512H345z'
								/>
							</g>
						</svg>
					) : (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='32'
							height='32'
							viewBox='0 0 512 512'
						>
							<mask id='circleFlagsUk0'>
								<circle
									cx='256'
									cy='256'
									r='256'
									fill='#fff'
								/>
							</mask>
							<g mask='url(#circleFlagsUk0)'>
								<path
									fill='#eee'
									d='m0 0l8 22l-8 23v23l32 54l-32 54v32l32 48l-32 48v32l32 54l-32 54v68l22-8l23 8h23l54-32l54 32h32l48-32l48 32h32l54-32l54 32h68l-8-22l8-23v-23l-32-54l32-54v-32l-32-48l32-48v-32l-32-54l32-54V0l-22 8l-23-8h-23l-54 32l-54-32h-32l-48 32l-48-32h-32l-54 32L68 0z'
								/>
								<path
									fill='#0052b4'
									d='M336 0v108L444 0Zm176 68L404 176h108zM0 176h108L0 68ZM68 0l108 108V0Zm108 512V404L68 512ZM0 444l108-108H0Zm512-108H404l108 108Zm-68 176L336 404v108z'
								/>
								<path
									fill='#d80027'
									d='M0 0v45l131 131h45zm208 0v208H0v96h208v208h96V304h208v-96H304V0zm259 0L336 131v45L512 0zM176 336L0 512h45l131-131zm160 0l176 176v-45L381 336z'
								/>
							</g>
						</svg>
					)}
				</div>
			</div>
		</nav>
	);
}

export default Header;
