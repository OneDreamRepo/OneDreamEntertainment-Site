// var swiper = new Swiper(".artist-media-images", {
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

let width = screen.width;

if (width <= 428) {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    autoplay: {
      delay: 1800,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
} else if (width === 810) {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    autoplay: {
      delay: 1800,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
} else {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
    autoplay: {
      delay: 1800,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

const menuBtn = document.querySelector(".hamburg-menu");
const menuContainer = document.querySelector(".menu-container");

menuBtn.addEventListener("click", showMenu, false);

function showMenu() {
  menuContainer.style.visibility = "visible";
  gsap.from(menuContainer, {
    duration: 1,
    y: -100,
  });
}

const modalBackBtn = document.querySelector(".fa-arrow-left");
const contactModal = document.querySelector(".contact-modal");
const contactBtn = document.getElementById("contact-button");
const contactBtnTwo = document.getElementById("contact-button-two");

contactBtnTwo.addEventListener(
  "click",
  () => {
    contactModal.style.display = "block";
  },
  false
);

contactBtn.addEventListener(
  "click",
  () => {
    contactModal.style.display = "block";
  },
  false
);

modalBackBtn.addEventListener(
  "click",
  () => {
    contactModal.style.display = "none";
  },
  false
);

//GSAP ANIMATIONS
//GSAP ANIMATIONS
//GSAP ANIMATIONS

const body = document.getElementsByTagName("body")[0];

gsap.from(body, {
  y: -500,
  duration: 1,
  opacity: 0,
  ease: "circ.out",
});

const logo = document.getElementById("logo-header");

gsap.from(logo, {
  y: -500,
  delay: 0.3,
  duration: 1,
  opacity: 0,
  ease: "circ.out",
});

const navigation = document.getElementById("nav-menu");

console.log(navigation);

gsap.from(navigation.children, {
  y: -500,
  delay: 0.3,
  duration: 1,
  opacity: 0,
  ease: "circ.out",
});

const heroText = document.querySelector(".hero-text-container");
const headerText = document.getElementsByTagName("h1")[0];
const paragraph = document.getElementsByTagName("p");
const socmedLink = document.querySelector(".social-media-container");

console.log(socmedLink);

gsap.from(headerText.children[0], {
  duration: 1.5,
  scale: 0.1,
  delay: 1.2,
  x: -100,
  opacity: 0,
  ease: "circ.out",
});

gsap.from(headerText.children[1], {
  duration: 1.5,
  scale: 0.1,
  delay: 1.6,
  x: -100,
  opacity: 0,
  ease: "circ.out",
});

gsap.from(paragraph, {
  duration: 0.5,
  delay: 1.8,
  y: -10,
  opacity: 0,
  ease: "circ.out",
});
gsap.from(socmedLink.children, {
  duration: 0.5,
  delay: 1.8,
  y: -10,
  opacity: 0,
  ease: "circ.out",
});
