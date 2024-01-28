import { projectList } from "@/Constants";
import Button from "./Components/Button";
import ProjectCard from "./Components/ProjectCard";

type Props = {};

const Projects = (props: Props) => {
  return (
    <section
      className="max-container flex flex-col justify-center flex-wrap gap-9"
      id="projects"
    >
      <h2 className="text-4xl font-palanquin font-bold text-white-400">
        Projects
      </h2>
      <div className="flex flex-wrap gap-10 justify-evenly ">
        {projectList.map((e, i) => (
          <ProjectCard data={e} />
        ))}
      </div>
      {projectList.length > 6 && (
        <div className="flex justify-center relative">
          <Button label="Show More" fullWidth="w-fit" />
        </div>
      )}
    </section>
  );
};

export default Projects;
