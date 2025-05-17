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
            <main className="">

                {/* blurb about this page */}
                <section className="text-center items-center justify-center flex flex-col py-10">
                    <p className="w-full px-10 md:w-1/2 text-xl py-3">
                        This is an interactive section displaying the skills that I have.
                        Feel free to try some of the interactive sections and fill out the
                        Guestbook.
                    </p>
                    <div className="h-1 w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
                </section>

                {/* languages with code blocks */}
                <section className="py-10">

                    {/* Title */}                    
                    <h2 className="text-2xl font-semibold border-l-7 border-blue-500 pl-4 mb-4">
                        Program Examples
                        <p className="text-lg text-gray-500 md:max-w-1/2">These are some program assignments / one off programs I have done.</p>
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
                            This is the Guestbook. Feel free to fill it out and add your entry to the table, 
                            all entries shown have been made by people who have visited before. Everything is 
                            backend logic with Typescript and Prisma with the data being stored in a PostgreSQL 
                            database via Neon.
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
                            This shows off some tree structures I have used along with sorting 
                            and traversing algorithms, feel free to try the buttons and test it
                            out.
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
                        <p className="text-lg text-gray-500 md:max-w-1/2">This shows some simple sorting algorthims for arrays that I have used</p>
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