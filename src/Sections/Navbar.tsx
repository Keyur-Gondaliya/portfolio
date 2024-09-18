"use client";
import { navLinks } from "@/Constants";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const ref = useRef<any>();
  const mainRef = useRef<any>();

  const [activeValue, setActiveValue] = useState<string>("");
  const onScroll = useCallback((event: any) => {
    const { scrollY } = window;

    if (scrollY == 0) {
      ref.current.classList.remove("navbar-scrolled");
      ref.current.classList.remove("text-white");
      ref.current.classList.add("text-gray-300");
    } else {
      ref.current.classList.add("text-white");
      ref.current.classList.remove("text-gray-300");

      ref.current.classList.add("navbar-scrolled");
    }
  }, []);

  useEffect(() => {
    setActiveValue(window.location.hash || "#home");
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <header className="padding-x sticky top-0 py-6  z-10 ">
      <nav className="flex justify-between items-center max-container w-fit ">
        <ul
          className="flex-1 flex justify-center items-center gap-16 max-lg:hidden rounded-full  px-8 py-3 text-gray-300"
          id="navList"
          ref={ref}
        >
          {navLinks.map((e) => (
            <li
              key={e.label}
              className="rounded-full text-2xl px-8 py-3"
              style={{
                background: activeValue == e.href ? "rgba(79,79,79,.4)" : "",
              }}
            >
              <a
                href={e.href}
                onClick={() => {
                  setActiveValue(e.href);
                }}
                className="font-montserrat leading-normal text-lg "
              >
                {e.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* <div className="hidden max-lg:block float-end">
        <img src="hamburger.svg" alt="Menu" width={25} height={25} />
      </div> */}
    </header>
  );
};

export default Navbar;
