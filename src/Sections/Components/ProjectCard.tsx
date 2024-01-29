import React from "react";

type Props = { data: any };

const ProjectCard = ({ data }: Props) => {
  return (
    <div className="max-w-sm  rounded-lg shadow border border-[#2d2d2d] bg-[#1c1c1c] cursor-pointer transition ease-in-out delay-150 hover:border-[1px] hover:border-[rgba(255,255,255,0.2)]">
      <div className="relative">
        <img
          className="rounded-t-lg "
          src={data.thumbnail}
          alt=""
          style={{ height: "230px", width: "100%" }}
        />
        <div className="h-full w-full bg-[#0000008a] rounded-t-lg p-5 opacity-0 hover:opacity-100 absolute top-0 transition ease-in delay-150  ">
          <div className="flex gap-3 justify-center h-full items-center ">
            {data.stack.map((e: any, i: number) => (
              <img
                src={e.link}
                alt={e.alt}
                width="30px"
                height="30px"
                key={i}
                style={{ height: "30px" }}
                className="bg-white p-[1px] rounded-md"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="p-5 relative">
        <h5 className="mb-2 flex justify-between gap-5">
          <div className="text-2xl font-bold tracking-tight text-white">
            {data.name}
          </div>
          {data.github ? (
            <a href={data.github} target="_blank">
              <img src="github.svg" alt="github" width={20} height={20} />
            </a>
          ) : (
            <img src="lock.svg" alt="github" width={15} height={15} />
          )}
        </h5>
        <p className="mb-3 font-normal text-[#b2b2b2] ">{data.des}</p>
        <div className="flex gap-3">
          {data.tags.map((e: any) => (
            <p className="text-coral-red font-bold">
              <span className=" text-white-400">#</span>
              {e}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
