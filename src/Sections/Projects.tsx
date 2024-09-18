"use client";
import { projectList } from "@/Constants";
import Button from "./Components/Button";
import ProjectCard from "./Components/ProjectCard";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Projects = () => {
  const [list, setList] = useState<any>(projectList.slice(0, 6));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const toggleProjects = () => {
    setList((prev: any) =>
      prev.length === 6 ? projectList.slice(0, 12) : projectList.slice(0, 6)
    );
  };

  return (
    <section
      ref={ref}
      className="max-container flex flex-col justify-center flex-wrap gap-9"
      id="projects"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-palanquin font-bold text-white-400 text-left"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {list.map((project: any, index: number) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.05 }}
          >
            <ProjectCard data={project} />
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="flex justify-center relative"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Button
          label={list.length === 6 ? "Show More" : "Show Less"}
          fullWidth="w-fit"
          onClick={toggleProjects}
        />
      </motion.div>
    </section>
  );
};

export default Projects;
