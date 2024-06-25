import Image from "next/image";
import Button from "./Components/Button";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section
      id="home"
      className="max-container h-[60vh] lg:min-h-screen w-full relative"
      style={{ backgroundImage: "url('/bg3.jpg')", backgroundSize: "cover" }}
    >
      <div className="relative  flex flex-col justify-center items-start lg:justify-end lg:pb-14 w-full padding-x h-full">
        <div className="font-palanquin font-bold text-3xl  md:text-4xl lg:text-5xl  max-sm:leading-tight">
          <span className="border-b border-[rgba(255,255,255,0.4)] text-white-400 xl:whitespace-nowrap relative z-10 pr-10 pb-0">
            Keyur G.
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">
            Full Stack
          </span>{" "}
          <span className="border-b border-[rgba(255,255,255,0.4)] text-white-400">
            Engineer
          </span>
        </div>

        <p className="font-montserrat text-[#b2b2b2] text-lg xs:text-sm md:text-sm lg:text-lg  max-md:text-sm leading-8 mt-6 mb-8 md:mb-14 sm:max-w-sm">
          - Dedicated to Crafting Solutions with Unwavering Commitment to
          Excellence.
        </p>

        <Button
          label="Resume"
          iconUrl="download.svg"
          fullWidth="w-fit"
          onClick={() => {
            window.open(
              "https://drive.google.com/drive/folders/14jiBC7a5zM9zXU7nQ68vAu_mW_TkK2sI?usp=sharing",
              "_blank"
            );
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
