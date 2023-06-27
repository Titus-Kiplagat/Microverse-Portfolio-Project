const menuOpenBtn = document.querySelector('.menu-open-btn');
const menuCloseBtn = document.querySelector('.menu-close-btn');
const navbarBtns = document.querySelectorAll('.navbar-btn');

const toggleMenu = () => {
  const mobileMenu = document.getElementById('mobile-navbar');
  mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
};

menuOpenBtn.addEventListener('click', toggleMenu);
menuCloseBtn.addEventListener('click', toggleMenu);

navbarBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    toggleMenu();
    const targetSectionId = e.target.getAttribute('href');
    const targetSection = document.querySelector(targetSectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
