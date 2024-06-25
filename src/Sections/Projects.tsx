import { projectList } from "@/Constants";
import Button from "./Components/Button";
import ProjectCard from "./Components/ProjectCard";
import { useState } from "react";

type Props = {};

const Projects = (props: Props) => {
  const [list, setList] = useState<any>(projectList.slice(0, 6));
  return (
    <section
      className="max-container flex flex-col justify-center flex-wrap gap-9"
      id="projects"
    >
      <h2 className="text-3xl md:text-4xl font-palanquin font-bold text-white-400">
        Projects
      </h2>
      <div className="flex flex-wrap gap-10 justify-evenly ">
        {list.map((e: any, i: number) => (
          <ProjectCard data={e} key={i} />
        ))}
      </div>
      {list.length / 6 < 3 ? (
        <div className="flex justify-center relative">
          <Button
            label="Show More"
            fullWidth="w-fit"
            onClick={() => {
              setList((prev: any) => projectList.slice(0, prev.length + 6));
            }}
          />
        </div>
      ) : (
        <div className="flex justify-center relative">
          <Button
            label="Show less"
            fullWidth="w-fit"
            onClick={() => {
              setList((prev: any) => projectList.slice(0, 6));
            }}
          />
        </div>
      )}
    </section>
  );
};

export default Projects;
