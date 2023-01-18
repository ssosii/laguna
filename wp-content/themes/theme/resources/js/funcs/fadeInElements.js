const fadeInElements = () => {
    const elements = document.querySelectorAll(".fadeInTrigger");
    console.log("ele", elements);
    elements.forEach((img) => {
      const callback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fadeIn");
          }
        });
      };
  
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      };
      const myObserver = new IntersectionObserver(callback, options);
      myObserver.observe(img);
    });
  };
  
  export default fadeInElements;
  