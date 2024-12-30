// Animação de rolagem para a seção "Sobre"
document.addEventListener("DOMContentLoaded", () => {
  const sobre = document.getElementById("sobre");
  window.addEventListener("scroll", () => {
    if (window.scrollY + window.innerHeight > sobre.offsetTop) {
      sobre.style.animation = "slideIn 1s ease-out";
    }
  });
});
