// A scroller function that takes element id and smooth scrolls to it.
export const scroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: "smooth",
    });
  }
};

export const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  const goTo = e.currentTarget.getAttribute("data-go-to");
  if (goTo) {
    setTimeout(() => {
      scroll(goTo);
    }, 120);
  }
};
