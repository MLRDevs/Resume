// Alex Miller
// About page Resume

"use client"

import Header from '../components/Header';
import Footer from '../components/Footer';
import Timeline from '../components/Timeline';
import Head from 'next/head';
import dynamic from "next/dynamic";


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
            <div className="min-h-screen flex flex-col">

                {/* Header at the top */}
                <Header />
                
                {/* main container */}
                <main className="flex flex-col md:flex-row justify-between px-6 py-10 gap-10 flex-1">

                    {/* map with points */}
                    <section className="md:w-1/3">
                        <Map />
                    </section>

                    {/* blurb on me and this page */}
                    <section className="py-6 px-4 text-center">
                        <div className="max-w-3xl mx-auto">
                            <p className="text-left py-3">
                                I began my academic journey at Calumet High School in Calumet, MI 
                                learning the basics of HTML, CSS, Javascript, and Java. After moving
                                to Ishpeming, MI and attending Westwood High School, I expanded my 
                                interest in website development by creating more static web page projects
                                and eventually graduating in 2019.
                            </p>
                            <p className="text-left py-3">
                                I then went on to continue my studies of Computer Science at Northern
                                Michigan University. Like many other schools, during 2020 
                                NMU also went online thus I took a break in my education there. During that time, 
                                I taught myself more topics such as C++ and memory management with pointers. I 
                                then returned to NMU in Winter of 2022 and graduated with my Bachelor's of Science
                                in Computer Science with a minor in Mathematics in May 2025.
                            </p>
                            <p className="text-left py-3">
                                Currently, I am seeking opportunities to grow my skills and apply them to real
                                world problems Whether that be in full stack, software engineering, or related
                                areas. My goal is to be a part of a collaborative team building impactful 
                                software solutions.
                            </p>
                        </div>
                    </section>


                    {/* timeline of work and school history */}
                    <section className="md:w-1/3">
                        <Timeline />
                    </section>


                </main>

                {/* Footer at the bottom */}
                <Footer />
            </div>
        </>
    );
}