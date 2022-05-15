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
  } else if(width === 810){

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

  }else {

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
  const menuContainer = document.querySelector(".menu-container")


  menuBtn.addEventListener("click", showMenu, false);

  function showMenu() {
      menuContainer.style.visibility = "visible";
      gsap.from(menuContainer,{
        duration: 1,
        y: -100

      })
  }

