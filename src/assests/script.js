const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Generate glowing stars
const numStars = 200;
for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 0.5,
    alpha: Math.random(),
    glowSpeed: Math.random() * 0.02 + 0.005
  });
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  for (let star of stars) {
    star.alpha += star.glowSpeed;
    if (star.alpha <= 0 || star.alpha >= 1) star.glowSpeed = -star.glowSpeed;

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.shadowBlur = 10;
    ctx.shadowColor = "white";
    ctx.fill();
  }

  requestAnimationFrame(animateStars);
}

animateStars();
