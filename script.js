const botao = document.getElementById("botao-acessibilidade");
const opcoes = document.getElementById("opcoes-acessibilidade");
const aumentarFonte = document.getElementById("aumentar-fonte");
const diminuirFonte = document.getElementById("diminuir-fonte");
const alternaContraste = document.getElementById("alterna-contraste");

// Alterna visibilidade das opções ao passar o mouse
botao.addEventListener("mouseenter", () => {
  opcoes.style.display = "flex";
});

botao.addEventListener("mouseleave", () => {
  opcoes.style.display = "none";
});

opcoes.addEventListener("mouseleave", () => {
  opcoes.style.display = "none";
});

// Aumentar fonte
aumentarFonte.addEventListener("click", () => {
  document.body.style.fontSize = "larger";
});

// Diminuir fonte
diminuirFonte.addEventListener("click", () => {
  document.body.style.fontSize = "smaller";
});

// Alternar contraste
alternaContraste.addEventListener("click", () => {
  document.body.classList.toggle("contraste-alto");
});

// Animações com ScrollReveal
ScrollReveal().reveal('#inicio', { delay: 200, distance: '50px', origin: 'bottom' });
ScrollReveal().reveal('#tropicalia', { delay: 400, distance: '50px', origin: 'left' });
ScrollReveal().reveal('#galeria', { delay: 600, distance: '50px', origin: 'right' });
ScrollReveal().reveal('#contato', { delay: 800, distance: '50px', origin: 'bottom' });
