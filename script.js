const menuBtn =
document.querySelector('.menu-btn');

const mobileMenu =
document.querySelector('.mobile-menu');


menuBtn.addEventListener(
  'click',
  () => {

    const open =
    mobileMenu.classList.toggle('open');

    menuBtn.setAttribute(
      'aria-expanded',
      open
    );

  }
);


document
.querySelectorAll('.mobile-menu a')
.forEach(link => {

  link.addEventListener(
    'click',
    () => {

      mobileMenu
      .classList
      .remove('open');

    }
  );

});


/* SCROLL ANIMATION */

const revealObserver =
new IntersectionObserver(

  entries => {

    entries.forEach(
      entry => {

        if(
          entry.isIntersecting
        ){

          entry.target
          .classList
          .add('visible');

        }

      }
    );

  },

  {
    threshold:.12
  }

);


document
.querySelectorAll('.reveal')
.forEach(

  element => {

    revealObserver
    .observe(element);

  }

);


/* FILTER VIDEOS */

const filters =
document.querySelectorAll('.filter');

const cards =
document.querySelectorAll('.video-card');


filters.forEach(

  button => {

    button.addEventListener(
      'click',
      () => {

        filters.forEach(

          item => {

            item.classList
            .remove('active');

          }

        );


        button.classList
        .add('active');


        const wanted =
        button.dataset.filter;


        cards.forEach(

          card => {

            const categories =

            (
              card.dataset.category || ''
            )

            .split(' ');


            const hide =

            wanted !== 'all'

            &&

            !categories
            .includes(wanted);


            card.classList
            .toggle(
              'hidden-card',
              hide
            );

          }

        );

      }

    );

  }

);


/* VIDEO POPUP */

const modal =
document.getElementById(
  'videoModal'
);


const frame =
document.getElementById(
  'videoFrame'
);


const modalTitle =
document.getElementById(
  'modalTitle'
);


const modalSubtitle =
document.getElementById(
  'modalSubtitle'
);


function openVideo(card){

  const id =
  card.dataset.video;


  if(!id) return;


  frame.src =

  `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;


  modalTitle.textContent =

  card.dataset.title ||
  'Video';


  modalSubtitle.textContent =

  card.dataset.subtitle ||
  '';


  modal.classList
  .add('open');


  document.body.style.overflow =
  'hidden';

}


function closeVideo(){

  modal.classList
  .remove('open');


  frame.src = '';


  document.body.style.overflow =
  '';

}


document
.querySelectorAll(
  '.video-card[data-video]'
)
.forEach(

  card => {

    card.addEventListener(
      'click',
      () => {

        openVideo(card);

      }
    );

  }

);


document
.querySelectorAll(
  '[data-close]'
)
.forEach(

  element => {

    element.addEventListener(
      'click',
      closeVideo
    );

  }

);


document
.addEventListener(
  'keydown',
  event => {

    if(
      event.key === 'Escape'
    ){

      closeVideo();

    }

  }
);
