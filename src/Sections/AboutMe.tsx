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
          Beliver of "The only time succes comes before work is in dicsnory", I
          am Keyur Gondaliya. I write my first Html code in 9th standard and i
          was amezed by "marquee" tag that's when i decided to Persue my cereer
          in Tech and Contribue for better world. I am computer science graduate
          and have been working in industry for more then two years now.
          meanwhile i have solve real world problem such as industry starting
          from mangment and inventory, fintech and real-eastae using CAD.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
