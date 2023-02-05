const transition = () => {
  const anchors = [
    ...document.querySelectorAll(".menu-item a"),
    ...document.querySelectorAll("[data-internal-page]"),
  ];
  const transitionElement = document.querySelector(".transition");
  transitionElement.classList.remove("is-active");
  if (!anchors.length || transition_el) return;

  anchors.forEach((anchor) => {
    if (anchor.getAttribute("target")) return;
    anchor.addEventListener("click", (e) => {
      transitionElement.classList.add("is-active");
    });
  });
};

export default transition;
