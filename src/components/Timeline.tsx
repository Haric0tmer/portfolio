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
							type='work'
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
									date='Juil 2023 - Août 2023'
									desc="Pendant ma deuxième année de BUT, j'ai eu a faire un stage d'une durée de 3 mois ayant pour but de donner un avant-goût du monde du travail. Pour ce stage j'ai travaillé chez DATE, une PME ayant pour coeur de métier la fabrication d'échangeur thermique à forte téchnicité, faits sur mesure pou des clients du domaine du spatial, de la défense ou encore de l'industrie. Ma mission chez DATE était de réaliser une application permettant de chiffrer un projet en prennant en compte les différents postes de dépenses allant de la main d'oeuvre à la matière première. J'ai pu découvrir le monde de l'industrie et de l'entreprise, mais aussi apprendre à travailler en autonomie et à gérer un projet de A à Z."
									type='work'
								></TimelineElement>
							) : (
								<TimelineElement
									title='Intern - DATE'
									date='Jul 2023 - Aug 2023'
									type='work'
									desc='During the second year of my bachelor, I had to complete an internship of 3 months to get a taste of the working world. For this internship, I worked at DATE, a SME specialized in the manufacturing of high-end custom-made heat exchangers for clients in the space, defense or industry sectors. My mission at DATE was to create an application to estimate the cost of a project by taking into account the different expenses ranging from labor to raw materials. I was able to discover the world of industry and business, but also learn to work independently and manage a project from start to finish.'
								></TimelineElement>
							)}
						</div>
						<div>
							{locale === "fr" ? (
								<TimelineElement
									title='Alternance - DATE'
									date='Sept 2023 - Juil 2024'
									type='work'
									desc="J'ai eu l'occasion de faire ma troisième année de BUT en alternance. Après l'expérience du stage qui s'est bien passée, j'ai décidé, d'un accord commun avec DATE, de faie cette année d'alternance chez eux. Ma mission pour cette année a été dans un premier temps de terminer l'application de chiffrage des projets. Mon deuxième projet était une application permettant de "
								></TimelineElement>
							) : (
								<TimelineElement
									title='Alternance - DATE'
									date='Sept 2023 - Juil 2024'
									type='work'
									desc='blablablabal blabejr jlajfb ljkqsbjf sdhfqhfjk hdslqkfhjshqlfkhj'
								></TimelineElement>
							)}
						</div>
					</div>
				</div>
				<Circle></Circle>
				{locale === "fr" ? (
					<TimelineElement
						title="IMT Mines d'Alès"
						date='Sept 2024 - En cours'
						desc="Après le lycée, j'ai fait le choix d'intégrer la prépa des INP de Nancy dans le but de rejoindre une école d'ingénieur du groupe INP. Durant cette année, j'ai pu découvrir plusieurs domaine scientifiques en profondeur malgrès des conditions de travail compliquées par le confinement du COVID-19. J'ai notamment pu découvrir l'informatique ce qui m'a poussé vers ma décision d'arrêter la prépa pour m'orienter vers des études d'informatique."
						type='school'
					></TimelineElement>
				) : (
					<TimelineElement
						title="IMT Mines d'Alès"
						date='Sept 2024 - Present'
						type='school'
						desc='After high school, I decided to join La prepa des INP in Nancy with the goal of joining an engineering school from the INP group. During this year, I was able to discover several scientific fields in depth despite difficult working conditions due to the COVID-19 lockdown. I was able to discover computer science which pushed me towards my decision to stop my current formation and go towards computer science studies.'
					></TimelineElement>
				)}
				{locale === "fr" ? (
					<TimelineElement
						title='Pharmacie de la Commanderie'
						date='Juil 2023 - Août 2023'
						desc="Après le lycée, j'ai fait le choix d'intégrer la prépa des INP de Nancy dans le but de rejoindre une école d'ingénieur du groupe INP. Durant cette année, j'ai pu découvrir plusieurs domaine scientifiques en profondeur malgrès des conditions de travail compliquées par le confinement du COVID-19. J'ai notamment pu découvrir l'informatique ce qui m'a poussé vers ma décision d'arrêter la prépa pour m'orienter vers des études d'informatique."
						type='work'
					></TimelineElement>
				) : (
					<TimelineElement
						title='Pharmacie de la Commanderie'
						date='Jul 2023 - Aug 2023'
						type='work'
						desc='After high school, I decided to join La prepa des INP in Nancy with the goal of joining an engineering school from the INP group. During this year, I was able to discover several scientific fields in depth despite difficult working conditions due to the COVID-19 lockdown. I was able to discover computer science which pushed me towards my decision to stop my current formation and go towards computer science studies.'
					></TimelineElement>
				)}

				{locale === "fr" ? (
					<TimelineElement
						title='Alternance - Un Toit Pour Tous'
						date='Juil 2023 - Août 2023'
						desc="Après le lycée, j'ai fait le choix d'intégrer la prépa des INP de Nancy dans le but de rejoindre une école d'ingénieur du groupe INP. Durant cette année, j'ai pu découvrir plusieurs domaine scientifiques en profondeur malgrès des conditions de travail compliquées par le confinement du COVID-19. J'ai notamment pu découvrir l'informatique ce qui m'a poussé vers ma décision d'arrêter la prépa pour m'orienter vers des études d'informatique."
						type='work'
					></TimelineElement>
				) : (
					<TimelineElement
						title='Work-study - Un Toit Pour Tous'
						date='Jul 2023 - Aug 2023'
						type='work'
						desc='After high school, I decided to join La prepa des INP in Nancy with the goal of joining an engineering school from the INP group. During this year, I was able to discover several scientific fields in depth despite difficult working conditions due to the COVID-19 lockdown. I was able to discover computer science which pushed me towards my decision to stop my current formation and go towards computer science studies.'
					></TimelineElement>
				)}
			</div>
		</div>
	);
}

export default Timeline;
