
const urlParams = new URLSearchParams(window.location.search);


const userName = urlParams.get("name");

if (userName) {
  const greeting = document.getElementById("greeting");
  greeting.textContent = `Hi ${userName},`;
}

const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const mainQuestion = document.getElementById("question");
const mainResponse = document.getElementById("response");

const TRIGGER_DISTANCE = 80;
const PADDING = 20;

noButton.addEventListener("mouseover", (e) => {
  const rect = noButton.getBoundingClientRect();

  const btnCenterX = rect.left + rect.width / 2;
  const btnCenterY = rect.top + rect.height / 2;

  const dx = btnCenterX - e.clientX;
  const dy = btnCenterY - e.clientY;

  const distance = Math.hypot(dx, dy);

  // Only react when mouse gets close
  if (distance < TRIGGER_DISTANCE) {
    const maxX = window.innerWidth - rect.width - PADDING;
    const maxY = window.innerHeight - rect.height - PADDING;

    // move to a random safe position
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    noButton.style.position = `absolute`;
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
  }
});

noButton.addEventListener("click", (e) => {
  const rect = noButton.getBoundingClientRect();

  const btnCenterX = rect.left + rect.width / 2;
  const btnCenterY = rect.top + rect.height / 2;

  const dx = btnCenterX - e.clientX;
  const dy = btnCenterY - e.clientY;

  const distance = Math.hypot(dx, dy);

  // Only react when mouse gets close
  if (distance < TRIGGER_DISTANCE) {
    const maxX = window.innerWidth - rect.width - PADDING;
    const maxY = window.innerHeight - rect.height - PADDING;

    // move to a random safe position
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    noButton.style.position = `absolute`;
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
  }
});

const duration = 60 * 1000 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

yesButton.addEventListener("click", () => {
  mainQuestion.style.display = "none";
  mainResponse.style.display = "flex";
  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      }),
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      }),
    );
  }, 250);
});
