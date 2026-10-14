/* MOBILE MENU */

const menuBtn =
document.getElementById("menuBtn");

const mobileMenu =
document.getElementById("mobileMenu");


menuBtn.addEventListener(
  "click",
  () => {

    mobileMenu.classList.toggle("open");

  }
);


document
.querySelectorAll(".mobile-menu a")
.forEach(link => {

  link.addEventListener(
    "click",
    () => {

      mobileMenu.classList.remove("open");

    }
  );

});



/* CATEGORY CARDS */

const categoryCards =
document.querySelectorAll(".category-card");

const videoSections =
document.querySelectorAll(".videos-section");


categoryCards.forEach(card => {

  card.addEventListener(
    "click",
    () => {

      const target =
      card.dataset.target;


      videoSections.forEach(section => {

        section.classList.remove("active-section");

      });


      const selectedSection =
      document.getElementById(target);


      selectedSection
      .classList
      .add("active-section");


      setTimeout(() => {

        selectedSection.scrollIntoView({

          behavior:"smooth",

          block:"start"

        });

      },100);

    }
  );

});



/* BACK BUTTON */

document
.querySelectorAll(".back-btn")
.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      videoSections.forEach(section => {

        section.classList.remove("active-section");

      });


      document
      .getElementById("portfolio")
      .scrollIntoView({

        behavior:"smooth",

        block:"start"

      });

    }
  );

});



/* VIDEO PLAYER */

const videoCards =
document.querySelectorAll(".video-card");


const videoModal =
document.getElementById("videoModal");


const videoPlayer =
document.getElementById("videoPlayer");


const modalTitle =
document.getElementById("modalTitle");


const modalType =
document.getElementById("modalType");


const modalClose =
document.getElementById("modalClose");


const modalBg =
document.getElementById("modalBg");



videoCards.forEach(card => {

  card.addEventListener(
    "click",
    () => {

      const id =
      card.dataset.video;


      const title =
      card.dataset.title;


      const type =
      card.dataset.type;


      videoPlayer.src =

      `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;


      modalTitle.textContent =
      title;


      modalType.textContent =
      type;


      videoModal
      .classList
      .add("open");


      document.body.style.overflow =
      "hidden";

    }
  );

});



function closeVideo() {


  videoModal
  .classList
  .remove("open");


  videoPlayer.src =
  "";


  document.body.style.overflow =
  "";

}



modalClose
.addEventListener(
  "click",
  closeVideo
);


modalBg
.addEventListener(
  "click",
  closeVideo
);


document
.addEventListener(
  "keydown",
  event => {

    if(event.key === "Escape") {

      closeVideo();

    }

  }
);
