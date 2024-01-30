import { internSkillList, tySkillList } from "@/Constants";

type Props = {};

const Experinces = (props: Props) => {
  return (
    <section
      id="products"
      className="max-container max-sm:mt-12 font-montserrat"
    >
      <div className="flex flex-col justify-start gap-10">
        <h2 className="text-4xl font-palanquin font-bold text-white-400">
          Experinces
        </h2>
        <div className="flex float-start text-[#b2b2b2]">
          <div className="w-[230px] text-lg pr-[4px]">Mar 2022 - Present</div>
          <div className="flex flex-col text-slate-200 w-fit">
            <a
              href="https://technoyuga.com/"
              target="_blank"
              className="cursor-pointer underline relative text-lg"
            >
              Technoyuga Pvt. Ltd - Full Stack Engineer
            </a>
            <div className="text-[#b2b2b2] my-2 text-justify">
              - In my current role, I have demonstrated dynamic growth and
              responsibility evolution. Commencing with the management of admin
              panels, I progressed to handling client-side projects. As my
              proficiency expanded, I took on the challenge of independently
              managing entire projects, ultimately overseeing concurrent
              execution of multiple projects.
            </div>
            <div className="text-[#b2b2b2] my-2 text-justify">
              - Operating within an Agile and Scrum framework, I led projects
              from inception to completion. My responsibilities encompassed
              collaborating with clients, internal teams, and external
              freelancers. I effectively navigated diverse collaborative
              environments, working seamlessly with colleagues, clients, and
              external teams. Notably, I orchestrated and conducted weekly
              client meetings, assuming a leadership role in project
              discussions.
            </div>
            <div className="text-[#b2b2b2] my-2 text-justify">
              - My expertise extends across various industries, as I&apos;ve
              successfully implemented MERN technologies in diverse project
              contexts. This journey reflects my ability to adapt, lead, and
              deliver results in a fast-paced and collaborative work
              environment.
            </div>
            <div className="flex flex-wrap">
              {tySkillList.map((e: any, i: number) => (
                <SkillTag value={e} key={i} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex float-start text-[#b2b2b2]">
          <div className="w-[230px] text-lg">Jun 2021 - Aug 2021</div>
          <div className="flex flex-col text-slate-200 w-fit">
            <a
              href="https://infikeytech.com/"
              target="_blank"
              className="cursor-pointer underline relative text-lg"
            >
              Infikey Technologies Private Limited - Web Developer Intern
            </a>
            <div className="text-[#b2b2b2]  my-2 text-justify">
              - During my internship, I honed my skills in MERN (MongoDB,
              Express.js, React, Node.js) stack by developing various types of
              Todo applications. Through consistent practice, I strengthened my
              proficiency in MERN, emphasizing clean code practices.
              Additionally, I explored Laravel 8 and successfully implemented a
              chatbot using Botman in the backend.
            </div>
            <div className="flex flex-wrap">
              {internSkillList.map((e: any, i: number) => (
                <SkillTag value={e} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experinces;

function SkillTag({ value }: { value: string }) {
  return (
    <div className="skill-box-experince text-coral-red font-montserrat">
      {value}
    </div>
  );
}
