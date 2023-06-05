"use client";
import { onButtonClick } from "@/app/utils/scrollOnClick";

// NavbarTabs component which redirects a user on page

interface Props {
  name: string;
  goTo: string;
}

const NavbarTabs: React.FC<Props> = (props: Props) => {
  return (
    <button
      className="mx-[25px] hover:underline hover: underline-offset-8 hover:decoration-1 uppercase"
      onClick={onButtonClick}
      data-go-to={props.goTo}
    >
      {props.name}
    </button>
  );
};

export default NavbarTabs;
