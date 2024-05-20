"use client";

import AboutMe from "@/Sections/AboutMe";
import Blogs from "@/Sections/Blogs";
import Experinces from "@/Sections/Experince";
import Footer from "@/Sections/Footer";
import HeroSection from "@/Sections/HeroSection";
import Navbar from "@/Sections/Navbar";
import Projects from "@/Sections/Projects";
import Skills from "@/Sections/Skills";

export default function Home() {
  return (
    <main className="relative">
      <section className="absolute h-full w-full">
        <Navbar />
      </section>
      <section className="xl:padding-l padding-x wide:padding-r padding-b bg-[#1B1B1B]">
        <HeroSection />
      </section>
      <section className="padding-x pb-10 pt-1  bg-[#1B1B1B]">
        <AboutMe />
      </section>
      <section className="padding-x py-10  bg-[#1B1B1B]">
        <Skills />
      </section>
      <section className="padding-x py-10 bg-[#1B1B1B]">
        <Projects />
      </section>
      <section className="padding-x py-10  bg-[#1B1B1B]">
        <Experinces />
      </section>
      <section className="padding-x pt-10 w-full bg-[#1B1B1B]">
        <Blogs />
      </section>
      <section className="bg-[#1B1B1B] padding-x  pb-6 w-full absolute">
        <Footer />
      </section>
    </main>
  );
}
