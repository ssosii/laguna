const headerScrolled = (height) => {

    window.addEventListener("scroll", () => {
      const bodyClassList = document.body.classList;
      if (scrollY > 70 && !bodyClassList.contains("_header-scrolled")) {
        bodyClassList.add("_header-scrolled");
      }
      if (scrollY < 70 && bodyClassList.contains("_header-scrolled")) {
        bodyClassList.remove("_header-scrolled");
      }
    });
  };
  
  export default headerScrolled;
  