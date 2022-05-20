// const imageOne = document.querySelector(".artist-image");
// const imageTwo = document.querySelector(".artist-image-two");

// imageOne.addEventListener('click', () => {

//     var a = "Heloo ";
//     localStorage.setItem("value", a);
//     window.location.href = "../artist-info.html"

// }, false)

// imageTwo.addEventListener('click', () => {

//     var a = "Haylo";
//     localStorage.setItem("value", a);
//     window.location.href = "../artist-info.html"

// }, false)

// HAMBURGER MENU

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

const images = document.querySelectorAll(".artist-image");
let imagesCount = images.length;

for (i = 0; i < imagesCount; i++) {
  let allImages = images[i];
  // allImages.classList.add(`SAMPLE${i}`);
  allImages.setAttribute("id", i);
  allImages.setAttribute("onClick", "doSomething(event, this)");
}

function doSomething(el, e) {
  // console.log(el)
  console.log(e.id);

  // if (e.classList.contains("SAMPLE0")){
  //     console.log();
  // } else {
  //     console.log("SADDD");
  // }

  var artistID = e.id;
  localStorage.setItem("id", artistID);
  window.location.href = "../artist-info.html";
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
