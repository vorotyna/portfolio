// Component renders the boxes with the introduction on About section

interface Props {
  header: string | React.ReactNode;
  description: string;
}

const IntroBoxes: React.FC<Props> = (props: Props) => {
  return (
    <div className="rounded-[10px] shadow-[4px_4px_24px_0px_rgba(0,0,0,0.15)] mobile:mb-16 mb-0 bg-[#F9F9FF]">
      <h3 className="text-[16px] mobile:text-[18px] uppercase text-center mobile:mb-[16px] mb-[10px] mobile:mt-[30px] mt-[20px]">
        {props.header}
      </h3>
      <p className="text-[14px] mobile:text-[16px] text-center mobile:mx-[45px] mx-[15px] mobile:mb-[30px] mb-[20px]">
        {props.description}
      </p>
    </div>
  );
};

export default IntroBoxes;
