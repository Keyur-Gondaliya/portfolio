"use client";
import React, { useRef, useState } from "react";
import {
  Code,
  Briefcase,
  GraduationCap,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function Component() {
  const milestones = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Computer Science Graduate",
      description: "Foundation in technology and problem-solving",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Developer",
      description: "Expertise in MERN stack and Next.js",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "3+ Years Experience",
      description: "Tackling real-world problems across various sectors",
    },
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about-me" className="max-container relative" ref={ref}>
      <div className="mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white-400 mb-8">
          <span className="border-b-2 border-coral-red pb-2">About</span>{" "}
          <span className="text-coral-red">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              animate={
                isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
              }
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              exit={{ opacity: 0, x: 100 }}
              className="bg-[#1c1c1c] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#2d2d2d] hover:border-[rgba(255,255,255,0.2)]"
            >
              <div className="text-coral-red mb-3">{milestone.icon}</div>
              <h3 className="text-lg font-semibold text-white-400 mb-2">
                {milestone.title}
              </h3>
              <p className="text-sm text-gray-500">{milestone.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-[#1c1c1c] p-6 rounded-lg shadow-md border border-[#2d2d2d] hover:border-[rgba(255,255,255,0.2)]"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          exit={{ opacity: 0, x: -100 }}
        >
          <p className="text-gray-400 mb-4">
            Believer in the mantra &quot;The only time success comes before work
            is in the dictionary,&quot; I am Keyur Gondaliya. My journey in
            technology began with writing my first HTML code in the 9th grade,
            igniting a passion that has driven my career ever since.
          </p>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isExpanded ? "max-h-none" : "max-h-24 md:max-h-full"
            }`}
          >
            <p className="text-gray-400 mb-4">
              From personal projects to managing large-scale initiatives,
              I&apos;ve honed my skills across various domains including
              fintech, real estate, and inventory management. My approach
              combines technical expertise with a keen eye for solving
              real-world problems.
            </p>
            <p className="text-gray-400">
              Currently, I lead projects end-to-end, leveraging my full-stack
              development skills and project management experience to deliver
              impactful solutions.
            </p>
          </div>
          <button
            className="mt-2 text-coral-red flex items-center md:hidden"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>
                Read Less <ChevronUp className="ml-1 w-4 h-4" />
              </>
            ) : (
              <>
                Read More <ChevronDown className="ml-1 w-4 h-4" />
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
