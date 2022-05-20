const backBtn = document.querySelector(".fa-arrow-left");

backBtn.addEventListener(
  "click",
  () => {
    history.back();
  },
  false
);
