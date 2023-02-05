const tabs = (tabItems, tabContents) => {
  const tabs = document.querySelectorAll(tabItems);
    const contents = document.querySelectorAll(tabContents);
  if (!tabs.length) return;

  tabs.forEach((item, index) => {
    item.addEventListener("click", () => {
      [...tabs, ...content].forEach((item) => item.classList.remove("active"));
      const index = item.getAttribute("data-tab-index");
        
      item.classList.add("active");
      const content = document.querySelector(`[data-index="${index}"]`);
      if (content) content.classList.add("active");
    });

    if (screenWidth > 992) return;
    item.insertAdjacentElement("afterend", contents[index]);
  });

  if (screenWidth > 992) {
    const container = document.querySelector("[data-content-container]");  // main content container
    contents.forEach((item) =>
      container.insertAdjacentElement("beforeend", item)
    );
  }
};

export default tabs