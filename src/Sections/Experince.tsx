"use client";
import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { coFounderSkillList, internSkillList, tySkillList } from "@/Constants";

type ExperienceItemProps = {
  date: string;
  company: string;
  position: string;
  website: string;
  description: string[];
  skills: string[];
  variants: Variants;
};

const Experiences: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section ref={ref} className="max-container font-montserrat ">
      <h2 className="text-3xl sm:text-4xl font-palanquin font-bold text-white-400 mb-8">
        Experiences
      </h2>
      <motion.div
        className="flex flex-col gap-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <ExperienceItem
          date="Mar 2022 - Feb 2024"
          company="Technoyuga Pvt. Ltd"
          position="Full Stack Engineer"
          website="https://technoyuga.com/"
          description={[
            "In my current role, I've rapidly advanced from managing admin panels to overseeing multiple client-side projects. My growth is marked by independently managing entire initiatives with increasing proficiency.",
            "Operating within Agile and Scrum frameworks, I led projects from inception to completion. I collaborated seamlessly with clients, internal teams, and freelancers, and took charge of weekly client meetings, driving key project discussions.",
            "My expertise in implementing MERN technologies across various industries showcases my adaptability and leadership, consistently delivering results in fast-paced, collaborative settings.",
          ]}
          skills={tySkillList}
          variants={itemVariants}
        />

        <ExperienceItem
          date="Sep 2020 - Feb 2022"
          company="Buyerz"
          position="Co-Founder Full-stack Developer"
          website="https://infikeytech.com/"
          description={[
            "Co-founded and handled all the technical aspects for crunchbase like data filtering platform where optimizing search time for querying from millions of records.",
          ]}
          skills={coFounderSkillList}
          variants={itemVariants}
        />

        <ExperienceItem
          date="Feb 2021 & June 2021"
          company="Infikey Technologies & TwoWaits Private Limited"
          position="Web Developer Intern"
          website="https://infikeytech.com/"
          description={[
            "During my internship, I honed my skills in MERN (MongoDB, Express.js, React, Node.js) stack by developing various types of Todo applications. Through consistent practice, I strengthened my proficiency in MERN, emphasizing clean code practices. Additionally, I explored Laravel 8 and successfully implemented a chatbot using Botman in the backend.",
          ]}
          skills={internSkillList}
          variants={itemVariants}
        />
      </motion.div>
    </section>
  );
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  date,
  company,
  position,
  website,
  description,
  skills,
  variants,
}) => (
  <motion.div
    className="flex flex-col text-[#b2b2b2] border-l-2 border-coral-red pl-4 py-2"
    variants={variants}
  >
    <div className="text-sm font-semibold mb-2 text-coral-red">{date}</div>
    <div className="flex flex-col text-slate-200">
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer text-lg font-semibold mb-1 hover:text-coral-red transition-colors"
      >
        {company}
      </a>
      <div className="text-base font-medium mb-3 text-white-400">
        {position}
      </div>
      {description.map((desc, index) => (
        <p key={index} className="text-[#b2b2b2] mb-2 text-sm">
          {desc}
        </p>
      ))}
      <motion.div
        className="flex flex-wrap gap-2 mt-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, staggerChildren: 0.1 }}
      >
        {skills.map((skill: string, i: number) => (
          <SkillTag value={skill} key={i} />
        ))}
      </motion.div>
    </div>
  </motion.div>
);

const SkillTag: React.FC<{ value: string }> = ({ value }) => (
  <motion.span
    className="px-2 py-1 bg-transparent border border-coral-red text-coral-red rounded-full text-xs"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {value}
  </motion.span>
);

export default Experiences;
