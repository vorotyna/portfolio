import "@fortawesome/fontawesome-svg-core/styles.css";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center h-screen relative justify-center">
      <p className="uppercase text-[16px] font-[400]">
        Turning creativity into reality
      </p>
      <h1 className="font-[700] text-[60px] text-center leading-tight my-[20px]">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Hi, I'm <span className="text-[#777CFC]">Alisa</span>
        <br></br>
        Front-End || UI Design
      </h1>
      <p className="font-[400] text-[16px] w-[390px] text-center">
        Self-taught Full Stack Web Developer with a passion for design and
        all-things-aesthetic
      </p>
      <FontAwesomeIcon
        icon={faAngleDoubleDown}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 transform mb-[33px] text-[#777CFC] fa-lg"
      />
    </div>
  );
};

export default Home;
