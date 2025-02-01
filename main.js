const firstContainer = document.querySelector('.body');
const secondContainer = document.querySelector('.secondContainer');

document.getElementById("surpriseBtn").addEventListener("click", function() {
  let song = document.getElementById("birthdaySong");
  song.play();

  createHearts();
  startConfetti();

  setTimeout(() => {
    firstContainer.style.display = 'none';
    secondContainer.style.display = 'block';
  }, 5000);
});

function createHearts() {
  let heartContainer = document.getElementById("hearts");
  for (let i = 0; i < 30; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.fontSize = Math.random() * 30 + 10 + "px";
    heart.style.opacity = Math.random();
    heartContainer.appendChild(heart);
  }
}

// Confetti effect
let confettiCanvas = document.getElementById("confetti");
let ctx = confettiCanvas.getContext("2d");
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

let confettiArray = [];
for (let i = 0; i < 100; i++) {
  confettiArray.push({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    color: ["#ff66b2", "#ff99cc", "#fad0c4"][Math.floor(Math.random() * 3)],
    size: Math.random() * 10 + 5,
    speed: Math.random() * 3 + 1
  });
}

function startConfetti() {
  function drawConfetti() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confettiArray.forEach((conf) => {
      ctx.fillStyle = conf.color;
      ctx.beginPath();
      ctx.arc(conf.x, conf.y, conf.size, 0, Math.PI * 2);
      ctx.fill();
      conf.y += conf.speed;
      if (conf.y > window.innerHeight) conf.y = 0;
    });
    requestAnimationFrame(drawConfetti);
  }
  drawConfetti();
}