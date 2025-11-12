// 🧠 Textos que alternam
const texts = [
  "M22 ⚽",
  "A felicidade é como uma borboleta que esperamos que venha ate nos",
  "Jesus é o caminho"
];

let textIndex = 0;
let charIndex = 0;
const typewriterElement = document.getElementById("typewriter");

function typeWriter() {
  if (charIndex < texts[textIndex].length) {
    typewriterElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 70);
  } else {
    setTimeout(eraseText, 1800);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typewriterElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 40);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeWriter, 400);
  }
}

window.onload = typeWriter;

// 🌀 Avatar Carousel
const avatars = document.querySelectorAll('.avatar');
let current = 0;
const nextBtn = document.querySelector('.avatar-next');
const prevBtn = document.querySelector('.avatar-prev');

function showAvatar(index) {
  avatars.forEach((img, i) => img.classList.toggle('active', i === index));
}
nextBtn.addEventListener('click', () => {
  current = (current + 1) % avatars.length;
  showAvatar(current);
});
prevBtn.addEventListener('click', () => {
  current = (current - 1 + avatars.length) % avatars.length;
  showAvatar(current);
});
setInterval(() => {
  current = (current + 1) % avatars.length;
  showAvatar(current);
}, 4000);

// 💨 Fundo com fumaça + faíscas
const canvas = document.getElementById("smoke");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + 20;
    this.size = Math.random() * 60 + 30;
    this.speedY = Math.random() * 1 + 0.3;
    this.opacity = Math.random() * 0.3 + 0.05;
    this.color = `rgba(200,200,200,${this.opacity})`;
  }
  update() {
    this.y -= this.speedY;
    this.size *= 0.995;
    if (this.size < 5) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + 30;
    this.size = Math.random() * 60 + 30;
  }
}

class Spark {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = (Math.random() - 0.5) * 6;
    this.speedY = (Math.random() - 0.5) * 6;
    this.life = 50 + Math.random() * 50;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life--;
    if (this.life <= 0) this.reset();
  }
  draw() {
    ctx.fillStyle = "rgba(255, 200, 50, 0.8)";
    ctx.shadowBlur = 15;
    ctx.shadowColor = "#ffae00";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.life = 50 + Math.random() * 50;
  }
}

const smokeParticles = Array.from({ length: 80 }, () => new Particle());
const sparks = Array.from({ length: 15 }, () => new Spark());

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  smokeParticles.forEach(p => { p.update(); p.draw(); });
  sparks.forEach(s => { s.update(); s.draw(); });
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});
