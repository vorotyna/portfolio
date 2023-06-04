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
  image: string;
}

const Project: React.FC<Props> = (props: Props) => {
  return (
    <div className="flex justify-center items-center">
      <article className="grid grid-cols-3 gap-5 mx-[30px]">
        <div className="bg-[#F4F8FE] shadow-[4px_4px_24px_0px_rgba(0,0,0,0.15)] rounded-[10px] px-[28px] py-[30px] h-fit pb-[35px]">
          <div className="flex flex-row gap-6 justify-end">
            {props.figma ? (
              <a href={props.figma} target="_blank">
                <FontAwesomeIcon icon={faFigma} className="fa-fw" />
              </a>
            ) : null}
            {props.website ? (
              <a href={props.website} target="_blank">
                <FontAwesomeIcon icon={faLink} className="fa-fw" />
              </a>
            ) : null}
            <a href={props.github} target="_blank">
              <FontAwesomeIcon icon={faGithub} className="fa-fw" />
            </a>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h1 className="uppercase text-[24px] font-[700] text-[#777CFC]">
              {props.name}
            </h1>
          </div>
          <p className="font-[400] text-[18px] mb-[34px]">
            {props.description}
          </p>
          <h2 className="uppercase text-[20px] font-[700] text-[#777CFC]">
            Tech Specs:
          </h2>
          <ul className="font-[400] text-[18px] list-disc mx-[19px] space-y-5">
            <li>PostgreSQL || Express.js || Node.js || React </li>
            <li>
              Login and authentication system for users to access their book
              roster again
            </li>
            <li>
              Features the use of the Twilio API, Mailgun API and Cloudinary API
            </li>
          </ul>
        </div>
        <Image
          src={props.image}
          alt=""
          width={800}
          height={562}
          className="rounded-[10px] col-span-2 w-full shadow-[4px_4px_24px_0px_rgba(0,0,0,0.15)]"
        />
      </article>
    </div>
  );
};

export default Project;
