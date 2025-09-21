// Alex Miller
// Projects page Resume

import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/Projectcard';

export const metadata = {
    title: 'AM - Projects'
}

export default function ProjectsPage() {
    return (
        <div>
            
            {/* header at top of the page */}
            <Header />

            {/* main section */}
            <main className="bg-black text-white">

                {/* Title */}
                <section className="text-center items-center justify-center flex flex-col py-10">
                    <p className="w-full px-10 md:w-1/2 text-xl py-3">
                        This section highlights the projects I am most proud in that are super 
                        involved but does not include simple programs like shown on the Skills section.
                    </p>
                    <div className="h-1 w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
                </section>


                {/* CTF */}
                <section>
                    <ProjectCard 
                        title="Senior Project - Capture The Flag Cybersecurity"
                        description="
                            This project was for the Senior Project course Winter 2025 at Northern
                            Michigan University. It involved creating a CTF platform originally for 
                            the Cybersecurity professor at Northern Michigan. It is a full stack site
                            with an Angular.js frontend with Node.js and MySql backend. It used Docker
                            containers as a terminal for students to use and find the flags. See more
                            on the Github link below which also includes our paper detailing more about
                            the project itself:
                        "
                        link="https://github.com/MLRDevs/CTF"
                    />
                </section>

                {/* Northern Kyber */}
                <section>
                    <ProjectCard
                        title="Northern Kyber | Capture The Flag Platform"
                        description="
                            From Senior Project to SaaS platform, the project mentioned above came to fruition. 
                            The tech stack and everything was changed to make it easier to manage the source code 
                            and also to allow more features than before. It has a react + nextjs frontent along with 
                            a nodejs backend for the Docker containers and postgreSQL as a database. This goes way 
                            beyond what the Senior Project is as we added more to allow more customization.
                        "
                        link="https://www.northernkyber.com/"
                    />
                </section>

                {/* This site */}
                <section>
                    <ProjectCard
                        title="Resume - A Full Stack Site"
                        description="
                            This very site has been a big project of mine. The purpose was instead of
                            a traditional resume with a list of skills, I could physically show them off.
                            This not only shows that I know the skills that I do have, but that I can
                            utilize them in a specific use case if need be.
                        "
                        link="https://github.com/MLRDevs/Resume"
                    />
                </section>

                {/* Task Manager */}
                <section>
                    <ProjectCard
                        title="Task Manager"
                        description="
                            Create and move tasks from different sections based on completion (ToDo, In 
                            Progress, Done). This project deepened my understand of React and the different
                            libraries such as DnDKit. As well as was my introduction to Axios for API calls 
                            along with using Python as a backend language with Django.
                        "
                        link="
                        https://github.com/MLRDevs/CS_Projects/tree/master/Projects/TaskManager"
                    />
                </section>
                
            </main>

            {/* footer at the bottom of the page */}
            <Footer />
        </div>
    );
}