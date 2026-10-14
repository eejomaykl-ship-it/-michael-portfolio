/* ================= MOBILE MENU ================= */

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



/* ================= CATEGORY SWITCH ================= */

const categoryButtons =
document.querySelectorAll(".category-btn");

const categories =
document.querySelectorAll(".portfolio-category");


categoryButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {


      categoryButtons.forEach(btn => {

        btn.classList.remove("active");

      });


      categories.forEach(category => {

        category.classList.remove("active-category");

      });


      button.classList.add("active");


      const selected =
      button.dataset.section;


      document
      .getElementById(selected)
      .classList
      .add("active-category");

    }
  );

});



/* ================= VIDEO PLAYER ================= */

const videoCards =
document.querySelectorAll(".video-card");


const videoModal =
document.getElementById("videoModal");


const youtubePlayer =
document.getElementById("youtubePlayer");


const videoTitle =
document.getElementById("videoTitle");


const videoType =
document.getElementById("videoType");


const closeVideo =
document.getElementById("closeVideo");


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


      youtubePlayer.src =

      `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;


      videoTitle.textContent =
      title;


      videoType.textContent =
      type;


      videoModal.classList.add("open");


      document.body.style.overflow =
      "hidden";

    }
  );

});



function closePlayer() {


  videoModal.classList.remove("open");


  youtubePlayer.src = "";


  document.body.style.overflow =
  "";

}



closeVideo.addEventListener(
  "click",
  closePlayer
);


modalBg.addEventListener(
  "click",
  closePlayer
);


document.addEventListener(
  "keydown",
  e => {

    if(e.key === "Escape") {

      closePlayer();

    }

  }
);
