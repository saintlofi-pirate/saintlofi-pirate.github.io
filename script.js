const cosmos = document.querySelector('.cosmos');
const lampToggle = document.querySelector('.lamp-toggle');
let chargeTimer;

if (cosmos && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  cosmos.addEventListener('pointermove', (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;
    cosmos.style.setProperty('--mx', x.toFixed(3));
    cosmos.style.setProperty('--my', y.toFixed(3));
  }, { passive: true });

  cosmos.addEventListener('pointerleave', () => {
    cosmos.style.setProperty('--mx', '0');
    cosmos.style.setProperty('--my', '0');
  });
}

if (lampToggle && cosmos) {
  lampToggle.addEventListener('click', () => {
    const isLit = cosmos.classList.toggle('is-lit');
    lampToggle.setAttribute('aria-pressed', String(isLit));

    if (isLit && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      cosmos.classList.add('is-charging');
      window.clearTimeout(chargeTimer);
      chargeTimer = window.setTimeout(() => {
        cosmos.classList.remove('is-charging');
      }, 900);
    } else {
      cosmos.classList.remove('is-charging');
      window.clearTimeout(chargeTimer);
    }
  });
}
