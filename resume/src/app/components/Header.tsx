// Alex Miller
// Header for each page

import Link from "next/link";
import { FaHome, FaFile } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { FaProjectDiagram } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


const Header = () => {
    return (
        <header className="bg-gray-900 flex flex-col justify-center items-center">
            <h1 className="text-6xl px-10 py-5">Alex Miller</h1>
            <nav className="flex space-x-10 py-5">
                
                {/* landing page */}
                <Link href="/" title="Home">
                    <FaHome size={32} color="white"/>
                </Link>
                
                {/* skills */}
                <Link href="/skills" title="Skills">
                    <GiSkills size={32} color="white" />
                </Link>

                {/* projects */}
                <Link href="/projects" title="Projects">
                    <FaProjectDiagram size={32} color="white" />
                </Link>

                {/* about me */}
                <Link href="/about" title="About Me">
                    <CgProfile size={32} color="white" />
                </Link>

                {/* document resume */}
                <a href="/Miller_Alex_Resume.pdf" title="Resume PDF">
                    <FaFile size={32} color="white" />
                </a>
            </nav>
        </header>
    );
};

export default Header;

