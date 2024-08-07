import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

// Component creates the format for a project going in the Projects section of the page

interface Props {
  name: string;
  figma?: string; // ? means they are optional props
  website?: string;
  github?: string;
  description: string;
  list: string[];
  image: string;
}

const Project: React.FC<Props> = (props: Props) => {
  return (
    <article className="grid mobile:grid-cols-3 grid-cols-1 gap-5 mobile:mx-[80px] mx-[20px] mb-[50px]">
      <div className="bg-alternating-bg shadow-[4px_4px_24px_0px_rgba(0,0,0,0.15)] rounded-[10px] mobile:px-[28px] px-[20px] pb-[30px] pt-[10px] h-fit">
        <div className="flex flex-row gap-3 justify-end">
          {props.figma ? (
            <button className="hover:shadow-[4px_4px_24px_0px_rgba(0,0,0,0.15)] hover:rounded-full w-[35px] h-[35px]">
              <a href={props.figma} target="_blank">
                <FontAwesomeIcon icon={faFigma} className="fa-fw" />
              </a>
            </button>
          ) : null}
          {props.website ? (
            <button className="hover:shadow-[4px_4px_24px_0px_rgba(0,0,0,0.15)] hover:rounded-full w-[35px] h-[35px]">
              <a href={props.website} target="_blank">
                <FontAwesomeIcon icon={faLink} className="fa-fw" />
              </a>
            </button>
          ) : null}
          {props.github ? (
            <button className="hover:shadow-[4px_4px_24px_0px_rgba(0,0,0,0.15)] hover:rounded-full w-[35px] h-[35px]">
              <a href={props.github} target="_blank">
                <FontAwesomeIcon icon={faGithub} className="fa-fw" />
              </a>
            </button>
          ) : null}
        </div>
        <div className="flex flex-row justify-between items-center">
          <h1 className="uppercase mobile:text-[24px] text-[20px] font-[700] text-[#777CFC]">
            {props.name}
          </h1>
        </div>
        <p className="font-[400] text-[14px] mobile:text-[16px] mb-[34px]">
          {props.description}
        </p>
        <h2 className="uppercase mobile:text-[20px] text-[17px] font-[700] text-[#777CFC]">
          Tech Specs:
        </h2>
        <ul className="font-[400] text-[14px] mobile:text-[16px] list-disc mx-[19px] space-y-5">
          {props.list.map((element) => (
            <li key={element}>{element}</li>
          ))}
        </ul>
      </div>
      <Image
        src={props.image}
        alt=""
        width={800}
        height={562}
        className="rounded-[10px] mobile:col-span-2 col-span-1 w-full shadow-[4px_4px_24px_0px_rgba(0,0,0,0.15)] bg-transparent mobile:order-last order-first"
      />
    </article>
  );
};

export default Project;
