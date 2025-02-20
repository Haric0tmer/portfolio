import jsLogo from "../assets/js.svg";
import cssLogo from "../assets/css.svg";
import htmlLogo from "../assets/html.svg";
import phpLogo from "../assets/php.svg";
import pgLogo from "../assets/pg.svg";
import pharmadeskImage from "../assets/pharmadesk-home.png";

import { Button } from "./ui/button";
import { useState } from "react";
import ModalPharmadesk from "./modals/ModalPharmadesk";

interface HopefieldCardProps {
	locale: string;
}

function Pharmadesk({ locale }: HopefieldCardProps) {
	const [showModal, setShowModal] = useState(false);

	return (
		<div className='border-4 mx-2 border-slate-400 flex flex-col justify-center items-center rounded-md w-fit p-5 mt-5'>
			<h3 className='text-center text-white text-3xl'>PharmaDesk</h3>
			<img
				src={pharmadeskImage}
				alt='PharmaDesk'
				className='w-[350px] h-[188px] sm:w-[520px] sm:h-[288px] mx-4 my-2'
			/>
			<div className='flex w-full justify-center items-center my-4'>
				<div className='logos flex'>
					<img
						src={htmlLogo}
						alt='logoHTML'
						className='sm:w-[48px] sm:h-[48px] w-[32px] h-[32px] sm:mx-0 mx-2'
					/>
					<img
						src={cssLogo}
						alt='logoCSS'
						className='sm:w-[48px] sm:h-[48px] w-[32px] h-[32px] sm:mx-0 mx-2'
					/>
					<img
						src={jsLogo}
						alt='logoJS'
						className='sm:w-[48px] sm:h-[48px] w-[32px] h-[32px] sm:mx-0 mx-2'
					/>
					<img
						src={phpLogo}
						alt='logoPHP'
						className='sm:w-[48px] sm:h-[48px] w-[32px] h-[32px] sm:mx-0 mx-2'
					/>
					<img
						src={pgLogo}
						alt='logoPG'
						className='sm:w-[48px] sm:h-[48px] w-[32px] h-[32px] sm:mx-0 mx-2'
					/>
				</div>
			</div>
			<Button
				variant={"secondary"}
				className='rounded-full text-slate-800 hover:bg-slate-600 hover:text-white transition ease-in-out duration-300 w-28 mt-5'
				onClick={() => setShowModal(true)}
			>
				{locale === "fr" ? "En savoir plus" : "Learn more"}
			</Button>
			<ModalPharmadesk
				locale={locale}
				showModal={showModal}
				setShowModal={setShowModal}
			></ModalPharmadesk>
		</div>
	);
}

export default Pharmadesk;
