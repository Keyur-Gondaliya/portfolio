"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { blogList } from "@/Constants";
import BlogCard from "./Components/BlogCard";

type Props = {};

const Blogs = (props: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="max-container flex flex-col justify-center flex-wrap gap-9"
    >
      <h2 className="text-3xl md:text-4xl font-palanquin font-bold text-white-400">
        Blogs
      </h2>
      <div className="flex flex-wrap gap-10 justify-evenly pb-5">
        {blogList.map((e: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
            exit={{ opacity: 0, x: 100 }}
            className="xl:w-[48%] sm:w-full "
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <BlogCard value={e} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
