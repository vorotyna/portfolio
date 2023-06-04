import Title from "../Title";
import Project from "./Project";

interface Props {}

const Projects: React.FC<Props> = (props: Props) => {
  return (
    <div className="flex flex-col relative py-8">
      <Title header="Featured projects" description="What I Have Built." />
      <Project
        name="readroster"
        github="https://github.com/vorotyna/read-roster"
        description="Never pay an overdue library book fee again! A full stack application made to track and create various alert types for your checked-out library books."
        image="/readroster.png"
      />
    </div>
  );
};

export default Projects;
