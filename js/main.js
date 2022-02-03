const moveToTopButton = document.querySelector(".goup-container");
const burgerCheckbox = document.getElementById("menu__toggle");
const menuList = document.querySelector(".menu__list");

moveToTopButton.addEventListener("click", function () {
  window.scrollTo(scrollY, 0);
});
window.addEventListener("scroll", function () {
  if (scrollY < document.documentElement.clientHeight / 2) {
    moveToTopButton.style.opacity = 0;
    moveToTopButton.style.zIndex = -1;
  } else {
    moveToTopButton.style.opacity = 1;
    moveToTopButton.style.zIndex = 1;
  }
});

burgerCheckbox.addEventListener("change", function (event) {
  if (event.target.checked) {
    moveToTopButton.style.display = "none";
  } else {
    moveToTopButton.style.display = "block";
  }
});
menuList.addEventListener("click", function (event) {
  if (event.target.tagName === "A" && burgerCheckbox.checked) {
    burgerCheckbox.click();
  }
});
