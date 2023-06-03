import Image from "next/image";

interface Props {
  header: string;
  image: string;
}

const Skills: React.FC<Props> = (props: Props) => {
  return (
    <div className="flex flex-row border-2 border-solid rounded-[10px] shadow-[4px_4px_24px_0px_rgba(0,0,0,0.15)] py-[25px] px-[25px] items-center justify-between">
      <Image src={props.image} alt={props.header} width={60} height={60} />
      <h3 className="text-[18px] text-center">{props.header}</h3>
    </div>
  );
};

export default Skills;
