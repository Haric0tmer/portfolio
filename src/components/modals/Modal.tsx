import { X } from "lucide-react";
import { Button } from "../ui/button";
interface ModalProps {
	locale: string;
	showModal: boolean;
	setShowModal: (showModal: boolean) => void;
}

export default function Modal({ locale, showModal, setShowModal }: ModalProps) {
	return showModal ? (
		<>
			<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
				<div className='relative w-auto my-6 mx-auto max-w-3xl'>
					{/*content*/}
					<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-700 outline-none focus:outline-none'>
						{/*header*/}
						<h3 className='text-4xl text-white text-center mt-5'>
							À propos de moi
						</h3>
						{/*body*/}
						<div className='relative p-6 flex-auto'>
							<p className='text-xl text-white font-light mt-5 text-justify'>
								{locale === "fr"
									? "Bonjour, je suis Laurent Boualavong, actuellement en 1ère année aux Mines d'Alès dans la filière informatique et réseaux, parcours développement logiciel en alternance. Principalement intéressé par le développement web et logiciel, j'aime pouvoir utiliser mes capacités afin de trouver des solutions aux problèmes des utilisateurs. Curieux, j'adore acquérir de nouvelles connaissances sur divers sujets."
									: "Hello, I am Laurent Boualavong, currently in 1st year as a work-study student at the engineering school IMT Mines d'Alès. Majoring in computer science and networks, specialized in software development, I am mainly interested in web and software development. I like to use my abilities to create tools or solutions to solve users's problems. Curious by nature, I love learning new skills."}
							</p>
							<p className='text-xl text-white font-light mt-3 text-justify'>
								{locale === "fr"
									? "Lors du premier confinement de la pandémie de COVID-19, étant fan de culture japonaise, je me suis lancé dans l'apprentissage du japonais. Lors de mon BUT, j'ai eu l'occasion de reprendre le japonais avec des cours à l'université en parallèle de ma formation."
									: "During the first lockdown of the COVID-19 pandemic, being a fan of Japanese culture, I started to learn Japanese on my own. During my bachelor's degree, I had the opportunity to take Japanese classes at the university alongside my main classes for three semesters."}
							</p>
							<p className='text-xl text-white font-light mt-3 text-justify'>
								{locale === "fr"
									? "Mes origines multiculturelles et ma curiosité m'ont amené à voyager dans de nombreux pays (Europe, Asie, Amérique du Nord) et ont ouvert mon esprit."
									: "My multicultural origins and my curiosity brought me to travel to different countries (Europe, Asie, North America) "}
							</p>
							<p className='text-xl text-white font-light mt-3 text-justify'>
								{locale === "fr"
									? "Passionné de sport, je pratique du volleyball en compétition depuis 5 ans et suis capitaine de mon équipe depuis 4 ans. Avant cela, j'ai fait du tennis en compétition pendant 10 ans. Lorsque je ne fais pas de sport, j'aime cuisiner ou jouer à des jeux vidéo. J'aime écouter de la musique et je joue occasionnellement de la guitare et du piano."
									: "Sport lover, I have been playing volleyball copetitively for 5 years and have been team captain for 4 years. Before that, I played tennis competitively for 10 years. When I am not doing sport, I enjoy cooking or playing video games. I enjoy listening to music and I occasionnaly play guitar and piano."}
							</p>
						</div>
						{/*footer*/}
						<div className='flex items-center justify-end p-6 rounded-b'>
							<Button
								variant={"ghost"}
								className='rounded-full mx-auto text-white transition ease-in-out duration-300'
								onClick={() => setShowModal(false)}
							>
								<X
									size={24}
									strokeWidth={1}
								></X>
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
		</>
	) : null;
}
