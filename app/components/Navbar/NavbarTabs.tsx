// NavbarTabs compoennt which redirects a user on page

interface Props {
  name: String;
}

const NavbarTabs: React.FC<Props> = (props: Props) => {
  return (
    <button className="ml-[50px] hover:underline hover: underline-offset-8 hover:decoration-1">
      {props.name}
    </button>
  );
};

export default NavbarTabs;
