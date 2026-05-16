const scene = document.querySelector('.scene');

if (scene && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.addEventListener('pointermove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5).toFixed(3);
    const y = (event.clientY / window.innerHeight - 0.5).toFixed(3);
    scene.style.setProperty('--mx', x);
    scene.style.setProperty('--my', y);
  }, { passive: true });
}
