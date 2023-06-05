import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

interface Props {
  name: string;
  figma?: string;
  website?: string;
  github: string;
  description: string;
  list: string[];
  image: string;
}

const Project: React.FC<Props> = (props: Props) => {
  return (
    <article className="grid grid-cols-3 gap-5 mx-[80px] mb-20">
      <div className="bg-alternating-bg shadow-[4px_4px_24px_0px_rgba(0,0,0,0.15)] rounded-[10px] px-[28px] pb-[30px] pt-[10px] h-fit">
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
          <button className="hover:shadow-[4px_4px_24px_0px_rgba(0,0,0,0.15)] hover:rounded-full w-[35px] h-[35px]">
            <a href={props.github} target="_blank">
              <FontAwesomeIcon icon={faGithub} className="fa-fw" />
            </a>
          </button>
        </div>
        <div className="flex flex-row justify-between items-center">
          <h1 className="uppercase text-[24px] font-[700] text-[#777CFC]">
            {props.name}
          </h1>
        </div>
        <p className="font-[400] text-[16px] mb-[34px]">{props.description}</p>
        <h2 className="uppercase text-[20px] font-[700] text-[#777CFC]">
          Tech Specs:
        </h2>
        <ul className="font-[400] text-[16px] list-disc mx-[19px] space-y-5">
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
        className="rounded-[10px] col-span-2 w-full shadow-[4px_4px_24px_0px_rgba(0,0,0,0.15)] bg-transparent"
      />
    </article>
  );
};

export default Project;
