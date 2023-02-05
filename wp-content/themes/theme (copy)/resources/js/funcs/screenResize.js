const screenResize = (timer = 250, callback) => {
  let executionDelay;
  let screenWidth = window.innerWidth;
  window.addEventListener("resize", () => {
    clearTimeout(executionDelay);
    let screenSize = window.innerWidth;
    executionDelay = setTimeout(function () {
      if (screenWidth === screenSize) return
      screenWidth = screenSize;
      callback();
    }, timer);
  });
};

export default screenResize;
