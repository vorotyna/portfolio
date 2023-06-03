import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import NavbarTabs from "./NavbarTabs";

const Navbar: React.FC = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="h-[90px] flex flex-col w-screen absolute bg-[#F9F9FF]">
        {/* ADD ON SCROLL - shadow-[2px_2px_20px_0px_rgba(0,0,0,0.08)] */}
        {/* EXTERNAL LINKS SECTION */}
        <section className="flex justify-end mt-4 mr-[34px]">
          <a href="https://github.com/vorotyna" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/alisa-vorotyntseva/"
            className="ml-[34px]"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </section>
        {/* TAB NAVIGATION SECTION */}
        <section className="flex justify-center">
          <NavbarTabs name="Home" />
          <NavbarTabs name="About" />
          <NavbarTabs name="Projects" />
        </section>
      </div>
    </div>
  );
};

export default Navbar;
