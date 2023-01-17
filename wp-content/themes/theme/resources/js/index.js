import "../scss/style.scss";
import transition from "./funcs/transition";
const isDOMContains = (selector) => !!document.querySelector(selector);
// import("./funcs/langSwitcher").then(({ default: switcher }) => switcher());

transition();
