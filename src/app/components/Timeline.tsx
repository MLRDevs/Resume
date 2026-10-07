// Alex Miller
// Timeline component for about me page

'use client'

import { useState, useEffect } from "react"; // use states to change whats on the page
import { FaCode, FaGraduationCap, FaAward, FaDatabase, FaRegLightbulb, FaTools, FaBriefcase, FaProjectDiagram, FaUser } from "react-icons/fa";
import { IoTerminalOutline } from 'react-icons/io5';

const Timeline = () => {

    const [filter, setFilter] = useState('');

    useEffect(() => {
        setFilter('All');
    },[]);

    const items = [

        { tier: 'Foundation', type: 'Language', title: 'C++' },
        { tier: 'Foundation', type: 'Language', title: 'Java' },
        { tier: 'Foundation', type: 'Web Development', title: 'HTML' },
        { tier: 'Foundation', type: 'Web Development', title: 'Javascript' },
        { tier: 'Foundation', type: 'Soft Skills', title: 'Adaptability' },
        { tier: 'Foundation', type: 'Language', title: 'Typescript' },
        { tier: 'Foundation', type: 'Language', title: 'Java' },
        { tier: 'Foundation', type: 'Tools', title: 'Windows' },
        { tier: 'Foundation', type: 'Soft Skills', title: 'Efficiency' },
        { tier: 'Foundation', type: 'Concepts', title: 'REST APIs' },
        { tier: 'Foundation', type: 'Soft Skills', title: 'Problem Solving' },
        { tier: 'Foundation', type: 'Concepts', title: 'Object-Orientated Programming (OOP)' },
        { tier: 'Foundation', type: 'Concepts', title: 'Data Structures' },
        { tier: 'Foundation', type: 'Soft Skills', title: 'Accountability' },
        { tier: 'Foundation', type: 'Tools', title: 'Github' },
        { tier: 'Foundation', type: 'Tools', title: 'Linux' },
        { tier: 'Foundation', type: 'Soft Skills', title: 'Teamwork' },
        { tier: 'Foundation', type: 'Soft Skills', title: 'Patience' },
        { tier: 'Foundation', type: 'Soft Skills', title: 'Active Listening' },

        { tier: 'Execution', type: 'Web Development', title: 'CSS' },
        { tier: 'Execution', type: 'Web Development', title: 'Node.js' },
        { tier: 'Execution', type: 'Web Development', title: 'React' },
        { tier: 'Execution', type: 'Databases', title: 'SQLite' },
        { tier: 'Execution', type: 'Databases', title: 'MySQL' },
        { tier: 'Execution', type: 'Databases', title: 'PostgreSQL' },
        { tier: 'Execution', type: 'Databases', title: 'Prisma' },
        { tier: 'Execution', type: 'Concepts', title: 'Networking' },
        { tier: 'Execution', type: 'Web Development', title: 'Next.js' },
        { tier: 'Execution', type: 'Web Development', title: 'Express.js' },
        { tier: 'Execution', type: 'Tools', title: 'Unity' },
        { tier: 'Execution', type: 'Web Development', title: 'TailwindCSS' },
        { tier: 'Execution', type: 'Web Development', title: 'Vercel' },
        { tier: 'Execution', type: 'Web Development', title: 'Neon' },
        { tier: 'Execution', type: 'Soft Skills', title: 'Solo Work' },
        { tier: 'Execution', type: 'Soft Skills', title: 'Organization' },

        { tier: 'Practice', type: 'Language', title: 'C#' },
        { tier: 'Practice', type: 'Language', title: 'Python' },
        { tier: 'Practice', type: 'Tools', title: 'Docker' },
        { tier: 'Practice', type: 'Concepts', title: 'Algorithms' },
        { tier: 'Practice', type: 'Concepts', title: 'Agile Development' },

        { tier: 'Growing', type: 'Concepts', title: 'SaaS / PaaS' },
        { tier: 'Growing', type: 'Concepts', title: 'Dynamic Programming' },
        { tier: 'Growing', type: 'Tools', title: 'MacOS' },

        { tier: 'Exposure', type: 'Languages', title: 'Kotlin' },
        { tier: 'Exposure', type: 'Language', title: 'Assembly' },
        { tier: 'Exposure', type: 'Language', title: 'Smalltalk' },
        { tier: 'Exposure', type: 'Language', title: 'C' },
        { tier: 'Exposure', type: 'Tools', title: 'Android Studios' },
        { tier: 'Exposure', type: 'Language', title: 'Rust' },
        { tier: 'Exposure', type: 'Web Development', title: 'Angular.js' },



        { type: 'Education', title: 'Calumet High School', date: 'Sep 2015 - June 2018' },
        { type: 'Education', title: 'Westwood High School ~ Diploma', date: 'Sep 2018 - May 2019' },
        { type: 'Education', title: 'A.S of Science, General Education', date: 'Northern Michigan University | Graduated: Dec 2023' },
        { type: 'Education', title: 'B.S of Science, Computer Science minor in Mathematics', date: 'Northern Michigan University | Graduated: May 2025' },


        { type: 'Work', title: 'Isle Royale Ferry Line', role: 'Crew Member', date: 'Summers 2022-2025'},
        { type: 'Work', title: 'iBeta Quality Assurance', role: 'Biometrics Tester', date: 'March 2026 - present'},

        { type: 'Awards', title: 'Michigan Governor\'s High School Cyber Challenge', date: '2018' },

    ];

    const iconmap:any = {
        Languages: <IoTerminalOutline size={24} />,
        'Web Development': <FaCode size={24} />,
        Tools: <FaTools size={24} />,
        Databases: <FaDatabase size={24} />,
        Concepts: <FaRegLightbulb size={24} />,
        Education: <FaGraduationCap size={24} />,
        Work: <FaBriefcase size={24} />,
        'Soft Skills': <FaUser size={24} />,
        Awards: <FaAward size={24} />
    }

    const filteritems = filter === 'All'
        ? items
        : items.filter(item => item.type === filter);

    const FilterTypes:string[] = [
        'Languages', 
        'Web Development', 
        'Tools', 
        'Databases', 
        'Concepts', 
        'Soft Skills', 
        'Education', 
        'Work', 
        'Awards',
    ]

    return (
        <div className="w-80 md:w-150 2xl:w-full flex flex-col justify-center items-center gap-5">

            {/* dropdown menu */}
            <div className="mb-6">
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="border px-2 py-1 rounded-xl text-ice-white font-bold bg-neon-teal/40"
                >
                    <option className="bg-navy-blue font-bold" value="All">All</option>
                    {FilterTypes.map((t:any) => (
                        <option key={t} className="bg-navy-blue font-bold" value={t} >{t}</option>
                    ))}
                </select>

            </div>


            {/* Timeline */}
            <ul className="h-75 m-5 overflow-y-auto w-80 md:w-150 2xl:w-full overflow-x-hidden">
                {filteritems.map((item,index) => (
                    <li key={index} className="mt-5 relative w-full overflow-x-auto">
                        <div className="flex items-center gap-3">
                            <span className="text-xl">{iconmap[item.type]}</span>
                            <p className=" font-bold capitalize">{item.title}</p>
                        </div>
                        {item.role
                            ? <p className="text-sm text-gray-500">{item.role} | {item.date} </p>
                            : <p className="text-sm text-gray-500">{item.date}</p>
                        }
                    </li>
                ))}
            </ul>


        </div>
    );
}


export default Timeline;

