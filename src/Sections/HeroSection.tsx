// import { shoes, statistics } from "@/constants";
import Button from "./Components/Button";
// import ShoeCard from "./Components/ShoeCard";
import { useState } from "react";
import Navbar from "./Navbar";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section id="home" className="w-full relative pb-48 gap-10 max-container ">
      <div className="absolute">
        <img src="bg.jpg" alt="heroImage" />
      </div>
      <div className="pl-32 relative  flex flex-col justify-center items-start w-full max-xl:padding-x pt-60 ">
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="border-b border-white text-white-400 xl:whitespace-nowrap relative z-10 pr-10 pb-0 ">
            Keyur G.
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">
            Full Stack
          </span>{" "}
          <span className="border-b border-white text-white-400">Engineer</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Aim is to solve problem and be responsible in between for it.
        </p>

        <Button label="Resume" iconUrl="PDFIcon.svg" fullWidth="w-fit" />
      </div>
    </section>
  );
};

export default HeroSection;
