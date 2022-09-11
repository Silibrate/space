const headerNavIcon = document.querySelector('.header-nav__icon');
const headerNav = document.querySelector('.header-nav');
const body = document.querySelector('.body');
headerNavIcon.addEventListener('click', () => {
  headerNav.classList.toggle('header-nav_active');
  body.classList.toggle('body_lock');
  headerNavIcon.classList.toggle('_active')
})
