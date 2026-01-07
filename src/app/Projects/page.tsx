// Alex Miller
// Projects page Resume

import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/Projectcard';
import BarTitle from '../components/BarTitle';
import Head from 'next/head';

export const metadata = {
    title: 'AM - Projects'
}

export default function ProjectsPage() {
    return (
        <div className="bg-navy-blue text-ice-white min-h-screen flex flex-col">
            
            {/* header at top of the page */}
            <Header page="Projects"/>

            {/* main section */}
            <div className="flex flex-col justify-center items-center m-10 gap-20">

                {/* blurb about projects */}
                <div className="md:w-1/2 flex flex-col items-center gap-5">
                    <div className="text-2xl w-full">
                        <BarTitle title="Projects" />
                    </div>

                    <div className="text-lg text-ice-white">
                        This page shows all of my polished projects. These projects are more involved 
                        than the one off programs that I have made for academic courses. Those ones you can find  
                        <span> <a href="https://github.com/MLRDevs/CS_Projects" className="text-neon-teal hover:text-blue-500 underline font-bold">here</a>. </span>
                        There are others I have but are not fully done or cleaned up such as a web scraper I built 
                        using Python to curate a list of movies that I can then search through.

                    </div>
                </div>

                {/* list of projects */}
                <div className="flex flex-col justify-center items-center gap-20">
                    <ProjectCard
                        title='Capture The Flag | Cybersecurity Senior Project | 2024'
                        list={
                            [
                                'Angular, Node.js, Docker, MySQL, Typescript, Javascript',
                                'first full stack project', 
                                'built for a Cybersecurity professor teaching hands on using CTFs', 
                                'used Agile Methodology for SDLC',
                                'real time interaction with Docker terminal',
                                'login authentication',
                                'dynamic creation / deletion of Docker containers',
                                'full UI for creating and managing the file system inside the environment'
                            ]
                        }
                        description='This project was a collaboration with a friend of mine for a course at Northern Michigan University. The goal of the project was to make creating, managing, and using CTFs easier and more convenient for educators teaching them. One of the main issues with most CTFs was how the flag hash was the same for each user. This project combats that by using dynamic hashes for each student which neutralizes cheating among students.'
                        link='https://github.com/MLRDevs/CTF'
                    />
                    <ProjectCard
                        title='Northern Kyber | Cybersecurity SaaS Platform | 2025'
                        list={
                            [
                                'React, Next.js, TailwindCSS, Typescript, Javascript, Node.js, Docker, PostgreSQL, Vercel, Neon, Stripe',
                                'added features that were not present in the Senior Project: editing flags, creating classes, more stats, custom commands, etc',
                                'made the flag creation easier by eliminating the Image step, including a new bash script which runs to initialize each environment and is customizable',
                                'new styles with the new React + TailwindCSS stack, makes it easier to manage and change styling',
                                'first time using a Stripe payment system',
                                'made Docker container creation / deletion more seamless',
                                'better user sessions / authentication, including more secure APIs',
                                'included Documentation for better UX'
                            ]
                        }
                        description='This was a re-engineered production ready version of the Senior Project. After getting great feedback on the Senior Project, we decided to give it a shot and build a full blown SaaS platform. We switched up the stack, added more features than before, made flag creation easier and more streamlined, and many many other improvements along with making it production ready.'
                        link='https://northernkyber.com'
                    />
                    <ProjectCard
                        title="Portfolo | Full Stack Site | 2025"
                        list={
                            [
                                'React, Next.js, TailwindCSS, PostgreSQL, Vercel, Neon',
                                'wanted this to be more of I just know this and this. I wanted this to be a way of me pysically showing what I know and can do',
                                'I am always learning and adding to this site. I learned a lot working on Northern Kyber and have added some techniques from that into this'
                            ]
                        }
                        description='This very site has been a long time project of mine. I have always wanted to have my very own site to display what I know and can do. After getting introduced to React by working on some of Northern Kyber I knew I had to do this first. This is my first deployed site and still gets updated to this day.'
                        link='https://github.com/MLRDevs/Resume'
                    />
                    <ProjectCard
                        title="RNGeo | Google Play Mobile Game | 2022"
                        list={
                            [
                                'C# with the Unity game engine',
                                'no longer available on the Google Play store',
                                'colors of the background, pipes, ground, and player would randomly change hence the RNG in the name',
                                'collecting coins during runs allowed you to buy items from the shop: player shapes, skins, powerups',
                                'the player character was basic shapes: circle, square, hexagon, etc which works with the Geo part of the name',
                                'powerups included: a wagon letting you phase through pipes, a fedora making you go invisible for a little while, a skull that would instantly stop the run, a money sign doubling coin amounts for the run',
                                'internal storage saving',
                                'Unity ads integrated to appear every 10 or so games'
                            ]
                        }
                        description='Early into my CS career, I was interested in making games like many people in CS. This was my first and only one I have published. It was for me to learn the Unity game engine and C#. It was a simple Flappy Bird clone with some changes and features. The best part about it was that was when I learned that game development, like many other specific CS professions, are a lot more than just programming. This was a way for me to open up the creative side of me with pixel art and really nail the visuals of the game itself which you do not think a lot of when you think of CS.'
                    />
                </div>


            </div>

            {/* footer at the bottom of the page */}
            <Footer />
        </div>
    );
}