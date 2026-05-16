const hero = document.querySelector('.hero');
const cosmos = document.querySelector('.cosmos');

if (hero && cosmos && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  cosmos.addEventListener('pointermove', (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;
    hero.style.setProperty('--tilt-x', (y * -1.4).toFixed(3) + 'deg');
    hero.style.setProperty('--tilt-y', (x * 1.8).toFixed(3) + 'deg');
    cosmos.style.setProperty('--mx', x.toFixed(3));
    cosmos.style.setProperty('--my', y.toFixed(3));
  }, { passive: true });

  cosmos.addEventListener('pointerleave', () => {
    hero.style.setProperty('--tilt-x', '0deg');
    hero.style.setProperty('--tilt-y', '0deg');
  });
}
