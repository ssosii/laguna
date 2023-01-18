const map = () => {
  const listItems = document.querySelectorAll("#map .list .item");
  const svgMap = document.querySelector("#svg2");

  if(!svgMap) return;
  console.log("svg",listItems);
  Array.from(listItems).map((item) => {
    item.addEventListener("mouseover", function itemHover(e) {
        const className = e.target.dataset.type;
        svgMap.classList.add(className);
    });
    item.addEventListener("mouseout", function itemHover(e) {
        const className = e.target.dataset.type;
        svgMap.classList.remove(className);
    });
  });
};

export default map;
