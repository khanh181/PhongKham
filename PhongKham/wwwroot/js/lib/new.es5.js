"use strict";

$(document).ready(function () {
  new Splide("#banner-carousel", {
    start: 0,
    perMove: 1,
    perPage: 2.5,
    padding: { left: "2px", right: "2px" },
    gap: "12px",
    focus: 0,
    omitEnd: true,
    trimSpace: true,

    pagination: false,
    breakpoints: {
      950: {
        perPage: 1.5
      }
    },
    classes: {
      arrows: "splide__arrows slide-arrows",
      arrow: "splide__arrow slide-arrow",
      prev: "splide__arrow--prev slide-prev",
      next: "splide__arrow--next slide-next"
    }
  }).mount();
  new Splide("#news-carousel", {
    start: 0,
    perMove: 1,
    perPage: 2.5,
    gap: "12px",
    focus: 0,
    omitEnd: true,
    trimSpace: true,
    lazyLoad: "nearby",
    pagination: false,
    breakpoints: {
      950: {
        perPage: 1.5
      }
    }
  }).mount();
  new Splide("#newstype-carousel", {
    arrows: false,
    perPage: 4,
    pagination: false,
    gap: "12px",
    breakpoints: {
      500: {
        perPage: 3
      }
    }
  }).mount();
});

