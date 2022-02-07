const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

//select all the menu items
// use for each to map all the menu items and use index as the key which will be used to indentify the item clicked
// add event listener to the items and multiply -100vw with their respective index
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});
