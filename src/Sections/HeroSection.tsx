"use client";

// import Image from "next/image";
// import Button from "./Components/Button";

// type Props = {};

// const HeroSection = (props: Props) => {
//   return (
//     <section
//       id="home"
//       className="max-container py-5 max-md:min-h-[60vh] lg:h-screen 2xl:h-[800px] w-full relative"
//     >
//       <div className="relative  flex flex-col justify-center items-start lg:justify-end lg:pb-14 w-full padding-x h-full">
//         <div className="font-palanquin font-bold text-3xl  md:text-4xl lg:text-5xl  max-sm:leading-tight">
//           <span className="border-b border-[rgba(255,255,255,0.4)] text-white-400 xl:whitespace-nowrap relative z-10 pr-10 pb-0">
//             Keyur G.
//           </span>
//           <br />
//           <span className="text-coral-red inline-block mt-3">
//             Full Stack
//           </span>{" "}
//           <span className="border-b border-[rgba(255,255,255,0.4)] text-white-400">
//             Engineer
//           </span>
//         </div>

//         <p className="font-montserrat text-[#b2b2b2] text-lg xs:text-sm md:text-sm lg:text-lg  max-md:text-sm leading-8 mt-6 mb-8 md:mb-14 sm:max-w-sm">
//           - Dedicated to Crafting Solutions with Unwavering Commitment to
//           Excellence.
//         </p>

//         <Button
//           label="Resume"
//           iconUrl="download.svg"
//           fullWidth="w-fit"
//           onClick={() => {
//             window.open(
//               "https://drive.google.com/drive/folders/14jiBC7a5zM9zXU7nQ68vAu_mW_TkK2sI?usp=sharing",
//               "_blank"
//             );
//           }}
//         />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

// Define types for better type safety
interface SocialLink {
  href: string;
  icon: string;
  alt: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/keyur-gondaliya/",
    icon: "/linkedin.svg",
    alt: "LinkedIn",
  },
  {
    href: "https://github.com/Keyur-Gondaliya",
    icon: "/github.svg",
    alt: "GitHub",
  },
  {
    href: "https://twitter.com/Keyur403",
    icon: "/twitter.svg",
    alt: "Twitter",
  },
  {
    href: "https://www.reddit.com/user/AdditionalRich8339/",
    icon: "/reddit.svg",
    alt: "Reddit",
  },
  {
    href: "mailto:keyurgondaliya403@gmail.com",
    icon: "/email.svg",
    alt: "Email",
  },
];
interface Page {
  title: string;
  triangle: string;
  bgColor: string;
  imageSrc: string;
  color: {
    min: string;
    max: string;
  };
  heading: string;
}

const list: Page[] = [
  {
    title: "You Dream It,<br/> I Deliver It.<br/> Fast, with AI.",
    heading: "",
    triangle: "/building.avif",
    bgColor: "bg-gradient-to-b from-gray-900 to-gray-700",
    imageSrc: "/bg.png",
    color: {
      min: "#A643B0",
      max: "#DB287C",
    },
  },
  {
    title: "AI Agents,<br/> RAG, LLMs, <br/>Real-Time AI.",
    heading: "Focused on",
    triangle: "/building1.avif",
    bgColor: "bg-gradient-to-b from-gray-900 to-gray-700",
    imageSrc: "/bg.png",
    color: {
      min: "#52EDC7",
      max: "#57D1EF",
    },
  },

  {
    title: "Secure,<br/> Scalable,<br/> Micro/Monolith.",
    heading: "Backend that's",
    triangle: "/building3.avif",
    bgColor: "bg-gradient-to-b from-gray-900 to-gray-700",
    imageSrc: "/bg.png",
    color: {
      min: "#FDD6BD",
      max: "#F9A3AA",
    },
  },
  {
    title: "Responsive,<br/> User Friendly,<br/> SEO Optimized.",
    heading: "Frontend that's",
    triangle: "/building2.avif",
    bgColor: "bg-gradient-to-b from-gray-900 to-gray-700",
    imageSrc: "/bg.png",
    color: {
      min: "#AC32E4",
      max: "#7C19F1",
    },
  },
];

const staticData = {
  bottomList: [
    {
      title: "~ Keyur Gondaliya",
      description:
        "Dedicated to Crafting Solutions with Unwavering Commitment to Excellence.",
    },

    {
      title: "Contact Info",
    },
  ],
  buttons: [
    {
      text: "Hire Me!",
      variant: "outlined",
    },
    {
      text: "See My Work",
      variant: "outlined",
    },
  ],
};

const HeroSection: React.FC = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [isInitial, setIsInitial] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  const resetAnimations = useCallback(() => {
    const pageElements = ref.current?.querySelectorAll(".page");
    pageElements?.forEach((page) => {
      [
        "fadeInRightBig",
        "fadeOutLeftBig",
        "fadeInLeftBig",
        "fadeOutRightBig",
      ].forEach((animation) => {
        page.querySelector(".content")?.classList.remove(animation);
        page.querySelector(".action-btn")?.classList.remove(animation);
        page.querySelectorAll(".action-btn")[0]?.classList.remove(animation);
        page.querySelectorAll(".action-btn")[1]?.classList.remove(animation);
        page.querySelector(".tri-container")?.classList.remove(animation);
        page.querySelector(".image")?.classList.remove(animation);
      });
    });
  }, []);

  const showPage = useCallback(
    (index: number, direction: "next" | "prev") => {
      if (ref.current) {
        resetAnimations();
        const pageElements = ref.current.querySelectorAll(".page");
        const previousPage = pageElements[currentPageIndex];
        const nextPage = pageElements[index];

        const textAnimation =
          direction === "next"
            ? ["fadeInRightBig", "fadeOutLeftBig"]
            : ["fadeInLeftBig", "fadeOutRightBig"];
        const imageAnimation =
          direction === "next"
            ? ["fadeInLeftBig", "fadeOutRightBig"]
            : ["fadeInRightBig", "fadeOutLeftBig"];

        if (previousPage) {
          previousPage
            .querySelector(".content")
            ?.classList.add(textAnimation[1]);
          previousPage
            .querySelectorAll(".action-btn")[0]
            ?.classList.add(textAnimation[1]);
          previousPage
            .querySelectorAll(".action-btn")[1]
            ?.classList.add(textAnimation[1]);
          previousPage
            .querySelector(".tri-container")
            ?.classList.add(imageAnimation[1]);
        }

        ref.current.classList.add("fadeOut");
        ref.current.classList.remove("fadeIn");

        setTimeout(() => {
          if (previousPage && nextPage && ref.current) {
            previousPage.classList.remove("active");
            nextPage.classList.add("active");

            ref.current.classList.remove("fadeOut");
            ref.current.classList.add("fadeIn");

            nextPage.querySelector(".content")?.classList.add(textAnimation[0]);
            nextPage
              .querySelectorAll(".action-btn")[0]
              ?.classList.add(textAnimation[0]);
            nextPage
              .querySelectorAll(".action-btn")[1]
              ?.classList.add(textAnimation[0]);
            nextPage
              .querySelector(".tri-container")
              ?.classList.add(imageAnimation[0]);

            setCurrentPageIndex(index);
          }
        }, 300);
      }
    },
    [currentPageIndex, resetAnimations]
  );

  const nextPage = useCallback(() => {
    const nextPageIndex = (currentPageIndex + 1) % list.length;
    showPage(nextPageIndex, "next");
  }, [currentPageIndex, showPage]);

  const prevPage = useCallback(() => {
    const prevPageIndex = (currentPageIndex - 1 + list.length) % list.length;
    showPage(prevPageIndex, "prev");
  }, [currentPageIndex, showPage]);

  useEffect(() => {
    const interval = setInterval(nextPage, 7000);
    return () => clearInterval(interval);
  }, [nextPage]);

  useEffect(() => {
    if (ref.current) {
      const pageElements = ref.current.querySelectorAll(".page");
      if (pageElements.length > 0) {
        const index = 0;
        const direction = "next";
        const nextPageElement = pageElements[index];

        const textAnimation =
          direction === "next"
            ? ["fadeInRightBig", "fadeOutLeftBig"]
            : ["fadeInLeftBig", "fadeOutRightBig"];
        const imageAnimation =
          direction === "next"
            ? ["fadeInLeftBig", "fadeOutRightBig"]
            : ["fadeInRightBig", "fadeOutLeftBig"];

        setTimeout(() => {
          if (nextPageElement) {
            setIsInitial(false);

            nextPageElement.classList.add("active");

            nextPageElement
              .querySelector(".content")
              ?.classList.add(textAnimation[0]);
            nextPageElement
              .querySelectorAll(".action-btn")[0]
              ?.classList.add(textAnimation[0]);
            nextPageElement
              .querySelectorAll(".action-btn")[1]
              ?.classList.add(textAnimation[0]);

            nextPageElement
              .querySelector(".tri-container")
              ?.classList.add(imageAnimation[0]);

            setCurrentPageIndex(index);
          }
        }, 300);
      }
    }
  }, []);

  return (
    <section id="home" className="bg-black ">
      <div
        ref={ref}
        className="w-full h-[calc(100dvh)] max-container md:padding-x flex justify-center "
      >
        {list.map((page, index) => (
          <div
            key={index}
            className={`page  ${
              !isInitial && index === currentPageIndex ? "active" : ""
            } h-full flex md:flex-col items-center  lg:max-w-[900px] w-full`}
          >
            <div className="flex flex-col-reverse md:flex-row  content-container h-[85%] md:h-[80%] p-5">
              <div className="relative md:hidden left-0 flex-col justify-end w-full">
                <div className="flex justify-between items-center w-full  mt-4">
                  <div className="flex justify-between action-btn">
                    <div className="button-container flex gap-2 relative">
                      {staticData.buttons.map((btn, i) => (
                        <button
                          key={i}
                          className={`btn-${btn.variant} px-5 py-2 rounded-full border-2 text-white relative transition-all duration-500 ease-in-out`}
                          style={{
                            borderColor: page.color.min,
                            color: "rgba(255, 255, 255, 0.8)",
                          }}
                          onClick={() => {
                            if (i === 0) {
                              window.location.href =
                                "mailto:keyurgondaliya403@gmail.com";
                            } else if (i === 1) {
                              window.location.href = "#projects";
                            }
                          }}
                          onMouseEnter={(e) => {
                            const target = e.target as HTMLElement;
                            target.style.backgroundColor = page.color.min;
                            target.style.color = "#fff";
                          }}
                          onMouseLeave={(e) => {
                            const target = e.target as HTMLElement;
                            target.style.backgroundColor = "transparent";
                            target.style.color = "rgba(255, 255, 255, 0.8)";
                          }}
                        >
                          {btn.text}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="slider-buttons flex flex-col justify-between text-white-400   pl-5 gap-2.5">
                    <div
                      onClick={prevPage}
                      className="cursor-pointer hover:text-white"
                    >
                      PREV
                    </div>
                    <div
                      onClick={nextPage}
                      className="cursor-pointer hover:text-white"
                    >
                      NEXT
                    </div>
                  </div>
                </div>
              </div>
              <div className="content w-full md:w-1/2">
                <div className="text-white/60 text-sm md:text-lg">
                  {page.heading}
                  <br />
                </div>
                <h1
                  className="text-white-400 text-left text-[clamp(25px,8vw,35px)] md:text-[clamp(25px,8vw,40px)] lg:text-[clamp(25px,8vw,55px)]"
                  dangerouslySetInnerHTML={{ __html: page.title }}
                ></h1>
              </div>

              <div className="tri-container w-full md:w-1/2">
                <Image
                  src={page.triangle}
                  alt={`triangle${index + 1}`}
                  width={100}
                  height={100}
                  // className="tri"
                  style={{ height: "100%", width: "100%" }}
                  loading="eager" // Disables lazy loading
                />
              </div>
              <div className="hidden md:flex absolute left-0 h-full  flex-col justify-evenly  w-full p-5">
                <div></div>
                <div className="hidden lg:block"></div>

                <div className="flex justify-between items-center w-full  mt-4">
                  <div className="flex justify-between action-btn">
                    <div className="button-container flex gap-2 md:gap-4 relative">
                      {staticData.buttons.map((btn, i) => (
                        <button
                          key={i}
                          className={`btn-${btn.variant} px-5 py-2 rounded-full border-2 text-white relative transition-all duration-500 ease-in-out`}
                          style={{
                            borderColor: page.color.min,
                            color: "rgba(255, 255, 255, 0.8)",
                          }}
                          onClick={() => {
                            if (i === 0) {
                              window.location.href =
                                socialLinks[socialLinks.length - 1].href;
                            } else if (i === 1) {
                              window.location.href = "#projects";
                            }
                          }}
                          onMouseEnter={(e) => {
                            const target = e.target as HTMLElement;
                            target.style.backgroundColor = page.color.min;
                            target.style.color = "#fff";
                          }}
                          onMouseLeave={(e) => {
                            const target = e.target as HTMLElement;
                            target.style.backgroundColor = "transparent";
                            target.style.color = "rgba(255, 255, 255, 0.8)";
                          }}
                        >
                          {btn.text}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="slider-buttons flex flex-col justify-between text-white-400   px-5 gap-2.5">
                    <div
                      onClick={prevPage}
                      className="cursor-pointer hover:text-white"
                    >
                      PREV
                    </div>
                    <div
                      onClick={nextPage}
                      className="cursor-pointer hover:text-white"
                    >
                      NEXT
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="absolute bottom-0 w-full text-white grid grid-cols-1 md:grid-cols-3 gap-4 py-6 md:py-8 px-6 md:px-10"
              style={{
                background: "rgba(114, 114, 114, 0.2)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderWidth: "1px 1px 0px",
              }}
            >
              <div
                className="hidden md:flex md:col-span-2 flex-col justify-between pr-10"
                style={{
                  borderRight: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <p className="text-base  font-light leading-relaxed text-white-400">
                  Dedicated to Crafting Solutions with Unwavering Commitment to
                  Excellence.
                </p>
                <p className="text-sm lg:text-base text-white/60 text-right mt-2">
                  ~ Keyur Gondaliya
                </p>
              </div>

              <div className="flex flex-col justify-between text-center">
                <p className="text-sm lg:text-base text-white/60 text-center mb-2">
                  Contact Info
                </p>
                <div className="flex gap-4 items-center justify-center">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.alt}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:scale-110 cursor-pointer"
                    >
                      <Image
                        src={link.icon}
                        alt={link.alt}
                        width={24}
                        height={24}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
