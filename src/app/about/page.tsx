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
                            This shows my Educational / Academic / Personal journey along with some 
                            information about where I am from. The projects themselves are just
                            some notable ones I have done and am proud of.
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