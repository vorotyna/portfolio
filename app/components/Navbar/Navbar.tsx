"use client";

import { useEffect, useState } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import NavbarTabs from "./NavbarTabs";

interface Props {}

const Navbar: React.FC<Props> = (props: Props) => {
  const [top, setTop] = useState(true);

  // Function to handle shadow on Navbar when scrolling
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 70 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <div className="sticky top-0 z-50">
      <div
        className={`h-[90px] flex flex-col w-screen absolute bg-[#F9F9FF] ${
          !top
            ? "shadow-[2px_2px_20px_0px_rgba(0,0,0,0.08)] transition-shadow duration-300"
            : null
        }`}
      >
        {/* EXTERNAL LINKS SECTION */}
        <section className="flex justify-end mt-2 mr-[34px]">
          <button className="hover:shadow-[4px_4px_24px_0px_rgba(0,0,0,0.15)] hover:rounded-full w-[35px] h-[35px] mr-5">
            <a href="https://github.com/vorotyna" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </button>
          <button className="hover:shadow-[4px_4px_24px_0px_rgba(0,0,0,0.15)] hover:rounded-full w-[35px] h-[35px]">
            <a
              href="https://www.linkedin.com/in/alisa-vorotyntseva/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </button>
        </section>
        {/* TAB NAVIGATION SECTION */}
        <section className="flex justify-center">
          <NavbarTabs name="Home" goTo="home" />
          <NavbarTabs name="About" goTo="about" />
          <NavbarTabs name="Projects" goTo="projects" />
        </section>
      </div>
    </div>
  );
};

export default Navbar;
