import pythonLogo from "../assets/python.svg";
import gimpLogo from "../assets/gimp.svg";
import kyojuImage from "../assets/kyoju-accueil.png";

import { Button } from "./ui/button";
import { useState } from "react";
import ModalKyoju from "./modals/ModalKyoju";

interface HopefieldCardProps {
	locale: string;
}

function Kyoju({ locale }: HopefieldCardProps) {
	const [showModal, setShowModal] = useState(false);

	return (
		<div className='border-4 mx-2 border-slate-400 flex flex-col justify-center items-center rounded-md w-fit p-5 mt-5'>
			<h3 className='text-center text-white text-3xl'>Ky0ju's Reminiscence</h3>

			<img
				src={kyojuImage}
				alt='Kyoju image'
				className='w-[350px] h-[188px] sm:w-[520px] sm:h-[288px] mx-4 my-2'
			/>
			<div className='flex w-full justify-center items-center my-4'>
				<div className='logos flex'>
					<img
						src={pythonLogo}
						alt='logoHTML'
						className='sm:w-[48px] sm:h-[48px] w-[32px] h-[32px] sm:mx-0 mx-2'
					/>
					<img
						src={gimpLogo}
						alt='logoGIMP'
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
			<ModalKyoju
				locale={locale}
				showModal={showModal}
				setShowModal={setShowModal}
			></ModalKyoju>
		</div>
	);
}

export default Kyoju;
