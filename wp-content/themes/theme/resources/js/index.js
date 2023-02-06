import "../scss/style.scss";
// import transition from "./funcs/transition";
const isDOMContains = (selector) => !!document.querySelector(selector);

import("./funcs/navigation").then(({ default: navigation }) =>
  navigation(".navigationOpen", ".navigationClose", ".navigation--component")
);

import setDate from "./funcs/setDate";
import headerScrolled from "./funcs/headerScrolled";
import map from "./funcs/map"

import fadeInElements from "./funcs/fadeInElements";
// import("./funcs/langSwitcher").then(({ default: switcher }) => switcher());



document.addEventListener("DOMContentLoaded", () => {
    fadeInElements();
    headerScrolled(61);
    map();
    
setDate();

  });

<<<<<<< HEAD
  // transition();
=======
//   transition();
>>>>>>> e0e41bdc9b21d45932dac5895037ec9607b1d3da
