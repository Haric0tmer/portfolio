import React from 'react'

interface TimelineElementProps{
   desc: string;
    date: string;
    title: string;
}

function TimelineElement({  desc, date, title }: TimelineElementProps) {
  return (
    <div className="container flex flex-col border gap-y-2 shadow-md rounded-xl p-4">
        <h2 className='text-blue-800 font-bold text-xl border-b w-fit'>{title}</h2>
        <small className='text-sm text-white'>{date}</small>
        <p className='text-lg text-white font-light'>{desc}</p>
    </div>
    
  )
}

export default TimelineElement