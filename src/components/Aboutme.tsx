import { Button } from "./ui/button";
import Modal from "./modals/Modal";
import { useState } from "react";

interface AboutmeProps {
	locale: string;
}

function Aboutme({ locale }: AboutmeProps) {
	const [showModal, setShowModal] = useState(false);
	return (
		<div
			id='aboutme'
			className='flex flex-col laptop:flex-row laptop:gap-12 justify-center items-center laptop:mx-auto mt-12 w-full laptop:w-fit text-center'
		>
			<div className='laptop:w-2/5'>
				<h1 className='text-white text-4xl laptop:text-7xl font-semibold'>
					{locale === "fr"
						? "Bonjour, je suis Laurent Boualavong"
						: "Hello, I am Laurent Boualavong"}
				</h1>
				<p className='mt-4 text-white text-xl font-light'>
					{locale === "fr"
						? "Développeur - Alternant en 1ère année à l'IMT Mines d'Alès."
						: "Developer - Work-study student in 1st year at IMT Mines d'Alès engineering school."}
				</p>
			</div>
			<div className='hidden laptop:block h-[300px] min-h-[1em] w-[10px] self-stretch bg-gradient-to-t from-transparent via-slate-100 to-transparent opacity-25 '></div>
			<div className='laptop:w-2/5'>
				<h3 className='laptop:text-4xl mt-4 laptop:mt-0 text-3xl text-white'>
					{locale === "fr" ? "À propos de moi" : "About me"}
				</h3>
				<p className='md:text-xl text-lg text-white font-light mt-5 laptop:text-justify'>
					{locale === "fr"
						? "Bonjour, je suis Laurent Boualavong, actuellement en 1ère année aux Mines d'Alès dans la filière informatique et réseaux, parcours développement logiciel en alternance. Principalement intéressé par le développement web et logiciel, j'aime pouvoir utiliser mes capacités afin de trouver des solutions aux problèmes des utilisateurs. De nature curieux, j'adore acquérir de nouvelles connaissances sur divers sujets."
						: "Hello, I am Laurent Boualavong, currently in 1st year as a work-study student at the engineering school IMT Mines d'Alès. Majoring in computer science and networks, specialized in software development, I am mainly interested in web and software development. I like to use my abilities to create tools or solutions to solve users's problems. Curious by nature, I love learning new skills."}
				</p>
				<div className='w-full flex justify-center mt-5'>
					<Button
						variant={"secondary"}
						className='rounded-full text-slate-800 hover:bg-slate-600 hover:text-white transition ease-in-out duration-300'
						onClick={() => setShowModal(true)}
					>
						{locale === "fr" ? "En savoir plus" : "Learn more"}
					</Button>
				</div>
				<Modal
					locale={locale}
					showModal={showModal}
					setShowModal={setShowModal}
				></Modal>
			</div>
		</div>
	);
}
export default Aboutme;
