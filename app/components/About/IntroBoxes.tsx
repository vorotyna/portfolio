interface Props {
  header: string | React.ReactNode;
  description: string;
}

const IntroBoxes: React.FC<Props> = (props: Props) => {
  return (
    <div className="rounded-[10px] shadow-[4px_4px_24px_0px_rgba(0,0,0,0.15)] mb-[28px] bg-[#F9F9FF]">
      <h3 className="text-[18px] uppercase text-center mb-[16px] mt-[30px]">
        {props.header}
      </h3>
      <p className="text-[18px] text-center mx-[45px] mb-[30px]">
        {props.description}
      </p>
    </div>
  );
};

export default IntroBoxes;
