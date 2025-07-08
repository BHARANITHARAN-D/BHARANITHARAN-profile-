// main.js — Hydra King Portfolio

// Typed Text Effect
const typed = new Typed('#typed', {
  strings: [
    'Web Developer',
    'Cybersecurity Enthusiast',
    'Python Programmer',
    'Full Stack Learner'
  ],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// Theme Toggle (Light/Dark)
const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', () => {
  const html = document.documentElement;
  html.setAttribute('data-theme',
    html.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
});

// tsParticles Background
tsParticles.load("particles-js", {
  background: {
    color: {
      value: "transparent"
    }
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 100, duration: 0.4 }
    }
  },
  particles: {
    color: { value: "#00ffff" },
    links: {
      color: "#00ffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    collisions: { enable: true },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "bounce" },
      random: false,
      speed: 2,
      straight: false
    },
    number: { density: { enable: true, area: 800 }, value: 50 },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 5 } }
  },
  detectRetina: true
});
