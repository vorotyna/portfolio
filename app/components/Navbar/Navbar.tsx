"use client"; // Rendered client-side. Specified because using useEffect and useState

import { useEffect, useState } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import NavbarTabs from "./NavbarTabs";

// Component renders the navbar

const Navbar: React.FC = () => {
  const [top, setTop] = useState(true); // State to track whether navbar is at the top of page

  // Function to handle shadow on Navbar when scrolling
  useEffect(() => {
    // Function that changes the state when window has certain scroll position
    const scrollHandler = () => {
      window.pageYOffset > 70 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler); // Add an event listener to the scroll event on the window object. When the user scrolls, the scrollHandler function will be called.
    return () => window.removeEventListener("scroll", scrollHandler); //  Remove the event listener when the component is unmounted or when the top value changes
  }, [top]); // Effect should be re-run whenever the value of top changes

  return (
    <div className="sticky top-0 z-50">
      <div
        className={`h-[90px] flex flex-col w-[100svw] absolute bg-[#F9F9FF] px-[34px] ${
          !top
            ? "shadow-[2px_2px_20px_0px_rgba(0,0,0,0.08)] transition-shadow duration-300"
            : null
        }`}
      >
        {/* EXTERNAL LINKS SECTION */}
        <section className="flex justify-end mt-2">
          <button className="hover:shadow-[4px_4px_24px_0px_rgba(0,0,0,0.15)] hover:rounded-full w-[35px] h-[35px] mobile:mr-5 mr-2 mobile:mb-0 mb-2">
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
