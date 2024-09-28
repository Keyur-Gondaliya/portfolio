import React, { useState } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ data }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-[#1c1c1c] rounded-lg shadow-lg border border-[#2d2d2d] overflow-hidden cursor-pointer h-full flex flex-col transition-all duration-300 ease-in-out"
      whileHover={{
        scale: 1.03,
        borderColor: "rgba(255,255,255,0.3)",
        boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)",
      }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => {
        if (typeof window !== "undefined") {
          window.open(data.link, "_blank", "noopener,noreferrer");
        }
      }}
    >
      <div className="relative overflow-hidden group">
        <motion.img
          className="w-full h-56 object-cover rounded-t-lg transition-transform duration-300 ease-in-out"
          src={data.thumbnail}
          alt={data.name}
          animate={{ scale: isHovered ? 1.1 : 1 }}
        />
        <motion.div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex flex-wrap gap-3 justify-center items-center p-4">
            {data.stack.map((tech: any, i: number) => (
              <motion.img
                key={i}
                src={tech.link}
                alt={tech.alt}
                className="w-8 h-8 bg-white p-1 rounded-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
      <div className="p-6 flex flex-col flex-grow relative">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white-400  group-hover:text-coral-red transition-colors duration-300">
            {data.name}
          </h3>
          {data.github ? (
            <motion.a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300"
              whileHover={{ scale: 1.2, rotate: 360 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src="github.svg" alt="github" width={24} height={24} />
            </motion.a>
          ) : (
            <img
              src="lock.svg"
              alt="private"
              width={20}
              height={20}
              className="opacity-60"
            />
          )}
        </div>
        <p className="mb-4 text-[#b2b2b2] text-sm flex-grow">{data.des}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {data.tags.map((tag: string, i: number) => (
            <motion.span
              key={i}
              className="px-2 py-1 bg-[#2d2d2d] text-coral-red text-xs font-semibold rounded-full transition-colors duration-300"
              whileHover={{ scale: 1.1, backgroundColor: "#3d3d3d" }}
            >
              #{tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
