import Image from "next/image";
import Button from "./Components/Button";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section id="home" className="w-full relative pb-16  gap-10 max-container ">
      <div className="absolute">
        <Image
          src="/bg3.jpg"
          alt="heroImage"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", opacity: 0.4 }}
          className="h-auto max-w-full invisible xl:visible"
        />
      </div>
      <div className="pl-32 relative  flex flex-col justify-center items-start w-full max-xl:padding-x pt-48 ">
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="border-b border-[rgba(255,255,255,0.4)] text-white-400 xl:whitespace-nowrap relative z-10 pr-10 pb-0 ">
            Keyur G.
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">
            Full Stack
          </span>{" "}
          <span className="border-b border-[rgba(255,255,255,0.4)] text-white-400">
            Engineer
          </span>
        </h1>
        <p className="font-montserrat text-[#b2b2b2] text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
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
