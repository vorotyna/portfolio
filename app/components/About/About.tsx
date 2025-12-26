import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faInfo,
  faTerminal,
  faVolleyball,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../Title";
import IntroBoxes from "./IntroBoxes";
import Skills from "./Skills";

// Component renders the whole About section of the page

const About: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center relative mobile:py-14 py-10 bg-alternating-bg"
      id="about"
    >
      <Title header="Introduction" description="Who I Am." />
      <section className="grid mobile:grid-cols-3 grid-cols-1 gap-5 mobile:mx-[80px] mx-[20px] mb-16">
        <IntroBoxes
          header={
            <>
              <FontAwesomeIcon icon={faInfo} className="text-[#777CFC] mr-2" />
              About me
            </>
          }
          description="I am a Digital Marketing Coordinator and an emerging Full-Stack Web Developer. After completing my
            Kinesiology degree at McMaster University, I began my studies in Software Development & Network Engineering 
            at Sheridan College. I have since been building projects and learning as much as possible!"
        />
        <IntroBoxes
          header={
            <>
              <FontAwesomeIcon
                icon={faTerminal}
                className="text-[#777CFC] mr-2"
              />
              Coding & Marketing
            </>
          }
          description="I have experience using languages and technologies such as JavaScript, Python, Java, HTML, CSS, SQL, React, and Figma.
          Through my role as a Digital Marketing Coordinator, I have also gained experience using HubSpot, WordPress, Canva, Trello, and Zapier."
        />
        <IntroBoxes
          header={
            <>
              <FontAwesomeIcon
                icon={faVolleyball}
                className="text-[#777CFC] mr-2"
              />
              Hobbies
            </>
          }
          description="During my free time, I enjoy playing sports and exercising (what
            else do you expect from an ex-Kinesiology student?). I used to play volleyball and Olympic weightlift competitively. I also love to
            travel. If I am not at the gym then I am probably planning my next trip."
        />
      </section>
      <Title header="Skills" description="What I Know." />
      <div className="w-full">
        <section className="grid mobile:grid-cols-5 grid-cols-3 mobile:gap-5 gap-3 mobile:mx-[80px] mx-[20px]">
          <Skills
            header="JavaScript"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" // Using DevIcon (https://devicon.dev/) for image source
          />
          <Skills
            header="HTML"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          />
          <Skills
            header="CSS"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          />
          <Skills
            header="PostgreSQL"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
          />
          <Skills
            header="React"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
          <Skills
            header="Python"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
          />
          <Skills
            header="Java"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
          />
          <Skills
            header="WordPress"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg"
          />
          <Skills
            header="Figma"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
          />
          <Skills
            header="tailwindCSS"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          />
          <Skills
            header="Node.js"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          />
          <Skills
            header="jQuery"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
          />
          <Skills
            header="Canva"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg"
          />
          <Skills
            header="GitHub"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          />
          <Skills
            header="Git"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          />
        </section>
      </div>
    </div>
  );
};

export default About;
