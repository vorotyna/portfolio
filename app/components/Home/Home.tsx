import "@fortawesome/fontawesome-svg-core/styles.css";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Component renders the home section of the page

const Home: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center mobile:h-screen relative justify-center mobile:mx-[80px] mx-[20px] h-[calc(100svh)]"
      id="home"
    >
      <p className="uppercase mobile:text-[16px] text-[15px] font-[400]">
        Turning creativity into reality
      </p>
      <h1 className="font-[700] mobile:text-[60px] text-[30px] text-center leading-tight my-[20px]">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Hi, I'm <span className="text-[#777CFC]">Alisa</span>
        <br></br>
        Front-End || UI Design
      </h1>
      <p className="font-[400] mobile:text-[16px] text-[15px]  mobile:w-[390px] text-center">
        Self-taught Full Stack Web Developer with a passion for design and
        all-things-aesthetic
      </p>
      <FontAwesomeIcon
        icon={faAngleDoubleDown}
        className="absolute bottom-10 transform mb-[33px] text-[#777CFC] fa-lg animate-bounce"
      />
    </div>
  );
};

export default Home;
