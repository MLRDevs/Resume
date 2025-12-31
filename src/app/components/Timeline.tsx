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
        { type: 'Languages', title: 'Java', date: '2018' },
        { type: 'Languages', title: 'C++', date: '2021' },
        { type: 'Languages', title: 'C', date: '2024' },
        { type: 'Languages', title: 'C#', date: '2022' },
        { type: 'Languages', title: 'Python', date: '2021' },
        { type: 'Languages', title: 'Smalltalk', date: '2024' },
        { type: 'Languages', title: 'Assembly', date: '2024' },
        { type: 'Languages', title: 'Kotlin', data: '2024'},

        { type: 'Web Development', title: 'HTML', date: '2015' },
        { type: 'Web Development', title: 'CSS', date: '2015' },
        { type: 'Web Development', title: 'Javascript', date: '2015' },
        { type: 'Web Development', title: 'NodeJs', date: '2024' },
        { type: 'Web Development', title: 'ExpressJs', date: '2024' },
        { type: 'Web Development', title: 'Typescript', date: '2025' },
        { type: 'Web Development', title: 'React', date: '2025' },
        { type: 'Web Development', title: 'NextJs', date: '2025' },
        { type: 'Web Development', title: 'Angular', date: '2025' },
        { type: 'Web Development', title: 'TailwindCSS', date: '2025' },
        { type: 'Web Development', title: 'Vercel', date: '2025' },
        { type: 'Web Development', title: 'Neon', date: '2025' },

        { type: 'Tools', title: 'Windows', date: '2015' },
        { type: 'Tools', title: 'Linux', date: '2018' },
        { type: 'Tools', title: 'Github', date: '2020' },
        { type: 'Tools', title: 'Unity', date: '2022' },
        { type: 'Tools', title: 'Docker', date: '2024' },
        { type: 'Tools', title: 'Android Studio', date: '2024' },

        { type: 'Databases', title: 'SQLite', date: '2023' },
        { type: 'Databases', title: 'MySQL', date: '2024' },
        { type: 'Databases', title: 'PostgreSQL', date: '2025' },
        { type: 'Databases', title: 'Prisma', date: '2025' },

        { type: 'Concepts', title: 'Object-Oriented Programming (OOP)', date: '2019' },
        { type: 'Concepts', title: 'Data Structures', date: '2022' },
        { type: 'Concepts', title: 'Networking', date: '2022' },
        { type: 'Concepts', title: 'Agile Development', date: '2024' },
        { type: 'Concepts', title: 'Rest APIs', date: '2024' },
        { type: 'Concepts', title: 'Dynamic Programming', date: '2024' },
        { type: 'Concepts', title: 'Algorithms', date: '2024' },
        { type: 'Concepts', title: 'SaaS / PaaS', date: '2025' },

        { type: 'Soft Skills', title: 'Communication', date: '' },
        { type: 'Soft Skills', title: 'Teamwork', date: '' },
        { type: 'Soft Skills', title: 'Solo Work', date: '' },
        { type: 'Soft Skills', title: 'Problem Solving', date: '' },
        { type: 'Soft Skills', title: 'Adaptability', date: '' },
        { type: 'Soft Skills', title: 'Efficiency', date: '' },
        { type: 'Soft Skills', title: 'Organization', date: '' },
        { type: 'Soft Skills', title: 'Active Listening', date: '' },
        { type: 'Soft Skills', title: 'Patience', date: '' },
        { type: 'Soft Skills', title: 'Accountability', date: '' },

        { type: 'Education', title: 'Calumet High School', date: 'Sep 2015 - June 2018' },
        { type: 'Education', title: 'Westwood High School ~ Diploma', date: 'Sep 2018 - May 2019' },
        { type: 'Education', title: 'Associate\'s of Science', date: 'Northern Michigan University, Graduated: Dec 2023' },
        { type: 'Education', title: 'Bachelor\'s of Science ~ Computer Science, Minor in Mathematics', date: 'Northern Michigan University, Graduated: May 2025' },


        { type: 'Work', title: 'Isle Royale Ferry Line', date: 'Summers 2022-2025'},

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
                        <p className="text-sm text-gray-500">{item.date}</p>
                    </li>
                ))}
            </ul>


        </div>
    );
}


export default Timeline;

