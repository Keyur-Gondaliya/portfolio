"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Skill = {
  name: string;
};

type SkillCategory = {
  name: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React" },
      { name: "Next" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Redux" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "GraphQL" },
      { name: "Python" },
    ],
  },
  {
    name: "AI & ML",
    skills: [
      { name: "Langchain" },
      { name: "Crew AI" },
      { name: "Hugging Face" },
      { name: "LLM API" },
    ],
  },
  {
    name: "DevOps",
    skills: [
      { name: "Docker" },
      { name: "AWS/GCP/Azure" },
      { name: "CI/CD" },
      { name: "Nginx" },
    ],
  },
];

const SkillOrbit = ({ skills }: { skills: Skill[] }) => {
  return (
    <div className="relative w-48 h-48">
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * 2 * Math.PI;
        const radius = 80;
        const x = Math.cos(angle) * radius + 96;
        const y = Math.sin(angle) * radius + 96;
        return (
          <motion.div
            key={skill.name}
            className="absolute w-3 h-3 rounded-full bg-[#ff6452]"
            style={{ left: x, top: y }}
            initial={{ scale: 0.5 }}
            animate={{
              scale: [0.5, 1, 0.5],
              x: (Math.random() - 0.5) * 20,
              y: (Math.random() - 0.5) * 20,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        );
      })}
    </div>
  );
};

const SkillList = ({
  skills,
  isHovered,
}: {
  skills: Skill[];
  isHovered: boolean;
}) => {
  return (
    <div className="space-y-2">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className={`text-sm font-medium ${
            isHovered ? "text-[#ff6452]" : "text-gray-400"
          }`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          {skill.name}
        </motion.div>
      ))}
    </div>
  );
};

export default function Skills() {
  const ref = useRef(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="max-container" ref={ref}>
      <h2 className="text-3xl md:text-4xl font-bold text-white-400 mb-8 text-left">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.name}
            className="bg-gradient-to-br from-[#0c0c0c] to-[#1c1c1c] rounded-lg overflow-hidden shadow-lg p-6 border border-[#2d2d2d] relative hover:border-[rgba(255,255,255,0.2)]"
            whileHover={{ scale: 1.03 }}
            onMouseEnter={() => setHoveredCategory(category.name)}
            onMouseLeave={() => setHoveredCategory(null)}
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            exit={{ opacity: 0, x: 100 }}
          >
            <h3 className="text-xl font-semibold text-white-400 mb-4">
              {category.name}
            </h3>
            <div className="flex items-center justify-between">
              <SkillOrbit skills={category.skills} />
              <SkillList
                skills={category.skills}
                isHovered={hoveredCategory === category.name}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
