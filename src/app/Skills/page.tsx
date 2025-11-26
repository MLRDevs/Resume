// Alex Miller
// Skils page Resume

import Header from '../components/Header';
import Footer from '../components/Footer';
import Codes from '../components/Codes';
import Guestbook from '../components/Guestbook';
import Tree from '../components/Tree';
import Sorts from '../components/Sorts';
import BarTitle from '../components/BarTitle';

export const metadata = {
    title: 'AM - Skills'
}


export default function SkillsPage() {

    return (
        <div className="bg-navy-blue text-ice-white min-h-screen flex flex-col">

            {/* Header at the top */}
            <Header page="Skills"/>

            <div className="flex flex-col justify-center items-center m-10 gap-10">

                <div className="flex flex-col md:flex-row gap-5">

                    {/* title */}
                    <div className="md:w-1/2 flex flex-col items-center gap-5">
                        <div className="text-2xl w-full">
                            <BarTitle title="Skills" />
                        </div>

                        <div className="text-lg text-ice-white">
                            This is an interactive section that showcases my skills. I figured instead 
                            of a list of all my skills, I can physically 
                            <em className="text-icy-blue"> show </em> 
                            them. This in turn not only proves I have these skills, but is also just a fun thing to showcase.
                        </div>
                    </div>

                    {/* guestbook */}
                    <div className="md:w-1/2 flex flex-col items-center gap-5">
                        <div className="text-2xl w-full">
                            <BarTitle title="Guestbook" />
                        </div>
                        <div className="text-lg text-ice-white">
                            This is the Guestbook. There is a form you can fill out and it will 
                            be placed into the PostgreSQL Database and displayed here in the 
                            table. This is a kind of way to mark that you've visited this page 
                            and took a look around. Also displays my backend skills with RESTful APIs.
                        </div>
                    </div>

                </div>

                <Guestbook />

                {/* Algorithms */}
                <div className="w-full">
                    <div className="text-2xl w-full">
                        <BarTitle title="Algorithms" />
                    </div>

                    <div className="flex flex-col justify-center xl:flex-row gap-5">

                        {/* trees */}
                        <div className="xl:w-1/2 flex flex-col gap-3 items-center">
                            <h3 className="w-1/2 text-center bg-gradient-to-r from-pale-green to-neon-teal font-bold text-xl text-black p-5 rounded-xl">Trees</h3>
                            <div className="">
                                <Tree />
                            </div>
                        </div>

                        {/* Sorting */}
                        <div className="xl:w-1/2 flex flex-col gap-3 items-center">
                            <h3 className="w-1/2 text-center bg-gradient-to-r from-pale-green to-neon-teal font-bold text-xl text-black p-5 rounded-xl">Sorting</h3>
                            <div className="">
                                <Sorts />
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>

            {/* Footer at the bottomn */}
            <Footer />
        </div>
    );
}