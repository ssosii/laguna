const navigation = (burgerClass, menuClass) => {
    const burger = document.querySelector(burgerClass);
    const nav = document.querySelector(menuClass);
    const html = document.documentElement;
    const body = document.body;

    if(!burger || !nav) return

    burger.addEventListener("click", () => {
        nav.classList.toggle("active");

        if (nav.classList.contains("active")) {
            burger.classList.add("open");
            html.style.overflowY = "hidden";
            body.classList.add("open");
            return
        }
        burger.classList.remove("open");
        html.style.overflowY = "auto";
        body.classList.remove("open");
    });
};

export default navigation;