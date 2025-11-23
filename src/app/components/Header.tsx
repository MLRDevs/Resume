// Alex Miller
// Header for each page

'use client';

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState, useRef, useEffect } from 'react';

const pages = [
    'Home', 'Skills', 'About', 'Projects'
]



export default function Header({ page }: { page:string }) {

    const [menu, setMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState('0px');

    useEffect(() => {
        if (menuRef.current) {
            setHeight(menu ? `${menuRef.current.scrollHeight}px` : '0px');
        }
    }, [menu]);

    // close menu if window size changes
    useEffect(() => {
        window.addEventListener("resize", () => setMenu(false));
    });

    // handle the menu movement
    function handleMenu() {
        setMenu(!menu);
    }

    // all of the links
    const Links = () => {
        return (
            <div className="text-ice-white font-bold text-xl flex flex-row sm:flex-row gap-10 sm:gap-5">
                {pages.map((p:any) => (
                    <Link 
                        key={p}
                        href={`${p !== 'Home' ? `/${p}` : '/'}`}
                        title={`${p}`}
                        className={`
                            ${page === p ? 'text-pale-green sm:text-neon-teal' : 'hover:text-pale-green sm:hover:text-neon-teal'} 
                            text-base sm:text-xl
                        `}
                    >
                        {p}
                    </Link>
                ))}
            </div>
        )
    }

    return (
        <div className="">

            <div className="bg-gray-900 flex flex-col justify-center items-center p-10">
                
                {/* small screens with icon */}
                <div className="sm:hidden flex flex-row gap-10 justify-items items-center text-4xl">
                    <div className="text-ice-white font-bold">
                        Alex Miller
                    </div>
                    {menu 
                        ? (
                            <IoClose
                                onClick={handleMenu}
                                size={32}
                                className="text-ice-white"
                            />
                        )
                        : (
                            <GiHamburgerMenu
                                onClick={handleMenu}
                                size={32}
                                className="text-ice-white"
                            />
                        )
                    }
                </div>

                {/* larger screens */}
                <div className="hidden sm:block">
                    <div className="flex flex-row justify-center items-center gap-15">
                        <div className="text-ice-white text-xl font-bold">
                            Alex Miller
                        </div>
                        <Links />
                    </div>
                </div>
            </div>

            {/* dropdown menu */}
            <div 
                ref={menuRef} 
                style={{ height, transition: 'height 600ms ease' }} 
                className="bg-navy-blue text-center h-0 overflow-hidden flex flex-col items-center"
            >
                <div className="p-1 rounded-xl w-3/4 bg-pale-green m-5"></div>
                <Links />
                <div className="p-1 rounded-xl w-3/4 bg-pale-green m-5"></div>
            </div> 
            
        </div>
    )
};

