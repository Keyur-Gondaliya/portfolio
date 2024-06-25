import { coFounderSkillList, internSkillList, tySkillList } from "@/Constants";

type Props = {};

const Experinces = (props: Props) => {
  return (
    <section id="products" className="max-container  font-montserrat">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-3xl md:text-4xl font-palanquin font-bold text-white-400">
          Experinces
        </h2>
        <div className="flex flex-col justify-start gap-10">
          <div className="flex flex-col md:flex-row gap-4 float-start text-[#b2b2b2]">
            <div className="w-[230px] text-lg pr-[4px] hidden md:block">
              Mar 2022 - Feb-2024
            </div>
            <div className="flex flex-col text-slate-200 w-fit">
              <a
                href="https://technoyuga.com/"
                target="_blank"
                className="cursor-pointer underline relative text-lg"
              >
                Technoyuga Pvt. Ltd - Full Stack Engineer
              </a>
              <div className=" text-lg pr-[4px] md:hidden text-right my-4">
                Mar 2022 - Feb-2024
              </div>

              <div className="text-[#b2b2b2] my-2 text-justify">
                - In my current role, I've rapidly advanced from managing admin
                panels to overseeing multiple client-side projects. My growth is
                marked by independently managing entire initiatives with
                increasing proficiency.
              </div>
              <div className="text-[#b2b2b2] my-2 text-justify">
                - Operating within Agile and Scrum frameworks, I led projects
                from inception to completion. I collaborated seamlessly with
                clients, internal teams, and freelancers, and took charge of
                weekly client meetings, driving key project discussions.
              </div>
              <div className="text-[#b2b2b2] my-2 text-justify">
                - My expertise in implementing MERN technologies across various
                industries showcases my adaptability and leadership,
                consistently delivering results in fast-paced, collaborative
                settings.
              </div>
              <div className="flex flex-wrap">
                {tySkillList.map((e: any, i: number) => (
                  <SkillTag value={e} key={i} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex float-start text-[#b2b2b2]">
            <div className="w-[230px] text-lg pr-[4px] hidden md:block">
              Sep 2020 - Feb 2022
            </div>
            <div className="flex flex-col text-slate-200 w-fit">
              <a
                href="https://infikeytech.com/"
                target="_blank"
                className="cursor-pointer underline relative text-lg"
              >
                Buyerz - Co-Founder Full-stack Developer
              </a>
              <div className=" text-lg pr-[4px] md:hidden text-right my-4">
                Sep 2020 - Feb 2022
              </div>

              <div className="text-[#b2b2b2]  my-2 text-justify">
                - Co-founded and handled all the technical aspects for
                crunchbase like data filtering platform where optimizing search
                time for querying from millions of records.
              </div>
              <div className="flex flex-wrap">
                {coFounderSkillList.map((e: any, i: number) => (
                  <SkillTag value={e} key={i} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex float-start text-[#b2b2b2]">
            <div className="w-[230px] text-lg hidden md:block">
              Feb 2021 & June 2021
            </div>
            <div className="flex flex-col text-slate-200 w-fit">
              <a
                href="https://infikeytech.com/"
                target="_blank"
                className="cursor-pointer underline relative text-lg"
              >
                Infikey Technologies & TwoWaits Private Limited - Web Developer
                Intern
              </a>
              <div className="w-[230px] text-lg pr-[4px] md:hidden visible my-4 text-right">
                Feb 2021 & June 2021
              </div>
              <div className="text-[#b2b2b2]  my-2 text-justify">
                - During my internship, I honed my skills in MERN (MongoDB,
                Express.js, React, Node.js) stack by developing various types of
                Todo applications. Through consistent practice, I strengthened
                my proficiency in MERN, emphasizing clean code practices.
                Additionally, I explored Laravel 8 and successfully implemented
                a chatbot using Botman in the backend.
              </div>
              <div className="flex flex-wrap">
                {internSkillList.map((e: any, i: number) => (
                  <SkillTag value={e} key={i} />
                ))}
              </div>
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
