import React from "react";
import { motion } from "framer-motion";

type Props = { value: any };

function BlogCard({ value }: Props) {
  return (
    <motion.a
      href={value.link}
      target="_blank"
      className="relative flex flex-col gap-10 border border-[#2d2d2d] rounded-[5px] p-[20px] bg-[#1c1c1c]  cursor-pointer transition ease-in-out delay-150 hover:border-[1px] hover:border-[rgba(255,255,255,0.2)] h-full"
    >
      <div className="blog-card-gardient" />
      <div className="text-white text-lg">{value.name}</div>
      <div className="flex gap-3 text-[#b2b2b2]">
        <div>{value.date}</div>
        <div>•</div>
        <div>{value.time} min read</div>
      </div>
      <p className="text-[#b2b2b2] ">{value.des}</p>
    </motion.a>
  );
}

export default BlogCard;
