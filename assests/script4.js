// Glowing Stars Background
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let stars = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.8,
    alpha: Math.random(),
    speed: Math.random() * 0.02,
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  stars.forEach((s) => {
    s.alpha += s.speed;
    const glow = Math.abs(Math.sin(s.alpha)) * 1;
    ctx.globalAlpha = glow;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;
  requestAnimationFrame(animate);
}
animate();

// Redirect if clicking outside form
document.body.addEventListener("click", (e) => {
  const form = document.querySelector(".contact-form");
  if (!form.contains(e.target)) {
    window.location.href = "../index.html";
  }
});
