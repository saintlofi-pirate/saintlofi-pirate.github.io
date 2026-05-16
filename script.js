const scene = document.querySelector('.scene');
const cursorOrb = document.querySelector('.cursor-orb');

if (scene && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.addEventListener('pointermove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5).toFixed(3);
    const y = (event.clientY / window.innerHeight - 0.5).toFixed(3);
    scene.style.setProperty('--mx', x);
    scene.style.setProperty('--my', y);

    if (cursorOrb) {
      cursorOrb.classList.add('is-visible');
      cursorOrb.style.transform = `translate3d(${event.clientX - 17}px, ${event.clientY - 17}px, 0)`;
    }
  }, { passive: true });

  window.addEventListener('pointerleave', () => {
    cursorOrb?.classList.remove('is-visible');
  });

}
