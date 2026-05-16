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

  const startedAt = performance.now();
  const animateScene = (now) => {
    const seconds = (now - startedAt) / 1000;
    scene.style.setProperty('--life', Math.sin(seconds * 0.82).toFixed(3));
    scene.style.setProperty('--flame', ((Math.sin(seconds * 3.1) + Math.sin(seconds * 5.2) * 0.35) / 1.35).toFixed(3));
    scene.style.setProperty('--horse', Math.sin(seconds * 0.58 + 1.4).toFixed(3));
    requestAnimationFrame(animateScene);
  };

  requestAnimationFrame(animateScene);
}
