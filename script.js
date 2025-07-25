function entrar() {
  const nick = document.getElementById("nick").value.trim();
  if (!nick) {
    alert("Por favor, digite seu nick!");
    return;
  }

  document.getElementById("login").classList.remove("show");
  document.getElementById("login").classList.add("hidden");

  const main = document.getElementById("main");
  main.classList.remove("hidden");
  main.classList.add("visible");

  enviarNotificacao(`Bem-vindo, ${nick}! 🔥`);
}

function gerarSensi() {
  const dpi = document.getElementById("dpi").value;
  if (!dpi || dpi < 100 || dpi > 2000) {
    alert("Digite uma DPI válida entre 100 e 2000.");
    return;
  }

  const geral = Math.floor(Math.random() * 200);
  const vermelho = Math.floor(Math.random() * 200);
  const x2 = Math.floor(Math.random() * 200);
  const x4 = Math.floor(Math.random() * 200);
  const awm = Math.floor(Math.random() * 200);

  document.getElementById("geral").textContent = geral;
  document.getElementById("vermelho").textContent = vermelho;
  document.getElementById("x2").textContent = x2;
  document.getElementById("x4").textContent = x4;
  document.getElementById("awm").textContent = awm;

  document.getElementById("resultado").classList.remove("hidden");
  enviarNotificacao("Sensibilidade gerada com sucesso! 🎯");
}

function copiarSensi() {
  const geral = document.getElementById("geral").textContent;
  const vermelho = document.getElementById("vermelho").textContent;
  const x2 = document.getElementById("x2").textContent;
  const x4 = document.getElementById("x4").textContent;
  const awm = document.getElementById("awm").textContent;

  const texto = `🎮 Stars Sensi FF:
Geral: ${geral}
Ponto Vermelho: ${vermelho}
2x: ${x2}
4x: ${x4}
AWM: ${awm}`;

  navigator.clipboard.writeText(texto).then(() => {
    alert("📋 Sensibilidade copiada!");
  });
}

function toggleTheme() {
  const html = document.documentElement;
  const atual = html.getAttribute("data-theme");
  html.setAttribute("data-theme", atual === "dark" ? "light" : "dark");
}

function enviarNotificacao(msg) {
  if (!("Notification" in window)) return;
  if (Notification.permission === "granted") {
    new Notification("Stars Sensi FF", { body: msg });
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((perm) => {
      if (perm === "granted") {
        new Notification("Stars Sensi FF", { body: msg });
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  Notification.requestPermission();
});
