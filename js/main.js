// product swiper
const swiper = new Swiper(".product-swiper", {
  loop: false,
  slidesPerView: 1,
  grabCursor: true,
  breakpoints: {
    350: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    450: {
      slidesPerView: 1.75,
      spaceBetween: 20,
    },
    630: {
      slidesPerView: 2.1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 50,
    },
    1300: {
      slidesPerView: 4.5,
      spaceBetween: 50,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// accordion

const questionItems = document.querySelectorAll(".question-item");

questionItems.forEach((questionItem) => {
  const questionHeader = questionItem.querySelector(".question-header");

  questionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(questionItem);

    if (openItem && openItem !== questionItem) toggleItem(openItem);
  });
});

const toggleItem = (item) => {
  const questionBody = item.querySelector(".question-body");

  item.classList.contains("accordion-open")
    ? questionBody.removeAttribute("style")
    : (questionBody.style.height = `${questionBody.scrollHeight}px`);
  item.classList.toggle("accordion-open");
};
