"use strict";

// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
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
// Advannced DOM MSNUPULATION

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const header = document.querySelector(".header");
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
message.style.backgroundColor = "#37383d";
message.style.width = "120%";
console.log(message.style.width);
console.log(message.style.backgroundColor);
console.log(message.style.color);
console.log(getComputedStyle(message).color);
message.style.height =
  Number.parseInt(getComputedStyle(message).height) + 40 + "px";
document.documentElement.style.setProperty("--color-primary", "orangeRed");
// Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.src);
console.log(logo.alt);
console.log(logo.getAttribute("designer"));
logo.setAttribute("Company", "Bankist");
//Classes
logo.classList.add("C");
logo.classList.remove("C");
logo.classList.toggle("C");
logo.classList.contains("C");
//over write al classes++
//logo.className = "contaiiner"
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log(`Current Scroll (x/y)`, window.scrollX, window.scrollY);
  console.log(
    `Height/Width`,
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  // scrolling in Old Version
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });
  // Scrolling in Modern Version
  section1.scrollIntoView({ behavior: "smooth" });
});
//  E V E N T        H A N D L E R
const h1 = document.querySelector("h1");
const allertH1 = () => {
  alert("Great You Click h1");
  setTimeout(() => h1.removeEventListener("mouseenter", allertH1), 4000 * 60);
};
h1.addEventListener("mouseenter", allertH1);

//  E/V/E/N/T/B/U/B/B/L/I/N/G/
//rgb(255,255,255)
const randomInt = (min, max) => Math.floor(Math.random() * max - min + 1) + min;
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor());

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("nav--link", e.target, e.currentTarget);
  console.log(e.currentTarget === this);
  // stopPrppagation
  //   e.stopPropagation();
});
document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("nav--links", e.target, e.currentTarget);
});
document.querySelector(".nav").addEventListener(
  "click",
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log("nav", e.target, e.currentTarget);
  },
  true
);
