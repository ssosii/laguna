const map = () => {
  const listItems = document.querySelectorAll("#map .list .item");
  const mapItems = document.querySelectorAll("#map .map .st0");
  const svgMap = document.querySelector("#svg2");
  const section = document.querySelector("#map .list");

  if (!svgMap) return;

  Array.from(listItems).map((item) => {
    item.addEventListener("mouseover", function itemHover(e) {
      const className = e.target.dataset.type;
      svgMap.classList.add(className);
      section.classList.add(className);
    });
    item.addEventListener("mouseout", function itemHover(e) {
      const className = e.target.dataset.type;
      svgMap.classList.remove(className);
      section.classList.remove(className);
    });
  });

  Array.from(mapItems).map((item) => {
    item.addEventListener("mouseover", function itemHover(e) {
      const className = e.target.id;
      svgMap.classList.add(className);
      section.classList.add(className);
    });
    item.addEventListener("mouseout", function itemHover(e) {
      const className = e.target.id;
      svgMap.classList.remove(className);
      section.classList.remove(className);
    });
  });
};

export default map;
