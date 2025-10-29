// Menu - Hamburguer
const toggle = document.getElementById('menu-toggle');
const links = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
    links.classList.toggle('show');
});

// Visus AI
(function () {
    const container = document.getElementById('imagens-app');
    let touched = false;

    if (!container) return;

    container.addEventListener('mouseenter', () => {
        container.classList.add('flipped');
    });
    container.addEventListener('mouseleave', () => {
        container.classList.remove('flipped');
    });

    container.addEventListener('touchstart', (e) => {
        e.stopPropagation();
        e.preventDefault && e.preventDefault();

        touched = !touched;
        if (touched) container.classList.add('flipped');
        else container.classList.remove('flipped');
    });
})();