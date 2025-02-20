const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = 'blue'; // Change la couleur au survol
  });

  link.addEventListener('mouseout', () => {
    link.style.color = ''; // Réinitialise la couleur
  });
});