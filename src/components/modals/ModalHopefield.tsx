import { X } from "lucide-react";
import { Button } from "../ui/button";
interface ModalProps {
	locale: string;
	showModal: boolean;
	setShowModal: (showModal: boolean) => void;
}

export default function ModalHopeField({
	locale,
	showModal,
	setShowModal,
}: ModalProps) {
	return showModal ? (
		<>
			<div className='justify-center items-center flex overflow-y-auto overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none'>
				<div className='relative w-auto my-6 mx-auto max-w-3xl'>
					{/*content*/}
					<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-700 outline-none focus:outline-none max-h-screen'>
						{/*header*/}
						<h3 className='text-4xl text-white text-center mt-5'>Hopefield</h3>
						{/*body*/}
						<div className='relative p-6 flex-auto overflow-y-auto max-h-[calc(100vh-200px)]'>
							<p className='text-xl text-white font-extralight mt-5 text-justify'>
								{locale === "fr"
									? "Hopefield est un projet universitaire réalisé en groupe de 6 personnes durant le troisième semestre de ma formation de BUT informatique. Le principal du développement a été réalisé en trois semaines. Le but était de réaliser un site web de vente aux enchères sur le sujet de notre choix. Le choix des technologies était libre. Nous avons choisi de réaliser notre site web en HTML, CSS, JS, PHP et PostgreSQL. Ce choix s'est fait à l'époque principalement car ce sont les technologies web vues en cours que nous maitrisions le mieux."
									: "Hopefield is a university project developed by a group of six student during our third semester. We had about three weeks to do the development part. The goal was to create an auction website on a theme of our choice. We were free to choose the languages and technologies to develop the website. We chose to develop our website using HTML, CSS, JS, PHP and PostgreSQL. This choice was made mainly because these are the web technologies we knew best at the time."}
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
