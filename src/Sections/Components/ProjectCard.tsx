import React from "react";

type Props = {};

const ProjectCard = ({}: Props) => {
  return (
    <div className="max-w-sm  rounded-lg shadow border border-[#2d2d2d] bg-[#1c1c1c] cursor-pointer transition ease-in-out delay-150 hover:border-[1px] hover:border-[rgba(255,255,255,0.2)]">
      <div className="relative">
        <img className="rounded-t-lg " src="bg1.jpg" alt="" />
        <div className="h-full w-full bg-[#0000008a] rounded-t-lg p-5 opacity-0 hover:opacity-100 absolute top-0 transition ease-in delay-150 flex gap-3 flex-wrap justify-center">
          <img src="github.svg" alt="github" width={20} height={20} />
          <img src="linkedin.svg" alt="next" width={20} height={20} />
          <img src="twitter.svg" alt="twitter" width={20} height={20} />
        </div>
      </div>
      <div className="p-5 relative">
        <a href="#">
          <h5 className="mb-2 flex justify-between gap-5">
            <div className="text-2xl font-bold tracking-tight text-white">
              Noteworthy technology acquisitions 2021
            </div>{" "}
            <img src="github.svg" alt="github" width={20} height={20} />
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
