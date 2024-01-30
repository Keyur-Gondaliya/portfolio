type Props = {};

const AboutMe = (props: Props) => {
  return (
    <section id="about-me" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold  text-white-400">
          <span className="border-b border-white"> About</span>{" "}
          <span className="text-coral-red">Me</span>
        </h2>
        <p className="mt-2 font-montserrat text-slate-200">
          Believer in the mantra &quot;The only time success comes before work
          is in the dictionary,&quot; I am Keyur Gondaliya. My profound interest
          in computers dates back to my early years, and I vividly recall
          writing my first HTML code in the 9th grade. The mesmerizing
          &quot;marquee&quot; tag left a lasting impression on me, leading me to
          decide to pursue a career in technology and contribute to making the
          world a better place.
        </p>
        <p className="mt-2 font-montserrat text-slate-200">
          As a computer science graduate, I've dedicated myself to the field,
          actively creating personal projects long before entering the industry.
          Despite having over couple years of professional experience, my
          journey began with a passion for technology evident in my early
          projects. These personal endeavors allowed me to hone my skills and
          develop a proactive approach to problem-solving.
        </p>
        <p className="mt-2 font-montserrat text-slate-200">
          Over the years, I've successfully tackled real-world problems across
          various sectors, including management and inventory systems, fintech
          solutions, and real estate projects using CAD. In my current role at
          my company, I have taken on the responsibility of managing large
          projects single-handedly. From project management and development to
          client handling, I am deeply involved in every aspect of the project
          life cycle. My journey has equipped me with the skills and expertise
          needed to make meaningful contributions to the ever-evolving tech
          landscape.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
