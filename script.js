//check key
// function checkKey() {
//     const key = 'key';
//     let inputKey = document.getElementById("logkey").value;

//     if (inputKey === key) {
//         document.querySelector(".card").classList.add("hidden");
//         document.querySelector(".main").classList.remove("hidden");
//     } else {
//         alert('Sai rùi kìa. thử lại coai.');
//     }
// }

// Swiper1
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

//button
let activeButton = null;

function toggleColor(button) {
  if (activeButton !== null) {
    activeButton.classList.remove("active");
  }

  if (activeButton !== button) {
    button.classList.add("active");
    activeButton = button;
  } else {
    activeButton = null;
  }
}

//accordion
// const accordion = document.querySelectorAll(".box");
// for(const i of accordion) {
//     i.addEventListener("click", () => {
//         this.classList.toggle
//     })
// }