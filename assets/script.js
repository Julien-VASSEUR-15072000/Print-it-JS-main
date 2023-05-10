const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const divDots = [
  {
    div: `<div class="dot dot_selected"></div> 
  <div class="dot"></div> 
  <div class="dot"></div> 
  <div class="dot"></div>`,
  },
  {
    div: `<div class="dot"></div> 
  <div class="dot dot_selected"></div> 
  <div class="dot"></div> 
  <div class="dot"></div>`,
  },
  {
    div: `<div class="dot"></div> 
  <div class="dot"></div> 
  <div class="dot dot_selected"></div> 
  <div class="dot"></div>`,
  },
  {
    div: `<div class="dot"></div> 
  <div class="dot"></div> 
  <div class="dot"></div>
  <div class="dot dot_selected"></div>`,
  },
];

const leftArrowElt = document.querySelector(".arrow_left");
const rightArrowElt = document.querySelector(".arrow_right");

const bannerImgElt = document.querySelector(".banner-img");

const tagLine = document.querySelector("p");
const dots = document.querySelector(".dots");

let currentSlide = 0;

leftArrowElt.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide = currentSlide - 1;
  } else {
    currentSlide = currentSlide + 3;
  }
  bannerImgElt.src = `assets/images/slideshow/` + slides[currentSlide].image;
  tagLine.innerHTML = slides[currentSlide].tagLine;
  dots.innerHTML = divDots[currentSlide].div;

  console.log(dots);
});

rightArrowElt.addEventListener("click", () => {
  if (currentSlide < 3) {
    currentSlide = currentSlide + 1;
  } else {
    currentSlide = currentSlide - 3;
  }
  bannerImgElt.src = `assets/images/slideshow/` + slides[currentSlide].image;
  tagLine.innerHTML = slides[currentSlide].tagLine;
  dots.innerHTML = divDots[currentSlide].div;

  console.log(dots);
});
