// Alex Miller
// About page Resume

"use client"

import Header from '../components/Header';
import Footer from '../components/Footer';
import Timeline from '../components/Timeline';
import Head from 'next/head';
import dynamic from "next/dynamic";
import BarTitle from '../components/BarTitle';


const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function AboutPage() {

    
    return(

        <>
            <Head>
                <title>AM - About</title>
            </Head>
            <div className="bg-navy-blue text-white min-h-screen flex flex-col">

                {/* Header at the top */}
                <Header page="About"/>

                <div className="flex flex-col gap-10 justify-center items-center m-10">

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-10">

                        <Map />

                        {/* blurb on me */}
                        <div className="text-2xl sm:w-3/4 md:w-1/2">
                            <BarTitle title="About Me" />
                            <div className="text-left text-ice-white text-lg">
                                I was born and raised in Calumet, MI. I've always been facinated with computers
                                even at a young age. Growing up, I have fixed everything from an xbox and controllers 
                                to tablets, phones, and laptops. I used to take apart our family desktop just to take a look 
                                inside and see how everything works. Computer Science has just always been a thing I've 
                                had a passion for. 
                            </div>
                        </div>
                    </div>

                    {/* continuation and list */}
                    <div className="flex flex-col justify-center items-center gap-10 sm:w-4/5">
                        <div className="text-left text-ice-white text-lg">
                            I even took that passion into projects not even about CS. For presentations in some classes where 
                            I had the opportunity to use CS, I used it. Creating everything from simple programs to some websites 
                            with basic HTML, CSS, and Javascript. They weren't great but they were sharpening my skills and I was 
                            improving with each one.
                        </div>
                        <div className="text-left text-ice-white text-lg">
                            These skills and a passion for CS took me to Northern Michigan University where I studied CS and graduated
                            with my B.S. of Science. While at Northern, I developed more programming skills not only inside the classroom,
                            but outside of it as well. Learning python to make a data scraping project, some Unity and C# to develop my 
                            first game, and also some full stack engineering which would continue after graduation like the site you're 
                            currently viewing.
                        </div>
                        <div className="text-left text-ice-white text-lg">
                            This would then take me to Colorado to hunt for my first job post graduation. I eventually landed on a QA job 
                            in biometrics at iBeta Quality Assurance where after 6 months, I moved back home to Michigan where I reside now 
                            in Sault Ste. Marie.
                        </div>
                    </div>
                    
                </div>

                {/* Footer at the bottom */}
                <Footer />
            </div>
        </>
    );
}