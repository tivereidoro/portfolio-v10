// SWIPER JS CODE (TESTIMONIAL SECTION).

const swiper = new Swiper('.swiper', {
 autoplay: {
   delay: 4000,
   disableOnInteraction: false,
 },
 // effect: 'fade',
 scrollbar: {
  el: '.swiper-scrollbar',
  draggable: true,
 },
});


// MENU EFFECT
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');

// Show  sidebar menu
menuBtn.addEventListener('click', () => {
  menu.style.display = 'block';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
})

// Hide menu
closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  menuBtn.style.display = 'inline-block';
  closeBtn.style.display = 'none';
})


const navItems = menu.querySelectorAll('li');

const changeActiveMenu = () => {
  navItems.forEach(item => {
    const link = item.querySelector('a');
    link.classList.remove('active');
  })
}

navItems.forEach(item => {
  const link = item.querySelector('a');
  link.addEventListener('click', () => {
    changeActiveMenu();
    link.classList.add('active');
  })
})