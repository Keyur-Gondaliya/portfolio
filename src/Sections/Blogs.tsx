import { blogList } from "@/Constants";
import BlogCard from "./Components/BlogCard";
import ProjectCard from "./Components/ProjectCard";

type Props = {};

const Blogs = (props: Props) => {
  return (
    <section className="max-container flex flex-col justify-center flex-wrap gap-9">
      <h2 className="text-3xl md:text-4xl font-palanquin font-bold text-white-400">
        Blogs
      </h2>
      <div className="flex flex-wrap gap-10 justify-evenly">
        {blogList.map((e: any, i: number) => (
          <BlogCard value={e} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
