import Image from "next/image";

// Component renders a skills block

interface Props {
  header: string;
  image: string;
}

const Skills: React.FC<Props> = (props: Props) => {
  return (
    <div className="flex flex-row rounded-[10px] shadow-[4px_4px_24px_0px_rgba(0,0,0,0.15)] py-[25px] px-[25px] items-center justify-around bg-[#F9F9FF]">
      <Image src={props.image} alt={props.header} width={60} height={60} />
      <h3 className="text-[18px] text-center">{props.header}</h3>
    </div>
  );
};

export default Skills;
