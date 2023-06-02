import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  return (
    <div className=" h-[103px] flex flex-col">
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
        <a
          href="mailto:alisa.vorotyn@gmail.com"
          className="ml-[34px]"
          target="_blank"
        >
          <FontAwesomeIcon icon={faPaperPlane} />
        </a>
      </section>
      <section className="flex justify-center">
        <button className="hover:underline hover:underline-offset-8 hover:decoration-1">
          HOME
        </button>
        <button className="ml-[50px] hover:underline hover: underline-offset-8 hover:decoration-1">
          ABOUT
        </button>
        <button className="ml-[50px] hover:underline hover: underline-offset-8 hover:decoration-1">
          PROJECTS
        </button>
      </section>
    </div>
  );
};

export default Navbar;
