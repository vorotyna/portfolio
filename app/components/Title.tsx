interface Props {
  header: string;
  description: string;
}

const Title: React.FC<Props> = (props: Props) => {
  return (
    <section className="flex flex-col items-center leading-tight">
      <h1 className="uppercase font-[700] text-[20px] text-[#777CFC]">
        {props.header}
      </h1>
      <h2 className="font-[700] text-[36px]">{props.description}</h2>
    </section>
  );
};

export default Title;