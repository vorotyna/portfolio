// NavbarTabs component which redirects a user on page

interface Props {
  name: string;
}

const NavbarTabs: React.FC<Props> = (props: Props) => {
  return (
    <button className="mx-[25px] hover:underline hover: underline-offset-8 hover:decoration-1 uppercase">
      {props.name}
    </button>
  );
};

export default NavbarTabs;
