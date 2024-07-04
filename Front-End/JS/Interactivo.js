// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const ctaButtons = document.querySelectorAll('.cta');
    
    ctaButtons.forEach(button => {
      button.addEventListener('click', () => {
        alert('¡Botón clicado!');
      });
    });
  });
  