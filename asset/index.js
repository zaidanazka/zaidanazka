
document.addEventListener('DOMContentLoaded', function() {
  const learnMoreButton = document.querySelector('.btn-primary');
  const contactUsButton = document.querySelector('.btn-outline-secondary');

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
