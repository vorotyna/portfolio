// A scroller function that takes element id and smooth scrolls to it.
export const scroll = (id: string) => {
  const element = document.getElementById(id); // Finda the corresponding ID in the document

  // If it exists then scroll to it
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // Scroll so that final position is to be 80 pixels above the element's top position (i.e., account for Navbar)
      behavior: "smooth",
    });
  }
};

// Function that reads the value associated with the 'data-go-to' attribute on the button
export const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  const goTo = e.currentTarget.getAttribute("data-go-to");

  // If it exists then pass it through to scroll function and delay the scroll by 120ms
  if (goTo) {
    setTimeout(() => {
      scroll(goTo);
    }, 120);
  }
};
