import Image from "next/image";

interface Props {
  header: string;
  image: string;
}

const Skills: React.FC<Props> = (props: Props) => {
  return (
    <div className="flex flex-row border-2 border-solid rounded-[10px] shadow-[4px_4px_24px_0px_rgba(0,0,0,0.15)] py-[33px] pl-[45px] pr-[72px]">
      <Image src={props.image} alt={props.header} width={80} height={80} />
      <h3 className="text-[18px] text-center mb-[16px] mt-[30px] ml-[52px]">
        {props.header}
      </h3>
    </div>
  );
};

export default Skills;
