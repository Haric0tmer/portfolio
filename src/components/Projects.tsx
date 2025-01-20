interface ProjectProps {
	locale: string;
}

import Hopefield from "./Hopefield";
import Kyoju from "./Kyoju";
import Pharmadesk from "./Pharmadesk";
function Projects({ locale }: ProjectProps) {
	return (
		<div id='project'>
			<h2 className='text-6xl mb-6 text-white text-center mt-12 laptop:mt-18'>
				{locale === "fr" ? "Mes Projets" : "My projects"}
			</h2>
			<p className='text-2xl font-light text-center text-white mb-3'>
				{locale === "fr"
					? "Au fil de ma formation, j'ai eu l'occasion de réaliser de nombreux projets académiques et professionels. Voici un appercu des quelques projets que j'ai réalisé."
					: "During my formation, I had the opporunity to take part in a lot of academic or professional projects. Here is a selection of a few project I did."}
			</p>
			<div className='flex flex-col items-center laptop:flex-row laptop:flex-wrap laptop:justify-evenly'>
				<Hopefield locale={locale}></Hopefield>
				<Kyoju locale={locale}></Kyoju>
				<Pharmadesk locale={locale}></Pharmadesk>
			</div>
		</div>
	);
}

export default Projects;
