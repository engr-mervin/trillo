"use strict";

const activeTab = document.querySelector(".side-nav__item--active");

console.log(activeTab);

const tabs = document.querySelectorAll(".side-nav__item");

const tabClicked = function (e) {
  e.preventDefault();
  tabs.forEach((el) => {
    if (e.currentTarget !== el) {
      el.classList.remove("side-nav__item--active");
    } else {
      el.classList.add("side-nav__item--active");
    }
  });
};

tabs.forEach((el) => {
  el.addEventListener("click", tabClicked);
});
