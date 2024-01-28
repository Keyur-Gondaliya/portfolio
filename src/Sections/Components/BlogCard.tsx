import React from "react";

type Props = {};

function BlogCard({}: Props) {
  return (
    <div className="relative flex flex-col gap-10 border border-[#2d2d2d] rounded-[5px] p-[20px] bg-[#1c1c1c]  cursor-pointer transition ease-in-out delay-150 hover:border-[1px] hover:border-[rgba(255,255,255,0.2)]">
      <div className="blog-card-gardient" />
      <div className="text-white text-lg">
        Cache Simplified: Your Device's Trusted Ally d
      </div>
      <div className="flex gap-3 text-[#b2b2b2]">
        <div>Oct 24, 2034</div>
        <div>•</div>
        <div>☕</div>
        <div>2 min read</div>
      </div>
      <p className="text-[#b2b2b2]">
        Uncover How Cache Speeds Up Your Computer and Its Different Types and
        Quirks
      </p>
    </div>
  );
}

export default BlogCard;
