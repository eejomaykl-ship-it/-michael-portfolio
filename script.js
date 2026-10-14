/* =========================================
   MOBILE MENU
========================================= */

const menuBtn =
document.getElementById("menuBtn");

const mobileMenu =
document.getElementById("mobileMenu");


if (menuBtn && mobileMenu) {

  menuBtn.addEventListener(
    "click",
    () => {

      mobileMenu.classList.toggle("open");

    }
  );

}


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



/* =========================================
   PORTFOLIO PAGES
========================================= */

const portfolioHome =
document.getElementById("portfolioHome");

const portfolioPages =
document.querySelectorAll(".portfolio-page");

const categoryCards =
document.querySelectorAll(".category-card");

const backButtons =
document.querySelectorAll(".back-to-portfolio");



function hideAllPortfolioPages() {

  portfolioPages.forEach(page => {

    page.classList.remove("active");

  });

}



function openPortfolioPage(pageID) {

  hideAllPortfolioPages();


  portfolioHome.style.display =
  "none";


  const selectedPage =
  document.getElementById(pageID);


  if (!selectedPage) {

    return;

  }


  selectedPage.classList.add("active");


  setTimeout(() => {

    document
    .getElementById("portfolio")
    .scrollIntoView({

      behavior:"smooth",

      block:"start"

    });

  }, 50);

}



categoryCards.forEach(card => {

  card.addEventListener(
    "click",
    () => {

      const pageID =
      card.dataset.page;


      openPortfolioPage(pageID);

    }
  );

});



function backToPortfolio() {

  hideAllPortfolioPages();


  portfolioHome.style.display =
  "block";


  setTimeout(() => {

    document
    .getElementById("portfolio")
    .scrollIntoView({

      behavior:"smooth",

      block:"start"

    });

  }, 50);

}



backButtons.forEach(button => {

  button.addEventListener(
    "click",
    backToPortfolio
  );

});



/* =========================================
   VIDEO PLAYER
========================================= */

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

const modalBackground =
document.getElementById("modalBackground");



function openVideo(card) {

  const videoID =
  card.dataset.video;


  const title =
  card.dataset.title || "";


  const type =
  card.dataset.type || "";


  if (!videoID) {

    return;

  }


  videoPlayer.src =

  `https://www.youtube.com/embed/${videoID}?autoplay=1&rel=0`;


  modalTitle.textContent =
  title;


  modalType.textContent =
  type;


  videoModal.classList.add("open");


  document.body.classList.add("no-scroll");

}



videoCards.forEach(card => {

  card.addEventListener(
    "click",
    () => {

      openVideo(card);

    }
  );

});



function closeVideo() {

  videoModal.classList.remove("open");


  videoPlayer.src =
  "";


  document.body.classList.remove("no-scroll");

}



if (modalClose) {

  modalClose.addEventListener(
    "click",
    closeVideo
  );

}


if (modalBackground) {

  modalBackground.addEventListener(
    "click",
    closeVideo
  );

}


document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      closeVideo();

    }

  }
);
