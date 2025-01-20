interface TimelineElementProps {
	desc: string;
	date: string;
	title: string;
	type: string;
}

import { Briefcase, GraduationCapIcon } from "lucide-react";

function TimelineElement({ desc, date, title, type }: TimelineElementProps) {
	return (
		<div className='container flex flex-col border gap-y-2 shadow-md rounded-xl p-4'>
			<div className='flex justify-between items-center'>
				<h2 className='text-white italic font-bold text-2xl border-b w-fit'>
					{title}
				</h2>
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
			<small className='text-lg text-slate-400 font-extralight'>{date}</small>
			<p className='text-xl text-white font-light'>{desc}</p>
		</div>
	);
}

export default TimelineElement;
