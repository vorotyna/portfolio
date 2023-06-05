import { defaultConfig } from "next/dist/server/config-shared";
import { useEffect } from "react";

const useScroll = () => {
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

  useEffect(() => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (e.target instanceof HTMLButtonElement) {
        onButtonClick(e);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return onButtonClick;
};

export default useScroll;
