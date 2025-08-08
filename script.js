const targetDate = new Date("August 15, 2025 00:00:00").getTime();

const countdown = document.getElementById("countdown");

const interval = setInterval(() => {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference < 0) {
    clearInterval(interval);
    countdown.innerHTML = "<p>🎉 Celebration Time! 🎉</p>";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}, 1000);
