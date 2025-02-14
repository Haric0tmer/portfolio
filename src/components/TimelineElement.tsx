// TODO Interpolation de la couleur dans les classes CSS pour la border

interface TimelineElementProps {
	desc: string;
	date: string;
	title: string;
	type: string;
	tech?: string[];
	color: string;
}
import jsLogo from "../assets/js.svg";
import cssLogo from "../assets/css.svg";
import htmlLogo from "../assets/html.svg";
import phpLogo from "../assets/php.svg";
import pgLogo from "../assets/pg.svg";
import nextlogo from "../assets/next.svg";
import reactLogo from "../assets/react.svg";
import pcsoftLogo from "../assets/pcsoft.svg";
import sqlLogo from "../assets/sql.svg";
import { Briefcase, GraduationCapIcon } from "lucide-react";
import clsx from "clsx";

function TimelineElement({
	desc,
	date,
	title,
	type,
	tech,
	color,
}: TimelineElementProps) {
	return (
		<div
			className={clsx(
				"container flex flex-col gap-y-2 shadow-md rounded-xl p-4 border",
				{
					"border-red-400": color === "red",
					"border-yellow-200": color === "yellow",
					"border-cyan-300": color === "cyan",
					"border-gray-400": !["red", "blue", "green"].includes(color), // Couleur par défaut
				}
			)}
		>
			<div className='flex flex-col justify-between md:flex-row md:items-center'>
				<h2 className='text-white italic font-bold text-lg laptop:text-2xl sm:text-xl border-b w-fit'>
					{title}
				</h2>
				<div className='flex mt-2 md:mt-0 md:justify-evenly md:items-center'>
					{tech &&
						tech.map((t) => {
							let logo = undefined;
							switch (t) {
								case "html":
									logo = htmlLogo;
									break;
								case "css":
									logo = cssLogo;
									break;
								case "js":
									logo = jsLogo;
									break;
								case "php":
									logo = phpLogo;
									break;
								case "pg":
									logo = pgLogo;
									break;
								case "next":
									logo = nextlogo;
									break;
								case "react":
									logo = reactLogo;
									break;
								case "pcsoft":
									logo = pcsoftLogo;
									break;
								case "sql":
									logo = sqlLogo;
									break;
								default:
									break;
							}
							return (
								<img
									src={logo}
									alt={`logo${t}`}
									className='md:w-[32px] md:h-[32px] w-[28px] h-[28px] mx-1'
								/>
							);
						})}
					{type === "school" ? (
						<GraduationCapIcon
							size={32}
							className='rounded-full border border-white text-white p-1'
						/>
					) : (
						<Briefcase
							size={32}
							className='rounded-full border border-white text-white p-1'
						/>
					)}
				</div>
			</div>
			<small className='text-sm sm:text-md laptop:text-lg text-slate-300 font-extralight'>
				{date}
			</small>
			<p className='text-md sm:text-lg laptop:text-xl text-white font-light'>
				{desc}
			</p>
		</div>
	);
}

export default TimelineElement;
