const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.parentElement.classList.add('active');
  }
});