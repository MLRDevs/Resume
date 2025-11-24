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

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-10 gap-10">

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
                    <div className="flex flex-col xl:flex-row gap-10 justify-center items-center">
                        <div className="flex flex-col gap-5 xl:w-1/2">
                            <div className="text-left text-ice-white text-lg">
                                I even took that passion into projects not even about CS. For presentations in some classes where 
                                I had the opportunity to use CS, I used it. Creating everything from simple programs to some websites 
                                with basic HTML, CSS, and Javascript. They weren't great but they were sharpening my skills and I was 
                                improving with each one.
                            </div>
                            <div className="text-left text-ice-white text-lg">
                                After graduation of High School, I then went to Northern Michigan Univeristy to study Computer Science. 
                                Once Covid hit, it did get tougher leading me to take some time off and then come back to Northern in Winter of 2022.
                                In the time I wasn't at Northern, I spent it learning as much as I can. Once I took that break I instantly wanted to get 
                                back as soon as I could. I spent that time learning more about C++ and Python.  
                                I graduated in December of 2023 with my Associate's of Science and then in May 2025 with my Bachelor's of Science 
                                in Computer Science with a minor in Mathematics. 
                            </div> 
                        </div>

                        {/* list */}
                        <div className="xl:w-1/2 text-2xl">
                            <BarTitle title="History and Timeline" />
                            <Timeline />
                        </div>
                    </div>
                    
                </div>

                {/* Footer at the bottom */}
                <Footer />
            </div>
        </>
    );
}