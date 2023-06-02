import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import NavbarTabs from "./NavbarTabs";

const Navbar: React.FC = () => {
  return (
    <div className=" h-[103px] flex flex-col absolute w-screen z-50">
      {/* EXTERNAL LINKS SECTION */}
      <section className="flex justify-end mt-6 mr-[34px]">
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
  );
};

export default Navbar;
