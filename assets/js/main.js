/*=============== CARD HOVER ===============*/
const cardHover = document.querySelectorAll('.courses__card');

cardHover.forEach((nav, index) => {
  nav.addEventListener('mouseover', (event) => {
    event.preventDefault();
    
    cardHover.forEach(item => {
      item.classList.remove('courses__card-active');
    })    

    nav.classList.add('courses__card-active');
    
  })
})

/*=============== TESTIMONIALS ===============*/
const swiper = new Swiper(".testimonials__swiper", {        
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",      
  },
});

/*=============== SCROLLLREVEAL ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,  
  // reset: true
})

sr.reveal(`.hero__content`,)
sr.reveal(`.hero__box`, {delay: 600})
sr.reveal(`.testimonials__container`,{origin: 'bottom'})
sr.reveal(`.news__card`,{origin: 'right', interval: 100})
sr.reveal(`.courses__card, .team__card`,{origin: 'bottom', interval: 100})
sr.reveal(`.about__content, .team__text-description, .footer__site`,{origin: 'right'})
sr.reveal(`.nav__logo, .about__tag, .team__text-title, .news__text, .footer__join`,{origin: 'left'})
