const toggleButton = document.getElementById('toggle');
const overlay = document.getElementById('overlay');

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active');
    overlay.classList.toggle('open');
    // quitar position absolute de la clase overlay
    toggleButton.classList.toggle('noabs');
});
