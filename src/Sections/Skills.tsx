import { skillList } from "@/Constants";

type Props = {};

const Skills = (props: Props) => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold  text-white-400">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skillList.map((skill: any) => (
            <div
              className="skill-box text-slate-200 font-montserrat"
              key={skill}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
