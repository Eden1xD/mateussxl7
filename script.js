// Fundo animado 3D
VANTA.NET({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x7e22ce,
  backgroundColor: 0x000000,
  points: 15.00,
  maxDistance: 25.00,
  spacing: 18.00
});

// Texto automático
const messages = [
  "M22⚽",
  "Jesus é o caminho",
  "Bom y novo"
];
let msgIndex = 0;
let charIndex = 0;
const typeEl = document.getElementById("typewriter");

function typeEffect() {
  if (charIndex < messages[msgIndex].length) {
    typeEl.textContent += messages[msgIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 80);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typeEl.textContent = messages[msgIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    msgIndex = (msgIndex + 1) % messages.length;
    setTimeout(typeEffect, 300);
  }
}
typeEffect();

// Avatar automático
let current = 0;
const avatars = document.querySelectorAll(".avatar");
const total = avatars.length;

function showAvatar(index) {
  avatars.forEach((avatar, i) => {
    avatar.classList.toggle("active", i === index);
  });
}

document.querySelector(".avatar-prev").addEventListener("click", () => {
  current = (current - 1 + total) % total;
  showAvatar(current);
});

document.querySelector(".avatar-next").addEventListener("click", () => {
  current = (current + 1) % total;
  showAvatar(current);
});

setInterval(() => {
  current = (current + 1) % total;
  showAvatar(current);
}, 6000);
