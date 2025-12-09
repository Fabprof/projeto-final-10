document.addEventListener('DOMContentLoaded', () => {
  // Seleciona todos os elementos do DOM uma única vez
  const accessibilityButton = document.getElementById("botao-acessibilidade");
  const accessibilityOptions = document.getElementById("opcoes-acessibilidade");
  const increaseFontButton = document.getElementById("aumentar-fonte");
  const decreaseFontButton = document.getElementById("diminuir-fonte");
  const toggleContrastButton = document.getElementById("alterna-contraste");
  const body = document.body;

  // --- MELHORIA 1: Menu de Acessibilidade Acessível (com clique) ---
  // Troca os eventos de 'mouseenter'/'mouseleave' por 'click' para funcionar com teclado e toque.
  accessibilityButton.addEventListener("click", (event) => {
    // Impede que o clique no botão feche o menu imediatamente (ver listener no 'document')
    event.stopPropagation(); 
    
    const isExpanded = accessibilityButton.getAttribute('aria-expanded') === 'true';
    accessibilityOptions.style.display = isExpanded ? "none" : "flex";
    accessibilityButton.setAttribute('aria-expanded', !isExpanded);
  });

  // Fecha o menu se o usuário clicar fora dele
  document.addEventListener('click', () => {
    accessibilityOptions.style.display = 'none';
    accessibilityButton.setAttribute('aria-expanded', 'false');
  });

  // --- MELHORIA 2: Controle de Fonte Preciso ---
  // Função para alterar o tamanho da fonte de forma controlada
  const changeFontSize = (increase) => {
    const currentSize = parseFloat(window.getComputedStyle(body).fontSize);
    const newSize = increase ? currentSize + 2 : currentSize - 2;
    // Define um limite mínimo para não deixar a fonte ilegível
    if (newSize >= 12) {
      body.style.fontSize = `${newSize}px`;
    }
  };

  increaseFontButton.addEventListener("click", () => changeFontSize(true));
  decreaseFontButton.addEventListener("click", () => changeFontSize(false));

  // --- Funcionalidade de Contraste (já estava boa, mantida) ---
  toggleContrastButton.addEventListener("click", () => {
    body.classList.toggle("contraste-alto");
  });

  // --- MELHORIA 3: Otimização do ScrollReveal ---
  // Instancia o ScrollReveal uma vez e encadeia as chamadas para um código mais limpo.
  const sr = ScrollReveal({
    delay: 200,
    distance: '50px',
    easing: 'ease-in-out',
    reset: false // A animação ocorre apenas uma vez
  });

  sr.reveal('#inicio', { origin: 'bottom' });
  sr.reveal('#tropicalia', { origin: 'left', delay: 400 });
  sr.reveal('#galeria', { origin: 'right', delay: 600 });
  sr.reveal('#contato', { origin: 'bottom', delay: 800 });
});
