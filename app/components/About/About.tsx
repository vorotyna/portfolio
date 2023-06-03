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

interface Props {}

const About: React.FC = (props: Props) => {
  return (
    <div className="flex flex-col items-center h-screen relative justify-around bg-[#F4F8FE}">
      <Title header="Introduction" description="Who I Am." />
      <section className="grid grid-cols-3 gap-5 mx-[29px]">
        <IntroBoxes
          header={
            <>
              <FontAwesomeIcon icon={faInfo} className="text-[#777CFC] mr-2" />
              About me
            </>
          }
          description=" I am an emerging Full-Stack Web Developer. Upon completing my
            Kinesiology degree at McMaster University, I began an intensive
            Full-Stack Web Development program at Lighthouse Labs. I have since
            been building projects and learning as much as possible!"
        />
        <IntroBoxes
          header={
            <>
              <FontAwesomeIcon
                icon={faTerminal}
                className="text-[#777CFC] mr-2"
              />
              Coding & Design
            </>
          }
          description="I have experience using languages and technologies such as JavaScript, HTML, CSS, SQL, React, Next.js, Ruby on Rails and Figma. My main focus is building full-stack web applications, with an emphasis on the frontend and UI design."
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
            else did you expect from a Kinesiology student?). I also love to
            travel. If I am not at the gym then I am probably planning my next
            trip."
        />
      </section>
      <Title header="Skills" description="What I Know." />
      <section className="grid grid-cols-4 gap-5 mx-[29px]">
        <Skills header="JavaScript" image="/js.png" />
        <Skills header="HTML" image="/html-logo.png" />
        <Skills header="CSS" image="/css-logo.png" />
        <Skills header="SQL" image="/sql-logo.png" />
        <Skills header="React" image="/react.png" />
        <Skills header="Next.js" image="/nextjs.svg" />
        <Skills header="Ruby on Rails" image="/ruby.png" />
        <Skills header="GitHub" image="/github.png" />
        <Skills header="Figma" image="/figma.svg" />
        <Skills header="tailwindCSS" image="/tailwind.png" />
        <Skills header="Node.js" image="/nodejs.png" />
        <Skills header="jQuery" image="/jquery.svg" />
      </section>
    </div>
  );
};

export default About;

// Make component for box
