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
        {/* <ExperienceItem
          date="June 2024 - Present"
          company="Marsdevs"
          position="Full Stack Engineer"
          website="https://www.marsdevs.com/"
          description={[
            "As a Full Stack Engineer, I managed both client-side and admin panel projects using MERN stack technologies. Successfully led end-to-end project development across diverse industries, driving efficient solutions.",
            "Led Agile and Scrum-driven projects, from planning to delivery, ensuring timely execution. Coordinated with clients, teams, and freelancers, conducting weekly client meetings to discuss project milestones.",
            "Specialized in developing scalable applications using MongoDB, Express.js, React, and Node.js, showcasing leadership and technical adaptability in a fast-paced environment.",
          ]}
          skills={tySkillList}
          variants={itemVariants}
        /> */}
        <ExperienceItem
          date="Mar 2022 - Feb 2024"
          company="Technoyuga Pvt. Ltd"
          position="Full Stack Engineer"
          website="https://technoyuga.com/"
          description={[
            "Developed a productivity analysis platform using custom algorithms and third-party integrations, enabling restaurant owners to track attendance with 30% more accuracy and distribute bonuses 25% more fairly.",
            "Enhanced a Zoho-based inventory system by integrating Authorization-Based UI access, custom APIs, and fast-loading forms. Delivered an advanced front-end with personalized color themes, elevating user experience and boosting operational efficiency.",
            "Specializing in scalable solutions across industries, I led projects from concept to delivery using the MERN stack (MongoDB, Express.js, React, Node.js). From restaurant platforms to SaaS solutions, I ensure clients' goals are met with precision and technical expertise.",
          ]}
          skills={tySkillList}
          variants={itemVariants}
        />

        <ExperienceItem
          date="Sep 2020 - Feb 2022"
          company="Buyerz"
          position="Co-Founder & Full-Stack Developer"
          website="https://infikeytech.com/"
          description={[
            "Co-founded Buyerz, a platform similar to Crunchbase, tailored to the Indian Chemical Industry. Led the migration of a trusted dataset, successfully onboarding 7 paying companies.",
            "Enhanced platform sales by 30% through strategic analysis of competitor platforms and regular user feedback.",
            "Integrated payment platforms and developed fast-search capabilities for millions of records, optimized with caching to deliver a 48% improvement in user experience.",
          ]}
          skills={coFounderSkillList}
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
    className="relative flex flex-col text-[#b2b2b2] border-l-2 border-coral-red pl-4 py-2"
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
