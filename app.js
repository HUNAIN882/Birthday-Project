//  const countdownEl = document.getElementById('countdown');
//   const messageEl = document.getElementById('birthdayMessage');
//   const audio = document.getElementById('birthdayAudio');
//   const fireworksCanvas = document.getElementById('fireworks');
//   const ctx = fireworksCanvas.getContext('2d');

//   let count = 10;

//   // Resize canvas to full screen
//   function resizeCanvas() {
//     fireworksCanvas.width = window.innerWidth;
//     fireworksCanvas.height = window.innerHeight;
//   }
//   window.addEventListener('resize', resizeCanvas);
//   resizeCanvas();

//   // Countdown logic
//   function countdown() {
//     if (count === 0) {
//       countdownEl.style.display = 'none';
//       messageEl.style.display = 'block';
//       audio.play();
//       startFireworks();
//       return;
//     }
//     countdownEl.textContent = count;
//     count--;
//     setTimeout(countdown, 1000);
//   }

//   countdown();

//   // Fireworks animation code

//   const fireworks = [];
//   const particles = [];

//   function random(min, max) {
//     return Math.random() * (max - min) + min;
//   }

//   class Firework {
//     constructor() {
//       this.x = random(100, window.innerWidth - 100);
//       this.y = window.innerHeight;
//       this.targetY = random(100, window.innerHeight / 2);
//       this.speed = random(3, 7);
//       this.particlesCreated = false;
//       this.color = `hsl(${Math.floor(random(0, 360))}, 100%, 60%)`;
//     }
//     update() {
//       this.y -= this.speed;
//       if (this.y <= this.targetY && !this.particlesCreated) {
//         this.particlesCreated = true;
//         createParticles(this.x, this.y, this.color);
//         return true; // firework finished
//       }
//       return false;
//     }
//     draw() {
//       ctx.beginPath();
//       ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
//       ctx.fillStyle = this.color;
//       ctx.fill();
//     }
//   }

//   class Particle {
//     constructor(x, y, color) {
//       this.x = x;
//       this.y = y;
//       this.color = color;
//       this.radius = random(2, 4);
//       this.speedX = random(-5, 5);
//       this.speedY = random(-5, 5);
//       this.alpha = 1;
//       this.gravity = 0.05;
//       this.decay = random(0.01, 0.02);
//     }
//     update() {
//       this.speedY += this.gravity;
//       this.x += this.speedX;
//       this.y += this.speedY;
//       this.alpha -= this.decay;
//       if (this.alpha <= 0) this.alpha = 0;
//     }
//     draw() {
//       ctx.save();
//       ctx.globalAlpha = this.alpha;
//       ctx.beginPath();
//       ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//       ctx.fillStyle = this.color;
//       ctx.fill();
//       ctx.restore();
//     }
//   }

//   function createParticles(x, y, color) {
//     for (let i = 0; i < 30; i++) {
//       particles.push(new Particle(x, y, color));
//     }
//   }

//   let fireworksActive = false;
//   let fireworksStartTime = 0;

//   function startFireworks() {
//     fireworksActive = true;
//     fireworksStartTime = Date.now();
//     animate();
//   }

//   function animate() {
//     ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);

//     if (fireworksActive) {
//       // Add new firework randomly
//       if (Math.random() < 0.05) {
//         fireworks.push(new Firework());
//       }

//       // Update and draw fireworks
//       for (let i = fireworks.length - 1; i >= 0; i--) {
//         const done = fireworks[i].update();
//         fireworks[i].draw();
//         if (done) fireworks.splice(i, 1);
//       }

//       // Update and draw particles
//       for (let i = particles.length - 1; i >= 0; i--) {
//         particles[i].update();
//         particles[i].draw();
//         if (particles[i].alpha <= 0) {
//           particles.splice(i, 1);
//         }
//       }

//       // Stop fireworks after 3 minutes (180000 ms)
//       if (Date.now() - fireworksStartTime > 180000) {
//         fireworksActive = false;
//       }
//     }

//     requestAnimationFrame(animate);
//   }