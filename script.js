"use strict";

// Modal window
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const allSections = document.querySelectorAll(".section");
const section1 = document.querySelector("#section--1");
const allButtons = document.getElementsByTagName("button");
const message = document.createElement("div");
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

//   EVENT DELEGATION ??  ???? ???????????
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});
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
//???? ????? ???? ?????/  ///////
nav.addEventListener("mouseout", handleHover.bind(1));
nav.addEventListener("mouseover", handleHover.bind(0.5));
//|||||||||||||||||||||||||||||||||||||||||
//Adding Sticky Navigation
// const intialcoords = section1.getBoundingClientRect();
// console.log(intialcoords);
// window.addEventListener("scroll", function () {
//   if (window.scrollY > intialcoords.top) {
//     nav.classList.add("sticky");
//   } else {
//     nav.classList.remove("sticky");
//   }
// });
//||||||||||||||||||||||||||||||||
// Stciky navigation Interesection Server
const navHeight = nav.getBoundingClientRect().height;
const stickyMov = function (entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  });
};
const observHeader = new IntersectionObserver(stickyMov, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
observHeader.observe(header);

//|||||||||||||||| REveal Section||||||||||||||||
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});
allSections.forEach((section) => {
  sectionObserver.observe(section);
  // section.classList.add("section--hidden");
});
// Lazy Loading images
const imgTargets = document.querySelectorAll("img[data-src]");
const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});
imgTargets.forEach((img) => imgObserver.observe(img));

// S L I D E R
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const slider = document.querySelector(".slider");
  const dotContainer = document.querySelector(".dots");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  let curSlide = 0;
  const maxSlide = slides.length;

  // slider.style.transform = "scale(0.4) translateX(-800px)";
  // slider.style.overflow = "visible";
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };
  createDots();
  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));
    document
      .querySelector(`.dots__dot[data-slide = "${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  const init = function () {
    goToSlide(0);
    activateDot(0);
  };
  init();
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });
  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
// Advannced DOM MSNUPULATION
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
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
document.addEventListener("DOMContentLoaded", function (e) {
  console.log("HTML PArsed", e);
});
