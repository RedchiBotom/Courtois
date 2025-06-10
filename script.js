
document.addEventListener('DOMContentLoaded', () => {
  const poubelles = document.querySelectorAll('.poubelle');

  poubelles.forEach(poubelle => {
    poubelle.addEventListener('click', (e) => {
      e.preventDefault();
      poubelle.classList.add('bounce');
      setTimeout(() => {
        window.location.href = poubelle.getAttribute('href');
      }, 600); // attendre l'animation
    });
  });
});
