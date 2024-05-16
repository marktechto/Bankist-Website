"use strict";

// Modal window
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabContent = document.querySelectorAll(".operations__content");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Navigation Page
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
// const id = e.target.getAttribute("href");
//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });
//      EVENT DELEGATION ??  ???? ???????????
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});
// DOM TRAVERSING
// Go DownWards
const h1 = document.querySelector("h1");
console.log(h1.querySelectorAll(".highlight"));
// console.log(h1.childNodes);
console.log(h1.children);
console.log(h1.parentNode);
console.log(h1.parentElement);
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangeRed";

// Go Upwards Find Parents
h1.closest(".header").style.background = "var(--gradient-secondary)";
h1.closest("h1").style.backgroundColor = "var(  --color-primary-darker)";
h1.closest(".header").style.background = "var(--gradient-secondary)";
// Tabed Component
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);

  if (!clicked) return;
  // active tab
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabContent.forEach((c) => c.classList.remove("operations__content--active"));
  clicked.classList.add("operations__tab--active");
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

//****************** Menu Bar Fade**************
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");
    siblings.forEach((el) => {
      if (el !== link) {
      }
      el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
// Passing an Argument
nav.addEventListener("mouseout", handleHover.bind(1));
nav.addEventListener("mouseover", handleHover.bind(0.5));
// Advannced DOM MSNUPULATION

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const allSections = document.querySelectorAll(".section");
console.log(allSections);
document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);
console.log(document.getElementsByName("btn"));
// creating and inserting
const message = document.createElement("div");
message.classList.add("cookie-message");
message.textContent = "We use cookie for improved functionality and analytics";
message.innerHTML = `We use cookie for improved functionality and analytics.<button class="btn btn--close--cookie">Got it</button>`;
header.append(message);
// header.before(message);
// header.after(message);
document
  .querySelector(".btn--close--cookie")
  .addEventListener("click", function () {
    message.remove();
  });
// styling Atttribute and Classes
// message.style.backgroundColor = "#37383d";
// message.style.width = "120%";
// console.log(message.style.width);
// console.log(message.style.backgroundColor);
// console.log(message.style.color);
// console.log(getComputedStyle(message).color);
// message.style.height =
//   Number.parseInt(getComputedStyle(message).height) + 40 + "px";
// document.documentElement.style.setProperty("--color-primary", "orangeRed");
// // Attributes
// const logo = document.querySelector(".nav__logo");
// console.log(logo.src);
// console.log(logo.alt);
// console.log(logo.getAttribute("designer"));
// logo.setAttribute("Company", "Bankist");
// //Classes
// logo.classList.add("C");
// logo.classList.remove("C");
// logo.classList.toggle("C");
// logo.classList.contains("C");
//over write al classes++
//logo.className = "contaiiner"
// const btnScrollTo = document.querySelector(".btn--scroll-to");
// const section1 = document.querySelector("#section--1");
// btnScrollTo.addEventListener("click", function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);
//   console.log(e.target.getBoundingClientRect());
//   console.log(`Current Scroll (x/y)`, window.scrollX, window.scrollY);
//   console.log(
//     `Height/Width`,
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );
// scrolling in Old Version
// window.scrollTo({
//   left: s1coords.left + window.pageXOffset,
//   top: s1coords.top + window.pageYOffset,
//   behavior: "smooth",
// });
// Scrolling in Modern Version
// });
//  E V E N T        H A N D L E R
// const h1 = document.querySelector("h1");
// const allertH1 = () => {

//   setTimeout(() => h1.removeEventListener("mouseenter", allertH1), 4000 * 60);
// };
// h1.addEventListener("mouseenter", allertH1);

//  E/V/E/N/T/B/U/B/B/L/I/N/G/
//rgb(255,255,255)
// const randomInt = (min, max) => Math.floor(Math.random() * max - min + 1) + min;
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor());

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("nav--link", e.target, e.currentTarget);
//   console.log(e.currentTarget === this);
//   // stopPrppagation
//   e.stopPropagation();
// });
// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("nav--links", e.target, e.currentTarget);
// });
// document.querySelector(".nav").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("nav", e.target, e.currentTarget);
// });
