const backBtn = document.querySelector(".fa-arrow-left");

backBtn.addEventListener(
  "click",
  () => {
    history.back();
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
