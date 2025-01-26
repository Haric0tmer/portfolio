interface TimelineElementProps {
	desc: string;
	date: string;
	title: string;
	type: string;
	tech?: string[];
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

function TimelineElement({
	desc,
	date,
	title,
	type,
	tech,
}: TimelineElementProps) {
	return (
		<div className='container flex flex-col border gap-y-2 shadow-md rounded-xl p-4'>
			<div className='flex justify-between items-center'>
				<h2 className='text-white italic font-bold text-2xl border-b w-fit'>
					{title}
				</h2>
				<div className='flex justify-evenly items-center'>
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
									className='w-[32px] h-[32px]'
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
			<small className='text-lg text-slate-300 font-extralight'>{date}</small>
			<p className='text-xl text-white font-light'>{desc}</p>
		</div>
	);
}

export default TimelineElement;
