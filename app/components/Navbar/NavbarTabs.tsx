"use client";

// NavbarTabs component which redirects a user on page

interface Props {
  name: string;
  goTo: string;
}

const NavbarTabs: React.FC<Props> = (props: Props) => {
  // A scroller function that takes element id and smooth scrolls to it.
  const scroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const goTo = e.currentTarget.getAttribute("data-go-to");
    if (goTo) {
      setTimeout(() => {
        scroll(goTo);
      }, 120);
    }
  };

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
