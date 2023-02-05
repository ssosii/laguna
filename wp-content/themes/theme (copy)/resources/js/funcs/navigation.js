const navigation = (burgerClass, menuClass) => {
    const burger = document.querySelector(".navigationOpen");
    const nav = document.querySelector(".navigation--component");
    const html = document.documentElement;
    const body = document.body;

    
    if(!burger || !nav) return

    console.log("click",burger,nav);
    burger.addEventListener("click", () => {

             body.classList.toggle("_navigation-open");

          if (body.classList.contains("_navigation-open")) {
            burger.classList.add("open");
            html.style.overflowY = "hidden";
            body.classList.add("open");
            return
        }

        burger.classList.remove("open");
        html.style.overflowY = "auto";
        body.classList.remove("_navigation-open");

        // if (nav.classList.contains("active")) {
        //     burger.classList.add("open");
        //     html.style.overflowY = "hidden";
        //     body.classList.add("open");
        //     return
        // }
        // burger.classList.remove("open");
        // html.style.overflowY = "auto";
        // body.classList.remove("open");
    });
};

export default navigation;