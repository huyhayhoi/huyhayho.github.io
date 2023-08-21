//check key
function checkKey() {
    const key = 'key';
    let inputKey = document.getElementById("logkey").value;

    if (inputKey === key) {
        document.querySelector(".open").classList.add("hidden");
        document.querySelector(".main").classList.remove("hidden");
    } else {
        alert('Sai rùi kìa. thử lại coai.');
    }
}

// Swiper1
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

//swiper2
var swiper = new Swiper(".mySwiper2", {
  effect: "cards",
  grabCursor: true,
});

//swiper3


//button
let activeButton = null;
const cnt1 = document.querySelector(".box1");
const cnt2 = document.querySelector(".box2");

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

  // if (activeButton == null) {
  //   document.querySelector(".box-content").style.display = "none";
  // } else {
  //   document.querySelector(".box-content").style.display = "block";
  // }
  if (document.querySelector(".btn1").classList.contains("active")) {
    cnt1.classList.add("box-active");
  } else {
    cnt1.classList.remove("box-active");
  }
  if (document.querySelector(".btn2").classList.contains("active")) {
    cnt2.classList.add("box-active");
  } else {
    cnt2.classList.remove("box-active");
  }
}

// if (document.querySelector(".btn1").classList.contains("active")) {
//     document.querySelector(".content").classList.add("box-active");
//   }
// )
//accordion
// const accordion = document.querySelectorAll(".box");
// for(const i of accordion) {
//     i.addEventListener("click", () => {
//         this.classList.toggle
//     })
// }