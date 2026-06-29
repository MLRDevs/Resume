// Alex Miller
// Landing page Resume


import Header from './components/Header';
import Footer from './components/Footer';
import { FaCode, FaServer, FaTools, FaClipboardCheck } from "react-icons/fa";
import BarTitle from './components/BarTitle';
import Link from 'next/link';

export const metadata = {
  title: 'AM - Home'
}

const HomePage = () => (
  <div className="flex flex-col justify-center min-h-screen bg-navy-blue">

    {/* The Header appears at the top */}
    <Header page="Home" />

    <div className="flex flex-col justify-center items-center m-10 gap-10">

      <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">

        {/* image of me */}
        <div className="">
          <img
            src="/images/me.jpg"
            alt="Picture of Me"
            className="w-64 h-64 sm:w-96 sm:h-96 object-cover rounded-full"
          />
        </div>

        {/* introduction */}
        <div className="flex flex-col text-3xl text-center sm:w-3/4 md:w-1/2">
          <div className="text-ice-white">
            Hello, I'm Alex I'm a  
          </div>
          <div className="flex flex-col justify-center items-center">
            <BarTitle title="Software Engineer" />
            <div className="text-ice-white text-xl">
              Computer Science graduate with hands-on experience building and deploying full stack applications 
	            across multiple technology stacks. Eager to apply my proven adaptability, communication, and teamwork 
	            skills to build meaningful software.
            </div>
            <Link 
              href='/Miller_Alex_Resume.pdf'
              title="Resume"
              className="p-2 rounded-xl text-lg font-bold mt-10 text-ice-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 transition"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>

      {/* sections */}
      <div className="flex flex-col justify-center items-center gap-10 text-left text-2xl mt-10">
        
        <div className="sm:w-1/2 m-10">
          <BarTitle title="Quick Facts About Me" />
          <div className="text-ice-white font-normal text-lg flex flex-col justify-center items-center gap-10">
            <ul className="list-disc">
              <li>Born and raised in the Upper Peninsula of Michigan</li>
              <li>
                Hockey fan
                <span className="text-red-500 font-bold"> #LGRW </span>
              </li>
              <li>Build stuff like this in my spare time, always learning</li>
            </ul>
            <Link
              href="/About"
              title="About Me"
              className="p-2 rounded-xl text-ice-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 transition font-bold w-50"
            >
              Check out more here
            </Link>
          </div>
        </div>

        <div className="text-ice-white sm:w-1/2 m-10">
          <BarTitle title="About This Site" />
          <div className="text-lg">
            This site itself is a big project of mine. It was first built my first time using React and Nextjs. 
            Since then, my skills have improved and it has been updated a few times reflecting those improved skills. 
            This site is built with the following technologies:
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-15 justify-center">  
            <div className="flex flex-col items-center">
              <h2 className="flex font-bold text-neon-teal items-center">
                <FaCode className="mr-2" /> Frontend
              </h2>
              <ul className="list-disc font-normal text-lg">
                <li>React</li>
                <li>Next.js</li>
                <li>TailwindCSS</li>
              </ul>
            </div>

            <div className="flex flex-col items-center">
              <h2 className="flex font-bold text-neon-teal items-center">
                <FaServer className="mr-2" /> Backend
              </h2>
              <ul className="list-disc font-normal text-lg">
                <li>Next.js</li>
                <li>PostgreSQL + Prisma</li>
                <li>RESTful APIs</li>
              </ul>
            </div>

            <div className="flex flex-col items-center">
              <h2 className="flex font-bold text-neon-teal items-center">
                <FaClipboardCheck className="mr-2" /> Production
              </h2>
              <ul className="list-disc font-normal text-lg">
                <li>Vercel</li>
                <li>Neon</li>
              </ul>
            </div>
          </div>
        </div>
        

        
      </div>
      

    </div>

    {/* The Footer appears at the bottom */}
    <Footer />
  </div>
);

export default HomePage;
