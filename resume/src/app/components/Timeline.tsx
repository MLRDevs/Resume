// Alex Miller
// Timeline component for about me page

'use client'

import { useState } from "react"; // use states to change whats on the page
import { FaCode, FaGraduationCap, FaBriefcase, FaProjectDiagram, FaUser } from "react-icons/fa";

const Timeline = () => {

    const [filter, setFilter] = useState('');

    const items = [
        { type: 'Skills', title: 'HTML, CSS, Javascript', date: '2015'},
        { type: 'Skills', title: 'Java', date: '2018'},
        { type: 'Personal', title: 'Problem Solving', date: ''},
        { type: 'Education', title: 'Calumet High School', date: 'Sep 2015 - June 2018'},
        { type: 'Projects', title: 'Governor\'s Cyber Challenge', date: '2018'},
        { type: 'Personal', title: 'Adaptability', date: ''},
        { type: 'Education', title: 'Westwood High School', date: 'Sep 2018 - May 2019'},
        { type: 'Skills', title: 'C++', date: '2021'},
        { type: 'Personal', title: 'Efficiency', date: ''},
        { type: 'Skills', title: 'Unity, C#', date: '2022'},
        { type: 'Projects', title: 'RNGeo 2D game', date: '2022'},
        { type: 'Personal', title: 'Teamwork', date:''},
        { type: 'Work', title: 'Isle Royale Ferry Line', date: 'May 2022 - August 2023'},
        { type: 'Skills', title: 'Data Structures', date: '2023'},
        { type: 'Personal', title: 'Communication', date:''},
        { type: 'Skills', title: 'Python', date: '2023'},
        { type: 'Projects', title: 'Python automation', date: '2023'},
        { type: 'Personal', title: 'Organization', date: ''},
        { type: 'Education', title: 'Associate\'s of Science ~ Northern Michigan University', date: '2023'},
        { type: 'Skills', title: 'Networking, REST', date: '2024'},
        { type: 'Skills', title: 'Assembly', date: '2024'},
        { type: 'Personal', title: 'Solo Work', date: ''},
        { type: 'Skills', title: 'Patterns, Agile', date: '2024'},
        { type: 'Skills', title: 'Docker, Node.js', date: '2024'},
        { type: 'Personal', title: 'Active Listening', date: ''},
        { type: 'Work', title: 'Isle Royale Ferry Line', date: 'May 2024 - August 2024'},
        { type: 'Projects', title: 'CTF', date: '2024-2025'},
        { type: 'Personal', title: 'Patience', date: ''},
        { type: 'Skills', title: 'Angular.js, React, Next.js', date: '2025'},
        { type: 'Personal', title: 'Accountability', date: ''},
        { type: 'Education', title: 'Bachelor\'s of Science - Computer Science / Mathematics ~ Northern Michigan University', date: '2025'},
    ];

    const iconmap:any = {
        Skills: <FaCode size={16} />,
        Education: <FaGraduationCap size={16} />,
        Projects: <FaProjectDiagram size={16} />,
        Work: <FaBriefcase size={16} />,
        Personal: <FaUser size={16} />
    }

    const filteritems = filter === 'all'
        ? items
        : items.filter(item => item.type === filter);

    return (
        <div className="">

            {/* dropdown menu */}
            <div className="mb-6">
                <label htmlFor="filter" className="mr-2 font-medium">Filter:</label>
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="border px-2 py-1 rounded text-black bg-white"
                >
                    <option value="all">All</option>
                    <option value="Skills">Tech Skills</option>
                    <option value="Projects">Projects</option>
                    <option value="Work">Work</option>
                    <option value="Education">Education</option>
                    <option value="Personal">Soft Skills</option>
                </select>

            </div>


            {/* Timeline */}
            <ul className="max-h-75 overflow-y-auto w-80 overflow-x-hidden">
                {filteritems.map((item,index) => (
                    <li key={index} className="mb-10 ml-2 relative w-75 overflow-x-hidden">
                        <div className="flex items-center gap-3">
                            <span className="text-xl">{iconmap[item.type]}</span>
                            <p className=" font-bold capitalize">{item.title}</p>
                        </div>
                        <p className=" text-sm text-gray-500">{item.date}</p>
                    </li>
                ))}
            </ul>


        </div>
    );
}


export default Timeline;

