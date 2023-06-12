// Reusable component for the titles of each section on the page

interface Props {
  header: string;
  description: string;
}

const Title: React.FC<Props> = (props: Props) => {
  return (
    <section className="flex flex-col items-center leading-tight">
      <h1 className="uppercase font-[700] mobile:text-[20px] text-[18px]  text-[#777CFC]">
        {props.header}
      </h1>
      <h2 className="font-[700] mobile:text-[36px] text-[32px] mb-[20px]">
        {props.description}
      </h2>
    </section>
  );
};

export default Title;
