/* =========================
   MOBILE MENU
========================= */

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



/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
document.querySelectorAll(".reveal");


const revealObserver =
new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        revealObserver.unobserve(
          entry.target
        );

      }

    });

  },

  {
    threshold:0.12
  }

);


revealElements.forEach(element => {

  revealObserver.observe(element);

});



/* =========================
   HERO PARALLAX
========================= */

const heroBackground =
document.getElementById("heroBackground");


window.addEventListener(
  "scroll",
  () => {

    if (!heroBackground) return;


    const scroll =
    window.scrollY;


    if (scroll < window.innerHeight) {

      heroBackground.style.transform =
      `translateY(${scroll * 0.10}px) scale(1.04)`;

    }

  },

  {
    passive:true
  }

);



/* =========================
   PORTFOLIO NAVIGATION
========================= */

const portfolioHome =
document.getElementById("portfolioHome");


const categoryCards =
document.querySelectorAll(".category-card");


const portfolioPages =
document.querySelectorAll(".portfolio-page");


const backButtons =
document.querySelectorAll(".back-button");



function closePortfolioPages() {

  portfolioPages.forEach(page => {

    page.classList.remove("active");

  });

}



function openPortfolioPage(pageId) {

  closePortfolioPages();


  const page =
  document.getElementById(pageId);


  if (!page) {

    return;

  }


  portfolioHome.style.opacity =
  "0";


  portfolioHome.style.transform =
  "translateY(-15px)";


  setTimeout(() => {

    portfolioHome.style.display =
    "none";


    page.classList.add("active");


    document
    .getElementById("portfolio")
    .scrollIntoView({

      behavior:"smooth",

      block:"start"

    });

  }, 250);

}



categoryCards.forEach(card => {

  card.addEventListener(
    "click",
    () => {

      const target =
      card.dataset.page;


      openPortfolioPage(target);

    }
  );

});



function backToPortfolio() {

  closePortfolioPages();


  portfolioHome.style.display =
  "block";


  portfolioHome.style.opacity =
  "0";


  portfolioHome.style.transform =
  "translateY(15px)";


  requestAnimationFrame(() => {

    requestAnimationFrame(() => {

      portfolioHome.style.transition =
      "all .45s cubic-bezier(.2,.8,.2,1)";


      portfolioHome.style.opacity =
      "1";


      portfolioHome.style.transform =
      "none";

    });

  });


  document
  .getElementById("portfolio")
  .scrollIntoView({

    behavior:"smooth",

    block:"start"

  });

}



backButtons.forEach(button => {

  button.addEventListener(
    "click",
    backToPortfolio
  );

});



/* =========================
   VIDEO MODAL
========================= */

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


const modalBackdrop =
document.getElementById("modalBackdrop");



function openVideo(card) {

  const videoId =
  card.dataset.video;


  if (!videoId) return;


  videoPlayer.src =

  `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;


  modalTitle.textContent =
  card.dataset.title || "";


  modalType.textContent =
  card.dataset.type || "";


  videoModal.classList.add("open");


  document.body.classList.add(
    "modal-open"
  );

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

  videoModal.classList.remove(
    "open"
  );


  videoPlayer.src =
  "";


  document.body.classList.remove(
    "modal-open"
  );

}



if (modalClose) {

  modalClose.addEventListener(
    "click",
    closeVideo
  );

}


if (modalBackdrop) {

  modalBackdrop.addEventListener(
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
