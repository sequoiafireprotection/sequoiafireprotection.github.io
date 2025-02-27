document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault();

          const targetId = event.target.getAttribute('href').slice(1);
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
              window.scrollTo({
                  top: targetSection.offsetTop - 80, // Adjust for header height
                  behavior: 'smooth',
              });
          }
      });
  });
});
