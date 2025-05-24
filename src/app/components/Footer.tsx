// Alex Miller
// Footer for each page

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-gray-900 flex flex-col justify-center items-center">
            <div className="flex space-x-10 py-5">
                {/* github */}
                <a href="https://github.com/MLRDevs/CS_Projects">
                    <FaGithub size={32} color="white" />
                </a>

                {/* linkedin */}
                <a href="https://www.linkedin.com/in/alex-miller-1210ab21b/">
                    <FaLinkedin size={32} color="white" />
                </a>

                {/* email */}
                <a href="mailto:milleral@nmu.edu">
                    <MdEmail size={32} color="white"/>
                </a>
            </div>

            {/* bottome of footer */}
            <div className="py-6 text-center text-white">
                <div className="flex justify-center items-center">
                   <MdPhone size={16} color="white" />
                   <p className="px-3 py-1">(906) 235-4870</p>
                </div>
                
                <p>Developed 2025</p>
            </div>
        </footer>
    );
};

export default Footer;