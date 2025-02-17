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
			<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
				<div className='relative w-auto my-6 mx-auto max-w-3xl'>
					{/*content*/}
					<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-700 outline-none focus:outline-none'>
						{/*header*/}
						<h3 className='text-4xl text-white text-center mt-5'>Hopefield</h3>
						{/*body*/}
						<div className='relative p-6 flex-auto'>
							<p className='text-xl text-white font-extralight mt-5 text-justify'>
								{locale === "fr"
									? "Hopefield est un projet universitaire réalisé en groupe de 6 personnes durant le troisième semestre de ma formation. Le principal du développement a été réalisé en trois semaines. Le but était de réaliser un site web de vente aux enchères sur le sujet de notre choix. Le choix des technologies était libre. Nous avons choisi de réaliser notre site web en HTML, CSS, JS, PHP et PostgreSQL. Ce choix s'est fait à l'époque principalement car ce sont les technologies web vues en cours que nous maitrisions le mieux. Le thème que nous avons choisi pour notre site sont les fossiles. Nous souhaitions avoir un sujet à la fois original et qui se prête bien à la vente aux enchères. Nous avons donc réalisé un site web permettant de vendre des fossiles en ligne."
									: "Hopefield is a university project developped by a group of six student during our third semester. We had about three weeks to do the development part. The goal was to create an auction website on a theme of our choice. We were free to chose the langages and technologies to develop the website. We chose to develop our website using HTML, CSS, JS, PHP and PostgreSQL. This made mainly because these are the web technologies we knew best at the time. The theme we chose for our website is fossils. We wanted a theme that was both original and well suited to an auction site. We therefore created a website that allows you to sell fossils online."}
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
