// Alex Miller
// Landing page Resume


import Header from './components/Header';
import Footer from './components/Footer';
import { FaCode, FaServer, FaTools } from "react-icons/fa";

const HomePage = () => (
  <div className="flex flex-col min-h-screen">
    {/* The Header appears at the top */}
    <Header />
    
    {/* main container */}
    <main className="flex flex-col md:flex-row items-start items-center justify-center space-x-10 py-10 px-10">

      {/* image of me */}
      <div className="flex justify-center">
        <img
          src="/images/me.jpg"
          alt="picture of me"
          className="w-64 h-64 object-cover rounded-full"
        />
      </div>

      <div className="flex flex-col py-5">

        {/* profile lines */}
        <section className="max-w-xl">
          Ambitious and adaptable individual with strong communication and problem 
          solving skills. Eager and ready to apply knowledge and skills towards complex 
          challenges building software solutions. 
        </section>

        {/* blub about me */}
        <section className="py-5">
          <p className="font-bold py-1">Some quick facts about me:</p>
          <ul className="list-disc px-5">
            <li>Bachelor's of Science from Northern Michigan University</li>
            <li>Born and raised in Calumet, MI</li>
            <li>Build stuff like this in my spare time, always learning</li>
          </ul> 
        </section>

        {/* about website */}
        <section className="py-5 max-w-xl">
          <div className="py-1">
            This website itself is a project I've made that involves just
            about everything I have currently learned, feel free to browse 
            using the links in the header. If you want an old school Resume
            document, that is also available in the header. This site is 
            broken down into these skills:
          </div>
          
          {/* tools/skills used */}
          <section className="py-5 flex">

            {/* frontend */}
            <section>
              <h3 className="flex items-center text-lg font-bold">
                <FaCode className="mr-2" /> Frontend
              </h3>
              <ul className="list-disc px-10">
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>HTML5</li>
              </ul>
            </section>

            {/* backend */}
            <section>
              <h3 className="flex items-center text-lg font-bold">
                <FaServer className="mr-2" /> Backend
              </h3>
              <ul className="list-disc px-10">
                <li>Node.js</li>
                <li>PostgreSQL + Prisma</li>
                <li>RESTful APIs</li>
              </ul>

            </section>
          </section>
        </section>
      </div>
    </main>

    {/* The Footer appears at the bottom */}
    <Footer />
  </div>
);

export default HomePage;
