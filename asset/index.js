document.addEventListener('DOMContentLoaded', function() {
  const navbarToggler = document.getElementById('navbar-toggler');
  const navbarNav = document.getElementById('navbarNav');
  const learnMoreButton = document.querySelector('.btn-primary');
  const contactUsButton = document.querySelector('.btn-outline-secondary');

  navbarToggler.addEventListener('click', function() {
    navbarNav.classList.toggle('show');
  });

  learnMoreButton.addEventListener('click', function() {
    window.scrollTo({
      top: document.querySelector('#services').offsetTop,
      behavior: 'smooth'
    });
  });

  contactUsButton.addEventListener('click', function() {
    window.scrollTo({
      top: document.querySelector('#contact').offsetTop,
      behavior: 'smooth'
    });
  });
});
