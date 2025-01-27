import Line from "./Line";
import Circle from "./Circle";
import TimelineElement from "./TimelineElement";

interface TimelineProps {
	locale: string;
}

function Timeline({ locale }: TimelineProps) {
	return (
		<div className=''>
			<h2 className='text-6xl mb-6 text-white text-center mt-12 laptop:mt-18'>
				{locale === "fr" ? "Mon parcours" : "My journey"}
			</h2>
			<p className='text-2xl font-light text-center text-white mb-3'>
				{locale === "fr"
					? "Après le lycée, j'ai étudié et travaillé dans plusieurs milieux, ce qui m'a aidé à choisir l'informatique comme domaine d'étude. Voici mon parcours. "
					: "Once I finished high school, I studied and worked in different environments. These exeperiencies helped me choose computer science for my studies. Here is my journey."}
			</p>
			<div className='flex flex-col gap-y-3 w-[90%] my-4 mx-auto'>
				<Circle></Circle>
				<div className='grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto'>
					{locale === "fr" ? (
						<TimelineElement
							title='La prepa des INP'
							date='Sept 2020 - Juil 2021'
							desc="Après le lycée, j'ai fait le choix d'intégrer la prépa des INP de Nancy dans le but de rejoindre une école d'ingénieur du groupe INP. Durant cette année, j'ai pu découvrir plusieurs domaine scientifiques en profondeur malgrès des conditions de travail compliquées par le confinement du COVID-19. J'ai notamment pu découvrir l'informatique ce qui m'a poussé vers ma décision d'arrêter la prépa pour m'orienter vers des études d'informatique."
							type='school'
						></TimelineElement>
					) : (
						<TimelineElement
							title='La prepa des INP'
							date='Sept 2020 - Jul 2021'
							type='school'
							desc='After high school, I decided to join La prepa des INP in Nancy with the goal of joining an engineering school from the INP group. During this year, I was able to discover several scientific fields in depth despite difficult working conditions due to the COVID-19 lockdown. I was able to discover computer science which pushed me towards my decision to stop my current formation and go towards computer science studies.'
						></TimelineElement>
					)}
					<Line></Line>
					<div></div>
				</div>
				<Circle></Circle>
				<div className='grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto'>
					{locale === "fr" ? (
						<TimelineElement
							title='BUT Informatique'
							date='Sept 2021 - Juil 2024'
							type='school'
							desc="Après ma première année de prépa, j'ai décidé de m'orienter vers le BUT informatique à l'IUT2 de Grenoble. Bien que j'ai changé de formation, le but final a toujours été de rejoindre une école d'ingénieur. J'ai préféré le BUT car c'est une formation plus pratique et spécialisée sur l'informatique par rapport à la prépa. En deuxième année, j'ai choisi la spécialité réalisation d'applications : conception développement validation. Durant les 3 années de BUT, j'ai découvert  et appronfondi mes connaissances dans différents domaines de l'informatique comme le développement, les bases de données, les réseaux mais aussi des notions comme la gestion de projet ou l'économie."
						></TimelineElement>
					) : (
						<TimelineElement
							title='BUT Informatique'
							date='Sept 2021 - Jul 2024'
							type='school'
							desc='After my first year at La prepa des INP, I decided to go towards a bachelor in computer science at the IUT2 of Grenoble. Even though I changed my formation, my final goal was always to join an engineering school. I preferred the BUT because it has  more practical courses focused in computer science compared to the prepa. In my second year, I chose to specialize in application devlopment. During the 3 years of BUT, I discovered and improved my knowledge in different fields of computer science such as development, databases, networks but also notions like project management or economics.'
						></TimelineElement>
					)}
					<Line></Line>
					<div>
						<div className='mb-2'>
							{locale === "fr" ? (
								<TimelineElement
									title='Stage - DATE'
									date='Avr 2023 - Juil 2023'
									desc="Pendant ma deuxième année de BUT, j'ai eu a faire un stage d'une durée de 3 mois ayant pour but de donner un avant-goût du monde du travail. Pour ce stage j'ai travaillé chez DATE, une PME ayant pour coeur de métier la fabrication d'échangeur thermique à forte téchnicité, faits sur mesure pou des clients du domaine du spatial, de la défense ou encore de l'industrie. Ma mission chez DATE était de réaliser une application permettant de chiffrer un projet en prennant en compte les différents postes de dépenses allant de la main d'oeuvre à la matière première. J'ai pu découvrir le monde de l'industrie et de l'entreprise, mais aussi apprendre à travailler en autonomie et à gérer un projet de A à Z."
									type='work'
									tech={["html", "css", "js", "php", "pg"]}
								></TimelineElement>
							) : (
								<TimelineElement
									title='Intern - DATE'
									date='Jul 2023 - Aug 2023'
									type='work'
									tech={["html", "css", "js", "php", "pg"]}
									desc='During the second year of my bachelor, I had to complete an internship of 3 months to get a taste of the working world. For this internship, I worked at DATE, a SME specialized in the manufacturing of high-end custom-made heat exchangers for clients in the space, defense or industry sectors. My mission at DATE was to create an application to estimate the cost of a project by taking into account the different expenses ranging from labor to raw materials. I was able to discover the world of industry and business, but also learn to work independently and manage a project from start to finish.'
								></TimelineElement>
							)}
						</div>
						<div className='mb-2'>
							{locale === "fr" ? (
								<TimelineElement
									title='Pharmacie de la Commanderie'
									date='Juil 2023 - Août 2023'
									desc="Pendant l'été entre ma deuxième et troisème année de BUT, j'ai eu l'opportunité d'utiliser mes compétences acquises en stage dans un milieu complétement nouveau qui est celui de la santé. Pendant un mois, j'ai développé pour une pharmacie un logiciel de gestion de certains éléments administratifs de la pharmacie comme par exemple la gestion de location de matériel, ou encore du stockage et de la recherche de documents administratifs ou de checklists (Voir projet PharmaDesk)."
									type='work'
									tech={["html", "css", "js", "php", "pg"]}
								></TimelineElement>
							) : (
								<TimelineElement
									title='Pharmacie de la Commanderie'
									date='Jul 2023 - Aug 2023'
									type='work'
									tech={["html", "css", "js", "php", "pg"]}
									desc='After high school, I decided to join La prepa des INP in Nancy with the goal of joining an engineering school from the INP group. During this year, I was able to discover several scientific fields in depth despite difficult working conditions due to the COVID-19 lockdown. I was able to discover computer science which pushed me towards my decision to stop my current formation and go towards computer science studies.'
								></TimelineElement>
							)}
						</div>
						<div>
							{locale === "fr" ? (
								<TimelineElement
									title='Alternance - DATE'
									date='Sept 2023 - Juil 2024'
									type='work'
									tech={["react", "next", "pg", "html", "css"]}
									desc="J'ai eu l'occasion de faire ma troisième année de BUT en alternance. Après l'expérience du stage qui s'est bien passée, j'ai décidé, d'un accord commun avec DATE, de faie cette année d'alternance chez eux. Ma mission pour cette année a été dans un premier temps de terminer l'application de chiffrage des projets. Mon deuxième projet était une application permettant de stocker et rechercher des données sur des anciens projets de l'entreprise pour aider lors de la phase d'étude d'un projet. Les employés peuvent aller sur l'application et rechercher en utilisant divers critères techniques ou administratifs pour savoir ce qui a été fait par le passé pour un projet similaire."
								></TimelineElement>
							) : (
								<TimelineElement
									title='Alternance - DATE'
									date='Sept 2023 - Juil 2024'
									type='work'
									tech={["react", "next", "pg", "html", "css"]}
									desc="For my bachelor's third year, I had the opportunity to do a work-study program. After the great experience of my internship, I decided, with DATE, to do this work-study program with them to continue my mission. The first thing I had to do was to finish the application I started during my internship. My second project was an application that allows to stored and research data from the company's project in order to help during the study phase of a project. The employees can go to the application and search by using various technical or administrative criteria to find out what was done in the past for a similar project."
								></TimelineElement>
							)}
						</div>
					</div>
				</div>
				<Circle></Circle>
				<div className='grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto'>
					{locale === "fr" ? (
						<TimelineElement
							title="IMT Mines d'Alès"
							date='Sept 2024 - En cours'
							desc="Après avoir obtenu mon BUT je souhaitais continuer mes études dans une école d'ingénieur en alternance. Mon choix s'est porté sur l'IMT Mines d'Alès car le programme proposée par l'école, notamment dans la spécialité développement logiciel me plaisait. De plus, l'alternance que j'ai trouvé me convient très bien car elle me permettra d'améliorer mes compétences dans le développement web, que j'affectionne, mais aussi à progresser dans des domaines que je maitrise moins."
							type='school'
						></TimelineElement>
					) : (
						<TimelineElement
							title="IMT Mines d'Alès"
							date='Sept 2024 - Present'
							type='school'
							desc="After my Bachelor's degree, I wanted to pursue my studies in an engineering school with a work-study program. I chose IMT Mines d'Alès because the courses offered by the school, especially in the softawer development specility, suit me well. In addition, the company I found for my work-study program is a great fit for me because it will allow me to improve my skills in web development, which I like, but also to progress in areas that I am less familiar with."
						></TimelineElement>
					)}
					<Line></Line>
					{locale === "fr" ? (
						<TimelineElement
							title='Alternance - Un Toit Pour Tous'
							date='Juil 2023 - Août 2023'
							desc="Pour accompagner mes trois années à l'IMT Mines d'Alès, j'ai décidé de faire mon alternance chez Un Toit Pour Tous, une entreprise sociale pour l'habitat gérant plus de 10000 logements. Ma mission à Un Toit Pour Tous est de développer un extranet qui permettra aux locataires d'effectuer différentes démarches administratives en ligne. Ce projet est fait en utilisant Windev et Webdev ainsi qu'une base de données HFSQL. Il permettra aussi aux collaborateurs de l'entreprise de gérer les dossiers des locataires. Plus tard, d'autres projets me seront assignés, notamment sur le développement mobile ou d'autres projets que je gérerai de A à Z en tant que chef de projet."
							type='work'
							tech={["pcsoft", "sql"]}
						></TimelineElement>
					) : (
						<TimelineElement
							title='Work-study - Un Toit Pour Tous'
							date='Jul 2023 - Aug 2023'
							type='work'
							desc="To accompany my three years at IMT Mines d'Alès, I chose to do my work-study program with Un Toit Pour Tous, a social housing company managing more that 10000 housing units. My mission at Un Toit Pour Tous is to develop an extranet that will allow tenants to do various administrative procedures online. This project is made with Windev and Webdev with a HFSQL database. It will also allow the company's employees to manage the tenants' files. Later, other projects will be assigned to me, including mobile development or other projects that I will manage from strat to finish as a project manager."
						></TimelineElement>
					)}
				</div>
				<Circle></Circle>
			</div>
		</div>
	);
}

export default Timeline;
