// Alex Miller
// Skils page Resume

import Header from '../components/Header';
import Footer from '../components/Footer';
import Codes from '../components/Codes';
import Guestbook from '../components/Guestbook';
import Tree from '../components/Tree';
import Sorts from '../components/Sorts';

export const metadata = {
    title: 'AM - Skills'
}


export default function SkillsPage() {

    return (
        <div>

            {/* Header at the top */}
            <Header />
            
            {/* Main container */}
            <main className="bg-black text-white">

                {/* blurb about this page */}
                <section className="text-center items-center justify-center flex flex-col py-10">
                    <p className="w-full px-10 md:w-1/2 text-xl py-3">
                        Interactive section visually displaying my skill set and abilities to use my
                        Computer Science knowledge into real world applications. 
                    </p>
                    <div className="h-1 w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
                </section>

                {/* languages with code blocks */}
                <section className="py-10">

                    {/* Title */}                    
                    <h2 className="text-2xl font-semibold border-l-7 border-blue-500 pl-4 mb-4">
                        Program Examples
                        <p className="text-lg text-gray-500 md:max-w-1/2">
                            Demonstrates fundamental Computer Science concepts and techniques 
                            in different languages. The Java and C++ examples were assignments
                            completed during my time at Northern Michigan University. Each file 
                            in the code block contains a description of what the program does.
                        </p>
                    </h2>

                    {/* Code blocks */}
                    <div>
                        <Codes />
                    </div>

                </section>

                {/* Guest book MySql, Next.js, Node.js, Prisma */}
                <section className="py-10">

                    {/* Title */}                    
                    <h2 className="text-2xl font-semibold border-l-7 border-blue-500 pl-4 mb-4">
                        Guestbook
                        <p className="text-lg text-gray-500 md:max-w-1/2">
                            A full stack Guestbook application built from Next.js, TailwindCSS, and Neon. Users
                            can enter their name, email, and company/location which are stored into
                            a PostgreSQL database. This project deepended my understanding of full stack applications
                            with database integration via API routes.
                        </p>
                    </h2>

                    {/* Guessbook Table */}
                    <div>
                        <Guestbook />
                    </div>

                </section>

                

                {/* Trees */}
                <section className="py-10">

                    {/* Title */}
                    <h2 className="text-2xl font-semibold border-l-7 border-blue-500 pl-4 mb-4">
                        Trees
                        <p className="text-lg text-gray-500 md:max-w-1/2">
                            Visualizes tree traversal algorithms. These give a deeper
                            understanding into recursion and other data structures such as 
                            linked lists.
                        </p>
                    </h2>

                    {/* tree structure */}
                    <div>
                        <Tree />
                    </div>

                </section>


                {/* Sorting */}
                <section className="py-10">


                    {/* Title */}
                    <h2 className="text-2xl font-semibold border-l-7 border-blue-500 pl-4 mb-4">
                        Sorting
                        <p className="text-lg text-gray-500 md:max-w-1/2">
                            Demonstrates different sorting algorithms on arrays. These algorithms
                            are crucial for the next step which would be binary search.
                        </p>
                    </h2>

                    {/* Sorting arrays */}
                    <div className="py-10">
                        <Sorts />
                    </div>

                </section>
            </main>

            {/* Footer at the bottomn */}
            <Footer />
        </div>
    );
}